'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

const cards = [
  {
    text: 'Sep 2025: CPS publishes report estimating \u00a3234bn lifetime fiscal cost',
    detail: 'Source: CPS "Here to Stay?" report, 8 September 2025',
    url: 'https://cps.org.uk/media/post/2025/recent-migration-wave-may-cost-country-billions-warns-cps/',
  },
  {
    text: 'After publication: OBR revises the fiscal data definitions used in the report',
    detail: 'The data underpinning the cost estimate was invalidated',
    url: 'https://obr.uk/box/the-impact-of-migration-on-the-fiscal-forecast/',
  },
  {
    text: 'CPS withdraws the figure: states the cost estimates "should no longer be used"',
    detail: 'The disclaimer is still visible on the CPS report page today',
    url: 'https://cps.org.uk/media/post/2025/recent-migration-wave-may-cost-country-billions-warns-cps/',
  },
  {
    text: 'March 2024: OBR analysis shows higher migration reduces borrowing by \u00a313-20bn over 5 years',
    detail: 'OBR Economic and Fiscal Outlook, March 2024',
    url: 'https://obr.uk/efo/economic-and-fiscal-outlook-march-2024/',
  },
  {
    text: 'Still live on Reform\'s website. Reform continues to use it.',
    detail: 'As of April 2026',
    url: 'https://www.reformparty.uk/immigration',
  },
];

function ExpandableCard({ card }: { card: typeof cards[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{
        background: COLORS.navy,
        borderRadius: 10,
        padding: '18px 20px',
        textAlign: 'center',
        minHeight: 80,
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        transform: expanded ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: expanded ? '0 8px 24px rgba(27,42,74,0.25)' : 'none',
      }}
    >
      <span
        style={{
          fontFamily: B,
          fontSize: 15,
          fontWeight: 600,
          color: '#fff',
          lineHeight: 1.4,
          display: 'block',
        }}
      >
        {card.text}
      </span>
      {expanded && (
        <div style={{ marginTop: 10, opacity: 1, transition: 'opacity 0.2s ease' }}>
          <p style={{ fontFamily: B, fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '0 0 8px', lineHeight: 1.4 }}>
            {card.detail}
          </p>
          <a
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily: B,
              fontSize: 12,
              fontWeight: 600,
              color: COLORS.amber,
              textDecoration: 'none',
            }}
          >
            View source &#x2197;
          </a>
        </div>
      )}
    </div>
  );
}

export default function ReformImmigrationExtras() {
  return (
    <div>
      <p
        style={{
          fontFamily: B,
          fontSize: 'var(--inv-section-heading, 14px)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: COLORS.navy,
          marginBottom: 8,
        }}
      >
        What happened
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 48 }}>
        {cards.map((card, i) => (
          <ExpandableCard key={i} card={card} />
        ))}
      </div>

      <p
        style={{
          fontFamily: H,
          fontSize: 22,
          fontWeight: 700,
          color: COLORS.navy,
          lineHeight: 1.5,
          margin: 0,
          paddingTop: 8,
          paddingBottom: 32,
        }}
      >
        The source pulled the number. The OBR says the opposite. Reform continues to use it.
      </p>
    </div>
  );
}
