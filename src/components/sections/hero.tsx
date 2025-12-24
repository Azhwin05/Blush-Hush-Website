"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] md:min-h-[800px] flex items-center overflow-hidden">
            {/* Background - Split Wall Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-bg-clean.png"
                    alt="Luxury Interior Background"
                    fill
                    className="object-cover object-[15%_center] md:object-center"
                    priority
                />
            </div>

            <div className="container-wide relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
                    {/* Left Content Area - Positioned over the white wall part of the image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                        className="max-w-xl pt-20 md:pt-0"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 text-ink text-balance">
                            Designing spaces that work — <br />
                            <span className="italic text-secondary/90">for living, working & healing.</span>
                        </h1>

                        <p className="text-lg md:text-xl font-light text-ink/80 max-w-lg mb-8 leading-relaxed">
                            Premium residential interiors and NABH-compliant healthcare infrastructure.
                            Built on functionality, not guesswork.
                        </p>

                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <Button size="lg" className="w-full md:w-auto min-w-[180px] h-12 md:h-14 text-base rounded-xl bg-navy text-white hover:bg-navy/90" asChild>
                                <Link href="/projects">View Projects</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="w-full md:w-auto min-w-[180px] h-12 md:h-14 text-base rounded-xl border-navy/20 text-navy hover:bg-navy/5" asChild>
                                <Link href="/contact">Request Consultation</Link>
                            </Button>
                        </div>

                        {/* Micro Trust Chips - Dark variant */}
                        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 opacity-90 text-xs md:text-sm font-medium tracking-wide uppercase text-ink/70">
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brass"></span>
                                Execution-First
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brass"></span>
                                Healthcare Planning
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Side - Empty to show the Framed Logo in the image */}
                    <div className="hidden md:block"></div>
                </div>
            </div>
        </section>
    );
}
