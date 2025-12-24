import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--bg-ivory)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--accent-sage-dark)' }}>
                            Built on Reality,<br />Not Just Renders.
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            We are built from hands-on site execution, not just theoretical design. Our background in strong planning and coordination ensures that what we draw is exactly what gets built.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Our healthcare exposure is practical. We understand that a hospital is a machine for healing. From sterile zones to public waiting areas, we plan for people.
                        </p>

                        <ul style={{ display: 'grid', gap: '1rem' }}>
                            {[
                                "3+ years in interior execution",
                                "1.5+ years focused on healthcare infrastructure",
                                "20+ total projects delivered",
                                "10+ healthcare projects managed"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1rem', color: 'var(--text-primary)' }}>
                                    <CheckCircle2 size={20} color="var(--accent-gold)" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: '3rem', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1.5rem' }}>
                            <em style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                                “We believe good design is invisible — it simply works.”
                            </em>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            border: '1px solid var(--accent-gold)',
                            width: '100%',
                            height: '100%',
                            zIndex: 0
                        }}></div>
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
                            alt="Exceptional Interior Design"
                            style={{ width: '100%', borderRadius: '4px', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
