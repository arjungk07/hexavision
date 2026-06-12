import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import api from "../utils/api";


export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleReset = async () => {
    if (!newPassword || !confirmPassword) {
      toast.info("Fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.info("Passwords do not match");
      return;
    }

    try {
      const { data } = await api.post(
        "/api/auth/reset-password",
        {
          email,
          newPassword,
        }
      );

      toast.success(
        data.message || "Password reset successful"
      );

      localStorage.removeItem("email");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );

      console.error(error);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <div className="relative overflow-hidden z-10 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-95 rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Reset Password
        </h2>

        {/* NEW PASSWORD */}
        <div className="relative mb-4">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-100 outline-none pr-12"
          />

          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative mb-6">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-100 outline-none pr-12"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-3 top-3 text-gray-500"
          >
            {showConfirmPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>

        <button
          onClick={handleReset}
          className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}
