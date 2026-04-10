'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';
import { investigations } from '@/data/investigations';
import MobileNav from '@/components/MobileNav';
import BrandSlogan from '@/components/BrandSlogan';
import HeroSubtitle from '@/components/HeroSubtitle';
import SubscribeCTA from '@/components/SubscribeCTA';
import InvestigationStory from './InvestigationStory';
import type { Investigation } from '@/data/investigations';

const H = 'var(--font-heading), sans-serif';
const B = 'var(--font-sans), sans-serif';

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
        {/* Hero (70vh) */}
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

        {/* Investigation feed */}
        <section style={{ padding: '32px 16px 0' }}>
          <p
            style={{
              fontFamily: B,
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: COLORS.ink40,
              margin: '0 0 16px',
              padding: '0 8px',
            }}
          >
            Latest investigations
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {investigations.map((inv, i) => (
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
                        fontSize: 9,
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
                    &ldquo;{inv.saidQuote}&rdquo;
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

                {/* Bridge text between cards */}
                {i === 1 && (
                  <div style={{ padding: '24px 8px', textAlign: 'center' }}>
                    <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.6, color: COLORS.ink40, margin: 0 }}>
                      When politicians get their numbers wrong, the people who need help most{' '}
                      <span className="highlight">pay the price</span>.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Subscribe */}
        <div style={{ padding: '40px 16px 0' }}>
          <SubscribeCTA />
        </div>

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
