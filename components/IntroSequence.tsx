'use client';

import { useState, useEffect, useRef } from 'react';
import Typewriter from './Typewriter';

interface IntroSequenceProps {
  onComplete: () => void;
  isMobile?: boolean;
}

interface Line {
  text: string;
  pause: number;
  speed?: number;
  style?: React.CSSProperties;
}

const LINES: Line[] = [
  { text: 'There are three kinds of lies:', pause: 200, style: { fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' } },
  { text: 'lies, damned lies, and statistics.', pause: 800, style: { fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' } },
  { text: '', pause: 600 },
  { text: 'That was the worry. Turns out we skipped a step.', pause: 300 },
  { text: "Politicians aren't even twisting statistics anymore.", pause: 300 },
  { text: "They're just getting the numbers wrong in the first place.", pause: 800 },
  { text: '', pause: 400 },
  { text: 'Mark Twain would be [hl]amazed[/hl].', pause: 1000, speed: 60 },
];

export default function IntroSequence({ onComplete, isMobile = false }: IntroSequenceProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [linesDone, setLinesDone] = useState<boolean[]>([]);
  const [showButton, setShowButton] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lineIndexRef = useRef(0);
  lineIndexRef.current = lineIndex;

  const baseSpeed = isMobile ? 35 : 45;

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  // Auto-advance blank lines
  useEffect(() => {
    const line = LINES[lineIndex];
    if (line && line.text === '' && !showButton) {
      timerRef.current = setTimeout(() => {
        setLinesDone((prev) => { const n = [...prev]; n[lineIndex] = true; return n; });
        advance(lineIndex);
      }, line.pause);
    }
  }, [lineIndex, showButton]);

  function advance(li: number) {
    if (li < LINES.length - 1) {
      setLineIndex(li + 1);
    } else {
      // All lines done, show button
      timerRef.current = setTimeout(() => setShowButton(true), 1000);
    }
  }

  function handleLineComplete() {
    const li = lineIndexRef.current;
    const line = LINES[li];
    if (!line) return;

    setLinesDone((prev) => { const n = [...prev]; n[li] = true; return n; });
    timerRef.current = setTimeout(() => advance(li), line.pause);
  }

  function skip() {
    if (timerRef.current) clearTimeout(timerRef.current);
    onComplete();
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#1b2a4a',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8vw',
      }}
    >
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ maxWidth: 620, width: '100%' }}>
        {LINES.map((line, i) => {
          if (i > lineIndex) return null;
          if (line.text === '') return <div key={i} style={{ height: 14 }} />;

          const isCurrent = i === lineIndex && !linesDone[i];

          return (
            <div key={i} style={{ marginBottom: 4 }}>
              {isCurrent ? (
                <Typewriter
                  text={line.text}
                  speed={line.speed || baseSpeed}
                  onComplete={handleLineComplete}
                  style={line.style}
                />
              ) : (
                <span
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: isMobile ? '20px' : 'clamp(16px, 2vw, 20px)',
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.85)',
                    ...line.style,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: line.text
                      .replace(/\[hl\]/g, '<span class="highlight">')
                      .replace(/\[\/hl\]/g, '</span>'),
                  }}
                />
              )}
            </div>
          );
        })}

        {/* Button */}
        {showButton && (
          <div style={{ marginTop: 40, animation: 'fadeIn 0.6s ease' }}>
            <button
              onClick={skip}
              autoFocus
              aria-label="Enter the site"
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#fff',
                background: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.35)',
                borderRadius: 8,
                padding: '14px 32px',
                cursor: 'pointer',
                minHeight: 44,
                minWidth: 44,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              See what we found &rarr;
            </button>
          </div>
        )}
      </div>

      {/* Skip */}
      {!showButton && (
        <button
          onClick={skip}
          aria-label="Skip intro"
          style={{
            position: 'absolute',
            bottom: 28,
            right: isMobile ? '50%' : 'clamp(24px, 8vw, 80px)',
            transform: isMobile ? 'translateX(50%)' : 'none',
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 11,
            color: 'rgba(255,255,255,0.3)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '12px',
            minHeight: 44,
            minWidth: 44,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; }}
        >
          Skip &rarr;
        </button>
      )}
    </div>
  );
}
