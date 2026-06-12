import db from "../config/db.js";
import bcrypt from "bcryptjs";
import validator from "validator";
import { sendEmailOtp } from "../services/mailService.js";
import {
  otpStore,
  verifiedUsers,
  generateOtp,
} from "../utils/otpStore.js";

export const register = async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    if (!email || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const [users] = await db.execute(
      "SELECT id FROM users WHERE email = ? OR phone = ?",
      [email, phone]
    );

    if (users.length > 0) {
      return res.status(409).json({
        message: "Email or Phone already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const [result] = await db.execute(
      "INSERT INTO users(email, phone, password) VALUES (?, ?, ?)",
      [email, phone, hashedPassword]
    );

    return res.status(201).json({
      success: true,
      userId: result.insertId,
      message: "User registered successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({
        message: "Fields cannot be empty",
      });
    }

    const query = validator.isEmail(identifier)
      ? "SELECT * FROM users WHERE email = ?"
      : "SELECT * FROM users WHERE phone = ?";

    const [users] = await db.execute(
      query,
      [identifier]
    );

    if (users.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = users[0];

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};


export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    const otp = generateOtp();

    otpStore[email] = otp;

    await sendEmailOtp(email, otp);

    return res.status(200).json({
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to send OTP",
    });
  }
};

export const reSendOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required"
    });
  }

  const otp = generateOtp();
  otpStore[email] = otp;

  try {
    await sendEmailOtp(email, otp);

    return res.json({
      message: "OTP resent successfully"
    });
  } catch (error) {
    console.log("EMAIL ERROR:", error.message);

    return res.status(500).json({
      message: "Failed to resend email OTP"
    });
  }
};

export const verifyOtp = (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] !== otp) {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }

  verifiedUsers[email] = true;

  delete otpStore[email];

  return res.status(200).json({
    message: "OTP verified successfully",
  });
};

export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!verifiedUsers[email]) {
      return res.status(403).json({
        message: "OTP verification required",
      });
    }

    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    await db.execute(
      "UPDATE users SET password = ? WHERE email = ?",
      [hashedPassword, email]
    );

    delete verifiedUsers[email];

    return res.status(200).json({
      message: "Password updated successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to update password",
    });
  }
};

export default {sendOtp, reSendOtp, verifyOtp, resetPassword, login, register } 
