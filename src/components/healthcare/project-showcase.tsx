"use client";

import { useState } from "react";
import { MoveRight, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "City Multi-Speciality Hospital",
        type: "OT Complex & ICU",
        description: "50-bed critical care unit with modular OT integration.",
        // Placeholder color/pattern
        bgClass: "bg-neutral-200"
    },
    {
        id: 2,
        title: "Fertility & Maternity Nexus",
        type: "Boutique Clinic",
        description: "Warm, anxiety-reducing interiors for mother & child care.",
        bgClass: "bg-neutral-300"
    },
    {
        id: 3,
        title: "Advanced Diagnostic Lab",
        type: "Pathology Center",
        description: "High-throughput layout with sterile processing zones.",
        bgClass: "bg-neutral-200"
    }
];

export function ProjectShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section className="py-24 bg-hc-surface">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-hc-olive block mb-3">Featured Projects</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-ink">Built for Care.</h2>
                    </div>

                    <div className="flex gap-2 mt-6 md:mt-0">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevProject}
                            className="rounded-full border-hc-teal/20 text-hc-teal hover:bg-hc-teal hover:text-white transition-colors"
                        >
                            <MoveLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextProject}
                            className="rounded-full border-hc-teal/20 text-hc-teal hover:bg-hc-teal hover:text-white transition-colors"
                        >
                            <MoveRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <div className="relative aspect-video md:aspect-[21/9] bg-white rounded-2xl overflow-hidden shadow-2xl border border-hc-grey/20">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        {/* Placeholder Visual */}
                        <div className={cn("w-full h-full flex flex-col items-center justify-center text-hc-olive/30", projects[currentIndex].bgClass)}>
                            <p className="font-serif text-4xl mb-4 italic">"{projects[currentIndex].type}" Project Image</p>
                            <p className="uppercase tracking-widest text-sm font-bold">1920 x 1080 Media Placeholder</p>
                        </div>

                        {/* Overlay Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <span className="inline-block px-3 py-1 bg-hc-teal text-white text-[10px] uppercase font-bold tracking-widest rounded mb-3">
                                {projects[currentIndex].type}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-serif mb-2">{projects[currentIndex].title}</h3>
                            <p className="text-white/80 max-w-xl text-lg">{projects[currentIndex].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
