'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

interface StatusBadgeProps {
  status: 'invited' | 'no-response' | 'responded' | 'declined';
  correction: string | null;
  invited: string;
  dateInvited?: string;
  responseText?: string;
  /** compact mode for investigation cards */
  compact?: boolean;
  /** optional override for the badge label (e.g. "Partially corrected") */
  labelOverride?: string;
  /** optional override for the tooltip text */
  tooltipOverride?: string;
}

function getLabel(status: string, correction: string | null) {
  if (correction) return 'Corrected \uD83D\uDC4F';
  if (status === 'responded') return 'Responded';
  if (status === 'declined') return 'Declined \u274C';
  if (status === 'no-response') return 'No response \u23F3';
  return 'Invited';
}

function getColor(status: string, correction: string | null) {
  if (correction) return COLORS.sourceGreen;
  if (status === 'responded') return '#2358a3';
  if (status === 'declined') return COLORS.claimRed;
  if (status === 'no-response') return COLORS.claimRed;
  return COLORS.amber;
}

function getBg(status: string, correction: string | null) {
  if (correction) return COLORS.sourceGreenLight;
  if (status === 'responded') return 'rgba(35,88,163,0.08)';
  if (status === 'declined') return COLORS.claimRedLight;
  if (status === 'no-response') return COLORS.claimRedLight;
  return COLORS.amberLight;
}

export default function StatusBadge({
  status,
  correction,
  invited,
  dateInvited,
  responseText,
  compact = false,
  labelOverride,
  tooltipOverride,
}: StatusBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const label = labelOverride ?? getLabel(status, correction);
  const color = getColor(status, correction);
  const bg = getBg(status, correction);

  const tooltipText = tooltipOverride ?? (correction
    ? `Kudos to ${invited} for adjusting their script!`
    : status === 'responded' && responseText
    ? `${invited} responded. ${responseText}`
    : status === 'declined'
    ? 'Declined to investigate.'
    : status === 'no-response'
    ? 'We asked for comment. Still waiting.'
    : `Invited to respond${dateInvited ? ` (${dateInvited})` : ''}.`);

  return (
    <span
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      tabIndex={0}
      role="note"
      aria-label={tooltipText}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          fontFamily: B,
          fontSize: compact ? 11 : 14,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color,
          background: bg,
          padding: compact ? '3px 8px' : '6px 14px',
          borderRadius: 12,
          cursor: 'default',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ fontSize: compact ? 10 : 12 }}>
          {correction ? '\u2713' : status === 'responded' ? '\u2709' : status === 'declined' ? '\u2717' : status === 'no-response' ? '\u2013' : '\u2709'}
        </span>
        {label}
      </span>

      {/* Tooltip */}
      {showTooltip && (
        <span
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: 8,
            background: COLORS.navy,
            color: '#fff',
            fontFamily: B,
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 1.5,
            padding: '10px 14px',
            borderRadius: 8,
            boxShadow: '0 4px 16px rgba(27,42,74,0.25)',
            whiteSpace: 'normal',
            width: 260,
            textTransform: 'none',
            letterSpacing: 'normal',
            zIndex: 100,
            pointerEvents: 'none',
          }}
        >
          {tooltipText}
          {/* Arrow */}
          <span
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: `6px solid ${COLORS.navy}`,
            }}
          />
        </span>
      )}
    </span>
  );
}
