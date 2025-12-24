import React from 'react';

const SpecItem = ({ title, desc, items }) => (
    <div style={{ padding: '2rem', borderTop: '1px solid var(--accent-gold)' }}>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{title}</h4>
        <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>{desc}</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((item, i) => (
                <li key={i} style={{ fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>— {item}</li>
            ))}
        </ul>
    </div>
);

const Compliance = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Specialized Infrastructure Support</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <SpecItem
                        title="NABH Consulting & Readiness"
                        desc="We support NABH readiness through design and planning — ensuring infrastructure aligns with accreditation requirements."
                        items={["NABH-aligned space planning", "Layout guidance as per standards", "OT, ICU, Ward design guidance"]}
                    />
                    <SpecItem
                        title="Statutory Approvals Support"
                        desc="We guide and coordinate the approval process — reducing delays and rework."
                        items={["Clinical establishment registration", "Fire safety & building compliance", "AERB & Pollution Control"]}
                    />
                    <SpecItem
                        title="Equipment Planning"
                        desc="Equipment planning is integrated with design — not treated as an afterthought."
                        items={["Vendor coordination", "Budget-based selection", "Installation coordination with MEP"]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Compliance;
