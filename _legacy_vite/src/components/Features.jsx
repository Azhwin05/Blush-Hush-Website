import React from 'react';
import { ShieldCheck, Zap, Layout, IndianRupee } from 'lucide-react';

const Features = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--accent-sage-dark)', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>

                    {[
                        { icon: Layout, title: "Surgeon-Centric Planning", desc: "Precision operating environments." },
                        { icon: Zap, title: "Efficient Workflow", desc: "Zoning that separates staff, patients, and waste." },
                        { icon: ShieldCheck, title: "Future Readiness", desc: "Designs that scale easily as you grow." },
                        { icon: IndianRupee, title: "Budget Conscious", desc: "High-impact decisions respecting CApex." }
                    ].map((f, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                background: 'rgba(255,255,255,0.1)',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem'
                            }}>
                                <f.icon size={32} color="var(--accent-gold)" />
                            </div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{f.title}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>{f.desc}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Features;
