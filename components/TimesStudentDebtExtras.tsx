import Link from 'next/link';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export default function TimesStudentDebtExtras() {
  return (
    <>
      {/* The maths, step by step */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 20px' }}>
          The maths, step by step
        </p>

        <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: '0 0 12px' }}>
          What she borrowed:
        </p>
        <div style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 20 }}>
          <p style={{ margin: '0 0 4px' }}>Undergraduate degree: <strong style={{ color: COLORS.navy }}>£49,000</strong></p>
          <p style={{ margin: '0 0 4px' }}>Master&apos;s degree: <strong style={{ color: COLORS.navy }}>£11,000</strong> (described as &ldquo;extra&rdquo; and &ldquo;since then&rdquo;)</p>
          <p style={{ margin: '0 0 4px', fontWeight: 700, color: COLORS.navy }}>Total borrowed: £60,000</p>
        </div>

        <p style={{ fontFamily: B, fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: '0 0 8px' }}>
          Her current balance: ~£67,000
        </p>

        {/* Two side-by-side calculation boxes */}
        <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
          {/* Her calculation */}
          <div style={{ flex: '1 1 260px', background: COLORS.claimRedLight, borderRadius: 12, padding: '20px 20px' }}>
            <p style={{ fontFamily: B, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.claimRed, margin: '0 0 14px' }}>
              Her calculation
            </p>
            <p style={{ fontFamily: H, fontSize: 18, fontWeight: 700, color: COLORS.claimRedDark, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
              £67,000 / £49,000 = 1.37
            </p>
            <p style={{ fontFamily: H, fontSize: 22, fontWeight: 700, color: COLORS.claimRed, margin: '0 0 10px', letterSpacing: '-0.02em' }}>
              = 37% increase &#10007;
            </p>
            <p style={{ fontFamily: B, fontSize: 13, color: COLORS.claimRedDark, margin: 0, lineHeight: 1.5 }}>
              Excludes the £11k master&apos;s she mentioned in the same sentence.
            </p>
          </div>

          {/* Correct calculation */}
          <div style={{ flex: '1 1 260px', background: COLORS.sourceGreenLight, borderRadius: 12, padding: '20px 20px' }}>
            <p style={{ fontFamily: B, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.sourceGreen, margin: '0 0 14px' }}>
              Correct calculation
            </p>
            <p style={{ fontFamily: H, fontSize: 18, fontWeight: 700, color: COLORS.sourceGreenDark, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
              £67,000 / £60,000 = 1.116
            </p>
            <p style={{ fontFamily: H, fontSize: 22, fontWeight: 700, color: COLORS.sourceGreen, margin: '0 0 10px', letterSpacing: '-0.02em' }}>
              = 11.6% increase &#10003;
            </p>
            <p style={{ fontFamily: B, fontSize: 13, color: COLORS.sourceGreenDark, margin: 0, lineHeight: 1.5 }}>
              Includes all borrowing she described.
            </p>
          </div>
        </div>
      </div>

      {/* The key quote */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          The key quote
        </p>

        <div style={{ borderLeft: `3px solid ${COLORS.navy}`, paddingLeft: 20, marginBottom: 20 }}>
          <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.navy, margin: '0 0 4px' }}>
            &ldquo;I left university having borrowed £49,000.
          </p>
          <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.navy, margin: 0 }}>
            <strong style={{ color: COLORS.claimRed }}>Since then</strong>, I added <strong style={{ color: COLORS.claimRed }}>an extra</strong> £11,000 for a master&apos;s degree.&rdquo;
          </p>
        </div>

        <div style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted }}>
          <p style={{ margin: '0 0 8px' }}><strong style={{ color: COLORS.navy }}>&ldquo;Since then&rdquo;</strong> = after the first amount.</p>
          <p style={{ margin: '0 0 8px' }}><strong style={{ color: COLORS.navy }}>&ldquo;An extra&rdquo;</strong> = additional, on top of.</p>
          <p style={{ margin: '0 0 8px' }}><strong style={{ color: COLORS.navy }}>&ldquo;£11,000&rdquo;</strong> = clearly a separate borrowing event.</p>
          <p style={{ margin: '0 0 4px' }}>These are presented as two separate borrowings in the same script.</p>
          <p style={{ margin: 0 }}>The 37% figure only works by pretending the second one doesn&apos;t exist.</p>
        </div>
      </div>

      {/* We also agree */}
      <div style={{ background: COLORS.navy, borderRadius: 14, padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', margin: '0 0 16px' }}>
          We also agree
        </p>
        <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: '#fff', fontWeight: 600, marginBottom: 8 }}>We agree the student loan system has serious problems</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 4 }}>RPI-linked interest rates are unfair</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 4 }}>Changing terms after students signed is wrong</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 4 }}>Plan 2 rates nearly double Plan 5</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 4 }}>Overstating the problem makes it easier to dismiss</li>
          <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>Get the numbers right first</li>
        </ul>
      </div>

      {/* Related investigations */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 16px' }}>
          Related investigations
        </p>

        <ul style={{ margin: '0 0 20px', padding: '0 0 0 20px', listStyleType: 'disc' }}>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>Third student loan investigation on The Paper Trail</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>All three show the same pattern</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted, marginBottom: 4 }}>The public debate numbers don&apos;t match the maths</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.muted }}>MP, influencer, national newspaper. Same problem.</li>
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link
            href="/investigations/student-debt-claim"
            style={{
              textDecoration: 'none',
              background: COLORS.paper,
              borderRadius: 10,
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <div>
              <p style={{ fontFamily: H, fontSize: 14, fontWeight: 700, color: COLORS.navy, margin: '0 0 4px' }}>
                Nadia Whittome MP
              </p>
              <p style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, margin: 0 }}>
                Claimed £49,600 debt. £13.6k above max possible.
              </p>
            </div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
              <path d="M5 3l4 4-4 4" stroke={COLORS.ink40} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/investigations/student-debt-97k"
            style={{
              textDecoration: 'none',
              background: COLORS.paper,
              borderRadius: 10,
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <div>
              <p style={{ fontFamily: H, fontSize: 14, fontWeight: 700, color: COLORS.navy, margin: '0 0 4px' }}>
                @yourmoneymatesarah
              </p>
              <p style={{ fontFamily: B, fontSize: 13, color: COLORS.muted, margin: 0 }}>
                £97k balance. Claims paying back more than borrowed.
              </p>
            </div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
              <path d="M5 3l4 4-4 4" stroke={COLORS.ink40} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Outreach */}
      <div style={{ background: COLORS.amberLight, borderRadius: 14, border: '1px solid rgba(196,138,10,0.12)', padding: '24px 28px', marginBottom: 28 }}>
        <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 12px' }}>
          Outreach
        </p>
        <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 4 }}>Contacted Matilda Davies via LinkedIn, 10 Feb 2026</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 4 }}>No response received</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 4 }}>Contacted The Times via Instagram DM, 10 Feb 2026</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 4 }}>No response received</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 4 }}>Video remains live on The Times&apos; Instagram</li>
          <li style={{ fontFamily: B, fontSize: 14, lineHeight: 1.7, color: COLORS.amberDark }}>37% figure has not been corrected</li>
        </ul>
      </div>
    </>
  );
}
