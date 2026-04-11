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
          fontSize: 'var(--inv-section-heading, 14px)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: COLORS.navy,
          marginBottom: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 18 }}>&#x2753;</span>
        Questions we think deserve answers
      </div>

      {/* Preamble */}
      <p
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 'var(--inv-question-preamble, 16px)',
          fontStyle: 'italic',
          lineHeight: 1.6,
          color: COLORS.muted,
          margin: '0 0 20px',
        }}
      >
        Our questions are not about policy. That&apos;s for individuals to decide. We ask the questions that ensure the base claims politicians make are factually correct.
      </p>

      <ul
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
          <QuestionItem key={i} text={q} />
        ))}
      </ul>
    </div>
  );
}

function QuestionItem({ text }: { text: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        padding: '14px 18px',
        borderRadius: 8,
        background: hovered ? 'rgba(27,42,74,0.03)' : 'transparent',
        transition: 'background 0.25s ease',
      }}
    >
      <span
        style={{
          fontSize: 18,
          flexShrink: 0,
          lineHeight: 1.5,
        }}
      >
        &#x1F4AC;
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 'var(--inv-question, 22px)',
          lineHeight: 1.5,
          color: COLORS.ink80,
        }}
      >
        {text}
      </span>
    </li>
  );
}
