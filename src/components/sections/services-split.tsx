"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home, Stethoscope } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ServicesSplit() {
    return (
        <section className="section-padding bg-ivory">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Pillar A: Interior Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group relative bg-white rounded-[18px] p-5 md:p-14 border border-hairline shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-5 md:p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Home className="w-[60px] h-[60px] md:w-[120px] md:h-[120px]" strokeWidth={0.5} />
                        </div>

                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                            <span className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy">
                                <Home size={20} />
                            </span>
                            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-navy/60">Residential & Commercial</span>
                        </div>

                        <h3 className="text-2xl md:text-4xl mb-3 md:mb-4 group-hover:text-brass transition-colors">Interior Design & Execution</h3>
                        <p className="text-secondary text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-md">
                            From concept to execution, we handle design, drawings, material planning, and on-site coordination.
                        </p>

                        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-ink/80 text-sm md:text-base">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span> Residential Interiors (Villas, Apartments)</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span> Commercial & Office Workspaces</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span> Clinics, Pharmacies & Labs</li>
                        </ul>

                        <Link href="/services#interiors" className="inline-flex items-center text-navy font-semibold hover:gap-2 transition-all text-sm md:text-base">
                            Explore Interiors <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </motion.div>

                    {/* Pillar B: Healthcare Gateway */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group relative bg-navy rounded-[18px] p-5 md:p-14 text-white shadow-xl overflow-hidden flex flex-col justify-between min-h-[400px]"
                    >
                        {/* Minimal Background Icon */}
                        <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
                            <Stethoscope className="w-[300px] h-[300px]" strokeWidth={0.5} />
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                                    <Stethoscope size={20} />
                                </span>
                                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/60">Specialized Infrastructure</span>
                            </div>

                            <h3 className="text-2xl md:text-4xl text-white group-hover:text-brass transition-colors font-serif">Healthcare Planning</h3>
                        </div>

                        {/* Gateway Link - The only interaction */}
                        <div className="mt-auto pt-10">
                            <Link
                                href="/healthcare"
                                className="group/link inline-flex items-center text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide"
                            >
                                Explore Healthcare
                                <ArrowRight size={14} className="ml-2 opacity-50 group-hover/link:translate-x-1 transition-all" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
