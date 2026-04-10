'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import BackButton from '@/components/BackButton';
import SourceDocsNotice from '@/components/SourceDocsNotice';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

/* ── Swipeable Said vs Source mini-cards for within steps ── */
function SaidSourceSwipe({ said, saidLabel, source, sourceLabel }: { said: string; saidLabel: string; source: string; sourceLabel: string }) {
  return (
    <div style={{ marginTop: 16 }}>
      <div
        style={{
          display: 'flex',
          gap: 10,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: 6,
          scrollbarWidth: 'none',
        }}
      >
        <div style={{ flex: '0 0 85%', scrollSnapAlign: 'center', background: COLORS.claimRedLight, borderRadius: 10, padding: '14px 16px' }}>
          <p style={{ fontFamily: B, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: COLORS.claimRed, margin: '0 0 6px' }}>{saidLabel}</p>
          <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.5, color: COLORS.claimRedDark, margin: 0 }}>{said}</p>
        </div>
        <div style={{ flex: '0 0 85%', scrollSnapAlign: 'center', background: COLORS.sourceGreenLight, borderRadius: 10, padding: '14px 16px' }}>
          <p style={{ fontFamily: B, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: COLORS.sourceGreen, margin: '0 0 6px' }}>{sourceLabel}</p>
          <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.5, color: COLORS.sourceGreenDark, margin: 0 }}>{source}</p>
        </div>
      </div>
      <p style={{ fontFamily: B, fontSize: 11, color: COLORS.lightMuted, textAlign: 'center', margin: '6px 0 0' }}>Swipe to compare &rarr;</p>
    </div>
  );
}

const steps = [
  {
    title: 'The official number',
    who: 'HMRC',
    bg: COLORS.sourceGreenLight,
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 16px', lineHeight: 1.6 }}>
          HMRC publishes its annual tax gap. This is the difference between what should be paid and what actually is.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
          <Row label="Tax evasion" value="&pound;5.5bn" color={COLORS.sourceGreen} />
          <Row label="Tax avoidance" value="&pound;1.8bn" color={COLORS.sourceGreen} />
          <Row label="Total" value="&pound;7.3bn" color={COLORS.sourceGreen} bold />
        </div>
        <p style={{ fontFamily: B, fontSize: 13, color: COLORS.lightMuted, margin: 0 }}>Source: HMRC official figures</p>
      </>
    ),
  },
  {
    title: 'The NCA broadens the scope',
    who: 'National Crime Agency',
    bg: COLORS.amberLight,
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          The National Crime Agency estimates over &pound;100bn is laundered through or within the UK each year.
        </p>
        <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          This covers drugs, fraud, trafficking, and criminal funds. This is <strong>not</strong> the same as tax evasion. It covers all economic crime.
        </p>
        <BarComparison left="&pound;7.3bn" leftLabel="HMRC tax gap" right="&pound;100bn" rightLabel="NCA economic crime" />
        <SaidSourceSwipe
          said="Tax evasion costs £7.3bn"
          saidLabel="What the data says"
          source="Economic crime costs £100bn+"
          sourceLabel="What the NCA actually measured"
        />
      </>
    ),
  },
  {
    title: 'The APPG inflates further',
    who: 'All-Party Parliamentary Group',
    bg: COLORS.claimRedLight,
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          The APPG report states: &ldquo;By the NCA&apos;s own conservative estimate, fraud and money laundering combined costs the UK economy &pound;290 billion a year, though some studies have put the cost even higher, at &pound;350 billion.&rdquo;
        </p>
        <ul style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 12px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 6 }}>The NCA said &pound;100bn. The APPG said &pound;290bn. Then offered &pound;350bn as an upper end.</li>
          <li>The APPG also claimed &pound;350bn equals &ldquo;the annual health and education budget combined.&rdquo; The actual 2024-25 figure was &pound;423bn. Not even close.</li>
        </ul>
        <BarComparison left="&pound;100bn" leftLabel="NCA figure" right="&pound;350bn" rightLabel="APPG upper end" />
        <SaidSourceSwipe
          said="NCA said £100bn for all economic crime"
          saidLabel="What the NCA actually said"
          source="APPG inflated to £350bn and kept calling it the same thing"
          sourceLabel="What the APPG wrote"
        />
      </>
    ),
  },
  {
    title: 'The CIOT gives it authority',
    who: 'Chartered Institute of Taxation',
    bg: '#fff',
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          The CIOT quotes the APPG report: &ldquo;The groups suggest that the costs of economic crime and financial opacity are &lsquo;staggering&rsquo;, with some studies estimating it costs the UK &pound;350 billion a year.&rdquo;
        </p>
        <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          The phrase is still &ldquo;economic crime and financial opacity&rdquo; here. Not tax evasion. But it now has the authority of the CIOT name behind it.
        </p>
        <SaidSourceSwipe
          said="APPG said £350bn for economic crime and financial opacity"
          saidLabel="What the APPG wrote"
          source="CIOT quoted the same £350bn but under a chartered tax body's name"
          sourceLabel="What the CIOT published"
        />
      </>
    ),
  },
  {
    title: 'The final form',
    who: 'Public debate',
    bg: COLORS.claimRedLight,
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          By the time it reaches public debate, the claim becomes:
        </p>
        <p style={{ fontFamily: H, fontSize: 24, fontWeight: 700, color: COLORS.claimRed, margin: '0 0 16px' }}>
          &ldquo;&pound;350bn in tax evasion&rdquo;
        </p>
        <ul style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 12px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 6 }}>&ldquo;Economic crime and financial opacity&rdquo; became &ldquo;tax evasion.&rdquo;</li>
          <li style={{ marginBottom: 6 }}>The number stayed at &pound;350bn.</li>
          <li>The definition shrank 48 times.</li>
        </ul>
        <SaidSourceSwipe
          said="£5.5bn — HMRC's actual tax evasion figure"
          saidLabel="The real number"
          source="£350bn — what public debate now claims for tax evasion"
          sourceLabel="The inflated claim"
        />
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', margin: '20px 0' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: H, fontSize: 36, fontWeight: 700, color: COLORS.sourceGreen, margin: 0 }}>&pound;5.5bn</p>
            <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: '4px 0 0' }}>HMRC official</p>
          </div>
          <p style={{ fontFamily: H, fontSize: 24, fontWeight: 700, color: COLORS.navy, alignSelf: 'center', margin: 0 }}>vs</p>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: H, fontSize: 36, fontWeight: 700, color: COLORS.claimRed, margin: 0 }}>&pound;350bn</p>
            <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: '4px 0 0' }}>Claimed</p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Why this matters',
    who: '',
    bg: COLORS.amberLight,
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 18, lineHeight: 1.65, color: COLORS.amberDark, margin: '0 0 24px' }}>
          Any enforcement policy built on this number is budgeting for a problem 48 times larger than it actually is. That is not a rounding error. That is a completely different conversation.
        </p>
        <p style={{ fontFamily: B, fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 12px' }}>
          Questions we think deserve answers
        </p>
        <ul style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.muted, margin: 0, paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}>At which point was &ldquo;economic crime&rdquo; replaced with &ldquo;tax evasion&rdquo;?</li>
          <li style={{ marginBottom: 8 }}>If actual tax evasion is &pound;5.5bn, how does that change the cost-benefit of proposed enforcement?</li>
          <li>Why was the HMRC official figure not used from the start?</li>
        </ul>
      </>
    ),
  },
];

export default function CarelessWhispersPage() {
  const [step, setStep] = useState(0);
  const current = steps[step];
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll snap: when step changes, scroll to that section
  useEffect(() => {
    const el = sectionRefs.current[step];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [step]);

  // Handle scroll snap detection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const containerTop = container.scrollTop;
        const sectionHeight = container.clientHeight;
        const newStep = Math.round(containerTop / sectionHeight);
        if (newStep >= 0 && newStep < steps.length + 1 && newStep !== step) {
          setStep(Math.min(newStep > 0 ? newStep - 1 : 0, steps.length - 1));
        }
        ticking = false;
      });
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, [step]);

  return (
    <>
      <Nav />
      <BackButton />
      <div
        ref={containerRef}
        style={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {/* ── INTRO SECTION (snap) ── */}
        <div
          ref={(el) => { sectionRefs.current[0] = el; }}
          style={{
            scrollSnapAlign: 'start',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '100px 28px 60px',
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          {/* Position banner */}
          <div style={{ background: '#fae9b0', borderRadius: 8, padding: '12px 18px', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E2;</span>
            <p style={{ fontFamily: B, fontSize: 14, color: COLORS.navy, margin: 0 }}>
              We support closing tax evasion, 100%! We do not support fabricated numbers that drive policy.
            </p>
          </div>

          {/* Source docs notice */}
          <SourceDocsNotice />

          <h1 style={{ fontFamily: H, fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, color: COLORS.navy, margin: '0 0 8px', letterSpacing: '-0.02em' }}>
            Careless whispers
          </h1>
          <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 28px', lineHeight: 1.5 }}>
            How numbers change as they pass from source to source.
          </p>

          {/* Intro callout box */}
          <div style={{ background: '#fff', borderRadius: 10, borderLeft: `4px solid ${COLORS.navy}`, padding: 24, marginBottom: 24 }}>
            <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.65, color: COLORS.ink, margin: '0 0 8px' }}>
              We call this <strong>careless whispers</strong>.
            </p>
            <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.65, color: COLORS.muted, margin: '0 0 8px' }}>
              Each report did not debate the one before it.
              Each just quoted the previous, but changed it slightly.
            </p>
            <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.65, color: COLORS.muted, margin: 0 }}>
              We simply clicked through each source and mapped the change.
            </p>
          </div>

          {/* Equation: 2+1=2 */}
          <div style={{ textAlign: 'center', margin: '8px 0 24px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontFamily: H, fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: COLORS.navy, letterSpacing: '-0.03em' }}>
                <span style={{ color: COLORS.claimRed, textDecoration: 'underline', textDecorationColor: 'rgba(181,48,42,0.3)', textUnderlineOffset: '4px' }}>2</span> + 1 = 2
              </span>
              <span style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: COLORS.claimRed }}>&#10007;</span>
            </div>
            <p style={{ fontFamily: B, fontSize: 14, color: COLORS.muted, margin: '6px 0 0' }}>
              The inputs were reduced. The answer looks right. Nobody checked.
            </p>
          </div>

          {/* CTA */}
          <p style={{ fontFamily: H, fontSize: 18, fontWeight: 700, color: COLORS.amber, margin: '0 0 20px', textAlign: 'center' }}>
            Check it out! Click through like we did.
          </p>

          {/* Scroll hint */}
          <div style={{ textAlign: 'center', opacity: 0.4, animation: 'bounce 2s ease-in-out infinite' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke={COLORS.navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <style>{`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(8px); }
            }
          `}</style>
        </div>

        {/* ── STEP SECTIONS (snap) ── */}
        {steps.map((s, i) => (
          <div
            key={i}
            ref={(el) => { sectionRefs.current[i + 1] = el; }}
            style={{
              scrollSnapAlign: 'start',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '80px 28px 60px',
              maxWidth: 700,
              margin: '0 auto',
            }}
          >
            {/* Progress bar */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
              {steps.map((_, j) => (
                <div
                  key={j}
                  onClick={() => setStep(j)}
                  style={{
                    flex: 1,
                    height: 4,
                    borderRadius: 2,
                    background: j <= i ? COLORS.navy : 'rgba(27,42,74,0.1)',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease',
                  }}
                />
              ))}
            </div>

            {/* Step label */}
            <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 6px' }}>
              Step {i + 1} of {steps.length}{s.who ? ` \u00b7 ${s.who}` : ''}
            </p>
            <h2 style={{ fontFamily: H, fontSize: 22, fontWeight: 700, color: COLORS.navy, margin: '0 0 20px' }}>
              {s.title}
            </h2>

            {/* Step card */}
            <div
              style={{
                background: s.bg,
                borderRadius: 14,
                border: '1px solid rgba(27,42,74,0.06)',
                padding: 28,
                marginBottom: 24,
              }}
            >
              {s.content}
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <button
                onClick={() => setStep(Math.max(0, i - 1))}
                disabled={i === 0}
                style={{
                  fontFamily: B, fontSize: 14, fontWeight: 600, color: i === 0 ? COLORS.lightMuted : COLORS.navy,
                  background: 'transparent', border: `1.5px solid ${i === 0 ? 'rgba(27,42,74,0.1)' : COLORS.navy}`,
                  borderRadius: 8, padding: '10px 24px', cursor: i === 0 ? 'default' : 'pointer', minHeight: 44,
                }}
              >
                &larr; Back
              </button>
              {i < steps.length - 1 ? (
                <button
                  onClick={() => setStep(i + 1)}
                  style={{
                    fontFamily: B, fontSize: 14, fontWeight: 600, color: '#fff',
                    background: COLORS.navy, border: 'none', borderRadius: 8,
                    padding: '10px 24px', cursor: 'pointer', minHeight: 44,
                  }}
                >
                  Next &rarr;
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: 'Careless Whispers', text: 'How \u00a35.5bn became \u00a3350bn through a chain of citations.', url: 'https://thepapertrail.uk/careless-whispers' });
                    } else {
                      navigator.clipboard?.writeText('https://thepapertrail.uk/careless-whispers');
                    }
                  }}
                  style={{
                    fontFamily: B, fontSize: 14, fontWeight: 600, color: '#fff',
                    background: COLORS.navy, border: 'none', borderRadius: 8,
                    padding: '10px 24px', cursor: 'pointer', minHeight: 44,
                  }}
                >
                  Share this trail &rarr;
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Row({ label, value, color, bold }: { label: string; value: string; color: string; bold?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(27,42,74,0.04)' }}>
      <span style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 14, color: '#5a5d66' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: bold ? 18 : 15, fontWeight: bold ? 700 : 600, color }} dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

function BarComparison({ left, leftLabel, right, rightLabel }: { left: string; leftLabel: string; right: string; rightLabel: string }) {
  return (
    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', margin: '16px 0 0' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 20, fontWeight: 700, color: '#1a6b42', margin: 0 }} dangerouslySetInnerHTML={{ __html: left }} />
        <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 12, color: '#8b8e99', margin: '2px 0 0' }}>{leftLabel}</p>
      </div>
      <p style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 16, fontWeight: 700, color: '#1b2a4a', alignSelf: 'center', margin: 0 }}>&rarr;</p>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 20, fontWeight: 700, color: '#b5302a', margin: 0 }} dangerouslySetInnerHTML={{ __html: right }} />
        <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 12, color: '#8b8e99', margin: '2px 0 0' }}>{rightLabel}</p>
      </div>
    </div>
  );
}
