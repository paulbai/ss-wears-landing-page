import React from 'react';

const HowToOrder = () => {
    const steps = [
        { num: "01", title: "Browse", desc: "Check our catalog on WhatsApp or Instagram." },
        { num: "02", title: "Chat", desc: "Send us a message with what you like." },
        { num: "03", title: "Confirm", desc: "Confirm size and delivery details." },
        { num: "04", title: "Receive", desc: "Pay on delivery or pick up in store." }
    ];

    return (
        <section className="container" style={{ paddingBottom: '80px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>How To Order</h2>

            <div className="grid-bento">
                <style>{`
          .col-step { grid-column: span 12; }
          @media (min-width: 640px) { .col-step { grid-column: span 6; } }
          @media (min-width: 1024px) { .col-step { grid-column: span 3; } }
        `}</style>

                {steps.map((step, i) => (
                    <div key={i} className="col-step glass-card" style={{ padding: '30px', position: 'relative' }}>
                        <span style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            fontSize: '3rem',
                            fontWeight: 800,
                            opacity: 0.1,
                            color: 'var(--white)'
                        }}>
                            {step.num}
                        </span>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', marginTop: '10px' }}>{step.title}</h3>
                        <p style={{ opacity: 0.7, lineHeight: 1.5 }}>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowToOrder;
