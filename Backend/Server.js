import express from 'express';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';
import session from 'express-session';
import authroutes from './routes/AuthRoutes.js'
import { createUsersTable } from './model/userModel.js';
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

await createUsersTable();



app.use('/api/auth/',authroutes);

// 2. Login Route
app.post('/api/login', (req, res) => {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
        return res.status(400).json({ message: "Fields cannot be empty" });
    }

    const query = validator.isEmail(identifier)
        ? 'SELECT * FROM user WHERE email = ?'
        : 'SELECT * FROM user WHERE phone = ?';

    db.execute(query, [identifier], async (err, results) => {
        if (err) {
            console.error("SQL ERROR:", err);
            // Added return here
            return res.status(500).json({ message: "Server error", detail: err.message });
        }

        if (results.length === 0) {
            // Added return here
            return res.status(404).json({ message: "User not found", action: "register" });
        }

        const user = results[0];

        try {
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                // Added return here
                return res.status(200).json({ message: "Login successful!", redirectTo: "/" });
            } else {
                // Added return here
                return res.status(401).json({ message: "Incorrect password", action: "register" });
            }
        } catch (bcryptErr) {
            console.error("Bcrypt Error:", bcryptErr);
            // Added return here
            return res.status(500).json({ message: "Error comparing passwords" });
        }
    });
});

// 3. Registration Route


app.post('/api/register', async (req, res) => {
    const { email, phone, password } = req.body;

    if (!email || !phone || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // 1. Check if user already exists
        const checkQuery = "SELECT * FROM user WHERE email = ? OR phone = ?";

        db.execute(checkQuery, [email, phone], async (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Database error" });
            }

            // 2. If user exists
            if (result.length > 0) {
                return res.status(409).json({
                    message: "Email or Phone already exists"
                });
            }

            // 3. If not exists → hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // 4. Insert user
            const insertQuery =
                "INSERT INTO user (email, phone, password) VALUES (?, ?, ?)";

            db.execute(insertQuery, [email, phone, hashedPassword], (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "Database error" });
                }

                return res.status(201).json({
                    message: "User registered successfully!"
                });
            });
        });

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
});

//otp sent to email

const otpStore = {};
const verifiedUsers = {};

const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmailOtp = async (email, otp) => {
    return transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset OTP",
        html: `
      <h2>Password Reset</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP expires soon.</p>
    `,
    });
};


// ================= SEND OTP =================
 app.post("/api/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required"
    });
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmail) {
    return res.status(400).json({
      message: "Invalid email"
    });
  }

  const otp = generateOtp();
  otpStore[email] = otp;

  try {
    await sendEmailOtp(email, otp);

    return res.json({
      message: "OTP sent to email"
    });
  } catch (error) {
    console.log("EMAIL ERROR:", error.message);

    return res.status(500).json({
      message: "Failed to send email OTP"
    });
  }
});


// ================= RESEND OTP =================
app.post("/api/resend-otp", async (req, res) => {
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
});


// ================= VERIFY OTP =================
app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({
      message: "Email and OTP required"
    });
  }

  const savedOtp = otpStore[email];

  if (!savedOtp) {
    return res.status(400).json({
      message: "OTP not found or expired"
    });
  }

  if (savedOtp !== otp) {
    return res.status(400).json({
      message: "Invalid OTP"
    });
  }

  // mark verified
  verifiedUsers[email] = true;

  // remove used otp
  delete otpStore[email];

  return res.json({
    message: "OTP verified successfully",redirectTo:"/reset-password"
  });
});


// ================= RESET PASSWORD =================
app.post("/api/reset-password", async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({
      message: "Email and new password required"
    });
  }

  // must verify otp first
  if (!verifiedUsers[email]) {
    return res.status(400).json({
      message: "OTP verification required"
    });
  }

  try {
    // update in mysql database

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const sql = "UPDATE user SET password = ? WHERE email = ?";
    await db.promise().query(sql, [hashedPassword, email]);

    // clear verified session
    delete verifiedUsers[email];

    

    return res.json({
      message: "Password updated successfully"
    });
  } catch (error) {
    console.log("RESET ERROR:", error.message);

    return res.status(500).json({
      message: "Database update failed"
    });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port http://localhost:${PORT}`));



