'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Typewriter from './Typewriter';
import BrandSlogan from './BrandSlogan';

interface IntroSequenceProps {
  onComplete: () => void;
  isMobile?: boolean;
}

interface Line {
  text: string;
  pause: number;
  speed?: number;
  large?: boolean;
  style?: React.CSSProperties;
}

const screens: Line[][] = [
  // Screen 1: The quote
  [
    { text: 'There are three kinds of lies:', pause: 200 },
    { text: 'lies, damned lies, and statistics.', pause: 1000 },
    { text: '', pause: 400 },
    {
      text: '\u2014 attributed to Mark Twain (who blamed Disraeli,',
      pause: 200,
      speed: 30,
      style: { color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(13px, 1.5vw, 15px)' },
    },
    {
      text: 'who probably never said it)',
      pause: 2000,
      speed: 30,
      style: { color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(13px, 1.5vw, 15px)' },
    },
  ],
  // Screen 2: The setup
  [
    { text: "We've known this for over a century.", pause: 800 },
    { text: 'And we still let it happen.', pause: 1500 },
    { text: '', pause: 400 },
    { text: 'Politicians use statistics to win arguments.', pause: 300 },
    { text: 'Sometimes those statistics are wrong.', pause: 300 },
    { text: "Sometimes they know they're wrong.", pause: 1000 },
    { text: '', pause: 400 },
    { text: 'Nobody checks.', pause: 1500 },
    { text: '[hl]We do.[/hl]', pause: 2000, speed: 80 },
  ],
  // Screen 3: The 365 days analogy
  [
    { text: 'There are [hl]365 days[/hl] in a year.', pause: 300 },
    { text: '366 in a leap year.', pause: 800 },
    { text: '', pause: 200 },
    { text: "That's a fact. You can build policy on it.", pause: 1000 },
    { text: '', pause: 200 },
    { text: 'But what if a politician said there were [hl]280[/hl]?', pause: 800 },
    { text: 'And based an entire budget on that?', pause: 1000 },
    { text: '', pause: 200 },
    { text: "You'd call that insane.", pause: 800 },
    { text: '', pause: 200 },
    { text: 'But when it happens with billions of pounds,', pause: 200 },
    { text: 'spread across reports and citations,', pause: 200 },
    { text: '[hl]nobody notices[/hl].', pause: 1500 },
  ],
  // Screen 4: The evidence
  [
    { text: 'A claim of [hl]\u00a3500 million[/hl] that was actually [hl]\u00a37.6 billion[/hl].', pause: 800 },
    { text: '', pause: 200 },
    { text: 'A trend described as "increasing" that was actually [hl]falling[/hl].', pause: 800 },
    { text: '', pause: 200 },
    { text: 'A figure of [hl]\u00a3350 billion[/hl] that started life as [hl]\u00a35.5 billion[/hl].', pause: 1500 },
    { text: '', pause: 400 },
    { text: "These aren't opinions. They're numbers.", pause: 300 },
    { text: "And they're wrong.", pause: 2000 },
  ],
  // Screen 5: The mission
  [
    { text: "We're not attacking any policy.", pause: 300 },
    { text: "That's what politicians want.", pause: 300 },
    { text: '[hl]It creates noise.[/hl]', pause: 1000 },
    { text: '', pause: 200 },
    { text: "We're inviting them to clarify the numbers they use.", pause: 300 },
    { text: 'Without the politics.', pause: 1500 },
  ],
];

export default function IntroSequence({ onComplete, isMobile = false }: IntroSequenceProps) {
  // Mobile: faster typing speed
  const speedMultiplier = isMobile ? 0.75 : 1;
  const [screenIndex, setScreenIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [linesComplete, setLinesComplete] = useState<boolean[]>([]);
  const [screenVisible, setScreenVisible] = useState(true);
  const [showFinal, setShowFinal] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Use refs so the callback always reads current values
  const screenIndexRef = useRef(screenIndex);
  const lineIndexRef = useRef(lineIndex);
  screenIndexRef.current = screenIndex;
  lineIndexRef.current = lineIndex;

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Auto-advance blank spacer lines
  useEffect(() => {
    const screen = screens[screenIndex];
    const line = screen?.[lineIndex];
    if (line && line.text === '' && !showFinal) {
      timerRef.current = setTimeout(() => {
        setLinesComplete((prev) => {
          const next = [...prev];
          next[lineIndex] = true;
          return next;
        });
        handleLineCompleteInner(screenIndex, lineIndex);
      }, line.pause);
    }
  }, [screenIndex, lineIndex, showFinal]);

  function handleLineCompleteInner(si: number, li: number) {
    const screen = screens[si];
    const isLast = si === screens.length - 1;

    if (li < screen.length - 1) {
      setLineIndex(li + 1);
    } else if (isLast) {
      setShowFinal(true);
      setTimeout(() => setShowButton(true), 1000);
    } else {
      setScreenVisible(false);
      setTimeout(() => {
        setScreenIndex(si + 1);
        setLineIndex(0);
        setLinesComplete([]);
        setScreenVisible(true);
      }, 600);
    }
  }

  const handleLineComplete = useCallback(() => {
    const si = screenIndexRef.current;
    const li = lineIndexRef.current;
    const screen = screens[si];
    const line = screen?.[li];
    if (!line) return;

    setLinesComplete((prev) => {
      const next = [...prev];
      next[li] = true;
      return next;
    });

    timerRef.current = setTimeout(() => {
      handleLineCompleteInner(si, li);
    }, line.pause);
  }, []);

  function skip() {
    if (timerRef.current) clearTimeout(timerRef.current);
    onComplete();
  }

  const currentScreen = screens[screenIndex];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#1b2a4a',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8vw',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* Main narrative area */}
      <div
        style={{
          maxWidth: 700,
          width: '100%',
          opacity: screenVisible ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        {!showFinal && currentScreen?.map((line, i) => {
          if (i > lineIndex) return null;
          if (line.text === '') return <div key={`${screenIndex}-${i}`} style={{ height: 12 }} />;

          const isCurrentLine = i === lineIndex && !linesComplete[i];

          return (
            <div key={`${screenIndex}-${i}`} style={{ marginBottom: 4 }}>
              {isCurrentLine ? (
                <Typewriter
                  text={line.text}
                  speed={Math.round((line.speed || 40) * speedMultiplier)}
                  onComplete={handleLineComplete}
                  style={line.style}
                  large={line.large}
                />
              ) : (
                <span
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: line.style?.fontSize || 'clamp(16px, 2vw, 20px)',
                    lineHeight: 1.6,
                    color: line.style?.color || 'rgba(255,255,255,0.85)',
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

        {/* Final title + button */}
        {showFinal && (
          <div
            style={{
              textAlign: 'center',
              opacity: 1,
              animation: 'fadeIn 0.8s ease',
            }}
          >
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}</style>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 'clamp(15px, 1.5vw, 18px)',
                color: 'rgba(255,255,255,0.5)',
                margin: '0 0 12px',
              }}
            >
              This is
            </p>
            <div style={{ marginBottom: 40 }}>
              <BrandSlogan size="md" theme="dark" />
            </div>
            {showButton && (
              <button
                onClick={skip}
                autoFocus
                aria-label="Enter the site"
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#fff',
                  background: 'transparent',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  borderRadius: 8,
                  padding: '14px 40px',
                  cursor: 'pointer',
                  animation: 'fadeIn 0.6s ease',
                  minHeight: 44,
                  minWidth: 44,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Enter &rarr;
              </button>
            )}
          </div>
        )}
      </div>

      {/* Progress dots */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 8,
        }}
      >
        {screens.map((_, i) => (
          <div
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: i === screenIndex ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)',
              transition: 'background 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Skip button */}
      {!showFinal && (
        <button
          onClick={skip}
          aria-label="Skip intro"
          style={{
            position: 'absolute',
            bottom: 28,
            right: 'clamp(24px, 8vw, 80px)',
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 11,
            color: 'rgba(255,255,255,0.3)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '12px',
            minHeight: 44,
            minWidth: 44,
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.3)';
          }}
        >
          Skip intro &rarr;
        </button>
      )}
    </div>
  );
}
