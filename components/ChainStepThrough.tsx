'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export interface ChainStep {
  title: string;
  who: string;
  detail: string;
  label?: string;
  date?: string;
  mathsBox?: {
    label: string;
    formula: string;
    explanation: string;
    oneLiner?: string;
  };
}

export interface ChainNode {
  label: string;
  sub: string;
  color: string;
}

interface ChainStepThroughProps {
  title: string;
  subtitle: string;
  steps: ChainStep[];
  nodes: ChainNode[];
  disappeared?: string[];
  endNote?: string;
  id: string;
  showCWLink?: boolean;
}

export default function ChainStepThrough({
  title,
  subtitle,
  steps,
  nodes,
  disappeared,
  endNote,
  id,
  showCWLink = false,
}: ChainStepThroughProps) {
  const [activeStep, setActiveStep] = useState(0);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const idx = Number(entry.target.getAttribute('data-step'));
        if (!isNaN(idx)) setActiveStep(idx);
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.6,
      rootMargin: '-20% 0px -20% 0px',
    });
    triggerRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [handleIntersect]);

  const goTo = useCallback((idx: number) => {
    const el = triggerRefs.current[idx];
    if (!el) return;
    setActiveStep(idx);
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  return (
    <div id={id} style={{ marginBottom: 40 }}>
      {/* Header */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 0 24px' }}>
        <h2 style={{ fontFamily: H, fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: COLORS.navy, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
          {title}
        </h2>
        <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 16px' }}>{subtitle}</p>

        {/* Progress bar (desktop only) */}
        <div className="cw-progress-bar" style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
          {steps.map((_, i) => (
            <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= activeStep ? COLORS.navy : 'rgba(27,42,74,0.1)', transition: 'background 0.3s ease' }} />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: 0 }}>
            Step {activeStep + 1} of {steps.length}{steps[activeStep].who ? ` \u00b7 ${steps[activeStep].who}` : ''}{steps[activeStep].date ? ` \u00b7 ${steps[activeStep].date}` : ''}
          </p>
          <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
            <button
              type="button"
              onClick={() => goTo(activeStep - 1)}
              disabled={activeStep === 0}
              aria-label="Previous step"
              style={{
                fontFamily: B,
                fontSize: 13,
                fontWeight: 600,
                color: activeStep === 0 ? COLORS.lightMuted : COLORS.navy,
                background: '#fff',
                border: `1px solid ${activeStep === 0 ? 'rgba(27,42,74,0.1)' : 'rgba(27,42,74,0.2)'}`,
                borderRadius: 6,
                padding: '8px 14px',
                cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                opacity: activeStep === 0 ? 0.5 : 1,
                minHeight: 36,
              }}
            >
              &larr; Back
            </button>
            <button
              type="button"
              onClick={() => goTo(activeStep + 1)}
              disabled={activeStep === steps.length - 1}
              aria-label="Next step"
              style={{
                fontFamily: B,
                fontSize: 13,
                fontWeight: 600,
                color: '#fff',
                background: activeStep === steps.length - 1 ? 'rgba(27,42,74,0.3)' : COLORS.navy,
                border: 'none',
                borderRadius: 6,
                padding: '8px 14px',
                cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
                opacity: activeStep === steps.length - 1 ? 0.6 : 1,
                minHeight: 36,
              }}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', maxWidth: 1100, margin: '0 auto', gap: 40 }}>
        {/* Sticky chain (desktop) */}
        <div className="cw-chain-desktop" style={{ flex: '0 0 280px', position: 'sticky', top: 120, alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {nodes.map((node, i) => (
            <div key={i}>
              <div
                style={{
                  background: i <= activeStep ? (i === activeStep ? node.color : 'rgba(27,42,74,0.08)') : 'rgba(27,42,74,0.04)',
                  border: i === activeStep ? `2px solid ${node.color}` : '2px solid transparent',
                  borderRadius: 10,
                  padding: '12px 16px',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  opacity: i <= activeStep ? 1 : 0.3,
                  transform: i === activeStep ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                <p style={{ fontFamily: B, fontSize: 18, fontWeight: 700, color: i === activeStep ? '#fff' : COLORS.ink, margin: 0 }}>{node.label}</p>
                <p style={{ fontFamily: B, fontSize: 14, color: i === activeStep ? 'rgba(255,255,255,0.7)' : COLORS.lightMuted, margin: '2px 0 0' }}>{node.sub}</p>
              </div>
              {i < nodes.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '3px 0' }}>
                  <svg width="2" height="14" viewBox="0 0 2 14"><line x1="1" y1="0" x2="1" y2="14" stroke={i < activeStep ? COLORS.navy : 'rgba(27,42,74,0.15)'} strokeWidth="2" /></svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Text triggers */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { triggerRefs.current[i] = el; }}
              data-step={i}
              style={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: i < steps.length - 1 ? 40 : 0 }}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  border: '1px solid rgba(27,42,74,0.08)',
                  padding: '24px 20px',
                  boxShadow: i === activeStep ? '0 4px 20px rgba(27,42,74,0.08)' : 'none',
                  transition: 'box-shadow 0.4s ease',
                }}
              >
                <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 6px' }}>
                  Step {i + 1}{step.who ? ` \u00b7 ${step.who}` : ''}{step.date ? ` \u00b7 ${step.date}` : ''}
                </p>
                {step.label && (
                  <p style={{ fontFamily: B, fontSize: 12, fontWeight: 700, color: COLORS.claimRed, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {step.label}
                  </p>
                )}
                <h3 style={{ fontFamily: H, fontSize: 20, fontWeight: 700, color: COLORS.navy, margin: '0 0 10px' }}>{step.title}</h3>
                <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.7, color: COLORS.muted, margin: 0 }}>{step.detail}</p>
                {step.mathsBox && (
                  <div
                    style={{
                      background: COLORS.claimRedLight,
                      borderRadius: 10,
                      border: '1px solid rgba(181,48,42,0.18)',
                      padding: '18px 20px',
                      marginTop: 16,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                    }}
                  >
                    <div style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.claimRed }}>
                      {step.mathsBox.label}
                    </div>
                    <div style={{ fontFamily: H, fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: COLORS.claimRedDark, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                      {step.mathsBox.formula}
                    </div>
                    <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.5, color: COLORS.claimRedDark, margin: 0 }}>
                      {step.mathsBox.explanation}
                    </p>
                    {step.mathsBox.oneLiner && (
                      <p style={{ fontFamily: B, fontSize: 15, fontWeight: 700, lineHeight: 1.5, color: COLORS.claimRedDark, margin: 0 }}>
                        {step.mathsBox.oneLiner}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {disappeared && disappeared.length > 0 && (
            <div style={{ background: COLORS.amberLight, border: '1px solid rgba(196,138,10,0.15)', borderRadius: 12, padding: '20px 20px', marginTop: 16 }}>
              <p style={{ fontFamily: B, fontSize: 'var(--inv-section-heading, 14px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 8px' }}>What disappeared</p>
              <ul style={{ margin: 0, padding: '0 0 0 18px', listStyleType: 'disc' }}>
                {disappeared.map((item, i) => (
                  <li key={i} style={{ fontFamily: B, fontSize: 15, lineHeight: 1.6, color: COLORS.amberDark, marginBottom: i < disappeared.length - 1 ? 4 : 0 }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {endNote && (
            <p style={{ fontFamily: H, fontSize: 18, fontWeight: 700, color: COLORS.navy, lineHeight: 1.5, margin: '20px 0 0' }}>
              {endNote}
            </p>
          )}

          {showCWLink && (
            <div style={{ marginTop: 20 }}>
              <Link href="/careless-whispers" style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.chainBlue, textDecoration: 'none' }}>
                See all careless whispers &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cw-chain-desktop { display: none !important; }
          .cw-progress-bar { display: none !important; }
        }
      `}</style>
    </div>
  );
}
