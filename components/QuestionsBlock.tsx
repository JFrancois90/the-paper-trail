'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

interface QuestionsBlockProps {
  questions: [string, string, string];
}

export default function QuestionsBlock({ questions }: QuestionsBlockProps) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 12,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: COLORS.ink40,
          marginBottom: 12,
        }}
      >
        Questions we think deserve answers
      </div>
      <ol
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {questions.map((q, i) => (
          <QuestionItem key={i} number={i + 1} text={q} />
        ))}
      </ol>
    </div>
  );
}

function QuestionItem({ number, text }: { number: number; text: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        padding: '10px 14px',
        borderRadius: 8,
        background: hovered ? 'rgba(27,42,74,0.03)' : 'transparent',
        transition: 'background 0.25s ease',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-serif), serif',
          fontSize: 18,
          color: COLORS.navy,
          lineHeight: 1.3,
          flexShrink: 0,
          opacity: 0.5,
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 14,
          lineHeight: 1.65,
          color: COLORS.ink80,
        }}
      >
        {text}
      </span>
    </li>
  );
}
