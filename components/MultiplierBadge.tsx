import { COLORS } from '@/lib/constants';

interface MultiplierBadgeProps {
  multiplier: string;
  label: string;
}

export default function MultiplierBadge({ multiplier, label }: MultiplierBadgeProps) {
  const isFalse = multiplier === 'False';
  const bg = isFalse ? COLORS.claimRedLight : COLORS.navyLight;
  const color = isFalse ? COLORS.claimRed : COLORS.navy;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: bg,
        borderRadius: 6,
        padding: '6px 14px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-serif), serif',
          fontSize: 'var(--inv-badge, 18px)',
          color,
          letterSpacing: '-0.02em',
        }}
      >
        {multiplier}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 'var(--inv-badge-sm, 14px)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: COLORS.ink60,
        }}
      >
        {label}
      </span>
    </div>
  );
}
