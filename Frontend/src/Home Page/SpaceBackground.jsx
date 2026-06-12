import React, { useState, useEffect, useMemo, useContext } from 'react';
import { motion, useAnimation, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import spaceVideo from '../assets/images/earthrotate.mp4';
import moon from '../assets/images/moon.png';
import { AppContext } from './Context';

const VideoLayer = () => {
    return (
        <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={spaceVideo} type="video/mp4" />
            </video>
        </div>
    );
};

const ShootingStar = () => {
    const controls = useAnimation();
    useEffect(() => {
        const triggerStar = async () => {
            await controls.start({
                x: [0, -800],
                y: [0, 800],
                opacity: [0, 1, 0],
                transition: { duration: 1.2, ease: "linear" }
            });
            setTimeout(triggerStar, Math.random() * 5000 + 3000);
        };
        triggerStar();
    }, [controls]);

    const shootingStars = Array.from({ length: 5 }, (_, i) => ({
        // from (length, map function). (value,index) the value is _ and index is i . _ means i donot care about value
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 1,
        duration: 1 + Math.random() * 2,
    }));



    return (
        <>
            {shootingStars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute w-40 h-px bg-linear-to-r from-transparent via-white to-transparent -rotate-45 z-50"
                    style={{
                        top: star.top,
                        left: star.left,
                    }}
                    initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                    }}
                    animate={{
                        x: -300,
                        y: 300,
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                    }}
                />
            ))}
        </>
    );
};

const SpaceBackground = () => {

    const {useIsMobile} = useContext(AppContext);

    const [pulse, setPulse] = useState(false);

    // 1. SCROLL
    const { scrollY } = useScroll();

    const isMobile = useIsMobile();

    // 2. MOUSE VALUES
    const mX = useMotionValue(0);
    const mY = useMotionValue(0);

    useEffect(() => {
        if (isMobile) return;

        const handleGlobalMouse = (e) => {
            mX.set(e.clientX);
            mY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleGlobalMouse);

        return () => {
            window.removeEventListener("mousemove", handleGlobalMouse);
        };
    }, [mX,mY]);

    // 3. MOON MOVEMENT
    const moonX = useSpring(
        useTransform(mX, [0, window.innerWidth || 1920], [-600, 100]),
        { stiffness: 60, damping: 20, mass: 1 }
    );
    const moonY = useSpring(
        useTransform(mY, [0, window.innerHeight || 1080], [-500, 500]),
        { stiffness: 60, damping: 20, mass: 1 }
    );


    useEffect(() => {
        const interval = setInterval(() => {
            setPulse(true);
            setTimeout(() => setPulse(false), 1500);
        }, 10000);
        return () => clearInterval(interval);
    }, []);



    return (
        <motion.div
            style={{ zIndex: 1 }}
            className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-auto bg-black"
        >

            {/* 2. TRANSPARENT VIDEO */}
            <VideoLayer />

            <ShootingStar />

            {/* 3. THE MOON (WITH PARALLAX) */}
            <motion.div
                style={{
                    right: '5%',
                    top: '23%',
                    x: moonX,
                    y: moonY,
                    position: 'absolute'
                }}
                className="hidden md:block w-70 h-70 z-10 mix-blend-screen cursor-pointer pointer-events-auto"
            >
                <motion.img
                    src={moon}
                    alt="Moon"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 100,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="w-full h-full object-cover rounded-full z-9999"
                />
            </motion.div>

        </motion.div>
    );
};

export default SpaceBackground;