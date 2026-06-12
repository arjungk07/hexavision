export const otpStore = {};
export const verifiedUsers = {};

export const generateOtp = () => {
  return Math.floor(
    100000 + Math.random() * 900000
  ).toString();
};