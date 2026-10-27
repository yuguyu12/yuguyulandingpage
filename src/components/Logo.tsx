'use client';

import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10">
                <motion.div
                    className="absolute inset-0 bg-yellow-400/20 blur-md rounded-lg"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
                    <rect width="40" height="40" rx="12" className="fill-slate-800" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <path d="M12 12L20 22L28 12" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 22V30" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="flex flex-col justify-center">
                <span className="text-xl font-extrabold tracking-tight leading-none text-white group-hover:text-yellow-400 transition-colors">YUGUYU</span>
            </div>
        </div>
    );
};

export default Logo;
