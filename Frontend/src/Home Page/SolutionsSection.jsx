import React, { useContext, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { AppContext } from './Context';
import { AnimatedTitle } from '../Home Page/ServiceCards'

/**
 * MagneticButton: Pulls toward the mouse cursor when nearby.
 */
const MagneticButton = ({ children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    mouseX.set(x * 0.4);
    mouseY.set(y * 0.4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-black transition-colors cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

const SolutionCard = ({ solution, index }) => {

  const {icons, useIsMobile} = useContext(AppContext)

  const isMobile = useIsMobile();

  const cardRef = useRef(null);

  // Tilt & Aura Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Aura Position Mapping
  const auraX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const auraY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  return (
    <div className="perspective-distant w-full">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        onMouseMove={isMobile ? handleMouseMove : undefined}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative group w-full h-100 bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-500"
      >
        {/* Dynamic Aura Background Layer */}
        <motion.div
          className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at var(--x) var(--y), ${solution.auraColor}, transparent 80%)`,
            "--x": auraX,
            "--y": auraY
          }}
        />

        {/* Header Image Area */}
        <div className="relative h-44 w-full overflow-hidden bg-gray-50 border-b border-gray-50">
          <img
            src={solution.bgImage}
            alt={solution.title}
            className="w-full h-full object-cover grayscale-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
          />

          {/* Icon Float Layer */}
          <div style={{ transform: "translateZ(50px)" }} className="absolute top-6 left-6 z-20">
            <div className={`p-4 rounded-2xl bg-white shadow-xl ${solution.iconColor} border border-gray-50`}>
              {React.cloneElement(solution.icon, { size: 24 })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 space-y-4 h-56 flex flex-col justify-between relative z-10">
          <div style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-xl font-bold tinos-bold-italic text-gray-950 uppercase tracking-tight mb-2">
              {solution.title}
            </h3>
            <p className="text-[14px] text-gray-500 tinos-regular-italic leading-relaxed group-hover:text-gray-700 transition-colors">
              {solution.description}
            </p>
          </div>

          <div style={{ transform: "translateZ(0px)" }} className='relative z-50'>
            {/* Wrap the MagneticButton content with HashLink */}
            <HashLink
              smooth
              to={`/expertise#${solution.id}`}
              className="no-underline"
            >
              <MagneticButton>
                <span className="text-gray-900 text-sm">Read more</span>
                <div className="p-2 rounded-full bg-black text-white group-hover:bg-slate-800 transition-all">
                  <icons.ArrowRight size={14} />
                </div>
              </MagneticButton>
            </HashLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SolutionsSection = () => {
     
  const {array} = useContext(AppContext)

  return (
    <section className="py-20 md:px-10 px-5 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16 tracking-tighter">
          Digital Solutions
        </h2> */}

        <AnimatedTitle text="Digital Solutions" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {array[2].solutions.map((item, index) => (
            <SolutionCard key={item.title} solution={item} index={index} />
          ))}

          {/* CTA Card */}
          <div className="h-100 rounded-[40px] border-2 border-dashed border-white/20 flex flex-col justify-center items-center text-center p-10 bg-white/5 backdrop-blur-sm group hover:border-white/40 transition-colors">
            <h4 className="text-white font-bold text-xs uppercase mb-4 tracking-[0.3em]">Start Your Project</h4>
            <p className="text-gray-400 text-sm mb-8 italic">Let's build something great.</p>
            <button className="px-10 py-4 bg-white text-black rounded-full font-bold text-[11px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;