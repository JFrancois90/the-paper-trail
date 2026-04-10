'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import ScrollReveal from '@/components/ScrollReveal';
import IntroSequence from '@/components/IntroSequence';
import MobileHomepage from '@/components/mobile/MobileHomepage';
import BrandSlogan from '@/components/BrandSlogan';
import HeroSubtitle from '@/components/HeroSubtitle';
import useIsMobile from '@/lib/useIsMobile';
import { COLORS } from '@/lib/constants';

const H = 'var(--font-heading), sans-serif';
const B = 'var(--font-sans), sans-serif';

export default function Home() {
  const isMobile = useIsMobile();
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem('intro_seen');
    if (!seen) {
      setShowIntro(true);
      setIntroComplete(false);
    }
  }, []);

  function handleIntroComplete() {
    sessionStorage.setItem('intro_seen', 'true');
    setShowIntro(false);
    setIntroComplete(true);
  }

  // Show intro first (both mobile and desktop)
  if (showIntro && !introComplete) {
    return <IntroSequence onComplete={handleIntroComplete} isMobile={isMobile} />;
  }

  // Mobile layout
  if (isMobile) {
    return <MobileHomepage />;
  }

  // Desktop layout
  return (
    <>
      <Nav />
      <main id="main-content" style={{ overflowX: 'hidden' }}>
        {/* ─── SECTION 1: HERO ─── */}
        <section
          data-nav-theme="dark"
          style={{
            minHeight: '100vh',
            background: COLORS.navy,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 8vw',
            position: 'relative',
          }}
        >
          <div style={{ maxWidth: 1000, margin: '0 auto', width: '100%' }}>
            <h1
              style={{
                margin: '0 0 40px',
                animation: 'fadeUp 0.8s ease forwards',
                opacity: 0,
              }}
            >
              <BrandSlogan size="lg" theme="dark" />
            </h1>

            <HeroSubtitle />
          </div>

          {/* Scroll arrow */}
          <div
            style={{
              position: 'absolute',
              bottom: 32,
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'bounce 2s ease-in-out infinite 2s',
              opacity: 0.4,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <style>{`
            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(40px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes bounce {
              0%, 100% { transform: translateX(-50%) translateY(0); }
              50% { transform: translateX(-50%) translateY(8px); }
            }
          `}</style>
        </section>

        {/* ─── SECTION 2: THE PROBLEM ─── */}
        <section
          data-nav-theme="light"
          style={{
            minHeight: '100vh',
            background: COLORS.paper,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 8vw',
          }}
        >
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 48 }}>
              <ScrollReveal anim="scaleReveal" delay={0}>
                <p
                  style={{
                    fontFamily: H,
                    fontSize: 'clamp(24px, 4vw, 40px)',
                    fontWeight: 700,
                    color: COLORS.navy,
                    margin: 0,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  <span className="highlight-red">&pound;350 million</span> on a bus.
                </p>
              </ScrollReveal>

              <ScrollReveal anim="scaleReveal" delay={0.15}>
                <p
                  style={{
                    fontFamily: H,
                    fontSize: 'clamp(24px, 4vw, 40px)',
                    fontWeight: 700,
                    color: COLORS.navy,
                    margin: 0,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  <span className="highlight-red">&pound;7.1 billion</span> missing from a policy.
                </p>
              </ScrollReveal>

              <ScrollReveal anim="scaleReveal" delay={0.3}>
                <p
                  style={{
                    fontFamily: H,
                    fontSize: 'clamp(24px, 4vw, 40px)',
                    fontWeight: 700,
                    color: COLORS.navy,
                    margin: 0,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  A <span className="highlight-red">48&times;</span> exaggeration in Parliament.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal anim="fadeUp" delay={0.5}>
              <p
                style={{
                  fontFamily: B,
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  color: COLORS.ink60,
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: 560,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                These aren&apos;t opinions. They&apos;re numbers. And they&apos;re wrong.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 3: HOW IT WORKS ─── */}
        <section
          data-nav-theme="light"
          style={{
            minHeight: '100vh',
            background: COLORS.paper,
            display: 'flex',
            alignItems: 'center',
            padding: '80px 8vw',
          }}
        >
          <div style={{ maxWidth: 800, margin: '0 auto', width: '100%' }}>
            <ScrollReveal anim="fadeUp">
              <p
                style={{
                  fontFamily: B,
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: COLORS.ink40,
                  marginBottom: 48,
                }}
              >
                How it works
              </p>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
              {[
                {
                  num: '01',
                  title: 'They cite a source',
                  desc: 'A politician makes a claim and references a report, dataset, or official figure to back it up.',
                },
                {
                  num: '02',
                  title: 'We read it',
                  desc: 'We go to the actual source document they linked to. Not a press summary. Not a media interpretation. The original.',
                },
                {
                  num: '03',
                  title: 'We compare',
                  desc: 'We put what they said next to what the source actually shows. Then we let you see both, side by side.',
                },
              ].map((step, i) => (
                <ScrollReveal key={step.num} anim="slideLeft" delay={i * 0.15}>
                  <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                    <span
                      style={{
                        fontFamily: H,
                        fontSize: 'clamp(48px, 6vw, 80px)',
                        fontWeight: 700,
                        color: COLORS.navyLight,
                        lineHeight: 1,
                        flexShrink: 0,
                        letterSpacing: '-0.03em',
                        minWidth: 'clamp(60px, 8vw, 100px)',
                      }}
                    >
                      {step.num}
                    </span>
                    <div style={{ paddingTop: 'clamp(8px, 1vw, 16px)' }}>
                      <h3
                        style={{
                          fontFamily: H,
                          fontSize: 'clamp(18px, 2.5vw, 24px)',
                          fontWeight: 600,
                          color: COLORS.navy,
                          margin: '0 0 8px',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: B,
                          fontSize: 'clamp(15px, 1.5vw, 18px)',
                          lineHeight: 1.65,
                          color: COLORS.ink60,
                          margin: 0,
                          maxWidth: 500,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PLACEHOLDER: Sections 4-8 coming after review ─── */}
        <section
          data-nav-theme="light"
          style={{
            padding: '120px 8vw',
            background: COLORS.paper,
            textAlign: 'center',
          }}
        >
          <p style={{ fontFamily: B, fontSize: 14, color: COLORS.ink40 }}>
            Sections 4 through 8 will be built after review of sections 1 to 3.
          </p>
        </section>
      </main>
    </>
  );
}
