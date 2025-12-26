import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-ink text-white pt-20 pb-10">
            <div className="container-wide">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-1">
                        <div className="relative w-[140px] h-[60px] mb-6 filter brightness-0 invert opacity-90">
                            <Image
                                src="/assets/logo-bnh-vertical.png"
                                alt="BH Interiors"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-white/60 leading-relaxed text-sm mb-6">
                            Designing and executing premium residential and healthcare spaces across South India.
                        </p>

                        {/* Editorial Healthcare Link */}
                        <div className="mb-8">
                            <p className="text-white/40 text-[11px] leading-relaxed font-manrope">
                                Blush & Hush is a multidisciplinary design studio delivering refined interior spaces across residential, commercial, and retail environments.
                            </p>
                            <Link
                                href="/healthcare"
                                className="block mt-3 text-white/50 text-[11px] hover:text-white/80 transition-colors"
                            >
                                For hospitals, clinics, and NABH-ready healthcare infrastructure, visit <span className="underline decoration-white/30 underline-offset-4">Blush & Hush Healthcare</span>.
                            </Link>
                        </div>

                        <div className="flex gap-4">
                            {/* Placeholders for social */}
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Instagram size={18} /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Linkedin size={18} /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brass">Services</h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li><Link href="/services#interiors" className="hover:text-white transition-colors">Residential Interiors</Link></li>
                            <li><Link href="/services#interiors" className="hover:text-white transition-colors">Commercial & Office</Link></li>
                            <li><Link href="/services#healthcare" className="hover:text-white transition-colors">Healthcare Planning</Link></li>
                            <li><Link href="/services#healthcare" className="hover:text-white transition-colors">NABH Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brass">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li><Link href="/projects" className="hover:text-white transition-colors">Our Projects</Link></li>
                            <li><Link href="/process" className="hover:text-white transition-colors">Our Process</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brass">Contact</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5" />
                                <span>Serving Chennai, Madurai,<br />& South India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} />
                                <span>+91 88257 15501</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} />
                                <span>hello@bhinteriors.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                    <p>&copy; {new Date().getFullYear()} BH Interiors & Healthcare Design. All rights reserved.</p>
                    <p>Elevating Lifestyles. Healing Environments.</p>
                </div>
            </div>
        </footer>
    );
}
