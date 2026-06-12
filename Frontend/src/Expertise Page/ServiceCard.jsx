import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';


const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 1000, damping: 40 });
    const mouseYSpring = useSpring(y, { stiffness: 1000, damping: 40 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const auraX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const auraY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (event) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
    };

    return (
        <div className="perspective-distant relative z-30">
            <motion.div
                ref={cardRef}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => { x.set(0); y.set(0); }}
                className={`relative z-40 ${service?.points ? 'max-w-sm min-h-105' : 'max-w-sm min-h-87.5'} rounded-[50px] overflow-hidden p-10 flex flex-col bg-white border-2 cursor-pointer group border-transparent hover:border-slate-200 transition-shadow duration-300 hover:shadow-2xl `}
            >
                <motion.div
                    className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(400px circle at var(--x) var(--y), ${service.auraColor}, transparent 80%)`,
                        "--x": auraX,
                        "--y": auraY
                    }}
                />


                {
                    service.img ? (
                        <div style={{ transform: "translateZ(60px)" }} className="relative z-50 mb-8">
                            <img src={service.img} alt={service.title} className="w-16 h-16 flex items-center justify-center" />
                        </div>
                    ) : (
                        <div style={{ transform: "translateZ(60px)" }} className="relative z-50 mb-8">
                            <div className="w-16 h-16 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                                {service.icon}
                            </div>
                        </div>
                    )
                }

                <div style={{ transform: "translateZ(40px)" }} className="relative z-50">
                    <h3 className="text-2xl font-bold mb-4 tracking-tight tinos-bold-italic text-gray-900 leading-tight">
                        {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5 text-gray-500 tinos-regular-italic group-hover:text-gray-700 transition-colors">
                        {service.desc}
                    </p>
                    {service.points ? (
                        <ul className="space-y-4">
                            {service.points.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 tinos-regular-italic group-hover:text-gray-900 transition-colors">
                                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                                    <span className="leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </motion.div>
        </div>
    );
};

export default ServiceCard;