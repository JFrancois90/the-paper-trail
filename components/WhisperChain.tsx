'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

interface ChainNode {
  name: string;
  date: string;
  type: 'origin' | 'mid' | 'final';
  url?: string;
}

interface WhisperChainProps {
  chain: ChainNode[];
  note: string | null;
  expanded: boolean;
}

export default function WhisperChain({ chain, note, expanded }: WhisperChainProps) {
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <div
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.chainBlue,
            marginBottom: 3,
          }}
        >
          Careless whispers
        </div>
        <div
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 12,
            color: COLORS.ink40,
          }}
        >
          How the claim spread from source to &lsquo;established fact&rsquo;
        </div>
      </div>

      {/* Scrollable chain container */}
      <div
        style={{
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: 8,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            minWidth: 'min-content',
          }}
        >
          {chain.map((node, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              {/* Node */}
              <ChainNodeBubble node={node} expanded={expanded} delay={i * 0.12} />

              {/* Arrow between nodes */}
              {i < chain.length - 1 && (
                <svg
                  width="24"
                  height="12"
                  viewBox="0 0 24 12"
                  fill="none"
                  style={{
                    flexShrink: 0,
                    opacity: expanded ? 0.4 : 0,
                    transition: `opacity 0.5s ease ${i * 0.12 + 0.06}s`,
                  }}
                >
                  <path
                    d="M0 6h20m0 0l-4-4m4 4l-4 4"
                    stroke={COLORS.ink40}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      {note && (
        <div
          style={{
            opacity: expanded ? 1 : 0,
            transition: `opacity 0.6s ease 0.7s`,
            marginTop: 12,
            background: COLORS.amberLight,
            border: '1px solid rgba(155,108,10,0.12)',
            borderRadius: 8,
            padding: '12px 16px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: COLORS.amber,
              marginBottom: 4,
            }}
          >
            What disappeared
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 13,
              lineHeight: 1.65,
              color: COLORS.amberDark,
              margin: 0,
            }}
          >
            {note}
          </p>
        </div>
      )}
    </div>
  );
}

function ChainNodeBubble({ node, expanded, delay }: { node: ChainNode; expanded: boolean; delay: number }) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: expanded ? 1 : 0,
        transform: expanded
          ? hovered ? 'translateY(-2px) scale(1.03)' : 'translateY(0) scale(1)'
          : 'translateY(12px) scale(1)',
        transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.3s ease`,
        background:
          node.type === 'origin'
            ? COLORS.chainBlueLight
            : node.type === 'final'
              ? COLORS.claimRedLight
              : '#fff',
        border: `1px solid ${
          node.type === 'origin'
            ? 'rgba(35,88,163,0.15)'
            : node.type === 'final'
              ? 'rgba(181,48,42,0.15)'
              : 'rgba(27,42,74,0.08)'
        }`,
        borderRadius: 8,
        padding: '10px 14px',
        minWidth: 120,
        textAlign: 'center' as const,
        cursor: node.url ? 'pointer' : 'default',
        boxShadow: hovered ? '0 4px 12px rgba(27,42,74,0.10)' : 'none',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 12,
          fontWeight: 600,
          color: node.type === 'final' ? COLORS.claimRed : COLORS.ink,
          lineHeight: 1.4,
          marginBottom: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        {node.name}
        {node.url && hovered && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
            <path d="M3 1h6v6M9 1L4 6" stroke={COLORS.chainBlue} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 12,
          color: COLORS.ink40,
        }}
      >
        {node.date}
      </div>
    </div>
  );

  if (node.url) {
    return (
      <a href={node.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return content;
}
