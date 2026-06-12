import React, { useState } from 'react';
import { Mail, Lock, Smartphone, UserPlus, Eye, EyeOff } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import api from '../utils/api'
import {data} from '../assets/assets.js'
console.log(api)

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: ""
  });


  const [showPassword, setShowPassword] = useState(false); // Fix for Eye icon

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Creating account...");

    try {
      const { data } = await api.post("/api/auth/register", formData);

      toast.dismiss(loadingToast);

      toast.success(
        data.message || "Account created successfully!");

      setTimeout(() => {
        window.location.href = "/#/login";
      }, 2000);

    } catch (error) {
      toast.dismiss(loadingToast)
      toast.error(
        error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="relative overflow-hidden z-20 min-h-screen w-full flex items-center justify-center p-4">
      <ToastContainer position="top-center" />

      <div className="w-full max-w-110 bg-white/15 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-5  lg:p-10 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-28 h-28 mx-auto my-2 brightness-200 rounded-2xl flex items-center justify-center ">
            <img src={data.hexalogo} alt="logo" />
          </div>
          <h1 className="text-3xl font-bold text-white">Join Hexavision</h1>
          <p className="text-white/70 mt-2">Create your secure account</p>
        </div>

        <form className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={18} />
            <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required
              className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 outline-none" />
          </div>

          <div className="relative">
            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={18} />
            <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} required
              className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 outline-none" />
          </div>

          <div className="relative group w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/70 group-focus-within:text-white transition-colors duration-200">
              <Lock size={18} strokeWidth={2} />
            </div>
            <input
              name="password"
              type={showPassword ? "text" : "password"} // Dynamic type
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Password"
              className="w-full pl-11 pr-12 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle visibility
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button type="submit" onClick={handleSubmit} className="w-full bg-white text-blue-600 font-bold py-4 rounded-2xl hover:bg-opacity-90 transition-all active:scale-95 shadow-lg">
            Create Account
          </button>
        </form>

        <p className="text-center text-white/70 mt-8 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="ps-1 text-white font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;