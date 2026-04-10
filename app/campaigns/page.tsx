'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MultiplierBadge from '@/components/MultiplierBadge';
import ScrollReveal from '@/components/ScrollReveal';
import { COLORS } from '@/lib/constants';
import { investigations } from '@/data/investigations';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

const ALL_SUBJECTS = Array.from(new Set(investigations.map((inv) => inv.subject)));

export default function CampaignsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? investigations.filter((inv) => inv.subject === activeFilter)
    : investigations;

  return (
    <>
      <Nav />
      <main
        id="main-content"
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '100px 28px 48px',
        }}
      >
        <ScrollReveal>
          <h1
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 40,
              fontWeight: 400,
              letterSpacing: '-0.03em',
              color: COLORS.navy,
              lineHeight: 1.15,
              margin: '0 0 12px',
            }}
          >
            Our campaigns
          </h1>
          <p
            style={{
              fontFamily: B,
              fontSize: 16,
              lineHeight: 1.6,
              color: COLORS.muted,
              margin: '0 0 32px',
            }}
          >
            Every investigation grouped by subject. Filter by topic to see what we have checked.
          </p>
        </ScrollReveal>

        {/* Filter pills */}
        <ScrollReveal anim="fadeUp" delay={0.1}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
            <button
              onClick={() => setActiveFilter(null)}
              style={{
                fontFamily: B,
                fontSize: 13,
                fontWeight: 600,
                padding: '8px 18px',
                borderRadius: 20,
                border: 'none',
                cursor: 'pointer',
                background: activeFilter === null ? COLORS.navy : 'rgba(27,42,74,0.06)',
                color: activeFilter === null ? '#fff' : COLORS.navy,
                transition: 'all 0.2s ease',
              }}
            >
              All ({investigations.length})
            </button>
            {ALL_SUBJECTS.map((subject) => {
              const count = investigations.filter((inv) => inv.subject === subject).length;
              const isActive = activeFilter === subject;
              return (
                <button
                  key={subject}
                  onClick={() => setActiveFilter(isActive ? null : subject)}
                  style={{
                    fontFamily: B,
                    fontSize: 13,
                    fontWeight: 600,
                    padding: '8px 18px',
                    borderRadius: 20,
                    border: 'none',
                    cursor: 'pointer',
                    background: isActive ? COLORS.amber : 'rgba(27,42,74,0.06)',
                    color: isActive ? '#fff' : COLORS.navy,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {subject} ({count})
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Investigation cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {filtered.map((inv, i) => (
            <ScrollReveal key={inv.slug} anim="fadeUp" delay={i * 0.08}>
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
                {/* Subject tag */}
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: B,
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: COLORS.amber,
                    background: COLORS.amberLight,
                    padding: '4px 10px',
                    borderRadius: 12,
                    marginBottom: 12,
                  }}
                >
                  {inv.subject}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <MultiplierBadge multiplier={inv.multiplier} label={inv.multiplierLabel} />
                </div>

                <p
                  style={{
                    fontFamily: H,
                    fontSize: 15,
                    lineHeight: 1.4,
                    color: COLORS.ink,
                    margin: '0 0 8px',
                  }}
                >
                  &ldquo;{inv.claim}&rdquo;
                </p>

                <p
                  style={{
                    fontFamily: B,
                    fontSize: 13,
                    color: COLORS.lightMuted,
                    margin: '0 0 12px',
                  }}
                >
                  {inv.who} &middot; {inv.date}
                </p>

                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: B,
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#fff',
                    background: COLORS.navy,
                    padding: '6px 14px',
                    borderRadius: 8,
                  }}
                >
                  Read more &rarr;
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, textAlign: 'center', padding: '40px 0' }}>
            No investigations found for this filter.
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
