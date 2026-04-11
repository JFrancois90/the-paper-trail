'use client';

import { useRouter } from 'next/navigation';
import { COLORS } from '@/lib/constants';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      aria-label="Go back"
      className="back-button-fixed"
      style={{
        position: 'fixed',
        top: 80,
        left: 24,
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-sans), sans-serif',
        fontSize: 12,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: COLORS.ink40,
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(27,42,74,0.08)',
        borderRadius: 8,
        padding: '8px 14px',
        cursor: 'pointer',
        minHeight: 44,
        minWidth: 44,
        boxShadow: '0 2px 8px rgba(27,42,74,0.06)',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.navy; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.ink40; }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back
    </button>
  );
}
