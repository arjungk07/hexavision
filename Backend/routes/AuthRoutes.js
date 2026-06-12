import express from 'express';
const router = express.Router();
import { login, register, reSendOtp, resetPassword, sendOtp, verifyOtp } from '../controller/AuthController.js';

router.post('/login',login);
router.post('/register',register);
router.post('/send-otp',sendOtp);
router.post('/resend-otp',reSendOtp);
router.post('/verify-otp',verifyOtp);
router.post('/reset-password',resetPassword)

export default router;