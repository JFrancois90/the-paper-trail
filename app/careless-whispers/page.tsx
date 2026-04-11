'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Nav from '@/components/Nav';
import BackButton from '@/components/BackButton';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

interface ChainStep {
  title: string;
  who: string;
  detail: string;
  label?: string;
}

interface ChainNode {
  label: string;
  sub: string;
  color: string;
}

/* ── Railtrack chain ── */

const railtrackSteps: ChainStep[] = [
  {
    title: 'The origin claim',
    who: 'Clive Lewis MP',
    label: 'Origin',
    detail: '\u00a3500m was the shareholder payout only. The \u00a37.1bn debt absorbed by government was not mentioned. The court\'s rejection of the misfeasance claim was not mentioned.',
  },
  {
    title: 'The report picks it up',
    who: 'We Own It + University of Greenwich',
    label: '\u00a37.1bn debt omitted',
    detail: 'The claim was cited in a report co-authored with Prof. David Hall, April 2025. The \u00a37.1bn debt was omitted. The court ruling was not mentioned.',
  },
  {
    title: 'A think tank repeats it',
    who: 'Common Wealth',
    label: 'Still no debt mentioned',
    detail: 'Same equity-only framing repeated by Ewan McGaughey, June 2025. Still no mention of the debt.',
  },
  {
    title: 'Media amplifies it',
    who: 'Left Foot Forward',
    label: 'Debt still missing',
    detail: 'Left Foot Forward cited the earlier sources, April 2025. The \u00a3500m figure now treated as the total cost. No debt. No court ruling.',
  },
  {
    title: 'Used on live TV to justify policy',
    who: 'Zack Polanski, BBC Politics North',
    label: '"Established fact" on live TV',
    detail: 'Green Party\'s Zack Polanski used the same equity-only argument on BBC Politics North, November 2025, to argue water nationalisation would be cheap. The wrong number isn\'t historical. It\'s actively informing live policy debate.',
  },
];

const railtrackNodes: ChainNode[] = [
  { label: 'Clive Lewis MP', sub: '\u00a3500m claim', color: COLORS.chainBlue },
  { label: 'We Own It', sub: 'Debt omitted', color: COLORS.navy },
  { label: 'Common Wealth', sub: 'Still no debt', color: COLORS.navy },
  { label: 'Left Foot Forward', sub: 'Debt missing', color: COLORS.claimRed },
  { label: 'BBC Politics North', sub: 'Used as fact on TV', color: COLORS.claimRed },
];

const railtrackDisappeared = [
  'The \u00a37.1bn debt absorbed by Network Rail',
  'The court\'s rejection of the misfeasance claim',
  'The distinction between shareholder payout and total cost to taxpayer',
];

/* ── HMRC chain ── */

const hmrcSteps: ChainStep[] = [
  {
    title: 'The official number',
    who: 'HMRC',
    detail: 'HMRC publishes its annual tax gap. Tax evasion: \u00a35.5bn. Tax avoidance: \u00a31.8bn. Total: \u00a37.3bn.',
  },
  {
    title: 'The NCA broadens the scope',
    who: 'National Crime Agency',
    detail: 'NCA estimates over \u00a3100bn laundered through the UK. This covers drugs, fraud, trafficking, criminal funds. This is not tax evasion. It is all economic crime.',
  },
  {
    title: 'The APPG inflates further',
    who: 'All-Party Parliamentary Group',
    detail: 'NCA said \u00a3100bn. APPG said \u00a3290bn. Then offered \u00a3350bn as an upper end. APPG claimed \u00a3350bn equals the health and education budget. Actual figure: \u00a3423bn.',
  },
  {
    title: 'The CIOT gives it authority',
    who: 'Chartered Institute of Taxation',
    detail: 'CIOT quoted the APPG\'s \u00a3350bn figure. Still called "economic crime and financial opacity." But now has the authority of a chartered tax body behind it.',
  },
  {
    title: 'The final form',
    who: 'Public debate',
    detail: '"Economic crime" became "tax evasion." The number stayed at \u00a3350bn. The definition shrank 48 times. HMRC official: \u00a35.5bn. Claimed: \u00a3350bn.',
  },
  {
    title: 'Why this matters',
    who: '',
    detail: 'Any enforcement policy built on this number is budgeting for a problem 48 times larger than it is. That is not a rounding error. That is a completely different conversation.',
  },
];

const hmrcNodes: ChainNode[] = [
  { label: 'HMRC', sub: '\u00a35.5bn', color: COLORS.sourceGreen },
  { label: 'NCA', sub: '\u00a3100bn', color: COLORS.navy },
  { label: 'APPG', sub: '\u00a3350bn', color: COLORS.claimRed },
  { label: 'CIOT', sub: '\u00a3350bn', color: COLORS.claimRed },
  { label: 'Public debate', sub: '\u00a3350bn "tax evasion"', color: COLORS.claimRed },
  { label: 'Reality check', sub: '\u00a35.5bn vs \u00a3350bn', color: COLORS.navy },
];

/* ── Scrollytelling section component ── */

function ChainSection({
  title,
  subtitle,
  steps,
  nodes,
  disappeared,
  endNote,
  id,
}: {
  title: string;
  subtitle: string;
  steps: ChainStep[];
  nodes: ChainNode[];
  disappeared?: string[];
  endNote?: string;
  id: string;
}) {
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
    <div id={id} style={{ marginBottom: 80 }}>
      {/* Section header */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 28px 24px' }}>
        <h2 style={{ fontFamily: H, fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: COLORS.navy, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
          {title}
        </h2>
        <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 16px' }}>{subtitle}</p>

        {/* Progress bar */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
          {steps.map((_, i) => (
            <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i <= activeStep ? COLORS.navy : 'rgba(27,42,74,0.1)', transition: 'background 0.3s ease' }} />
          ))}
        </div>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: 0 }}>
          Step {activeStep + 1} of {steps.length}{steps[activeStep].who ? ` \u00b7 ${steps[activeStep].who}` : ''}
        </p>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', maxWidth: 1100, margin: '0 auto', padding: '0 28px', gap: 40 }}>
        {/* Sticky chain */}
        <div className="cw-chain-desktop" style={{ flex: '0 0 260px', position: 'sticky', top: 120, alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {nodes.map((node, i) => (
            <div key={i}>
              <div
                style={{
                  background: i <= activeStep ? (i === activeStep ? node.color : 'rgba(27,42,74,0.08)') : 'rgba(27,42,74,0.04)',
                  border: i === activeStep ? `2px solid ${node.color}` : '2px solid transparent',
                  borderRadius: 10,
                  padding: '10px 14px',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  opacity: i <= activeStep ? 1 : 0.3,
                  transform: i === activeStep ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                <p style={{ fontFamily: B, fontSize: 13, fontWeight: 700, color: i === activeStep ? '#fff' : COLORS.ink, margin: 0 }}>{node.label}</p>
                <p style={{ fontFamily: B, fontSize: 11, color: i === activeStep ? 'rgba(255,255,255,0.7)' : COLORS.lightMuted, margin: '2px 0 0' }}>{node.sub}</p>
              </div>
              {i < nodes.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '3px 0' }}>
                  <svg width="2" height="16" viewBox="0 0 2 16"><line x1="1" y1="0" x2="1" y2="16" stroke={i < activeStep ? COLORS.navy : 'rgba(27,42,74,0.15)'} strokeWidth="2" /></svg>
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
              style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: i < steps.length - 1 ? 60 : 0 }}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  border: '1px solid rgba(27,42,74,0.08)',
                  padding: '28px 24px',
                  boxShadow: i === activeStep ? '0 4px 20px rgba(27,42,74,0.08)' : 'none',
                  transition: 'box-shadow 0.4s ease',
                }}
              >
                <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 6px' }}>
                  Step {i + 1}{step.who ? ` \u00b7 ${step.who}` : ''}
                </p>
                {step.label && (
                  <p style={{ fontFamily: B, fontSize: 12, fontWeight: 700, color: COLORS.claimRed, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {step.label}
                  </p>
                )}
                <h3 style={{ fontFamily: H, fontSize: 22, fontWeight: 700, color: COLORS.navy, margin: '0 0 12px' }}>{step.title}</h3>
                <p style={{ fontFamily: B, fontSize: 17, lineHeight: 1.7, color: COLORS.muted, margin: 0 }}>{step.detail}</p>
              </div>
            </div>
          ))}

          {/* What disappeared */}
          {disappeared && disappeared.length > 0 && (
            <div style={{ background: COLORS.amberLight, border: '1px solid rgba(196,138,10,0.15)', borderRadius: 12, padding: '24px 24px', marginTop: 20 }}>
              <p style={{ fontFamily: B, fontSize: 'var(--inv-section-heading, 14px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 10px' }}>What disappeared</p>
              <ul style={{ margin: 0, padding: '0 0 0 18px', listStyleType: 'disc' }}>
                {disappeared.map((item, i) => (
                  <li key={i} style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.amberDark, marginBottom: i < disappeared.length - 1 ? 6 : 0 }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* End note */}
          {endNote && (
            <p style={{ fontFamily: H, fontSize: 20, fontWeight: 700, color: COLORS.navy, lineHeight: 1.5, margin: '28px 0 0' }}>
              {endNote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CarelessWhispersPage() {
  return (
    <>
      <Nav />
      <BackButton />
      <main id="main-content" style={{ background: COLORS.paper }}>
        {/* Page header */}
        <div style={{ padding: '100px 28px 40px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: H, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: COLORS.navy, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            Careless whispers
          </h1>
          <p style={{ fontFamily: B, fontSize: 18, color: COLORS.muted, margin: '0 0 8px' }}>
            How numbers change as they pass from source to source. Two examples.
          </p>
        </div>

        {/* Chain 1: Railtrack */}
        <ChainSection
          id="railtrack-chain"
          title="How \u00a3500m became 'established fact' in 7 months"
          subtitle="Railtrack nationalisation cost. From one MP's blog to live TV."
          steps={railtrackSteps}
          nodes={railtrackNodes}
          disappeared={railtrackDisappeared}
          endNote="A claim by an MP became an 'established fact' used on live television to argue for cheap nationalisation. The \u00a37.1bn debt was never mentioned. Not once."
        />

        {/* Divider */}
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 28px' }}>
          <hr style={{ border: 'none', borderTop: '1px solid rgba(27,42,74,0.1)', margin: '0 0 60px' }} />
        </div>

        {/* Chain 2: HMRC Tax Evasion */}
        <ChainSection
          id="hmrc-chain"
          title="How \u00a35.5bn became \u00a3350bn"
          subtitle="Tax evasion figures. From HMRC data to political talking point."
          steps={hmrcSteps}
          nodes={hmrcNodes}
          endNote="The label shrank 48 times. The number stayed. Policy is being built on a figure that bears no resemblance to the original data."
        />

        <div style={{ height: 80 }} />

        {/* Mobile: hide sticky chains */}
        <style>{`
          @media (max-width: 768px) {
            .cw-chain-desktop { display: none !important; }
          }
        `}</style>
      </main>
    </>
  );
}
