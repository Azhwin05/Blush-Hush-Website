import { Shield } from "lucide-react";

export function ComplianceNABH() {
    return (
        <section className="py-24 bg-navy text-white">
            <div className="container-wide text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-8">
                    <Shield className="text-brass w-8 h-8" />
                </div>

                <h2 className="text-3xl md:text-5xl font-serif mb-6">NABH Readiness starts at the Blueprint.</h2>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12">
                    Compliance isn't a sticker you add at the end. It's built into corridor widths, ramp gradients, air changes per hour, and fire safety integration.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="p-6 border border-white/10 bg-white/5 rounded">
                        <h4 className="text-brass font-bold text-lg mb-3">Fire Safety (NBC)</h4>
                        <p className="text-sm text-white/60">Sprinkler layouts, smoke detection, and emergency exit width planning as per National Building Code.</p>
                    </div>
                    <div className="p-6 border border-white/10 bg-white/5 rounded">
                        <h4 className="text-brass font-bold text-lg mb-3">Infection Control</h4>
                        <p className="text-sm text-white/60">Seamless surfaces, coving details, and isolation room negative pressure planning.</p>
                    </div>
                    <div className="p-6 border border-white/10 bg-white/5 rounded">
                        <h4 className="text-brass font-bold text-lg mb-3">Patient Safety</h4>
                        <p className="text-sm text-white/60">Anti-skid flooring, grab bars, and accessible toilet designs for elderly and differently-abled usage.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
