"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";
import { ArrowRight, Sparkles, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function InteriorDesignPage() {
    return (
        <main className="min-h-screen pt-20">
            <Navbar />

            {/* Hero */}
            <section className="py-24 bg-ivory">
                <div className="container-wide">
                    <span className="text-brass font-bold tracking-widest text-xs uppercase mb-4 block">What We Do</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-ink mb-6">
                        Interior Design with a <br />
                        <span className="italic text-secondary">Branding Lens.</span>
                    </h1>
                    <p className="text-2xl text-ink/80 font-serif italic max-w-3xl mb-12">
                        "Every interior we design carries an identity — subtle for homes, powerful for businesses."
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white border-t border-navy/5">
                <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Residential */}
                    <div className="group">
                        <div className="mb-6 w-12 h-12 bg-brass/10 rounded-full flex items-center justify-center">
                            <Sparkles className="text-brass w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-serif text-ink mb-4 group-hover:text-brass transition-colors">Residential Interiors</h2>
                        <p className="text-lg text-ink/70 mb-6">
                            Aesthetic-driven, lifestyle-focused designs that turn houses into personal sanctuaries.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-ink/80"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span>Luxury Villas</li>
                            <li className="flex items-center gap-2 text-ink/80"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span>Apartment Styling</li>
                            <li className="flex items-center gap-2 text-ink/80"><span className="w-1.5 h-1.5 bg-brass rounded-full"></span>Renovations</li>
                        </ul>
                        <Button variant="outline" className="border-navy/20" asChild>
                            <Link href="/projects">View Residential Projects</Link>
                        </Button>
                    </div>

                    {/* Commercial */}
                    <div className="group">
                        <div className="mb-6 w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                            <Building2 className="text-navy w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-serif text-ink mb-4 group-hover:text-navy transition-colors">Commercial Interiors</h2>
                        <p className="text-lg text-ink/70 mb-6">
                            Brand-focused spaces designed to enhance customer experience and employee productivity.
                        </p>
                        <ul className="grid grid-cols-2 gap-3 mb-8">
                            {["Offices", "Retail", "Showrooms", "Cafés", "Clinics"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-ink/80"><span className="w-1.5 h-1.5 bg-navy rounded-full"></span>{item}</li>
                            ))}
                        </ul>
                        <Button variant="outline" className="border-navy/20" asChild>
                            <Link href="/contact">Discuss Your Space</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Link to Branding Page */}
            <section className="py-20 bg-navy text-white text-center">
                <div className="container-wide">
                    <h2 className="text-3xl font-serif mb-6">Looking to brand your space?</h2>
                    <p className="text-white/70 max-w-2xl mx-auto mb-8">
                        We help businesses create elite, premium, and trustworthy brand impressions through space design, not just logos.
                    </p>
                    <Button size="lg" className="bg-brass text-white hover:bg-brass-light border-none" asChild>
                        <Link href="/branding">Explore Interior Branding <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}
