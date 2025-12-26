import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HealthcareCTA() {
    return (
        <section className="py-24 bg-hc-surface text-center border-t border-hc-grey/30">
            <div className="container-wide max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Planning a clinic or hospital?</h2>
                <p className="text-lg text-hc-olive mb-10">
                    Speak to a specialist who understands zoning, medical gas pipelines, and NABH requirements.
                    Don't leave your infrastructure to chance.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="bg-hc-teal text-white hover:bg-hc-teal/90 h-14 px-8 text-base" asChild>
                        <Link href="/contact">Book Free Design Consultation</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="border-hc-teal text-hc-teal hover:bg-hc-teal/5 h-14 px-8 text-base" asChild>
                        <Link href="/contact">View Project Case Studies <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
