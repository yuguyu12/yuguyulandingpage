'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

const DigitalTwin = () => {
    return (
        <section id="twin" className="py-24 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section 1: Member Experience */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Your Gym's <br />
                            <span className="text-yellow-400">Digital Twin.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Give your members the modern experience they expect. From workout tracking to diet plans, Yuguyu extends your facility into their pocket.
                        </p>

                        <div className="space-y-4 pt-4">
                            {['Seamless Attendance Check ins', 'Personalized Workout Plans', 'Nutrition & Diet Tracking', 'Membership Renewals'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-slate-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative flex justify-center"
                    >
                        <div className="absolute inset-0 bg-yellow-400/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-[300px] rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden bg-black rotate-[-5deg] hover:rotate-0 transition-all duration-500">
                            <div className="aspect-[9/19.5] relative">
                                <Image
                                    src="/yuguyu-premium/assets/2.png"
                                    alt="Member App Interface"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Owner Dashboard */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Total Control. <br />
                            <span className="text-yellow-400">In Real Time.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Stop guessing. Start knowing. Yuguyu's owner dashboard gives you a bird's eye view of your entire operation, from revenue to retention.
                        </p>
                        <button className="btn-primary">
                            Explore Dashboard
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="glass-panel p-4 rounded-xl border-yellow-400/10 shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src="/yuguyu-premium/assets/owner_dashboard.png"
                                alt="Owner Dashboard"
                                width={800}
                                height={600}
                                className="rounded-lg w-full h-auto"
                                unoptimized
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DigitalTwin;
