import { CheckCircle2, XCircle } from "lucide-react";

export function ProblemsSolved() {
    return (
        <section className="py-24 bg-hc-grey/10">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-hc-olive/80 block mb-2">The Challenge</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Why traditional interior design fails in healthcare.</h2>
                        <p className="text-ink/70 text-lg leading-relaxed mb-8">
                            Hospitals aren't hotels. Aesthetic decisions cannot override clinical safety.
                            Common mistakes in simple renovation projects often lead to operational bottlenecks and compliance rejections.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded border border-red-100 shadow-sm">
                                <h4 className="flex items-center gap-2 text-red-800 font-bold mb-2 text-sm uppercase tracking-wide">
                                    <XCircle size={18} /> The Risk
                                </h4>
                                <p className="text-ink/80">
                                    "Aesthetic-first" layouts that look good but block stretcher movement or cross-contaminate sterile zones.
                                </p>
                            </div>

                            <div className="bg-hc-teal p-6 rounded shadow-md text-white">
                                <h4 className="flex items-center gap-2 text-hc-yellow font-bold mb-2 text-sm uppercase tracking-wide">
                                    <CheckCircle2 size={18} /> The Blush & Hush Solution
                                </h4>
                                <p className="text-white/90">
                                    Workflow-first planning. We define clean vs. dirty corridors, optimize nurse station visibility, and allow for future equipment upgrades.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <div className="bg-white p-8 border-l-4 border-hc-teal shadow-sm">
                            <h3 className="font-bold text-lg text-ink mb-2">OT & ICU Zoning</h3>
                            <p className="text-sm text-hc-olive">Correct pressure gradients and layout zoning to prevent infection spread. We plan specifically for HEPA filter placement and laminar flow.</p>
                        </div>
                        <div className="bg-white p-8 border-l-4 border-hc-teal shadow-sm">
                            <h3 className="font-bold text-lg text-ink mb-2">Outpatient Flow</h3>
                            <p className="text-sm text-hc-olive">Reducing patient waiting times through intelligent reception and consultation room positioning.</p>
                        </div>
                        <div className="bg-white p-8 border-l-4 border-hc-teal shadow-sm">
                            <h3 className="font-bold text-lg text-ink mb-2">Material Selection</h3>
                            <p className="text-sm text-hc-olive">Anti-bacterial, anti-static, and joint-free flooring/cladding that withstands harsh hospital-grade cleaning agents.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
