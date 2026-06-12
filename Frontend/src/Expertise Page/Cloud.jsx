import React from 'react';
import { FaCloud, FaProjectDiagram, FaChartBar } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { TiLocationArrow } from "react-icons/ti";
import Button from "../Home Page/Button";
import HeroTitle from "../Home Page/HeroTitle";
import ServiceCard from "./ServiceCard"; // Ensure path is correct
const Cloud = () => {

    const cloudSolution = [
        {
            icon: <FaCloud className="text-red-500" />,
            title: "Cloud Migration",
            points: ["Assessment & Planning", "Data Migration", "Application Refactoring"],
            desc: "Seamless transition of your applications and data to the cloud.",
            auraColor: "rgba(239, 68, 68, 0.15)",
        },
        {
            icon: <FaProjectDiagram className="text-yellow-600" />,
            title: "Cloud Architecture",
            points: ["High Availability", "Security Best Practices", "Cost Optimization"],
            desc: "Design and implement optimized cloud infrastructure.",
            auraColor: "rgba(202, 138, 4, 0.12)",
        },
        {
            icon: <MdMiscellaneousServices className="text-emerald-500" />,
            title: "Managed Services",
            points: ["Proactive Monitoring", "Performance Tuning", "Security Patching"],
            desc: "24/7 monitoring and optimization of your cloud environment.",
            auraColor: "rgba(6, 182, 212, 0.15)",
        }
    ];

    const cloudBenifit = [
        {
            icon: <FaChartBar className="text-red-500" />,
            title: "Scalability",
            desc: "Scale your applications up or down based on demand.",
            auraColor: "rgba(239, 68, 68, 0.15)",
        },
        {
            icon: <CiLock className="text-yellow-500" />,
            title: "Security",
            desc: "Enterprise-grade security to protect your data.",
            auraColor: "rgba(202, 138, 4, 0.12)",
        },
        {
            icon: <BsCurrencyDollar className="text-emerald-500" />,
            title: "Cost Savings",
            desc: "Reduce infrastructure costs with pay-as-you-go pricing.",
            auraColor: "rgba(6, 182, 212, 0.15)",
        },
        {
            icon: <AiFillThunderbolt className="text-blue-500" />,
            title: "Performance",
            desc: "High-performance infrastructure for demanding applications.",
            auraColor: "rgba(59, 130, 246, 0.15)",
        }
    ];

    return (
        <div id='cloud' >
            <div className="relative overflow-hidden z-20 bg-transparent" >
                {/* ... Header Section ... */}
                <section className="relative min-h-[60vh] flex items-center mb-10 justify-center  overflow-hidden bg-transparent ">

                    <div className="max-w-7xl w-full relative z-10 text-center">

                        {/* Content Wrapper */}
                        <div className="flex flex-col items-center justify-center w-full">

                            {/* Title - The HeroTitle handles its own white-to-gradient logic */}
                            <div className="w-full mb-8">
                                {
                                    <div className='hidden md:block'>
                                        <HeroTitle text='Transform Business' containerClass="text-5xl md:text-7xl mb-1" />
                                        <HeroTitle text='with Cloud Solutions' containerClass="text-5xl md:text-7xl " />

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
                                    Transform Business with Cloud Solutions
                                </p>
                            </div>

                            {/* Paragraph - White text with lower opacity for secondary feel */}
                            <p className="text-white text-justify md:text-center font-medium text-[15px] md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                                We deliver secure, scalable cloud infrastructure and high-performance
                                environments to accelerate your digital transformation journey.
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

                {/* Services Section */}
                <section className="pb-20 px-6 lg:px-20">
                    <h2 className="text-3xl font-bold text-center mb-14 text-white">Our Cloud Services</h2>
                    <div className="flex flex-wrap justify-center shrink gap-10 max-w-7xl mx-auto ">
                        {cloudSolution.map((item, index) => (
                            // FIXED: Pass the object directly to the 'service' prop
                            <ServiceCard key={index} service={item} index={index} />
                        ))}
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="pb-20 px-6">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">Cloud Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                        {cloudBenifit.map((item, index) => (
                            <ServiceCard key={index} service={item} index={index} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Cloud;