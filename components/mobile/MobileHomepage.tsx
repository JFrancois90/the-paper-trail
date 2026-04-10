'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';
import { investigations } from '@/data/investigations';
import MobileNav from '@/components/MobileNav';
import BrandSlogan from '@/components/BrandSlogan';
import HeroSubtitle from '@/components/HeroSubtitle';
import SourceDocsNotice from '@/components/SourceDocsNotice';
import InvestigationStory from './InvestigationStory';
import type { Investigation } from '@/data/investigations';

const H = 'var(--font-heading), sans-serif';
const B = 'var(--font-sans), sans-serif';

/* ───── Swipe carousel ───── */
function SwipeCarousel({ children, cardWidth = 280, gap = 12 }: { children: React.ReactNode[]; cardWidth?: number; gap?: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = children.length;

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const step = cardWidth + gap;
    const idx = Math.round(scrollLeft / step);
    setActiveIndex(Math.min(Math.max(idx, 0), count - 1));
  }, [cardWidth, gap, count]);

  /* Snap the last card to centre */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const resizeObs = new ResizeObserver(() => {
      // Set right padding so last card can centre-align when scrolled to
      const viewW = el.clientWidth;
      const rightPad = Math.max((viewW - cardWidth) / 2, 16);
      el.style.paddingRight = `${rightPad}px`;
    });
    resizeObs.observe(el);
    return () => resizeObs.disconnect();
  }, [cardWidth]);

  return (
    <div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: 'flex',
          gap,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          paddingLeft: 16,
          paddingBottom: 8,
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <style>{`
          .swipe-carousel::-webkit-scrollbar { display: none; }
        `}</style>
        {children.map((child, i) => (
          <div
            key={i}
            style={{
              flex: `0 0 ${cardWidth}px`,
              scrollSnapAlign: 'center',
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 10 }}>
        {Array.from({ length: count }).map((_, i) => (
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

/* ───── Equation cards data ───── */
const EQUATION_CARDS = [
  { label: 'What we were taught', eq: '1 + 1 = 2', icon: '\u2713', iconColor: COLORS.sourceGreen, caption: 'The basics. Everyone agrees.' },
  { label: 'What we were taught to look out for', eq: '1 + 1 = ', eqRed: '3', icon: '\u2717', iconColor: COLORS.claimRed, caption: 'The old problem. Twisting the answer.' },
  { label: 'What we actually need to find', eq: ' + 1 = 2', eqRedPrefix: '5', icon: '\u2717', iconColor: COLORS.claimRed, caption: 'The inputs are wrong. Nobody checks.' },
];

/* ───── What We Do steps ───── */
const STEPS = [
  { num: '01', title: 'They cite a source', desc: 'A public figure references a report to back up their claim.' },
  { num: '02', title: 'We read it', desc: 'We read the actual source. Not a summary. The original.' },
  { num: '03', title: 'We compare', desc: 'We put what they said next to what the source shows. Side by side.' },
];

export default function MobileHomepage() {
  const [activeStory, setActiveStory] = useState<Investigation | null>(null);
  const [showSubscribePill, setShowSubscribePill] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowSubscribePill(y > window.innerHeight * 0.7);
      setShowBackToTop(y > window.innerHeight);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (activeStory) {
    return <InvestigationStory investigation={activeStory} onClose={() => setActiveStory(null)} />;
  }

  return (
    <>
      <MobileNav />
      <main id="main-content">
        {/* Hero */}
        <section
          style={{
            minHeight: '70vh',
            background: COLORS.navy,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 24px 40px',
          }}
        >
          <h1 style={{ margin: '0 0 28px' }}>
            <BrandSlogan size="md" theme="dark" />
          </h1>
          <HeroSubtitle isMobile />
        </section>

        {/* Source docs notice */}
        <div style={{ padding: '20px 16px 0' }}>
          <SourceDocsNotice />
        </div>

        {/* Equations — swipeable cards */}
        <section style={{ padding: '24px 0 16px' }}>
          <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.navy, margin: '0 0 12px', padding: '0 16px', textAlign: 'center' }}>
            These aren&rsquo;t opinions. They&rsquo;re numbers. And they&rsquo;re wrong.
          </p>
          <SwipeCarousel cardWidth={260} gap={12}>
            {EQUATION_CARDS.map((card, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.10)', borderRadius: 12, padding: '24px 16px', textAlign: 'center', minHeight: 170, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: B, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: COLORS.muted, margin: '0 0 8px' }}>{card.label}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <span style={{ fontFamily: H, fontSize: 36, fontWeight: 700, color: COLORS.navy, letterSpacing: '-0.03em' }}>
                    {card.eqRedPrefix && <span style={{ color: COLORS.claimRed }}>{card.eqRedPrefix}</span>}
                    {card.eq}
                    {card.eqRed && <span style={{ color: COLORS.claimRed }}>{card.eqRed}</span>}
                  </span>
                  <span style={{ fontSize: 26, color: card.iconColor }}>{card.icon}</span>
                </div>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.navy, margin: '8px 0 0' }}>{card.caption}</p>
              </div>
            ))}
          </SwipeCarousel>
          <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.65, color: COLORS.navy, margin: '16px 16px 0', textAlign: 'center' }}>
            Forget the statistics. Forget the politics. <span className="highlight">Check the base data.</span>
          </p>
        </section>

        {/* What we do — swipeable cards */}
        <section style={{ padding: '16px 0 24px' }}>
          <h2 style={{ fontFamily: H, fontSize: 22, fontWeight: 700, color: COLORS.navy, margin: '0 0 4px', padding: '0 16px' }}>What we do</h2>
          <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 14px', padding: '0 16px' }}>
            We are just checking what people quote is correct. It is that simple.
          </p>
          <SwipeCarousel cardWidth={270} gap={12}>
            {STEPS.map((step) => (
              <div key={step.num} style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.10)', borderRadius: 12, padding: '24px 20px', minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontFamily: H, fontSize: 36, fontWeight: 700, color: COLORS.navyLight, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>{step.num}</span>
                <p style={{ fontFamily: H, fontSize: 17, fontWeight: 700, color: COLORS.navy, margin: '0 0 4px' }}>{step.title}</p>
                <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.5, color: COLORS.muted, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </SwipeCarousel>
        </section>

        {/* Featured: Railtrack */}
        <section style={{ padding: '16px 16px 24px' }}>
          <div style={{ background: '#fae9b0', borderRadius: 8, padding: '10px 14px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 14 }}>&#x1F4E2;</span>
            <p style={{ fontFamily: B, fontSize: 13, color: COLORS.navy, margin: 0 }}>We support public accountability for nationalisation costs.</p>
          </div>
          <p style={{ fontFamily: H, fontSize: 18, fontWeight: 400, color: COLORS.ink, lineHeight: 1.4, margin: '0 0 16px' }}>
            &ldquo;Labour nationalised Railtrack, paying just <span className="highlight-red">&pound;500 million</span>&rdquo;
          </p>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <div style={{ flex: 1, background: COLORS.claimRedLight, borderRadius: 10, padding: '16px 12px', textAlign: 'center' }}>
              <p style={{ fontFamily: H, fontSize: 28, fontWeight: 700, color: COLORS.claimRed, margin: '0 0 4px', letterSpacing: '-0.03em' }}>&pound;500m</p>
              <p style={{ fontFamily: B, fontSize: 12, color: COLORS.claimRedDark, margin: 0 }}>What they said</p>
            </div>
            <div style={{ flex: 1, background: COLORS.sourceGreenLight, borderRadius: 10, padding: '16px 12px', textAlign: 'center' }}>
              <p style={{ fontFamily: H, fontSize: 28, fontWeight: 700, color: COLORS.sourceGreen, margin: '0 0 4px', letterSpacing: '-0.03em' }}>&pound;7.6bn</p>
              <p style={{ fontFamily: B, fontSize: 12, color: COLORS.sourceGreenDark, margin: 0 }}>What it cost</p>
            </div>
          </div>
          <Link href="/investigations/railtrack-500m" style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.chainBlue, textDecoration: 'none' }}>
            See the full trail &rarr;
          </Link>
        </section>

        {/* Investigation feed */}
        <section style={{ padding: '16px 16px 0' }}>
          <h2 style={{ fontFamily: H, fontSize: 22, fontWeight: 700, color: COLORS.navy, margin: '0 0 16px' }}>
            All investigations
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {investigations.filter((inv) => inv.slug !== '350bn-tax-evasion').map((inv, i) => (
              <div key={inv.id}>
                <button
                  onClick={() => setActiveStory(inv)}
                  style={{
                    display: 'block',
                    width: '100%',
                    background: '#fff',
                    border: '1px solid rgba(27,42,74,0.08)',
                    borderRadius: 14,
                    padding: '20px 20px 16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  aria-label={`Read investigation: ${inv.claim}`}
                >
                  {/* Badge row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                    <span
                      style={{
                        fontFamily: H,
                        fontSize: 18,
                        fontWeight: 700,
                        color: inv.multiplier === 'False' ? COLORS.claimRed : COLORS.navy,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {inv.multiplier}
                    </span>
                    <span
                      style={{
                        fontFamily: B,
                        fontSize: 12,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: COLORS.ink40,
                      }}
                    >
                      {inv.multiplierLabel}
                    </span>
                  </div>

                  {/* Claim */}
                  <p
                    style={{
                      fontFamily: B,
                      fontSize: 17,
                      lineHeight: 1.35,
                      color: COLORS.ink,
                      margin: '0 0 12px',
                    }}
                  >
                    &ldquo;{inv.claim}&rdquo;
                  </p>

                  {/* Who + date */}
                  <p style={{ fontFamily: B, fontSize: 13, color: COLORS.ink40, margin: '0 0 12px' }}>
                    {inv.who} &middot; {inv.date}
                  </p>

                  {/* CTA */}
                  <p
                    style={{
                      fontFamily: B,
                      fontSize: 12,
                      fontWeight: 600,
                      color: COLORS.chainBlue,
                      margin: 0,
                    }}
                  >
                    Tap to see the story &rarr;
                  </p>
                </button>

                {/* Bridge text */}
                {i === 1 && (
                  <div style={{ padding: '24px 8px', textAlign: 'center' }}>
                    <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.6, color: COLORS.ink40, margin: 0 }}>
                      When public figures get their numbers wrong, the people who need help most{' '}
                      <span className="highlight">pay the price</span>.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Subscribe */}
        <section
          id="subscribe"
          style={{
            background: COLORS.navy,
            margin: '32px 16px 0',
            borderRadius: 16,
            padding: '40px 24px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontFamily: B, fontSize: 18, color: 'rgba(255,255,255,0.85)', margin: '0 0 8px', lineHeight: 1.5 }}>
            We publish <span className="highlight">when it matters</span>. Not before.
          </p>
          <p style={{ fontFamily: B, fontSize: 14, color: 'rgba(255,255,255,0.45)', margin: '0 0 24px', lineHeight: 1.6 }}>
            No clickbait. Just the numbers, when they need checking.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input') as HTMLInputElement;
              if (input?.value) {
                window.open(`https://thepapertrailuk.substack.com/subscribe?email=${encodeURIComponent(input.value)}`, '_blank');
              }
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              style={{
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
                padding: '12px',
                borderRadius: 8,
                border: 'none',
                background: '#fff',
                color: COLORS.navy,
                fontFamily: B,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                minHeight: 44,
              }}
            >
              Subscribe
            </button>
          </form>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 12 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6719', display: 'inline-block' }} />
            <span style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>
              Also on Substack
            </span>
          </div>
        </section>

        {/* Footer spacer */}
        <div style={{ height: 80 }} />
      </main>

      {/* Floating subscribe pill */}
      <div
        style={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 90,
          opacity: showSubscribePill ? 1 : 0,
          pointerEvents: showSubscribePill ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <a
          href="#subscribe"
          style={{
            fontFamily: B,
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#fff',
            background: COLORS.navy,
            textDecoration: 'none',
            padding: '10px 24px',
            borderRadius: 20,
            boxShadow: '0 4px 16px rgba(27,42,74,0.25)',
            display: 'block',
          }}
        >
          Subscribe
        </a>
      </div>

      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: 20,
            right: 16,
            zIndex: 90,
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
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 8l4-4 4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </>
  );
}
