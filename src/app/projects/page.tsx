import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ContactSection } from "@/components/sections/contact-section";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-20">
            <Navbar />
            <section className="py-20 bg-ivory text-center border-b border-hairline">
                <h1 className="text-5xl font-serif mb-6">Selected Works</h1>
                <p className="max-w-2xl mx-auto text-lg text-secondary">
                    A portfolio of spaces designed for life, work, and healing.
                </p>
            </section>

            {/* Reusing FeaturedProjects for now, typically would use a grid with filters */}
            <FeaturedProjects />

            <ContactSection />
            <Footer />
        </main>
    );
}
