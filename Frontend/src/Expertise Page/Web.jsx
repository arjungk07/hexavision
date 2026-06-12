import React from 'react'

import Navbar from '../Home Page/Navbar';
import Footer from '../Home Page/Footer';
import { FaDatabase } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import HeroTitle from '../Home Page/HeroTitle';
import Button from '../Home Page/Button';
import { TiLocationArrow } from "react-icons/ti";
import DevelopmentJourney from './DevelopmentJourney';
import ServiceCard from './ServiceCard';




const Web = () => {

    const webTechnologies = [
        {
            icon: <FaReact className="text-red-500" />,
            title: "React",
            desc: "A JavaScript library for building user interfaces with reusable components.",
            auraColor: "rgba(239, 68, 68, 0.15)", // Red 500
        },
        {
            icon: <FaAngular className="text-yellow-500" />,
            title: "Angular",
            desc: "A TypeScript-based framework for building scalable single-page applications.",
            auraColor: "rgba(234, 179, 8, 0.15)", // Yellow 500
        },
        {
            icon: <FaNodeJs className="text-emerald-500" />,
            title: "Node.js",
            desc: "A JavaScript runtime built on Chrome’s V8 engine for fast, scalable server-side applications.",
            auraColor: "rgba(16, 185, 129, 0.15)", // Emerald 500
        },
        {
            icon: <FaDatabase className="text-blue-500" />,
            title: "MySQL",
            desc: "Reliable database management system for scalable applications.",
            auraColor: "rgba(59, 130, 246, 0.15)", // Blue 500
        }
    ];
    return (
        <div id='web' className='relative overflow-hidden pb-10 z-20 bg-transparent px-4'>

            {/* aiml header section  */}

            <section className="relative min-h-[60vh] flex items-center justify-center mb-5 overflow-hidden bg-transparent ">

                <div className="max-w-7xl w-full relative z-10 text-center">

                    {/* Content Wrapper */}
                    <div className="flex flex-col items-center justify-center w-full">

                        {/* Title - The HeroTitle handles its own white-to-gradient logic */}
                        <div className="w-full mb-8">
                            {
                                <div className='hidden md:block'>
                                    <HeroTitle text='Our Web Services' containerClass="text-5xl md:text-7xl mb-1" />

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
                                Our Web Services
                            </p>
                        </div>

                        {/* Paragraph - White text with lower opacity for secondary feel */}
                        <p className="text-white text-justify md:text-center text-[16px] font-medium md:text-lg lg:text-xl mb-12 w-full md:max-w-2xl mx-auto leading-relaxed" >
                            Crafting digital excellence with 10+ successful projects delivered using cutting-edge technologies.
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

            {/* aiml business section */}

            <section
                className="pb-20"
                id="cloud-services"
            >
                {/* Section Heading */}
                <h2
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-5"
                    data-aos="fade-up"
                >
                    Our <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Technology</span> Stack
                </h2>

                <p
                    className="text-white text-sm font-medium mb-15 md:text-lg lg:text-xl mx-auto leading-relaxed  text-center"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    We leverage the power of modern web technologies to deliver robust solutions
                </p>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">

                    {webTechnologies.map((item, index) => (
                        <ServiceCard key={index} service={item} />
                    ))}

                </div>

            </section>


            {/* website journey section  */}

            <DevelopmentJourney />



        </div>
    )
}

export default Web