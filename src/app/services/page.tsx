import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServicesSplit } from "@/components/sections/services-split";
import { ContactSection } from "@/components/sections/contact-section";

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-20">
            <Navbar />

            <section className="py-20 bg-ivory text-center">
                <h1 className="text-5xl font-serif mb-6">Our Services</h1>
                <p className="max-w-2xl mx-auto text-lg text-secondary">
                    Integrated design solutions for residential luxury and healthcare precision.
                </p>
            </section>

            <ServicesSplit />

            <section className="section-padding bg-white">
                <div className="container-wide">
                    <h2 className="text-3xl font-serif mb-12">Compliance & Approvals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border border-hairline rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-navy">NABH Readiness</h3>
                            <p className="text-secondary text-sm">We ensure your infrastructure layout meets strict NABH accreditation standards from day one.</p>
                        </div>
                        <div className="p-8 border border-hairline rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-navy">Statutory Approvals</h3>
                            <p className="text-secondary text-sm">Coordination with local bodies for building plan approvals and clinical establishment licenses.</p>
                        </div>
                        <div className="p-8 border border-hairline rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-navy">Equipment Planning</h3>
                            <p className="text-secondary text-sm">Technical coordination for medical gas, HVAC, and heavy equipment installation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}
