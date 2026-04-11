'use client';

import { useState, useEffect, useCallback } from 'react';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

interface InvestigationProgressProps {
  claim: string;
  multiplier: string;
  multiplierLabel: string;
  responseStatus: string | null;
  sectionNames: string[];
}

export default function InvestigationProgress({
  claim,
  multiplier,
  multiplierLabel,
  responseStatus,
  sectionNames,
}: InvestigationProgressProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showVerdict, setShowVerdict] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleScroll = useCallback(() => {
    const container = document.querySelector('.inv-snap-container');
    if (!container) return;
    const scrollTop = container.scrollTop;
    const sectionHeight = container.clientHeight;
    const idx = Math.round(scrollTop / sectionHeight);
    setActiveIdx(Math.min(Math.max(idx, 0), sectionNames.length - 1));
    setShowVerdict(scrollTop > sectionHeight * 0.5);
  }, [sectionNames.length]);

  useEffect(() => {
    const container = document.querySelector('.inv-snap-container');
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const goToSection = (idx: number) => {
    const container = document.querySelector('.inv-snap-container');
    if (!container) return;
    container.scrollTo({ top: idx * container.clientHeight, behavior: 'smooth' });
  };

  // Truncate claim for verdict bar
  const shortClaim = claim.length > 40 ? claim.substring(0, 40) + '...' : claim;

  return (
    <>
      {/* Sticky verdict bar */}
      <div
        style={{
          position: 'fixed',
          top: showVerdict ? 72 : -60,
          left: 0,
          right: 0,
          zIndex: 90,
          background: 'rgba(27,42,74,0.97)',
          backdropFilter: 'blur(10px)',
          padding: '8px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          transition: 'top 0.3s ease',
          boxShadow: showVerdict ? '0 2px 12px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        {!isMobile && (
          <span
            style={{
              fontFamily: B,
              fontSize: 13,
              color: 'rgba(255,255,255,0.7)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: 300,
            }}
          >
            {shortClaim}
          </span>
        )}
        <span
          style={{
            fontFamily: B,
            fontSize: 12,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#fff',
            background: COLORS.claimRed,
            padding: '4px 10px',
            borderRadius: 4,
            whiteSpace: 'nowrap',
          }}
        >
          {multiplier} {multiplierLabel}
        </span>
        {responseStatus && (
          <span
            style={{
              fontFamily: B,
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'rgba(255,255,255,0.5)',
              whiteSpace: 'nowrap',
            }}
          >
            {responseStatus}
          </span>
        )}
      </div>

      {/* Progress dots (desktop only: right side) */}
      {isMobile ? null : (
        <div
          style={{
            position: 'fixed',
            right: 24,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 85,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {sectionNames.map((name, i) => (
            <div
              key={i}
              onClick={() => goToSection(i)}
              title={name}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: i === activeIdx ? COLORS.navy : 'rgba(27,42,74,0.2)',
                cursor: 'pointer',
                transition: 'background 0.3s ease, transform 0.2s ease',
                transform: i === activeIdx ? 'scale(1.3)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
