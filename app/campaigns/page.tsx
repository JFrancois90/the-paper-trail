'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MultiplierBadge from '@/components/MultiplierBadge';
import StatusBadge from '@/components/StatusBadge';
import ScrollReveal from '@/components/ScrollReveal';
import { COLORS, TOPIC_COLORS } from '@/lib/constants';
import { investigations } from '@/data/investigations';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

const ALL_SUBJECTS = Array.from(new Set(investigations.map((inv) => inv.subject))).sort();

interface TopicGroup {
  id: string;
  heading: string;
  description: string;
  slugs: string[];
}

const TOPIC_GROUPS: TopicGroup[] = [
  {
    id: 'tax-and-economy',
    heading: 'Tax and economy',
    description: 'Claims about tax gaps, who pays what, and how the wider economy is presented.',
    slugs: ['350bn-tax-evasion', 'jones-500bn-tax-gap', 'cgt-lowest-g7', 'billionaire-numbers', 'reform-tax-canary'],
  },
  {
    id: 'student-debt',
    heading: 'Student debt cluster',
    description: 'Three different stories about how big a student loan really gets, told over the same year. (Related investigations link to each other.)',
    slugs: ['student-debt-claim', 'student-debt-97k', 'times-student-debt-37'],
  },
  {
    id: 'public-spending',
    heading: 'Public spending',
    description: 'What does it actually cost the public purse when the state buys something back?',
    slugs: ['railtrack-500m'],
  },
  {
    id: 'criminal-justice',
    heading: 'Criminal justice',
    description: 'Crime statistics being used to drive enforcement and sentencing policy.',
    slugs: ['reform-prolific-offenders', 'reform-stop-search'],
  },
  {
    id: 'immigration',
    heading: 'Immigration',
    description: 'Fiscal numbers used to argue for immigration policy changes.',
    slugs: ['reform-234bn-immigration'],
  },
  {
    id: 'health',
    heading: 'NHS and health',
    description: 'How public health spending is costed, compared, and characterised.',
    slugs: ['labour-nhs-us-costs'],
  },
];

export default function CampaignsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const MONTH_ORDER: Record<string, number> = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
  const parseDate = (d: string) => {
    const parts = d.split(' ');
    if (parts.length === 2) return (parseInt(parts[1]) * 100) + (MONTH_ORDER[parts[0]] || 0);
    if (parts.length === 1) return parseInt(parts[0]) * 100;
    return 0;
  };

  const investigationBySlug = new Map(investigations.map((inv) => [inv.slug, inv]));

  const filtered = (activeFilter
    ? investigations.filter((inv) => inv.subject === activeFilter)
    : investigations
  ).sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const groupedSlugs = new Set(TOPIC_GROUPS.flatMap((g) => g.slugs));
  const ungrouped = investigations.filter((inv) => !groupedSlugs.has(inv.slug));

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
        <span id="campaigns-top" style={{ position: 'absolute', height: 0, width: 0, overflow: 'hidden' }} aria-hidden="true" />

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
              const topicColor = TOPIC_COLORS[subject];
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
                    background: isActive ? (topicColor?.bg || COLORS.amber) : 'rgba(27,42,74,0.06)',
                    color: isActive ? (topicColor?.text || '#fff') : COLORS.navy,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {subject} ({count})
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* When a topic filter is active, fall back to a flat date-sorted grid. */}
        {activeFilter ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
            }}
          >
            {filtered.map((inv, i) => (
              <ScrollReveal key={inv.slug} anim="fadeUp" delay={i * 0.05}>
                <CampaignCard inv={inv} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {TOPIC_GROUPS.map((group) => {
              const cards = group.slugs
                .map((slug) => investigationBySlug.get(slug))
                .filter((inv): inv is NonNullable<typeof inv> => Boolean(inv));
              if (cards.length === 0) return null;
              return (
                <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`}>
                  <ScrollReveal anim="fadeUp">
                    <h2
                      id={`${group.id}-heading`}
                      style={{
                        fontFamily: H,
                        fontSize: 26,
                        fontWeight: 700,
                        color: COLORS.navy,
                        letterSpacing: '-0.02em',
                        margin: '0 0 6px',
                      }}
                    >
                      {group.heading}
                    </h2>
                    <p
                      style={{
                        fontFamily: B,
                        fontSize: 16,
                        lineHeight: 1.55,
                        color: COLORS.muted,
                        margin: '0 0 20px',
                      }}
                    >
                      {group.description}
                    </p>
                  </ScrollReveal>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: 16,
                    }}
                  >
                    {cards.map((inv, i) => (
                      <ScrollReveal key={inv.slug} anim="fadeUp" delay={i * 0.05}>
                        <CampaignCard inv={inv} />
                      </ScrollReveal>
                    ))}
                  </div>

                  <div style={{ marginTop: 16 }}>
                    <Link
                      href="#campaigns-top"
                      style={{
                        display: 'inline-block',
                        fontFamily: B,
                        fontSize: 14,
                        fontWeight: 600,
                        color: COLORS.chainBlue,
                        textDecoration: 'none',
                      }}
                    >
                      View all investigations &rarr;
                    </Link>
                  </div>
                </section>
              );
            })}

            {ungrouped.length > 0 && (
              <section aria-label="Other investigations">
                <ScrollReveal anim="fadeUp">
                  <h2 style={{ fontFamily: H, fontSize: 26, fontWeight: 700, color: COLORS.navy, letterSpacing: '-0.02em', margin: '0 0 6px' }}>
                    Other investigations
                  </h2>
                  <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.55, color: COLORS.muted, margin: '0 0 20px' }}>
                    Stories that do not yet sit inside a wider topic cluster.
                  </p>
                </ScrollReveal>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                  {ungrouped.map((inv, i) => (
                    <ScrollReveal key={inv.slug} anim="fadeUp" delay={i * 0.05}>
                      <CampaignCard inv={inv} />
                    </ScrollReveal>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {activeFilter && filtered.length === 0 && (
          <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, textAlign: 'center', padding: '40px 0' }}>
            No investigations found for this filter.
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}

interface CampaignCardProps {
  inv: (typeof investigations)[number];
}

function CampaignCard({ inv }: CampaignCardProps) {
  return (
    <Link
      href={`/investigations/${inv.slug}`}
      className="hover-card"
      style={{
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        border: '1px solid rgba(27,42,74,0.10)',
        borderRadius: 14,
        padding: 24,
        boxShadow: '0 2px 8px rgba(27,42,74,0.04)',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: B,
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: TOPIC_COLORS[inv.subject]?.text || '#fff',
            background: TOPIC_COLORS[inv.subject]?.bg || COLORS.amber,
            padding: '4px 10px',
            borderRadius: 12,
          }}
        >
          {inv.subject}
        </span>
        {inv.rebuttalStatus && (
          <StatusBadge
            status={inv.rebuttalStatus.status}
            correction={inv.correction}
            invited={inv.rebuttalStatus.invited}
            dateInvited={inv.rebuttalStatus.dateInvited}
            responseText={inv.rebuttalStatus.responseText}
            compact
          />
        )}
      </div>

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
        &ldquo;{inv.claim.split(/(IS)/).map((part, i) =>
          part === 'IS' ? <span key={i} className="emphasis-red">IS</span> : part
        )}&rdquo;
      </p>

      <div style={{ flex: 1 }} />

      <p
        style={{
          fontFamily: B,
          fontSize: 18,
          color: COLORS.navy,
          margin: '0 0 12px',
          borderBottom: `2px solid ${COLORS.claimRed}`,
          paddingBottom: 6,
          display: 'inline-block',
        }}
      >
        <strong>{inv.who}</strong>{' '}
        <span style={{ fontWeight: 400, color: COLORS.muted }}>&middot; {inv.date}</span>
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
  );
}
