"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

function ZoningDiagram() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-lg">
            <defs>
                <filter id="glass" x="0" y="0" width="100%" height="100%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>
            </defs>
            {/* Public Zone */}
            <rect x="20" y="20" width="100" height="260" rx="8" fill="#F7F3EE" stroke="#E7DED5" strokeWidth="2" />
            <text x="70" y="150" textAnchor="middle" fill="#5C5C5C" fontSize="12" fontWeight="bold" transform="rotate(-90, 70, 150)">PUBLIC / WAITING</text>

            {/* Semi-Sterile */}
            <rect x="140" y="40" width="100" height="220" rx="8" fill="#E8EDEB" stroke="#7C8F83" strokeWidth="2" />
            <text x="190" y="150" textAnchor="middle" fill="#2F4F4F" fontSize="12" fontWeight="bold" transform="rotate(-90, 190, 150)">SEMI-STERILE / OPD</text>

            {/* Sterile */}
            <rect x="260" y="60" width="120" height="180" rx="8" fill="#0B1F3B" />
            <text x="320" y="150" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" transform="rotate(-90, 320, 150)">STERILE CORE / OT</text>

            {/* Connectors */}
            <line x1="120" y1="150" x2="140" y2="150" stroke="#B08D57" strokeWidth="2" strokeDasharray="4" />
            <line x1="240" y1="150" x2="260" y2="150" stroke="#B08D57" strokeWidth="2" strokeDasharray="4" />
        </svg>
    );
}

export function HealthcareDifferential() {
    return (
        <section className="section-padding bg-ivory overflow-hidden">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sage font-bold tracking-widest text-xs uppercase mb-4 block">Healthcare Expertise</span>
                        <h2 className="text-3xl md:text-5xl text-ink leading-[1.2] mb-6">
                            Healthcare spaces that function on <span className="text-navy italic">Day One.</span>
                        </h2>
                        <p className="text-secondary text-lg mb-8 leading-relaxed">
                            We design hospitals that function smoothly on Day One — and scale easily in the future. Incorrect zoning can cripple a hospital's efficiency. We get it right on the drawing board.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Surgeon-Centric Planning Paradigm",
                                "Effective OT & Clinical Space Utilization",
                                "Staff Readiness & Workflow Enablement",
                                "Budget-Conscious Infrastructure",
                                "Future Expansion Readiness"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-ink font-medium">
                                    <span className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center text-sage-dark"><Check size={14} /></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 bg-white rounded-2xl shadow-xl border border-hairline"
                    >
                        <div className="absolute top-4 left-6 text-xs text-secondary font-mono uppercase">Typical Zoning Workflow</div>
                        <ZoningDiagram />
                        <div className="mt-6 text-center text-sm text-secondary italic">
                            Optimized flow from Public → Semi-Sterile → Sterile Zones
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
