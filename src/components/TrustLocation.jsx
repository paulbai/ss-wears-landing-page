import React from 'react';
import { MapPin, Phone, Star } from 'lucide-react';

const TrustLocation = () => {
    return (
        <section className="container" style={{ paddingBottom: '80px' }}>
            <div className="grid-bento">
                <style>{`
          .col-trust { grid-column: span 12; }
          .col-map { grid-column: span 12; }
          @media (min-width: 900px) { 
            .col-trust { grid-column: span 5; } 
            .col-map { grid-column: span 7; } 
          }
        `}</style>

                {/* Testimonial / Trust */}
                <div className="col-trust glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="var(--gold)" color="var(--gold)" />)}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', lineHeight: 1.4, marginBottom: '24px' }}>
                        "Finally a store that sells exactly what they post. Quality is 100%. Highly recommend!"
                    </h3>
                    <p style={{ opacity: 0.8, fontWeight: 600 }}>- Satisfied Customer</p>
                    <p style={{ fontSize: '0.9rem', opacity: 0.6, marginTop: '4px' }}>Trusted by 500+ fashion lovers in Freetown</p>
                </div>

                {/* Location */}
                <div className="col-map glass-card" style={{ padding: '40px', background: 'rgba(255,255,255,0.1)' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem' }}>Where to find us</span>
                    <h3 style={{ fontSize: '2rem', marginBottom: '24px' }}>Online Convenience. <br />Offline Trust.</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem' }}>S & S Wear Store</h4>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=41+Regent+Street+Freetown"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ opacity: 0.8, color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}
                                >
                                    No. 41 Regent Street, Freetown
                                </a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem' }}>Call Us</h4>
                                <p style={{ opacity: 0.8 }}>+232 99 772 097 / +232 76 488 050</p>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div style={{ borderRadius: '12px', overflow: 'hidden', marginTop: '10px', height: '250px', background: 'rgba(0,0,0,0.2)' }}>
                            <iframe
                                title="S & S Wear Location"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src="https://maps.google.com/maps?q=41%20Regent%20Street%2C%20Freetown&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustLocation;
