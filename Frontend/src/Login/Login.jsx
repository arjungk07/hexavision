import React, { useState } from 'react';
import { Mail, Lock, Smartphone, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {data} from '../assets/assets.js'
import api from '../utils/api.js'

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.6429 10.2273C19.6429 9.51705 19.5795 8.83523 19.4545 8.18182H10V12.0511H15.4034C15.1705 13.3068 14.4659 14.3693 13.4034 15.0795V17.5852H16.6429C18.5398 15.8352 19.6429 13.2727 19.6429 10.2273Z" fill="#4285F4" />
    <path d="M10 20C12.7 20 14.9659 19.1023 16.6429 17.5852L13.4034 15.0795C12.5057 15.6818 11.358 16.0398 10 16.0398C7.39205 16.0398 5.18182 14.2841 4.39205 11.9148H1.05682V14.4943C2.70455 17.767 6.08523 20 10 20Z" fill="#34A853" />
    <path d="M4.39205 11.9148C4.19318 11.3068 4.07955 10.6591 4.07955 10C4.07955 9.34091 4.19318 8.69318 4.39205 8.08523V5.50568H1.05682C0.386364 6.85227 0 8.38636 0 10C0 11.6136 0.386364 13.1477 1.05682 14.4943L4.39205 11.9148Z" fill="#FBBC05" />
    <path d="M10 3.96023C11.4716 3.96023 12.7898 4.46591 13.8295 5.46023L16.7102 2.57955C14.9602 0.982955 12.6932 0 10 0C6.08523 0 2.70455 2.23295 1.05682 5.50568L4.39205 8.08523C5.18182 5.71591 7.39205 3.96023 10 3.96023Z" fill="#EA4335" />
  </svg>
);

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState(""); // Added password state
  const [showPassword, setShowPassword] = useState(false); // Fix for Eye icon
  const [identifierType, setIdentifierType] = useState("email");

  const handleIdentifierChange = (e) => {
    const value = e.target.value;
    setIdentifier(value);

    // Logic to switch icons without breaking cursor focus
    const phoneRegex = /^[\d\s\-\+\(\)]*$/;
    if (phoneRegex.test(value) && value.length > 5 && !value.includes("@")) {
      setIdentifierType("phone");
    } else {
      setIdentifierType("email");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/api/auth/login", {
        identifier,
        password,
      });

      if (data.success) {

        toast.success(data.message || "Login successful!", {
          duration: 2000,
        });

      }

      setTimeout(() => {
          window.location.href = data.redirectTo || "/";
        }, 2000);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Server error",
        {
          duration: 2000,
        }
      );

      console.error(error);
    }
  };


  return (
    <div className="relative overflow-hidden z-20 min-h-screen w-full flex items-center justify-center  p-4 md:p-8 antialiased">
      <div className="w-full max-w-110 h-full lg:h-[80vh] min-h-162.5 flex flex-col justify-center
                      bg-white/15 backdrop-blur-xl border border-white/20 rounded-[2.5rem] 
                      p-8 md:p-12 shadow-2xl transition-all duration-500">

        <div className="text-center mb-8 shrink-0">
          <div className="w-30 h-30 mx-auto my-2 brightness-200 rounded-2xl flex items-center justify-center ">
            <img src={data.hexalogo} alt="logo" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
          <p className="text-white/70 text-sm mt-1">Sign in to continue to Hexavision</p>
        </div>

        {/* handleSubmit moved to form tag */}
        <form onSubmit={handleSubmit} className="space-y-5  h-fit">
          <div className="relative group w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white group-focus-within:text-white transition-colors duration-200">
              {identifierType === 'email' ? <Mail size={18} /> : <Smartphone size={18} />}
            </div>
            <input
              type="text"
              value={identifier}
              onChange={handleIdentifierChange}
              placeholder="Email or Phone Number"
              className="w-full pl-11 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all"
            />
          </div>

          <div className="relative group w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/70 group-focus-within:text-white transition-colors duration-200">
              <Lock size={18} strokeWidth={2} />
            </div>
            <input
              type={showPassword ? "text" : "password"} // Dynamic type
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="flex justify-end">
            <Link to={'/forget'} className="text-xs font-medium text-white/80 hover:text-white transition-colors">Forgot password?</Link>
          </div>

          <button type="submit" className="w-full bg-white text-blue-600 font-bold py-4 rounded-2xl shadow-xl hover:bg-opacity-90 hover:-translate-y-0.5 transition-all active:scale-95">
            Sign In
          </button>
        </form>

        <div className="mt-4">

          <p className="text-center text-white/70 text-sm">
            New here ?{' '}
            <Link to="/register" className="font-bold text-white hover:underline transition-all">Register first</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;