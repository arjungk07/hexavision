import React, { useRef, useState, useContext } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Smartphone, Globe, Shield, Terminal, ArrowRight } from 'lucide-react';
import { AppContext } from './Context';







// AnimatedTitle
export const AnimatedTitle = ({ text }) => {
  const { useIsMobile } = useContext(AppContext);
  const isMobile = useIsMobile();

  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = isMobile
    ? {
        hidden: {
          opacity: 0,
          y: 15,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
          },
        },
      }
    : {
        hidden: {
          opacity: 0,
          y: 30,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      };

  return (
    <motion.h1
      className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};


/**
 * ServiceCard: Individual card with fast-tilt and aura effects.
 */


const ServiceCard = ({ service, index, isMobile }) => {
  const cardRef = useRef(null);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth movement
  const smoothX = useSpring(mouseX, {
    stiffness: 250,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 250,
    damping: 20,
  });

  // 3D Tilt
  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    ["15deg", "-15deg"]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    ["-15deg", "15deg"]
  );

  // Aura position
  const auraX = useTransform(
    smoothX,
    [-0.5, 0.5],
    ["0%", "100%"]
  );

  const auraY = useTransform(
    smoothY,
    [-0.5, 0.5],
    ["0%", "100%"]
  );

  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="relative"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        ref={cardRef}
        initial={{
          opacity:isMobile ? 1 : 0,
          y: isMobile ? 0 : 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
        }}
        whileHover={
          !isMobile
            ? {
              scale: 1.03,
            }
            : {}
        }
        style={
          !isMobile
            ? {
              rotateX,
              rotateY,
              transformStyle:
                "preserve-3d",
              willChange:
                "transform",
            }
            : {}
        }
        onMouseMove={
          !isMobile
            ? handleMouseMove
            : undefined
        }
        onMouseLeave={
          !isMobile
            ? handleMouseLeave
            : undefined
        }
        className="
          group
          relative
          w-[320px]
          h-80
          rounded-[40px]
          bg-white
          overflow-hidden
          p-8
          flex
          flex-col
          justify-between
          shadow-xl
          cursor-pointer
        "
      >
        {/* Aura Glow */}
        {!isMobile && (
          <motion.div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
              pointer-events-none
            "
            style={{
              background: `radial-gradient(
                250px circle at var(--x) var(--y),
                ${service.auraColor},
                transparent 70%
              )`,
              "--x": auraX,
              "--y": auraY,
            }}
          />
        )}

        {/* Icon */}
        <div
          className="relative z-10"
          style={
            !isMobile
              ? {
                transform:
                  "translateZ(60px)",
              }
              : {}
          }
        >
          <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <div
          className="relative z-10"
          style={
            !isMobile
              ? {
                transform:
                  "translateZ(40px)",
              }
              : {}
          }
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {service.title}
          </h3>

          <p className="text-gray-500 leading-relaxed">
            {service.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};



/**
 * Main Showcase Component
 */
export default function ServiceShowcase() {

  const { useIsMobile } = useContext(AppContext);
  const isMobile = useIsMobile();

  const services = [
    {
      title: "Flutter",
      description: "Beautiful cross-platform mobile apps with native performance.",
      icon: <Smartphone className="text-blue-500" />,
      auraColor: "rgba(59, 130, 246, 0.15)",
      borderColor: "blue-400"
    },
    {
      title: "React",
      description: "Interactive and responsive UI website development.",
      icon: <Globe className="text-cyan-500" />,
      auraColor: "rgba(6, 182, 212, 0.15)",
      borderColor: "cyan-400"
    },
    {
      title: "Angular",
      description: "Enterprise-grade web interfaces and applications.",
      icon: <Shield className="text-red-500" />,
      auraColor: "rgba(239, 68, 68, 0.12)",
      borderColor: "red-400"
    },
    {
      title: "Python",
      description: "Backend automation & robust web applications.",
      icon: <Terminal className="text-yellow-600" />,
      auraColor: "rgba(202, 138, 4, 0.12)",
      borderColor: "yellow-400"
    }
  ];



  return (
    <section className="py-20 relative px-4 z-10">

      <AnimatedTitle text="Our Services" />

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} isMobile={isMobile} />
        ))}
      </div>

    </section>
  );
}