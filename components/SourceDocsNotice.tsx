'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

export default function SourceDocsNotice() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid rgba(27,42,74,0.08)',
        borderRadius: 10,
        padding: '14px 18px',
        marginBottom: 20,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
      }}
    >
      <span style={{ fontSize: 18, flexShrink: 0 }}>&#x1F50D;</span>
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 14,
            lineHeight: 1.5,
            color: COLORS.muted,
            margin: 0,
          }}
        >
          We will add links to all original source documents. Still building.
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss notice"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 4,
          color: COLORS.ink40,
          fontSize: 14,
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        &times;
      </button>
    </div>
  );
}
