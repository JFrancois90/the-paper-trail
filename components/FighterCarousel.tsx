'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

const FIGHTERS = [
  {
    name: 'Peter Stefanovic',
    desc: 'Lawyer and campaigner. Viral videos documenting misleading statements. Tens of millions of views.',
    url: 'https://x.com/PeterStefanworthy',
  },
  {
    name: 'Compassion in Politics',
    desc: 'Cross-party campaign pushing for legislation making it an offence to deliberately mislead Parliament.',
    url: 'https://www.compassioninpolitics.com',
  },
  {
    name: 'Dawn Butler MP',
    desc: 'Suspended from the Commons in 2021 for calling the PM a liar. Highlighted the paradox in the rules.',
    url: 'https://www.dawnbutler.org.uk',
  },
  {
    name: 'Andy Slaughter MP',
    desc: 'Introduced a Private Members\' Bill proposing sanctions for MPs who knowingly mislead.',
    url: 'https://www.andyslaughter.co.uk',
  },
  {
    name: 'Led By Donkeys',
    desc: 'Campaign group using billboards and stunts to hold politicians accountable for their statements.',
    url: 'https://www.ledbydonkeys.org',
  },
  {
    name: 'Public petitions',
    desc: 'Multiple petitions on 38 Degrees and Change.org with hundreds of thousands of signatures.',
    url: 'https://www.38degrees.org.uk',
  },
];

export default function FighterCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(Math.min(Math.max(idx, 0), FIGHTERS.length - 1));
  }, []);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Swipe carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style>{`.fc-card::-webkit-scrollbar { display: none; }`}</style>
        {FIGHTERS.map((person, i) => (
          <div
            key={i}
            className="fc-card"
            style={{
              flex: '0 0 100%',
              scrollSnapAlign: 'center',
              boxSizing: 'border-box',
            }}
          >
            <div
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: '#fff',
                border: '1px solid rgba(27,42,74,0.08)',
                borderRadius: 16,
                padding: '28px 24px',
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transform: hoveredIndex === i ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: hoveredIndex === i ? '0 8px 24px rgba(27,42,74,0.12)' : 'none',
              }}
            >
              <span style={{ fontSize: 24, marginBottom: 12 }}>&#x1F4AC;</span>
              <a
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: H,
                  fontSize: 20,
                  fontWeight: 700,
                  color: COLORS.navy,
                  textDecoration: hoveredIndex === i ? 'underline' : 'none',
                  textUnderlineOffset: '3px',
                  margin: '0 0 8px',
                  transition: 'text-decoration 0.2s ease',
                }}
              >
                {person.name}
              </a>
              <p
                style={{
                  fontFamily: B,
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: COLORS.muted,
                  margin: '0 0 16px',
                }}
              >
                {person.desc}
              </p>
              <a
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: B,
                  fontSize: 14,
                  fontWeight: 600,
                  color: COLORS.chainBlue,
                  textDecoration: 'none',
                }}
              >
                Visit their cause &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 14 }}>
        {FIGHTERS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to card ${i + 1}`}
            style={{
              width: activeIndex === i ? 20 : 8,
              height: 8,
              borderRadius: 4,
              background: activeIndex === i ? COLORS.navy : `${COLORS.navy}25`,
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              minWidth: 0,
              minHeight: 0,
            }}
          />
        ))}
      </div>

      {/* Campaign link */}
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Link
          href="/campaigns"
          style={{
            fontFamily: B,
            fontSize: 14,
            fontWeight: 600,
            color: COLORS.chainBlue,
            textDecoration: 'none',
          }}
        >
          See our investigations &rarr;
        </Link>
      </div>
    </div>
  );
}
