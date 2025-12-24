"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.10)] backdrop-blur-md",
                scrolled ? "py-2 bg-white/15" : "py-5 bg-white/10"
            )}
        >
            <div className="container-wide flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative w-40 h-12 flex items-center">
                    {/* Fallback text if image missing usually, but image is priority */}
                    <div className="relative w-[180px] h-[50px]">
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
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-ink uppercase tracking-wider hover:text-brass transition-colors relative group"
                            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.25)" }}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brass transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Button variant="luxury" size="sm" asChild>
                        <Link href="/contact">Get Quote</Link>
                    </Button>
                </nav>

                {/* Mobile Toggle REMOVED - Replaced by Bottom Nav */}
            </div>
        </header>
    );
}
