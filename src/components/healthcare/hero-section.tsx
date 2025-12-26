"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import Link from "next/link";

export function HealthcareHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-ivory overflow-hidden">
            {/* Abstract Technical Background */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[repeating-linear-gradient(45deg,#0B1F3B_0px,#0B1F3B_1px,transparent_1px,transparent_40px)]" />
            </div>

            <div className="container-wide relative z-10">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-navy/20 bg-navy/5 text-navy text-xs font-bold tracking-widest uppercase mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy animate-pulse"></span>
                        Blush & Hush Healthcare
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-ink mb-6 leading-[1.1]">
                        End-to-End Healthcare <br className="hidden md:block" />
                        Infrastructure Solutions
                    </h1>

                    <p className="text-lg md:text-2xl text-secondary max-w-2xl leading-relaxed mb-10 font-manrope">
                        Compliant. Efficient. NABH-Ready hospital and clinic planning — from concept to execution.
                    </p>

                    {/* Key Value Points */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 border-t border-hairline pt-8 max-w-3xl">
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-navy flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-brass rounded-full"></span> NABH-Aligned
                            </h4>
                            <p className="text-sm text-secondary/80">Planning that ensures approvals and safety compliance.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-navy flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-brass rounded-full"></span> Optimized Flow
                            </h4>
                            <p className="text-sm text-secondary/80">Space utilization designed for patient throughput.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-navy flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-brass rounded-full"></span> Turnkey Support
                            </h4>
                            <p className="text-sm text-secondary/80">Integrated equipment & medical gas pipeline coordination.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            size="lg"
                            className="bg-navy hover:bg-navy/90 text-white rounded-none px-8 h-14 text-base"
                            asChild
                        >
                            <Link href="/contact">
                                <Phone className="mr-2 h-4 w-4" /> Book a Free Design Call
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-navy text-navy hover:bg-navy/5 rounded-none px-8 h-14 text-base"
                            asChild
                        >
                            <Link href="/contact">
                                <Calendar className="mr-2 h-4 w-4" /> Request Site Visit
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
