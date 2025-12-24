"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Grid, Sparkles, Phone, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: Grid },
    { name: "Services", href: "/services", icon: Sparkles },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "Menu", action: "menu", icon: Menu },
];

export function MobileBottomNav() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle scroll visibility (show on up, hide on down)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Set active tab based on path
    useEffect(() => {
        const item = navItems.find((i) => i.href === pathname);
        if (item) setActiveTab(item.name);
    }, [pathname]);

    return (
        <>
            {/* Floating Bottom Nav */}
            <AnimatePresence>
                {showNav && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 280, damping: 25 }}
                        className="fixed bottom-[14px] left-[14px] right-[14px] z-50 md:hidden"
                    >
                        <div className="flex items-center justify-between px-2 py-2 rounded-2xl md:rounded-3xl border border-white/20 bg-white/15 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                            {/* Optional Noise Overlay */}
                            <div className="absolute inset-0 rounded-2xl opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                            {navItems.map((item) => {
                                const isActive = activeTab === item.name || (item.name === "Menu" && isMenuOpen);

                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => {
                                            if (item.action === "menu") {
                                                setIsMenuOpen(!isMenuOpen);
                                            } else {
                                                setActiveTab(item.name);
                                                setIsMenuOpen(false); // Close menu if navigating
                                            }
                                        }}
                                        className="relative flex flex-col items-center justify-center w-full h-14"
                                    >
                                        {item.href ? (
                                            <Link href={item.href} className="flex flex-col items-center w-full h-full justify-center">
                                                <NavIcon item={item} isActive={isActive} />
                                            </Link>
                                        ) : (
                                            <NavIcon item={item} isActive={isActive} />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Menu Bottom Sheet */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/25 z-[60] backdrop-blur-[2px] md:hidden"
                        />
                        {/* Sheet */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed bottom-0 left-0 w-full h-[70vh] bg-white/90 backdrop-blur-2xl rounded-t-3xl border-t border-white/20 z-[70] shadow-2xl p-6 md:hidden flex flex-col"
                        >
                            {/* Handle */}
                            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-8"></div>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full text-ink"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col gap-2 mb-8">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Navigation</h3>
                                {[
                                    { name: "About Us", href: "/about" },
                                    { name: "Our Services", href: "/services" },
                                    { name: "Projects", href: "/projects" },
                                    { name: "Process", href: "/process" },
                                    { name: "Contact", href: "/contact" }
                                ].map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-hairline active:scale-[0.98] transition-transform"
                                    >
                                        <span className="text-lg font-serif text-ink">{link.name}</span>
                                        <ArrowRight size={16} className="text-brass" />
                                    </Link>
                                ))}
                            </div>

                            <Button variant="luxury" size="lg" className="w-full mb-6" asChild onClick={() => setIsMenuOpen(false)}>
                                <Link href="/contact">Get Free Quote</Link>
                            </Button>

                            <p className="text-center text-sm text-secondary mt-auto">
                                Prefer WhatsApp? <a href="https://wa.me/918825715501" className="text-green-600 font-bold">Chat with us</a>
                            </p>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

function NavIcon({ item, isActive }: { item: any, isActive: boolean }) {
    return (
        <motion.div
            animate={isActive ? { scale: [0.96, 1] } : { scale: 1 }}
            className={cn(
                "flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300",
                isActive ? "bg-white/20 border border-white/25" : "bg-transparent border-transparent"
            )}
        >
            <div className="relative">
                <item.icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className={cn("mb-1 transition-colors", isActive ? "text-navy" : "text-ink/70")}
                />
                {isActive && (
                    <motion.span
                        layoutId="activeDot"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-brass rounded-full"
                    />
                )}
            </div>
            <span className={cn("text-[10px] font-medium transition-colors", isActive ? "text-navy" : "text-ink/60")}>
                {item.name}
            </span>
        </motion.div>
    )
}
