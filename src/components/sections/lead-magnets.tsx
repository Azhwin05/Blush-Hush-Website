"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const resources = [
    { title: "OT Planning Checklist", desc: "Essential requirements for a sterile theatre." },
    { title: "Clinic Setup Starter Guide", desc: "From reception to recovery room." },
    { title: "Interior Budget Planner", desc: "Estimate costs for your home renovation." },
    { title: "Hospital Design Mistakes", desc: "Common errors to avoid in healthcare planning." }
];

export function LeadMagnets() {
    return (
        <section className="py-20 bg-white border-t border-hairline">
            <div className="container-wide text-center">
                <h2 className="text-2xl md:text-3xl font-serif mb-12">Free Resources & Guides</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((res, i) => (
                        <div key={i} className="p-6 border border-hairline rounded-lg hover:border-brass/50 hover:shadow-md transition-all text-left group">
                            <div className="w-10 h-10 bg-ivory rounded-full flex items-center justify-center mb-4 text-navy group-hover:text-brass transition-colors">
                                <FileText size={20} />
                            </div>
                            <h4 className="font-bold text-lg mb-2 group-hover:text-navy transition-colors">{res.title}</h4>
                            <p className="text-sm text-secondary mb-6">{res.desc}</p>
                            <Button variant="link" className="p-0 h-auto text-navy font-semibold">Download PDF</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
