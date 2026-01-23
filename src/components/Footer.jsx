import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--glass-border)', padding: 'clamp(40px, 8vw, 60px) 0 clamp(30px, 6vw, 40px)', background: 'rgba(0,0,0,0.2)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 800, marginBottom: 'clamp(16px, 3vw, 24px)' }}>S & S WEAR</h2>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(12px, 3vw, 24px)', flexWrap: 'wrap', marginBottom: 'clamp(30px, 6vw, 40px)', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }} className="footer-contact">
                    <span>No. 41 Regent Road, Freetown</span>
                    <span>+232 99 772 097</span>
                    <span>+232 76 488 050</span>
                </div>
                <style>{`
                    @media (min-width: 640px) {
                        .footer-contact {
                            flex-direction: row !important;
                        }
                    }
                `}</style>

                <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto clamp(30px, 6vw, 40px)', padding: 'clamp(24px, 6vw, 40px)', textAlign: 'center' }}>
                    <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: 'clamp(12px, 3vw, 16px)' }}>Ready to Update Your Wardrobe?</h3>
                    <button className="glass-btn" onClick={() => window.open('https://wa.me/23299772097?text=Hi%20S%26S%20Wear,%20I%20want%20to%20order!', '_blank')} style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', padding: 'clamp(10px, 2.5vw, 12px) clamp(16px, 4vw, 24px)' }}>
                        <MessageCircle size={20} />
                        Chat on WhatsApp
                    </button>
                </div>

                <p style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)', opacity: 0.5 }}>&copy; {new Date().getFullYear()} S & S Wear. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
