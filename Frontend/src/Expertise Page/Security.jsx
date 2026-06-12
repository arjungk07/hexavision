import React from 'react'
import Navbar from '../Home Page/Navbar';
import Footer from '../Home Page/Footer';
import { FaRobot } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { FaDesktop } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import HeroTitle from "../Home Page/HeroTitle";
import Button from "../Home Page/Button";
import { TiLocationArrow } from "react-icons/ti";
import ServiceCard from "./ServiceCard";









const Aiml = () => {


    const cyberservice = [
        {
            icon: <FaSearch className='text-red-500' />,
            title: "Vulnerability Assessment",
            desc: "Identify weaknesses in your systems and network before attackers do with our comprehensive assessments.",
            auraColor: "rgba(239, 68, 68, 0.15)", // Red 500
        },
        {
            icon: <FaUserSecret className='text-yellow-500' />,
            title: "Penetration Testing",
            desc: "Simulate real-world cyber attacks to discover critical vulnerabilities and enhance your defenses.",
            auraColor: "rgba(234, 179, 8, 0.15)", // Yellow 500
        },
        {
            icon: <FaEye className='text-emerald-500' />,
            title: "Threat Monitoring",
            desc: "24/7 monitoring and alerting system to detect and respond to threats before damage occurs.",
            auraColor: "rgba(16, 185, 129, 0.15)", // Emerald 500
        },
        {
            icon: <FaNetworkWired className='text-blue-500' />,
            title: "Network Security",
            desc: "Secure your internal and external network with robust firewall configurations and defense strategies.",
            auraColor: "rgba(59, 130, 246, 0.15)", // Blue 500
        },
        {
            icon: <FaDesktop className='text-cyan-500' />,
            title: "Endpoint Protection",
            desc: "Defend laptops, desktops, and mobile devices from ransomware, phishing, and malware attacks.",
            auraColor: "rgba(6, 182, 212, 0.15)", // Cyan 500
        },
        {
            icon: <FaHandshakeAngle className='text-purple-500' />,
            title: "Security Consultation",
            desc: "Get expert guidance on compliance, cyber policies, and building a proactive cyber defense strategy.",
            auraColor: "rgba(168, 85, 247, 0.15)", // Purple 500
        }
    ];
    return (
        <div id='security' className='relative overflow-hidden z-20 bg-transparent px-4'>

            {/* cloud header section  */}
            <section className="relative min-h-[50vh] flex items-center justify-center mb-5  overflow-hidde bg-transparent ">

                <div className="max-w-7xl w-full relative z-10 text-center">

                    {/* Content Wrapper */}
                    <div className="flex flex-col items-center justify-center w-full">

                        {/* Title - The HeroTitle handles its own white-to-gradient logic */}
                        <div className="w-full mb-8">
                            {
                                <div className='hidden md:block'>
                                    <HeroTitle text='Cyber Security Services' containerClass="text-5xl md:text-7xl mb-1" />

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
                                Cyber Security Services
                            </p>
                        </div>

                        {/* Paragraph - White text with lower opacity for secondary feel */}
                        <p className="text-white text-justify md:text-center text-md font-medium md:text-lg lg:text-xl mb-12 w-full md:max-w-2xl mx-auto leading-relaxed">
                            Protect your business with Hexavision Technologies robust and reliable cyber security solutions.
                        </p>

                        {/* Button Implementation - Always centered */}
                        <div className="flex justify-center w-full">
                            <Button
                                id="Get Touch"
                                title="Get Started"
                                rightIcon={<TiLocationArrow className="text-2xl" />}
                                containerClass="bg-gradient-to-r from-cyan-500 to-blue-600 flex justify-center items-center gap-3 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all cursor-pointer"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* cloud services section */}

            <section className="pb-20" id="cloud-services">

                <h2
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
                    data-aos="fade-up"
                >
                    <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Cyber Security</span> Services
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

                    {cyberservice.map((item, index) => (
                        <ServiceCard key={index} service={item} />
                    ))}

                </div>

            </section>





        </div>
    )
}

export default Aiml