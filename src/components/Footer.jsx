import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '60px 0 40px', background: 'rgba(0,0,0,0.2)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px' }}>S & S WEAR</h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
                    <span>No. 41 Regent Street, Freetown</span>
                    <span>+232 99 772 097</span>
                    <span>+232 76 488 050</span>
                </div>

                <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto 40px', padding: '40px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Ready to Update Your Wardrobe?</h3>
                    <button className="glass-btn" onClick={() => window.open('https://wa.me/23299772097?text=Hi%20S%26S%20Wear,%20I%20want%20to%20order!', '_blank')}>
                        <MessageCircle size={20} />
                        Chat on WhatsApp
                    </button>
                </div>

                <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>&copy; {new Date().getFullYear()} S & S Wear. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
