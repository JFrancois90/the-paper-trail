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
          touchAction: 'pan-x',
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
        <ul style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 12px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 6 }}>HMRC publishes its annual tax gap</li>
          <li style={{ marginBottom: 6 }}>Tax evasion: &pound;5.5bn</li>
          <li style={{ marginBottom: 6 }}>Tax avoidance: &pound;1.8bn</li>
          <li>Total: &pound;7.3bn</li>
        </ul>
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
        <ul style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 12px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 6 }}>NCA estimates over &pound;100bn laundered through the UK</li>
          <li style={{ marginBottom: 6 }}>Covers drugs, fraud, trafficking, criminal funds</li>
          <li>This is <strong>not</strong> tax evasion. It is all economic crime.</li>
        </ul>
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
        <ul style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 12px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 6 }}>NCA said &pound;100bn. APPG said &pound;290bn.</li>
          <li style={{ marginBottom: 6 }}>Then offered &pound;350bn as an upper end.</li>
          <li>APPG claimed &pound;350bn equals the health and education budget. Actual figure: &pound;423bn.</li>
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
        <ul style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 12px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 6 }}>CIOT quoted the APPG&apos;s &pound;350bn figure</li>
          <li style={{ marginBottom: 6 }}>Still called &ldquo;economic crime and financial opacity&rdquo;</li>
          <li>But now has the authority of a chartered tax body behind it</li>
        </ul>
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
        <p style={{ fontFamily: H, fontSize: 24, fontWeight: 700, color: COLORS.claimRed, margin: '0 0 16px' }}>
          &ldquo;&pound;350bn in tax evasion&rdquo;
        </p>
        <ul style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 12px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 6 }}>&ldquo;Economic crime&rdquo; became &ldquo;tax evasion&rdquo;</li>
          <li style={{ marginBottom: 6 }}>The number stayed at &pound;350bn</li>
          <li>The definition shrank 48 times</li>
        </ul>
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
        <ul style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 16px', paddingLeft: 20 }}>
          <li style={{ marginBottom: 6 }}>Any enforcement policy built on this number is budgeting for a problem 48 times larger than it is</li>
          <li style={{ marginBottom: 6 }}>That is not a rounding error</li>
          <li>That is a completely different conversation</li>
        </ul>
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Navigate to a step via button click
  const goToStep = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    isScrollingRef.current = true;
    setStep(idx);
    el.scrollTo({ left: idx * el.clientWidth, behavior: 'smooth' });
    // Clear the flag after the smooth scroll completes
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  // Track scroll position to update step indicator (swipe only)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      if (isScrollingRef.current) return;
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      if (idx >= 0 && idx < steps.length && idx !== step) {
        setStep(idx);
      }
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [step]);

  return (
    <>
      <Nav />
      <BackButton />
      <main
        id="main-content"
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 72,
        }}
      >
        {/* Header */}
        <div style={{ padding: '20px 28px 0', maxWidth: 900, margin: '0 auto', width: '100%' }}>
          <SourceDocsNotice />

          {/* Position banner */}
          <div style={{ background: '#fae9b0', borderRadius: 8, padding: '12px 18px', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E2;</span>
            <p style={{ fontFamily: B, fontSize: 14, color: COLORS.navy, margin: 0 }}>
              We support closing tax evasion, 100%! We do not support fabricated numbers that drive policy.
            </p>
          </div>

          <h1 style={{ fontFamily: H, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: COLORS.navy, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            Careless whispers
          </h1>
          <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 16px' }}>
            How numbers change as they pass from source to source. Swipe through each step.
          </p>

          {/* Progress bar */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
            {steps.map((_, i) => (
              <div
                key={i}
                onClick={() => goToStep(i)}
                style={{
                  flex: 1,
                  height: 4,
                  borderRadius: 2,
                  background: i <= step ? COLORS.navy : 'rgba(27,42,74,0.1)',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                }}
              />
            ))}
          </div>
          <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 12px' }}>
            Step {step + 1} of {steps.length}{steps[step].who ? ` \u00b7 ${steps[step].who}` : ''}
          </p>
        </div>

        {/* Horizontal swipe container */}
        <div
          ref={scrollRef}
          style={{
            flex: 1,
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          <style>{`.cw-card::-webkit-scrollbar { display: none; }`}</style>
          {steps.map((s, i) => (
            <div
              key={i}
              className="cw-card"
              style={{
                flex: '0 0 100%',
                scrollSnapAlign: 'start',
                padding: '0 28px 24px',
                boxSizing: 'border-box',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ maxWidth: 700, margin: '0 auto', width: '100%' }}>
                <h2 style={{ fontFamily: H, fontSize: 22, fontWeight: 700, color: COLORS.navy, margin: '0 0 16px' }}>
                  {s.title}
                </h2>
                <div
                  style={{
                    background: s.bg,
                    borderRadius: 14,
                    border: '1px solid rgba(27,42,74,0.06)',
                    padding: 24,
                    marginBottom: 20,
                  }}
                >
                  {s.content}
                </div>

                {/* Navigation buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                  <button
                    onClick={() => goToStep(Math.max(0, i - 1))}
                    disabled={i === 0}
                    style={{
                      fontFamily: B, fontSize: 14, fontWeight: 600,
                      color: i === 0 ? COLORS.lightMuted : COLORS.navy,
                      background: 'transparent',
                      border: `1.5px solid ${i === 0 ? 'rgba(27,42,74,0.1)' : COLORS.navy}`,
                      borderRadius: 8, padding: '10px 24px',
                      cursor: i === 0 ? 'default' : 'pointer', minHeight: 44,
                    }}
                  >
                    &larr; Back
                  </button>
                  {i < steps.length - 1 ? (
                    <button
                      onClick={() => goToStep(i + 1)}
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
            </div>
          ))}
        </div>
      </main>
    </>
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
