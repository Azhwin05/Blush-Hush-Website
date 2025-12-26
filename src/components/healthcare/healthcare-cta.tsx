import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HealthcareCTA() {
    return (
        <section className="py-16 md:py-24 bg-hc-surface text-center border-t border-hc-grey/30">
            <div className="container-wide max-w-3xl">
                <h2 className="text-2xl md:text-4xl font-serif text-ink mb-4 md:mb-6">Planning a clinic or hospital?</h2>
                <p className="text-base md:text-lg text-hc-olive mb-8 md:mb-10 px-4 md:px-0">
                    Speak to a specialist who understands zoning, medical gas pipelines, and NABH requirements.
                    Don't leave your infrastructure to chance.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                    <Button size="lg" className="w-full sm:w-auto bg-hc-teal text-white hover:bg-hc-teal/90 h-12 md:h-14 px-8 text-sm md:text-base" asChild>
                        <Link href="/contact">Book Free Design Consultation</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-hc-teal text-hc-teal hover:bg-hc-teal/5 h-12 md:h-14 px-8 text-sm md:text-base" asChild>
                        <Link href="/contact">View Project Case Studies <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
