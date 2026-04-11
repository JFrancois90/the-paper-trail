import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

export default function RailtrackExtras() {
  return (
    <>
    <div
      style={{
        background: '#fff',
        borderRadius: 14,
        border: '1px solid rgba(27,42,74,0.06)',
        padding: '24px 28px',
        marginBottom: 28,
      }}
    >
      <p style={{ fontFamily: B, fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.navy, margin: '0 0 16px' }}>
        Where this argument leads
      </p>

      <ul style={{ margin: '0 0 16px', padding: '0 0 0 20px', listStyleType: 'disc' }}>
        <li style={{ fontFamily: B, fontSize: 16, lineHeight: 1.65, color: COLORS.muted }}>The £500m Railtrack claim is not academic. It is being used right now to argue water nationalisation will be cheap.</li>
      </ul>

      <div
        style={{
          background: COLORS.paper,
          borderRadius: 10,
          padding: '16px 20px',
          margin: '0 0 20px',
          borderLeft: `3px solid ${COLORS.navy}`,
        }}
      >
        <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.6, color: COLORS.ink, margin: '0 0 8px', fontStyle: 'italic' }}>
          &ldquo;The shareholders are saying our water companies aren&apos;t worth much money at all. They can&apos;t say it&apos;s not worth anything and then say you&apos;re going to have to charge the taxpayer to bring it back.&rdquo;
        </p>
        <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: 0 }}>
          Zack Polanski, Green Party leader, BBC interview, November 2025
        </p>
      </div>

      <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.65, color: COLORS.muted, margin: '0 0 12px', fontWeight: 600 }}>
        This is the same equity-only argument. Here is what it leaves out:
      </p>

      <ul style={{ fontFamily: B, fontSize: 16, lineHeight: 1.7, color: COLORS.muted, margin: '0 0 20px', paddingLeft: 20 }}>
        <li style={{ marginBottom: 6 }}>Major investors in Thames Water have valued their shares at <strong style={{ color: COLORS.navy }}>zero</strong>. That is the equity (what the shares are worth on paper).</li>
        <li style={{ marginBottom: 6 }}>The debt is still there. Thames Water carries over <strong style={{ color: COLORS.claimRed }}>&pound;15 billion</strong> in debt.</li>
        <li>Equity worth nothing does not mean nationalisation is free. It means you are buying a company with massive debt attached.</li>
      </ul>

      {/* Key conclusion callout */}
      <div
        style={{
          background: COLORS.claimRedLight,
          border: `2px solid rgba(181,48,42,0.15)`,
          borderRadius: 10,
          padding: '18px 22px',
          margin: '0 0 20px',
        }}
      >
        <p style={{ fontFamily: B, fontSize: 17, lineHeight: 1.6, color: COLORS.claimRedDark, margin: 0, fontWeight: 600 }}>
          Saying &ldquo;the shares are worth nothing, so nationalisation is free&rdquo; is the same as saying Railtrack cost &pound;500m. It ignores the debt the public would absorb.
        </p>
      </div>

      <div
        style={{
          background: COLORS.amberLight,
          borderRadius: 10,
          padding: '16px 20px',
          margin: '0 0 16px',
        }}
      >
        <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.6, color: COLORS.amberDark, margin: 0 }}>
          The Railtrack precedent matters because it is the template for this argument.
          Get the precedent wrong, and the policy built on it is wrong by the same multiple.
        </p>
      </div>

      <p style={{ fontFamily: B, fontSize: 13, lineHeight: 1.55, color: COLORS.lightMuted, margin: 0 }}>
        This framing has been amplified by outlets including The Canary (November 2025) without questioning the underlying numbers.
      </p>
    </div>

    {/* Water company iceberg illustration */}
    <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(27,42,74,0.06)', padding: '24px 28px', marginBottom: 28 }}>
      <p style={{ fontFamily: B, fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.navy, margin: '0 0 16px' }}>
        This isn&apos;t just about Railtrack
      </p>
      <img
        src="/images/water-company-iceberg.png"
        alt="Water company nationalisation iceberg — debt below the waterline"
        style={{
          width: '100%',
          maxWidth: 900,
          display: 'block',
          margin: '0 auto 16px',
          borderRadius: 8,
        }}
      />
      <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.6, color: COLORS.muted, margin: 0 }}>
        The same pattern applies to water company nationalisation. Everyone argues about the value above the waterline. Nobody mentions the &pound;20 billion in debt underneath.
      </p>
    </div>
    </>
  );
}
