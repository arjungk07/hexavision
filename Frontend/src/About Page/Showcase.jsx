import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = [
  {
    title: "Location - 1",
    location: "Thirunagar",
    subtitle:
      "Address: Plot No 58,24/38, Pandiyan Nagar, Thirunagar, Madurai-625006. Phone: +91 80720 75050",
    phone: "Phone : +91 90801 73573",
    email: "Email : hexavisiontechnologies@gmail.com",
  },
  {
    title: "Location - 2",
    location: "KK Nagar",
    subtitle: "Address: 32, Bharathiyar Street, KK Nagar, Madurai-625020, Tamil Nadu.",
    phone: "Phone : +91 80720 75050",
    email: "Email : hexavisiontechnologies@gmail.com",
  },
];

const Showcase = () => {
  const [index, setIndex] = useState(0);
  console.log(index)

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section className="relative overflow-hidden py-16 z-20 bg-transparent">

      <h1 className="text-3xl md:text-5xl text-center font-bold text-white mb-12">
        Contact Info
      </h1>

      <div className="container mx-auto px-6 md:px-10 max-w-6xl">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Map */}
          <div
            className="w-full lg:w-1/2 h-75 md:h-100 rounded-xl overflow-hidden shadow-lg"
            data-aos="slide-right" data-aos-duration="300"
          >

            <iframe
              className="w-full h-full border-0"

              title='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19577316011!2d78.04042150095354!3d9.917826796702249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756992588122!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>

          </div>

          {/* Content */}
          <div
            data-aos="slide-left" data-aos-duration="300"
            className="w-full lg:w-1/2 bg-[#f8f9fa] p-6 md:p-10 rounded-xl shadow-md flex flex-col justify-center"
          >
            <h2 className="text-lg md:text-xl text-gray-500 font-medium mb-1">
              {data[index].title}
            </h2>

            <h2 className="text-2xl md:text-3xl text-black font-bold mb-4">
              {data[index].location}
            </h2>

            <p className="text-black text-sm md:text-base font-medium leading-7 mb-4">
              {data[index].subtitle}
            </p>

            <p className="text-black text-sm md:text-base font-medium leading-7 mb-2">
              {data[index].phone}
            </p>

            <p className="text-black text-sm md:text-base font-medium leading-7 mb-3">
              {data[index].email}
            </p>



            <a
              href="#"
              className="inline-block text-[#ff5a1f] font-semibold hover:underline"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-6 mt-12">
        {/* <button
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#ff5a1f] text-white flex items-center justify-center transition-all duration-300 hover:border hover:bg-white hover:text-[#ff5a1f] hover:scale-110"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button> */}

        <button
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#ff5a1f] text-white flex items-center justify-center transition-all duration-300 hover:border hover:bg-white hover:text-[#ff5a1f] hover:scale-110"
          onClick={handleNext}
        >
          {
            index === 0 ? (
              <FaArrowRight />
            ) : (
              <FaArrowLeft />
            )
          }
        </button>
      </div>

    </section>
  );
};

export default Showcase;
