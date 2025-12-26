"use client";

import Image from "next/image";

export function HealthcareLeadership() {
    return (
        <section className="py-24 bg-hc-grey/10 border-t border-hc-grey/30">
            <div className="container-wide">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-xs font-bold tracking-widest uppercase text-hc-olive block mb-3">Healthcare Leadership</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-ink mb-6">Led by Architects & Healthcare Strategists</h2>
                    <p className="text-hc-olive text-lg">
                        Expertise that bridges the gap between clinical functionality and architectural excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Tamilmozhi B */}
                    <div className="bg-hc-surface p-8 md:p-10 border border-hc-grey/30 group hover:border-hc-teal/30 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-2xl font-serif text-ink mb-1">Tamilmozhi B</h3>
                            <p className="text-xs font-bold uppercase tracking-wider text-hc-teal">CEO & Founder</p>
                        </div>
                        <p className="text-ink/80 leading-relaxed">
                            Leads architecture, interiors, creative branding, client vision, and design quality at BH Arch, Interiors and BH Healthcare.
                        </p>
                    </div>

                    {/* Tamil Iniyan B */}
                    <div className="bg-hc-surface p-8 md:p-10 border border-hc-grey/30 group hover:border-hc-teal/30 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-2xl font-serif text-ink mb-1">Tamil Iniyan B</h3>
                            <p className="text-xs font-bold uppercase tracking-wider text-hc-teal">COO & Senior Consultant</p>
                        </div>
                        <p className="text-ink/80 leading-relaxed">
                            Leads healthcare strategy, NABH guidance, OT planning, and project execution. Specialized in regulatory compliance (NBC/NABH).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
