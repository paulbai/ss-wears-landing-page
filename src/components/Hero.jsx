import React from 'react';
import { MessageCircle, Truck, MapPin, ShieldCheck, ShoppingBag } from 'lucide-react';
// import logo from '../assets/logo.png'; // Assuming logo exists

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/23299772097?text=Hi%20S%26S%20Wear,%20I%20want%20to%20order!', '_blank');
  };

  return (
    <section className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      {/* Navigation / Header Area - Inline for now or can be separate component */}
      <nav style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Use text if logo load fails or placeholder */}
          <h2 style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.03em' }}>S & S WEAR</h2>
        </div>
        <button className="glass-btn-secondary glass" style={{ borderRadius: '50px', padding: '8px 20px', fontSize: '0.9rem' }}>
          Menu
        </button>
      </nav>

      {/* Main Bento Grid */}
      <div className="grid-bento" style={{ minHeight: '60vh' }}>

        {/* Main Hero Card */}
        <div className="glass-card" style={{
          gridColumn: 'span 12',
          '@media (min-width: 768px)': { gridColumn: 'span 8' }, /* Fallback logic needs CSS media queries usually, inline styles don't support media queries directly. We will use classes for responsive grid */
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '400px',
          position: 'relative'
        }}>
          {/* Responsive workaround: We need CSS for grid-column. 
               We will use inline style for simple layout but really need css classes for responsiveness.
               Or we simply use style={{ gridColumn: '1 / -1' }} for mobile and override in CSS?
               Better: create a css class .col-main in index.css or just style blocks.
               Actually, I will just output simple classes and assume I can add them to index.css or use style tag here.
           */}
          <style>{`
             .hero-main { grid-column: span 12; }
             .hero-side { grid-column: span 12; }
             @media (min-width: 900px) {
               .hero-main { grid-column: span 8; }
               .hero-side { grid-column: span 4; }
             }
           `}</style>

          <div className="hero-main glass-card" style={{
            height: '100%',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.08)' // Slightly brighter
          }}>
            <span style={{
              color: 'var(--gold)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px'
            }}>
              Fashion for the Modern Woman
            </span>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.1,
              marginBottom: '24px',
              fontWeight: 700
            }}>
              Look Good. <br />
              <span className="text-gradient">Spend Less.</span> <br />
              Get It Fast.
            </h1>
            <p style={{
              fontSize: '1.125rem',
              opacity: 0.9,
              maxWidth: '500px',
              marginBottom: '32px',
              lineHeight: 1.6
            }}>
              Your trusted fashion plug for quality clothes, bags, hair, and shoes.
              Order online via WhatsApp or visit our Freetown store.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={handleWhatsApp} className="glass-btn">
                <MessageCircle size={20} />
                Order on WhatsApp Now
              </button>
              <button className="glass-btn glass-btn-secondary" style={{ borderRadius: '50px', padding: '12px 24px', border: '1px solid var(--white)' }}>
                Visit Store
              </button>
            </div>

            <p style={{ marginTop: '16px', fontSize: '0.85rem', opacity: 0.7, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} /> No. 41 Regent Road, Freetown
            </p>
          </div>
        </div>

        {/* Side Cards (Trust Stack) */}
        <div className="hero-side" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          <div className="glass-card" style={{ padding: '24px', flex: 1, display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
              <Truck color="var(--gold)" size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Fast Delivery</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Within Freetown</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px', flex: 1, display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
              <ShieldCheck color="var(--gold)" size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Physical Store</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Verified & Trusted</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px', flex: 1, display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
              <ShoppingBag color="var(--gold)" size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>One Stop Shop</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Clothes, Bags, Hair</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
