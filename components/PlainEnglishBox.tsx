import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

interface PlainEnglishBoxProps {
  analogy: string;
}

export default function PlainEnglishBox({ analogy }: PlainEnglishBoxProps) {
  const bullets = analogy
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim().replace(/\.$/, ''))
    .filter((s) => s.length > 0);

  return (
    <div
      style={{
        background: COLORS.navy,
        borderRadius: 10,
        padding: '28px 32px',
      }}
    >
      <div
        style={{
          fontFamily: B,
          fontSize: 'var(--inv-section-heading, 14px)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,0.5)',
          marginBottom: 14,
        }}
      >
        In plain english
      </div>
      <ul
        style={{
          margin: 0,
          padding: '0 0 0 20px',
          listStyleType: 'disc',
        }}
      >
        {bullets.map((bullet, i) => (
          <li
            key={i}
            style={{
              fontFamily: B,
              fontSize: 'var(--inv-body, 18px)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.92)',
              marginBottom: i < bullets.length - 1 ? 6 : 0,
            }}
          >
            {bullet.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
              part.startsWith('**') && part.endsWith('**') ? (
                <strong key={j} style={{ fontWeight: 700, color: '#fff' }}>{part.slice(2, -2)}</strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
