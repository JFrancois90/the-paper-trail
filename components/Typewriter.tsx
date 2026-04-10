'use client';

import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  style?: React.CSSProperties;
  showCursor?: boolean;
  large?: boolean;
}

export default function Typewriter({
  text,
  speed = 40,
  onComplete,
  style,
  showCursor = true,
  large = false,
}: TypewriterProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Strip [hl] and [/hl] markers from text for character counting
  const plainText = text.replace(/\[hl\]/g, '').replace(/\[\/hl\]/g, '');

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCharIndex(plainText.length);
      setDone(true);
      onCompleteRef.current?.();
    }
  }, [plainText.length]);

  useEffect(() => {
    if (done) return;
    if (charIndex >= plainText.length) {
      setDone(true);
      onCompleteRef.current?.();
      return;
    }
    const timeout = setTimeout(() => setCharIndex((i) => i + 1), speed);
    return () => clearTimeout(timeout);
  }, [charIndex, plainText.length, speed, done]);

  const rendered = renderWithHighlights(text, charIndex);

  const fontSize = large
    ? 'clamp(22px, 3vw, 28px)'
    : 'clamp(16px, 2vw, 20px)';

  return (
    <span
      style={{
        fontFamily: 'var(--font-sans), sans-serif',
        fontSize,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.85)',
        ...style,
      }}
    >
      {rendered}
      {showCursor && !done && (
        <span
          style={{
            display: 'inline-block',
            width: 2,
            height: '1em',
            background: 'rgba(255,255,255,0.7)',
            marginLeft: 2,
            verticalAlign: 'text-bottom',
            animation: 'cursorBlink 0.8s step-end infinite',
          }}
        />
      )}
    </span>
  );
}

function renderWithHighlights(text: string, charIndex: number) {
  // Parse [hl]...[/hl] markers, track plain-text offset
  const parts: Array<{ text: string; highlight: boolean }> = [];
  let remaining = text;

  while (remaining.length > 0) {
    const hlStart = remaining.indexOf('[hl]');
    if (hlStart === -1) {
      parts.push({ text: remaining, highlight: false });
      break;
    }
    if (hlStart > 0) {
      parts.push({ text: remaining.slice(0, hlStart), highlight: false });
    }
    remaining = remaining.slice(hlStart + 4); // skip [hl]
    const hlEnd = remaining.indexOf('[/hl]');
    if (hlEnd === -1) {
      parts.push({ text: remaining, highlight: true });
      remaining = '';
    } else {
      parts.push({ text: remaining.slice(0, hlEnd), highlight: true });
      remaining = remaining.slice(hlEnd + 5); // skip [/hl]
    }
  }

  // Render up to charIndex plain characters
  let charsRendered = 0;
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (charsRendered >= charIndex) break;

    const charsAvailable = charIndex - charsRendered;
    const visibleText = part.text.slice(0, charsAvailable);
    charsRendered += part.text.length;

    if (part.highlight) {
      elements.push(
        <span key={i} className="highlight">{visibleText}</span>
      );
    } else {
      elements.push(<span key={i}>{visibleText}</span>);
    }
  }

  return elements;
}
