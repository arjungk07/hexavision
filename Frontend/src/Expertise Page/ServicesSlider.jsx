// import { useEffect, useState } from "react";
// import "../styles/our service/ServicesSlider.css";

// import Expertise from "../Home Page/Expertise";
// import Cloud from "../Portfolio Pages/Cloud";
// import Aiml from "../Portfolio Pages/Aiml";
// import Security from "../Portfolio Pages/Security";
// import Mobile from "../Portfolio Pages/Mobile";
// import Web from "../Portfolio Pages/Web";
// import Data from "../Portfolio Pages/Data";


// const services = [
//   { title: "Flutter", desc: "Beautiful cross-platform mobile apps with native performance", icon: FaFlutter },
//   { title: "React", desc: "Interactive and responsive UI website development", icon: FaReact },
//   { title: "Angular", desc: "Enterprise-grade web interfaces and applications", icon: RiAngularjsFill },
//   { title: "Django", desc: "Backend automation & robust web applications", icon: FaPython },
// ];

export default function ServicesSlider() {
  // const [visibleCount, setVisibleCount] = useState(4);

  /* RESPONSIVE CARD COUNT */
  // useEffect(() => {
  //   const updateView = () => {
  //     if (window.innerWidth < 640) {
  //       setVisibleCount(1); // mobile
  //     } else if (window.innerWidth < 1024) {
  //       setVisibleCount(3); // tablet
  //     } else {
  //       setVisibleCount(4); // laptop
  //     }
  //   };

  //   updateView();
  //   window.addEventListener("resize", updateView);
  //   return () => window.removeEventListener("resize", updateView);
  // }, []);

  // const next = () => {
  //   setStart((prev) => (prev + 1) % services.length);
  // };

  // const prev = () => {
  //   setStart((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  // };

  // const visibleCards = Array.from({ length: visibleCount }, (_, i) =>
  //   services[(start + i) % services.length]
  // );

  return (
    <>
      {/* <Cloud/>
      <Aiml/>
      <Security/>
      <Mobile/>
      <Web/>
      <Data/> */}
    </>
  );
}
