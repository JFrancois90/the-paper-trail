import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

const cards = [
  'Brexit referendum happened',
  'COVID-19 pandemic',
  'Queen Elizabeth II died',
  'Cost of living crisis',
  'Multiple changes to sentencing and prison policy',
  'Three different Prime Ministers since',
];

export default function ReformProlificExtras() {
  return (
    <div>
      <p
        style={{
          fontFamily: B,
          fontSize: 'var(--inv-section-heading, 14px)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: COLORS.navy,
          marginBottom: 8,
        }}
      >
        How out of date is this?
      </p>
      <p
        style={{
          fontFamily: B,
          fontSize: 'var(--inv-body, 18px)',
          color: COLORS.muted,
          margin: '0 0 24px',
        }}
      >
        To put 2016 in context:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 48 }}>
        {cards.map((text, i) => (
          <div
            key={i}
            style={{
              background: COLORS.navy,
              borderRadius: 10,
              padding: '18px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: 80,
            }}
          >
            <span
              style={{
                fontFamily: B,
                fontSize: 15,
                fontWeight: 600,
                color: '#fff',
                lineHeight: 1.4,
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>

      <p
        style={{
          fontFamily: H,
          fontSize: 22,
          fontWeight: 700,
          color: COLORS.navy,
          lineHeight: 1.5,
          margin: 0,
          paddingTop: 8,
          paddingBottom: 32,
        }}
      >
        The world has changed. The data hasn&apos;t. But the policy is being written as if it has.
      </p>
    </div>
  );
}
