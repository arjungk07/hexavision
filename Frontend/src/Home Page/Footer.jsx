import React from 'react'
import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {


    const [activeIndex, setActiveIndex] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        writeMessage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,          // Keep the other fields!
            [name]: value     // Update only the one currently being typed
        }));
    };

    const sendToWhatsApp = (e) => {
        e.preventDefault();
        const phoneNumber = "9095917892";

        // 1. Create an array of lines, but only if the value exists
        const messageLines = [];

        if (formData.name) messageLines.push(`Name: ${formData.name}`);
        if (formData.email) messageLines.push(`Email: ${formData.email}`);
        if (formData.phone) messageLines.push(`Phone: ${formData.phone}`);
        if (formData.subject) messageLines.push(`Subject: ${formData.subject}`);
        if (formData.writeMessage) messageLines.push(`Message: ${formData.writeMessage}`);

        // 2. Join the lines with the URL-encoded newline character (%0A)
        const text = messageLines.join("%0A");

        // 3. Prevent sending if the entire message is empty
        if (messageLines.length === 0) {
            alert("Please fill in at least one field.");
            return;
        }

        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };



    const faqs = [
        {
            q: "Why is digital marketing important for my business?",
            a: "Digital marketing helps you reach the right audience online, improve brand visibility, and generate measurable growth."
        },
        {
            q: "How long does it take to see results?",
            a: "Paid ads can show results quickly, while SEO and organic strategies usually take 3–6 months."
        },
        {
            q: "How much does digital marketing cost?",
            a: "Costs depend on your goals, industry, and services required. Contact us for a customized quote."
        },
        {
            q: "What social media platforms should I use?",
            a: "Both strategies complement each other. SEO is for long-term growth, while ads provide instant visibility and results.",
        },
        {
            q: "Do I need to run ads if I’m doing SEO?",
            a: "Both strategies complement each other. SEO is for long-term growth, while ads provide instant visibility and results.",
        }
    ];


    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            // If the same FAQ is clicked again, close it
            setActiveIndex(null);
        } else {
            // Open the clicked FAQ
            setActiveIndex(index);
        }
    };

    const phoneNumber = "9080173573"; // Replace with your number
    const message = encodeURIComponent("Hello! I'm interested in your services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div>

            {/* appointment section */}
            <section className="relative overflow-hidden py-15 px-3 z-20 bg-white" id='form'>
                <div className=" flex flex-col md:flex-row md:max-w-7xl md:mx-auto gap-5 items-center overflow-hidden">

                    {/* LEFT SIDE */}
                    <div className='w-full md:w-1/2 '>
                        <h2 className="text-3xl md:text-4xl mb-5 text-center font-bold bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent ">
                            Send Us a Message
                        </h2>


                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3">

                            <input
                                type="text"
                                name='name'
                                onChange={handleChange}
                                placeholder="Name *"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3
                     text-gray-900 placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <input
                                type="email"
                                name='email'
                                onChange={handleChange}
                                placeholder="Email *"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3
                     text-gray-900 placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <input
                                type="tel"
                                name='phone'
                                onChange={handleChange}
                                placeholder="Phone"
                                className="border border-gray-300 rounded-lg px-4 py-3
                     text-gray-900 placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <input
                                type="text"
                                name='subject'
                                onChange={handleChange}
                                placeholder="Subject"
                                className="border border-gray-300 rounded-lg px-4 py-3
                     text-gray-900 placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <textarea
                                placeholder="Write message..."
                                name='writeMessage'
                                onChange={handleChange}
                                className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none
                     text-gray-900 placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />

                            <button
                                onClick={sendToWhatsApp}
                                className="md:col-span-2 w-fit px-8 py-3 rounded-full
                     bg-cyan-500 text-white font-semibold
                     hover:bg-cyan-600 transition"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                    {/* RIGHT SIDE FAQ */}
                    <div className="flex-1 space-y-4 text-gray-900 w-full">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200  rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-start px-4 md:px-10 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition"
                                >
                                    <span className="wrap-break-word whitespace-normal pr-4">
                                        {faq.q}
                                    </span>

                                    <span
                                        className={`transition-transform shrink-0 text-gray-700 text-3xl ${activeIndex === index ? "rotate-90" : ""
                                            }`}
                                    >
                                        ›
                                    </span>
                                </button>

                                {activeIndex === index && (
                                    <div className="px-6 pb-4 text-gray-700">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>



            {/* Footer section */}

            <footer className="relative overflow-hidden z-20 bg-slate-50 px-3">

                {/* ===== TOP CTA BOX ===== */}
                <div className="max-w-7xl mx-auto md:px-6 m-3">
                    <div className="
    flex flex-col lg:flex-row items-center justify-between
    bg-linear-to-r from-cyan-500 to-blue-600
    rounded-3xl p-10 lg:p-14
    shadow-lg
  ">

                        {/* LEFT CONTENT */}
                        <div className="text-white max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Still have questions?
                            </h2>

                            <p className="text-white/90 mb-8">
                                Don’t hesitate—reach out today and let’s start your success story!
                            </p>

                            <HashLink smooth to={`/contact#contact`}> <button
                                className="
          inline-flex items-center gap-3
          px-8 py-4 rounded-full
          bg-white text-cyan-600 font-semibold
          hover:bg-gray-100 transition
        "
                            >
                                Contact Now
                                <span className="text-2xl font-bold">→</span>
                            </button></HashLink>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="mt-10 lg:mt-0">
                            <img
                                src="https://istepsolutions.com/wp-content/uploads/2023/09/f-top-shape1.png"
                                alt="CTA Illustration"
                                className="max-w-xs lg:max-w-sm"
                            />
                        </div>

                    </div>
                </div>

                {/* ===== BOTTOM FOOTER BOX ===== */}
                <div className="max-w-7xl mx-auto px-6 py-10 bg-white rounded-3xl shadow-sm m-3">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

                        {/* Column 1 */}
                        <div className="group">
                            <h3 className="text-lg font-semibold mb-6 text-gray-900 tracking-wide">
                                Social Links
                            </h3>

                            <div className="flex gap-5 text-2xl text-gray-500">
                                <a href="https://www.instagram.com/hexavision_technologies?igsh=NW5uY2Yxbmp3anZh"><FaInstagram className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
                                <a href="https://www.linkedin.com/company/hexavision-technologies/">  <AiFillLinkedin className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-gray-900 tracking-wide">
                                Services
                            </h4>
                            <ul className="space-y-3 text-gray-600">
                                {[
                                    "Web Applications",
                                    "Mobile Applications",
                                    "Cloud Services",
                                    "Cybersecurity",
                                    "AI & Analytics",
                                    "Data Analytics",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="hover:text-gray-900 hover:translate-x-1 transition-all duration-300 cursor-pointer"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-gray-900 tracking-wide">
                                Careers
                            </h4>
                            <ul className="space-y-3 text-gray-600">
                                {[
                                    "Why Join Us",
                                    "Open Positions",
                                    "Students",
                                    "Experienced",
                                    "Culture",
                                    "Benefits",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="hover:text-gray-900 hover:translate-x-1 transition-all duration-300 cursor-pointer"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className="relative">
                            <h4 className="text-lg font-semibold mb-4 text-gray-900 leading-snug">
                                Call Now to Discuss Your Strategy
                            </h4>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Feel Free to Contact Us!
                            </p>

                            <HashLink smooth to={`/contact#contact`}>
                                <button
                                    className="
          relative overflow-hidden
          px-7 py-3 rounded-full
          bg-linear-to-r from-blue-400 to-cyan-400 text-white font-semibold
          shadow-md
          hover:shadow-lg hover:bg-cyan-700
          transition-all duration-300
        "
                                >
                                    Contact Us
                                </button>
                            </HashLink>
                        </div>

                    </div>

                </div>


                {/* company details like address */}

                <div className="bg-slate-100 border-t border-gray-200 mt-10 rounded-3xl">
                    <div className="max-w-7xl mx-auto px-6 py-16">

                        {/* COMPANY LOCATIONS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">

                            {/* Thirunagar */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Thirunagar
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    <span className="block hover:text-gray-900 transition">
                                        Address. Plot No 58,
                                    </span>
                                    <span className="block hover:text-gray-900 transition">
                                        24/38, Pandiyan Nagar, Thirunagar, Madurai-625006.
                                    </span>
                                    <span className="block hover:text-gray-900 transition">
                                        Phone. +91 80720 75050
                                    </span>
                                </p>

                                <p className="mt-4 text-gray-600 hover:text-cyan-600 transition cursor-pointer">
                                    hexavisiontechnologies@gmail.com
                                </p>
                                <p className="text-gray-600 hover:text-cyan-600 transition cursor-pointer">
                                    +91 90801 73573
                                </p>
                            </div>

                            {/* KK Nagar */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    KK Nagar
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    <span className="block hover:text-gray-900 transition">
                                        Address: 32 A, Bharathiyar Street,
                                    </span>
                                    <span className="block hover:text-gray-900 transition">
                                        KK Nagar,
                                    </span>
                                    <span className="block hover:text-gray-900 transition">
                                        Madurai-625020,
                                    </span>
                                    <span className="block hover:text-gray-900 transition">
                                        Tamil Nadu.
                                    </span>
                                </p>

                                <p className="mt-4 text-gray-600 hover:text-cyan-600 transition cursor-pointer">
                                    hexavisiontechnologies@gmail.com
                                </p>
                                <p className="text-gray-600 hover:text-cyan-600 transition cursor-pointer">
                                    +91 90801 73573
                                </p>
                            </div>

                        </div>

                        {/* TERMS & COPYRIGHT */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-100 text-sm text-gray-500">

                            <p>
                                © 2026 HexaVision Technologies. All rights reserved.
                            </p>

                            <div className="flex gap-6">
                                <span className="cursor-pointer hover:text-gray-900 transition">
                                    Privacy Policy
                                </span>
                                <span className="cursor-pointer hover:text-gray-900 transition">
                                    Terms & Conditions
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </footer>

        </div>
    )
}

export default Footer