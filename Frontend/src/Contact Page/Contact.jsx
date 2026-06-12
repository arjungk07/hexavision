import React from 'react'

import Navbar from "../Home Page/Navbar";
import Footer from '../Home Page/Footer';


import { IoPersonOutline } from "react-icons/io5";

import { MdOutlineEmail } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";




const Contact = () => {
    return (
        <div className='contact relative overflow-hidden py-4 z-20 bg-transparent '>



            <Navbar />

            {/* Contact header section */}
            <section id='contact' className="flex flex-col md:flex-row justify-between items-center gap-10 px-5 md:px-20 lg:px-40 py-16  text-white font-sans">

                {/* LEFT SIDE */}
                <div className="w-full flex flex-col gap-3">

                    <span className="text-white font-semibold tracking-wide">
                        CONTACT US
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Get in Touch with{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            HEXAVISION <br></br>TECHNOLOGIES
                        </span>
                    </h2>

                    <p className="text-lg text-white/80 tracking-wider">
                        best digital marketing in chennai contact Us:
                    </p>

                </div>

                {/* RIGHT SIDE */}
                <div className="w-full flex md:justify-end md:self-end">
                    <p className="text-lg md:text-xl leading-relaxed text-white/80">
                        Have questions or need assistance? Our team is here to help you with your digital marketing needs.
                    </p>
                </div>

            </section>


            {/* Information section  */}

            <section className="py-16 px-4 sm:px-6 lg:px-10 bg-white">
                <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center max-w-6xl mx-auto">

                    {/* LEFT SIDE */}
                    <div className="w-full">

                        <h2 className="text-black text-2xl sm:text-3xl font-bold mb-2">
                            You Have any Question? Feel Free to Contact With us.
                        </h2>

                        <p className="text-gray-500 text-sm mb-5">
                            Call us for immediate support on this number
                        </p>

                        <div className="text-lg font-semibold text-black mb-6 transition-all duration-300 hover:translate-x-1 hover:text-[#ff5a1f] cursor-pointer">
                            +91 90801 73573
                        </div>

                        {/* Email Block */}
                        <div className="flex items-center gap-5 border-y border-gray-200 py-5 hover:bg-gray-50 transition">

                            <div className="w-25 h-20">
                                <img
                                    src="https://istepsolutions.com/wp-content/uploads/2023/09/contact-icon-2.png"
                                    alt="contact"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div>
                                <p className="text-gray-600 text-lg font-medium mb-2">
                                    Send us email for any kind of inquiry
                                </p>
                                <strong className="text-black text-base">
                                    hexavisiontechnologies@gmail.com
                                </strong>
                            </div>
                        </div>

                        {/* Address Block */}
                        <div className="border-b border-gray-200 my-6 py-4 hover:bg-gray-50 transition">
                            <p className="text-gray-500 mb-2 text-lg">Address:</p>
                            <p className="text-black text-base font-semibold tracking-wide">
                                Plot No 58, 24/38, Pandiyan Nagar, Thirunagar, Madurai-625006.
                            </p>
                        </div>

                        {/* FORM */}
                        <div className="bg-white  text-black">

                            {/* Row 1 */}
                            <div className="flex flex-col sm:flex-row gap-6 mb-6">


                                {/* Name */}
                                <div className="flex-1">
                                    <label className="block font-semibold mb-2">
                                        Your Name
                                    </label>

                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter here.."
                                            className="w-full border border-gray-300 rounded px-4 py-3 pr-12 text-sm placeholder-gray-600 outline-none focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20"
                                        />
                                        <IoPersonOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex-1">
                                    <label className="block font-semibold mb-2">
                                        Your Email
                                    </label>

                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="example@gmail.com"
                                            className="w-full border border-gray-300 rounded px-4 py-3 pr-12 text-sm placeholder-gray-600  outline-none focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20"
                                        />
                                        <MdOutlineEmail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mb-6">
                                <label className="block font-semibold mb-2">
                                    Your Estimated and Details
                                </label>

                                <div className="relative">
                                    <textarea
                                        placeholder="Type Message..."
                                        className="w-full min-h-35 resize-y border border-gray-300 placeholder-gray-600  rounded px-4 py-3 pr-12 text-sm outline-none focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20"
                                    ></textarea>
                                    <FaRegEdit className="absolute right-3 top-4 text-gray-400 text-xl pointer-events-none" />
                                </div>
                            </div>

                            {/* Button */}
                            <button className="block mx-auto bg-linear-to-r from-cyan-400 to-blue-400 text-white font-semibold px-10 py-3 rounded transition-all duration-300 hover:bg-[#e94f18] hover:-translate-y-1 hover:shadow-lg">
                                Send Message
                            </button>

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className='w-full h-full'>
                        <div
                            className="flex items-center w-full h-full md:translate-x-[25%]"
                            data-aos="slide-left" data-aos-duration="300"
                        >

                            <iframe
                                className="w-full max-w-112.5 h-112.5 border-0 rounded-3xl"
                                title='map'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19577316011!2d78.04042150095354!3d9.917826796702249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756992588122!5m2!1sen!2sin"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>

                        </div>
                    </div>


                </div>
            </section>



            <Footer />

        </div>
    )
}

export default Contact