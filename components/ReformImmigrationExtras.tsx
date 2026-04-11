import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

const cards = [
  'Sep 2025: CPS publishes report estimating \u00a3234bn lifetime fiscal cost',
  'After publication: OBR revises the fiscal data definitions used in the report',
  'CPS withdraws the figure: states the cost estimates "should no longer be used"',
  'March 2024: OBR analysis shows higher migration reduces borrowing by \u00a313-20bn over 5 years',
  'Still live on Reform\'s website: the \u00a3234bn figure remains on the immigration policy page',
];

export default function ReformImmigrationExtras() {
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
        What happened
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
        The source pulled the number. The OBR says the opposite. Reform continues to use it.
      </p>
    </div>
  );
}
