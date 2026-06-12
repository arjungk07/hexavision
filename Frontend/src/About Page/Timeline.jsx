import React from "react";

//images
import journey2 from "../assets/images/journey2.png"
import journey3 from "../assets/images/journey3.jpg"

const timelineData = [
  {
    year: "2024",
    title: "Building Strong Digital Foundations",
    description:
      "Before formal registration, the team behind HexaVision gained hands-on experience through freelance, academic, and project-based work, delivering mobile applications and responsive websites for startups and small businesses. This phase shaped the company’s technical expertise, quality standards, and client-focused approach.",
  },
  {
    year: "2025",
    title: "The Beginning of a Vision",
    description:
      "In 2025, HexaVision Technologies was officially established in Madurai, built on a strong foundation of over two years of industry and project-based experience. The vision was clear from the start: to help businesses grow through innovative, reliable, and result-driven digital solutions.",
  },
  {
    year: "2026",
    title: "Expansion & Innovation",
    description:
      "HexaVision started expanding its team and exploring emerging technologies, focusing on delivering innovative solutions that combine creativity and performance for clients globally.",
  },
  {
    year: "2027",
    title: "Scaling New Heights",
    description:
      "With a stronger foundation and client trust, HexaVision continues to scale, building complex digital products, exploring AI integration, and focusing on global partnerships and collaborations.",
  },
];

const Timeline = () => {
  return (
    <section className="relative overflow-hidden py-20 z-20 bg-transparent">
      <div className="container mx-auto px-6 max-w-300">
        {/* title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-white"
          data-aos="fade-up"
        >
          Our Development Journey
        </h2>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-400 to-indigo-600 hidden md:block"></div>

          <div className="space-y-20">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${!isEven && "md:flex-row-reverse"
                    }`}
                >
                  {/* Card Section */}
                  <div
                    className="w-full md:w-1/2 md:px-6"
                    data-aos={isEven ? "fade-right" : "fade-left"} data-aos-duration="300"
                  >
                    <div className="relative group bg-gray-50 text-black p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-3">

                      {/* Animated Round Badge */}
                      <div className="absolute -top-6 left-6">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-500 text-white font-bold shadow-lg animate-bounce cursor-pointer group">

                          <p className="transition-transform duration-700 group-hover:rotate-360">
                            {item.year}
                          </p>

                        </div>
                      </div>


                      <h3 className="text-xl font-bold mt-6 mb-4">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-relaxed font-medium text-black/70 group-hover:text-black">
                        {item.description}
                      </p>

                      {/* Background Decorative Blur */}
                      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-orange-500 opacity-20 blur-3xl rounded-full"></div>
                    </div>
                  </div>

                  {/* 3D Image Section */}
                  <div
                    className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
                    data-aos="zoom-in" data-aos-duration="300"
                  >
                    {(index === 0 || index === 3 ) && (
                      <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/024/346/431/small/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png"
                        alt="Company Growth 3D"
                        className="w-64 md:w-80 transform hover:scale-110 transition duration-500 drop-shadow-2xl"
                      />
                    )}

                    {(index === 1 ) && (
                      <img
                        src={journey2}
                        alt="Company Growth 3D"
                        className="w-64 md:w-80 transform hover:scale-110 transition duration-500 drop-shadow-2xl"
                      />
                    )}

                    {(index === 2 ) && (
                      <img
                        src={journey3}
                        alt="Company Growth 3D"
                        className="w-64 md:w-80 transform hover:scale-110 transition duration-500 drop-shadow-2xl"
                      />
                    )}
                    
                  </div>
                </div>

              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
