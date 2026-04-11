import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

const timeline = [
  { year: '2017', event: 'Theresa May was Prime Minister' },
  { year: '2017', event: 'Article 50 had been triggered 3 months earlier' },
  { year: '2020', event: 'COVID was 3 years away' },
  { year: '2022', event: 'The Queen was alive' },
  { year: '2017', event: 'Trump was 5 months into his first term' },
  { year: '2017', event: 'The iPhone X hadn\'t been released yet' },
];

export default function ReformStopSearchExtras() {
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
        To put June 2017 in context:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginBottom: 32 }}>
        {timeline.map((item, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              border: '1px solid rgba(27,42,74,0.08)',
              borderRadius: 10,
              padding: '14px 18px',
            }}
          >
            <span
              style={{
                fontFamily: B,
                fontSize: 'var(--inv-body, 18px)',
                color: COLORS.ink,
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
        This article is 8 years old. It was written before the pandemic, before the current King, and before the government it was criticising left office. It&apos;s the source behind the first bullet of a national policing policy.
      </p>
    </div>
  );
}
