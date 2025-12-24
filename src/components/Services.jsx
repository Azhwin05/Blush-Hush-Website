import React from 'react';
import { motion } from 'framer-motion';
import { Home, Stethoscope } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc, items, isHealthcare }) => (
    <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.4 }}
        style={{
            backgroundColor: 'white',
            padding: '3.5rem',
            borderRadius: '2px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            borderTop: isHealthcare ? '4px solid var(--accent-sage)' : '1px solid transparent'
        }}
    >
        <div style={{ marginBottom: '2rem', color: isHealthcare ? 'var(--accent-sage)' : 'var(--accent-gold)' }}>
            <Icon size={48} strokeWidth={1} />
        </div>
        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{desc}</p>
        <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
            {items.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--accent-gold)', fontSize: '1.2em' }}>•</span>
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Services = () => {
    return (
        <section id="services" className="section" style={{ backgroundColor: 'var(--bg-sage-light)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem' }}>Our Expertise</h2>
                    <div style={{ width: '60px', height: '2px', background: 'var(--accent-gold)', margin: '1.5rem auto' }}></div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    <ServiceCard
                        icon={Home}
                        title="Interior Design & Execution"
                        desc="From concept to execution, we handle design, drawings, material planning, and on-site coordination."
                        items={[
                            "Residential Interiors (Villas, Apartments)",
                            "Commercial & Office Workspaces",
                            "Clinics, Pharmacies & Diagnostic Labs"
                        ]}
                    />
                    <ServiceCard
                        icon={Stethoscope}
                        title="Healthcare Infrastructure"
                        desc="Not just interiors — healthcare functionality planning with clinical workflows in mind."
                        items={[
                            "Clinic & Hospital Planning",
                            "OT Layout & Setup Support",
                            "Sterile / Semi-sterile / Public Zoning",
                            "NABH-aligned Planning Support"
                        ]}
                        isHealthcare={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
