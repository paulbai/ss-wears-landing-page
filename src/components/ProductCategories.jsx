import React from 'react';

const ProductCategories = () => {
    const categories = [
        { name: "Trendy Clothing", desc: "Dresses, Tops, & More", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" },
        { name: "Luxury Bags", desc: "Handbags & Clutches", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop" },
        { name: "Premium Hair", desc: "Wigs & Bundles", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop" },
        { name: "Stylish Shoes", desc: "Heels & Flats", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop" }
    ];

    return (
        <section className="container" style={{ paddingBottom: '60px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '32px' }}>
                <h2 style={{ fontSize: '2rem' }}>Fresh Arrivals</h2>
                <span style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.9rem' }}>New Stock Weekly</span>
            </div>

            <div className="grid-bento">
                <style>{`
          .col-cat { grid-column: span 12; }
          .col-cat-wide { grid-column: span 12; }
          @media (min-width: 640px) { 
             .col-cat { grid-column: span 6; } 
             .col-cat-wide { grid-column: span 6; }
          }
          @media (min-width: 1024px) { 
             .col-cat { grid-column: span 3; } 
             .col-cat-wide { grid-column: span 3; }
          }
        `}</style>

                {categories.map((cat, index) => (
                    <div key={index} className="col-cat glass-card" style={{
                        height: '350px',
                        position: 'relative',
                        padding: 0,
                        overflow: 'hidden',
                        group: true // custom attr for logic if using libs, but here just placeholder
                    }}>
                        <img
                            src={cat.img}
                            alt={cat.name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                            }}
                            className="cat-img" // We can add hover effect in global css or here
                        />
                        {/* Overlay */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start'
                        }}>
                            <span style={{
                                background: 'var(--gold)',
                                color: '#000',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                padding: '4px 8px',
                                borderRadius: '4px',
                                marginBottom: '8px',
                                textTransform: 'uppercase'
                            }}>
                                Available Now
                            </span>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{cat.name}</h3>
                            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{cat.desc}</p>
                        </div>

                        <style>{`.glass-card:hover .cat-img { transform: scale(1.1); }`}</style>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductCategories;
