'use client';

import { useState, useEffect, useRef } from 'react';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

const NARRATIVES = [
  'Every number has a source. We read it.',
  'We don\u2019t pick sides. We pick sources.',
  'The maths doesn\u2019t care who said it.',
  'One source at a time. That\u2019s the deal.',
  'If it checks out, we say so. If it doesn\u2019t, we show why.',
];

/**
 * Floating narrative bubble — desktop only.
 * Appears after the user pauses scrolling for 3 seconds.
 * Fades in bottom-right, auto-dismisses after 6s or on click.
 */
export default function FloatingNarrative() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [dismissed, setDismissed] = useState(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shownCount = useRef(0);

  useEffect(() => {
    // Only show on desktop (>768px) and if not already shown 3+ times this session
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 768px)');
    if (mq.matches) return;

    const stored = sessionStorage.getItem('narrative_count');
    if (stored) shownCount.current = parseInt(stored);
    if (shownCount.current >= 3) return;

    const resetTimer = () => {
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      // Hide if currently showing
      if (visible) {
        setVisible(false);
      }
      scrollTimer.current = setTimeout(() => {
        if (dismissed || shownCount.current >= 3) return;
        const idx = shownCount.current % NARRATIVES.length;
        setText(NARRATIVES[idx]);
        setVisible(true);
        shownCount.current += 1;
        sessionStorage.setItem('narrative_count', String(shownCount.current));

        // Auto-hide after 6s
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setVisible(false), 6000);
      }, 3000);
    };

    window.addEventListener('scroll', resetTimer, { passive: true });
    // Start initial timer
    resetTimer();

    return () => {
      window.removeEventListener('scroll', resetTimer);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [dismissed, visible]);

  if (!text || dismissed) return null;

  return (
    <div
      onClick={() => {
        setVisible(false);
        setDismissed(true);
      }}
      style={{
        position: 'fixed',
        bottom: 80,
        right: 28,
        zIndex: 80,
        maxWidth: 280,
        background: '#fff',
        border: `1px solid rgba(27,42,74,0.08)`,
        borderRadius: 12,
        padding: '14px 18px',
        boxShadow: '0 8px 32px rgba(27,42,74,0.12)',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      role="status"
      aria-live="polite"
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <span style={{ fontSize: 18, flexShrink: 0, lineHeight: 1.4 }}>&#x1F4CE;</span>
        <div>
          <p style={{ fontFamily: B, fontSize: 14, lineHeight: 1.5, color: COLORS.navy, margin: 0 }}>
            {text}
          </p>
          <p style={{ fontFamily: B, fontSize: 11, color: COLORS.lightMuted, margin: '6px 0 0' }}>
            Click to dismiss
          </p>
        </div>
      </div>
    </div>
  );
}
