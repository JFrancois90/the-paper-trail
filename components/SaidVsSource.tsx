import { COLORS } from '@/lib/constants';

interface SaidVsSourceProps {
  said: string;
  source: string;
}

export default function SaidVsSource({ said, source }: SaidVsSourceProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid rgba(27,42,74,0.08)',
      }}
    >
      {/* They said */}
      <div
        style={{
          background: COLORS.claimRedLight,
          padding: '16px 18px',
          borderRight: '1px solid rgba(27,42,74,0.06)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 9,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.claimRed,
            marginBottom: 8,
          }}
        >
          They said
        </div>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 13,
            lineHeight: 1.65,
            color: COLORS.claimRedDark,
            margin: 0,
          }}
        >
          {said}
        </p>
      </div>

      {/* Their own source shows */}
      <div
        style={{
          background: COLORS.sourceGreenLight,
          padding: '16px 18px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 9,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.sourceGreen,
            marginBottom: 8,
          }}
        >
          Their own source shows
        </div>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 13,
            lineHeight: 1.65,
            color: COLORS.sourceGreenDark,
            margin: 0,
          }}
        >
          {source}
        </p>
      </div>
    </div>
  );
}
