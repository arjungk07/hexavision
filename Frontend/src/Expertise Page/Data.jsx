import React from 'react'
import Navbar from '../Home Page/Navbar';
import Footer from '../Home Page/Footer';
import { FaBrain, FaDatabase, FaPython } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import HeroTitle from '../Home Page/HeroTitle';
import Button from '../Home Page/Button';
import { TiLocationArrow } from "react-icons/ti";

import ServiceCard from './ServiceCard';



const Data = () => {

    const dataAnalytics = [
        {
            icon: <FaDatabase className="text-red-500" />,
            title: "Data Warehousing",
            desc: "Centralize and organize your data for efficient access and analysis with robust warehousing solutions.",
            points: [
                "Cloud-based or on-premise solutions",
                "Real-time data integration",
                "Scalable architecture",
            ],
            auraColor: "rgba(239, 68, 68, 0.15)", // Red 500
        },
        {
            icon: <FaChartPie className="text-yellow-500" />,
            title: "Business Intelligence",
            desc: "Transform raw data into actionable insights with powerful dashboards and visualizations.",
            points: [
                "Interactive dashboards",
                "KPI tracking",
                "Custom reporting",
            ],
            auraColor: "rgba(234, 179, 8, 0.15)", // Yellow 500
        },
        {
            icon: <FaBrain className="text-emerald-500" />,
            title: "Predictive Analytics",
            desc: "Leverage machine learning to forecast trends and make data-driven predictions.",
            points: [
                "Advanced modeling",
                "Risk assessment",
                "Demand forecasting",
            ],
            auraColor: "rgba(16, 185, 129, 0.15)", // Emerald 500
        },
    ];
    return (
        <div className='relative overflow-hidden pb-4 z-20 bg-transparent px-4' id='data'>

            {/* cloud header section  */}

            <section className="relative min-h-[70vh] flex items-center justify-center mb-5 overflow-hidden bg-transparent ">

                <div className="max-w-7xl w-full relative z-10 text-center">

                    {/* Content Wrapper */}
                    <div className="flex flex-col items-center justify-center w-full">

                        {/* Title - The HeroTitle handles its own white-to-gradient logic */}
                         <div className="w-full mb-8">
                            {
                                <div className='hidden md:block'>
                                    <HeroTitle text='Transform Data Into' containerClass="text-5xl md:text-7xl mb-1" />
                                    <HeroTitle text='Competitive Advantage' containerClass="text-5xl md:text-7xl mb-1" />

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
                                Transform Data Into Competitive Advantage
                            </p>
                        </div>

                        {/* Paragraph - White text with lower opacity for secondary feel */}
                        <p className="text-white text-justify md:text-center text-md font-medium md:text-lg lg:text-xl mb-12 w-full md:max-w-2xl mx-auto leading-relaxed tracking-tight">
                            HexaVision delivers cutting-edge data analytics solutions that uncover hidden insights and drive smarter business decisions.
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
            <section
                className="pb-20 flex flex-col items-center justify-center"
                id="cloud-services"
            >
                {/* Section Heading */}
                <h2
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-5"
                    data-aos="fade-up"
                >
                    Our <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Data Analytics</span>Services
                </h2>

                <p
                    className="text-white text-base mb-15 md:text-lg lg:text-xl mx-auto leading-relaxed px-4 text-center"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    We help businesses harness the power of their data through comprehensive analytics solutions
                </p>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">

                    {dataAnalytics.map((item, index) => (
                        <ServiceCard key={index} service={item} />
                    ))}

                </div>

            </section>




            {/* cloud benefit section */}


            <section className="pb-20 bg-transparent">

                {/* Section Title */}
                <h2
                    className="text-3xl font-bold text-center text-white mb-4"
                    data-aos="fade-up"
                >
                    Our Technology Stack
                </h2>

                <p
                    className="text-center text-white mb-16 max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    We use industry-leading tools and technologies to deliver exceptional results
                </p>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14 max-w-7xl mx-auto">

                    {[
                        {
                            name: "Python",
                            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                        },
                        {
                            name: "R",
                            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
                        },
                        {
                            name: "Power BI",
                            img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
                        },
                        {
                            name: "Tableau",
                            img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
                        },
                        {
                            name: "Apache Spark",
                            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
                        },
                        {
                            name: "Google Cloud",
                            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
                        },
                    ].map((tech, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group text-center transition-all duration-500"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-5">
                                <img
                                    src={tech.img}
                                    alt={tech.name}
                                    className="w-20 h-20 object-contain
            transition-all duration-500
            group-hover:scale-110
            group-hover:-translate-y-2"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-white 
          transition-colors duration-300
          group-hover:text-blue-400">
                                {tech.name}
                            </h3>
                        </div>
                    ))}

                </div>
            </section>







        </div>
    )
}

export default Data