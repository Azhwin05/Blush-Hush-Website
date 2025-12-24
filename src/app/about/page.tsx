import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20">
            <Navbar />

            <section className="py-20 section-padding bg-ivory">
                <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-brass font-bold tracking-widest text-xs uppercase mb-4 block">Our Story</span>
                        <h1 className="text-5xl font-serif mb-8 text-ink">We don't overdesign. We design what works.</h1>
                        <div className="space-y-6 text-lg text-secondary leading-relaxed">
                            <p>
                                BH Interiors & Healthcare Design was founded on a simple premise: good design is invisible. It should support your lifestyle or your clinical workflow without drawing attention to itself.
                            </p>
                            <p>
                                With over 3 years of specialized execution experience and a portfolio of 10+ healthcare facilities, we bridge the gap between aesthetic aspiration and technical necessity.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full bg-white rounded-lg overflow-hidden shadow-xl">
                        {/* Placeholder for Team Image */}
                        <div className="absolute inset-0 bg-navy/10 flex items-center justify-center text-navy font-serif italic text-2xl">
                            Team at Site
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-navy text-white text-center">
                <div className="container-wide">
                    <h2 className="text-3xl font-serif mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 border border-white/20 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-brass">Execution First</h3>
                            <p className="text-white/70">Designs that are buildable, budget-aware, and practical.</p>
                        </div>
                        <div className="p-6 border border-white/20 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-brass">Clinical Responsibility</h3>
                            <p className="text-white/70">We understand the gravity of healthcare infrastructure.</p>
                        </div>
                        <div className="p-6 border border-white/20 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-brass">Transparency</h3>
                            <p className="text-white/70">Clear BOQs, honest timelines, and regular updates.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}
