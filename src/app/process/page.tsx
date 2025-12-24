import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TrustProcess } from "@/components/sections/trust-process";
import { ContactSection } from "@/components/sections/contact-section";

export default function ProcessPage() {
    return (
        <main className="min-h-screen pt-20">
            <Navbar />

            <section className="py-20 bg-ivory text-center">
                <h1 className="text-5xl font-serif mb-6">Our Process</h1>
                <p className="max-w-2xl mx-auto text-lg text-secondary">
                    Transparency at every step. From the first sketch to the final brick.
                </p>
            </section>

            {/* Reusing the Trust & Process Section */}
            <TrustProcess />

            <ContactSection />
            <Footer />
        </main>
    );
}
