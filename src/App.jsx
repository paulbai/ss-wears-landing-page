import React from 'react';
import { MessageCircle } from 'lucide-react';
import NewHero from './components/NewHero';
import NewProducts from './components/NewProducts';
import FeatureInteractive from './components/FeatureInteractive';
import Marquee from './components/Marquee';
import Footer from './components/Footer'; // Reusing or need update if style mismatches too much

function App() {
  return (
    <div style={{ backgroundColor: '#B5C1B4', minHeight: '100vh', overflowX: 'hidden' }}>
      <NewHero />

      {/* Wavy Divider (SVG) */}
      <div style={{ width: '100%', height: '100px', background: '#B5C1B4', marginBottom: '-5px' }}>
        <svg viewBox="0 0 1440 320" style={{ display: 'block' }}>
          <path fill="#1A1A1A" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div style={{ background: '#1A1A1A', paddingBottom: '50px' }}>
        <NewProducts />
      </div>

      {/* Inverted Wave */}
      <div style={{ width: '100%', height: '100px', background: '#1A1A1A', marginTop: '-5px' }}>
        <svg viewBox="0 0 1440 320" style={{ display: 'block', transform: 'rotate(180deg)' }}>
          <path fill="#B5C1B4" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <FeatureInteractive />
      <Marquee />

      <div style={{ height: '100px' }} /> {/* Spacer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://chat.whatsapp.com/BjPilHDLa7q0Z4Ux0pNmGn"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 9999,
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;
