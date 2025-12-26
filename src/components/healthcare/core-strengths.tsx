import { ShieldCheck, Activity, LayoutTemplate, Monitor, Pill, HardHat } from "lucide-react";

const strengths = [
    {
        title: "Hospital & Clinic Planning",
        icon: <LayoutTemplate className="w-8 h-8 text-hc-teal" strokeWidth={1.5} />,
        description: "Space planning based on medical workflow. We optimize OPD, IPD, ICU, OT & diagnostics zoning.",
        benefit: "Seamless doctor & patient movement."
    },
    {
        title: "Operation Theatre (OT) Design",
        icon: <Activity className="w-8 h-8 text-hc-teal" strokeWidth={1.5} />,
        description: "Laminar, modular & conventional OT planning with strict sterile & semi-sterile zoning.",
        benefit: "HVAC & material coordination."
    },
    {
        title: "NABH Consulting & Guidance",
        icon: <ShieldCheck className="w-8 h-8 text-hc-teal" strokeWidth={1.5} />,
        description: "NABH-aligned design approach with documentation & layout guidance for practical compliance.",
        benefit: "Readiness without overdesign."
    },
    {
        title: "Medical Equipment Planning",
        icon: <Monitor className="w-8 h-8 text-hc-teal" strokeWidth={1.5} />,
        description: "Equipment placement planning and vendor coordination support for utility compatibility.",
        benefit: "Service-ready layouts."
    },
    {
        title: "Pharmacy & Diagnostic Setup",
        icon: <Pill className="w-8 h-8 text-hc-teal" strokeWidth={1.5} />,
        description: "Efficient pharmacy layout planning for storage dispensing and diagnostic lab interiors.",
        benefit: "Storage & dispensing efficiency."
    },
    {
        title: "Healthcare Interior Execution",
        icon: <HardHat className="w-8 h-8 text-hc-teal" strokeWidth={1.5} />,
        description: "Turnkey execution for multi-speciality hospitals, fertility centres, and children's hospitals.",
        benefit: "Specialized hospital-grade finishes."
    }
];

export function CoreStrengths() {
    return (
        <section className="py-12 md:py-24 bg-hc-surface border-y border-hc-grey/30">
            <div className="container-wide">
                <div className="mb-8 md:mb-12 border-l-4 border-hc-yellow pl-5 md:pl-6">
                    <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-hc-olive block mb-2">Comprehensive Solutions</span>
                    <h2 className="text-2xl md:text-4xl font-serif text-ink">Our Healthcare Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hc-grey/30 border border-hc-grey/30">
                    {strengths.map((item, index) => (
                        <div key={index} className="bg-hc-surface p-6 md:p-10 hover:bg-hc-sky/5 transition-colors group">
                            <div className="mb-4 md:mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                {item.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-hc-teal mb-2 md:mb-3">{item.title}</h3>
                            <p className="text-sm text-ink/70 leading-relaxed mb-4 md:mb-6">
                                {item.description}
                            </p>
                            <div className="pt-4 border-t border-hc-grey/30">
                                <span className="text-[10px] md:text-xs font-bold text-hc-yellow uppercase tracking-wide">Benefit</span>
                                <p className="text-xs text-ink mt-1 font-medium">{item.benefit}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
