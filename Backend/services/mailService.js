import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmailOtp = async (email, otp) => {
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset OTP",
    html: `
      <h2>Password Reset OTP</h2>
      <h1>${otp}</h1>
      <p>This OTP expires soon.</p>
    `,
  });
};