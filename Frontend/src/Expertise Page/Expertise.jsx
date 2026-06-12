import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Cloud from "./Cloud";
import Aiml from "./Aiml";
import Security from "./Security";
import Mobile from "./Mobile";
import Web from "./Web";
import Data from "./Data";
import Footer from "../Home Page/Footer";
import { HashLink } from "react-router-hash-link";
import { data } from "../assets/assets";
// import ServicesSlider from './ServicesSlider';

const OurServices = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [Top, SetTop] = useState(false);


  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Cloud", path: "/expertise#cloud" },
    { name: "Ai & ML", path: "/expertise/#aiml" },
    { name: "Cyber Security", path: "/expertise#security" },
    { name: "Web", path: "/expertise#web" },
    { name: "Mobile", path: "/expertise#mobile" },
    { name: "Data Analytics", path: "/expertise#data" },

  ];

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


  /* ================= ACTIVE LINK FUNCTION ================= */
  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };


  const phoneNumber = "9080173573"; // Replace with your number
  const message = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;


  return (

    <div className="section">

      <nav className="w-full text-white z-50 relative bg-transparent">

        {/* ================= TOP BAR ================= */}
        <div className="hidden md:block py-5 text-sm w-full">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-5">
            <div className="flex gap-20 font-medium">
              <span>📞 Call Us: +91 80720 75050</span>
              <span>
                📍 Plot No 58, 24/38, Pandiyan Nagar, Thirunagar, Madurai-625006
              </span>
            </div>

            <div className="flex gap-4 text-xl">
              <a href="https://www.instagram.com/hexavision_technologies?igsh=NW5uY2Yxbmp3anZh"><FaInstagram className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
              <a href="https://www.linkedin.com/company/hexavision-technologies/">  <AiFillLinkedin className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
            </div>
          </div>
        </div>

        {/* ================= MAIN NAVBAR ================= */}
        <div className="w-full py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">

            {/* Logo */}
            <div className="w-30 h-30">
              <img
                src={data.hexalogo}
                alt="Logo"
                className="w-full object-contain brightness-200 "
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex flex-1 justify-evenly items-center">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <HashLink
                    to={item.path}
                    className={`px-5 py-3 text-lg font-medium transition duration-300 ${isActive(item.path)
                      ? "text-[#00d9ff]" : "hover:text-[#00d9ff]"
                      }`}
                  >
                    {item.name}
                  </HashLink>
                </li>
              ))}
            </ul>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden w-20 h-20 flex items-center justify-center"
            >
              <CiMenuFries className="text-4xl font-extrabold text-white" />
            </button>
          </div>
        </div>

        {/* ================= OVERLAY ================= */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-blue-400 backdrop-blur-sm md:hidden z-40"
          />
        )}

        {/* ================= MOBILE DRAWER ================= */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white transform transition-transform duration-500 ease-in-out md:hidden z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full px-6 py-6">

            {/* Close Button */}
            <div className="flex justify-end">
              <IoClose
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl text-blue-400! cursor-pointer hover:rotate-90 transition duration-300"
              />
            </div>

            {/* Logo + Company */}
            <div
              className="flex items-center gap-3 mt-2"
              data-aos="fade-right"
            >
              <img
                src={data.hexalogo}
                alt="Logo"
                className="w-22"
              />
              <div>
                <h2 className="text-lg font-bold text-black/70">
                  Hexavision Technologies
                </h2>
                <p className="text-xs text-gray-500">
                  Digital Transformation Partner
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-col">
              {menuItems.map((item, index) => (
                <HashLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  className={`py-4 border-b border-gray-200 text-lg font-medium transition-all duration-300 hover:pl-3 ${isActive(item.path)
                    ? "text-blue-400 border-blue-400"
                    : "text-gray-800 hover:text-blue-400"
                    }`}
                >
                  {item.name}
                </HashLink>
              ))}
            </div>

            {/* Social Icons Bottom */}
            <div className="mt-auto pt-6 flex justify-center gap-6 text-2xl text-gray-600">
              <a href="https://www.instagram.com/hexavision_technologies?igsh=NW5uY2Yxbmp3anZh"><FaInstagram className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
              <a href="https://www.linkedin.com/company/hexavision-technologies/">  <AiFillLinkedin className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
            </div>

          </div>
        </div>

      </nav>

      {/* <ServicesSlider/> */}
      <>
        <Cloud />
        <Aiml />
        <Security />
        <Web />
        <Mobile />
        <Data />
      </>
      <Footer />

      {/* set top button */}
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


    </div>
  );
};

export default OurServices;