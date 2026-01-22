import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const images = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop", // Yellow Outfit
    "https://images.unsplash.com/photo-1542272617-08f08630329e?q=80&w=1000&auto=format&fit=crop", // Jeans
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop", // Hair
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop", // Bag
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop", // Dress
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop", // Shoes
    "https://images.unsplash.com/photo-1604176354204-9268737828fa?q=80&w=1000&auto=format&fit=crop", // Denim
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop", // Handbag
    "https://images.unsplash.com/photo-1580618672591-eb180b1a97bd?q=80&w=1000&auto=format&fit=crop", // Braids/Hair
    "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1000&auto=format&fit=crop"  // Stylish Top
];

const NewHero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section style={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Navigation */}
            <nav className="container" style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                padding: 'clamp(16px, 4vw, 30px) clamp(12px, 4vw, 24px)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100
            }}>
                <div style={{ fontWeight: 800, fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', letterSpacing: '-0.05em' }}>S&S WEAR</div>
                <a href="https://chat.whatsapp.com/BjPilHDLa7q0Z4Ux0pNmGn" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)', padding: 'clamp(6px, 2vw, 8px) clamp(12px, 3vw, 20px)', textDecoration: 'none', color: 'inherit' }}>Order Now</a>
            </nav>

            {/* Main Content */}
            <div className="container hero-grid" style={{
                position: 'relative',
                width: '100%',
                flex: 1,
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr)',
                alignItems: 'center',
                gap: 'clamp(20px, 5vw, 40px)',
                perspective: '1000px',
                zIndex: 10
            }}>

                {/* Massive Background Text - Left */}
                <div style={{ textAlign: 'center', display: 'none' }} className="hero-text-left">
                    <h1 style={{
                        fontSize: 'clamp(3rem, 12vw, 12rem)',
                        lineHeight: 0.8,
                        color: 'var(--color-off-white)',
                        opacity: 0.8,
                        margin: 0
                    }}>
                        LOOK
                    </h1>
                </div>
                <style>{`
                    @media (min-width: 768px) {
                        .hero-text-left {
                            display: block !important;
                            text-align: right !important;
                        }
                    }
                `}</style>

                {/* Floating Product Image - Center */}
                <motion.div style={{ y: y1, zIndex: 10, position: 'relative' }}>
                    {/* Wrapper for Card + Sticker - NO overflow hidden here to allow sticker to pop out */}
                    <div style={{
                        width: 'clamp(250px, 80vw, 450px)',
                        height: 'clamp(300px, 100vw, 550px)',
                        maxWidth: '450px',
                        margin: '0 auto',
                        position: 'relative',
                        transform: 'rotate(-3deg)',
                        boxShadow: 'clamp(10px, 3vw, 20px) clamp(10px, 3vw, 20px) 0px rgba(0,0,0,0.15)',
                        borderRadius: '4px',
                    }}>

                        {/* Inner Card - Handles Image Masking & Border */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            border: '12px solid var(--color-off-white)',
                            background: 'var(--color-black)',
                            borderRadius: '4px',
                            overflow: 'hidden' // Clip the images ONLY
                        }}>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        background: `url(${images[index]}) center/cover`
                                    }}
                                />
                            </AnimatePresence>
                        </div>

                        {/* Sticker - Now OUTSIDE the overflow:hidden div */}
                        <div style={{
                            position: 'absolute',
                            top: 'clamp(-20px, -4vw, -30px)',
                            right: 'clamp(-20px, -4vw, -30px)',
                            zIndex: 20,
                            background: 'var(--color-black)',
                            color: 'white',
                            padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 20px)',
                            fontFamily: "'Permanent Marker', cursive",
                            fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
                            transform: 'rotate(15deg)',
                            boxShadow: 'clamp(2px, 1vw, 4px) clamp(2px, 1vw, 4px) 0 var(--color-neon)'
                        }}>
                            Available Now!
                        </div>

                    </div>
                </motion.div>

                {/* Massive Background Text - Right */}
                <div style={{ textAlign: 'center', display: 'none' }} className="hero-text-right">
                    <h1 style={{
                        fontSize: 'clamp(3rem, 12vw, 12rem)',
                        lineHeight: 0.8,
                        color: 'var(--color-off-white)',
                        opacity: 0.8,
                        margin: 0
                    }}>
                        GOOD
                    </h1>
                </div>
                <style>{`
                    @media (min-width: 768px) {
                        .hero-text-right {
                            display: block !important;
                            text-align: left !important;
                        }
                    }
                `}</style>

                {/* Floating Elements (Parallax) - Absolute over the grid */}
                <motion.div style={{ y: y2, position: 'absolute', left: '5%', bottom: '20%', zIndex: 20, maxWidth: '200px' }}>
                    <div style={{
                        background: 'var(--color-black)',
                        color: 'white',
                        padding: '16px 24px',
                        borderRadius: '50px',
                        fontFamily: "'Anton', sans-serif",
                        transform: 'rotate(-5deg)',
                        boxShadow: '8px 8px 0 var(--color-neon)'
                    }}>
                        Trust the process ❤️
                    </div>
                </motion.div>

                <motion.div style={{ y: y2, position: 'absolute', right: '5%', top: '20%', zIndex: 20 }}>
                    <div style={{
                        background: 'var(--color-off-white)',
                        color: 'black',
                        padding: '16px 24px',
                        borderRadius: '8px',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700,
                        maxWidth: '200px',
                        fontSize: '0.8rem',
                        transform: 'rotate(5deg)',
                        border: '2px solid black'
                    }}>
                        Your trusted fashion plug for quality clothes, bags, hair, and shoes.
                    </div>
                </motion.div>

            </div>

            {/* Hero CTA Block - Sticker Style */}
            <div style={{
                position: 'absolute',
                bottom: '50px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--color-black)',
                padding: '20px 40px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                color: 'white',
                zIndex: 30,
                width: 'min(90%, 500px)'
            }}>
                <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.5rem', color: 'var(--color-neon)', lineHeight: 1 }}>SPEND LESS. GET IT FAST.</p>
                    <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', opacity: 0.8 }}>ONLINE OR IN-STORE @ 41 REGENT ST</p>
                </div>
                {/* Barcode graphic simulation */}
                <div style={{ height: '40px', display: 'flex', alignItems: 'end', gap: '2px' }}>
                    {[...Array(20)].map((_, i) => (
                        <div key={i} style={{
                            width: Math.random() > 0.5 ? '2px' : '4px',
                            height: Math.random() > 0.5 ? '100%' : '70%',
                            background: 'white'
                        }} />
                    ))}
                </div>
            </div>

            {/* Responsive CSS */}
            <style>{`
                @media (min-width: 768px) {
                    .hero-grid {
                        grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) !important;
                    }
                }
                @media (max-width: 767px) {
                    .floating-badge-left, .floating-badge-right {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default NewHero;
