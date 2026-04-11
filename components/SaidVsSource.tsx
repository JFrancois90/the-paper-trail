'use client';

import { type ReactNode, useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { COLORS } from '@/lib/constants';

interface SaidVsSourceProps {
  saidQuote: string;
  sourceLabel?: string;
  sourceImage?: string | null;
  sourceOneLiner: string;
  sourceFallback?: ReactNode;
}

export default function SaidVsSource({
  saidQuote,
  sourceLabel,
  sourceImage,
  sourceOneLiner,
  sourceFallback,
}: SaidVsSourceProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return (
      <MobileSwipeCards
        saidQuote={saidQuote}
        sourceLabel={sourceLabel}
        sourceImage={sourceImage}
        sourceOneLiner={sourceOneLiner}
        sourceFallback={sourceFallback}
      />
    );
  }

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
      <SaidPanel saidQuote={saidQuote} />
      <SourcePanel
        sourceLabel={sourceLabel}
        sourceImage={sourceImage}
        sourceOneLiner={sourceOneLiner}
        sourceFallback={sourceFallback}
      />
    </div>
  );
}

function MobileSwipeCards({
  saidQuote,
  sourceLabel,
  sourceImage,
  sourceOneLiner,
  sourceFallback,
}: SaidVsSourceProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(Math.min(Math.max(idx, 0), 1));
  }, []);

  return (
    <div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          borderRadius: 14,
        }}
      >
        <style>{`.svs-card::-webkit-scrollbar { display: none; }`}</style>
        {/* They Said card */}
        <div
          className="svs-card"
          style={{
            flex: '0 0 100%',
            scrollSnapAlign: 'center',
            background: COLORS.claimRedLight,
            padding: '24px 20px',
            boxSizing: 'border-box',
            minHeight: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 14,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: COLORS.claimRed,
              marginBottom: 12,
            }}
          >
            They said
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 18,
              lineHeight: 1.5,
              color: COLORS.claimRedDark,
              margin: 0,
            }}
          >
            &ldquo;{saidQuote}&rdquo;
          </p>
        </div>

        {/* Source card */}
        <div
          className="svs-card"
          style={{
            flex: '0 0 100%',
            scrollSnapAlign: 'center',
            background: COLORS.sourceGreenLight,
            padding: '24px 20px',
            boxSizing: 'border-box',
            minHeight: 200,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 14,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: COLORS.sourceGreen,
              marginBottom: 12,
            }}
          >
            {sourceLabel || 'The source'}
          </div>

          {sourceImage ? (
            <div style={{ marginBottom: 10, borderRadius: 6, overflow: 'hidden' }}>
              <Image
                src={sourceImage}
                alt="Source document evidence"
                width={400}
                height={200}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          ) : sourceFallback ? (
            <div
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 17,
                lineHeight: 1.5,
                color: COLORS.sourceGreenDark,
                margin: '0 0 12px',
                flex: 1,
              }}
            >
              {sourceFallback}
            </div>
          ) : null}

          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 16,
              fontWeight: 700,
              lineHeight: 1.5,
              color: COLORS.sourceGreenDark,
              margin: 0,
            }}
          >
            {sourceOneLiner}
          </p>
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 10 }}>
        {[0, 1].map((i) => (
          <span
            key={i}
            style={{
              width: activeIndex === i ? 20 : 8,
              height: 8,
              borderRadius: 4,
              background: activeIndex === i
                ? (i === 0 ? COLORS.claimRed : COLORS.sourceGreen)
                : 'rgba(27,42,74,0.15)',
              transition: 'all 0.25s ease',
            }}
          />
        ))}
      </div>
      <p
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 12,
          color: 'rgba(27,42,74,0.35)',
          textAlign: 'center',
          margin: '6px 0 0',
        }}
      >
        Swipe to compare &rarr;
      </p>
    </div>
  );
}

function SaidPanel({ saidQuote }: { saidQuote: string }) {
  return (
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
          fontSize: 17,
          lineHeight: 1.5,
          color: COLORS.claimRedDark,
          margin: 0,
        }}
      >
        &ldquo;{saidQuote}&rdquo;
      </p>
    </div>
  );
}

function SourcePanel({
  sourceLabel,
  sourceImage,
  sourceOneLiner,
  sourceFallback,
}: Omit<SaidVsSourceProps, 'saidQuote'>) {
  return (
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

      {sourceImage ? (
        <div style={{ marginBottom: 10, borderRadius: 6, overflow: 'hidden' }}>
          <Image
            src={sourceImage}
            alt="Source document evidence"
            width={400}
            height={200}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      ) : sourceFallback ? (
        <div
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 17,
            lineHeight: 1.5,
            color: COLORS.sourceGreenDark,
            margin: '0 0 10px',
            flex: 1,
          }}
        >
          {sourceFallback}
        </div>
      ) : (
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

      <p
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 15,
          fontWeight: 700,
          lineHeight: 1.5,
          color: COLORS.sourceGreenDark,
          margin: 0,
        }}
      >
        {sourceOneLiner}
      </p>
    </div>
  );
}
