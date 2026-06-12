import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useContext } from 'react';
import { AppContext } from './Context';

//animation
import { motion } from 'framer-motion';

//components
import Navbar from "../Home Page/Navbar";
import Button from "../Home Page/Button";
import Features from "../Home Page/Features";
import SolutionsSection from "../Home Page/SolutionsSection";
// import Testimonial from '../Home Page/Testimonial'
import Footer from '../Home Page//Footer';
import ServiceCards from './ServiceCards';
import HeroTittle from './HeroTitle';
import { AnimatedTitle } from './ServiceCards';

import { IoIosArrowUp } from "react-icons/io";





const Header = () => {


    // video play/pause logic
    const videoRef = useRef(null);
    const [Top, SetTop] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);




    /* ================= BODY SCROLL LOCK ================= */
    useEffect(() => {
        // Handle body scroll lock
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Handle scroll event
        const handleScroll = () => {
            if (window.scrollY > 400) {
                SetTop(true);
            } else {
                SetTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuOpen]);


    function handleTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }


    const { data, icons, array } = useContext(AppContext);

    const ScrollContent = [
        {
            id: 1,
            label: "Web Development",
            icon: icons.TbWorld,
            iconColor: "text-blue-400",
        },
        {
            id: 2,
            label: "Cloud Solutions",
            icon: icons.FaCloud,
            iconColor: "text-blue-400",
        },
        {
            id: 3,
            label: "AI & ML",
            icon: icons.FaRobot,
            iconColor: "text-blue-400",
        },
        {
            id: 4,
            label: "Cybersecurity",
            icon: icons.FaUserSecret,
            iconColor: "text-blue-400",
        },
        {
            id: 5,
            label: "Mobile Apps",
            icon: icons.FaMobileScreen,
            iconColor: "text-blue-400",
        },
        {
            id: 6,
            label: "Data Analytics",
            icon: icons.FaDatabase,
            iconColor: "text-blue-400",
        },
    ];

    return (
        <div className="header-wrapper bg-white">

            {/* Hero Section */}
            <header
                className="
              relative min-h-screen text-white overflow-hidden"
            >

                {/* navbar */}
                <Navbar />

                <div className="w-full h-dvh absolute top-0 flex flex-col justify-end md:justify-center items-center z-20">

                    <div className="w-full pb-12 md:pb-3 mx-auto px-5 flex items-center justify-center ">

                        {/* --- TEXT CONTENT LAYER (Your Existing Code) --- */}
                        {/* Removed justify-end from here because parent handles alignment */}
                        <div className="z-10 pt-sans-regular ">

                            <HeroTittle text='Forward-Thinking' containerClass="text-3xl md:text-[60px] mt-3" />
                            <HeroTittle text='Digital Transformation Company ' containerClass="text-3xl md:text-[60px]" />

                            <p className="mt-4 md:mt-3 text-[15px] md:text-xl text-center text-white brightness-150 tracking-wider ">
                                Leading app & web development company with 2+ years of experience,
                                delivering responsive websites and high-performance mobile apps globally.
                                <span className="block mt-2 text-blue-600">
                                    We offer services in web development and Google My Business.
                                </span>
                            </p>

                            <div className="mt-10 flex justify-center">
                                {/* <button
                                    data-aos="slide-up"
                                    className="group relative overflow-hidden rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 font-black uppercase tracking-wider shadow-[0_0_22px_rgba(56,189,248,0.45)] transition-all duration-500"
                                >
                                    <span className="absolute inset-0 bg-[#141218] translate-y-[-90%] transition-transform duration-500 ease-out group-hover:translate-y-[-10%]" />

                                    <span className="relative z-10 flex items-center gap-3">
                                        Get in Touch
                                        <span className="text-xl transition-transform duration-300 group-hover:rotate-45">
                                            <FiArrowUpRight />
                                        </span>
                                    </span>
                                </button> */}

                                <HashLink smooth to="#form"> <Button
                                    id="Get Touch"
                                    title="Let's Get Started"
                                    rightIcon={<icons.TiLocationArrow className='text-2xl' />}
                                    containerClass="bg-linear-to-r from-cyan-500 to-blue-600 flex justify-center items-center gap-3 text-white "
                                ></Button></HashLink>

                            </div>

                        </div>


                    </div>

                </div>


            </header>


            {/* scroll content */}

            <div className="relative overflow-hidden py-4 z-20 bg-transparent">
                <div
                    className="
      flex gap-12 items-center
      whitespace-nowrap
      scroll-animation
      min-w-full pt-sans-bold
    "
                >
                    {ScrollContent.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="flex items-center gap-4"
                            >
                                <div className="text-xl font-medium text-white">
                                    {item.label}
                                </div>

                                <div className={`text-xl ${item.iconColor}`}>
                                    <Icon />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* Entering Technologies provide section with animation  */}
            <Features />

            {/* expertise Section */}
            <ServiceCards />


            {/* Process Section */}

            <div className="flex justify-center mx-5 md:mx-0 relative overflow-hidden z-10">

                <HashLink smooth to={`/expertise#cloud`}>
                    <Button
                        id="More Services"
                        title="More Services"
                        rightIcon={<icons.TiLocationArrow className='text-2xl' />}
                        containerClass="bg-linear-to-r from-cyan-500 to-blue-600 flex justify-center items-center gap-3 text-white"
                    />
                </HashLink>


            </div>


            {/* Solution Sections */}

            <SolutionsSection />

            {/* Partners Section */}
            <section className=" relative overflow-hidden py-4 z-20 bg-transparent">
                <div className="max-w-7xl mx-auto px-3">

                    {/* SECTION TITLE */}
                    <AnimatedTitle text="OurDigital Partners" />

                    {/* PARTNERS images */}
                    <div className="
      grid grid-cols-2 overflow-hidden sm:flex justify-center items-center
      gap-10
    ">
                        {array[0].partners.map((item) => (
                            <div
                                key={item.id}
                                className="
            w-full md:w-40 h-24
            flex items-center justify-center
            bg-white
            rounded-xl
            shadow-sm
            transition-all duration-300
            hover:shadow-lg hover:scale-105
          "
                            >
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    className="max-h-16 object-contain grayscale hover:grayscale-0 transition"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>




            {/* best work title only section */}
            <section className="relative overflow-hidden py-15 z-20 bg-transparent">
                <div className="max-w-6xl mx-auto text-center">

                    {/* BADGE */}
                    <span className="
      inline-block mb-6
      text-xxl md:text-2xl font-semibold tracking-widest
      uppercase
     text-white
    ">
                        Explore Our Best Work
                    </span>

                    {/* TITLE */}
                    <h1 className="
      text-4xl md:text-6xl
      font-extrabold
      leading-tight
      bg-linear-to-r from-blue-400 to-cyan-400
      bg-clip-text text-transparent 
    ">
                        Projects We’ve <span className="block md:inline">Crafted</span>
                    </h1>

                </div>
            </section>



            {/* scrolling image content */}
            <section className="relative py-4 z-20 bg-transparent notification-img-section">
                <div className="notification-img-wrapper">
                    <div className="notification-img">

                        <img src={data.craft1} alt="SCS Counselling" />
                        <img src={data.craft2} alt="Company Logo 2" />
                        <img src={data.craft3} alt="Google Partners" />
                        <img src={data.craft4} alt="SCS Counselling" />

                        {/* duplicate for infinite loop */}
                        <img src={data.craft1} alt="SCS Counselling" />
                        <img src={data.craft2} alt="Company Logo 2" />
                        <img src={data.craft3} alt="Google Partners" />
                        <img src={data.craft4} alt="SCS Counselling" />


                    </div>
                </div>
            </section>

            {/* <Testimonial /> */}

            <Footer />


            {
                Top && (
                    <div
                        onClick={handleTop}
                        className="fixed z-50 bottom-5 right-5 w-12.5 h-12.5 
                            bg-linear-to-r from-blue-400 to-blue-600
                             hover:brightness-110
                             rounded-[3px] border-0 
                             flex justify-center items-center
                             cursor-pointer overflow-hidden 
                             transition-all duration-300 ease-linear"
                    >
                        <div className="relative text-3xl">
                            <IoIosArrowUp />
                        </div>
                    </div>
                )
            }

        </div >
    );
};

export default Header;
