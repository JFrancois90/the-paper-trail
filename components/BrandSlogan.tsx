import { COLORS } from '@/lib/constants';

interface BrandSloganProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

const sizes = {
  sm: { fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.3 },
  md: { fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.15 },
  lg: { fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.08 },
};

export default function BrandSlogan({ size = 'lg', theme = 'dark' }: BrandSloganProps) {
  const s = sizes[size];
  const baseColor = theme === 'dark' ? '#fff' : COLORS.navy;

  return (
    <span
      style={{
        fontFamily: 'var(--font-heading), sans-serif',
        fontSize: s.fontSize,
        fontWeight: 700,
        lineHeight: s.lineHeight,
        letterSpacing: '-0.03em',
        color: baseColor,
        display: 'inline',
      }}
    >
      Taking{' '}
      <span style={{ position: 'relative', display: 'inline-block', color: COLORS.claimRed }}>
        politics
        {/* Hand-drawn strikethrough SVG */}
        <svg
          viewBox="0 0 120 12"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            left: '-2%',
            right: '-2%',
            top: '45%',
            width: '104%',
            height: '0.15em',
            transform: 'rotate(-1.5deg)',
            overflow: 'visible',
          }}
        >
          <path
            d="M2 7 C 15 4, 30 9, 45 6 S 70 3, 85 7 S 105 4, 118 6"
            fill="none"
            stroke={COLORS.claimRed}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </span>
      <br />
      out of{' '}
      <span className="highlight" style={{ color: theme === 'dark' ? '#fff' : COLORS.navy }}>
        politics
      </span>
    </span>
  );
}
