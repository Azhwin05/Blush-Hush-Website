"use client";

import { Droplets, HeartPulse, Signpost } from "lucide-react";

export function BrandingPhilosophy() {
    return (
        <section className="py-24 bg-hc-surface">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-hc-olive block mb-3">Healthcare Branding</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-ink mb-6">Trust, not Noise.</h2>
                        <div className="w-20 h-1 bg-hc-teal mb-8"></div>
                        <p className="text-xl text-hc-olive/90 leading-relaxed font-serif italic mb-8">
                            "Branding in healthcare is about confidence, clarity, and care."
                        </p>
                        <p className="text-ink/70 text-lg leading-relaxed">
                            We believe healthcare environments should communicate safety and professionalism.
                            Our branding strategy focuses on healing colour psychology, wayfinding clarity, and patient experience design.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <div className="flex gap-5 p-6 border-b border-hc-grey/30">
                            <div className="w-12 h-12 rounded-full bg-hc-sky/10 flex items-center justify-center shrink-0">
                                <Droplets className="text-hc-sky w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-ink mb-2">Healing Colour Psychology</h4>
                                <p className="text-sm text-ink/70">Calm & compliant interior themes that reduce patient anxiety.</p>
                            </div>
                        </div>
                        <div className="flex gap-5 p-6 border-b border-hc-grey/30">
                            <div className="w-12 h-12 rounded-full bg-hc-teal/10 flex items-center justify-center shrink-0">
                                <Signpost className="text-hc-teal w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-ink mb-2">Signage & Wayfinding</h4>
                                <p className="text-sm text-ink/70">Clear navigation systems for critical zones like ER, OPD, and ICU.</p>
                            </div>
                        </div>
                        <div className="flex gap-5 p-6">
                            <div className="w-12 h-12 rounded-full bg-hc-yellow/10 flex items-center justify-center shrink-0">
                                <HeartPulse className="text-hc-yellow w-6 h-6 text-yellow-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-ink mb-2">Patient Experience</h4>
                                <p className="text-sm text-ink/70">Reception and waiting areas designed to reassure and comfort.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
