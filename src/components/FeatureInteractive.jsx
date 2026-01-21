import React from 'react';
import { motion } from 'framer-motion';

const FeatureInteractive = () => {
    return (
        <section className="container" style={{ padding: '100px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '3rem', color: '#3A4A38', lineHeight: 1 }}>Online Convenience <span style={{ fontSize: '4rem', color: 'white' }}>✦</span></h2>
                <h2 style={{ fontSize: '4rem', color: '#3A4A38', opacity: 0.5 }}>OFFLINE TRUST!</h2>
                <p style={{ marginTop: '20px', maxWidth: '400px', margin: '20px auto', fontFamily: "'Inter', sans-serif" }}>
                    <strong>S & S Wear</strong> solves all your online shopping fears. Verified store, real products, and friendly service.
                </p>
            </div>

            <div style={{ position: 'relative', width: '100%', maxWidth: '800px', minHeight: '600px', display: 'flex', justifyContent: 'center' }}>

                {/* Hand/Product Placeholder */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop) no-repeat center bottom', // Model
                    backgroundSize: 'contain',
                    position: 'relative',
                    zIndex: 10
                }} />

                {/* Floating Pins */}
                {[
                    { label: 'Real Photos', top: '20%', left: '10%' },
                    { label: 'Fast Delivery', top: '40%', left: '5%' },
                    { label: 'Walk-in Store', top: '60%', left: '10%' },
                    { label: 'Quality Guaranteed', top: '25%', right: '10%' },
                    { label: 'WhatsApp Support', top: '45%', right: '5%' },
                    { label: 'No Payments Before Delivery', top: '65%', right: '10%' },
                ].map((pin, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        style={{
                            position: 'absolute',
                            top: pin.top,
                            left: pin.left,
                            right: pin.right,
                            background: 'black',
                            color: '#DFFF00',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            fontFamily: "'Permanent Marker', cursive",
                            fontSize: '0.9rem',
                            boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
                            zIndex: 20
                        }}
                    >
                        {pin.label}
                    </motion.div>
                ))}

            </div>

        </section>
    );
};

export default FeatureInteractive;
