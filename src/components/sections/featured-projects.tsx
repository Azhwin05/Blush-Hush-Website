"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: 1,
        title: "The Lattice House",
        category: "Residential",
        location: "Chennai",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2606&auto=format&fit=crop",
        size: "large"
    },
    {
        id: 2,
        title: "Apollo Specialty Clinic",
        category: "Healthcare",
        location: "Madurai",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2600&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 3,
        title: "Urban Loft",
        category: "Residential",
        location: "Coimbatore",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2600&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 4,
        title: "Nexus Tech Park",
        category: "Commercial",
        location: "Chennai",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop",
        size: "small"
    },
    {
        id: 5,
        title: "City Dental Studio",
        category: "Healthcare",
        location: "Trichy",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2600&auto=format&fit=crop",
        size: "small"
    }
];

export function FeaturedProjects() {
    return (
        <section className="section-padding bg-white">
            <div className="container-wide">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-secondary uppercase tracking-widest text-xs font-bold mb-2 block">Selected Works</span>
                        <h2 className="text-3xl md:text-4xl text-ink">Recent Projects</h2>
                    </div>
                    <Link href="/projects" className="hidden md:flex items-center gap-2 text-navy hover:text-brass transition-colors font-medium">
                        View All Projects <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "group relative rounded-[2px] overflow-hidden cursor-pointer",
                                project.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
                            )}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>

                            <div className="absolute bottom-0 left-0 p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="text-xs font-medium uppercase tracking-wider bg-white/20 backdrop-blur-md px-2 py-1 rounded-sm mb-2 inline-block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl md:text-2xl font-serif mb-1">{project.title}</h3>
                                <p className="text-white/80 text-sm">{project.location}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Mobile 'View All' Link */}
                    <div className="md:hidden flex items-center justify-center p-6 bg-ivory rounded-lg border border-hairline">
                        <Link href="/projects" className="flex items-center gap-2 text-navy font-bold">
                            View All Case Studies <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
