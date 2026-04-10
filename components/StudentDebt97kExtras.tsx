import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export default function StudentDebt97kExtras() {
  return (
    <>
      {/* The breakdown */}
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
                <th style={{ fontFamily: B, fontSize: 12, fontWeight: 600, color: COLORS.navy, padding: '8px 8px', textAlign: 'left', borderBottom: '1px solid rgba(27,42,74,0.08)' }}>Item</th>
                <th style={{ fontFamily: B, fontSize: 12, fontWeight: 600, color: COLORS.navy, padding: '8px 8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.08)' }}>Per year</th>
                <th style={{ fontFamily: B, fontSize: 12, fontWeight: 600, color: COLORS.navy, padding: '8px 8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.08)' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: 'Tuition fees', perYear: '~£9,000-£9,250', total: '~£36,750' },
                { item: 'Maintenance loan (max, outside London)', perYear: '~£8,200-£8,950', total: '~£34,280' },
                { item: 'Hardship fund (if eligible)', perYear: '~£2,000', total: '~£8,000' },
              ].map((r) => (
                <tr key={r.item}>
                  <td style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, padding: '8px 8px', borderBottom: '1px solid rgba(27,42,74,0.04)' }}>{r.item}</td>
                  <td style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, padding: '8px 8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.04)' }}>{r.perYear}</td>
                  <td style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, padding: '8px 8px', textAlign: 'right', borderBottom: '1px solid rgba(27,42,74,0.04)' }}>{r.total}</td>
                </tr>
              ))}
              <tr>
                <td style={{ fontFamily: B, fontSize: 13, fontWeight: 700, color: COLORS.navy, padding: '10px 8px' }}>Total borrowing (pre-interest)</td>
                <td style={{ padding: '10px 8px' }}></td>
                <td style={{ fontFamily: H, fontSize: 15, fontWeight: 700, color: COLORS.navy, padding: '10px 8px', textAlign: 'right' }}>~£79,030</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: '0 0 8px' }}>
          What the video claims:
        </p>
        <ul style={{ margin: '0 0 20px', padding: '0 0 0 20px', listStyleType: 'disc' }}>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>Balance: £97,592</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>Will repay &ldquo;nearly £50,000&rdquo;</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted }}>Claims that is &ldquo;more than I originally took out&rdquo;</li>
        </ul>

        <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.claimRed, margin: '0 0 8px' }}>
          The problem:
        </p>
        <ul style={{ margin: '0 0 20px', padding: '0 0 0 20px', listStyleType: 'disc' }}>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>£97k balance includes ~£18k of interest</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>What she took out was ~£79,000</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>She will repay ~£50,000</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>£79k minus £50k = £29k written off</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted }}>She pays back <strong style={{ color: COLORS.sourceGreen }}>LESS</strong> than she borrowed</li>
        </ul>

        <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: '0 0 8px' }}>
          The false comparison:
        </p>
        <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>Compares £97k balance against ~£50k tuition only</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>Excludes maintenance and hardship borrowing</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>Maintenance IS borrowing. Hardship IS borrowing.</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted }}>Apples to oranges comparison</li>
        </ul>
      </div>

      {/* Why this matters */}
      <div style={{ background: COLORS.amberLight, borderRadius: 14, border: '1px solid rgba(196,138,10,0.12)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 16px' }}>
          Why this matters
        </p>
        <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 6 }}>Borrowed: ~£79,000. Will repay: ~£50,000</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 6 }}>That is £29,000 less than she borrowed</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 6 }}>Policy claims graduates overpay. This shows the opposite.</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 6 }}>Wrong numbers risk targeting the wrong people</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 6 }}>We take no position on the policy</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.amberDark }}>We are pointing out the input is wrong</li>
        </ul>
      </div>

      {/* Credit where due */}
      <div style={{ background: COLORS.sourceGreenLight, borderRadius: 14, border: '1px solid rgba(26,107,66,0.12)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.sourceGreen, margin: '0 0 12px' }}>
          Credit where due
        </p>
        <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.sourceGreenDark, marginBottom: 4 }}>Engaged directly and in good faith</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.sourceGreenDark, marginBottom: 4 }}>Described it as &ldquo;a language issue&rdquo;</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.sourceGreenDark, marginBottom: 4 }}>Added a caption disclaimer to the post</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.sourceGreenDark }}>That is more than most do</li>
        </ul>
      </div>

      {/* Still outstanding */}
      <div style={{ background: COLORS.amberLight, borderRadius: 14, border: '1px solid rgba(196,138,10,0.12)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 12px' }}>
          Still outstanding
        </p>
        <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 4 }}>Video itself remains unchanged</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 4 }}>£97k headline still in the video</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 4 }}>Caption disclaimer not visible in the video</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 4 }}>Most viewers won&apos;t read the caption</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark, fontWeight: 600 }}>Verdict: pending</li>
        </ul>
      </div>

      {/* We also agree */}
      <div style={{ background: COLORS.navy, borderRadius: 14, padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', margin: '0 0 16px' }}>
          We also agree
        </p>
        <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: '#fff', fontWeight: 600, marginBottom: 8 }}>We agree the student loan system has serious problems</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 4 }}>RPI-linked interest rates are unfair</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 4 }}>Changing terms after students signed up is wrong</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 8 }}>Sarah is right to campaign on this</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 4 }}>But the numbers in the video don&apos;t support the claim</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>Getting it changed means getting the numbers right first</li>
        </ul>
      </div>

      {/* Conversation timeline */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 20px' }}>
          The conversation
        </p>
        <div style={{ position: 'relative', paddingLeft: 24 }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: 5, top: 6, bottom: 6, width: 2, background: 'rgba(27,42,74,0.08)', borderRadius: 1 }} />

          {[
            {
              date: '29 Jan 2026',
              text: 'We sent Sarah a message outlining three concerns with the numbers in her video.',
            },
            {
              date: '1 Feb 2026',
              text: 'Sarah responded. She stated interest accrues from the moment the loan is paid out, and that different students can graduate with different balances depending on when they studied.',
            },
            {
              date: '1 Feb 2026',
              text: 'We acknowledged those points but noted the statements in the video directly compare ~£50k borrowing with a ~£97k balance, which requires ~13% compounding (Plan 2 has never been that high). We provided a full borrowing breakdown.',
            },
            {
              date: '1 Feb 2026',
              text: 'Sarah described it as a "language issue" and said "the amount I took out" referred to core borrowing for the degree (tuition + standard maintenance), not total balance.',
            },
            {
              date: '1 Feb 2026',
              text: 'We pointed out that maintenance borrowing is still borrowing, and excluding it creates a false comparison. Two students had already contacted us confused by the numbers.',
            },
            {
              date: '1 Feb 2026',
              text: 'Sarah agreed to add a caption disclaimer. She noted she is meeting with someone on the board for student finance to lobby for change.',
            },
            {
              date: 'Post-conversation',
              text: 'Caption disclaimer added. Video unchanged.',
            },
          ].map((entry, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < 6 ? 20 : 0 }}>
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: -24,
                  top: 4,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: i === 6 ? COLORS.amber : COLORS.navy,
                  border: '2px solid #fff',
                }}
              />
              <p style={{ fontFamily: B, fontSize: 11, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>
                {entry.date}
              </p>
              <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.muted, margin: 0 }}>
                {entry.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
