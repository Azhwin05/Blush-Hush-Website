import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'Requirement Study', desc: 'Understanding your needs and space constraints.' },
    { num: '02', title: 'Workflow Planning', desc: 'Optimizing movement and zoning for efficiency.' },
    { num: '03', title: 'Concept & Strategy', desc: 'Material selection and design direction.' },
    { num: '04', title: 'Detailing & BOQs', desc: 'Precise drawings and transparent cost estimates.' },
    { num: '05', title: 'Execution', desc: 'On-site supervision and coordination.' },
    { num: '06', title: 'Handover', desc: 'Final checks and post-completion support.' },
];

const Process = () => {
    return (
        <section id="process" className="section" style={{ backgroundColor: 'var(--bg-ivory)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>How We Work</h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Every project follows a structured process — no guesswork on site.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                padding: '2rem',
                                backgroundColor: 'white',
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '4px',
                                border: '1px solid rgba(0,0,0,0.03)'
                            }}
                        >
                            <div style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '4rem',
                                color: 'var(--accent-gold-soft)',
                                opacity: 0.3,
                                position: 'absolute',
                                top: '0.5rem',
                                right: '1.5rem',
                                lineHeight: 1
                            }}>
                                {step.num}
                            </div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>{step.title}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', position: 'relative', zIndex: 1 }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
