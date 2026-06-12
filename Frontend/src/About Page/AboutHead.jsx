import React from 'react'
import about_video from "../assets/images/about-video.mp4";
import { useRef } from 'react';
import { FaBullseye } from "react-icons/fa6";
import Button from '../Home Page/Button';
import { TiLocationArrow } from 'react-icons/ti';


const AboutHead = () => {
    const videoRef = useRef(null);

    const toggleSound = () => {
        const video = videoRef.current;
        video.muted = !video.muted; // toggle
    };

    return (


        <section
            className="relative overflow-hidden py-4 z-2 bg-transparent"
        >

            <div className="relative max-w-7xl mx-auto px-3 lg:px-4">

                <div className="flex flex-col lg:flex-row items-center gap-10 min-h-150">

                    {/* LEFT CONTENT */}
                    <div className="p-1 w-full h-full flex-1 flex flex-col justify-between">

                        {/* Arrow Section */}
                        <div className="flex flex-col items-center" data-aos="fade-down">
                            <p className="font-medium text-center mb-4 text-white  text-2xl">
                                Click to play/pause
                            </p>

                            <svg class="arrow">
                                <path class="a1" d="M0 0 L30 22 L60 0"></path>
                                <path class="a2" d="M0 20 L30 42 L60 20"></path>
                                <path class="a3" d="M0 40 L30 62 L60 40"></path>
                            </svg>
                        </div>

                        {/* Video Section */}
                        <div className="flex justify-center">
                            <video
                                ref={videoRef}
                                className="w-full max-w-md h-112.5 object-cover rounded-xl shadow-2xl cursor-pointer"
                                autoPlay
                                muted
                                loop
                                playsInline
                                onClick={toggleSound}
                            >
                                <source src={about_video} type="video/mp4" />
                            </video>
                        </div>

                    </div>


                    {/* RIGHT CONTENT */}
                    <div className="flex-1 p-1 md:p-10 rounded-xl flex flex-col justify-center gap-y-10 h-full" >

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                            About Us
                        </h2>

                        <div>
                            <p className="md:hidden text-[16px] md:text-md lg:text-lg text-white leading-relaxed">
                                We deliver cutting-edge technology solutions that empower businesses to grow, innovate, and stay competitive in an ever-evolving digital landscape. Our expertise spans software development, cloud solutions, digital transformation, and technology consulting, helping organizations streamline operations and enhance customer experiences. By combining innovation, reliability, and industry best practices, we create scalable solutions that drive long-term success and sustainable business growth.
                            </p>
                            <p className='hidden md:block text-[16px] md:text-md lg:text-lg text-white leading-relaxed'>We deliver cutting-edge technology solutions that empower business growth and digital transformation.</p>
                        </div>




                        <Button
                            id="Get Touch"
                            title="Get Touch"
                            rightIcon={<TiLocationArrow className='text-2xl' />}
                            containerClass="bg-linear-to-r from-cyan-500 to-blue-600 flex justify-center items-center gap-3 text-white "
                        />

                        {/* ✅ TWO CARDS BELOW BUTTON */}
                        <div className="flex flex-col sm:flex-row gap-6 max-w-150 mx-auto">

                            {/* CARD 1 */}
                            <div data-aos="flip-right" data-aos-delay="300" className="flex-1 bg-gray-50 border border-gray-200 
                    rounded-xl p-6 
                    transition-all duration-500 
                    hover:-translate-y-2 hover:shadow-xl">

                                <div className="w-16 h-16 rounded-xl 
                      bg-linear-to-br from-cyan-400 to-blue-600 
                      flex items-center justify-center mb-4">

                                    <FaBullseye className='w-8 h-8 ' />

                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Our Mission
                                </h3>

                                <p className="text-black/80 text-md leading-relaxed">
                                    Deliver cutting-edge tech solutions empowering business growth.
                                </p>

                            </div>


                            {/* CARD 2 */}
                            <div data-aos="flip-right" data-aos-delay="300" className="flex-1 bg-gray-50 border border-gray-200 
                    rounded-xl p-6 
                    transition-all duration-500 
                    hover:-translate-y-2 hover:shadow-xl">

                                <div className="w-16 h-16 rounded-xl 
                      bg-linear-to-br from-cyan-400 to-blue-600 
                      flex items-center justify-center mb-4">

                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                                        alt="Vision"
                                        className="w-8 h-8 "
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Our Vision
                                </h3>

                                <p className="text-black/80 text-md  leading-relaxed">
                                    Be a global IT leader transforming businesses digitally.
                                </p>

                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </section>



    )
}

export default AboutHead