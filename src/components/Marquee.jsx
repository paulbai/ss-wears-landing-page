import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    const marqueeVariants = {
        animate: {
            x: [0, -1000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div style={{
            background: 'var(--color-black)',
            color: 'var(--color-off-white)',
            padding: '20px 0',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            borderTop: '2px solid var(--color-black)',
            borderBottom: '2px solid var(--color-black)',
            transform: 'rotate(-2deg) scale(1.05)',
            marginTop: '-20px',
            position: 'relative',
            zIndex: 20
        }}>
            <motion.div
                variants={marqueeVariants}
                animate="animate"
                style={{ display: 'inline-block' }}
            >
                {[...Array(6)].map((_, i) => (
                    <span key={i} style={{
                        fontSize: '2rem',
                        fontFamily: "'Anton', sans-serif",
                        textTransform: 'uppercase',
                        marginRight: '60px',
                        letterSpacing: '0.1em'
                    }}>
                        Look Good • <span className="text-neon">Spend Less</span> • Get It Fast • S & S Wear •
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
