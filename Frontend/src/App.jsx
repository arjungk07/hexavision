import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from 'framer-motion';

// Layout & Background
import Header from './Home Page/Header';
import SpaceBackground from './Home Page/SpaceBackground';

// Pages
import Login from './Login/Login';
import Register from './Login/Register';
import ForgotPassword from './Login/ForgotPassword';
import VerifyOtp from './Login/VerifyOtp';
import ResetPassword from './Login/ResetPassword';
import About from './About Page/About';
import Expertise from './Expertise Page/Expertise';
import Portfolio from './Portfolio Pages/Portfolio';
import Contact from './Contact Page/Contact';

// AOS animation 
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from './assets/assets.js';

// Simple Loading Component 
const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-cover bg-center  overflow-hidden"
            style={{
                backgroundImage: `url(${data.loadingBg})`
            }}
        >


            {/* 3. CENTRAL PLANET & ROTATING RING */}
            <div className="relative flex items-center justify-center">

                {/* Glowing Planet */}
                <div className="w-30 h-30 mx-auto my-2  rounded-2xl flex items-center justify-center ">
                    <img src={data.hexalogo} alt="logo" />
                </div>

                {/* Neon Rotating Ring */}
                <motion.div
                    className="absolute w-40 h-40 border-[3px] border-transparent border-t-cyan-400 border-r-blue-400 rounded-full z-30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* 4. LOADING BAR & TEXT */}
            <div className="mt-16 w-64 text-center">
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-blue-400 text-xs tracking-[0.3em] font-bold uppercase mb-4"
                >
                    Initializing Systems...
                </motion.p>

                {/* Progress Bar Container */}
                <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                        className="h-full bg-linear-to-r from-blue-600 via-cyan-400 to-white/20 shadow-[0_0_15px_#FCC408]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

            </div>

        </div>
    );
};

function App() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Initialize AOS
        AOS.init({
            duration: 500,
            once: true,
            easing: "ease-in-out",
        });

    }, []);

    // load all assets
    useEffect(() => {
        
        const assets = Object.values(data);

        console.log(assets);

        let loaded = 0;

        const assetLoaded = () => {
            loaded++;

            if (loaded === assets.length) {
                setIsLoading(false);
            }
        };

        assets.forEach((src) => {
            if (src.endsWith(".mp4")) {
                const video = document.createElement("video");

                video.onloadeddata = assetLoaded;
                video.onerror = assetLoaded;
                video.src = src;
            } else {
                const img = new Image();

                img.onload = assetLoaded;
                img.onerror = assetLoaded;
                img.src = src;
            }
        });
    }, []);

    // If still loading, only show the LoadingScreen
    if (isLoading) {
        return <LoadingScreen />;
    }

    const isMobile = window.innerWidth < 768;

    // Once loading is false, show the actual app
    return (
        <HashRouter>
            {/* The Global Background */}
            <ToastContainer position="top-center" reverseOrder={false} autoClose={3000} />
            <SpaceBackground />

            {/* Main wrapper */}
            <main className="relative w-full min-h-screen bg-black">
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/forget' element={<ForgotPassword />} />
                    <Route path='/verify-otp' element={<VerifyOtp />} />
                    <Route path='/reset-password' element={<ResetPassword />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/expertise" element={<Expertise />} />
                    <Route path='/services' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>
        </HashRouter>
    );
}

export default App;