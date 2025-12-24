"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background - Using a placeholder or the provided luxury interior if available, defaulting to color/gradient for now until image asset is clear */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
                    alt="Luxury Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-ink/30 overlay-grade"></div>
            </div>

            <div className="container-wide relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                    className="mx-auto inline-block max-w-[920px] rounded-3xl border border-white/15 bg-black/35 backdrop-blur-md px-6 py-6 md:px-10 md:py-8"
                >
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 text-balance"
                        style={{ textShadow: "0 8px 22px rgba(0,0,0,0.45)" }}
                    >
                        Designing spaces that work — <br />
                        <span className="italic text-ivory/90">for living, working & healing.</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
                        style={{ textShadow: "0 8px 22px rgba(0,0,0,0.45)" }}
                    >
                        Premium residential interiors and NABH-compliant healthcare infrastructure.
                        Built on functionality, not guesswork.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="min-w-[200px] h-14 text-base" asChild>
                            <Link href="/projects">View Projects</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="min-w-[200px] h-14 text-base bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-navy" asChild>
                            <Link href="/contact">Request Consultation</Link>
                        </Button>
                    </div>

                    {/* Micro Trust Chips */}
                    <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-80 text-sm font-medium tracking-wide uppercase">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brass"></span>
                            Execution-First
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brass"></span>
                            Healthcare Workflow Planning
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brass"></span>
                            Transparent BOQs
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
