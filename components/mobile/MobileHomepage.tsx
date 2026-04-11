'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';
import { investigations } from '@/data/investigations';
import MobileNav from '@/components/MobileNav';
import BrandSlogan from '@/components/BrandSlogan';
import InvestigationStory from './InvestigationStory';
import type { Investigation } from '@/data/investigations';

const H = 'var(--font-heading), sans-serif';
const B = 'var(--font-sans), sans-serif';

/* ───── Full-width swipe carousel with dot indicators ───── */
function FullWidthCarousel({
  children,
  dotColor = COLORS.navy,
}: {
  children: React.ReactNode[];
  dotColor?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = children.length;

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(Math.min(Math.max(idx, 0), count - 1));
  }, [count]);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style>{`.fwc::-webkit-scrollbar { display: none; }`}</style>
        {children.map((child, i) => (
          <div
            key={i}
            className="fwc"
            style={{
              flex: '0 0 100%',
              scrollSnapAlign: 'center',
              padding: '0 20px',
              boxSizing: 'border-box',
            }}
          >
            {child}
          </div>
        ))}
      </div>
      {/* Dot indicators - tappable */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 14 }}>
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to card ${i + 1}`}
            style={{
              width: activeIndex === i ? 20 : 8,
              height: 8,
              borderRadius: 4,
              background: activeIndex === i ? dotColor : `${dotColor}25`,
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              minWidth: 0,
              minHeight: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ───── Equation cards data ───── */
const EQUATION_CARDS = [
  { label: <>What we were <span style={{ color: COLORS.navy, fontWeight: 700 }}>taught</span></>, eq: '1 + 1 = 2', icon: '\u2713', iconColor: COLORS.sourceGreen, caption: 'The basics. Everyone agrees.' },
  { label: 'What we were taught to look out for', eq: '1 + 1 = ', eqRed: '3', icon: '\u2717', iconColor: COLORS.claimRed, caption: 'The old problem. Twisting the answer.' },
  { label: <>What we actually need to <span style={{ color: COLORS.claimRed, fontWeight: 700 }}>look out for</span></>, eq: ' + 1 = 2', eqRedPrefix: '2', icon: '\u2717', iconColor: COLORS.claimRed, caption: 'The inputs are wrong. Nobody checks.' },
];

/* ───── What We Do steps ───── */
const STEPS = [
  { num: '01', title: 'They cite a source', desc: 'A public figure references a report to back up their claim.', bg: '#e8f0fa' },
  { num: '02', title: 'We read it', desc: 'We read the actual source. Not a summary. The original.', bg: '#fef3d0' },
  { num: '03', title: 'We compare', desc: 'We put what they said next to what the source shows. Side by side.', bg: '#e0f2e9' },
];

/* ───── Snap section wrapper ───── */
function SnapSection({
  children,
  bg = COLORS.paper,
  style,
}: {
  children: React.ReactNode;
  bg?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '64px 20px 24px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        background: bg,
        ...style,
      }}
    >
      {children}
    </section>
  );
}

export default function MobileHomepage() {
  const [activeStory, setActiveStory] = useState<Investigation | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const filteredInvestigations = investigations.filter((inv) => inv.slug !== '350bn-tax-evasion');

  if (activeStory) {
    return <InvestigationStory investigation={activeStory} onClose={() => setActiveStory(null)} />;
  }

  return (
    <>
      <MobileNav />

      {/* Main snap container */}
      <div
        ref={mainRef}
        id="main-content"
        style={{
          scrollSnapType: 'y mandatory',
          overflowY: 'scroll',
          height: '100vh',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
      >
        {/* ═══ SECTION 1: HERO ═══ */}
        <SnapSection bg={COLORS.navy}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ margin: '0 0 24px' }}>
              <BrandSlogan size="md" theme="dark" />
            </div>
            <p
              style={{
                fontFamily: H,
                fontSize: 'clamp(22px, 5vw, 32px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.2,
                letterSpacing: '-0.03em',
                textAlign: 'center',
                margin: '0 0 16px',
              }}
            >
              These aren&apos;t opinions. They&apos;re numbers. And they&apos;re wrong.
            </p>
            <p
              style={{
                fontFamily: B,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textAlign: 'center',
                color: COLORS.amber,
                margin: '0 0 28px',
              }}
            >
              Integrity, not ideology.
            </p>
            <Link
              href="/campaigns"
              style={{
                display: 'inline-block',
                fontFamily: B,
                fontSize: 15,
                fontWeight: 700,
                color: COLORS.navy,
                background: '#fff',
                padding: '14px 28px',
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              See our investigations &rarr;
            </Link>
          </div>
        </SnapSection>

        {/* ═══ SECTION 2: THE PROBLEM - Equations ═══ */}
        <SnapSection>
          <div
            style={{
              fontFamily: B,
              fontSize: 18,
              fontWeight: 600,
              color: COLORS.navy,
              margin: '0 0 20px',
              textAlign: 'center',
              lineHeight: 1.8,
            }}
          >
            <span>These aren&rsquo;t opinions.</span><br />
            <span>They&rsquo;re numbers.</span><br />
            <span style={{ color: COLORS.claimRed }}>And they&rsquo;re wrong.</span>
          </div>

          <FullWidthCarousel>
            {EQUATION_CARDS.map((card, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(27,42,74,0.10)',
                  borderRadius: 16,
                  padding: '32px 24px',
                  textAlign: 'center',
                  minHeight: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: B,
                    fontSize: 14,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: COLORS.muted,
                    margin: '0 0 12px',
                  }}
                >
                  {card.label}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <span
                    style={{
                      fontFamily: H,
                      fontSize: 40,
                      fontWeight: 700,
                      color: COLORS.navy,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {card.eqRedPrefix && <span style={{ color: COLORS.claimRed }}>{card.eqRedPrefix}</span>}
                    {card.eq}
                    {card.eqRed && <span style={{ color: COLORS.claimRed }}>{card.eqRed}</span>}
                  </span>
                  <span style={{ fontSize: 28, color: card.iconColor }}>{card.icon}</span>
                </div>
                <p style={{ fontFamily: B, fontSize: 16, color: COLORS.navy, margin: '12px 0 0', lineHeight: 1.5 }}>
                  {card.caption}
                </p>
              </div>
            ))}
          </FullWidthCarousel>

          <p
            style={{
              fontFamily: B,
              fontSize: 16,
              lineHeight: 1.65,
              color: COLORS.navy,
              margin: '20px 0 0',
              textAlign: 'center',
            }}
          >
            Forget the statistics. Forget the politics.{' '}
            <span className="highlight">Check the base data.</span>
          </p>
        </SnapSection>

        {/* ═══ SECTION 3: WHAT WE DO ═══ */}
        <SnapSection>
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
              margin: '0 0 24px',
              lineHeight: 1.5,
            }}
          >
            We are just checking what people quote is correct. It is that simple.
          </p>

          <FullWidthCarousel>
            {STEPS.map((step) => (
              <div
                key={step.num}
                style={{
                  background: step.bg,
                  border: '1px solid rgba(27,42,74,0.08)',
                  borderRadius: 16,
                  padding: '32px 24px',
                  minHeight: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: H,
                    fontSize: 40,
                    fontWeight: 700,
                    color: COLORS.navyLight,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {step.num}
                </span>
                <p
                  style={{
                    fontFamily: H,
                    fontSize: 22,
                    fontWeight: 700,
                    color: COLORS.navy,
                    margin: '0 0 8px',
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontFamily: B,
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: COLORS.muted,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </FullWidthCarousel>
        </SnapSection>

        {/* ═══ SECTION 4: RAILTRACK INVESTIGATION ═══ */}
        <SnapSection>
          <h2
            style={{
              fontFamily: H,
              fontSize: 22,
              fontWeight: 700,
              color: COLORS.navy,
              margin: '0 0 24px',
            }}
          >
            Featured Investigations
          </h2>
          {/* Position banner - compact */}
          <div
            style={{
              background: '#fae9b0',
              borderRadius: 10,
              padding: '10px 14px',
              marginBottom: 20,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E2;</span>
            <p style={{ fontFamily: B, fontSize: 14, color: COLORS.navy, margin: 0, lineHeight: 1.4 }}>
              We support public accountability for nationalisation costs.
            </p>
          </div>

          <p
            style={{
              fontFamily: H,
              fontSize: 22,
              fontWeight: 400,
              color: COLORS.ink,
              lineHeight: 1.4,
              margin: '0 0 24px',
            }}
          >
            &ldquo;Labour nationalised Railtrack, paying just{' '}
            <span className="highlight-red">&pound;500 million</span>&rdquo;
          </p>

          {/* Said vs Source - SWIPE CARDS */}
          <FullWidthCarousel dotColor={COLORS.claimRed}>
            {[
              <div
                key="said"
                style={{
                  background: COLORS.claimRedLight,
                  borderRadius: 16,
                  padding: '32px 24px',
                  textAlign: 'center',
                  minHeight: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: H,
                    fontSize: 36,
                    fontWeight: 700,
                    color: COLORS.claimRed,
                    margin: '0 0 8px',
                    letterSpacing: '-0.03em',
                  }}
                >
                  &pound;500m
                </p>
                <p style={{ fontFamily: B, fontSize: 16, color: COLORS.claimRedDark, margin: 0 }}>
                  What they said
                </p>
              </div>,
              <div
                key="reality"
                style={{
                  background: COLORS.sourceGreenLight,
                  borderRadius: 16,
                  padding: '32px 24px',
                  textAlign: 'center',
                  minHeight: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: H,
                    fontSize: 36,
                    fontWeight: 700,
                    color: COLORS.sourceGreen,
                    margin: '0 0 8px',
                    letterSpacing: '-0.03em',
                  }}
                >
                  &pound;7.6bn
                </p>
                <p style={{ fontFamily: B, fontSize: 16, color: COLORS.sourceGreenDark, margin: 0 }}>
                  What it cost
                </p>
              </div>,
            ]}
          </FullWidthCarousel>

          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <Link
              href="/investigations/railtrack-500m"
              style={{
                fontFamily: B,
                fontSize: 16,
                fontWeight: 600,
                color: COLORS.chainBlue,
                textDecoration: 'none',
              }}
            >
              See the full trail &rarr;
            </Link>
          </div>
        </SnapSection>

        {/* ═══ ALL INVESTIGATIONS - HORIZONTAL SWIPE ═══ */}
        <SnapSection>
          <h2
            style={{
              fontFamily: H,
              fontSize: 22,
              fontWeight: 700,
              color: COLORS.navy,
              margin: '0 0 16px',
            }}
          >
            All investigations
          </h2>

          <InvestigationCarousel
            investigations={filteredInvestigations}
            onStoryTap={setActiveStory}
          />

          <Link
            href="/campaigns"
            style={{
              display: 'block',
              fontFamily: B,
              fontSize: 16,
              fontWeight: 600,
              color: '#fff',
              background: COLORS.navy,
              borderRadius: 10,
              padding: '14px 28px',
              textDecoration: 'none',
              marginBottom: 12,
            }}
          >
            See all our investigations &rarr;
          </Link>
          <br />
          <Link
            href="/fighting-for-change"
            style={{
              display: 'inline-block',
              fontFamily: B,
              fontSize: 14,
              fontWeight: 600,
              color: COLORS.chainBlue,
              textDecoration: 'none',
              marginTop: 8,
            }}
          >
            Join the fight for change &rarr;
          </Link>
        </SnapSection>

        {/* ═══ MISSION / ABOUT ═══ */}
        <SnapSection bg={COLORS.navy} style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: H,
              fontSize: 28,
              fontWeight: 700,
              color: '#fff',
              margin: '0 0 20px',
            }}
          >
            Our mission
          </h2>
          <p
            style={{
              fontFamily: B,
              fontSize: 16,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.7)',
              margin: '0 0 16px',
              maxWidth: 360,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            We read the sources that politicians cite. If their numbers match, we say so. If they
            don&rsquo;t, we show you. No sides. No spin. Just the maths.
          </p>
          <Link
            href="/about"
            style={{
              fontFamily: B,
              fontSize: 14,
              fontWeight: 600,
              color: COLORS.amber,
              textDecoration: 'none',
            }}
          >
            Learn more about us &rarr;
          </Link>
        </SnapSection>

        {/* ═══ SUBSCRIBE ═══ */}
        <SnapSection bg={COLORS.navy} style={{ textAlign: 'center' }}>
          <div id="subscribe">
            <p
              style={{
                fontFamily: B,
                fontSize: 22,
                color: 'rgba(255,255,255,0.85)',
                margin: '0 0 8px',
                lineHeight: 1.5,
              }}
            >
              We publish <span className="highlight">when it matters</span>. Not before.
            </p>
            <p
              style={{
                fontFamily: B,
                fontSize: 16,
                color: 'rgba(255,255,255,0.45)',
                margin: '0 0 28px',
                lineHeight: 1.6,
              }}
            >
              No clickbait. Just the numbers, when they need checking.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector('input') as HTMLInputElement;
                if (input?.value) {
                  window.open(
                    `https://thepapertrailuk.substack.com/subscribe?email=${encodeURIComponent(input.value)}`,
                    '_blank',
                  );
                }
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                style={{
                  padding: '14px 18px',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  fontFamily: B,
                  fontSize: 16,
                  outline: 'none',
                  minHeight: 48,
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '14px',
                  borderRadius: 10,
                  border: 'none',
                  background: '#fff',
                  color: COLORS.navy,
                  fontFamily: B,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: 'pointer',
                  minHeight: 48,
                }}
              >
                Subscribe
              </button>
            </form>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                marginTop: 16,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#FF6719',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: B,
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.35)',
                }}
              >
                Also on Substack
              </span>
            </div>
          </div>
        </SnapSection>
      </div>

      {/* ═══ SCROLL TO TOP ═══ */}
      <FixedScrollToTop containerRef={mainRef} />

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}

/* ───── Fixed scroll to top ───── */
function FixedScrollToTop({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      setVisible(el.scrollTop > el.clientHeight);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [containerRef]);

  return (
    <button
      onClick={() => {
        const el = containerRef.current;
        if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 101,
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: COLORS.navy,
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(27,42,74,0.2)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 8l4-4 4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/* ───── Investigation swipe carousel ───── */
function InvestigationCarousel({
  investigations: invs,
  onStoryTap,
}: {
  investigations: Investigation[];
  onStoryTap: (inv: Investigation) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(Math.min(Math.max(idx, 0), invs.length - 1));
  }, [invs.length]);

  return (
    <div style={{ marginBottom: 20 }}>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {invs.map((inv) => (
          <div
            key={inv.id}
            style={{
              flex: '0 0 100%',
              scrollSnapAlign: 'center',
              padding: '0 4px',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(27,42,74,0.08)',
                borderRadius: 16,
                padding: '24px 20px',
                textAlign: 'left',
              }}
            >
              <div style={{ marginBottom: 12 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontSize: 32,
                    fontWeight: 700,
                    color: inv.multiplier === 'False' ? COLORS.claimRed : COLORS.navy,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {inv.multiplier}
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: COLORS.ink40,
                    margin: '4px 0 0',
                  }}
                >
                  {inv.multiplierLabel}
                </p>
              </div>

              <p
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 18,
                  lineHeight: 1.4,
                  color: COLORS.ink,
                  margin: '0 0 10px',
                }}
              >
                &ldquo;{inv.claim}&rdquo;
              </p>

              <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 13, color: COLORS.ink40, margin: '0 0 16px' }}>
                {inv.who} &middot; {inv.date}
              </p>

              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={() => onStoryTap(inv)}
                  style={{
                    flex: 1,
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 13,
                    fontWeight: 600,
                    color: COLORS.chainBlue,
                    background: `${COLORS.chainBlue}10`,
                    border: 'none',
                    borderRadius: 8,
                    padding: '10px 0',
                    cursor: 'pointer',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  aria-label={`Read investigation: ${inv.claim}`}
                >
                  Story &rarr;
                </button>
                <Link
                  href={`/investigations/${inv.slug}`}
                  style={{
                    flex: 1,
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 13,
                    fontWeight: 600,
                    color: COLORS.navy,
                    background: 'transparent',
                    border: `1.5px solid rgba(27,42,74,0.15)`,
                    borderRadius: 8,
                    padding: '10px 0',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  Full page &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12 }}>
        {invs.map((_, i) => (
          <span
            key={i}
            style={{
              width: activeIndex === i ? 16 : 6,
              height: 6,
              borderRadius: 3,
              background: activeIndex === i ? COLORS.navy : 'rgba(27,42,74,0.15)',
              transition: 'all 0.25s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
