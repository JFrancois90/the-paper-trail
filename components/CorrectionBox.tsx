import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

interface CorrectionBoxProps {
  text: string;
  date?: string;
  /** 'correction' = green (default), 'disclaimer' = amber */
  variant?: 'correction' | 'disclaimer';
  /** optional override for the top label (replaces the default "Correction issued"/"Disclaimer added" text) */
  labelOverride?: string;
}

export default function CorrectionBox({ text, date = 'Dec 2025', variant = 'correction', labelOverride }: CorrectionBoxProps) {
  const isDisclaimer = variant === 'disclaimer';
  const bg = isDisclaimer ? COLORS.amberLight : COLORS.sourceGreenLight;
  const borderColor = isDisclaimer ? 'rgba(196,138,10,0.18)' : 'rgba(26,107,66,0.15)';
  const accentColor = isDisclaimer ? COLORS.amber : COLORS.sourceGreen;
  const textColor = isDisclaimer ? COLORS.amberDark : COLORS.sourceGreenDark;
  const label = labelOverride ?? (isDisclaimer ? `Disclaimer added, ${date}` : `Correction issued, ${date}`);
  const icon = isDisclaimer ? '\u26A0' : '\u2713';

  // Split correction text into sentences for bullet-point display
  const sentences = text
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  return (
    <div
      style={{
        background: bg,
        border: `2px solid ${borderColor}`,
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
          {icon}
        </span>
        <span
          style={{
            fontFamily: B,
            fontSize: 14,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: accentColor,
          }}
        >
          {label}
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
                color: textColor,
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
            color: textColor,
            margin: 0,
          }}
        >
          {text}
        </p>
      )}
    </div>
  );
}
