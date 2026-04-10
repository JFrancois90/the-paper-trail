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
                  color: COLORS.muted,
                  lineHeight: 1.6,
                  margin: '0 0 20px',
                  maxWidth: 560,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                These aren&apos;t opinions. They&apos;re numbers. And they&apos;re wrong.
              </p>
            </ScrollReveal>

            <ScrollReveal anim="fadeUp" delay={0.65}>
              <p
                style={{
                  fontFamily: B,
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: COLORS.muted,
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: 560,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                Remember, we learnt 1+1=2.{' '}
                <span className="highlight">When did that equation change?</span>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 3: WHAT WE DO ─── */}
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
          <div style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
            <ScrollReveal anim="fadeUp">
              <p
                style={{
                  fontFamily: B,
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: COLORS.lightMuted,
                  marginBottom: 32,
                }}
              >
                What we do
              </p>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  num: '01',
                  title: 'They cite a source',
                  desc: 'A politician references a report to back up their claim.',
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
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(27,42,74,0.06)',
                      borderRadius: 14,
                      padding: 28,
                      display: 'flex',
                      gap: 24,
                      alignItems: 'center',
                      transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s cubic-bezier(0.22,1,0.36,1)',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 8px 28px rgba(27,42,74,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ flexShrink: 0 }}>{step.icon}</div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
                        <span
                          style={{
                            fontFamily: H,
                            fontSize: 32,
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
                            fontSize: 20,
                            fontWeight: 700,
                            color: COLORS.navy,
                            margin: 0,
                          }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p
                        style={{
                          fontFamily: B,
                          fontSize: 15,
                          lineHeight: 1.55,
                          color: COLORS.muted,
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
          data-nav-theme="light"
          style={{
            minHeight: '100vh',
            background: COLORS.paper,
            display: 'flex',
            alignItems: 'center',
            padding: '80px 8vw',
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
            <ScrollReveal anim="fadeUp">
              <p
                style={{
                  fontFamily: B,
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: COLORS.lightMuted,
                  marginBottom: 16,
                }}
              >
                Featured investigation
              </p>
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
                <p style={{ fontFamily: B, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 8px' }}>
                  In plain english
                </p>
                <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.ink, margin: 0 }}>
                  Think of it like buying a house for &pound;100k when it has a &pound;400k mortgage. The &pound;100k is the equity the seller had, but you&apos;ve just taken on all the debt too. The real price is &pound;500k (otherwise Rightmove has some explaining to do!)
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
          </div>

          <style>{`
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.06); }
            }
          `}</style>
        </section>

        {/* ─── SECTION 5: CARELESS WHISPERS ─── */}
        <section
          data-nav-theme="dark"
          style={{
            minHeight: '100vh',
            background: COLORS.navy,
            display: 'flex',
            alignItems: 'center',
            padding: '80px 8vw',
          }}
        >
          <div style={{ maxWidth: 600, margin: '0 auto', width: '100%' }}>
            <ScrollReveal anim="fadeUp">
              <p
                style={{
                  fontFamily: B,
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: COLORS.chainBlue,
                  marginBottom: 4,
                }}
              >
                Careless whispers
              </p>
              <p
                style={{
                  fontFamily: B,
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.4)',
                  margin: '0 0 40px',
                }}
              >
                How &pound;500m became &lsquo;established fact&rsquo; in 7 months
              </p>
            </ScrollReveal>

            {/* Vertical chain */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              {[
                { name: 'Clive Lewis MP', date: 'Dec 2024', type: 'origin', note: null },
                { name: 'We Own It + Greenwich', date: 'Apr 2025', type: 'mid', note: '\u00a37.1bn debt omitted' },
                { name: 'Common Wealth', date: 'Jun 2025', type: 'mid', note: 'Still no debt mentioned' },
                { name: 'Left Foot Forward', date: 'Apr 2025', type: 'mid', note: 'Courts ruling mischaracterised' },
                { name: 'NEB Digest', date: 'Jul 2025', type: 'final', note: 'Now cited as established research' },
              ].map((node, i) => (
                <ScrollReveal key={i} anim="fadeUp" delay={i * 0.12}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Arrow + note from previous */}
                    {node.note && (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '4px 0' }}>
                        <svg width="2" height="24" viewBox="0 0 2 24">
                          <line x1="1" y1="0" x2="1" y2="24" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                        </svg>
                        <p style={{ fontFamily: B, fontSize: 11, color: COLORS.amber, margin: '4px 0', textAlign: 'center' }}>
                          {node.note}
                        </p>
                        <svg width="2" height="12" viewBox="0 0 2 12">
                          <line x1="1" y1="0" x2="1" y2="12" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                        </svg>
                      </div>
                    )}

                    {/* Node */}
                    <div
                      style={{
                        background: node.type === 'origin' ? COLORS.chainBlueLight
                          : node.type === 'final' ? COLORS.claimRedLight
                          : '#fff',
                        borderRadius: 10,
                        padding: '12px 24px',
                        minWidth: 200,
                        textAlign: 'center',
                      }}
                    >
                      <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: node.type === 'final' ? COLORS.claimRed : COLORS.ink, margin: 0, lineHeight: 1.3 }}>
                        {node.name}
                      </p>
                      <p style={{ fontFamily: B, fontSize: 11, color: COLORS.lightMuted, margin: '2px 0 0' }}>
                        {node.date}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Final marker */}
              <ScrollReveal anim="fadeUp" delay={0.65}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
                  <svg width="2" height="20" viewBox="0 0 2 20">
                    <line x1="1" y1="0" x2="1" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  </svg>
                  <p style={{ fontFamily: H, fontSize: 16, fontWeight: 700, color: COLORS.claimRed, margin: '8px 0 0' }}>
                    &ldquo;Established fact&rdquo; &#10007;
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Amber note */}
            <ScrollReveal anim="fadeUp" delay={0.8}>
              <div
                style={{
                  background: 'rgba(196,138,10,0.1)',
                  border: '1px solid rgba(196,138,10,0.15)',
                  borderRadius: 10,
                  padding: '16px 20px',
                  marginTop: 32,
                }}
              >
                <p style={{ fontFamily: B, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 6px' }}>
                  What disappeared
                </p>
                <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  The &pound;7.1bn debt and the mischaracterisation of the court ruling both disappeared. By the time it reached NEB Digest, the &pound;500m figure read as established fact.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SECTION 6: MORE INVESTIGATIONS ─── */}
        <section
          data-nav-theme="light"
          style={{
            background: COLORS.paper,
            padding: '80px 8vw',
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <ScrollReveal anim="fadeUp">
              <p
                style={{
                  fontFamily: B,
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: COLORS.lightMuted,
                  marginBottom: 32,
                }}
              >
                More investigations
              </p>
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
                  multiplier: '48\u00d7',
                  label: 'figure inflated',
                  claim: '\u00a3350 billion is lost to tax evasion each year',
                  oneLiner: 'HMRC official figure: \u00a35.5bn. Not \u00a3350bn.',
                  slug: '350bn-tax-evasion',
                  correction: false,
                },
              ].map((inv, i) => (
                <ScrollReveal key={inv.slug} anim="fadeUp" delay={i * 0.12}>
                  <Link
                    href={`/investigations/${inv.slug}`}
                    style={{
                      textDecoration: 'none',
                      display: 'block',
                      background: '#fff',
                      border: '1px solid rgba(27,42,74,0.06)',
                      borderRadius: 14,
                      padding: 24,
                      transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s cubic-bezier(0.22,1,0.36,1)',
                      height: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 8px 28px rgba(27,42,74,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <p
                      style={{
                        fontFamily: H,
                        fontSize: 28,
                        fontWeight: 700,
                        color: inv.multiplier === 'False' ? COLORS.claimRed : COLORS.navy,
                        margin: '0 0 4px',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {inv.multiplier}
                    </p>
                    <p style={{ fontFamily: B, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: COLORS.lightMuted, margin: '0 0 14px' }}>
                      {inv.label}
                    </p>
                    <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.4, color: COLORS.ink, margin: '0 0 10px' }}>
                      &ldquo;{inv.claim}&rdquo;
                    </p>
                    <p style={{ fontFamily: B, fontSize: 13, lineHeight: 1.5, color: COLORS.sourceGreen, fontWeight: 600, margin: '0 0 12px' }}>
                      {inv.oneLiner}
                    </p>
                    {inv.correction && (
                      <p style={{ fontFamily: B, fontSize: 11, color: COLORS.sourceGreen, margin: '0 0 8px' }}>
                        &#10003; Corrected Dec 2025
                      </p>
                    )}
                    <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.chainBlue, margin: 0 }}>
                      Read more &rarr;
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: THE MISSION ─── */}
        <section
          data-nav-theme="light"
          style={{
            background: COLORS.paper,
            padding: '100px 8vw',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
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
          id="subscribe"
          data-nav-theme="dark"
          aria-label="Subscribe"
          style={{
            background: COLORS.navy,
            padding: '80px 8vw',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <ScrollReveal anim="fadeUp">
              <img src="/logo-dark.png" alt="The Paper Trail" style={{ height: 36, marginBottom: 24, opacity: 0.7 }} />
              <p style={{ fontFamily: B, fontSize: 18, color: 'rgba(255,255,255,0.85)', margin: '0 0 8px', lineHeight: 1.5 }}>
                Politicians cite sources. We read them.
              </p>
              <p style={{ fontFamily: B, fontSize: 16, color: 'rgba(255,255,255,0.5)', margin: '0 0 32px', lineHeight: 1.5 }}>
                <span className="highlight">You&apos;d be surprised how often they don&apos;t match.</span>
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
                <span style={{ fontFamily: B, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>
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
            padding: '40px 8vw',
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <img src="/logo-nav.png" alt="The Paper Trail" style={{ height: 32, marginBottom: 12 }} />
            <p style={{ fontFamily: B, fontSize: 13, color: COLORS.lightMuted, margin: '0 0 8px' }}>
              Non-partisan. Source-led. Open.
            </p>
            <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: '0 0 16px' }}>
              thepapertrail.uk &middot; &copy; {new Date().getFullYear()}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
              <Link href="/how-it-works" style={{ fontFamily: B, fontSize: 12, color: COLORS.muted, textDecoration: 'none' }}>What we do</Link>
              <Link href="/about" style={{ fontFamily: B, fontSize: 12, color: COLORS.muted, textDecoration: 'none' }}>What we are fighting for</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
