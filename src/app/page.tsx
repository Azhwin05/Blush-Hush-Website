import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ServicesSplit } from "@/components/sections/services-split";
import { TrustProcess } from "@/components/sections/trust-process";
import { HealthcareDifferential } from "@/components/sections/healthcare-differential";
import { LeadMagnets } from "@/components/sections/lead-magnets";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <FeaturedProjects />
            <ServicesSplit />
            <HealthcareDifferential />
            <TrustProcess />
            <LeadMagnets />
            <ContactSection />
            <Footer />
        </main>
    );
}
