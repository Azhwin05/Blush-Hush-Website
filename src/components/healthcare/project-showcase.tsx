"use client";

import { useState } from "react";
import { MoveRight, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Recovery Room & OT Access",
        type: "Sterile Zone",
        description: "Seamless transition zones with automated access control and anti-bacterial wall cladding.",
        image: "/projects/healthcare/hc-recovery-ot.jpg"
    },
    {
        id: 2,
        title: "In-Patient Suite",
        type: "Patient Care",
        description: "Ergonomic layout featuring integrated medical gas pipeline systems (MGPS) and nurse call integration.",
        image: "/projects/healthcare/hc-patient-room.jpg"
    },
    {
        id: 3,
        title: "Main Corridor",
        type: "Circulation Area",
        description: "High-durability homogeneous vinyl flooring with color-coded zoning for critical and non-critical areas.",
        image: "/projects/healthcare/hc-corridor-wide.jpg"
    },
    {
        id: 4,
        title: "Pediatric Wing",
        type: "Specialized Care",
        description: "Calm color psychology applied to minimize anxiety for pediatric patients.",
        image: "/projects/healthcare/hc-corridor-crib.jpg"
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

                <div className="relative aspect-video md:aspect-[21/9] bg-hc-grey/10 rounded-2xl overflow-hidden shadow-2xl border border-hc-grey/20">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={cn(
                                "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out",
                                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            )}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                                unoptimized={true}
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
                                <div className="max-w-2xl transform transition-all duration-700 delay-100 translate-y-0">
                                    <span className="inline-block px-3 py-1 bg-hc-teal text-white text-[10px] uppercase font-bold tracking-widest rounded mb-3">
                                        {project.type}
                                    </span>
                                    <h3 className="text-2xl md:text-4xl font-serif mb-2">{project.title}</h3>
                                    <p className="text-white/80 text-base md:text-lg leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
