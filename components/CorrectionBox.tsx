import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

interface CorrectionBoxProps {
  text: string;
  date?: string;
}

export default function CorrectionBox({ text, date = 'Dec 2025' }: CorrectionBoxProps) {
  // Split correction text into sentences for bullet-point display
  const sentences = text
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  return (
    <div
      style={{
        background: COLORS.sourceGreenLight,
        border: '2px solid rgba(26,107,66,0.15)',
        borderRadius: 10,
        padding: '24px 28px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 12,
        }}
      >
        <span style={{ fontSize: 16 }} aria-hidden="true">
          &#10003;
        </span>
        <span
          style={{
            fontFamily: B,
            fontSize: 14,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.sourceGreen,
          }}
        >
          Correction issued, {date}
        </span>
      </div>
      {sentences.length > 1 ? (
        <ul
          style={{
            margin: 0,
            padding: '0 0 0 20px',
            listStyleType: 'disc',
          }}
        >
          {sentences.map((sentence, i) => (
            <li
              key={i}
              style={{
                fontFamily: B,
                fontSize: 16,
                lineHeight: 1.7,
                color: COLORS.sourceGreenDark,
                marginBottom: i < sentences.length - 1 ? 6 : 0,
              }}
            >
              {sentence}
            </li>
          ))}
        </ul>
      ) : (
        <p
          style={{
            fontFamily: B,
            fontSize: 16,
            lineHeight: 1.7,
            color: COLORS.sourceGreenDark,
            margin: 0,
          }}
        >
          {text}
        </p>
      )}
    </div>
  );
}
