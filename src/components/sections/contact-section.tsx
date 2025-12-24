"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
    return (
        <section className="section-padding bg-navy text-white relative overflow-hidden">
            {/* Background texture optional */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-brass font-bold tracking-widest text-xs uppercase mb-4 block">Start Your Project</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Let's discuss your vision.</h2>
                        <p className="text-white/70 text-lg mb-8 max-w-md">
                            Whether it's a luxury residence or a complex healthcare facility, we bring expertise and execution excellence.
                        </p>

                        <div className="space-y-6 text-white/80">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-lg font-serif">1</div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Free Initial Discussion</h4>
                                    <p className="text-sm">We understand your requirements and scope.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-lg font-serif">2</div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Site Scope & Clarity</h4>
                                    <p className="text-sm">We visit or analyze the site constraints.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-lg font-serif">3</div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Clear Proposal</h4>
                                    <p className="text-sm">Transparent pricing and timeline. No pressure.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-ink p-8 md:p-10 rounded-xl shadow-2xl">
                        <h3 className="text-2xl font-serif mb-6">Request Free Consultation</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wide">Name*</label>
                                    <Input placeholder="Full Name" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wide">Mobile*</label>
                                    <Input placeholder="+91" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide">Project Type*</label>
                                <select className="flex h-12 w-full rounded-md border border-hairline bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass disabled:cursor-not-allowed disabled:opacity-50">
                                    <option value="">Select Type</option>
                                    <option value="residential">Residential Interior</option>
                                    <option value="commercial">Commercial / Office</option>
                                    <option value="clinic">Clinic / Hospital</option>
                                    <option value="op-theatre">Operation Theatre</option>
                                    <option value="lab">Pharmacy / Lab</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide">Location*</label>
                                <Input placeholder="City / Area" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide">Message (Optional)</label>
                                <Textarea placeholder="Tell us about your requirements..." />
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-navy text-white hover:bg-navy/90 h-12 mt-4">
                                Submit Request
                            </Button>

                            <p className="text-xs text-center text-secondary mt-4">
                                Or chat with us on <a href="https://wa.me/918825715501" className="text-green-600 font-bold hover:underline">WhatsApp</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
