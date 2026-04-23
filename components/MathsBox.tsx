import type { ReactNode } from 'react';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

interface MathsBoxProps {
  label: string;
  bullets: ReactNode;
  oneLiner?: string;
}

export default function MathsBox({ label, bullets, oneLiner }: MathsBoxProps) {
  return (
    <div
      style={{
        background: COLORS.sourceGreenLight,
        borderRadius: 10,
        border: '1px solid rgba(27,42,74,0.08)',
        padding: '20px 22px',
        marginTop: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div
        style={{
          fontFamily: B,
          fontSize: 'var(--inv-label, 12px)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: COLORS.sourceGreen,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: B,
          fontSize: 'var(--inv-body, 18px)',
          lineHeight: 1.5,
          color: COLORS.sourceGreenDark,
        }}
      >
        {bullets}
      </div>
      {oneLiner && (
        <p
          style={{
            fontFamily: B,
            fontSize: 'var(--inv-body, 18px)',
            fontWeight: 700,
            lineHeight: 1.5,
            color: COLORS.sourceGreenDark,
            margin: 0,
          }}
        >
          {oneLiner}
        </p>
      )}
    </div>
  );
}
