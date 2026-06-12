import React, { useState, useEffect } from "react";
import { data } from "../assets/assets";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      logo: data.hexalogo,
      name: "Ananda Mudi",
      text: "The graphic design from iStep Solutions is top-notch. They perfectly captured my brand."
    },
    {
      id: 2,
      logo: data.hexalogo,
      name: "Ramya",
      text: "iStep Solutions exceeded all expectations. Their digital strategy delivered outstanding results."
    },
    {
      id: 3,
      logo: data.hexalogo,
      name: "Syed Fayas",
      text: "Professional, smooth, and result-driven. Highly recommended for real digital growth."
    },
    {
      id: 4,
      logo: data.hexalogo,
      name: "Karthik",
      text: "Excellent service and communication. Our engagement rate improved noticeably."
    },
    {
      id: 5,
      logo: data.hexalogo,
      name: "Arjun",
      text: "Excellent service and communication. Our engagement rate improved noticeably."
    }
  ];

  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(getVisibleCount());

  useEffect(() => {
    const resize = () => setVisible(getVisibleCount());
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const nextSlide = () => {
    if (index + visible < testimonials.length) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const isFirst = index === 0;
  const isLast = index + visible >= testimonials.length;

  return (
    
    <section className="relative overflow-hidden py-20 z-20 bg-transparent">
      {/* TITLE */}
      <h2 className="
        text-4xl font-bold text-center mb-12
        text-[#cbbcb6]
      ">
        Testimonial
      </h2>

      {/* SLIDER WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center  gap-6"> 

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          disabled={isFirst}
          className={`
            text-3xl px-4 
            transition 
            ${isFirst
              ? "text-gray-600 cursor-not-allowed"
              : "text-white hover:text-orange-500"}
          `}
        >
          ❮
        </button>

        {/* CARDS */}
        {/* <div className="flex gap-6 flex-1 justify-center">
          {testimonials
            .slice(index, index + visible)
            .map((item) => (
              <div
                key={item.id}
                className="
                  bg-white
                  rounded-2xl
                  shadow-md
                  p-8
                  w-full max-w-sm
                  text-center
                  transition hover:shadow-xl
                "
              >
                <img
                  src={item.logo}
                  alt="logo"
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />

                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
        </div> */}

        <div className="flex gap-12 flex-1  justify-center ">
          {testimonials.slice(index, index + visible).map((item) => (
            <div
              key={item.id}
              className="
        relative flex items-center justify-center
        w-full max-w-80
        rounded-3xl
        transition-all duration-500
        hover:-translate-y-4
       

      "
            >
              <div 
                className="
          relative flex flex-col items-center gap-6
          p-9 rounded-[22px]
          border border-black/30 bg-none
          md:bg-[url('https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg')] bg-cover  text-black
          transition-all duration-500
         
          
          after:content-['']
          after:absolute
          after:top-[8%]
          after:left-1/2
          after:w-[80%]
          after:h-[80%]
          after:-translate-x-1/2
          after:bg-blue-400/50
          after:-z-20
          after:rounded-[inherit]
          after:origin-bottom
          after:transition-all
          after:duration-500
          
          hover:after:rotate-[4deg]
          hover:after:top-2
          hover:after:w-full
          hover:after:h-full
        "
              >
                <img
                  src={item.logo}
                  alt="logo"
                  className="w-24 h-16 object-cover"
                />

                <h3 className="text-lg font-semibold">
                  {item.name}
                </h3>

                <p className="text-md  font-medium text-center">
                  {item.text}
                </p>

              </div>
            </div>
          ))}
        </div>



        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          disabled={isLast}
          className={`
            text-3xl px-4
            transition 
            ${isLast
              ? "text-gray-600 cursor-not-allowed"
              : "text-white hover:text-orange-500"}
          `}
        >
          ❯
        </button>

      </div>
    </section>
  );
};

export default Testimonial;
