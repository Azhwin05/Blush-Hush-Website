"use client";

const steps = [
    { num: "01", title: "Requirement & Workflow Study", desc: "Understanding speciality needs and patient volume." },
    { num: "02", title: "Site Feasibility & Space Planning", desc: "Zoning analysis and potential expansion planning." },
    { num: "03", title: "Functional Design & Zoning", desc: "Detailed department layouts (OPD, IPD, Diagnostics)." },
    { num: "04", title: "Compliance-Aligned Guidance", desc: "Ensuring layouts meet NBC & NABH checklist criteria." },
    { num: "05", title: "Interior Execution", desc: "Material selection, specialized flooring, and installation." },
    { num: "06", title: "Final Readiness & Handover", desc: "Final checklist verification and site handover." }
];

export function DeliveryProcess() {
    return (
        <section className="py-24 bg-hc-teal text-white">
            <div className="container-wide">
                <div className="mb-16 md:flex justify-between items-end">
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold tracking-widest uppercase text-hc-yellow block mb-3">Our Delivery Model</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-white">From Blueprint to Bedside.</h2>
                        <p className="text-white/80 mt-4 text-lg">A structured 6-step approach to healthcare facility delivery.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-white/10 border border-white/20 p-8 rounded-lg relative overflow-hidden group">
                            <div className="absolute -right-4 -top-6 text-[120px] font-serif text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors">
                                {step.num}
                            </div>
                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 bg-hc-yellow/20 text-hc-yellow text-xs font-bold rounded mb-4">Step {step.num}</span>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
