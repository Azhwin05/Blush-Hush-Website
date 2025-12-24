import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './index.css';

import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Features from './components/Features';
import Compliance from './components/Compliance';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* --- Components --- */

/* Navbar */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed w-full z-50"
            style={{
                position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
                backgroundColor: scrolled ? 'rgba(253, 252, 248, 0.98)' : 'transparent',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.03)' : 'none',
                padding: scrolled ? '1rem 0' : '1.5rem 0',
                transition: 'all 0.4s ease',
                backdropFilter: scrolled ? 'blur(10px)' : 'none'
            }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    BH INTERIORS<span className="text-gold">.</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden-mobile" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                    {['About', 'Services', 'Process', 'Projects'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
                            {item}
                        </a>
                    ))}
                    <a href="#contact" style={{
                        backgroundColor: 'var(--text-primary)',
                        color: 'white',
                        padding: '0.8rem 1.8rem',
                        borderRadius: '2px',
                        fontSize: '0.85rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        Consult
                    </a>
                </div>

                {/* Mobile Toggle Placeholder - In real usage would enable responsive menu */}
                <div style={{ display: 'none' }}>
                    <Menu />
                </div>
            </div>
        </nav>
    );
};

/* Hero */
const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 1 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 10, color: 'white' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', color: 'white' }}
                >
                    Designing Spaces That<br />Work & Heal
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto 3rem', opacity: 0.95, fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}
                >
                    Premium residential interiors and NABH-compliant healthcare infrastructure.
                    Built on functionality, not guesswork.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <a href="#contact" style={{
                        backgroundColor: 'white',
                        color: 'var(--text-primary)',
                        padding: '1.1rem 2.8rem',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        display: 'inline-block',
                        border: '1px solid white',
                        transition: 'all 0.3s'
                    }}>
                        Request Free Consultation
                    </a>
                </motion.div>
            </div>

            {/* Trust Strip */}
            <div style={{
                position: 'absolute', bottom: 0, width: '100%', zIndex: 10,
                borderTop: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(5px)',
                padding: '1.5rem 0'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', color: 'white', flexWrap: 'wrap', gap: '1rem' }}>
                    {[
                        { v: "20+", l: "Projects Executed" },
                        { v: "10+", l: "Healthcare Projects" },
                        { v: "3+ Years", l: "Experience" },
                        { v: "South India", l: "Focused Service" }
                    ].map((item, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <span style={{ display: 'block', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)' }}>{item.v}</span>
                            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8 }}>{item.l}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* Main App */
function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Process />
            <Features />
            <Compliance />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
