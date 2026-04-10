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
        <div style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 20 }}>
          <p style={{ margin: '0 0 4px' }}>She says her &ldquo;student loan&rdquo; balance is £97,592.</p>
          <p style={{ margin: '0 0 4px' }}>She says she&apos;ll repay &ldquo;nearly £50,000.&rdquo;</p>
          <p style={{ margin: 0 }}>She says that&apos;s &ldquo;more than I originally took out.&rdquo;</p>
        </div>

        <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.claimRed, margin: '0 0 8px' }}>
          The problem:
        </p>
        <div style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 20 }}>
          <p style={{ margin: '0 0 4px' }}>£97,592 is the balance today, including ~£18,000 of interest that built up during and after university.</p>
          <p style={{ margin: '0 0 8px' }}>But £97,592 is not what she &ldquo;took out.&rdquo; What she took out was ~£79,000.</p>
          <p style={{ margin: '0 0 4px' }}>She will repay ~£50,000.</p>
          <p style={{ margin: '0 0 4px' }}>£79,000 minus £50,000 = £29,000 that gets written off.</p>
          <p style={{ margin: 0 }}>She is paying back <strong style={{ color: COLORS.sourceGreen }}>LESS</strong> than she borrowed. Not more. Less.</p>
        </div>

        <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: '0 0 8px' }}>
          The comparison she makes in the video:
        </p>
        <div style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted }}>
          <p style={{ margin: '0 0 8px' }}>She compares her current balance (~£97k, which includes interest) against &ldquo;what she took out&rdquo; (which she means as ~£50k of core tuition only, excluding maintenance and hardship).</p>
          <p style={{ margin: '0 0 4px' }}>But maintenance IS borrowing. Hardship IS borrowing.</p>
          <p style={{ margin: '0 0 4px' }}>You can&apos;t exclude them and then claim you&apos;re paying back &ldquo;more than you borrowed.&rdquo;</p>
          <p style={{ margin: 0 }}>It&apos;s comparing apples to oranges to reach a conclusion that doesn&apos;t hold.</p>
        </div>
      </div>

      {/* Why this matters */}
      <div style={{ background: COLORS.amberLight, borderRadius: 14, border: '1px solid rgba(196,138,10,0.12)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 16px' }}>
          Why this matters
        </p>
        <div style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.amberDark }}>
          <p style={{ margin: '0 0 12px' }}>The current political argument says poorer households pay back more than they borrow. This case shows the opposite.</p>
          <p style={{ margin: '0 0 12px' }}>Sarah borrowed ~£79,000. She will repay ~£50,000. That&apos;s £29,000 less than she borrowed.</p>
          <p style={{ margin: '0 0 12px' }}>If politicians build policy on the claim that graduates repay more than they borrow, they risk designing solutions for a problem that doesn&apos;t work the way they think.</p>
          <p style={{ margin: '0 0 12px' }}>Worse: policy based on wrong numbers could end up benefiting wealthier students (who repay more of their loan due to higher salaries) at the expense of the lower income students it&apos;s meant to protect.</p>
          <p style={{ margin: '0 0 4px' }}>We take no position on the policy.</p>
          <p style={{ margin: 0 }}>We&apos;re pointing out the input is wrong.</p>
        </div>
      </div>

      {/* Credit where due */}
      <div style={{ background: COLORS.sourceGreenLight, borderRadius: 14, border: '1px solid rgba(26,107,66,0.12)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.sourceGreen, margin: '0 0 12px' }}>
          Credit where due
        </p>
        <div style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.sourceGreenDark }}>
          <p style={{ margin: '0 0 4px' }}>Sarah engaged with our questions directly and in good faith.</p>
          <p style={{ margin: '0 0 4px' }}>She described it as &ldquo;a language issue rather than a maths one.&rdquo;</p>
          <p style={{ margin: '0 0 4px' }}>She added a caption disclaimer to the post.</p>
          <p style={{ margin: 0 }}>That&apos;s more than most do. We credit her for that.</p>
        </div>
      </div>

      {/* Still outstanding */}
      <div style={{ background: COLORS.amberLight, borderRadius: 14, border: '1px solid rgba(196,138,10,0.12)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 12px' }}>
          Still outstanding
        </p>
        <div style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark }}>
          <p style={{ margin: '0 0 4px' }}>The video itself remains unchanged.</p>
          <p style={{ margin: '0 0 4px' }}>The £97k headline and &ldquo;more than I took out&rdquo; claim are still in the video.</p>
          <p style={{ margin: '0 0 4px' }}>The caption disclaimer doesn&apos;t appear in the video itself.</p>
          <p style={{ margin: '0 0 4px' }}>Most viewers won&apos;t read the caption.</p>
          <p style={{ margin: 0, fontWeight: 600 }}>Verdict: pending.</p>
        </div>
      </div>

      {/* We also agree */}
      <div style={{ background: COLORS.navy, borderRadius: 14, padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', margin: '0 0 16px' }}>
          We also agree
        </p>
        <div style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
          <p style={{ margin: '0 0 12px', fontWeight: 600, color: '#fff' }}>We agree the student loan system has serious problems.</p>
          <p style={{ margin: '0 0 4px' }}>Interest rates linked to RPI are unfair.</p>
          <p style={{ margin: '0 0 4px' }}>The government changing loan terms after students signed up is wrong.</p>
          <p style={{ margin: '0 0 12px' }}>Sarah is right to campaign on this.</p>
          <p style={{ margin: '0 0 12px' }}>But the specific numbers in the video don&apos;t support the claim being made. Prospective students deserve accurate information when deciding whether to go to university.</p>
          <p style={{ margin: 0 }}>Getting the system changed requires getting the numbers right first. Otherwise the argument is easy to dismiss.</p>
        </div>
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
