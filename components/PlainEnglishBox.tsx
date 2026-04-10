import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

interface PlainEnglishBoxProps {
  analogy: string;
}

export default function PlainEnglishBox({ analogy }: PlainEnglishBoxProps) {
  return (
    <div
      style={{
        background: COLORS.navy,
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
          color: 'rgba(255,255,255,0.5)',
          marginBottom: 10,
        }}
      >
        In plain english
      </div>
      <p
        style={{
          fontFamily: B,
          fontSize: 16,
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
