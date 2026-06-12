import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import featurevid from "../assets/images/modern_web_temp.mp4";
import { useContext } from "react";
import { AppContext } from "./Context";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {


  const { data } = useContext(AppContext)

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    // Animating from a small centered clip to full screen
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      ease: "power2.out",
      opacity: 1,
    });
  });

  return (
    <div className="relative w-full overflow-x-hidden bg-white z-20">

      {/* Header Section */}
      <section className="flex flex-col items-center gap-5 px-4 pt-20 pb-12 text-center">
        <p className="text-sm md:text-lg uppercase tracking-[0.3em] text-black">
          Welcome to HexaVision
        </p>

        <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Technologies We Work With
        </h1>

        <p className="max-w-2xl text-base md:text-lg text-black/80">
          Building high-performance mobile apps, responsive websites,
          and scalable backend solutions using modern technologies.
        </p>
      </section>

      {/* Desktop Video Section */}
      <section className="hidden md:flex justify-center items-center py-12" id="clip">
        <div className="mask-clip-path relative h-[60vh] w-[40vw] overflow-hidden rounded-3xl shadow-xl">
          <video
            src={featurevid}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Mobile Video Section */}
      <section className="flex md:hidden justify-center ">
        <div className="relative h-75 w-full overflow-hidden rounded-2xl">
          <video
            src={data.welcome}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>


    </div>
  );
};

export default About;