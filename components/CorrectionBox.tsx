import { COLORS } from '@/lib/constants';

interface CorrectionBoxProps {
  text: string;
  date?: string;
}

export default function CorrectionBox({ text, date = 'Dec 2025' }: CorrectionBoxProps) {
  return (
    <div
      style={{
        background: COLORS.sourceGreenLight,
        border: '1px solid rgba(26,107,66,0.12)',
        borderRadius: 10,
        padding: '18px 20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 8,
        }}
      >
        <span style={{ fontSize: 14 }} aria-hidden="true">
          &#10003;
        </span>
        <span
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.sourceGreen,
          }}
        >
          Correction issued, {date}
        </span>
      </div>
      <p
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 14,
          lineHeight: 1.7,
          color: COLORS.sourceGreenDark,
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}
