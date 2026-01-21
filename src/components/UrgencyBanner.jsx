import React from 'react';

const UrgencyBanner = () => {
    return (
        <section className="container" style={{ paddingBottom: '60px' }}>
            <div className="glass-card" style={{
                padding: '30px',
                textAlign: 'center',
                background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.2) 0%, rgba(114, 47, 55, 0.2) 100%)',
                border: '1px solid var(--gold)'
            }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>⚠️ Limited Stock Available</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '0' }}>
                    Our styles sell out fast. <span style={{ color: 'var(--gold)', fontWeight: 600 }}>New arrivals drop weekly!</span>
                </p>
            </div>
        </section>
    );
};

export default UrgencyBanner;
