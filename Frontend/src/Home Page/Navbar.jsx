import { useContext } from "react";
import { AppContext } from "../Home Page/Context";
import { useState ,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const {icons,data} = useContext(AppContext)

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Expertise", path: "/expertise" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  /* ================= BODY SCROLL LOCK ================= */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  /* ================= ACTIVE LINK FUNCTION ================= */
  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const phoneNumber = "9080173573"; // Replace with your number
  const message = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <nav className="relative  overflow-hidden pt-3 z-50 bg-transparent text-white">

      {/* ================= TOP BAR ================= */}
      <div className="hidden md:block py-0 text-sm w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5">
          <div className="flex gap-20 font-medium">
            <span>📞 Call Us: +91 80720 75050</span>
            <span>
              📍 Plot No 58, 24/38, Pandiyan Nagar, Thirunagar, Madurai-625006
            </span>
          </div>

          <div className="flex gap-4 text-xl">
            <a href="https://www.instagram.com/hexavision_technologies?igsh=NW5uY2Yxbmp3anZh"><icons.FaInstagram className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><icons.FaWhatsapp className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
            <a href="https://www.linkedin.com/company/hexavision-technologies/">  <icons.AiFillLinkedin className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="w-full py-4">
        <div className="max-w-8xl mx-auto flex items-center justify-between px-3 md:justify-evenly">

          {/* Logo */}
          <div className="w-36">
            <img
              src={data.hexalogo}
              alt="Logo"
              className="w-full object-contain z-50 brightness-125"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center space-x-5 items-center ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative px-5 py-3 text-lg font-medium transition-all duration-300 inline-block group ${isActive(item.path) ? "text-[#00d9ff]" : "text-white"
                    }`}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 inline-block">
                    {item.name}
                  </span>

                  {/* Bottom Line Element */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#00d9ff] transition-all duration-300 ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center ms-10 gap-x-5">
            <Link to="/login">
              <button className="hidden md:block bg-linear-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="hidden md:block bg-linear-to-r from-blue-500 to-cyan-600 text-white px-5 py-2 rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                Register
              </button>
            </Link>
          </div>


          {/* Hamburger */}
          <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden w-20 h-20 flex items-center justify-center"
        >
          <icons.CiMenuFries className="text-4xl font-extrabold text-white" />
        </button>
      </div>
    </div>

      {/* ================= OVERLAY ================= */ }
  {
    isMenuOpen && (
      <div
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
      />
    )
  }

  {/* ================= MOBILE DRAWER ================= */ }
  <div
    className={`fixed top-0 right-0 h-full w-full bg-white transform transition-transform duration-500 ease-in-out md:hidden z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
  >
    <div className="flex flex-col h-full px-6 py-6">

      {/* Close Button */}
      <div className="flex justify-end">
        <icons.IoClose
          onClick={() => setIsMenuOpen(false)}
          className="text-3xl text-blue-400 cursor-pointer hover:rotate-90 transition duration-300"
        />
      </div>

      {/* Logo + Company */}
      <div
        className="flex items-center justify-center gap-3 mt-2 "
        data-aos="fade-right"
      >
        <img
          src={data.hexalogo}
          alt="Logo"
          className="w-20 object-contain "
        />
        <div>
          <h2 className="text-sm font-bold text-black/70">
            Hexavision Technologies
          </h2>
          <p className="text-xs text-black/80">
            Digital Transformation Partner
          </p>
        </div>
      </div>


      {/* Links */}
      <div className="mt-8 flex flex-col">
        {menuItems.map((item, index) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            data-aos="fade-left"
            data-aos-delay={index * 100}
            className={`py-4 border-b border-gray-200 text-lg font-medium transition-all duration-300 hover:pl-3 ${isActive(item.path)
              ? "text-blue-400 border-blue-400"
              : "text-gray-900 hover:text-blue-400"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Link to="/login">
        <button className="block mt-5 w-full bg-linear-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
          Login
        </button>
      </Link>

      {/* Social Icons Bottom */}
      <div className="mt-auto pt-6 flex justify-center gap-6 text-2xl text-gray-600">
        <a href="https://www.instagram.com/hexavision_technologies?igsh=NW5uY2Yxbmp3anZh"><icons.FaInstagram className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><icons.FaWhatsapp className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
        <a href="https://www.linkedin.com/company/hexavision-technologies/">  <icons.AiFillLinkedin className="hover:scale-110 transition duration-300 cursor-pointer" /></a>
      </div>

    </div>
  </div>

    </nav >
  );
}
