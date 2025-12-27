"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";
import { Palette, Layers, Eye, MapPin, Lightbulb } from "lucide-react";

export default function BrandingPage() {
    const services = [
        { title: "Brand Concept Development", icon: <Lightbulb className="w-6 h-6" /> },
        { title: "Colour Psychology & Theme", icon: <Palette className="w-6 h-6" /> },
        { title: "Brand-Aligned Interiors", icon: <Layers className="w-6 h-6" /> },
        { title: "Reception & CX Zones", icon: <Eye className="w-6 h-6" /> },
        { title: "Signage Placement Strategy", icon: <MapPin className="w-6 h-6" /> },
        // { title: "Lighting Design", icon: <Sun className="w-6 h-6"/> }
    ];

    const process = [
        "Requirement & Brand Understanding",
        "Space & Business Study",
        "Design + Brand Concept",
        "BOQ & Budget Alignment",
        "Execution & Supervision",
        "Final Styling & Brand Experience"
    ];

    return (
        <main className="min-h-screen pt-20">
            <Navbar />

            {/* Hero */}
            <section className="py-24 bg-navy text-white">
                <div className="container-wide">
                    <span className="text-brass font-bold tracking-widest text-xs uppercase mb-4 block">Interior Branding</span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8 text-white">
                        Where Space Meets <br />
                        <span className="italic text-brass">Identity.</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl leading-relaxed mb-6 font-light">
                        "Branding is not just visual — it’s spatial."
                    </p>
                    <p className="text-lg text-white/60 max-w-2xl">
                        We help businesses create elite, premium, and trustworthy brand impressions through space design, not just logos.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-ivory">
                <div className="container-wide">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-navy/5 group hover:border-navy/20 transition-colors">
                                <div className="w-12 h-12 bg-navy/5 text-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-serif text-ink mb-2">{s.title}</h3>
                            </div>
                        ))}
                        <div className="bg-navy p-8 rounded-lg shadow-sm border border-navy/5 text-white flex flex-col justify-center">
                            <h3 className="text-xl font-serif mb-2">Lighting Design</h3>
                            <p className="text-white/70 text-sm">To Enhance Brand Perception</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrated Process */}
            <section className="py-24 bg-white">
                <div className="container-wide">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-ink mb-4">Our Integrated Process</h2>
                        <p className="text-secondary">For Commercial Spaces & Branding</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {process.map((step, i) => (
                            <div key={i} className="relative p-8 border border-navy/10 rounded-xl overflow-hidden">
                                <span className="absolute -right-2 -top-4 text-9xl font-serif text-navy/5 z-0 select-none">
                                    {i + 1}
                                </span>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-ink mb-2">{step}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Brand */}
            <section className="py-20 bg-brass/10">
                <div className="container-wide text-center">
                    <h2 className="text-2xl font-serif text-ink mb-8">We Create Brand Experiences For</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Offices & Corporate Spaces", "Retail & Showrooms", "Clinics & Wellness Centres", "Hospitality Spaces"].map((item, i) => (
                            <span key={i} className="px-6 py-3 bg-white text-navy font-medium rounded-full shadow-sm">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}
