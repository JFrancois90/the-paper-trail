import { COLORS } from '@/lib/constants';

interface ImpactBoxProps {
  impact: string;
}

export default function ImpactBox({ impact }: ImpactBoxProps) {
  return (
    <div
      style={{
        background: COLORS.amberLight,
        border: `1px solid rgba(155,108,10,0.12)`,
        borderRadius: 10,
        padding: '18px 20px',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 9,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: COLORS.amber,
          marginBottom: 8,
        }}
      >
        Why this matters
      </div>
      <p
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 14,
          lineHeight: 1.7,
          color: COLORS.amberDark,
          margin: 0,
        }}
      >
        {impact}
      </p>
    </div>
  );
}
