'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';
import type { Investigation } from '@/data/investigations';
import MultiplierBadge from './MultiplierBadge';
import SaidVsSource from './SaidVsSource';
import PlainEnglishBox from './PlainEnglishBox';
import AnimatedBar from './AnimatedBar';
import WhisperChain from './WhisperChain';
import ImpactBox from './ImpactBox';
import QuestionsBlock from './QuestionsBlock';
import CorrectionBox from './CorrectionBox';
import WatchButton from './WatchButton';

interface InvestigationCardProps {
  investigation: Investigation;
}

export default function InvestigationCard({ investigation }: InvestigationCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const inv = investigation;

  return (
    <article
      style={{
        background: '#fff',
        borderRadius: 14,
        border: '1px solid rgba(27,42,74,0.08)',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered && !expanded ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered && !expanded
          ? '0 12px 40px rgba(27,42,74,0.1)'
          : '0 2px 12px rgba(27,42,74,0.04)',
        transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s cubic-bezier(0.22,1,0.36,1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setExpanded((prev) => !prev);
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
      aria-label={`Investigation: ${inv.claim}. Click to ${expanded ? 'collapse' : 'expand'} details.`}
    >
      {/* Always visible header */}
      <div style={{ padding: '22px 24px 0' }}>
        {/* Top row: badge, party pill, who/date */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: 14,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <MultiplierBadge multiplier={inv.multiplier} label={inv.multiplierLabel} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 11,
                color: COLORS.ink40,
              }}
            >
              {inv.who} &middot; {inv.date}
            </span>
            <WatchButton investigationSlug={inv.slug} investigationTitle={inv.claim} compact />
          </div>
        </div>

        {/* Claim */}
        <h3
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 18,
            fontWeight: 400,
            color: COLORS.ink,
            lineHeight: 1.45,
            margin: '0 0 16px',
            letterSpacing: '-0.01em',
          }}
        >
          &ldquo;{inv.claim}&rdquo;
        </h3>
      </div>

      {/* Said vs source (always visible) */}
      <div style={{ padding: '0 24px 20px' }}>
        <SaidVsSource
          saidQuote={inv.saidQuote}
          sourceLabel={inv.sourceLabel}
          sourceImage={inv.sourceImage}
          sourceOneLiner={inv.sourceOneLiner}
        />
      </div>

      {/* Expandable content */}
      <div
        style={{
          maxHeight: expanded ? 1400 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.7s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <div
          style={{
            padding: '0 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          <PlainEnglishBox analogy={inv.analogy} />
          <AnimatedBar data={inv.barData} expanded={expanded} />
          {inv.whisperChain && (
            <WhisperChain
              chain={inv.whisperChain}
              note={inv.whisperNote}
              expanded={expanded}
            />
          )}
          <ImpactBox impact={inv.impact} />
          <QuestionsBlock questions={inv.questions} />
          {inv.correction && <CorrectionBox text={inv.correction} />}
        </div>
      </div>

      {/* Expand/collapse chevron */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px',
          borderTop: '1px solid rgba(27,42,74,0.05)',
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: expanded ? 'rgba(27,42,74,0.06)' : 'transparent',
            transition: 'background 0.3s ease',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <path
              d="M4 6l4 4 4-4"
              stroke={COLORS.ink40}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </article>
  );
}
