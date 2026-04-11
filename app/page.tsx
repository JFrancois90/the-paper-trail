'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import ScrollReveal from '@/components/ScrollReveal';
import IntroSequence from '@/components/IntroSequence';
import MobileHomepage from '@/components/mobile/MobileHomepage';
import BrandSlogan from '@/components/BrandSlogan';
import HeroSubtitle from '@/components/HeroSubtitle';
import SubmissionForm from '@/components/SubmissionForm';
import FloatingNarrative from '@/components/FloatingNarrative';
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
          className="snap-section"
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
          <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
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
          className="snap-section"
          data-nav-theme="light"
          style={{
            minHeight: '100vh',
            background: COLORS.paper,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 8vw',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {[
                { text: <><span className="highlight-red">&pound;350m a week</span> plastered on a bus.</>, delay: 0 },
                { text: <><span className="highlight-red">&pound;7.1 billion</span> missing from a policy.</>, delay: 0.12 },
                { text: <>A <span className="highlight-red">48&times;</span> exaggeration in Parliament.</>, delay: 0.24 },
              ].map((item, i) => (
                <ScrollReveal key={i} anim="scaleReveal" delay={item.delay}>
                  <p
                    style={{
                      fontFamily: H,
                      fontSize: 'clamp(32px, 4.5vw, 56px)',
                      fontWeight: 700,
                      color: COLORS.navy,
                      margin: 0,
                      lineHeight: 1.15,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {item.text}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal anim="fadeUp" delay={0.4}>
              <p
                style={{
                  fontFamily: B,
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  color: COLORS.muted,
                  lineHeight: 1.6,
                  margin: '0 0 40px',
                }}
              >
                These aren&apos;t <span style={{ color: COLORS.navy, fontWeight: 600 }}>opinions</span>. They&apos;re <span style={{ color: COLORS.amber, fontWeight: 600 }}>numbers</span>. And they&apos;re <span style={{ color: COLORS.claimRed, fontWeight: 600 }}>wrong</span>.
              </p>
            </ScrollReveal>

            {/* Three-act equation */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 20 }}>
              {/* Act 1 */}
              <ScrollReveal anim="scaleReveal" delay={0.5}>
                <div className="hover-card" style={{ textAlign: 'center', background: '#fff', border: '1px solid rgba(27,42,74,0.10)', borderRadius: 14, padding: '32px 24px', boxShadow: '0 2px 8px rgba(27,42,74,0.04)', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.muted, margin: '0 0 8px' }}>What we were <span style={{ color: COLORS.navy, fontWeight: 700 }}>taught</span></p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    <span style={{ fontFamily: H, fontSize: 'clamp(40px, 4.5vw, 56px)', fontWeight: 700, color: COLORS.navy, letterSpacing: '-0.03em' }}>1 + 1 = 2</span>
                    <span style={{ fontSize: 'clamp(28px, 3vw, 40px)', color: COLORS.sourceGreen }}>&#10003;</span>
                  </div>
                  <p style={{ fontFamily: B, fontSize: 15, color: COLORS.navy, margin: '6px 0 0' }}>The basics. Everyone agrees.</p>
                </div>
              </ScrollReveal>

              {/* Act 2 */}
              <ScrollReveal anim="scaleReveal" delay={0.65}>
                <div className="hover-card" style={{ textAlign: 'center', background: '#fff', border: '1px solid rgba(27,42,74,0.10)', borderRadius: 14, padding: '32px 24px', boxShadow: '0 2px 8px rgba(27,42,74,0.04)', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.muted, margin: '0 0 8px' }}>What we were taught to look out for</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    <span style={{ fontFamily: H, fontSize: 'clamp(40px, 4.5vw, 56px)', fontWeight: 700, color: COLORS.navy, letterSpacing: '-0.03em' }}>
                      1 + 1 = <span style={{ color: COLORS.claimRed }}>3</span>
                    </span>
                    <span style={{ fontSize: 'clamp(28px, 3vw, 40px)', color: COLORS.claimRed }}>&#10007;</span>
                  </div>
                  <p style={{ fontFamily: B, fontSize: 15, color: COLORS.navy, margin: '6px 0 0' }}>The old problem. Twisting the answer.</p>
                </div>
              </ScrollReveal>

              {/* Act 3 */}
              <ScrollReveal anim="scaleReveal" delay={0.8}>
                <div className="hover-card" style={{ textAlign: 'center', background: '#fff', border: '1px solid rgba(27,42,74,0.10)', borderRadius: 14, padding: '32px 24px', boxShadow: '0 2px 8px rgba(27,42,74,0.04)', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.muted, margin: '0 0 8px' }}>What we actually need to <span style={{ color: COLORS.claimRed, fontWeight: 700 }}>look out for</span></p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    <span style={{ fontFamily: H, fontSize: 'clamp(40px, 4.5vw, 56px)', fontWeight: 700, color: COLORS.navy, letterSpacing: '-0.03em' }}>
                      <span style={{ color: COLORS.claimRed, textDecoration: 'underline', textDecorationColor: 'rgba(181,48,42,0.3)', textUnderlineOffset: '4px' }}>2</span> + 1 = 2
                    </span>
                    <span style={{ fontSize: 'clamp(28px, 3vw, 40px)', color: COLORS.claimRed }}>&#10007;</span>
                  </div>
                  <p style={{ fontFamily: B, fontSize: 15, color: COLORS.navy, margin: '6px 0 0' }}>The inputs are wrong. The answer looks familiar, so nobody checks.</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal anim="fadeUp" delay={0.95}>
              <div style={{ marginTop: 48, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
                <p style={{ fontFamily: B, fontSize: 18, lineHeight: 1.65, color: COLORS.navy, margin: '0 0 6px' }}>Forget the statistics. Forget the politics.</p>
                <p style={{ fontFamily: B, fontSize: 18, lineHeight: 1.65, color: COLORS.navy, margin: '0 0 6px' }}><span className="highlight">Check the base data.</span></p>
                <p style={{ fontFamily: B, fontSize: 18, lineHeight: 1.65, color: COLORS.navy, margin: '0 0 6px' }}>Fix that, and the rest follows.</p>
                <p style={{ fontFamily: B, fontSize: 18, lineHeight: 1.65, color: COLORS.navy, margin: 0 }}>Get it wrong, and it&apos;s a butterfly effect of errors.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 3: WHAT WE DO ─── */}
        <section
          className="snap-section"
          data-nav-theme="light"
          style={{
            minHeight: '100vh',
            background: COLORS.paper,
            display: 'flex',
            alignItems: 'center',
            padding: '60px 8vw',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
            <ScrollReveal anim="fadeUp">
              <h2
                style={{
                  fontFamily: H,
                  fontSize: 28,
                  fontWeight: 700,
                  color: COLORS.navy,
                  margin: '0 0 8px',
                }}
              >
                What we do
              </h2>
              <p
                style={{
                  fontFamily: B,
                  fontSize: 16,
                  color: COLORS.muted,
                  margin: '0 0 32px',
                }}
              >
                We&apos;re just checking what people quote is correct. It&apos;s that simple.
              </p>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.1}>
              <img
                src="/images/forest-illustration.png"
                alt="When the base number is wrong, everything built on it falls apart."
                style={{
                  width: '100%',
                  maxWidth: 800,
                  display: 'block',
                  margin: '0 auto 32px',
                  borderRadius: 8,
                }}
              />
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {[
                {
                  num: '01',
                  title: 'They cite a source',
                  desc: 'A politician references a report to back up their claim.',
                  bg: '#e8f0fa',
                  icon: (
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <rect x="16" y="12" width="36" height="48" rx="4" stroke="#1b2a4a" strokeWidth="2" />
                      <line x1="24" y1="24" x2="44" y2="24" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="24" y1="32" x2="44" y2="32" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="24" y1="40" x2="36" y2="40" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="56" cy="48" r="10" stroke="#1b2a4a" strokeWidth="2" />
                      <path d="M52 48h8M56 44v8" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  num: '02',
                  title: 'We read it',
                  desc: 'We read the actual source. Not a summary. The original.',
                  bg: '#fef3d0',
                  icon: (
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <rect x="20" y="16" width="32" height="44" rx="4" stroke="#1b2a4a" strokeWidth="2" />
                      <line x1="28" y1="28" x2="44" y2="28" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="28" y1="36" x2="44" y2="36" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="50" cy="50" r="14" stroke="#1b2a4a" strokeWidth="2" />
                      <line x1="60" y1="60" x2="68" y2="68" stroke="#1b2a4a" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  num: '03',
                  title: 'We compare',
                  desc: 'We put what they said next to what the source shows. Side by side.',
                  bg: '#e0f2e9',
                  icon: (
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <rect x="8" y="16" width="26" height="40" rx="4" stroke="#b5302a" strokeWidth="2" />
                      <rect x="46" y="16" width="26" height="40" rx="4" stroke="#1a6b42" strokeWidth="2" />
                      <text x="21" y="40" textAnchor="middle" fill="#b5302a" fontSize="10" fontWeight="700" fontFamily="sans-serif">VS</text>
                      <line x1="38" y1="28" x2="42" y2="28" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="38" y1="36" x2="42" y2="36" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="38" y1="44" x2="42" y2="44" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
              ].map((step, i) => (
                <ScrollReveal key={step.num} anim="fadeUp" delay={i * 0.15}>
                  <div
                    className="hover-card"
                    style={{
                      background: step.bg,
                      border: '1px solid rgba(27,42,74,0.08)',
                      borderRadius: 14,
                      padding: 28,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16,
                      boxShadow: '0 2px 8px rgba(27,42,74,0.04)',
                      cursor: 'default',
                    }}
                  >
                    <div style={{ flexShrink: 0 }}>{step.icon}</div>
                    <div>
                      <span
                        style={{
                          fontFamily: H,
                          fontSize: 64,
                          fontWeight: 700,
                          color: COLORS.navyLight,
                          letterSpacing: '-0.03em',
                          lineHeight: 1,
                        }}
                      >
                        {step.num}
                      </span>
                      <h3
                        style={{
                          fontFamily: H,
                          fontSize: 22,
                          fontWeight: 700,
                          color: COLORS.navy,
                          margin: 0,
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: B,
                          fontSize: 16,
                          lineHeight: 1.55,
                          color: COLORS.navy,
                          margin: 0,
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

        {/* ─── SECTION 4: FEATURED INVESTIGATION (RAILTRACK) ─── */}
        <section
          className="snap-section"
          data-nav-theme="light"
          style={{
            minHeight: '100vh',
            background: COLORS.paper,
            display: 'flex',
            alignItems: 'center',
            padding: '60px 8vw',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
            <ScrollReveal anim="fadeUp">
              <p style={{ fontFamily: H, fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', color: COLORS.navy, marginBottom: 16 }}>
                Featured investigation
              </p>
              <div style={{ background: '#fae9b0', borderRadius: 8, padding: '12px 18px', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E2;</span>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.navy, margin: 0 }}>We support public accountability for nationalisation costs. We disagree with incorrect figures, regardless of political alignment.</p>
              </div>
              <p
                style={{
                  fontFamily: H,
                  fontSize: 'clamp(18px, 2.5vw, 22px)',
                  fontWeight: 400,
                  color: COLORS.ink,
                  lineHeight: 1.4,
                  margin: '0 0 6px',
                }}
              >
                &ldquo;Labour nationalised Railtrack, paying just <span className="highlight-red">&pound;500 million</span>&rdquo;
              </p>
              <p style={{ fontFamily: B, fontSize: 13, color: COLORS.lightMuted, margin: '0 0 40px' }}>
                Clive Lewis MP, Dec 2024
              </p>
            </ScrollReveal>

            {/* Big comparison cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: 16,
                alignItems: 'center',
                marginBottom: 40,
              }}
            >
              <ScrollReveal anim="fadeUp" delay={0.1}>
                <div
                  style={{
                    background: COLORS.claimRedLight,
                    borderRadius: 14,
                    padding: '32px 24px',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: H,
                      fontSize: 'clamp(40px, 5vw, 64px)',
                      fontWeight: 700,
                      color: COLORS.claimRed,
                      margin: '0 0 8px',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}
                  >
                    &pound;500m
                  </p>
                  <p style={{ fontFamily: B, fontSize: 14, color: COLORS.claimRedDark, margin: 0 }}>
                    What they said it cost
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal anim="scaleReveal" delay={0.25}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: COLORS.navy,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'pulse 3s ease-in-out infinite',
                  }}
                >
                  <span style={{ fontFamily: H, fontSize: 18, fontWeight: 700, color: '#fff' }}>15&times;</span>
                </div>
              </ScrollReveal>

              <ScrollReveal anim="fadeUp" delay={0.15}>
                <div
                  style={{
                    background: COLORS.sourceGreenLight,
                    borderRadius: 14,
                    padding: '32px 24px',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: H,
                      fontSize: 'clamp(40px, 5vw, 64px)',
                      fontWeight: 700,
                      color: COLORS.sourceGreen,
                      margin: '0 0 8px',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}
                  >
                    &pound;7.6bn
                  </p>
                  <p style={{ fontFamily: B, fontSize: 14, color: COLORS.sourceGreenDark, margin: 0 }}>
                    What it actually cost
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal anim="fadeUp" delay={0.3}>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid rgba(27,42,74,0.06)',
                  borderRadius: 14,
                  padding: '20px 24px',
                  marginBottom: 24,
                }}
              >
                <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 8px' }}>
                  Why this matters
                </p>
                <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.ink, margin: 0 }}>
                  We need to know what it will cost to nationalise. Plain and simple. Maths errors of this size aren&apos;t acceptable when billions of pounds of public money are at stake.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.35}>
              <Link
                href="/investigations/railtrack-500m"
                style={{
                  fontFamily: B,
                  fontSize: 14,
                  fontWeight: 600,
                  color: COLORS.chainBlue,
                  textDecoration: 'none',
                }}
              >
                See the full trail &rarr;
              </Link>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.4}>
              <div style={{ marginTop: 20, border: `1px solid rgba(27,42,74,0.12)`, borderRadius: 10, padding: '16px 20px', background: '#fff', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E9;</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: COLORS.navy, margin: '0 0 6px' }}>Asked for comment</p>
                  <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 10px' }}>
                    We have asked Clive Lewis MP for comment.
                  </p>
                  <span style={{ display: 'inline-block', fontFamily: B, fontSize: 13, fontWeight: 700, color: '#fff', background: COLORS.claimRed, padding: '6px 14px', borderRadius: 20 }}>Outstanding</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <style>{`
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.06); }
            }
          `}</style>
        </section>

        {/* ─── SECTION 4B: FEATURED — WHITTOME ─── */}
        <section
          className="snap-section"
          data-nav-theme="light"
          style={{ minHeight: '100vh', background: COLORS.paper, display: 'flex', alignItems: 'center', padding: '60px 8vw' }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
            <ScrollReveal anim="fadeUp">
              <p style={{ fontFamily: H, fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', color: COLORS.navy, marginBottom: 16 }}>
                Featured investigation
              </p>
              <div style={{ background: '#fae9b0', borderRadius: 8, padding: '12px 18px', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E2;</span>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.navy, margin: 0 }}>We support fair access to higher education and reform of student debt. We disagree with incorrect figures, regardless of political alignment.</p>
              </div>
              <p style={{ fontFamily: H, fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400, color: COLORS.ink, lineHeight: 1.4, margin: '0 0 6px' }}>
                &ldquo;I left university in 2019 with <span className="highlight-red">£49,600</span> of debt&rdquo;
              </p>
              <p style={{ fontFamily: B, fontSize: 13, color: COLORS.lightMuted, margin: '0 0 40px' }}>
                Nadia Whittome MP, 2025
              </p>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'center', marginBottom: 40 }}>
              <ScrollReveal anim="fadeUp" delay={0.1}>
                <div style={{ background: COLORS.claimRedLight, borderRadius: 14, padding: '32px 24px', textAlign: 'center' }}>
                  <p style={{ fontFamily: H, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: COLORS.claimRed, margin: '0 0 8px', letterSpacing: '-0.03em', lineHeight: 1 }}>£49,600</p>
                  <p style={{ fontFamily: B, fontSize: 14, color: COLORS.claimRedDark, margin: 0 }}>Claimed debt</p>
                </div>
              </ScrollReveal>
              <ScrollReveal anim="scaleReveal" delay={0.25}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: COLORS.navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: H, fontSize: 14, fontWeight: 700, color: '#fff' }}>£13.6k</span>
                </div>
              </ScrollReveal>
              <ScrollReveal anim="fadeUp" delay={0.15}>
                <div style={{ background: COLORS.sourceGreenLight, borderRadius: 14, padding: '32px 24px', textAlign: 'center' }}>
                  <p style={{ fontFamily: H, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: COLORS.sourceGreen, margin: '0 0 8px', letterSpacing: '-0.03em', lineHeight: 1 }}>~£36k</p>
                  <p style={{ fontFamily: B, fontSize: 14, color: COLORS.sourceGreenDark, margin: 0 }}>Max possible for 2 years</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal anim="fadeUp" delay={0.3}>
              <div style={{ background: '#fff', border: '2px solid rgba(196,138,10,0.18)', borderRadius: 14, padding: '24px 28px', marginBottom: 24 }}>
                <p style={{ fontFamily: B, fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 10px' }}>Why this matters</p>
                <p style={{ fontFamily: B, fontSize: 18, lineHeight: 1.6, color: COLORS.ink, margin: 0 }}>
                  This figure is being used to argue for tuition fee reform. If the stated debt is &pound;13,600 higher than what&apos;s possible for the study period, the personal story underpinning the policy doesn&apos;t add up.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal anim="fadeUp" delay={0.35}>
              <Link href="/investigations/student-debt-claim" style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.chainBlue, textDecoration: 'none' }}>
                See the full trail &rarr;
              </Link>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.4}>
              <div style={{ marginTop: 20, border: `1px solid rgba(27,42,74,0.12)`, borderRadius: 10, padding: '16px 20px', background: '#fff', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E9;</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: COLORS.navy, margin: '0 0 6px' }}>Asked for comment</p>
                  <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 4px' }}>
                    We raised this with the Parliamentary Standards Commissioner in January 2026.
                  </p>
                  <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 4px' }}>
                    The Commissioner confirmed he will not open a formal investigation at this time.
                  </p>
                  <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 10px' }}>
                    The response noted that the Commissioner &ldquo;takes careful note of concerns raised by members of the public&rdquo; and is &ldquo;concerned by some of the choices of language and tone made by some MPs.&rdquo;
                  </p>
                  <span style={{ display: 'inline-block', fontFamily: B, fontSize: 13, fontWeight: 700, color: '#fff', background: COLORS.claimRed, padding: '6px 14px', borderRadius: 20 }}>Outstanding</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 4C: FEATURED — CANARY/REFORM ─── */}
        <section
          className="snap-section"
          data-nav-theme="light"
          style={{ minHeight: '100vh', background: COLORS.paper, display: 'flex', alignItems: 'center', padding: '60px 8vw' }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
            <ScrollReveal anim="fadeUp">
              <p style={{ fontFamily: H, fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', color: COLORS.navy, marginBottom: 16 }}>
                Featured investigation
              </p>
              <div style={{ background: '#fae9b0', borderRadius: 8, padding: '12px 18px', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E2;</span>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.navy, margin: 0 }}>We support taxes on those who can afford it. We disagree with incorrect figures, regardless of political alignment.</p>
              </div>
              <p style={{ fontFamily: H, fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400, color: COLORS.ink, lineHeight: 1.4, margin: '0 0 6px' }}>
                &ldquo;Reform&apos;s tax cuts help the <span className="highlight-red">richest people</span> more than the poorest&rdquo;
              </p>
              <p style={{ fontFamily: B, fontSize: 13, color: COLORS.lightMuted, margin: '0 0 40px' }}>
                The Canary UK, Feb 2026
              </p>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'center', marginBottom: 40 }}>
              <ScrollReveal anim="fadeUp" delay={0.1}>
                <div style={{ background: COLORS.claimRedLight, borderRadius: 14, padding: '32px 24px', textAlign: 'center' }}>
                  <p style={{ fontFamily: H, fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: COLORS.claimRed, margin: '0 0 8px', lineHeight: 1.2 }}>&pound;1,500 vs &pound;3,000</p>
                  <p style={{ fontFamily: B, fontSize: 14, color: COLORS.claimRedDark, margin: 0 }}>What they claimed</p>
                </div>
              </ScrollReveal>
              <ScrollReveal anim="scaleReveal" delay={0.25}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: COLORS.amber, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: H, fontSize: 36, fontWeight: 700, color: '#fff' }}>=</span>
                </div>
              </ScrollReveal>
              <ScrollReveal anim="fadeUp" delay={0.15}>
                <div style={{ background: COLORS.sourceGreenLight, borderRadius: 14, padding: '32px 24px', textAlign: 'center' }}>
                  <p style={{ fontFamily: H, fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: COLORS.sourceGreen, margin: '0 0 8px', lineHeight: 1.2 }}>£1,486 = £1,486</p>
                  <p style={{ fontFamily: B, fontSize: 14, color: COLORS.sourceGreenDark, margin: 0 }}>Both earners save the same</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal anim="fadeUp" delay={0.3}>
              <div style={{ background: '#fff', border: '2px solid rgba(196,138,10,0.18)', borderRadius: 14, padding: '24px 28px', marginBottom: 24 }}>
                <p style={{ fontFamily: B, fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 10px' }}>Why this matters</p>
                <p style={{ fontFamily: B, fontSize: 18, lineHeight: 1.6, color: COLORS.ink, margin: 0 }}>
                  Getting tax band maths wrong misleads people about who benefits from a policy. Both earners save exactly the same amount.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal anim="fadeUp" delay={0.35}>
              <Link href="/investigations/reform-tax-canary" style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.chainBlue, textDecoration: 'none' }}>
                See the full trail &rarr;
              </Link>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.4}>
              <div style={{ marginTop: 20, border: `1px solid rgba(27,42,74,0.12)`, borderRadius: 10, padding: '16px 20px', background: '#fff', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E9;</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: COLORS.navy, margin: '0 0 6px' }}>Asked for comment</p>
                  <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>The Canary</p>
                  <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 10px' }}>
                    No response received.
                  </p>
                  <span style={{ display: 'inline-block', fontFamily: B, fontSize: 13, fontWeight: 700, color: '#fff', background: COLORS.claimRed, padding: '6px 14px', borderRadius: 20, marginBottom: 14 }}>No response</span>
                  <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>Richard Murphy (via Instagram, 26 Feb 2026)</p>
                  <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 10px' }}>
                    No response received.
                  </p>
                  <span style={{ display: 'inline-block', fontFamily: B, fontSize: 13, fontWeight: 700, color: '#fff', background: COLORS.claimRed, padding: '6px 14px', borderRadius: 20 }}>No response</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 5: CARELESS WHISPERS ─── */}
        <section
          className="snap-section"
          data-nav-theme="dark"
          style={{
            minHeight: '100vh',
            background: COLORS.navy,
            display: 'flex',
            alignItems: 'center',
            padding: '60px 8vw',
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
            <ScrollReveal anim="fadeUp">
              <h2 style={{ fontFamily: H, fontSize: 22, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>
                Careless whispers
              </h2>
              <p style={{ fontFamily: B, fontSize: 16, color: 'rgba(255,255,255,0.4)', margin: '0 0 40px' }}>
                How &pound;500m became &lsquo;established fact&rsquo; in 7 months
              </p>
            </ScrollReveal>

            {/* Tree layout */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              {/* Origin node */}
              <ScrollReveal anim="scaleReveal">
                <div style={{ background: COLORS.chainBlueLight, borderRadius: 10, padding: '14px 28px', textAlign: 'center' }}>
                  <p style={{ fontFamily: B, fontSize: 15, fontWeight: 600, color: COLORS.ink, margin: 0 }}>Clive Lewis MP</p>
                  <p style={{ fontFamily: B, fontSize: 12, color: COLORS.muted, margin: '2px 0 0' }}>clivelewis.org &middot; Dec 2024 &middot; origin</p>
                </div>
              </ScrollReveal>

              {/* Connector down */}
              <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="28" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" /></svg>

              {/* Two branches */}
              <ScrollReveal anim="fadeUp" delay={0.15}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, width: '100%', maxWidth: 700 }}>
                  {/* Left branch */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                    <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', textAlign: 'center', width: '100%' }}>
                      <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.ink, margin: 0 }}>We Own It + Univ. Greenwich</p>
                      <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: '2px 0 0' }}>Apr 2025 &middot; Prof. David Hall</p>
                    </div>
                    <svg width="2" height="20" viewBox="0 0 2 20"><line x1="1" y1="0" x2="1" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" /></svg>
                    <p style={{ fontFamily: B, fontSize: 12, color: COLORS.amber, margin: '0 0 4px', textAlign: 'center' }}>&pound;7.1bn debt omitted</p>
                    <svg width="2" height="12" viewBox="0 0 2 12"><line x1="1" y1="0" x2="1" y2="12" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" /></svg>
                    <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', textAlign: 'center', width: '100%' }}>
                      <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.ink, margin: 0 }}>Left Foot Forward</p>
                      <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: '2px 0 0' }}>Apr 2025 &middot; article</p>
                    </div>
                  </div>

                  {/* Right branch */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                    <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', textAlign: 'center', width: '100%' }}>
                      <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.ink, margin: 0 }}>Common Wealth</p>
                      <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: '2px 0 0' }}>Jun 2025 &middot; Ewan McGaughey</p>
                    </div>
                    <svg width="2" height="20" viewBox="0 0 2 20"><line x1="1" y1="0" x2="1" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" /></svg>
                    <p style={{ fontFamily: B, fontSize: 12, color: COLORS.amber, margin: '0 0 4px', textAlign: 'center' }}>Still no debt mentioned</p>
                    <svg width="2" height="12" viewBox="0 0 2 12"><line x1="1" y1="0" x2="1" y2="12" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" /></svg>
                    <div style={{ background: '#fff', borderRadius: 10, padding: '12px 20px', textAlign: 'center', width: '100%' }}>
                      <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.ink, margin: 0 }}>NEB Digest</p>
                      <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: '2px 0 0' }}>Jul 2025 &middot; briefing</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Converge */}
              <svg width="2" height="24" viewBox="0 0 2 24"><line x1="1" y1="0" x2="1" y2="24" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" /></svg>

              {/* Final node */}
              <ScrollReveal anim="scaleReveal" delay={0.3}>
                <div style={{ background: COLORS.claimRedLight, borderRadius: 10, padding: '14px 28px', textAlign: 'center' }}>
                  <p style={{ fontFamily: H, fontSize: 16, fontWeight: 700, color: COLORS.claimRed, margin: 0 }}>
                    &ldquo;Established fact&rdquo; &#10007;
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* What each version omits */}
            <ScrollReveal anim="fadeUp" delay={0.4}>
              <div style={{ background: 'rgba(196,138,10,0.1)', border: '1px solid rgba(196,138,10,0.15)', borderRadius: 10, padding: '16px 20px', marginTop: 28 }}>
                <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 6px' }}>What each version omits</p>
                <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: '0 0 4px' }}>&pound;7bn+ debt absorbed by Network Rail</p>
                <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 }}>Courts rejected a misfeasance claim</p>
              </div>
            </ScrollReveal>

            {/* Why this matters */}
            <ScrollReveal anim="fadeUp" delay={0.5}>
              <div style={{ background: 'rgba(181,48,42,0.1)', border: '1px solid rgba(181,48,42,0.15)', borderRadius: 10, padding: '16px 20px', marginTop: 16 }}>
                <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.claimRed, margin: '0 0 6px' }}>Why this matters</p>
                <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  This claim is now being quoted by political parties to justify water nationalisation at minimal cost. Zack Polanski (Green Party) used the same equity-only argument on BBC Politics North in November 2025. The wrong number isn&apos;t historical. It&apos;s actively informing live policy debate.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.6}>
              <div style={{ marginTop: 20, textAlign: 'center' }}>
                <Link href="/careless-whispers" className="nav-link" style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.chainBlue, textDecoration: 'none' }}>
                  See the full 6-step trail &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 6: MORE INVESTIGATIONS ─── */}
        <section
          className="snap-section"
          data-nav-theme="light"
          style={{
            minHeight: '100vh',
            background: COLORS.paper,
            display: 'flex',
            alignItems: 'center',
            padding: '60px 8vw',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
            <ScrollReveal anim="fadeUp">
              <h2
                style={{
                  fontFamily: H,
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: COLORS.navy,
                  marginBottom: 32,
                }}
              >
                More investigations
              </h2>
            </ScrollReveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 16,
              }}
            >
              {[
                {
                  multiplier: '\u221212%',
                  label: 'actual trend',
                  claim: 'The number of billionaires has increased since 2022',
                  oneLiner: 'Their source shows 177 \u2192 156. That\u2019s a decrease.',
                  slug: 'billionaire-numbers',
                  correction: true,
                },
                {
                  multiplier: 'False',
                  label: 'US starts at 0%',
                  claim: 'UK Capital Gains Tax rates are currently the lowest in the G7',
                  oneLiner: 'US long-term rate starts at 0%. UK basic rate: 18%.',
                  slug: 'cgt-lowest-g7',
                  correction: true,
                },
                {
                  multiplier: '\u00a313.6k',
                  label: 'above max possible',
                  claim: 'I left university in 2019 with \u00a349,600 of debt',
                  oneLiner: 'Max possible for 2 years at Nottingham: ~\u00a336,000. Claimed: \u00a349,600.',
                  slug: 'student-debt-claim',
                  correction: false,
                },
                {
                  multiplier: '=',
                  label: 'same saving',
                  claim: 'Reform\u2019s tax cuts help the richest people more than the poorest',
                  oneLiner: '\u00a330K earner saves \u00a31,486. \u00a360K earner saves \u00a31,486. The same.',
                  slug: 'reform-tax-canary',
                  correction: false,
                },
                {
                  multiplier: '\u00a329k',
                  label: 'less than borrowed',
                  claim: 'I\u2019ll pay back more than I originally took out',
                  oneLiner: 'Borrowed ~\u00a379k. Will repay ~\u00a350k. That\u2019s \u00a329k less.',
                  slug: 'student-debt-97k',
                  correction: 'partial',
                },
              ].map((inv, i) => (
                <ScrollReveal key={inv.slug} anim="fadeUp" delay={i * 0.12}>
                  <Link
                    href={`/investigations/${inv.slug}`}
                    className="hover-card"
                    style={{
                      textDecoration: 'none',
                      display: 'block',
                      background: '#fff',
                      border: '1px solid rgba(27,42,74,0.10)',
                      borderRadius: 14,
                      padding: 24,
                      boxShadow: '0 2px 8px rgba(27,42,74,0.04)',
                      height: '100%',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: H,
                        fontSize: 48,
                        fontWeight: 700,
                        color: COLORS.claimRed,
                        margin: '0 0 4px',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                      }}
                    >
                      {inv.multiplier}
                    </p>
                    <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: COLORS.lightMuted, margin: '0 0 14px' }}>
                      {inv.label}
                    </p>
                    <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.4, color: COLORS.ink, margin: '0 0 10px' }}>
                      &ldquo;{inv.claim}&rdquo;
                    </p>
                    <p style={{ fontFamily: B, fontSize: 13, lineHeight: 1.5, fontWeight: 600, margin: '0 0 12px' }}>
                      <span className="highlight-green">{inv.oneLiner}</span>
                    </p>
                    {inv.correction === true && (
                      <span style={{ display: 'inline-block', fontFamily: B, fontSize: 12, fontWeight: 700, color: '#fff', background: COLORS.sourceGreen, padding: '5px 12px', borderRadius: 20, margin: '0 0 12px' }}>
                        &#10003; Corrected Dec 2025
                      </span>
                    )}
                    {inv.correction === 'partial' && (
                      <span style={{ display: 'inline-block', fontFamily: B, fontSize: 12, fontWeight: 700, color: '#fff', background: COLORS.amber, padding: '5px 12px', borderRadius: 20, margin: '0 0 12px' }}>
                        &#9888; Partial correction
                      </span>
                    )}
                    <span
                      style={{
                        display: 'inline-block',
                        fontFamily: B,
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#fff',
                        background: COLORS.navy,
                        padding: '8px 18px',
                        borderRadius: 8,
                      }}
                    >
                      Read more &rarr;
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal anim="fadeUp" delay={0.5}>
              <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '24px 0 20px', textAlign: 'center' }}>
                We welcome parties who recognise errors and correct them, as the Green Party have done above. Other parties have declined to comment. We will continue to chase for answers.
              </p>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.55}>
              <Link
                href="/careless-whispers"
                className="nav-link"
                style={{
                  fontFamily: B,
                  fontSize: 14,
                  fontWeight: 600,
                  color: COLORS.chainBlue,
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                See our careless whispers: how claims degrade through citation chains &rarr;
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 7: THE MISSION ─── */}
        <section
          className="snap-section"
          data-nav-theme="light"
          style={{
            minHeight: '100vh',
            background: COLORS.paper,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 8vw',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <ScrollReveal anim="scaleReveal">
              <p
                style={{
                  fontFamily: H,
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 700,
                  color: COLORS.navy,
                  lineHeight: 1.25,
                  margin: '0 0 8px',
                  letterSpacing: '-0.02em',
                }}
              >
                <span className="highlight">Getting it wrong isn&apos;t the crime.</span>
              </p>
              <p
                style={{
                  fontFamily: H,
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 700,
                  color: COLORS.navy,
                  lineHeight: 1.25,
                  margin: '0 0 32px',
                  letterSpacing: '-0.02em',
                }}
              >
                <span className="highlight">Refusing to fix it is.</span>
              </p>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.2}>
              <p
                style={{
                  fontFamily: B,
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: COLORS.muted,
                  margin: '0 0 32px',
                  maxWidth: 520,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                We&apos;re not attacking any policy. That&apos;s what politicians want. It creates noise.
                We&apos;re inviting them to clarify the numbers they use. Without the politics.
              </p>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.3}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
                {['Labour', 'Conservative', 'Green', 'Reform', 'Lib Dem'].map((party) => (
                  <span
                    key={party}
                    style={{
                      fontFamily: B,
                      fontSize: 12,
                      fontWeight: 500,
                      color: COLORS.navy,
                      background: 'rgba(27,42,74,0.06)',
                      borderRadius: 20,
                      padding: '6px 16px',
                    }}
                  >
                    {party}
                  </span>
                ))}
              </div>
              <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.muted, margin: 0 }}>
                Same standard. Every party. No exceptions.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 8: SUBSCRIBE ─── */}
        <section
          className="snap-section"
          id="subscribe"
          data-nav-theme="dark"
          aria-label="Subscribe"
          style={{
            minHeight: '100vh',
            background: COLORS.navy,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 8vw',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <ScrollReveal anim="fadeUp">
              <img src="/logo-dark.png" alt="The Paper Trail" style={{ height: 56, marginBottom: 24 }} />
              <p style={{ fontFamily: B, fontSize: 20, color: 'rgba(255,255,255,0.85)', margin: '0 0 8px', lineHeight: 1.5 }}>
                We publish <span className="highlight">when it matters</span>. Not before.
              </p>
              <p style={{ fontFamily: B, fontSize: 15, color: 'rgba(255,255,255,0.45)', margin: '0 0 8px', lineHeight: 1.6 }}>
                No clickbait. No material pumping. Just the numbers, when they need checking.
              </p>
              <p style={{ fontFamily: B, fontSize: 15, color: 'rgba(255,255,255,0.45)', margin: '0 0 32px', lineHeight: 1.6 }}>
                We give you the questions to ask your politicians.
              </p>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.15}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.currentTarget.querySelector('input') as HTMLInputElement;
                  if (input?.value) {
                    window.open(`https://thepapertrailuk.substack.com/subscribe?email=${encodeURIComponent(input.value)}`, '_blank');
                  }
                }}
                style={{ display: 'flex', gap: 10, maxWidth: 420, margin: '0 auto 16px' }}
              >
                <label htmlFor="sub-email" style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}>Email address</label>
                <input
                  id="sub-email"
                  type="email"
                  placeholder="Your email"
                  aria-label="Email address"
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    fontFamily: B,
                    fontSize: 14,
                    outline: 'none',
                    minHeight: 44,
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '12px 24px',
                    borderRadius: 8,
                    border: 'none',
                    background: '#fff',
                    color: COLORS.navy,
                    fontFamily: B,
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    minHeight: 44,
                  }}
                >
                  Subscribe
                </button>
              </form>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6719', display: 'inline-block' }} />
                <span style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)' }}>
                  Also on Substack
                </span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SUBMISSION FORM ─── */}
        <section
          className="snap-section"
          data-nav-theme="light"
          style={{
            minHeight: '100vh',
            background: COLORS.paper,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 8vw',
          }}
        >
          <SubmissionForm />
        </section>

        {/* ─── FOOTER ─── */}
        <footer
          style={{
            background: COLORS.paper,
            borderTop: '1px solid rgba(27,42,74,0.06)',
            padding: '48px 8vw',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <img src="/logo-nav.png" alt="The Paper Trail" style={{ height: 44, marginBottom: 16 }} />
            <p style={{ fontFamily: B, fontSize: 13, color: COLORS.lightMuted, margin: '0 0 16px' }}>
              Non-partisan. Source-led. Open.
            </p>

            {/* Support section */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(27,42,74,0.06)',
                borderRadius: 12,
                padding: '24px 28px',
                maxWidth: 520,
                margin: '0 auto 24px',
              }}
            >
              <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 12px' }}>
                The Paper Trail is independent and non-partisan. We don&apos;t take money from political parties.
                If you want to help us keep checking the numbers, you can support us.
              </p>
              <a
                href="/support"
                style={{
                  fontFamily: B,
                  fontSize: 13,
                  fontWeight: 600,
                  color: COLORS.navy,
                  textDecoration: 'none',
                  border: `1.5px solid ${COLORS.navy}`,
                  borderRadius: 8,
                  padding: '8px 20px',
                  display: 'inline-block',
                }}
              >
                Support us &rarr;
              </a>
            </div>

            <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: '0 0 16px' }}>
              thepapertrail.uk &middot; &copy; {new Date().getFullYear()}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
              <Link href="/how-it-works" style={{ fontFamily: B, fontSize: 12, color: COLORS.muted, textDecoration: 'none' }}>What we do</Link>
              <Link href="/about" style={{ fontFamily: B, fontSize: 12, color: COLORS.muted, textDecoration: 'none' }}>What we are fighting for</Link>
              <a href="/support" style={{ fontFamily: B, fontSize: 12, color: COLORS.muted, textDecoration: 'none' }}>Support us</a>
            </div>
          </div>
        </footer>
      </main>
      <FloatingNarrative />
      <ReturnToTop />
    </>
  );
}

function ReturnToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Return to top"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'rgba(27,42,74,0.9)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(27,42,74,0.2)',
        zIndex: 80,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 10l4-4 4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
