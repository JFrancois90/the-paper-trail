'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import ScrollReveal from '@/components/ScrollReveal';
import IntroSequence from '@/components/IntroSequence';
import MobileHomepage from '@/components/mobile/MobileHomepage';
import BrandSlogan from '@/components/BrandSlogan';
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
      <main id="main-content">
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
            alignItems: 'center',
            padding: '0 8vw',
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                margin: '0 0 32px',
                textAlign: 'center',
                animation: 'fadeUp 0.8s ease forwards',
                opacity: 0,
              }}
            >
              <BrandSlogan size="lg" theme="dark" />
            </div>
            <h1
              style={{
                fontFamily: H,
                fontSize: 'clamp(28px, 4.5vw, 52px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.2,
                letterSpacing: '-0.03em',
                textAlign: 'center',
                margin: '0 0 24px',
                animation: 'fadeUp 0.8s ease 0.15s forwards',
                opacity: 0,
              }}
            >
              These aren&apos;t opinions. They&apos;re numbers. And they&apos;re wrong.
            </h1>

            <p
              style={{
                fontFamily: B,
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textAlign: 'center',
                width: '100%',
                color: COLORS.amber,
                margin: '0 0 40px',
                animation: 'fadeUp 0.8s ease 0.3s forwards',
                opacity: 0,
              }}
            >
              Integrity before ideology.
            </p>

            <div style={{ animation: 'fadeUp 0.8s ease 0.6s forwards', opacity: 0, textAlign: 'center', width: '100%' }}>
              <Link
                href="/campaigns"
                style={{
                  display: 'inline-block',
                  fontFamily: B,
                  fontSize: 16,
                  fontWeight: 700,
                  color: COLORS.navy,
                  background: '#fff',
                  padding: '16px 36px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'transform 0.15s ease',
                }}
              >
                See our campaigns &rarr;
              </Link>
            </div>
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

        {/* ─── SECTION 3: WHAT WE DO ─── */}
        <section
          id="what-we-do"
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
                loading="lazy"
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

            {/* Equation cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 40 }}>
              <ScrollReveal anim="scaleReveal" delay={0.5}>
                <div className="hover-card" style={{ textAlign: 'center', background: '#fff', border: '1px solid rgba(27,42,74,0.10)', borderRadius: 14, padding: '28px 20px', boxShadow: '0 2px 8px rgba(27,42,74,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontFamily: B, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.muted, margin: '0 0 6px' }}>What we were <span style={{ color: COLORS.navy, fontWeight: 700 }}>taught</span></p>
                  <span style={{ fontFamily: H, fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, color: COLORS.navy, letterSpacing: '-0.03em' }}>1 + 1 = 2 <span style={{ color: COLORS.sourceGreen }}>&#10003;</span></span>
                  <p style={{ fontFamily: B, fontSize: 13, color: COLORS.navy, margin: '4px 0 0' }}>The basics. Everyone agrees.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal anim="scaleReveal" delay={0.6}>
                <div className="hover-card" style={{ textAlign: 'center', background: '#fff', border: '1px solid rgba(27,42,74,0.10)', borderRadius: 14, padding: '28px 20px', boxShadow: '0 2px 8px rgba(27,42,74,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontFamily: B, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.muted, margin: '0 0 6px' }}>What we were taught to look out for</p>
                  <span style={{ fontFamily: H, fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, color: COLORS.navy, letterSpacing: '-0.03em' }}>1 + 1 = <span style={{ color: COLORS.claimRed }}>3</span> <span style={{ color: COLORS.claimRed }}>&#10007;</span></span>
                  <p style={{ fontFamily: B, fontSize: 13, color: COLORS.navy, margin: '4px 0 0' }}>The old problem. Twisting the answer.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal anim="scaleReveal" delay={0.7}>
                <div className="hover-card" style={{ textAlign: 'center', background: '#fff', border: '1px solid rgba(27,42,74,0.10)', borderRadius: 14, padding: '28px 20px', boxShadow: '0 2px 8px rgba(27,42,74,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontFamily: B, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.claimRed, margin: '0 0 6px' }}>The new problem</p>
                  <span style={{ fontFamily: H, fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, color: COLORS.navy, letterSpacing: '-0.03em' }}><span style={{ color: COLORS.claimRed, textDecoration: 'underline', textDecorationColor: 'rgba(181,48,42,0.3)', textUnderlineOffset: '3px' }}>2</span> + 1 = 2 <span style={{ color: COLORS.claimRed }}>&#10007;</span></span>
                  <p style={{ fontFamily: B, fontSize: 13, color: COLORS.navy, margin: '4px 0 0' }}>Twisting the input. The answer looks right, so nobody checks.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3B: WHAT WE ARE FIGHTING FOR (SUMMARY) ─── */}
        <section
          id="fighting-for"
          className="snap-section"
          data-nav-theme="light"
          style={{
            background: COLORS.paper,
            padding: '80px 8vw',
          }}
        >
          <div style={{ maxWidth: 800, margin: '0 auto', width: '100%' }}>
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
                What we are fighting for
              </h2>
              <p style={{ fontFamily: B, fontSize: 18, color: COLORS.navy, margin: '0 0 28px' }}>
                <span className="highlight" style={{ fontWeight: 700 }}>Integrity</span> before ideology.
              </p>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.1}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  <><span key="t">Politicians quote numbers to justify policy. We check if those numbers are </span><span key="h" className="highlight" style={{ fontWeight: 700 }}>right</span></>,
                  <>We don&apos;t care which party said it. Left, right, centre. If the maths is wrong, the maths is wrong</>,
                  <><span key="t">You can&apos;t build good policy on bad numbers. Get the </span><span key="h1" className="highlight" style={{ fontWeight: 700 }}>inputs</span><span key="m"> wrong and the </span><span key="h2" className="highlight" style={{ fontWeight: 700 }}>output</span><span key="e"> is worthless</span></>,
                  <>When we find errors, we ask for corrections. Some parties fix them. Others go quiet</>,
                  <><span key="t">This isn&apos;t about picking sides. It&apos;s about making sure the </span><span key="h" className="highlight" style={{ fontWeight: 700 }}>starting point</span><span key="e"> is honest</span></>,
                ].map((point, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: B,
                      fontSize: 17,
                      lineHeight: 1.5,
                      color: COLORS.ink,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                    }}
                  >
                    <span style={{ color: COLORS.amber, fontWeight: 700, fontSize: 20, lineHeight: 1.3, flexShrink: 0 }}>&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.15}>
              <p
                style={{
                  fontFamily: H,
                  fontSize: 20,
                  fontWeight: 700,
                  color: COLORS.navy,
                  margin: '32px 0 0',
                  lineHeight: 1.5,
                }}
              >
                You can&apos;t have ideology without <span className="highlight">integrity</span>. <span className="highlight">Integrity</span> before ideology.
              </p>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.2}>
              <div style={{ marginTop: 28 }}>
                <Link
                  href="/about"
                  style={{
                    display: 'inline-block',
                    fontFamily: B,
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#fff',
                    background: COLORS.navy,
                    padding: '14px 28px',
                    borderRadius: 8,
                    textDecoration: 'none',
                  }}
                >
                  Read more about what we stand for &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 4: FEATURED INVESTIGATIONS (Vertical Snap Scroll) ─── */}
        <FeaturedInvestigations />

        {/* ─── SECTION 5: CARELESS WHISPERS ─── */}
        <section
          id="careless-whispers"
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
              <h2 style={{ fontFamily: H, fontSize: 26, fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>
                Careless whispers
              </h2>
              <p style={{ fontFamily: B, fontSize: 17, color: 'rgba(255,255,255,0.7)', margin: '0 0 40px' }}>
                How &pound;500m became &lsquo;established fact&rsquo; in 7&nbsp;months
              </p>
            </ScrollReveal>

            {/* Tree layout */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              {/* Origin node */}
              <ScrollReveal anim="scaleReveal">
                <div style={{ background: COLORS.chainBlueLight, borderRadius: 12, padding: '16px 32px', textAlign: 'center' }}>
                  <p style={{ fontFamily: B, fontSize: 16, fontWeight: 600, color: COLORS.ink, margin: 0 }}>Clive Lewis, Labour MP</p>
                  <p style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, margin: '4px 0 0' }}>clivelewis.org &middot; Dec 2024 &middot; origin</p>
                </div>
              </ScrollReveal>

              {/* Connector down */}
              <svg width="2" height="32" viewBox="0 0 2 32"><line x1="1" y1="0" x2="1" y2="32" stroke="rgba(255,255,255,0.3)" strokeWidth="2" /></svg>

              {/* Two branches */}
              <ScrollReveal anim="fadeUp" delay={0.15}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, width: '100%', maxWidth: 700 }}>
                  {/* Left branch */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                    <div style={{ background: '#fff', borderRadius: 12, padding: '14px 22px', textAlign: 'center', width: '100%' }}>
                      <p style={{ fontFamily: B, fontSize: 15, fontWeight: 600, color: COLORS.ink, margin: 0 }}>We Own It + Univ.&nbsp;Greenwich</p>
                      <p style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, margin: '4px 0 0' }}>Apr 2025 &middot; Prof. David Hall</p>
                    </div>
                    <svg width="2" height="24" viewBox="0 0 2 24"><line x1="1" y1="0" x2="1" y2="24" stroke="rgba(255,255,255,0.3)" strokeWidth="2" /></svg>
                    <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: '#fac75a', margin: '0 0 6px', textAlign: 'center' }}>&pound;7.1bn debt omitted</p>
                    <svg width="2" height="16" viewBox="0 0 2 16"><line x1="1" y1="0" x2="1" y2="16" stroke="rgba(255,255,255,0.3)" strokeWidth="2" /></svg>
                    <div style={{ background: '#fff', borderRadius: 12, padding: '14px 22px', textAlign: 'center', width: '100%' }}>
                      <p style={{ fontFamily: B, fontSize: 15, fontWeight: 600, color: COLORS.ink, margin: 0 }}>Left Foot Forward</p>
                      <p style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, margin: '4px 0 0' }}>Apr 2025 &middot; article</p>
                    </div>
                  </div>

                  {/* Right branch */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                    <div style={{ background: '#fff', borderRadius: 12, padding: '14px 22px', textAlign: 'center', width: '100%' }}>
                      <p style={{ fontFamily: B, fontSize: 15, fontWeight: 600, color: COLORS.ink, margin: 0 }}>Common Wealth</p>
                      <p style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, margin: '4px 0 0' }}>Jun 2025 &middot; Ewan McGaughey</p>
                    </div>
                    <svg width="2" height="24" viewBox="0 0 2 24"><line x1="1" y1="0" x2="1" y2="24" stroke="rgba(255,255,255,0.3)" strokeWidth="2" /></svg>
                    <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: '#fac75a', margin: '0 0 6px', textAlign: 'center' }}>Still no debt mentioned</p>
                    <svg width="2" height="16" viewBox="0 0 2 16"><line x1="1" y1="0" x2="1" y2="16" stroke="rgba(255,255,255,0.3)" strokeWidth="2" /></svg>
                    <div style={{ background: '#fff', borderRadius: 12, padding: '14px 22px', textAlign: 'center', width: '100%' }}>
                      <p style={{ fontFamily: B, fontSize: 15, fontWeight: 600, color: COLORS.ink, margin: 0 }}>NEB Digest</p>
                      <p style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, margin: '4px 0 0' }}>Jul 2025 &middot; briefing</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Converge */}
              <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="28" stroke="rgba(255,255,255,0.3)" strokeWidth="2" /></svg>

              {/* Final node */}
              <ScrollReveal anim="scaleReveal" delay={0.3}>
                <div style={{ background: COLORS.claimRedLight, borderRadius: 12, padding: '16px 32px', textAlign: 'center' }}>
                  <p style={{ fontFamily: H, fontSize: 16, fontWeight: 700, color: COLORS.claimRed, margin: '0 0 4px' }}>
                    &ldquo;Established fact&rdquo;: Railtrack was nationalised for just &pound;500m &#10007;
                  </p>
                  <p style={{ fontFamily: B, fontSize: 14, color: COLORS.claimRedDark, margin: 0, opacity: 0.7 }}>
                    It wasn&apos;t.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* What each version omits */}
            <ScrollReveal anim="fadeUp" delay={0.4}>
              <div style={{ background: 'rgba(196,138,10,0.15)', border: '1px solid rgba(196,138,10,0.25)', borderRadius: 12, padding: '20px 24px', marginTop: 32 }}>
                <p style={{ fontFamily: B, fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fac75a', margin: '0 0 8px' }}>What each version omits</p>
                <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>&pound;7bn+ debt absorbed by Network Rail</p>
                <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: 0 }}>Courts rejected a misfeasance claim</p>
              </div>
            </ScrollReveal>

            {/* Why this matters */}
            <ScrollReveal anim="fadeUp" delay={0.5}>
              <div style={{ background: 'rgba(181,48,42,0.15)', border: '1px solid rgba(181,48,42,0.25)', borderRadius: 12, padding: '20px 24px', marginTop: 16 }}>
                <p style={{ fontFamily: B, fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e8645f', margin: '0 0 8px' }}>Why this matters</p>
                <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.95)', margin: 0 }}>
                  This claim is now being quoted by political parties to justify water nationalisation at minimal cost. Zack Polanski (Green Party) used the same equity-only argument on BBC Politics North in November 2025. The wrong number isn&apos;t historical. It&apos;s actively informing live policy debate.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.6}>
              <div style={{ marginTop: 28, textAlign: 'center' }}>
                <Link
                  href="/careless-whispers"
                  style={{
                    display: 'inline-block',
                    fontFamily: B,
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#fff',
                    background: COLORS.chainBlue,
                    padding: '14px 32px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease',
                  }}
                >
                  See our careless whispers: how claims degrade through citation chains &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 6: BANNER + SEE ALL ─── */}
        <section
          className="snap-section"
          data-nav-theme="light"
          style={{
            minHeight: '60vh',
            background: COLORS.paper,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 8vw',
          }}
        >
          <div style={{ maxWidth: 800, margin: '0 auto', width: '100%', textAlign: 'center' }}>
            <ScrollReveal anim="fadeUp">
              <div
                style={{
                  background: '#fff',
                  border: '2px solid rgba(27,42,74,0.10)',
                  borderRadius: 16,
                  padding: '48px 40px',
                  marginBottom: 32,
                  boxShadow: '0 4px 20px rgba(27,42,74,0.06)',
                }}
              >
                <p
                  style={{
                    fontFamily: H,
                    fontSize: 'clamp(20px, 2.5vw, 26px)',
                    fontWeight: 600,
                    color: COLORS.navy,
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  We welcome parties who recognise errors and correct them, as the Green Party have done above. Other parties have declined to comment. We will continue to chase for&nbsp;answers.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.15}>
              <Link
                href="/campaigns"
                style={{
                  display: 'inline-block',
                  fontFamily: B,
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#fff',
                  background: COLORS.navy,
                  padding: '18px 48px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
              >
                See all campaigns &rarr;
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 7: SUBSCRIBE ─── */}
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
              Integrity before ideology.
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

            {/* Social icons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
              <a href="https://www.instagram.com/papertrail.uk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: COLORS.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@papertrail.uk" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ color: COLORS.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href="https://x.com/PaperTrailFacts" target="_blank" rel="noopener noreferrer" aria-label="X" style={{ color: COLORS.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
              <Link href="/campaigns" style={{ fontFamily: B, fontSize: 12, color: COLORS.muted, textDecoration: 'none' }}>Campaigns</Link>
              <Link href="/about" style={{ fontFamily: B, fontSize: 12, color: COLORS.muted, textDecoration: 'none' }}>About</Link>
              <Link href="/gallery" style={{ fontFamily: B, fontSize: 12, color: COLORS.muted, textDecoration: 'none' }}>Gallery</Link>
              <Link href="/fighting-for-change" style={{ fontFamily: B, fontSize: 12, color: COLORS.muted, textDecoration: 'none' }}>Join</Link>
            </div>
          </div>
        </footer>
      </main>
      <FloatingNarrative />
      <ReturnToTop />
    </>
  );
}

function FeaturedInvestigations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const goTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    isScrollingRef.current = true;
    setActiveIdx(idx);
    el.scrollTo({ top: idx * el.clientHeight, behavior: 'smooth' });
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => { isScrollingRef.current = false; }, 600);
  };

  const handleScroll = useCallback(() => {
    if (isScrollingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollTop / el.clientHeight);
    if (idx >= 0 && idx < 3) setActiveIdx(idx);
  }, []);

  return (
    <section
      id="investigations"
      className="snap-section"
      data-nav-theme="light"
      style={{ height: '100vh', background: COLORS.paper, position: 'relative', display: 'flex', flexDirection: 'column' }}
    >
      {/* Section title - in normal flow */}
      <div style={{ padding: '80px 8vw 0', flexShrink: 0 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: H, fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', color: COLORS.navy, margin: '0 0 24px' }}>
            Featured Campaigns
          </h2>
        </div>
      </div>

      {/* Dot indicators on right side */}
      <div style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Investigation ${i + 1}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              border: 'none',
              background: i === activeIdx ? COLORS.navy : 'rgba(27,42,74,0.2)',
              cursor: 'pointer',
              padding: 0,
              transition: 'background 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Vertical scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          flex: 1,
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
          scrollPaddingTop: 'calc(var(--header-height) + 16px)',
          scrollbarWidth: 'none',
        }}
      >
        <style>{`
          .fi-scroll::-webkit-scrollbar { display: none; }
          .fi-scroll { scroll-margin-top: calc(var(--header-height) + 16px); }
        `}</style>

        {/* Investigation 1: Railtrack */}
        <div className="fi-scroll" style={{ height: '100%', scrollSnapAlign: 'start', display: 'flex', alignItems: 'center', padding: '60px 8vw', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
            <div style={{ background: '#fae9b0', borderRadius: 8, padding: '12px 18px', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E2;</span>
              <p style={{ fontFamily: B, fontSize: 14, color: COLORS.navy, margin: 0 }}>We support public accountability for nationalisation costs. We disagree with incorrect figures, regardless of political alignment.</p>
            </div>
            <p style={{ fontFamily: H, fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400, color: COLORS.ink, lineHeight: 1.4, margin: '0 0 6px' }}>
              &ldquo;Labour nationalised Railtrack, paying just <span className="highlight-red">&pound;500 million</span>&rdquo;
            </p>
            <p style={{ fontFamily: B, fontSize: 18, color: COLORS.navy, margin: '0 0 32px', borderBottom: '2px solid #b5302a', paddingBottom: 6, display: 'inline-block' }}><strong>Clive Lewis, Labour MP</strong> <span style={{ fontWeight: 400, color: '#5a5d66' }}>&middot; Dec 2024</span></p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'center', marginBottom: 32 }}>
              <div style={{ background: COLORS.claimRedLight, borderRadius: 14, padding: '32px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: H, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: COLORS.claimRed, margin: '0 0 8px', letterSpacing: '-0.03em', lineHeight: 1 }}>&pound;500m</p>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.claimRedDark, margin: 0 }}>What they said it cost</p>
              </div>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: COLORS.navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: H, fontSize: 18, fontWeight: 700, color: '#fff' }}>15&times;</span>
              </div>
              <div style={{ background: COLORS.sourceGreenLight, borderRadius: 14, padding: '32px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: H, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, color: COLORS.sourceGreen, margin: '0 0 8px', letterSpacing: '-0.03em', lineHeight: 1 }}>&pound;7.6bn</p>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.sourceGreenDark, margin: 0 }}>What it actually cost</p>
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.06)', borderRadius: 14, padding: '20px 24px', marginBottom: 16 }}>
              <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 8px' }}>Why this matters</p>
              <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.ink, margin: 0 }}>
                We need to know what it will cost to nationalise. Plain and simple. Maths errors of this size aren&apos;t acceptable when billions of pounds of public money are at stake.
              </p>
            </div>
            <Link href="/investigations/railtrack-500m" style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.chainBlue, textDecoration: 'none' }}>See the full trail &rarr;</Link>
          </div>
        </div>

        {/* Investigation 2: Reform Prolific Offenders */}
        <div className="fi-scroll" style={{ height: '100%', scrollSnapAlign: 'start', display: 'flex', alignItems: 'center', padding: '60px 8vw', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
            <div style={{ background: '#fae9b0', borderRadius: 8, padding: '12px 18px', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E2;</span>
              <p style={{ fontFamily: B, fontSize: 14, color: COLORS.navy, margin: 0 }}>We take no position on criminal justice policy. We take a position on the quality of evidence used to drive it.</p>
            </div>
            <p style={{ fontFamily: H, fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400, color: COLORS.ink, lineHeight: 1.4, margin: '0 0 6px' }}>
              Britain <span className="emphasis-red">IS</span> lawless: &ldquo;<span className="highlight-red">10% of criminals</span> commit 50% of all the crime&rdquo;
            </p>
            <p style={{ fontFamily: B, fontSize: 18, color: COLORS.navy, margin: '0 0 32px', borderBottom: '2px solid #b5302a', paddingBottom: 6, display: 'inline-block' }}><strong>Reform UK</strong> <span style={{ fontWeight: 400, color: '#5a5d66' }}>&middot; Jul 2025</span></p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'center', marginBottom: 32 }}>
              <div style={{ background: COLORS.claimRedLight, borderRadius: 14, padding: '32px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: H, fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: COLORS.claimRed, margin: '0 0 8px', letterSpacing: '-0.03em', lineHeight: 1 }}>50%</p>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.claimRedDark, margin: 0 }}>What they said</p>
              </div>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: COLORS.navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: H, fontSize: 14, fontWeight: 700, color: '#fff' }}>&#x23F3;</span>
              </div>
              <div style={{ background: COLORS.sourceGreenLight, borderRadius: 14, padding: '32px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: H, fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: COLORS.sourceGreen, margin: '0 0 8px', letterSpacing: '-0.03em', lineHeight: 1 }}>43%</p>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.sourceGreenDark, margin: 0 }}>By 2016 (and falling)</p>
              </div>
            </div>

            <div style={{ background: '#fff', border: '2px solid rgba(196,138,10,0.18)', borderRadius: 14, padding: '24px 28px', marginBottom: 16 }}>
              <p style={{ fontFamily: B, fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 10px' }}>Why this matters</p>
              <p style={{ fontFamily: B, fontSize: 18, lineHeight: 1.6, color: COLORS.ink, margin: 0 }}>
                Their source covers 2000 to 2016. The MoJ publishes quarterly data up to 2024. It was chosen not to be used.
              </p>
            </div>
            <Link href="/investigations/reform-prolific-offenders" style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.chainBlue, textDecoration: 'none' }}>See the full trail &rarr;</Link>
          </div>
        </div>

        {/* Investigation 3: Canary/Reform Tax */}
        <div className="fi-scroll" style={{ height: '100%', scrollSnapAlign: 'start', display: 'flex', alignItems: 'center', padding: '60px 8vw', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
            <div style={{ background: '#fae9b0', borderRadius: 8, padding: '12px 18px', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E2;</span>
              <p style={{ fontFamily: B, fontSize: 14, color: COLORS.navy, margin: 0 }}>We support taxes on those who can afford it. We disagree with incorrect figures, regardless of political alignment.</p>
            </div>
            <p style={{ fontFamily: H, fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 400, color: COLORS.ink, lineHeight: 1.4, margin: '0 0 6px' }}>
              &ldquo;Reform&apos;s tax cuts help the <span className="highlight-red">richest people</span> more than the poorest&rdquo;
            </p>
            <p style={{ fontFamily: B, fontSize: 18, color: COLORS.navy, margin: '0 0 32px', borderBottom: '2px solid #b5302a', paddingBottom: 6, display: 'inline-block' }}><strong>The Canary UK</strong> <span style={{ fontWeight: 400, color: '#5a5d66' }}>&middot; Feb 2026</span></p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'center', marginBottom: 32 }}>
              <div style={{ background: COLORS.claimRedLight, borderRadius: 14, padding: '32px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: H, fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: COLORS.claimRed, margin: '0 0 8px', lineHeight: 1.2 }}>&pound;1,500 vs &pound;3,000</p>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.claimRedDark, margin: 0 }}>What they claimed</p>
              </div>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: COLORS.amber, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: H, fontSize: 36, fontWeight: 700, color: '#fff' }}>=</span>
              </div>
              <div style={{ background: COLORS.sourceGreenLight, borderRadius: 14, padding: '32px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: H, fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: COLORS.sourceGreen, margin: '0 0 8px', lineHeight: 1.2 }}>&pound;1,486 = &pound;1,486</p>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.sourceGreenDark, margin: 0 }}>Both earners save the same</p>
              </div>
            </div>

            <div style={{ background: '#fff', border: '2px solid rgba(196,138,10,0.18)', borderRadius: 14, padding: '24px 28px', marginBottom: 16 }}>
              <p style={{ fontFamily: B, fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 10px' }}>Why this matters</p>
              <p style={{ fontFamily: B, fontSize: 18, lineHeight: 1.6, color: COLORS.ink, margin: 0 }}>
                Getting tax band maths wrong misleads people about who benefits from a policy. Both earners save exactly the same amount.
              </p>
            </div>
            <Link href="/investigations/reform-tax-canary" style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.chainBlue, textDecoration: 'none' }}>See the full trail &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
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
