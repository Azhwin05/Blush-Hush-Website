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
                /* STRICT CLINICAL BLUE CURSOR (#A2D9F7) */
                /* Enforce single cursor shape everywhere on this route */
                html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, button, [role="button"], input, textarea {
                    cursor: url("/cursors/healthcare-arrow.svg"), auto !important;
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
