'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

interface WatchButtonProps {
  investigationSlug: string;
  investigationTitle?: string;
  compact?: boolean;
}

export default function WatchButton({ investigationSlug, investigationTitle, compact }: WatchButtonProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Store interest - in production this would POST to an API
    try {
      const existing = JSON.parse(localStorage.getItem('watch_alerts') || '[]');
      existing.push({ email, slug: investigationSlug, timestamp: Date.now() });
      localStorage.setItem('watch_alerts', JSON.stringify(existing));
    } catch {
      // localStorage may not be available
    }
    setSubmitted(true);
  }

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
        aria-label="Get updates on this investigation"
        title="Get updates on this investigation"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: B,
          fontSize: compact ? 12 : 13,
          fontWeight: 600,
          color: COLORS.navy,
          background: 'rgba(27,42,74,0.06)',
          border: '1px solid rgba(27,42,74,0.1)',
          borderRadius: 6,
          padding: compact ? '5px 10px' : '7px 14px',
          cursor: 'pointer',
          transition: 'background 0.2s ease',
          whiteSpace: 'nowrap',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M8 1.5a4.5 4.5 0 00-4.5 4.5c0 2.1-.7 3.4-1.3 4.2-.3.4-.2.8.2.8h11.2c.4 0 .5-.4.2-.8-.6-.8-1.3-2.1-1.3-4.2A4.5 4.5 0 008 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 11v.5a1.5 1.5 0 003 0V11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        {!compact && 'Watch'}
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen(false);
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '32px 28px',
              maxWidth: 400,
              width: '100%',
              boxShadow: '0 20px 60px rgba(27,42,74,0.2)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>&#10003;</div>
                <p style={{ fontFamily: B, fontSize: 16, fontWeight: 600, color: COLORS.navy, margin: '0 0 8px' }}>
                  You&apos;re watching this investigation
                </p>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.muted, margin: '0 0 20px' }}>
                  We&apos;ll email you if there are updates.
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpen(false);
                  }}
                  style={{
                    fontFamily: B,
                    fontSize: 14,
                    fontWeight: 600,
                    color: COLORS.navy,
                    background: 'rgba(27,42,74,0.06)',
                    border: 'none',
                    borderRadius: 8,
                    padding: '10px 24px',
                    cursor: 'pointer',
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: B, fontSize: 18, fontWeight: 700, color: COLORS.navy, margin: '0 0 8px' }}>
                  Watch this investigation
                </h3>
                <p style={{ fontFamily: B, fontSize: 14, color: COLORS.muted, margin: '0 0 4px' }}>
                  {investigationTitle
                    ? `Get notified if "${investigationTitle}" is updated.`
                    : 'Get notified if this investigation is updated.'}
                </p>
                <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: '0 0 20px' }}>
                  We&apos;ll only email you about this specific investigation.
                </p>
                <form onSubmit={handleSubmit}>
                  <label htmlFor={`watch-${investigationSlug}`} style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}>
                    Email address
                  </label>
                  <input
                    id={`watch-${investigationSlug}`}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    autoFocus
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 8,
                      border: '1px solid rgba(27,42,74,0.15)',
                      background: '#fff',
                      color: COLORS.ink,
                      fontFamily: B,
                      fontSize: 14,
                      outline: 'none',
                      minHeight: 44,
                      boxSizing: 'border-box',
                      marginBottom: 12,
                    }}
                  />
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpen(false);
                      }}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: 8,
                        border: `1px solid rgba(27,42,74,0.15)`,
                        background: '#fff',
                        color: COLORS.muted,
                        fontFamily: B,
                        fontSize: 14,
                        cursor: 'pointer',
                        minHeight: 44,
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      style={{
                        flex: 2,
                        padding: '10px',
                        borderRadius: 8,
                        border: 'none',
                        background: COLORS.navy,
                        color: '#fff',
                        fontFamily: B,
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: 'pointer',
                        minHeight: 44,
                      }}
                    >
                      Notify me
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
