'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Nav from '@/components/Nav';
import BackButton from '@/components/BackButton';
import SourceDocsNotice from '@/components/SourceDocsNotice';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

const steps = [
  {
    title: 'The official number',
    who: 'HMRC',
    detail: 'HMRC publishes its annual tax gap. Tax evasion: \u00a35.5bn. Tax avoidance: \u00a31.8bn. Total: \u00a37.3bn.',
    highlight: 0,
  },
  {
    title: 'The NCA broadens the scope',
    who: 'National Crime Agency',
    detail: 'NCA estimates over \u00a3100bn laundered through the UK. This covers drugs, fraud, trafficking, criminal funds. This is not tax evasion. It is all economic crime.',
    highlight: 1,
  },
  {
    title: 'The APPG inflates further',
    who: 'All-Party Parliamentary Group',
    detail: 'NCA said \u00a3100bn. APPG said \u00a3290bn. Then offered \u00a3350bn as an upper end. APPG claimed \u00a3350bn equals the health and education budget. Actual figure: \u00a3423bn.',
    highlight: 2,
  },
  {
    title: 'The CIOT gives it authority',
    who: 'Chartered Institute of Taxation',
    detail: 'CIOT quoted the APPG\u2019s \u00a3350bn figure. Still called \u201ceconomic crime and financial opacity.\u201d But now has the authority of a chartered tax body behind it.',
    highlight: 3,
  },
  {
    title: 'The final form',
    who: 'Public debate',
    detail: '\u201cEconomic crime\u201d became \u201ctax evasion.\u201d The number stayed at \u00a3350bn. The definition shrank 48 times. HMRC official: \u00a35.5bn. Claimed: \u00a3350bn.',
    highlight: 4,
  },
  {
    title: 'Why this matters',
    who: '',
    detail: 'Any enforcement policy built on this number is budgeting for a problem 48 times larger than it is. That is not a rounding error. That is a completely different conversation.',
    highlight: 5,
  },
];

const chainNodes = [
  { label: 'HMRC', sub: '\u00a35.5bn', color: COLORS.sourceGreen },
  { label: 'NCA', sub: '\u00a3100bn', color: COLORS.navy },
  { label: 'APPG', sub: '\u00a3350bn', color: COLORS.claimRed },
  { label: 'CIOT', sub: '\u00a3350bn', color: COLORS.claimRed },
  { label: 'Public debate', sub: '\u00a3350bn "tax evasion"', color: COLORS.claimRed },
  { label: 'Reality check', sub: '\u00a35.5bn vs \u00a3350bn', color: COLORS.navy },
];

export default function CarelessWhispersPage() {
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

  return (
    <>
      <Nav />
      <BackButton />
      <main id="main-content" style={{ background: COLORS.paper }}>
        {/* Header */}
        <div style={{ padding: '100px 28px 40px', maxWidth: 900, margin: '0 auto' }}>
          <SourceDocsNotice />
          <div style={{ background: COLORS.navy, borderRadius: 8, padding: '12px 18px', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E2;</span>
            <p style={{ fontFamily: B, fontSize: 14, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
              We support closing tax evasion, 100%! We do not support fabricated numbers that drive policy.
            </p>
          </div>
          <h1 style={{ fontFamily: H, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: COLORS.navy, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            Careless whispers
          </h1>
          <p style={{ fontFamily: B, fontSize: 18, color: COLORS.muted, margin: '0 0 8px' }}>
            How numbers change as they pass from source to source.
          </p>

          {/* Progress bar */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
            {steps.map((_, i) => (
              <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= activeStep ? COLORS.navy : 'rgba(27,42,74,0.1)', transition: 'background 0.3s ease' }} />
            ))}
          </div>
          <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: 0 }}>
            Step {activeStep + 1} of {steps.length}{steps[activeStep].who ? ` \u00b7 ${steps[activeStep].who}` : ''}
          </p>
        </div>

        {/* Scrollytelling body */}
        <div style={{ display: 'flex', maxWidth: 1100, margin: '0 auto', padding: '0 28px 80px', gap: 40 }}>
          {/* Sticky chain graphic (desktop) */}
          <div style={{ flex: '0 0 280px', position: 'sticky', top: 120, alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {chainNodes.map((node, i) => (
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
                  <p style={{
                    fontFamily: B,
                    fontSize: 14,
                    fontWeight: 700,
                    color: i === activeStep ? '#fff' : COLORS.ink,
                    margin: 0,
                  }}>
                    {node.label}
                  </p>
                  <p style={{
                    fontFamily: B,
                    fontSize: 12,
                    color: i === activeStep ? 'rgba(255,255,255,0.7)' : COLORS.lightMuted,
                    margin: '2px 0 0',
                  }}>
                    {node.sub}
                  </p>
                </div>
                {i < chainNodes.length - 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
                    <svg width="2" height="20" viewBox="0 0 2 20">
                      <line x1="1" y1="0" x2="1" y2="20" stroke={i < activeStep ? COLORS.navy : 'rgba(27,42,74,0.15)'} strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Scrolling text triggers */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => { triggerRefs.current[i] = el; }}
                data-step={i}
                style={{
                  minHeight: '60vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingBottom: i < steps.length - 1 ? 80 : 0,
                }}
              >
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 14,
                    border: '1px solid rgba(27,42,74,0.08)',
                    padding: '32px 28px',
                    boxShadow: i === activeStep ? '0 4px 20px rgba(27,42,74,0.08)' : 'none',
                    transition: 'box-shadow 0.4s ease',
                  }}
                >
                  <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 8px' }}>
                    Step {i + 1}{step.who ? ` \u00b7 ${step.who}` : ''}
                  </p>
                  <h2 style={{ fontFamily: H, fontSize: 24, fontWeight: 700, color: COLORS.navy, margin: '0 0 16px' }}>
                    {step.title}
                  </h2>
                  <p style={{ fontFamily: B, fontSize: 18, lineHeight: 1.7, color: COLORS.muted, margin: 0 }}>
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: hide sticky chain, show inline */}
        <style>{`
          @media (max-width: 768px) {
            .cw-scrolly-chain { display: none !important; }
          }
        `}</style>
      </main>
    </>
  );
}
