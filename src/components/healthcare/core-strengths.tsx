import { ShieldCheck, PenTool, HardHat, Activity } from "lucide-react";

const strengths = [
    {
        title: "Medical Planning & Design",
        icon: <PenTool className="w-8 h-8 text-brass" strokeWidth={1.5} />,
        description: "Layouts that minimize cross-contamination and maximize staff efficiency. We design for function first.",
        benefit: "Reduces future renovation costs."
    },
    {
        title: "NABH Compliance Guidance",
        icon: <ShieldCheck className="w-8 h-8 text-brass" strokeWidth={1.5} />,
        description: "Deep understanding of NBC and NABH guidelines to ensure your facility meets all accreditation standards.",
        benefit: "Ensures smooth licensing approvals."
    },
    {
        title: "Specialized Execution",
        icon: <HardHat className="w-8 h-8 text-brass" strokeWidth={1.5} />,
        description: "Contractors trained in hospital-grade finishes, sterile wall cladding, vinyl flooring, and OT construction.",
        benefit: "Delivers sterile, durable environments."
    },
    {
        title: "Equipment Integration",
        icon: <Activity className="w-8 h-8 text-brass" strokeWidth={1.5} />,
        description: "Coordination with medical device vendors to ensure MGPS points, electrical loads, and clearances are accurate.",
        benefit: "Eliminates expensive rework."
    }
];

export function CoreStrengths() {
    return (
        <section className="py-24 bg-white border-y border-hairline">
            <div className="container-wide">
                <div className="mb-12 border-l-4 border-brass pl-6">
                    <span className="text-xs font-bold tracking-widest uppercase text-secondary block mb-2">Our Core Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-ink">Built on Safety, Driven by Logic.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
                    {strengths.map((item, index) => (
                        <div key={index} className="bg-white p-8 md:p-10 hover:bg-ivory/30 transition-colors group">
                            <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                            <p className="text-sm text-secondary/80 leading-relaxed mb-6">
                                {item.description}
                            </p>
                            <div className="pt-4 border-t border-hairline">
                                <span className="text-xs font-bold text-brass uppercase tracking-wide">Benefit</span>
                                <p className="text-xs text-ink mt-1 font-medium">{item.benefit}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
