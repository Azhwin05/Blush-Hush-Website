import { Shield } from "lucide-react";

export function ComplianceNABH() {
    return (
        <section className="py-12 md:py-24 bg-hc-teal text-white">
            <div className="container-wide text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 md:mb-8">
                    <Shield className="text-hc-yellow w-6 h-6 md:w-8 md:h-8" />
                </div>

                <h2 className="text-2xl md:text-5xl font-serif mb-4 md:mb-6 leading-tight">NABH Readiness starts at the Blueprint.</h2>
                <p className="text-white/90 text-base md:text-xl leading-relaxed mb-8 md:mb-12">
                    Compliance isn't a sticker you add at the end. It's built into corridor widths, ramp gradients, air changes per hour, and fire safety integration.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-left">
                    <div className="p-5 md:p-6 border border-white/20 bg-white/10 rounded-lg">
                        <h4 className="text-hc-yellow font-bold text-base md:text-lg mb-2 md:mb-3">Fire Safety (NBC)</h4>
                        <p className="text-sm text-white/80">Sprinkler layouts, smoke detection, and emergency exit width planning as per National Building Code.</p>
                    </div>
                    <div className="p-5 md:p-6 border border-white/20 bg-white/10 rounded-lg">
                        <h4 className="text-hc-yellow font-bold text-base md:text-lg mb-2 md:mb-3">Infection Control</h4>
                        <p className="text-sm text-white/80">Seamless surfaces, coving details, and isolation room negative pressure planning.</p>
                    </div>
                    <div className="p-5 md:p-6 border border-white/20 bg-white/10 rounded-lg">
                        <h4 className="text-hc-yellow font-bold text-base md:text-lg mb-2 md:mb-3">Patient Safety</h4>
                        <p className="text-sm text-white/80">Anti-skid flooring, grab bars, and accessible toilet designs for elderly and differently-abled usage.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
