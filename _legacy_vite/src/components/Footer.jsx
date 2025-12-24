import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0a0a0a', color: 'rgba(255,255,255,0.4)', padding: '4rem 0 2rem', fontSize: '0.9rem' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between', marginBottom: '3rem' }}>

                    <div style={{ maxWidth: '300px' }}>
                        <img src="/assets/logo-bnh-vertical.png" alt="Blush & Hush Logo" style={{ width: '140px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} />
                        <p>Designing and executing premium residential and healthcare spaces across South India.</p>
                    </div>

                    <div>
                        <h5 style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Service Areas</h5>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Chennai</li>
                            <li style={{ marginBottom: '0.5rem' }}>Madurai</li>
                            <li style={{ marginBottom: '0.5rem' }}>Coimbatore</li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Contact</h5>
                        <p style={{ marginBottom: '0.5rem' }}>+91 98XXX XXXXX</p>
                        <p>hello@bhinteriors.com</p>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center' }}>
                    &copy; 2025 BH Interiors & Healthcare Design. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
