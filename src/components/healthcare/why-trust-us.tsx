"use client";

import { CheckCircle2 } from "lucide-react";

export function WhyTrustUs() {
    const reasons = [
        "Clear communication",
        "Practical solutions",
        "Execution-oriented designs",
        "Transparent cost planning",
        "Long-term functionality focus"
    ];

    const facilities = [
        "Multi-Speciality Hospitals",
        "Fertility & Maternity Centres",
        "Children’s Hospitals",
        "Clinics & Polyclinics",
        "Diagnostic Centres",
        "Pharmacies"
    ];

    return (
        <section className="py-24 bg-hc-surface">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Why Doctors & Hospitals Trust Us</h2>
                        <p className="text-hc-olive text-lg leading-relaxed mb-8">
                            We don't just design; we solve operational complexities before they are built.
                        </p>

                        <div className="space-y-4">
                            {reasons.map((reason, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-hc-teal w-5 h-5 flex-shrink-0" />
                                    <span className="text-ink font-medium text-lg">{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-hc-grey/10 p-8 md:p-12 rounded-lg border border-hc-grey/20">
                        <h3 className="text-xl font-bold mb-6 text-ink uppercase tracking-wide">Facilities We Work With</h3>
                        <ul className="grid gap-3">
                            {facilities.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-ink/80 text-lg">
                                    <div className="w-1.5 h-1.5 rounded-full bg-hc-teal flex-shrink-0"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
