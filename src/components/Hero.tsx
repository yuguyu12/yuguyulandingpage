'use client';

import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden min-h-screen flex items-center">
            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-yellow-500/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-sm text-sm font-semibold text-yellow-400 cursor-default hover:bg-white/10 transition-colors duration-300">
                            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                            <span>The Yuguyu Experience</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                            Not Just A Gym. <br />
                            <span className="text-gradient-gold">A Standard.</span>
                        </h1>

                        <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                            An intelligent operating ecosystem for modern fitness leaders. Because exceptional gyms don't run on spreadsheets. They run on Yuguyu. <b>Built for those who build legacies.</b>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                                <span>Request Access</span>
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="pt-8 flex flex-wrap items-center gap-6 text-slate-400 text-sm font-medium border-t border-white/5 mt-8">
                            {['Unify operations.', 'Elevate every member journey.', 'Eliminate revenue leakage.'].map((item, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="flex items-center gap-2"
                                >
                                    <CheckCircle className="text-yellow-500 w-5 h-5" />
                                    <span>{item}</span>
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -10, rotateX: 5 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative mt-12 lg:mt-0 flex justify-center perspective-1000"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                        <motion.div
                            whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative z-10 w-[300px] sm:w-[320px] rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden bg-black"
                        >
                            <div className="aspect-[9/19.5] relative">
                                <Image
                                    src="/yuguyu-premium/assets/1.png"
                                    alt="Yuguyu Dashboard"
                                    fill
                                    className="object-cover"
                                    priority
                                    unoptimized
                                />
                            </div>

                            <div className="absolute top-6 right-4 bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                                Partner Access Active
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
