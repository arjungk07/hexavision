import React from 'react'
import Navbar from '../Home Page/Navbar';
import Footer from '../Home Page/Footer';
import { FaRobot } from "react-icons/fa6";
import { FaEye, FaMobile } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";

import { MdMobileFriendly } from "react-icons/md";

import { GiPaintBrush } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { VscDebug } from "react-icons/vsc";
import { FaUserCheck } from "react-icons/fa";
import { MdRecycling } from "react-icons/md";
import { FaDrumstickBite } from "react-icons/fa6";

import HeroTitle from "../Home Page/HeroTitle";
import Button from "../Home Page/Button";
import { TiLocationArrow } from "react-icons/ti";
import ServiceCard from './ServiceCard';





const Mobile = () => {

    const Flutterdevelopment = [
        {
            icon: <FaLightbulb className="text-red-500" />,
            title: "1. Discovery",
            desc: "We start by understanding your business needs, target audience, and project requirements to create a solid foundation.",
            auraColor: "rgba(239, 68, 68, 0.15)", // Red 500
        },
        {
            icon: <GiPaintBrush className="text-yellow-500" />,
            title: "2. UI/UX Design",
            desc: "Our designers create intuitive, beautiful interfaces that provide exceptional user experiences across both platforms.",
            auraColor: "rgba(234, 179, 8, 0.15)", // Yellow 500
        },
        {
            icon: <FaCode className="text-emerald-500" />,
            title: "3. Development",
            desc: "We build your app using Flutter's powerful framework, ensuring native performance on both iOS and Android.",
            auraColor: "rgba(16, 185, 129, 0.15)", // Emerald 500
        },
        {
            icon: <VscDebug className="text-blue-500" />,
            title: "4. Testing",
            desc: "Rigorous testing across devices and platforms ensures your app performs flawlessly in all scenarios.",
            auraColor: "rgba(59, 130, 246, 0.15)", // Blue 500
        },
        {
            icon: <FaRocket className="text-cyan-500" />,
            title: "5. Deployment",
            desc: "We handle the complete app store submission process for both Google Play and Apple App Store.",
            auraColor: "rgba(6, 182, 212, 0.15)", // Cyan 500
        }
    ];

    const Flutter = [
        {
            icon: <FaUserCheck className="text-red-500" />,
            title: "Attendance App",
            desc: "Manage attendance smartly with real-time logs, biometric sync, and cloud support.",
            auraColor: "rgba(239, 68, 68, 0.15)", // Red 500
        },
        {
            icon: <MdRecycling className="text-yellow-500" />,
            title: "Food Waste Reducing System",
            desc: "On-demand food ordering with live tracking, vendor listing, and seamless payment options.",
            auraColor: "rgba(234, 179, 8, 0.15)", // Yellow 500
        },
        {
            icon: <FaDrumstickBite className="text-emerald-500" />,
            title: "Meat Mate App",
            desc: "An online meat delivery platform offering fresh cuts, easy ordering, and doorstep delivery with real-time tracking.",
            auraColor: "rgba(16, 185, 129, 0.15)", // Emerald 500
        }
    ];

    const flutterTechStack = [
        {
            img: "https://avatars.githubusercontent.com/u/14101776?s=280&v=4",
            title: "Flutter",
            tag: "Cross-platform framework",
            desc: "Building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
            auraColor: "rgba(239, 68, 68, 0.15)", // Red 500
        },
        {
            img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
            title: "Firebase",
            tag: "Backend services",
            desc: "Comprehensive app development platform with authentication, database, storage, and analytics.",
            auraColor: "rgba(234, 179, 8, 0.15)", // Yellow 500
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            title: "React Native",
            tag: "Cross-platform framework",
            desc: "Creating native mobile apps using React with access to platform APIs and native components.",
            auraColor: "rgba(16, 185, 129, 0.15)", // Emerald 500
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
            title: "Laravel",
            tag: "PHP framework",
            desc: "Elegant backend development with expressive syntax and robust features for web applications.",
            auraColor: "rgba(59, 130, 246, 0.15)", // Blue 500
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            title: "Node.js",
            tag: "JavaScript runtime",
            desc: "Building scalable server-side applications with JavaScript and a vast ecosystem of packages.",
            auraColor: "rgba(6, 182, 212, 0.15)", // Cyan 500
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
            title: "MySQL",
            tag: "Relational database",
            desc: "Powerful relational database management system for structured data storage and retrieval.",
            auraColor: "rgba(168, 85, 247, 0.15)", // Purple 500
        },
    ];

    return (
        <div className='relative overflow-hidden  z-20 bg-transparent px-4' id='mobile'>

            {/* mobile header section  */}

            <section className="relative min-h-[60vh] flex items-center justify-center mb-5 overflow-hidden bg-transparent ">

                <div className="max-w-7xl w-full relative z-10 text-center">

                    {/* Content Wrapper */}
                    <div className="flex flex-col items-center justify-center w-full">

                        {/* Title - The HeroTitle handles its own white-to-gradient logic */}
                        <div className="w-full mb-8">
                            {
                                <div className='hidden md:block'>
                                    <HeroTitle text='Flutter Mobile App Specialists' containerClass="text-5xl md:text-7xl mb-1" />

                                </div>
                            }
                            <p
                                className="
    md:hidden text-3xl font-bold 
    bg-linear-to-r from-white via-blue-400 to-white
    bg-size-[200%_100%]
    bg-clip-text text-transparent
    animate-[shimmer_3s_linear_infinite]
  "
                            >
                                Flutter Mobile App Specialists
                            </p>
                        </div>

                        {/* Paragraph - White text with lower opacity for secondary feel */}
                        <p className="text-white text-justify md:text-center text-md font-medium md:text-lg lg:text-xl mb-12 w-full md:max-w-2xl mx-auto leading-relaxed tracking-tight">
                            We build beautiful, high-performance cross-platform mobile applications with Flutter that run seamlessly on both iOS and Android.
                        </p>

                        {/* Button Implementation - Always centered */}
                        <div className="flex justify-center w-full">
                            <Button
                                id="Get Touch"
                                title="Get in Touch"
                                rightIcon={<TiLocationArrow className="text-2xl" />}
                                containerClass="bg-gradient-to-r from-cyan-500 to-blue-600 flex justify-center items-center gap-3 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all cursor-pointer"
                            />
                        </div>

                    </div>

                </div>
            </section>


            {/* mobile services section */}
            <section
                className="pb-20"
                id="aiml-services"
            >
                {/* Section Title */}
                <h2
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
                    data-aos="fade-up"
                >
                    Our <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Flutter Development</span> process
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

                    {Flutterdevelopment.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}

                </div>

            </section>

            {/* our Flutter apps section */}

            <section
                className="flex flex-col items-center justify-center pb-20"
            >
                {/* Section Title */}
                <h2
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
                    data-aos="fade-up"
                >
                    Our <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Flutter</span> Apps
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {Flutter.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}

                </div>

            </section>

            <section
                className="pb-20 flex flex-col items-center justify-center"
            >
                {/* Section Title */}
                <h2
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-5"
                    data-aos="fade-up"
                >
                    <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Mobile Development</span> Expertise
                </h2>

                <p
                    className="text-white text-base mb-15 md:text-lg lg:text-xl mx-auto leading-relaxed px-4 text-center"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    Specializing in cross-platform mobile solutions with cutting-edge technologies                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {flutterTechStack.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}

                </div>

            </section>







        </div>
    )
}

export default Mobile