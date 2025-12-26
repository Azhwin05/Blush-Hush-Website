"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function HealthcareForm() {
    return (
        <section className="py-24 bg-white border-t border-hc-grey/30" id="healthcare-form">
            <div className="container-wide max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">Book a Healthcare Consultation</h2>
                    <p className="text-hc-olive">Free Initial Healthcare Planning Consultation</p>
                </div>

                <form className="bg-hc-surface p-6 md:p-10 border border-hc-grey/30 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4 md:col-span-2">
                        <label className="text-sm font-bold text-ink uppercase tracking-wide">Doctor / Organization Name</label>
                        <Input placeholder="E.g. Dr. Tamil / City Hospital" className="bg-white border-hc-grey/50" />
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm font-bold text-ink uppercase tracking-wide">Hospital / Clinic Type</label>
                        <Input placeholder="E.g. Multi-speciality / Fertility" className="bg-white border-hc-grey/50" />
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm font-bold text-ink uppercase tracking-wide">City</label>
                        <Input placeholder="Project Location" className="bg-white border-hc-grey/50" />
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm font-bold text-ink uppercase tracking-wide">Number of Beds</label>
                        <Input placeholder="If applicable (e.g. 50 Beds)" className="bg-white border-hc-grey/50" />
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm font-bold text-ink uppercase tracking-wide">Project Stage</label>
                        <Input placeholder="New Build / Renovation" className="bg-white border-hc-grey/50" />
                    </div>

                    <div className="space-y-4 md:col-span-2">
                        <label className="text-sm font-bold text-ink uppercase tracking-wide">Message</label>
                        <Textarea placeholder="Tell us about your requirements..." className="bg-white border-hc-grey/50 h-32" />
                    </div>
                    <div className="space-y-4 md:col-span-2">
                        <label className="text-sm font-bold text-ink uppercase tracking-wide">Contact Number</label>
                        <Input placeholder="+91" className="bg-white border-hc-grey/50" />
                    </div>

                    <div className="md:col-span-2 pt-4">
                        <Button size="lg" className="w-full bg-hc-teal hover:bg-hc-teal/90 text-white h-14 text-lg">
                            Request Consultation
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
