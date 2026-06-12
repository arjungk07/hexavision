import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const HeroTitle = ({ text = "Elevate Your Digital Vision", containerClass }) => {
  // Split by space to get individual words
  const words = text.split(" ");

  return (
    /* ADDED: flex, flex-wrap, justify-center, and gap-x to handle spacing */
    <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 select-none">
      {words.map((word, wordIndex) => (
        <WordWrapper key={wordIndex} word={word} containerClass={containerClass} />
      ))}
    </div>
  );
};

const WordWrapper = ({ word, containerClass }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      /* ADDED: inline-block ensures words sit side-by-side */
      className="relative inline-block cursor-default overflow-hidden pt-sans-regular"
    >
      {/* Layer 1: Default Base Text */}
      <h1 className={clsx("font-bold text-white whitespace-nowrap", containerClass)}>
        {word}
      </h1>

      {/* Layer 2: Gradient Text Reveal */}
      <motion.h1
        className={clsx(
          "absolute inset-0 font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent pointer-events-none whitespace-nowrap",
          containerClass
        )}
        animate={{
          WebkitMaskImage: isHovered
            ? `radial-gradient(100px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`
            : `radial-gradient(0px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 150, mass: 0.1 }}
      >
        {word}
      </motion.h1>
    </motion.div>
  );
};

export default HeroTitle;