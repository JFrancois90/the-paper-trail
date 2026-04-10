'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

export default function SubscribeCTA() {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <section
      id="subscribe"
      aria-label="Subscribe to The Paper Trail"
      style={{
        background: COLORS.navy,
        padding: '64px 28px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 200,
          height: 200,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -40,
          left: -40,
          width: 160,
          height: 160,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.04)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <img
          src="/logo-dark.png"
          alt="The Paper Trail"
          style={{ height: 24, marginBottom: 16, opacity: 0.7 }}
        />
        <h2
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 28,
            fontWeight: 400,
            color: '#fff',
            letterSpacing: '-0.02em',
            margin: '0 0 12px',
          }}
        >
          Follow the trail
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 14,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.65)',
            margin: '0 0 28px',
          }}
        >
          New investigations, delivered when they're ready. No spam, no schedule, no opinions.
          Just the numbers.
        </p>

        {/* Email form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: 'flex',
            gap: 10,
            maxWidth: 420,
            margin: '0 auto 16px',
          }}
        >
          <label htmlFor="subscribe-email" style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}>
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            placeholder="Your email"
            aria-label="Email address"
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 14,
              outline: 'none',
              minHeight: 44,
            }}
          />
          <button
            type="submit"
            onMouseDown={() => setButtonActive(true)}
            onMouseUp={() => setButtonActive(false)}
            onMouseLeave={() => setButtonActive(false)}
            style={{
              padding: '12px 24px',
              borderRadius: 8,
              border: 'none',
              background: '#fff',
              color: COLORS.navy,
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transform: buttonActive ? 'scale(0.96)' : 'scale(1)',
              transition: 'transform 0.15s ease',
              minHeight: 44,
              minWidth: 44,
            }}
          >
            Subscribe
          </button>
        </form>

        {/* Substack line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#FF6719',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Also on Substack
          </span>
        </div>
      </div>
    </section>
  );
}
