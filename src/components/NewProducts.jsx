import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const NewProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Helper to generate image paths
    const getImages = (start, end) =>
        Array.from({ length: end - start + 1 }, (_, i) => `/images/products/img-${start + i}.jpg`);

    // Placeholder until user provides sorted images
    const categories = [
        {
            id: 'clothing',
            name: "Trendy Clothing",
            price: "", // Pricing removed
            coverImg: "/images/products/clothing-1.jpg",
            gallery: [
                "/images/products/clothing-1.jpg",
                "/images/products/clothing-2.jpg",
                "/images/products/clothing-3.jpg",
                "/images/products/clothing-4.jpg",
                "/images/products/clothing-5.jpg",
                "/images/products/clothing-6.jpg",
                "/images/products/clothing-7.jpg",
                "/images/products/clothing-8.jpg",
                "/images/products/clothing-9.jpg",
                "/images/products/clothing-10.jpg",
                "/images/products/clothing-11.jpg",
                "/images/products/clothing-12.jpg",
                "/images/products/clothing-13.jpg",
                "/images/products/clothing-14.jpg",
                "/images/products/clothing-15.jpg",
                "/images/products/clothing-16.jpg",
                "/images/products/clothing-17.jpg",
                "/images/products/clothing-18.jpg",
                "/images/products/clothing-19.jpg",
                "/images/products/clothing-20.jpg",
                "/images/products/clothing-21.jpg",
                "/images/products/clothing-22.jpg",
                "/images/products/clothing-23.jpg",
                "/images/products/clothing-24.jpg",
                "/images/products/clothing-25.jpg"
            ]
        },
        {
            id: 'bags',
            name: "Luxury Bags",
            price: "", // Pricing removed
            coverImg: "/images/products/bag-1.jpg",
            gallery: [
                "/images/products/bag-1.jpg",
                "/images/products/bag-2.jpg",
                "/images/products/bag-3.jpg",
                "/images/products/bag-4.jpg",
                "/images/products/bag-5.jpg",
                "/images/products/bag-6.jpg",
                "/images/products/bag-7.jpg",
                "/images/products/bag-8.jpg",
                "/images/products/bag-9.jpg",
                "/images/products/bag-10.jpg"
            ]
        },
        {
            id: 'hair',
            name: "Premium Hair",
            price: "", // Pricing removed
            coverImg: "/images/products/hair-1.jpg",
            gallery: [
                "/images/products/hair-1.jpg",
                "/images/products/hair-2.jpg"
            ]
        },
        {
            id: 'shoes',
            name: "Stylish Shoes",
            price: "", // Pricing removed
            coverImg: "/images/products/clothing-1.jpg", // Placeholder
            gallery: [
                "/images/products/clothing-1.jpg" // Placeholder
            ]
        }
    ];

    return (
        <section className="container" style={{ padding: 'clamp(50px, 10vw, 100px) clamp(16px, 4vw, 24px)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'clamp(30px, 6vw, 60px)' }} className="products-header">
                <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'white', margin: 0 }}>One Store. Everything.</h2>
                <button className="btn-secondary" style={{ backgroundColor: '#8A9A88', color: 'white', borderColor: 'white', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)' }}>Latest Drops ⇅</button>
            </div>
            <style>{`
                @media (min-width: 640px) {
                    .products-header {
                        flex-direction: row !important;
                        align-items: center !important;
                    }
                }
            `}</style>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(20px, 4vw, 30px)' }}>
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.id}
                        whileHover={{ y: -10 }}
                        style={{
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '24px',
                            padding: '20px',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}
                    >
                        <div style={{
                            background: '#B5C1B4',
                            borderRadius: '16px',
                            height: '350px',
                            marginBottom: '20px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            <img src={cat.coverImg} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontFamily: "'Anton', sans-serif" }}>{cat.name}™</h3>
                            {/* Price Removed */}
                        </div>

                        <button
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '50px',
                                border: '1px solid white',
                                background: 'transparent',
                                color: 'white',
                                fontFamily: "'Anton', sans-serif",
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                letterSpacing: '1px',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => { e.target.style.background = 'white'; e.target.style.color = 'black'; }}
                            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'white'; }}
                        >
                            View More
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {selectedCategory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.95)',
                            zIndex: 1000,
                            padding: '40px',
                            overflowY: 'auto'
                        }}
                    >
                        <button
                            onClick={() => setSelectedCategory(null)}
                            style={{
                                position: 'fixed',
                                top: '30px',
                                right: '30px',
                                background: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                zIndex: 1001
                            }}
                        >
                            <X color="black" />
                        </button>

                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <h2 style={{ fontSize: '4rem', color: 'white', marginBottom: '40px', textAlign: 'center' }}>
                                {selectedCategory.name}
                            </h2>
                            <div style={{ columns: '3 300px', gap: '20px' }}>
                                {selectedCategory.gallery.map((img, idx) => (
                                    <div key={idx} style={{ breakInside: 'avoid', marginBottom: '20px' }}>
                                        <img
                                            src={img}
                                            alt="Gallery Item"
                                            style={{ width: '100%', borderRadius: '12px' }}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default NewProducts;
