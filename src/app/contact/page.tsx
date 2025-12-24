import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-20">
            <Navbar />
            {/* Contact Section includes the form and details */}
            <ContactSection />
            <Footer />
        </main>
    );
}
