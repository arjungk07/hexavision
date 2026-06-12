import React from "react";
import { useContext } from "react";
import { AppContext } from "../Home Page/Context";

export default function DevelopmentJourney() {

    const {array} = useContext(AppContext);

 
  
  return (
    <section className="pb-20  overflow-hidden">

      {/* Floating Animation */}
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-18px) rotateY(8deg); }
          100% { transform: translateY(0px) rotateY(0deg); }
        }
        `}
      </style>

      {/* Section Title */}
      <div data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-5"
          data-aos="fade-up"
        >
          <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Our Development</span> Journey
        </h2>

        <p
          className="text-white text-base mb-24 md:text-lg lg:text-xl mx-auto leading-relaxed px-4 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A transparent, step-by-step process designed to deliver exceptional results
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-linear-to-b from-blue-400 via-blue-300 to-cyan-400 -translate-x-1/2 hidden md:block"></div>

        {array[1].steps.map((item, index) => (
          <div
            key={index}
            className={`mb-24 flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
          >

            {/* 3D IMAGE SIDE */}
            <div
              className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-duration="300"
              data-aos-delay={index * 100}
            >
              <div
                className="relative group"
                style={{
                  animation: "float 6s ease-in-out infinite",
                  perspective: "1200px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-72 md:w-96 transition-all duration-700 
                  group-hover:scale-110 
                  group-hover:transform-[rotateY(12deg)_rotateX(5deg)] 
                  "
                />
              </div>
            </div>

            {/* TIMELINE DOT (ZOOM ANIMATION) */}
            <div
              className="hidden md:flex items-center justify-center 
              w-14 h-14 rounded-full 
              bg-linear-to-br from-blue-500 to-cyan-400 
              text-white font-bold text-lg 
              shadow-xl z-10 
              hover:scale-110 transition duration-500"
              data-aos="zoom-in" data-duration="300"
              data-aos-delay={index * 250 + 100}
            >
              {index + 1}
            </div>

            {/* CONTENT SIDE */}
            <div
              className="md:w-1/2 w-full px-4"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="300"
              data-aos-delay={index * 200 + 100}
            >
              <div
                className="relative bg-white border border-[#e74c3c]/20 
                rounded-3xl p-8 shadow-lg 
                hover:shadow-[0_30px_60px_rgba(231,76,60,0.15)] 
                hover:-translate-y-4 
                transition-all duration-500 group"
              >

                {/* Phase Badge */}
                <div
                  className="absolute -top-7 left-8 w-14 h-14 
                  bg-linear-to-br from-blue-500 to-cyan-400
                  text-white rounded-full 
                  flex items-center justify-center 
                  font-bold text-lg shadow-xl 
                  group-hover:scale-110 
                  transition-transform duration-500"
                  data-aos="zoom-in" data-aos-duration="300"
                  data-aos-delay={index * 250 + 100}
                >
                  {index + 1}
                </div>

                <span className="text-sm font-semibold text-blue-500/80 block mb-2 mt-6 tracking-wider">
                  {item.phase}
                </span>

                <h4 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-500/80 transition duration-300">
                  {item.title}
                </h4>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-6 h-6 rounded-full bg-blue-500/80 text-white flex items-center justify-center text-xs shadow-md">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
