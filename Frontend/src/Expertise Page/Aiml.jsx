import React from 'react'
import Navbar from '../Home Page/Navbar';
import Footer from '../Home Page/Footer';
import { FaMobile } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";
import { MdPhotoCamera } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

import HeroTitle from '../Home Page/HeroTitle';
import Button from '../Home Page/Button';
import { TiLocationArrow } from "react-icons/ti";
import ServiceCard from './ServiceCard';







const Aiml = () => {


    const aimlbusiness = [
        {
            icon: <FaBrain className='text-red-500' />,
            title: "Custom ML Models",
            desc: "Tailor-made machine learning models built for your industry, optimized for accuracy and performance.",
            auraColor: "rgba(239, 68, 68, 0.15)",
        },
        {
            icon: <FaChartLine className='text-yellow-500' />,
            title: "Predictive Analytics",
            desc: "Unlock actionable insights from historical data to drive strategic business decisions.",
            auraColor: "rgba(202, 138, 4, 0.12)",
        },
        {
            icon: <MdPhotoCamera className='text-emerald-500' />,
            title: "Computer Vision",
            desc: "Build smart systems that see, analyze, and interpret the world with image & video recognition.",
            auraColor: "rgba(6, 182, 212, 0.15)",
        }
    ]


    const aimlservice = [
        {
            icon: <FaBrain className='text-red-500' />,
            title: "Model Development",
            desc: "Custom ML/DL models: classification, regression, clustering, RNNs, and CNNs tailored for your needs.",
            auraColor: "rgba(239, 68, 68, 0.15)", // Red 500
        },
        {
            icon: <FaDatabase className='text-yellow-500' />,
            title: "Data Services",
            desc: "Data cleaning, transformation, annotation, and feature engineering for high-performance AI pipelines.",
            auraColor: "rgba(234, 179, 8, 0.15)", // Yellow 500
        },
        {
            icon: <FaRobot className='text-emerald-500' />,
            title: "AI Solutions",
            desc: "Deploy AI-powered tools like chatbots, sentiment analysis, fraud detection, and customer behavior insights.",
            auraColor: "rgba(16, 185, 129, 0.15)", // Emerald 500
        },
        {
            icon: <FaEye className='text-blue-500' />,
            title: "Computer Vision",
            desc: "Image classification, OCR, segmentation, and license plate recognition using advanced vision models.",
            auraColor: "rgba(59, 130, 246, 0.15)", // Blue 500
        },
        {
            icon: <FaLanguage className='text-cyan-500' />,
            title: "NLP Solutions",
            desc: "Text classification, translation, chatbots, summarization, and speech tools powered by NLP models.",
            auraColor: "rgba(6, 182, 212, 0.15)", // Cyan 500
        },
        {
            icon: <FaMobile className='text-purple-500' />,
            title: "AI in Apps",
            desc: "Enhance your web/mobile apps with facial recognition, smart search, and personalization engines.",
            auraColor: "rgba(168, 85, 247, 0.15)", // Purple 500
        }
    ];


    return (
        <div className='relative overflow-hidden  z-20 bg-transparent px-5 md:px-0' id='aiml'>

            {/* aiml header section  */}
            <section className="relative min-h-[70vh] flex items-center justify-center  overflow-hidden bg-transparent ">

                <div className="max-w-7xl w-full relative z-10 text-center">

                    {/* Content Wrapper */}
                    <div className="flex flex-col items-center justify-center w-full">

                        {/* Title - The HeroTitle handles its own white-to-gradient logic */}
                        <div className="w-full mb-8">
                            {
                                <div className='hidden md:block'>
                                    <HeroTitle text='AI & ML Powered Business Solutions' containerClass="text-5xl md:text-7xl mb-1" />

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
                                AI & ML Powered Business Solutions
                            </p>
                        </div>

                        {/* Paragraph - White text with lower opacity for secondary feel */}
                        <p className="text-white text-justify md:text-center text-md font-medium md:text-lg lg:text-xl mb-12 w-full md:max-w-2xl mx-auto leading-relaxed tracking-tight">
                            Unlock the full potential of Artificial Intelligence and Machine Learning to streamline operations, predict outcomes, and create intelligent systems tailored to your business needs.
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

            <section className="relative  pb-20 overflow-hidden" id="cloud-services">

                {/* Section Title */}
                <h2
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
                    data-aos="fade-up"
                >
                    <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>AI & Machine Learning</span> Solutions
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto ">

                    {aimlbusiness.map((item, index) => (
                        <ServiceCard key={index} service={item} />
                    ))}

                </div>

            </section>

            {/* aiml service section */}

            <section
                className="pb-20"
                id="aiml-services"
            >
                {/* Section Title */}
                <h2
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
                    data-aos="fade-up"
                >
                    Our <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>AI/ML</span> Services
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto ">

                    {aimlservice.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}

                </div>

            </section>





        </div>
    )
}

export default Aiml