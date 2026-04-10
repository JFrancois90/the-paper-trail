'use client';

import { useState, useEffect, useRef } from 'react';
import Typewriter from './Typewriter';
import { COLORS } from '@/lib/constants';

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

export default function IntroSequence({ onComplete, isMobile = false }: IntroSequenceProps) {
  const [screen, setScreen] = useState<1 | 2>(1);
  const [lineIndex, setLineIndex] = useState(0);
  const [linesDone, setLinesDone] = useState<boolean[]>([]);
  const [showMemeText, setShowMemeText] = useState(false);
  const [showEnterBtn, setShowEnterBtn] = useState(false);
  const [screen1Visible, setScreen1Visible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lineIndexRef = useRef(0);
  lineIndexRef.current = lineIndex;
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const bigSize = isMobile ? '24px' : '32px';
  const smallSize = isMobile ? '20px' : '24px';
  const boldSize = isMobile ? '22px' : '28px';
  const baseSpeed = 35;

  const LINES: Line[] = [
    { text: 'There are three kinds of lies:', pause: 150, style: { fontSize: bigSize, color: '#fff' } },
    { text: 'lies, damned lies, and [hl]statistics[/hl].', pause: 600, style: { fontSize: bigSize, color: '#fff' } },
    { text: '', pause: 400 },
    { text: 'Or so we thought.', pause: 300, style: { fontSize: smallSize, color: 'rgba(255,255,255,0.6)' } },
    { text: '', pause: 200 },
    { text: 'Turns out we skipped a step.', pause: 300, style: { fontSize: smallSize, color: 'rgba(255,255,255,0.6)' } },
    { text: '', pause: 200 },
    { text: "Public figures aren't [hl]twisting[/hl] statistics anymore.", pause: 300, style: { fontSize: bigSize, color: '#fff' } },
    { text: '', pause: 200 },
    { text: "Some are just getting the numbers [hl]wrong[/hl].", pause: 600, style: { fontSize: bigSize, color: COLORS.claimRed } },
    { text: '', pause: 400 },
    { text: 'Mark Twain would be [hl]amazed[/hl].', pause: 800, speed: 50, style: { fontSize: boldSize, color: '#fff', fontWeight: 700 } },
  ];

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  // Auto-advance blank lines
  useEffect(() => {
    if (screen !== 1) return;
    const line = LINES[lineIndex];
    if (line && line.text === '') {
      timerRef.current = setTimeout(() => {
        setLinesDone((prev) => { const n = [...prev]; n[lineIndex] = true; return n; });
        advanceLine(lineIndex);
      }, line.pause);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex, screen]);

  function advanceLine(li: number) {
    if (li < LINES.length - 1) {
      setLineIndex(li + 1);
    } else {
      // Screen 1 done, transition to screen 2
      timerRef.current = setTimeout(() => {
        setScreen1Visible(false);
        timerRef.current = setTimeout(() => {
          setScreen(2);
          // Stagger meme text and button
          timerRef.current = setTimeout(() => setShowMemeText(true), 1000);
          timerRef.current = setTimeout(() => setShowEnterBtn(true), 1800);
        }, 500);
      }, 400);
    }
  }

  function handleLineComplete() {
    const li = lineIndexRef.current;
    const line = LINES[li];
    if (!line) return;
    setLinesDone((prev) => { const n = [...prev]; n[li] = true; return n; });
    timerRef.current = setTimeout(() => advanceLine(li), line.pause);
  }

  function skip() {
    if (timerRef.current) clearTimeout(timerRef.current);
    sessionStorage.setItem('intro_seen', 'true');
    onCompleteRef.current();
  }

  function goToScreen2() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setScreen1Visible(false);
    setTimeout(() => {
      setScreen(2);
      setTimeout(() => setShowMemeText(true), 1000);
      setTimeout(() => setShowEnterBtn(true), 1800);
    }, 300);
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: screen === 1 ? COLORS.navy : COLORS.paper,
        transition: 'background 0.5s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '0 20px' : '0 8vw',
        overflow: 'hidden',
      }}
      onClick={screen === 1 ? goToScreen2 : undefined}
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

      {/* Screen 1: Twain quote */}
      {screen === 1 && (
        <div
          style={{
            maxWidth: 700,
            width: '100%',
            opacity: screen1Visible ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          {LINES.map((line, i) => {
            if (i > lineIndex) return null;
            if (line.text === '') return <div key={i} style={{ height: 10 }} />;

            const isCurrent = i === lineIndex && !linesDone[i];

            return (
              <div key={i} style={{ marginBottom: 3 }}>
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
                      fontSize: line.style?.fontSize || bigSize,
                      lineHeight: 1.4,
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
        </div>
      )}

      {/* Screen 2: 280 days meme */}
      {screen === 2 && (
        <div
          style={{
            maxWidth: 640,
            width: '100%',
            textAlign: 'center',
            animation: 'fadeIn 0.6s ease',
          }}
        >
          {/* Caption above image */}
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 15,
              fontWeight: 700,
              lineHeight: 1.5,
              color: COLORS.claimRed,
              margin: '0 0 16px',
            }}
          >
            Political parties debating how many days off workers should get per year.
            <br />
            The numbers seem low, but nobody can quite work out why.
          </p>

          {/* Image */}
          <div
            style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid rgba(27,42,74,0.08)',
              marginBottom: 16,
            }}
          >
            <img
              src="/images/280-days-meme.png"
              alt="Political parties debating days off using a 280-day year"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

          {/* Kicker below image */}
          {showMemeText && (
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.5,
                color: COLORS.navy,
                margin: '0 0 24px',
                animation: 'fadeIn 0.5s ease',
              }}
            >
              None of them noticed the year is 85 days short.
            </p>
          )}

          {showEnterBtn && (
            <button
              onClick={() => { sessionStorage.setItem('intro_seen', 'true'); onCompleteRef.current(); }}
              autoFocus
              aria-label="Enter the site"
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: COLORS.navy,
                background: 'transparent',
                border: `1.5px solid ${COLORS.navy}`,
                borderRadius: 8,
                padding: '14px 32px',
                cursor: 'pointer',
                minHeight: 44,
                minWidth: 44,
                animation: 'fadeIn 0.5s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(27,42,74,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              Show me the numbers &rarr;
            </button>
          )}
        </div>
      )}

      {/* Skip button */}
      <button
        onClick={(e) => { e.stopPropagation(); sessionStorage.setItem('intro_seen', 'true'); onCompleteRef.current(); }}
        aria-label="Skip intro"
        style={{
          position: 'absolute',
          bottom: 28,
          right: isMobile ? '50%' : 'clamp(24px, 8vw, 80px)',
          transform: isMobile ? 'translateX(50%)' : 'none',
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 11,
          color: screen === 1 ? 'rgba(255,255,255,0.3)' : 'rgba(27,42,74,0.3)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '12px',
          minHeight: 44,
          minWidth: 44,
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = screen === 1 ? 'rgba(255,255,255,0.6)' : 'rgba(27,42,74,0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = screen === 1 ? 'rgba(255,255,255,0.3)' : 'rgba(27,42,74,0.3)';
        }}
      >
        Skip &rarr;
      </button>
    </div>
  );
}
