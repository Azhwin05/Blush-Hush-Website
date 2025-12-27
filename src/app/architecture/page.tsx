"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export default function ArchitecturePage() {
    const focusAreas = [
        "Planning Efficiency",
        "Space Utilization",
        "Approval-Oriented Design",
        "Execution Feasibility"
    ];

    return (
        <main className="min-h-screen pt-20">
            <Navbar />

            {/* Hero */}
            <section className="py-24 bg-ivory">
                <div className="container-wide">
                    <div className="max-w-4xl">
                        <span className="text-brass font-bold tracking-widest text-xs uppercase mb-4 block">What We Do</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-ink mb-6">
                            Architecture for <br />
                            <span className="italic text-secondary">Homes & Businesses.</span>
                        </h1>
                        <p className="text-xl text-ink/70 max-w-2xl leading-relaxed mb-10">
                            We design structures that are not just visually striking but operationally efficient.
                            From residential villas to commercial complexes, our focus remains on execution feasibility and real-world functionality.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mb-12">
                            {focusAreas.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-navy/5">
                                    <div className="w-6 h-6 rounded-full bg-brass/10 flex items-center justify-center text-brass">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-medium text-ink">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" className="bg-navy text-white hover:bg-navy/90 rounded-none px-8" asChild>
                            <Link href="/projects">View Architecture Projects</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Placeholder for visuals or additional content if needed */}
            <section className="py-20 bg-white">
                <div className="container-wide">
                    <div className="h-[400px] w-full bg-navy/5 rounded-xl flex items-center justify-center text-navy/20 font-serif text-3xl italic">
                        Architecture Project Showcase
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}
