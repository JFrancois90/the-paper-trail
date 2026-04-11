'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export default function StudentDebt97kExtras() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {/* Summary */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '28px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 'var(--inv-section-heading, 14px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          The short version
        </p>
        <p style={{ fontFamily: B, fontSize: 'var(--inv-body, 18px)', lineHeight: 1.7, color: COLORS.muted, margin: '0 0 16px' }}>
          She borrowed ~&pound;79,000 over 4 years (tuition, maintenance, hardship). She will repay ~&pound;50,000. The rest gets written off after 30 years. That is &pound;29,000 less than she borrowed. The video says the opposite.
        </p>
        <p style={{ fontFamily: H, fontSize: 20, fontWeight: 700, color: COLORS.navy, margin: '0 0 20px' }}>
          &pound;79k borrowed. &pound;50k repaid. &pound;29k written off. She pays back less, not more.
        </p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          style={{
            fontFamily: B,
            fontSize: 15,
            fontWeight: 600,
            color: COLORS.chainBlue,
            background: 'rgba(35,88,163,0.06)',
            border: '1px solid rgba(35,88,163,0.15)',
            borderRadius: 8,
            padding: '12px 24px',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}
        >
          {showDetails ? 'Hide the breakdown' : 'Want to see the full breakdown?'} {showDetails ? '\u25B2' : '\u25BC'}
        </button>
      </div>

      {/* Expandable detail */}
      {showDetails && (
        <>
          <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
            <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 20px' }}>
              The breakdown
            </p>
            <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: '0 0 12px' }}>
              What she borrowed (4 years, 2016-2020):
            </p>
            <div style={{ overflowX: 'auto', marginBottom: 20 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 400 }}>
                <thead>
                  <tr>
                    <th style={{ fontFamily: B, fontSize: 12, fontWeight: 600, color: COLORS.navy, padding: '8px', textAlign: 'left', borderBottom: '1px solid rgba(27,42,74,0.08)' }}>Item</th>
                    <th style={{ fontFamily: B, fontSize: 12, fontWeight: 600, color: COLORS.navy, padding: '8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.08)' }}>Per year</th>
                    <th style={{ fontFamily: B, fontSize: 12, fontWeight: 600, color: COLORS.navy, padding: '8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.08)' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: 'Tuition fees', perYear: '~&pound;9,000-&pound;9,250', total: '~&pound;36,750' },
                    { item: 'Maintenance loan (max, outside London)', perYear: '~&pound;8,200-&pound;8,950', total: '~&pound;34,280' },
                    { item: 'Hardship fund (if eligible)', perYear: '~&pound;2,000', total: '~&pound;8,000' },
                  ].map((r) => (
                    <tr key={r.item}>
                      <td style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, padding: '8px', borderBottom: '1px solid rgba(27,42,74,0.04)' }}>{r.item}</td>
                      <td style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, padding: '8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.04)' }} dangerouslySetInnerHTML={{ __html: r.perYear }} />
                      <td style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, padding: '8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.04)' }} dangerouslySetInnerHTML={{ __html: r.total }} />
                    </tr>
                  ))}
                  <tr>
                    <td style={{ fontFamily: B, fontSize: 13, fontWeight: 700, color: COLORS.navy, padding: '10px 8px' }}>Total borrowing (pre-interest)</td>
                    <td style={{ padding: '10px 8px' }}></td>
                    <td style={{ fontFamily: H, fontSize: 15, fontWeight: 700, color: COLORS.navy, padding: '10px 8px', textAlign: 'right' }}>~&pound;79,030</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.claimRed, margin: '0 0 8px' }}>The problem:</p>
            <ul style={{ margin: '0 0 20px', padding: '0 0 0 20px', listStyleType: 'disc' }}>
              <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>&pound;97k balance includes ~&pound;18k of interest</li>
              <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>What she took out was ~&pound;79,000</li>
              <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>She will repay ~&pound;50,000</li>
              <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>&pound;79k minus &pound;50k = &pound;29k written off</li>
              <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted }}>She pays back <strong style={{ color: COLORS.sourceGreen }}>LESS</strong> than she borrowed</li>
            </ul>
          </div>

          {/* Credit where due */}
          <div style={{ background: COLORS.sourceGreenLight, borderRadius: 14, border: '1px solid rgba(26,107,66,0.12)', padding: '24px 28px', marginBottom: 28 }}>
            <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.sourceGreen, margin: '0 0 12px' }}>Credit where due</p>
            <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
              <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.sourceGreenDark, marginBottom: 4 }}>Engaged directly and in good faith</li>
              <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.sourceGreenDark, marginBottom: 4 }}>Added a caption disclaimer to the post</li>
              <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.sourceGreenDark }}>That is more than most do</li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
