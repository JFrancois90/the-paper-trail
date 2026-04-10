import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export default function RailtrackExtras() {
  return (
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
        Where this argument leads
      </p>

      <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.65, color: COLORS.muted, margin: '0 0 12px' }}>
        The &pound;500m Railtrack claim isn&apos;t academic. It&apos;s being used right now to argue that water nationalisation will be cheap.
      </p>

      <div
        style={{
          background: COLORS.paper,
          borderRadius: 10,
          padding: '16px 20px',
          margin: '0 0 16px',
          borderLeft: `3px solid ${COLORS.navy}`,
        }}
      >
        <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.ink, margin: '0 0 8px', fontStyle: 'italic' }}>
          &ldquo;The shareholders are saying our water companies aren&apos;t worth much money at all. They can&apos;t say it&apos;s not worth anything and then say you&apos;re going to have to charge the taxpayer to bring it back.&rdquo;
        </p>
        <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: 0 }}>
          Zack Polanski, Green Party leader, BBC interview, November 2025
        </p>
      </div>

      <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.65, color: COLORS.muted, margin: '0 0 12px' }}>
        This is the same equity-only argument.
      </p>

      <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.65, color: COLORS.muted, margin: '0 0 8px' }}>
        Major investors in Thames Water have valued their shares at zero. That&apos;s the equity (what the shares are worth on paper).
      </p>
      <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.65, color: COLORS.muted, margin: '0 0 8px' }}>
        The debt is still there. Thames Water carries over <span className="highlight-red">&pound;15 billion</span> in debt.
      </p>
      <p style={{ fontFamily: B, fontSize: 15, lineHeight: 1.65, color: COLORS.muted, margin: '0 0 16px' }}>
        Saying &ldquo;the shares are worth nothing, so nationalisation is free&rdquo; is the same as saying Railtrack cost &pound;500m. It ignores the debt the public would absorb.
      </p>

      <div
        style={{
          background: COLORS.amberLight,
          borderRadius: 10,
          padding: '16px 20px',
          margin: '0 0 16px',
        }}
      >
        <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.6, color: COLORS.amberDark, margin: 0 }}>
          The Railtrack precedent matters because it&apos;s the template for this argument.
          Get the precedent wrong, and the policy built on it is wrong by the same multiple.
        </p>
      </div>

      <p style={{ fontFamily: B, fontSize: 13, lineHeight: 1.55, color: COLORS.lightMuted, margin: 0 }}>
        This framing has been amplified by outlets including The Canary (November 2025) without questioning the underlying numbers.
      </p>
    </div>
  );
}
