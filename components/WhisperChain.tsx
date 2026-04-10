'use client';

import { COLORS } from '@/lib/constants';

interface ChainNode {
  name: string;
  date: string;
  type: 'origin' | 'mid' | 'final';
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
            fontSize: 9,
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
              <div
                style={{
                  opacity: expanded ? 1 : 0,
                  transform: expanded ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`,
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
                  textAlign: 'center',
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
                  }}
                >
                  {node.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 10,
                    color: COLORS.ink40,
                  }}
                >
                  {node.date}
                </div>
              </div>

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
              fontSize: 9,
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
