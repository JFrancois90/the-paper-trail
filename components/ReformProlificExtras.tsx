import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

const timeline = [
  { year: '2016', event: 'Brexit referendum' },
  { year: '2020', event: 'COVID-19 pandemic' },
  { year: '2022', event: 'Queen Elizabeth II dies. Charles III becomes King' },
  { year: '2022', event: 'Cost of living crisis begins' },
  { year: '2023-25', event: 'Multiple changes to sentencing, policing, and prison policy' },
  { year: 'Jul 2025', event: 'Reform publishes this data as current' },
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
          marginBottom: 20,
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 32 }}>
        {timeline.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
              padding: '12px 0',
              borderBottom: i < timeline.length - 1 ? '1px solid rgba(27,42,74,0.06)' : 'none',
            }}
          >
            <span
              style={{
                fontFamily: H,
                fontSize: 16,
                fontWeight: 700,
                color: i === timeline.length - 1 ? COLORS.claimRed : COLORS.navy,
                minWidth: 70,
                flexShrink: 0,
              }}
            >
              {item.year}
            </span>
            <span
              style={{
                fontFamily: B,
                fontSize: 'var(--inv-body, 18px)',
                color: i === timeline.length - 1 ? COLORS.claimRed : COLORS.ink,
                fontWeight: i === timeline.length - 1 ? 700 : 400,
              }}
            >
              {item.event}
            </span>
          </div>
        ))}
      </div>

      <p
        style={{
          fontFamily: H,
          fontSize: 20,
          fontWeight: 700,
          color: COLORS.navy,
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        The world has changed. The data hasn&apos;t. But the policy is being written as if it has.
      </p>
    </div>
  );
}
