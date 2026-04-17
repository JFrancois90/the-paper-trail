import Link from 'next/link';
import { COLORS } from '@/lib/constants';
import SourceArrow from './SourceArrow';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

interface SourceCard {
  label: string;
  url: string;
  note: string;
}

const SOURCES: SourceCard[] = [
  {
    label: 'Baroness Jenny Jones, televised interview (Green Party Instagram repost)',
    url: 'https://www.instagram.com/p/DXM6z9Sj2Dl/',
    note: 'Verbatim quote under examination: \u201CSince 2010, HMRC has not collected \u00a3500 billion worth of tax. And that\u2019s mostly from the richest people in society.\u201D',
  },
  {
    label: 'HMRC \u2014 Measuring Tax Gaps 2025 (landing page)',
    url: 'https://www.gov.uk/government/statistics/measuring-tax-gaps',
    note: 'Published 19 June 2025. Contains the full online data tables used to derive the cumulative 2010-11 to 2023-24 figures.',
  },
  {
    label: 'HMRC \u2014 Tax Gaps: Summary chapter',
    url: 'https://www.gov.uk/government/statistics/measuring-tax-gaps/1-tax-gaps-summary',
    note: 'HMRC\u2019s own summary states the small business tax gap is the largest component at 60% share in 2023-24, and the wealthy tax gap is the lowest at 5%.',
  },
  {
    label: 'HMRC press release \u2014 \u201CTax gap estimated at 5.3%\u201D',
    url: 'https://www.gov.uk/government/news/tax-gap-estimated-at-53',
    note: 'States \u201CThe largest share of the gap is from small business non-compliance\u201D.',
  },
  {
    label: 'Clarification letter to Baroness Jones and Green Party leadership',
    url: '/letters/green-party-jones-500bn-tax-gap-17-april-2026.pdf',
    note: 'Letter dated 17 April 2026.',
  },
  {
    label: 'Chartered Institute of Taxation commentary \u2014 Tax gap revised up',
    url: 'https://www.tax.org.uk/tax-gap-2025',
    note: 'Independent professional body noting \u201Clarge businesses and wealthy individuals... total share of the tax gap is not much more than a quarter of that of small businesses\u201D.',
  },
];

interface Row {
  group: string;
  cumulative: string;
  share: string;
  latest: string;
  highlight?: 'claim' | 'source';
}

const ROWS: Row[] = [
  { group: 'Small businesses', cumulative: '\u00a3232.4bn', share: '46.4%', latest: '59.7%', highlight: 'claim' },
  { group: 'Large businesses', cumulative: '\u00a377.7bn', share: '15.5%', latest: '12.4%' },
  { group: 'Mid-sized businesses', cumulative: '\u00a368.8bn', share: '13.7%', latest: '9.4%' },
  { group: 'Criminals', cumulative: '\u00a365.3bn', share: '13.0%', latest: '9.4%' },
  { group: 'Individuals', cumulative: '\u00a331.5bn', share: '6.3%', latest: '4.7%' },
  { group: 'Wealthy', cumulative: '\u00a325.3bn', share: '5.0%', latest: '4.5%', highlight: 'source' },
];

export default function JonesTaxGapExtras() {
  return (
    <>
      {/* The short version */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '28px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 'var(--inv-section-heading, 14px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          The short version
        </p>
        <p style={{ fontFamily: B, fontSize: 'var(--inv-body, 18px)', lineHeight: 1.7, color: COLORS.muted, margin: '0 0 16px' }}>
          Baroness Jenny Jones said in a televised interview that since 2010 HMRC has not collected &pound;500 billion of tax, and that this is &ldquo;mostly from the richest people in society&rdquo;. The &pound;500bn figure is broadly accurate &mdash; it comes from HMRC&rsquo;s Measuring Tax Gaps 2025 cumulative totals from 2010-11 to 2023-24. But the same HMRC publication attributes around 5% of that cumulative gap to the wealthy (&pound;25.3bn) and 46% to small businesses (&pound;232.4bn). In 2023-24 alone, small businesses account for 60% of the tax gap; the wealthy account for 5%. HMRC&rsquo;s own summary states it plainly: &ldquo;the tax gap from small businesses is the largest component of the tax gap by customer group at a 60% share in 2023 to 2024; the tax gap from wealthy makes up the lowest proportion of the tax gap at 5%&rdquo;.
        </p>
        <p style={{ fontFamily: H, fontSize: 18, fontWeight: 700, color: COLORS.navy, margin: 0 }}>
          &pound;500bn total tax gap. Wealthy contribute ~5%. Small businesses contribute ~46%. The source says the opposite of the statement.
        </p>
      </div>

      {/* HMRC Table 1.4 */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 12px' }}>
          Cumulative tax gap by customer group, 2010-11 to 2023-24 (HMRC Table 1.4)
        </p>
        <div style={{ overflowX: 'auto', marginBottom: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 440 }}>
            <thead>
              <tr>
                <th style={{ fontFamily: B, fontSize: 12, fontWeight: 600, color: COLORS.navy, padding: '8px', textAlign: 'left', borderBottom: '1px solid rgba(27,42,74,0.08)' }}>Customer group</th>
                <th style={{ fontFamily: B, fontSize: 12, fontWeight: 600, color: COLORS.navy, padding: '8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.08)' }}>Cumulative &pound;bn</th>
                <th style={{ fontFamily: B, fontSize: 12, fontWeight: 600, color: COLORS.navy, padding: '8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.08)' }}>Share of total</th>
                <th style={{ fontFamily: B, fontSize: 12, fontWeight: 600, color: COLORS.navy, padding: '8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.08)' }}>2023-24 share</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => {
                const rowColor = r.highlight === 'claim' ? COLORS.claimRed : r.highlight === 'source' ? COLORS.sourceGreen : COLORS.muted;
                const shareWeight = r.highlight ? 700 : 400;
                return (
                  <tr key={r.group}>
                    <td style={{ fontFamily: B, fontSize: 13, color: rowColor, fontWeight: r.highlight ? 700 : 400, padding: '10px 8px', borderBottom: '1px solid rgba(27,42,74,0.04)' }}>{r.group}</td>
                    <td style={{ fontFamily: B, fontSize: 13, color: rowColor, padding: '10px 8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.04)' }}>{r.cumulative}</td>
                    <td style={{ fontFamily: B, fontSize: 13, color: rowColor, fontWeight: shareWeight, padding: '10px 8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.04)' }}>{r.share}</td>
                    <td style={{ fontFamily: B, fontSize: 13, color: rowColor, fontWeight: shareWeight, padding: '10px 8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.04)' }}>{r.latest}</td>
                  </tr>
                );
              })}
              <tr>
                <td style={{ fontFamily: B, fontSize: 13, fontWeight: 700, color: COLORS.navy, padding: '12px 8px' }}>Total tax gap</td>
                <td style={{ fontFamily: H, fontSize: 15, fontWeight: 700, color: COLORS.navy, padding: '12px 8px', textAlign: 'right' }}>&pound;500.7bn</td>
                <td style={{ fontFamily: B, fontSize: 13, fontWeight: 700, color: COLORS.navy, padding: '12px 8px', textAlign: 'right' }}>100%</td>
                <td style={{ fontFamily: B, fontSize: 13, fontWeight: 700, color: COLORS.navy, padding: '12px 8px', textAlign: 'right' }}>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontFamily: B, fontSize: 12, lineHeight: 1.55, color: COLORS.lightMuted, margin: 0 }}>
          Figures summed from HMRC Measuring Tax Gaps 2025 online data tables (Table 1.4), published 19 June 2025. Cumulative column covers financial years 2010-11 through 2023-24.
        </p>
      </div>

      {/* Sources */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          Sources
        </p>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {SOURCES.map((s) => (
            <li key={s.url} style={{ borderLeft: `3px solid ${COLORS.navyLight}`, paddingLeft: 14 }}>
              <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>
                {s.label}
              </p>
              <p style={{ fontFamily: B, fontSize: 13, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 8px' }}>
                {s.note}
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <SourceArrow />
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    fontFamily: B,
                    fontSize: 13,
                    fontWeight: 600,
                    color: COLORS.chainBlue,
                    textDecoration: 'none',
                    background: 'rgba(35,88,163,0.06)',
                    padding: '5px 12px',
                    borderRadius: 6,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5 1h6v6M11 1L5.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 7v3.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  View original source
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Related investigations */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          Related investigations
        </p>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <Link
              href="/investigations/billionaire-numbers"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                padding: '12px 14px',
                background: 'rgba(35,88,163,0.04)',
                borderRadius: 10,
                textDecoration: 'none',
              }}
            >
              <span style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.navy }}>
                Billionaire numbers (Green Party) &rarr;
              </span>
              <span style={{ fontFamily: B, fontSize: 13, color: COLORS.muted }}>
                Corrected. First Green Party investigation. Letter to the Chancellor whose own cited source contradicted the claim.
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
