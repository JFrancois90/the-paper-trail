'use client';

import { useRef, useEffect, useState } from 'react';
import { COLORS } from '@/lib/constants';
import type { Investigation } from '@/data/investigations';

interface InvestigationStoryProps {
  investigation: Investigation;
  onClose: () => void;
}

const H = 'var(--font-heading), sans-serif';
const B = 'var(--font-sans), sans-serif';

export default function InvestigationStory({ investigation: inv, onClose }: InvestigationStoryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFrame, setActiveFrame] = useState(0);

  // Build frames dynamically based on investigation data
  const frames = buildFrames(inv);
  const totalFrames = frames.length;

  // Track active frame via scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveFrame(idx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Check URL for frame param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const frame = parseInt(params.get('frame') || '0');
    if (frame > 0 && frame < totalFrames && scrollRef.current) {
      scrollRef.current.scrollLeft = frame * window.innerWidth;
    }
  }, [totalFrames]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 150, background: '#000' }}>
      {/* Progress dots */}
      <div
        style={{
          position: 'absolute',
          top: 8,
          left: 16,
          right: 16,
          zIndex: 10,
          display: 'flex',
          gap: 3,
        }}
      >
        {frames.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 1.5,
              background: i <= activeFrame ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)',
              transition: 'background 0.2s',
            }}
          />
        ))}
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close story"
        style={{
          position: 'absolute',
          top: 20,
          right: 12,
          zIndex: 10,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 10,
          minWidth: 44,
          minHeight: 44,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 2l14 14M16 2L2 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Swipeable frames */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          height: '100%',
          scrollbarWidth: 'none',
        }}
      >
        {frames.map((frame, i) => (
          <div
            key={i}
            style={{
              minWidth: '100vw',
              height: '100%',
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px 28px 40px',
              background: frame.bg,
              color: frame.textColor,
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            {frame.content}
          </div>
        ))}
      </div>

      {/* Swipe hint on first frame */}
      {activeFrame === 0 && (
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            left: 0,
            right: 0,
            textAlign: 'center',
            animation: 'fadeInUp 0.6s ease 1s forwards',
            opacity: 0,
          }}
        >
          <p style={{ fontFamily: B, fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            Swipe to see what they got wrong &rarr;
          </p>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

interface Frame {
  bg: string;
  textColor: string;
  content: React.ReactNode;
}

function buildFrames(inv: Investigation): Frame[] {
  const frames: Frame[] = [];

  // Frame 1: The claim
  frames.push({
    bg: COLORS.navy,
    textColor: '#fff',
    content: (
      <div style={{ maxWidth: 340 }}>
        <div style={{ marginBottom: 24 }}>
          <span
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {inv.multiplier}
          </span>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.5)',
              margin: '6px 0 0',
            }}
          >
            {inv.multiplierLabel}
          </p>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 20,
            lineHeight: 1.35,
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 20px',
          }}
        >
          &ldquo;{inv.saidQuote}&rdquo;
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 13,
            color: 'rgba(255,255,255,0.4)',
            margin: 0,
          }}
        >
          {inv.who} &middot; {inv.date}
        </p>
      </div>
    ),
  });

  // Frame 2: What they said
  frames.push({
    bg: COLORS.claimRedLight,
    textColor: COLORS.claimRedDark,
    content: (
      <div style={{ maxWidth: 340 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.claimRed,
            margin: '0 0 16px',
          }}
        >
          They said
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 20,
            lineHeight: 1.4,
            color: COLORS.claimRedDark,
            margin: 0,
          }}
        >
          &ldquo;{inv.saidQuote}&rdquo;
        </p>
      </div>
    ),
  });

  // Frame 3: What the source shows
  frames.push({
    bg: COLORS.sourceGreenLight,
    textColor: COLORS.sourceGreenDark,
    content: (
      <div style={{ maxWidth: 340 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.sourceGreen,
            margin: '0 0 16px',
          }}
        >
          {inv.sourceLabel}
        </p>
        {inv.sourceImage ? (
          <img
            src={inv.sourceImage}
            alt="Source document"
            style={{ width: '100%', borderRadius: 8, marginBottom: 16 }}
          />
        ) : (
          <div
            style={{
              background: 'rgba(26,107,66,0.08)',
              borderRadius: 8,
              padding: '32px 20px',
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 10,
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
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 1.5,
            color: COLORS.sourceGreenDark,
            margin: 0,
          }}
        >
          {inv.sourceOneLiner}
        </p>
      </div>
    ),
  });

  // Frame 4: The gap (visual comparison)
  const barData = inv.barData;
  const claimed = barData[0];
  const actual = barData[barData.length - 1];
  frames.push({
    bg: COLORS.paper,
    textColor: COLORS.ink,
    content: (
      <div style={{ maxWidth: 300 }}>
        <p
          style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontSize: 48,
            fontWeight: 700,
            color: COLORS.claimRed,
            margin: '0 0 8px',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          {claimed.fmt}
        </p>
        <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 13, color: COLORS.ink40, margin: '0 0 24px' }}>
          {claimed.label}
        </p>
        <div style={{ margin: '0 0 24px' }}>
          <span className="highlight" style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 24, fontWeight: 700, color: COLORS.navy }}>
            {inv.multiplier} difference
          </span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontSize: 48,
            fontWeight: 700,
            color: COLORS.sourceGreen,
            margin: '0 0 8px',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          {actual.fmt}
        </p>
        <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 13, color: COLORS.ink40, margin: 0 }}>
          {actual.label}
        </p>
      </div>
    ),
  });

  // Frame 5: In plain english
  frames.push({
    bg: COLORS.navyLight,
    textColor: COLORS.navy,
    content: (
      <div style={{ maxWidth: 340 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.ink40,
            margin: '0 0 16px',
          }}
        >
          In plain english
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 20,
            lineHeight: 1.5,
            color: COLORS.navy,
            margin: 0,
          }}
        >
          {inv.analogy}
        </p>
      </div>
    ),
  });

  // Frame 6: Whisper chain (if applicable)
  if (inv.whisperChain) {
    frames.push({
      bg: COLORS.navy,
      textColor: '#fff',
      content: (
        <div style={{ maxWidth: 340, width: '100%' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: COLORS.chainBlue,
              margin: '0 0 4px',
            }}
          >
            Careless whispers
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 13,
              color: 'rgba(255,255,255,0.4)',
              margin: '0 0 20px',
            }}
          >
            How the claim spread
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, alignItems: 'center' }}>
            {inv.whisperChain.map((node, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    background: node.type === 'origin' ? COLORS.chainBlueLight
                      : node.type === 'final' ? COLORS.claimRedLight : '#fff',
                    borderRadius: 8,
                    padding: '8px 16px',
                    minWidth: 180,
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 13, fontWeight: 600, color: node.type === 'final' ? COLORS.claimRed : COLORS.ink, margin: 0, lineHeight: 1.3 }}>
                    {node.name}
                  </p>
                  <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 10, color: COLORS.ink40, margin: '2px 0 0' }}>
                    {node.date}
                  </p>
                </div>
                {i < inv.whisperChain!.length - 1 && (
                  <svg width="2" height="20" viewBox="0 0 2 20" style={{ margin: '4px 0', opacity: 0.3 }}>
                    <line x1="1" y1="0" x2="1" y2="20" stroke="#fff" strokeWidth="1.5" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          {inv.whisperNote && (
            <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: '16px 0 0', lineHeight: 1.5 }}>
              {inv.whisperNote}
            </p>
          )}
        </div>
      ),
    });
  }

  // Frame 7: Why this matters
  frames.push({
    bg: COLORS.amberLight,
    textColor: COLORS.amberDark,
    content: (
      <div style={{ maxWidth: 340 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.amber,
            margin: '0 0 16px',
          }}
        >
          Why this matters
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 18,
            lineHeight: 1.55,
            color: COLORS.amberDark,
            margin: 0,
          }}
        >
          {inv.impact}
        </p>
      </div>
    ),
  });

  // Frame 8: Questions
  frames.push({
    bg: COLORS.paper,
    textColor: COLORS.ink,
    content: (
      <div style={{ maxWidth: 340 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.ink40,
            margin: '0 0 24px',
          }}
        >
          Questions we think deserve answers
        </p>
        {inv.questions.map((q, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 16, textAlign: 'left' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: 20,
                color: COLORS.navy,
                opacity: 0.3,
                lineHeight: 1.3,
                flexShrink: 0,
              }}
            >
              {i + 1}
            </span>
            <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 15, lineHeight: 1.5, color: COLORS.ink80, margin: 0 }}>
              {q}
            </p>
          </div>
        ))}
      </div>
    ),
  });

  // Frame 9: Correction (if applicable)
  if (inv.correction) {
    frames.push({
      bg: COLORS.sourceGreenLight,
      textColor: COLORS.sourceGreenDark,
      content: (
        <div style={{ maxWidth: 340 }}>
          <div style={{ fontSize: 32, marginBottom: 16 }}>&#10003;</div>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: COLORS.sourceGreen,
              margin: '0 0 16px',
            }}
          >
            Correction issued, Dec 2025
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 16,
              lineHeight: 1.6,
              color: COLORS.sourceGreenDark,
              margin: 0,
            }}
          >
            {inv.correction}
          </p>
        </div>
      ),
    });
  }

  return frames;
}
