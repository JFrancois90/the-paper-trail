import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export default function ReformTaxExtras() {
  return (
    <>
      {/* How tax bands work */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          How tax bands actually work
        </p>
        <div style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.muted }}>
          <p style={{ margin: '0 0 12px' }}>You don&apos;t pay one rate on all your income. You pay different rates on different slices.</p>
          <p style={{ margin: '0 0 8px', fontWeight: 600, color: COLORS.navy }}>Current system:</p>
          <p style={{ margin: '0 0 4px' }}>First &pound;12,570: <strong>0%</strong> (your personal allowance, you keep all of it)</p>
          <p style={{ margin: '0 0 4px' }}>&pound;12,571 to &pound;50,270: <strong>20%</strong> (basic rate)</p>
          <p style={{ margin: '0 0 12px' }}>&pound;50,271 to &pound;125,140: <strong>40%</strong> (higher rate)</p>
          <p style={{ margin: '0 0 8px', fontWeight: 600, color: COLORS.navy }}>Reform proposed raising the personal allowance to &pound;20,000.</p>
          <p style={{ margin: '0 0 4px' }}>That means an extra &pound;7,430 of income becomes tax-free.</p>
          <p style={{ margin: '0 0 4px' }}>That &pound;7,430 was previously taxed at 20%.</p>
          <p style={{ margin: '0 0 4px' }}>20% of &pound;7,430 = <strong>&pound;1,486</strong>.</p>
          <p style={{ margin: '0 0 4px' }}>Everyone earning above &pound;20,000 saves exactly &pound;1,486.</p>
          <p style={{ margin: 0 }}>The 40% band is completely untouched.</p>
        </div>
      </div>

      {/* Tax tables */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          The proof
        </p>

        {/* Current system */}
        <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: '0 0 8px' }}>Current system:</p>
        <TaxTable
          rows={[
            { band: 'Personal allowance (up to £12,570)', rate: '0%', i15: '£0', i30: '£0', i60: '£0' },
            { band: 'Basic rate (£12,571-£50,270)', rate: '20%', i15: '£486', i30: '£3,486', i60: '£7,540' },
            { band: 'Higher rate (£50,271+)', rate: '40%', i15: '£0', i30: '£0', i60: '£3,892' },
          ]}
          totals={{ i15: '£486', i30: '£3,486', i60: '£11,431' }}
        />

        <div style={{ height: 20 }} />

        {/* Proposed system */}
        <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: '0 0 8px' }}>Proposed (£20K personal allowance):</p>
        <TaxTable
          rows={[
            { band: 'Personal allowance (up to £20,000)', rate: '0%', i15: '£0', i30: '£0', i60: '£0' },
            { band: 'Basic rate (£20,001-£50,270)', rate: '20%', i15: '£0', i30: '£2,000', i60: '£6,054' },
            { band: 'Higher rate (£50,271+)', rate: '40%', i15: '£0', i30: '£0', i60: '£3,892' },
          ]}
          totals={{ i15: '£0', i30: '£2,000', i60: '£9,945' }}
          savings={{ i15: '£486', i30: '£1,486', i60: '£1,486' }}
        />
      </div>

      {/* Outreach */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 12px' }}>
          Our outreach
        </p>
        <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>
          The Canary
        </p>
        <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 12px' }}>
          No response received.
        </p>
        <p style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>
          Richard Murphy (via Instagram, 26 Feb 2026)
        </p>
        <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: 0 }}>
          No response received.
        </p>
      </div>
    </>
  );
}

function TaxTable({
  rows,
  totals,
  savings,
}: {
  rows: Array<{ band: string; rate: string; i15: string; i30: string; i60: string }>;
  totals: { i15: string; i30: string; i60: string };
  savings?: { i15: string; i30: string; i60: string };
}) {
  const B = 'var(--font-sans), sans-serif';
  const th: React.CSSProperties = { fontFamily: B, fontSize: 11, fontWeight: 600, color: COLORS.navy, padding: '8px 6px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.08)' };
  const td: React.CSSProperties = { fontFamily: B, fontSize: 13, color: COLORS.muted, padding: '8px 6px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.04)' };
  const tdLabel: React.CSSProperties = { ...td, textAlign: 'left', fontSize: 12 };

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
        <thead>
          <tr>
            <th style={{ ...th, textAlign: 'left' }}>Band</th>
            <th style={th}>Rate</th>
            <th style={th}>£15K</th>
            <th style={th}>£30K</th>
            <th style={th}>£60K</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={tdLabel}>{r.band}</td>
              <td style={td}>{r.rate}</td>
              <td style={td}>{r.i15}</td>
              <td style={td}>{r.i30}</td>
              <td style={td}>{r.i60}</td>
            </tr>
          ))}
          <tr>
            <td style={{ ...tdLabel, fontWeight: 700, color: COLORS.navy }}>Total tax</td>
            <td style={td}></td>
            <td style={{ ...td, fontWeight: 700, color: COLORS.navy }}>{totals.i15}</td>
            <td style={{ ...td, fontWeight: 700, color: COLORS.navy }}>{totals.i30}</td>
            <td style={{ ...td, fontWeight: 700, color: COLORS.navy }}>{totals.i60}</td>
          </tr>
          {savings && (
            <tr>
              <td style={{ ...tdLabel, fontWeight: 700, color: COLORS.sourceGreen }}>Saving</td>
              <td style={td}></td>
              <td style={{ ...td, fontWeight: 700, color: COLORS.sourceGreen }}>{savings.i15}</td>
              <td style={{ ...td, fontWeight: 700, color: COLORS.sourceGreen }}>{savings.i30}</td>
              <td style={{ ...td, fontWeight: 700, color: COLORS.sourceGreen }}>{savings.i60}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
