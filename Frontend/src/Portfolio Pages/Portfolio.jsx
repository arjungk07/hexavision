import React, { useState, useEffect } from "react";
import Navbar from "../Home Page/Navbar";
import Footer from "../Home Page/Footer";
import Testimonial from "../Home Page/Testimonial";
import { FaArrowRight } from "react-icons/fa6";
import cloud from "../assets/images/cloud.mp4";
import aiml from "../assets/images/aiml.mp4";
import security from "../assets/images/security.mp4";
import mobile from "../assets/images/mobile.mp4";
import web from "../assets/images/web.mp4";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";


// import images for ads
import ad1 from "../assets/images/ad1.png";
import ad2 from "../assets/images/ad2.png";
import ad3 from "../assets/images/ad3.png";
import ad4 from "../assets/images/ad4.png";
import ad5 from "../assets/images/ad5.png";
import ad6 from "../assets/images/ad6.png";
import { AppContext } from "../Home Page/Context";


const Portfolio = () => {


    const { data } = useContext(AppContext);

    // website section logic

    const cardsData = [
        { id: 1, vid: cloud, title: "Cloud Solutions", subtitle: "Scalable cloud infrastructure and services for your business needs", link: "/expertise#cloud" },
        { id: 2, vid: aiml, title: "AI & ML", subtitle: "Intelligent solutions powered by artificial intelligence", link: "/expertise#aiml" },
        { id: 3, vid: security, title: "Cybersecurity", subtitle: "Protecting your digital assets with advanced security measures", link: "/expertise#security" },
        { id: 4, vid: mobile, title: "Mobile Apps", subtitle: "Custom mobile applications for iOS and Android platforms", link: "/expertise#mobile" },
        { id: 5, vid: web, title: "Web Development", subtitle: "Responsive and dynamic websites for all business needs", link: "/expertise#web" },
        { id: 6, vid: data.data1, title: "Data Analytics", subtitle: "Actionable insights from your business data", link: "/expertise#data" },
    ];

    const worksData = [
        { id: 1, img:  data.AppDevelopment, title: "Mobile App Development", desc: "We design and develop user-friendly mobile applications that deliver high performance and seamless experiences across devices." },
        { id: 2, img:  data.WebDevelopment, title: "Website Development", desc: "We create modern, responsive websites tailored to your business needs, ensuring speed, security, and great user experience." },
        { id: 3, img: "https://telecoms.adaptit.tech/wp-content/uploads/2023/03/iot-solutions.jpg", title: "IOT Solutions", desc: "We provide smart IoT solutions that connect devices, collect data, and automate processes for better efficiency and control." },
        { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO74EyzsuMLAvCwA6L46_4GfV8TKWCwcB1w&s", title: "Cyber Security Solutions", desc: "We protect your digital assets with advanced cybersecurity solutions that safeguard systems, data, and networks from threats." },
        { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdUxBJDGL3jA-b1BhPa5QbAvGNFb6bvdP6Q&s", title: "Video Creation", desc: "We produce engaging and high-quality videos that effectively communicate your message and enhance your brand presence." },
        { id: 6, img: "https://img.freepik.com/premium-photo/cloud-computing-technology-online-data-storage-business-network-concept_31965-13411.jpg", title: 'Cloud Solutions', desc: "We deliver secure and scalable cloud solutions that help businesses store, manage, and access data efficiently from anywhere." },
    ];


    const adsData = [
        {
            id: 1,
            img: ad1,
            title: "Build your dream app today!"
        },
        {
            id: 2,
            img: ad2,
            title: "Build Your dream Website today!"
        },
        {
            id: 3,
            img: ad3,
            title: "Transform your Business with IOT Solutions!"
        },
        {
            id: 4,
            img: ad4,
            title: "Get Robus Cyber Security Soluitons!"
        }
        ,
        {
            id: 5,
            img: ad5,
            title: "Create Stunning Videos with Ease!"
        },
        {
            id: 6,
            img: ad6,
            title: "Transform Your Business with Cloud Solutions!"
        },
    ];

    const [index, setIndex] = useState(0);

    // how many cards visible
    const getVisibleCounts = () => {
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    };

    const [visible, setVisible] = useState(getVisibleCounts());

    // resize handler 
    useEffect(() => {
        const resize = () => setVisible(getVisibleCounts());
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    // get cards with wrap-around logic
    const getVisibleCards = () => {
        return cardsData.slice(index, index + visible);
    };

    //gets images with wrap-around logic
    const getVisibleImage = () => {
        return worksData.slice(index, index + visible);

    }

    //gets images with wrap-around logic
    const getAdImage = () => {
        return adsData.slice(index, index + visible);

    }



    const nextSlide = () => {
        if (index + visible < worksData.length) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const isFirst = index === 0;
    const isLast = index + visible >= worksData.length;






    // Auto slide every 30 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 30000);
        return () => clearInterval(timer);
    }, []);




    return (
        <div>
            <Navbar />

            {/* Portfolio header section */}
            <section className="relative overflow-hidden py-15 z-20 bg-transparent min-h-[30vh] flex items-center justify-center text-center text-white px-5 font-[Poppins] group">
                <div className="max-w-225 flex flex-col gap-4">

                    <h3 className="text-2xl uppercase tracking-[1.5px] font-semibold transition-all duration-500 group-hover:tracking-[3px]">
                        Our{" "}
                        <span className="text-blue-400 transition-all duration-300">
                            Services
                        </span>
                    </h3>

                    <p className="text-[1.3rem]  relative pb-5 transition-all duration-500 ">
                        Comprehensive digital solutions tailored to your business needs

                        {/* Animated underline */}
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-0 bg-blue-400 transition-all duration-500 group-hover:w-30"></span>
                    </p>

                </div>
            </section>


            {/* portfolio website video display section */}
            <section className="relative overflow-hidden py-15 z-20 bg-transparent px-5 text-center">
                <div className="relative flex items-center justify-center max-w-7xl mx-auto">

                    {/* Left Button */}
                    <button
                        onClick={prevSlide}
                        disabled={isFirst}
                        className={`absolute left-[30%] md:left-0 top-[103%] md:top-[50%] z-50 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 
        ${isFirst
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-gray-900 text-white hover:bg-blue-400 hover:scale-110"}
      `}
                    >
                        ❮
                    </button>

                    {/* Carousel */}
                    <div className="flex gap-6  justify-center items-center flex-wrap lg:flex-nowrap">

                        {getVisibleCards().map((card) => (
                            <div
                                key={card.id}
                                className="bg-white w-[320px] md:w70 rounded-2xl shadow-[0_15px_20px_rgba(0,0,0,0.08)]
          transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 
          hover:shadow-[0_0px_40px_rgba(231,76,60,0.25)]"
                            >

                                {/* Video */}
                                <div className="overflow-hidden rounded-t-2xl h-50">
                                    <video
                                        src={card.vid}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="auto"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5 text-center space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {card.title}
                                    </h3>

                                    <p className="text-sm text-gray-600">
                                        {card.subtitle}
                                    </p>

                                    <HashLink
                                        smooth to={card.link}
                                        className="flex items-center justify-center gap-2 group"
                                    >
                                        <strong className="text-sm text-[#e74c3c] transition-all duration-300 group-hover:tracking-wider">
                                            Read More
                                        </strong>
                                        <span className="text-[#e74c3c] transition-transform duration-300 group-hover:translate-x-1">
                                            <FaArrowRight />
                                        </span>
                                    </HashLink>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Right Button */}
                    <button
                        onClick={nextSlide}
                        disabled={isLast}
                        className={`absolute top-[103%] md:top-[50%] right-[30%] md:right-0 z-50 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 
        ${isLast
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-gray-900 text-white hover:bg-blue-400 hover:scale-110"}
      `}
                    >
                        ❯
                    </button>

                </div>
            </section>


            {/* portfolio work image display section */}

            <section
                className="relative overflow-hidden py-15 z-20 bg-transparent px-5 text-center"
            >
                <h2 className="text-3xl font-bold mb-16 text-white">
                    Creative <span className="text-blue-400">Works</span>
                </h2>

                <div className="relative flex items-center justify-center">

                    {/* Left Button */}
                    <button
                        className={`absolute left-[30%] md:left-[7%] top-[103%] md:top-[50%] z-50 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 
        ${isFirst
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-gray-900 text-white hover:bg-blue-400 hover:scale-110"}
      `}
                        onClick={prevSlide}
                        disabled={isFirst}
                    >
                        ❮
                    </button>

                    {/* Slider */}
                    <div className="flex gap-5 ">

                        {getVisibleImage().map((item) => (
                            <div
                                key={item.id}
                                className="bg-white w-[320px] md:w70 rounded-2xl shadow-[0_15px_20px_rgba(0,0,0,0.08)]
          transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 
          hover:shadow-[0_0px_40px_rgba(231,76,60,0.25)] h-87.5"
                            >
                                <img
                                    src={item.img}
                                    alt="Creative Work"
                                    className="w-full h-50 rounded-xl mb-4"
                                />

                                <h2 className="text-lg tracking-tight font-medium text-gray-900 pb-2">
                                    {item.title}
                                </h2>

                                <p className="text-gray-500 text-sm pt-2">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* Right Button */}
                    <button
                        className={`absolute right-[30%] md:right-[7%] top-[103%] md:top-[50%] w-11 h-11 rounded-full text-xl flex items-center justify-center 
      transition-all duration-300
      ${isLast
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-gray-900 text-white hover:bg-[#e74c3c] hover:scale-110"}
      ml-4 lg:ml-6`}
                        onClick={nextSlide}
                        disabled={isLast}
                    >
                        ❯
                    </button>

                </div>
            </section>


            {/* advertisement image display section */}

            <section
                className="relative overflow-hidden py-15 z-20 bg-transparent px-5 text-center"
            >
                {/* Section Title */}
                <div className="mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Featured <span className="text-blue-400">Advertisements</span>
                    </h2>
                    <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg">
                        Explore our latest promotional highlights and creative campaign showcases.
                    </p>
                </div>

                {/* Slider Wrapper */}
                <div className="flex items-center justify-center gap-6 relative">

                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        disabled={isFirst}
                        className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full 
      transition-all duration-300
      ${isFirst
                                ? "bg-gray-200 cursor-not-allowed opacity-40"
                                : "bg-gray-900 text-white hover:bg-[#e74c3c] hover:scale-110"
                            }`}
                    >
                        ❮
                    </button>

                    {/* Cards */}
                    <div className="flex flex-col sm:flex-row gap-8 items-center">

                        {getAdImage().map((ad) => (
                            <div
                                key={ad.id}
                                className="group w-75 sm:w-65 md:w-75 rounded-2xl 
          shadow-lg hover:shadow-2xl transition-all duration-500 
          hover:-translate-y-3 bg-white"
                            >
                                {/* Image Box */}
                                <div className="relative overflow-hidden rounded-t-2xl">
                                    <img
                                        src={ad.img}
                                        alt={ad.title}
                                        className="w-full h-55 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-[#e74c3c]/80 opacity-0 
              group-hover:opacity-90 transition-all duration-500 
              flex items-center justify-center">
                                        <span className="text-white font-semibold text-lg">
                                            View Details
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 text-left">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#e74c3c] transition-colors duration-300">
                                        {ad.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-2">
                                        Creative advertising design crafted for impactful brand visibility and engagement.
                                    </p>

                                    {/* Read More */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center mt-4 text-[#e74c3c] font-medium 
              group-hover:translate-x-1 transition-all duration-300"
                                    >
                                        Read More
                                        <svg
                                            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        disabled={isLast}
                        className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full 
      transition-all duration-300
      ${isLast
                                ? "bg-gray-200 cursor-not-allowed opacity-40"
                                : "bg-gray-900 text-white hover:bg-[#e74c3c] hover:scale-110"
                            }`}
                    >
                        ❯
                    </button>

                </div>
            </section>



            {/* <Testimonial /> */}


            <Footer />



        </div>
    );
};

export default Portfolio;
