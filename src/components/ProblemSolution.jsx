import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
    return (
        <section className="container" style={{ padding: '60px 20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Why Choose S & S Wear?</h2>

            <div className="grid-bento">
                {/* Problem Card */}
                <div className="glass-card" style={{
                    gridColumn: 'span 12',
                    '@media (min-width: 768px)': { gridColumn: 'span 6' },
                    padding: '30px',
                    background: 'rgba(255,0,0,0.05)', // Subtle reddish tint
                    border: '1px solid rgba(255,0,0,0.1)'
                }}>
                    {/* Responsive hack inline style */}
                    <style>{`
            .col-problem { grid-column: span 12; }
            .col-solution { grid-column: span 12; }
            @media (min-width: 768px) {
              .col-problem { grid-column: span 6; }
              .col-solution { grid-column: span 6; }
            }
          `}</style>

                    <div className="col-problem glass-card" style={{ height: '100%', padding: '30px', background: 'rgba(255, 50, 50, 0.05)', borderColor: 'rgba(255, 50, 50, 0.2)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#ffcccb' }}>The Usual Struggle</h3>
                        <ul style={{ listStyle: 'none' }}>
                            {[
                                "Unreliable sellers",
                                "Poor quality vs photos",
                                "Slow replies",
                                "No physical address"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', fontSize: '1.05rem', opacity: 0.8 }}>
                                    <XCircle size={20} color="#ff6b6b" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Solution Card */}
                <div className="glass-card" style={{
                    gridColumn: 'span 12'
                }}>
                    {/* Solution is actually the second col, but structure above was nested. Let's fix structure. */}
                </div>
            </div>

            {/* Correct Grid Structure */}
            <div className="grid-bento" style={{ marginTop: '-20px' }}> {/* Negative margin hack if previous div was empty? Let's just rewrite grid container content */}
                <div className="col-problem glass-card" style={{ padding: '30px', background: 'rgba(50, 0, 0, 0.3)', borderColor: 'rgba(255, 100, 100, 0.2)' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', opacity: 0.9 }}>Buying Online Is Risky...</h3>
                    <ul style={{ listStyle: 'none' }}>
                        {[
                            "Unreliable sellers",
                            "What you see ≠ what you get",
                            "Slow replies & ghosting",
                            "No physical address to trace"
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.05rem', opacity: 0.7 }}>
                                <XCircle size={20} color="#ff6b6b" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-solution glass-card" style={{ padding: '30px', background: 'rgba(0, 50, 0, 0.3)', borderColor: 'rgba(100, 255, 100, 0.2)' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--gold)' }}>Until S & S Wear.</h3>
                    <ul style={{ listStyle: 'none' }}>
                        {[
                            "Trusted brand with proven track record",
                            "Real products, real photos, real quality",
                            "Fast reliable delivery within Freetown",
                            "Walk-in store: No. 41 Regent Road"
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.05rem', fontWeight: 500 }}>
                                <CheckCircle size={20} color="#51cf66" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
