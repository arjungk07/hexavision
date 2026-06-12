import React from 'react';
import { useState } from 'react';
import Navbar from '../Home Page/Navbar'
import Timeline from '../About Page/Timeline';

import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from '../Home Page/Footer';



import googleAward from "../assets/images/google.jpg";
import Showcase from '../About Page/Showcase';
import AboutHead from './AboutHead';



const About = () => {


  // awards javascript content

  const awards = [
    googleAward,
    googleAward,
    googleAward,
    googleAward,
    googleAward,
  ];

  const VISIBLE_COUNT = 5;

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const visibleAwards = awards.slice(startIndex, startIndex + VISIBLE_COUNT);

  const handleNext = () => {
    if (startIndex + VISIBLE_COUNT < awards.length) {
      setDirection("right");
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection("left");
      setStartIndex(startIndex - 1);
    }
  };










  return (
    <div>


      {/* Navbar */}

      <Navbar />

      {/* about Head */}

      <AboutHead />

      {/* our timeline content */}

      < Timeline />


      <Showcase />


      <Footer />


    </div >
  );
};

export default About;




