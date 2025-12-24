import React, { useState } from 'react';

const InputGroup = ({ label, type = "text", placeholder }) => (
    <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            style={{
                width: '100%',
                padding: '1rem 0',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent-gold)'}
            onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.2)'}
        />
    </div>
);

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ backgroundColor: '#111', color: 'white' }}>
            <div className="container">
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Start Your Project</h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)' }}>Free consultation is limited to initial discussion and scope assessment.</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <InputGroup label="Name" placeholder="John Doe" />
                            <InputGroup label="Phone" placeholder="+91 98765 43210" />
                        </div>
                        <InputGroup label="Email" type="email" placeholder="john@example.com" />

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', color: 'var(--accent-gold)' }}>Requirement</label>
                            <textarea
                                rows="4"
                                placeholder="Describe your project..."
                                style={{
                                    width: '100%',
                                    padding: '1rem 0',
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    resize: 'none'
                                }}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '1.2rem',
                                backgroundColor: 'white',
                                color: 'black',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginTop: '1rem',
                                transition: 'background 0.3s'
                            }}
                            className="hover:bg-gold"
                        >
                            Request Consultation
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
                        Prefer WhatsApp? <span style={{ color: 'var(--accent-gold)', cursor: 'pointer' }}>Chat with us directly.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
