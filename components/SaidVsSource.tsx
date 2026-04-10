import { type ReactNode } from 'react';
import Image from 'next/image';
import { COLORS } from '@/lib/constants';

interface SaidVsSourceProps {
  saidQuote: string;
  sourceLabel?: string;
  sourceImage?: string | null;
  sourceOneLiner: string;
  /** Fallback: full source text with highlights, used when no image */
  sourceFallback?: ReactNode;
}

export default function SaidVsSource({
  saidQuote,
  sourceLabel,
  sourceImage,
  sourceOneLiner,
  sourceFallback,
}: SaidVsSourceProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid rgba(27,42,74,0.08)',
      }}
    >
      {/* They said */}
      <div
        style={{
          background: COLORS.claimRedLight,
          padding: '16px 18px',
          borderRight: '1px solid rgba(27,42,74,0.06)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.claimRed,
            marginBottom: 8,
          }}
        >
          They said
        </div>
        <p
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 15,
            lineHeight: 1.5,
            color: COLORS.claimRedDark,
            margin: 0,
          }}
        >
          &ldquo;{saidQuote}&rdquo;
        </p>
      </div>

      {/* The source */}
      <div
        style={{
          background: COLORS.sourceGreenLight,
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.sourceGreen,
            marginBottom: 8,
          }}
        >
          {sourceLabel || 'The source'}
        </div>

        {/* Image or fallback text */}
        {sourceImage ? (
          <div style={{ marginBottom: 10, borderRadius: 6, overflow: 'hidden' }}>
            <Image
              src={sourceImage}
              alt="Source document evidence"
              width={400}
              height={200}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        ) : sourceFallback ? (
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 12,
              lineHeight: 1.6,
              color: COLORS.sourceGreenDark,
              margin: '0 0 10px',
              flex: 1,
            }}
          >
            {sourceFallback}
          </p>
        ) : (
          /* Placeholder grey box for future screenshots */
          <div
            style={{
              background: 'rgba(26,107,66,0.08)',
              borderRadius: 6,
              padding: '24px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
              flex: 1,
              minHeight: 80,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: COLORS.sourceGreen,
                opacity: 0.5,
              }}
            >
              Source document
            </span>
          </div>
        )}

        {/* One-liner conclusion */}
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 13,
            fontWeight: 600,
            lineHeight: 1.5,
            color: COLORS.sourceGreenDark,
            margin: 0,
          }}
        >
          {sourceOneLiner}
        </p>
      </div>
    </div>
  );
}
