"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
    { value: "20+", label: "Completed Projects" },
    { value: "10+", label: "Healthcare Facilities" },
    { value: "3+", label: "Years Execution Experience" },
    { value: "100%", label: "South India Coverage" }
];

const processSteps = [
    {
        step: "01",
        title: "Requirement Understanding & Site Study",
        content: "We begin by listening. We analyze your requirements, clinical workflows (for healthcare), and site constraints using laser measurements."
    },
    {
        step: "02",
        title: "Workflow & Space Planning",
        content: "We develop zoning layouts that optimize movement and efficiency. For hospitals, we ensure strict separation of public, semi-sterile, and sterile zones."
    },
    {
        step: "03",
        title: "Concept & Material Strategy",
        content: "We present mood boards and 3D concepts. We select materials that are durable, aesthetic, and compliant (anti-fungal paints, seamless vinyls for clinical areas)."
    },
    {
        step: "04",
        title: "Detailed Drawings & BOQs",
        content: "We provide Good-for-Construction (GFC) drawings and a transparent Bill of Quantities (BOQ). No hidden costs."
    },
    {
        step: "05",
        title: "Execution & Site Supervision",
        content: "Our project managers coordinate agencies, track timelines, and ensure quality control on site. We act as your single point of contact."
    },
    {
        step: "06",
        title: "Handover & Support",
        content: "We conduct a snag-list review, handover the site with documentation, and provide post-completion support."
    }
];

export function TrustProcess() {
    return (
        <section className="section-padding bg-ivory/50">
            <div className="container-wide">

                {/* Trust Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-24 border-y border-hairline py-8 md:py-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <span className="block text-3xl md:text-5xl font-serif text-navy mb-1 md:mb-2">{stat.value}</span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-5">
                        <span className="text-brass font-bold tracking-widest text-[10px] md:text-xs uppercase mb-3 md:mb-4 block">How We Work</span>
                        <h2 className="text-2xl md:text-4xl text-ink leading-tight mb-4 md:mb-6">
                            Good design is invisible. <br />It simply works.
                        </h2>
                        <p className="text-secondary text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                            Every project follows a structured process. No guesswork on site. Whether it's a home or a hospital, we plan every detail before the first brick is laid.
                        </p>

                        {/* Optional: Add an image here or keep it clean */}
                    </div>

                    <div className="lg:col-span-7">
                        <Accordion type="single" collapsible className="w-full">
                            {processSteps.map((step, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger>
                                        <span className="text-brass font-mono text-sm mr-4">{step.step}</span>
                                        {step.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {step.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>

            </div>
        </section>
    );
}
