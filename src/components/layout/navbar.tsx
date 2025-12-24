"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const lastScrollY = React.useRef(0);
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY.current;

        // Update scrolled state for opacity/background
        if (latest > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        // Update hidden state for slide-up/down
        // Hide if scrolling down > 80px, show if scrolling up
        if (latest > previous && latest > 80) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        lastScrollY.current = latest;
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -16, opacity: 0 }
            }}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
                "fixed z-50 transition-all duration-300 pointer-events-auto",
                // Mobile: Full width, simple glass
                "top-0 left-0 right-0 w-full md:hidden py-4 px-6 bg-white/10 backdrop-blur-md border-b border-white/10",
                // Desktop: Floating Pill
                "md:block md:top-4 md:left-0 md:right-0 md:mx-auto md:max-w-7xl md:rounded-2xl md:border md:w-full",
                // Desktop Glass Styles
                scrolled
                    ? "md:bg-white/15 md:border-white/12 md:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                    : "md:bg-white/10 md:border-white/10",
                "md:backdrop-blur-md"
            )}
            style={{
                height: "68px", // Fixed height for desktop consistency
            }}
        >
            <div className="h-full flex items-center justify-between px-0 md:px-8">
                {/* Logo */}
                <Link href="/" className="relative flex items-center shrink-0">
                    <div className="relative w-[140px] h-[40px] md:w-[160px] md:h-[45px]">
                        <Image
                            src="/assets/logo-bnh-horizontal.png"
                            alt="BH Interiors"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-[26px]">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-[13px] font-normal tracking-[0.08em] uppercase text-ink hover:opacity-100 opacity-85 transition-opacity py-2"
                            >
                                {link.name}
                                {/* Active Link Sliding Underline */}
                                {isActive && (
                                    <motion.span
                                        layoutId="navbar-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/65 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}

                    {/* Get Quote Button - The Star */}
                    <div className="ml-2">
                        <Button
                            variant="luxury"
                            size="sm"
                            className="shadow-[0_10px_26px_rgba(0,0,0,0.18)] hover:-translate-y-[1px] active:translate-y-0 active:scale-95 transition-all duration-300 bg-brass text-white hover:bg-brass-light border-none h-10 px-6 rounded-xl"
                            asChild
                        >
                            <Link href="/contact">Get Quote</Link>
                        </Button>
                    </div>
                </nav>
            </div>
        </motion.header>
    );
}
