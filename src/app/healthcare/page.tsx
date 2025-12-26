import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HealthcareHero } from "@/components/healthcare/hero-section";
import { CoreStrengths } from "@/components/healthcare/core-strengths";
import { ProblemsSolved } from "@/components/healthcare/problem-solution";
import { ComplianceNABH } from "@/components/healthcare/compliance-nabh";
import { StatProof } from "@/components/healthcare/stat-proof";
import { HealthcareCTA } from "@/components/healthcare/healthcare-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blush & Hush Healthcare | Hospital & Clinic Infrastructure Planning",
    description: "End-to-end NABH-compliant healthcare infrastructure solutions. We plan and execute hospitals, clinics, and sterile zones with clinical precision.",
};

export default function HealthcarePage() {
    return (
        <main className="min-h-screen bg-hc-surface text-ink font-manrope selection:bg-hc-teal/20 selection:text-hc-teal">
            {/* STRICT CURSOR OVERRIDE for Professional/Technical Feel */}
            <style dangerouslySetInnerHTML={{
                __html: `
                /* Force system cursor on everything */
                body, a, button, [role="button"], img, input {
                    cursor: auto !important;
                }
                /* Ensure no hidden cursor from global rules leaks through */
                html, body {
                    cursor: auto !important;
                }
            `}} />

            <Navbar />
            <HealthcareHero />
            <CoreStrengths />
            <ProblemsSolved />
            <ComplianceNABH />
            <StatProof />
            <HealthcareCTA />
            <Footer />
        </main>
    );
}
