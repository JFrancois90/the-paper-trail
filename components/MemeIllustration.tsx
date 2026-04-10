'use client';

import { COLORS } from '@/lib/constants';

export default function MemeIllustration() {
  async function handleShare() {
    const url = 'https://thepapertrail.uk/about';
    const text = 'Three politicians debating policy. None of them noticed the base number is wrong.';

    if (navigator.share) {
      try {
        await navigator.share({ title: 'The Paper Trail', text, url });
      } catch {
        // User cancelled share
      }
    } else {
      // Fallback: copy link
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard');
      } catch {
        // Clipboard not available
      }
    }
  }

  return (
    <figure style={{ margin: 0, padding: 0 }}>
      <div
        style={{
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid rgba(27,42,74,0.08)',
        }}
      >
        <img
          src="/images/280-days-meme.png"
          alt="Illustration: three politicians debating policy based on 280 days in a year. None of them noticed the base number is wrong."
          width={800}
          height={450}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
          loading="lazy"
        />
      </div>
      <figcaption
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 13,
          fontStyle: 'italic',
          color: COLORS.ink40,
          marginTop: 10,
          lineHeight: 1.5,
        }}
      >
        Three politicians debating policy. None of them noticed the base number is wrong.
      </figcaption>
      <button
        onClick={handleShare}
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 11,
          fontWeight: 600,
          color: COLORS.chainBlue,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '6px 0',
          marginTop: 4,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          minHeight: 44,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M4.5 5.5L7 3m0 0l2.5 2.5M7 3v7m-4 1h8"
            stroke={COLORS.chainBlue}
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Share this
      </button>
    </figure>
  );
}
