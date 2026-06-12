import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../utils/api";

export default function VerifyOtp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

 const handleVerify = async () => {
  const finalOtp = otp.join("");

  if (finalOtp.length !== 6) {
    toast.info("Please enter a valid 6-digit OTP");
    return;
  }

  try {
    const { data } = await api.post("/api/auth/verify-otp", {
      email,
      otp: finalOtp,
    });

    toast.success(data.message || "OTP verified successfully");

    setTimeout(() => {
      navigate("/reset-password");
    }, 1000);

  } catch (error) {
    toast.error(
      error.response?.data?.message || "OTP verification failed"
    );
  }
};

 const handleResend = async () => {
  const loadingToast = toast.loading("please wait!")
  try {
    const { data } = await api.post("/api/auth/resend-otp", {
      email,
    });

    toast.dismiss(loadingToast);

    toast.success(
      data.message || "OTP resent successfully"
    );

  } catch (error) {
    toast.dismiss(loadingToast);
    toast.error(
      error.response?.data?.message || "OTP resend failed"
    );
  }
};

  return (
    <div className="relative overflow-hidden z-10 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-95 rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-3">Enter OTP</h2>

        <p className="text-center text-gray-500 text-sm mb-6">
          OTP sent to <br />
          <span className="text-blue-500">{email}</span>
        </p>

        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e,index)}
              className="w-12 h-12 rounded-full bg-gray-100 text-center text-xl font-bold outline-none"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600"
        >
          Continue
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Didn’t get OTP?{" "}
          <Link to="/verify-otp"
            onClick={handleResend}
            className="text-blue-500 cursor-pointer underline"
          >
            Resend OTP
          </Link>
        </p>
      </div>
    </div>
  );
}