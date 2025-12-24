import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        category: "Residential | Chennai",
        title: "Modern Family Villa",
        img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
        desc: "Optimizing natural light in a dense urban plot."
    },
    {
        category: "Healthcare | Madurai",
        title: "Specialty Dental Clinic",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
        desc: "High-efficiency layout with privacy and sterile zoning."
    },
    {
        category: "Commercial | Coimbatore",
        title: "Tech Startup Office",
        img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800",
        desc: "Vibrant, modular workspace delivered in 45 days."
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Selected Works</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            style={{ cursor: 'pointer' }}
                        >
                            <div style={{ height: '280px', overflow: 'hidden', borderRadius: '2px', marginBottom: '1.5rem' }}>
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="hover-zoom"
                                />
                            </div>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-sage)', marginBottom: '0.5rem' }}>
                                {p.category}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
