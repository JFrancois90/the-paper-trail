'use client';

import { COLORS } from '@/lib/constants';

interface BarDatum {
  label: string;
  sublabel: string;
  value: number;
  color: string;
  fmt: string;
}

interface AnimatedBarProps {
  data: BarDatum[];
  expanded: boolean;
}

export default function AnimatedBar({ data, expanded }: AnimatedBarProps) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 'var(--inv-section-heading, 14px)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: COLORS.ink40,
          marginBottom: 4,
        }}
      >
        The numbers
      </div>
      {data.map((d, i) => (
        <div key={i}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 6,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 'var(--inv-bar-label, 16px)',
                  fontWeight: 600,
                  color: COLORS.ink,
                }}
              >
                {d.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 14,
                  color: COLORS.muted,
                }}
              >
                {d.sublabel}
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 'var(--inv-bar-amount, 20px)',
                fontWeight: 700,
                color: d.color,
                letterSpacing: '-0.02em',
              }}
            >
              {d.fmt}
            </span>
          </div>
          <div
            style={{
              height: 16,
              borderRadius: 8,
              background: 'rgba(27,42,74,0.06)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                borderRadius: 8,
                background: d.color,
                width: expanded ? `${maxValue > 0 ? (d.value / maxValue) * 100 : 0}%` : '0%',
                transition: `width 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
