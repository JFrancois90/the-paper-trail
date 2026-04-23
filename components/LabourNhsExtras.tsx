'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export default function LabourNhsExtras() {
  const [openObjection, setOpenObjection] = useState(false);

  return (
    <>
      {/* Source breakdown table */}
      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          border: '1px solid rgba(27,42,74,0.06)',
          padding: '24px 28px',
          marginBottom: 28,
        }}
      >
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          Where each figure actually comes from
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: B, fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(27,42,74,0.12)' }}>
              <th style={{ padding: '10px 0', textAlign: 'left', fontSize: 12, fontWeight: 700, color: COLORS.navy }}>Item (as posted)</th>
              <th style={{ padding: '10px 8px', textAlign: 'right', fontSize: 12, fontWeight: 700, color: COLORS.navy }}>Price</th>
              <th style={{ padding: '10px 0', textAlign: 'left', fontSize: 12, fontWeight: 700, color: COLORS.navy }}>Actual source</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: 'GP visit', price: '£129', src: 'US UnitedHealthcare median, 2023' },
              { item: 'A&E visit', price: '£1,368', src: 'US UnitedHealthcare median, 2023' },
              { item: 'Hip replacement', price: '£23,400', src: 'iFHP Cost Comparison Report, 2022 (US figure)' },
              { item: 'Coronary bypass', price: '£71,997', src: 'iFHP Cost Comparison Report, 2022 (US figure)' },
              { item: 'Ambulance', price: '£1,045', src: 'No published source' },
            ].map((row, i, arr) => (
              <tr key={i} style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(27,42,74,0.06)' : 'none' }}>
                <td style={{ padding: '10px 0', color: COLORS.navy, fontWeight: 600 }}>{row.item}</td>
                <td style={{ padding: '10px 8px', textAlign: 'right', color: COLORS.claimRed, fontWeight: 700 }}>{row.price}</td>
                <td style={{ padding: '10px 0', color: COLORS.muted, fontSize: 13 }}>{row.src}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontFamily: B, fontSize: 13, color: COLORS.lightMuted, fontStyle: 'italic', margin: '16px 0 0' }}>
          The graphic carries no source disclosure. No asterisk, no caption note, no link. The only contextual label is the &ldquo;in the UK&rdquo; header, which is wrong.
        </p>
      </div>

      {/* Reform's actual position */}
      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          border: '1px solid rgba(27,42,74,0.06)',
          padding: '24px 28px',
          marginBottom: 28,
        }}
      >
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          What Reform have actually said
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>2024 manifesto &mdash; &ldquo;Our Contract With You&rdquo;</p>
            <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: 0 }}>
              Pledged NHS services &ldquo;free at the point of use&rdquo;. Dropped in October 2025.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>Replacement policy (in development)</p>
            <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: 0 }}>
              Includes &ldquo;a firm commitment to an NHS that is free at the point of delivery&rdquo;.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.sourceGreen, margin: '0 0 4px' }}>Implication</p>
            <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: 0 }}>
              The post is dated April 2026. No Reform document exists from which any of these prices could be derived.
            </p>
          </div>
        </div>
      </div>

      {/* Pre-empted objection - collapsible, closed by default */}
      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          border: '1px solid rgba(27,42,74,0.06)',
          marginBottom: 28,
          overflow: 'hidden',
        }}
      >
        <button
          onClick={() => setOpenObjection((v) => !v)}
          aria-expanded={openObjection}
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            cursor: 'pointer',
            textAlign: 'left',
            fontFamily: H,
          }}
        >
          <span style={{ fontFamily: B, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted }}>
            Pre-empted objection
          </span>
          <span style={{ fontFamily: H, fontSize: 17, fontWeight: 600, color: COLORS.navy, flex: 1, marginLeft: 8 }}>
            &ldquo;But isn&rsquo;t the US a fair worst-case comparator?&rdquo;
          </span>
          <span
            aria-hidden="true"
            style={{
              fontFamily: B,
              fontSize: 13,
              fontWeight: 700,
              color: COLORS.chainBlue,
              background: 'rgba(35,88,163,0.08)',
              borderRadius: 999,
              padding: '4px 10px',
              whiteSpace: 'nowrap',
            }}
          >
            {openObjection ? 'Hide \u25B2' : 'Open \u25BC'}
          </span>
        </button>
        {openObjection && (
          <div style={{ padding: '0 28px 24px', borderTop: '1px solid rgba(27,42,74,0.06)' }}>
            <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.muted, margin: '16px 0 12px' }}>
              No. Labour had cleaner options and didn&rsquo;t use them.
            </p>
            <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.muted, marginBottom: 8 }}>
                Several G20 countries are not free at the point of use. France, Germany, Japan, South Korea and Australia all run insurance or co-pay systems.
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.muted, marginBottom: 8 }}>
                Farage has named France as the model he admires (Telegraph, December 2024; LBC, January 2025). If the post wanted to model a Reform-style system, France was the obvious comparator.
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.muted, marginBottom: 8 }}>
                The price gap explains the choice. Per the same iFHP report Labour drew the &pound;23,400 from: Australia&rsquo;s median hip replacement was around $14,666, Spain&rsquo;s under 25% of the US price. A French GP visit, after the standard 70% reimbursement, costs the patient roughly &pound;8. Not &pound;129.
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.navy, fontWeight: 600 }}>
                Labour chose the most expensive country on earth, then labelled the prices British. That is framing, not modelling.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* How It Lands - quiet pull-quote, no border, muted italic */}
      <div
        style={{
          padding: '8px 28px 8px 20px',
          borderLeft: `3px solid ${COLORS.ink20}`,
          margin: '8px 0 32px',
        }}
      >
        <p style={{ fontFamily: B, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: COLORS.lightMuted, margin: '0 0 10px' }}>
          How it lands
        </p>
        <p style={{ fontFamily: B, fontSize: 15, fontStyle: 'italic', lineHeight: 1.7, color: COLORS.muted, margin: '0 0 10px' }}>
          The post has 3,399 likes and over 1,000 comments at time of review. The comment thread is debating privatisation, NHS access, immigration and personal NHS experiences. One commenter asks the basic question, &ldquo;what is your source&rdquo;, and is met with &ldquo;do you not know what privatisation is?&rdquo;.
        </p>
        <p style={{ fontFamily: B, fontSize: 15, fontStyle: 'italic', lineHeight: 1.7, color: COLORS.muted, margin: '0 0 10px' }}>
          That is what misleading framing does. The figures are not defended because they are not interrogated. The conversation has already moved on to abstractions where the original numerical claim never gets tested. By the time anyone thinks to ask, the prices are background, accepted, assumed.
        </p>
        <p style={{ fontFamily: B, fontSize: 15, fontStyle: 'italic', lineHeight: 1.7, color: COLORS.muted, margin: 0 }}>
          This is the case for fact-checking the numbers, not the politics. The politics will be debated either way. The numbers either match the sources, or they do not.
        </p>
      </div>

      {/* Mirror pattern - opposing party */}
      <div
        style={{
          background: 'rgba(35,88,163,0.04)',
          borderRadius: 14,
          border: '1px solid rgba(35,88,163,0.12)',
          padding: '20px 24px',
          marginBottom: 28,
        }}
      >
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.chainBlue, margin: '0 0 10px' }}>
          Pattern we&rsquo;ve seen before
        </p>
        <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 10px' }}>
          Outlet on one side of the aisle publishes numbers attributed to the other side, with no traceable source from that side. The figures come from elsewhere; the framing does the rest.
        </p>
        <Link
          href="/investigations/reform-tax-canary"
          style={{
            fontFamily: B,
            fontSize: 14,
            fontWeight: 600,
            color: COLORS.chainBlue,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          See the mirror case: The Canary on Reform&rsquo;s tax cuts &rarr;
        </Link>
      </div>

      {/* Outreach */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 12px' }}>
          Our outreach
        </p>
        <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>Labour Party press office</p>
        <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 12px' }}>Email sent. Awaiting response.</p>
        <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>@uklabour (Instagram)</p>
        <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: 0 }}>DM sent. Awaiting response.</p>
      </div>
    </>
  );
}
