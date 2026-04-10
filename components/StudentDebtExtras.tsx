import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export default function StudentDebtExtras() {
  return (
    <>
      {/* Timeline */}
      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          border: '1px solid rgba(27,42,74,0.06)',
          padding: '24px 28px',
          marginBottom: 28,
        }}
      >
        <p style={{ fontFamily: B, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 20px' }}>
          Timeline
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { year: '2013-15', text: 'Enrolled at Bilborough College for A-levels. Did not complete.' },
            { year: '2015-16', text: 'Access to HE diploma at New College Nottingham.' },
            { year: '2017', text: 'Started Law (LLB) at University of Nottingham.' },
            { year: '2017', text: 'Ran in Nottinghamshire County Council election. Came second.', highlight: true },
            { year: '2018', text: 'Failed first year. Required to resit (repeat the year). Only 4.3% of Nottingham students are in this position.' },
            { year: '2019', text: 'Completed resit year. Left university without completing the degree.' },
            { year: '2019', text: 'Elected as MP for Nottingham East.', highlight: true },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 64 }}>
                <span style={{ fontFamily: H, fontSize: 13, fontWeight: 700, color: COLORS.navy, whiteSpace: 'nowrap' }}>
                  {item.year}
                </span>
                {i < 6 && (
                  <div style={{ width: 1.5, height: 24, background: 'rgba(27,42,74,0.1)', margin: '4px 0' }} />
                )}
              </div>
              <p
                style={{
                  fontFamily: B,
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: item.highlight ? COLORS.navy : COLORS.muted,
                  fontWeight: item.highlight ? 600 : 400,
                  margin: '0 0 12px',
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Debt calculation breakdown */}
      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          border: '1px solid rgba(27,42,74,0.06)',
          padding: '24px 28px',
          marginBottom: 28,
        }}
      >
        <p style={{ fontFamily: B, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          The debt calculation
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: B, fontSize: 14 }}>
          <tbody>
            {[
              { label: 'Tuition fee loan', calc: '\u00a39,250 per year \u00d7 2 years', amount: '\u00a318,500' },
              { label: 'Maintenance loan (living costs, at-home rate)', calc: '~\u00a37,500 per year \u00d7 2 years', amount: '~\u00a315,000' },
              { label: 'Interest accrued during study', calc: '', amount: '~\u00a32,500' },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(27,42,74,0.06)' }}>
                <td style={{ padding: '10px 0', color: COLORS.muted }}>{row.label}</td>
                <td style={{ padding: '10px 8px', color: COLORS.lightMuted, fontSize: 13 }}>{row.calc}</td>
                <td style={{ padding: '10px 0', textAlign: 'right', fontWeight: 600, color: COLORS.navy }}>{row.amount}</td>
              </tr>
            ))}
            <tr style={{ borderBottom: '1px solid rgba(27,42,74,0.06)' }}>
              <td style={{ padding: '12px 0', fontWeight: 700, color: COLORS.sourceGreen }}>Total maximum possible</td>
              <td></td>
              <td style={{ padding: '12px 0', textAlign: 'right', fontWeight: 700, fontSize: 16, color: COLORS.sourceGreen }}>~\u00a336,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(27,42,74,0.06)' }}>
              <td style={{ padding: '12px 0', fontWeight: 700, color: COLORS.claimRed }}>Claimed amount</td>
              <td></td>
              <td style={{ padding: '12px 0', textAlign: 'right', fontWeight: 700, fontSize: 16, color: COLORS.claimRed }}>\u00a349,600</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 0', fontWeight: 700, color: COLORS.navy }}>Unexplained difference</td>
              <td></td>
              <td style={{ padding: '12px 0', textAlign: 'right', fontWeight: 700, fontSize: 16, color: COLORS.navy }}>~\u00a313,600</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* LinkedIn discrepancy */}
      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          border: '1px solid rgba(27,42,74,0.06)',
          padding: '24px 28px',
          marginBottom: 28,
        }}
      >
        <p style={{ fontFamily: B, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          LinkedIn discrepancy
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.claimRed, margin: '0 0 4px' }}>
              LinkedIn says: &ldquo;Bachelor of Laws (LLB), 2017-2020&rdquo;
            </p>
            <p style={{ fontFamily: B, fontSize: 14, color: COLORS.muted, margin: 0 }}>
              Reality: Left in 2019 without completing the degree.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.claimRed, margin: '0 0 4px' }}>
              LinkedIn says: &ldquo;A Levels, 2013-2015&rdquo;
            </p>
            <p style={{ fontFamily: B, fontSize: 14, color: COLORS.muted, margin: 0 }}>
              Reality: Did not complete A-levels.
            </p>
          </div>
        </div>
      </div>

      {/* Standards Commissioner */}
      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          border: '1px solid rgba(27,42,74,0.06)',
          padding: '24px 28px',
          marginBottom: 28,
        }}
      >
        <p style={{ fontFamily: B, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 12px' }}>
          Parliamentary Standards Commissioner (ref PCS3735)
        </p>
        <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 8px' }}>
          We raised this with the Parliamentary Standards Commissioner in January 2026.
        </p>
        <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 8px' }}>
          The Commissioner confirmed he will not open a formal investigation at this time.
        </p>
        <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: '0 0 8px' }}>
          However, the response noted that the Commissioner &ldquo;takes careful note of concerns raised by members of the public&rdquo;
          and is &ldquo;concerned by some of the choices of language and tone made by some MPs.&rdquo;
        </p>
        <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: 0 }}>
          The complaint will be considered as part of the Commissioner&apos;s &ldquo;wider work.&rdquo;
        </p>
      </div>
    </>
  );
}
