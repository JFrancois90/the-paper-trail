import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

interface ImpactBoxProps {
  impact: string;
}

export default function ImpactBox({ impact }: ImpactBoxProps) {
  // Split into sentences for bullet-point display
  const sentences = impact
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  return (
    <div
      style={{
        background: COLORS.amberLight,
        border: `2px solid rgba(196,138,10,0.18)`,
        borderRadius: 10,
        padding: '24px 28px',
      }}
    >
      <div
        style={{
          fontFamily: B,
          fontSize: 16,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: COLORS.amber,
          marginBottom: 12,
        }}
      >
        Why this matters
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
                color: COLORS.amberDark,
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
            color: COLORS.amberDark,
            margin: 0,
          }}
        >
          {impact}
        </p>
      )}
    </div>
  );
}
