import { createContext, useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { data } from "../assets/assets.js";
import { TiLocationArrow } from "react-icons/ti";
import { FaDatabase } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaMobileScreen } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { Cloud, Cpu, ShieldCheck, Smartphone, Globe, ArrowRight } from 'lucide-react';


export const AppContext = createContext();

const AppContextProvider = (props) => {




   function useIsMobile() {
     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
   
     useEffect(() => {
       const handleResize = () => {
         setIsMobile(window.innerWidth < 768);
       };
   
       window.addEventListener("resize", handleResize);
   
       return () => {
         window.removeEventListener("resize", handleResize);
       };
     }, []);
   
     return isMobile;
   }

   const icons = {
      CiMenuFries: CiMenuFries,
      IoClose: IoClose,
      FaInstagram: FaInstagram,
      FaFacebook: FaFacebook,
      FaYoutube: FaYoutube,
      AiFillLinkedin: AiFillLinkedin,
      FaWhatsapp: FaWhatsapp,
      TiLocationArrow,
      FaDatabase,
      TbWorld,
      FaMobileScreen,
      FaUserSecret,
      FaCloud,
      FaRobot,
      ArrowRight
   };

   const array = [
      {
         partners: [
            {
               id: 1,
               img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg",
               alt: "android"
            },
            {
               id: 2,
               img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1280px-Meta-Logo.png",
               alt: "meta"
            },
            {
               id: 3,
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKUd8TKlGho5jUUcPimr0MKnVEyIP3uI-TQ&s",
               alt: "github"
            },
            {
               id: 4,
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVSd33oA3yoXOD1fal7AiilQMv5Sh4PasGw&s",
               alt: "linux"
            },
         ]
      },
      {
         steps: [
            {
               phase: "Phase 01",
               title: "Discovery & Planning",
               points: ["Requirements gathering", "Project scope definition"],
               desc: "We conduct in-depth analysis of your requirements and create a roadmap for success.",
               image: data.timeline1,
            },
            {
               phase: "Phase 02",
               title: "UI/UX Design",
               points: ["Wireframing & prototyping", "User testing & iteration"],
               desc: "Our designers craft intuitive interfaces focused on seamless navigation.",
               image: data.timeline2,
            },
            {
               phase: "Phase 03",
               title: "Development",
               points: ["Clean, maintainable code", "Regular progress updates"],
               desc: "We implement your solution using modern technologies and agile methodologies.",
               image: data.timeline3,
            },
            {
               phase: "Phase 04",
               title: "Testing & QA",
               points: ["Manual & automated testing", "Bug fixing & optimization"],
               desc: "Rigorous testing ensures performance, security, and reliability.",
               image: data.timeline4,
            },
            {
               phase: "Phase 05",
               title: "Launch & Support",
               points: ["Deployment & monitoring", "Continuous maintenance"],
               desc: "We deploy your product and provide ongoing support post-launch.",
               image: data.timeline5,
            },
         ]
      },
      {
         solutions: [
            {
               id: "cloud",
               title: "Cloud Solutions",
               description: "Flexible infrastructure to store data and scale applications globally.",
               icon: <Cloud />,
               iconColor: "text-blue-500",
               bgImage: data.cloudImage,
               auraColor: "rgba(59, 130, 246, 0.15)"
            },
            {
               id: "aiml",
               title: "AI & ML",
               description: "Harnessing neural networks to automate complex decision-making.",
               icon: <Cpu />,
               iconColor: "text-purple-500",
               bgImage: "https://www.nibib.nih.gov/sites/default/files/inline-images/AI%20600%20x%20400.jpg",
               auraColor: "rgba(168, 85, 247, 0.15)"
            },
            {
               id: "security",
               title: "Cyber Security",
               description: "Enterprise-grade protection systems designed to neutralize threats.",
               icon: <ShieldCheck />,
               iconColor: "text-emerald-500",
               bgImage: "https://eu-images.contentstack.com/v3/assets/blt69509c9116440be8/blt8ffb90a2f64bacfa/6776f4544b281ca5e2bc465a/cybersecurity_NicoElNino-AlamyStockPhoto.jpg",
               auraColor: "rgba(16, 185, 129, 0.15)"
            },
            {
               id: "mobile",
               title: "Mobile Dev",
               description: "Native and cross-platform mobile experiences built for speed.",
               icon: <Smartphone />,
               iconColor: "text-rose-500",
               bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
               auraColor: "rgba(244, 63, 94, 0.15)"
            },
            {
               id: "web",
               title: "Web Tech",
               description: "Modern web architectures utilizing Next.js and cloud deployments.",
               icon: <Globe />,
               iconColor: "text-cyan-500",
               bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
               auraColor: "rgba(6, 182, 212, 0.15)"
            },
            {
               id: "data",
               title: "Data Analytics",
               description: "Turning raw data into actionable insights with advanced visualization.",
               icon: <Globe />, // Replace with appropriate icon
               iconColor: "text-orange-500",
               bgImage: "https://d2nzy1qhita6w.cloudfront.net/media/magefan_blog/What_is_a_Data_Analyst_1_.jpg",
               auraColor: "rgba(249, 115, 22, 0.15)"
            }
         ]
      }
   ]
  

   const value = {
      icons, data, array, useIsMobile
   };

   return (
      <AppContext.Provider value={value}>
         {props.children}
      </AppContext.Provider>
   );
};


export default AppContextProvider;