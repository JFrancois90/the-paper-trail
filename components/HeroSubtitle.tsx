'use client';

import { useState, useEffect, useRef, useMemo } from 'react';

interface HeroSubtitleProps {
  isMobile?: boolean;
}

interface Line {
  text: string;
  highlightRange?: [number, number];
  color: string;
  highlightColor?: string;
  fontSize: string;
  fontWeight: number;
  speed: number;
  pauseAfter: number;
}

// "dead wrong" starts at index 29 in "Sometimes those numbers are dead wrong."
const DESKTOP_LINES: Line[] = [
  { text: 'Politicians use numbers to win.', color: 'rgba(255,255,255,0.85)', fontSize: '28px', fontWeight: 400, speed: 45, pauseAfter: 400 },
  { text: 'Sometimes those numbers are dead wrong.', color: 'rgba(255,255,255,0.85)', fontSize: '28px', fontWeight: 400, speed: 45, pauseAfter: 400, highlightRange: [29, 39], highlightColor: 'rgba(196,138,10,0.35)' },
  { text: 'We check them.', color: '#fff', fontSize: '36px', fontWeight: 700, speed: 60, pauseAfter: 1000, highlightRange: [3, 14], highlightColor: 'rgba(196,138,10,0.35)' },
];

const MOBILE_LINES: Line[] = [
  { text: 'Politicians use numbers to win.', color: 'rgba(255,255,255,0.85)', fontSize: '22px', fontWeight: 400, speed: 40, pauseAfter: 500 },
  { text: 'Sometimes those numbers are dead wrong.', color: 'rgba(255,255,255,0.85)', fontSize: '22px', fontWeight: 400, speed: 40, pauseAfter: 500, highlightRange: [29, 39], highlightColor: 'rgba(196,138,10,0.35)' },
  { text: 'We check them.', color: '#fff', fontSize: '26px', fontWeight: 700, speed: 60, pauseAfter: 1000, highlightRange: [3, 14], highlightColor: 'rgba(196,138,10,0.35)' },
];

export default function HeroSubtitle({ isMobile = false }: HeroSubtitleProps) {
  const lines = useMemo(() => isMobile ? MOBILE_LINES : DESKTOP_LINES, [isMobile]);
  const linesRef = useRef(lines);
  linesRef.current = lines;

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [linesDone, setLinesDone] = useState<boolean[]>([]);
  const [showBus, setShowBus] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion = useRef(false);

  // Check reduced motion on mount
  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion.current) {
      setLinesDone(linesRef.current.map(() => true));
      setLineIndex(linesRef.current.length);
      setTimeout(() => setShowBus(true), 300);
    }
  }, []);

  // Type characters
  useEffect(() => {
    if (reducedMotion.current) return;
    const allLines = linesRef.current;
    if (lineIndex >= allLines.length) return;

    const line = allLines[lineIndex];
    if (charIndex >= line.text.length) {
      // Line done, mark it and advance after pause
      setLinesDone((prev) => {
        const next = [...prev];
        next[lineIndex] = true;
        return next;
      });
      timerRef.current = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, line.pauseAfter);
      return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }

    timerRef.current = setTimeout(() => {
      setCharIndex((i) => i + 1);
    }, line.speed);

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [lineIndex, charIndex]);

  // Show bus line after all lines typed
  useEffect(() => {
    if (reducedMotion.current) return;
    if (lineIndex >= linesRef.current.length && !showBus) {
      const t = setTimeout(() => setShowBus(true), 1000);
      return () => clearTimeout(t);
    }
  }, [lineIndex, showBus]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {lines.map((line, i) => {
        if (i > lineIndex && !linesDone[i]) return null;

        const isCurrentLine = i === lineIndex && !linesDone[i];
        const visibleChars = isCurrentLine ? charIndex : line.text.length;
        const isComplete = linesDone[i];

        return (
          <p
            key={i}
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: line.fontSize,
              fontWeight: line.fontWeight,
              color: line.color,
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {renderChars(line, visibleChars)}
            {isCurrentLine && !isComplete && (
              <span
                style={{
                  display: 'inline-block',
                  width: 2,
                  height: '0.85em',
                  background: line.color,
                  marginLeft: 2,
                  verticalAlign: 'text-bottom',
                  animation: 'cursorBlink 0.8s step-end infinite',
                }}
              />
            )}
          </p>
        );
      })}

      {/* Remember the bus */}
      <div
        style={{
          marginTop: isMobile ? 28 : 40,
          opacity: showBus ? 1 : 0,
          transform: showBus ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <a
          href="/about#the-bus"
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: isMobile ? 16 : 17,
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            display: 'block',
          }}
        >
          Remember the <span className="highlight">&pound;350m</span> bus? So do we.
        </a>
      </div>
    </div>
  );
}

function renderChars(line: Line, visibleChars: number) {
  const text = line.text.slice(0, visibleChars);
  if (!line.highlightRange) return text;

  const [start, end] = line.highlightRange;
  const parts: React.ReactNode[] = [];
  const before = text.slice(0, Math.min(start, text.length));
  const highlighted = text.slice(start, Math.min(end, text.length));
  const after = text.slice(Math.min(end, text.length));

  if (before) parts.push(<span key="b">{before}</span>);
  if (highlighted) {
    parts.push(
      <span
        key="h"
        style={{
          background: `linear-gradient(to bottom, transparent 60%, ${line.highlightColor} 60%)`,
          padding: '0 2px',
        }}
      >
        {highlighted}
      </span>
    );
  }
  if (after) parts.push(<span key="a">{after}</span>);

  return parts;
}
