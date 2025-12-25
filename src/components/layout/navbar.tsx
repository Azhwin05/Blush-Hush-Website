"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
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
        // Simple boolean check is fine, setState bails out if unchanged
        setScrolled(latest > 20);
        lastScrollY.current = latest;
    });

    return (
        <motion.header
            // No hide/show variants - always visible
            className={cn(
                "fixed z-50 transition-[background-color,border-color,box-shadow,padding] duration-500 pointer-events-auto",
                // Mobile: Transparent initially, Solid White when scrolled
                "top-0 left-0 right-0 w-full md:hidden py-4 px-6 transition-colors",
                scrolled && "md:hidden" ? "bg-white/95 backdrop-blur-md border-b border-hairline shadow-sm" : "bg-transparent border-none",

                // Desktop: Floating Pill
                "md:block md:top-4 md:left-0 md:right-0 md:mx-auto md:max-w-7xl md:rounded-2xl md:border md:w-full",
                // Desktop Styles: Transparent -> Solid White on Scroll
                scrolled
                    ? "md:bg-white/90 md:border-white/20 md:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                    : "md:bg-white/10 md:border-white/10",
                "md:backdrop-blur-xl"
            )}
            style={{
                height: "68px", // Fixed height for desktop consistency
            }}
        >
            <div className="h-full flex items-center justify-center px-0 md:px-8">
                {/* Desktop Nav - Centered & Logo Removed */}
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

                    {/* Get Quote Button */}
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
