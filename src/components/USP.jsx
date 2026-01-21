import React from 'react';
import { ShoppingBag, Truck, MessageCircle, MapPin } from 'lucide-react';

const USP = () => {
    const usps = [
        {
            icon: <ShoppingBag size={32} color="var(--gold)" />,
            title: "Everything in One Store",
            desc: "Clothes • Bags • Hair • Shoes"
        },
        {
            icon: <Truck size={32} color="var(--gold)" />,
            title: "Fast & Reliable Delivery",
            desc: "No stories. No delays."
        },
        {
            icon: <MessageCircle size={32} color="var(--gold)" />,
            title: "Real WhatsApp Support",
            desc: "Chat with real people."
        },
        {
            icon: <MapPin size={32} color="var(--gold)" />,
            title: "Physical Store = Trust",
            desc: "No. 41 Regent Street, Freetown"
        }
    ];

    return (
        <section className="container" style={{ paddingBottom: '60px' }}>
            <div className="grid-bento">
                <style>{`
          .col-usp { grid-column: span 12; }
          @media (min-width: 640px) { .col-usp { grid-column: span 6; } }
          @media (min-width: 1024px) { .col-usp { grid-column: span 3; } }
        `}</style>

                {usps.map((item, index) => (
                    <div key={index} className="col-usp glass-card" style={{ padding: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '50%' }}>
                            {item.icon}
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.title}</h3>
                        <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default USP;
