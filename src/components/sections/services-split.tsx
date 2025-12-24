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
                        className="group relative bg-white rounded-[18px] p-10 md:p-14 border border-hairline shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Home size={120} strokeWidth={0.5} />
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy">
                                <Home size={20} />
                            </span>
                            <span className="text-xs font-bold tracking-widest uppercase text-navy/60">Residential & Commercial</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl mb-4 group-hover:text-brass transition-colors">Interior Design & Execution</h3>
                        <p className="text-secondary text-lg mb-8 leading-relaxed max-w-md">
                            From concept to execution, we handle design, drawings, material planning, and on-site coordination.
                        </p>

                        <ul className="space-y-3 mb-8 text-ink/80">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span> Residential Interiors (Villas, Apartments)</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span> Commercial & Office Workspaces</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span> Clinics, Pharmacies & Labs</li>
                        </ul>

                        <Link href="/services#interiors" className="inline-flex items-center text-navy font-semibold hover:gap-2 transition-all">
                            Explore Interiors <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </motion.div>

                    {/* Pillar B: Healthcare */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group relative bg-navy rounded-[18px] p-10 md:p-14 text-white shadow-xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Stethoscope size={120} strokeWidth={0.5} />
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                                <Stethoscope size={20} />
                            </span>
                            <span className="text-xs font-bold tracking-widest uppercase text-white/60">Specialized Infrastructure</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl mb-4 text-white group-hover:text-brass transition-colors">Healthcare Planning</h3>
                        <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-md">
                            Healthcare design demands responsibility. We plan with clinical workflows and NABH standards in mind.
                        </p>

                        <ul className="space-y-3 mb-8 text-white/90">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span> Clinic & Hospital Planning</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span> OT Layout & Zoning (Sterile/Public)</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span> Equipment & Approvals Coordination</li>
                        </ul>

                        <Link href="/services#healthcare" className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all">
                            Explore Healthcare <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
