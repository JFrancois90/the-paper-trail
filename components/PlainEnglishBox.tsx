import { COLORS } from '@/lib/constants';

interface PlainEnglishBoxProps {
  analogy: string;
}

export default function PlainEnglishBox({ analogy }: PlainEnglishBoxProps) {
  return (
    <div
      style={{
        background: COLORS.navy,
        borderRadius: 10,
        padding: '18px 20px',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 12,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,0.5)',
          marginBottom: 8,
        }}
      >
        In plain english
      </div>
      <p
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 14,
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.92)',
          margin: 0,
        }}
      >
        {analogy}
      </p>
    </div>
  );
}
