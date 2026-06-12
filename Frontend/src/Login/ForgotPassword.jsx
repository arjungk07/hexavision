import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from '../utils/api.js'
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    const toastId = toast.loading("Please wait...");

    try {
      const { data } = await api.post("/api/auth/send-otp", {
        email,
      });

      localStorage.setItem("email", email);

      toast.dismiss(toastId);

      toast.success(
        data.message || "OTP sent successfully",
        {
          duration: 1000,
        }
      );

      setTimeout(() => {
        navigate("/verify-otp");
      }, 2000);

    } catch (error) {
      toast.dismiss(toastId);

      toast.error(
        error.response?.data?.message ||
        "Failed to send OTP",
        {
          duration: 1000,
        }
      );
    }
  };

  return (
    <div className="relative overflow-hidden z-10 min-h-screen flex items-center justify-center">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6 w-95 text-white">
        <h2 className="text-xl font-bold mb-4 text-center">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-xl bg-white/20 outline-none mb-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 py-3 rounded-xl hover:bg-blue-600"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
}