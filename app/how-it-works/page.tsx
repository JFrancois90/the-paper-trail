import type { Metadata } from 'next';
import { COLORS } from '@/lib/constants';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ScrollReveal from '@/components/ScrollReveal';

const H = 'var(--font-heading), sans-serif';
const B = 'var(--font-sans), sans-serif';

export const metadata: Metadata = {
  title: 'How it works | The Paper Trail',
  description:
    'Our three-step process: find the source, compare the numbers, trace the citation chain. Integrity before ideology.',
};

const steps = [
  {
    num: '01',
    title: 'Find the source',
    desc: 'When a politician quotes a figure, we track down the exact report, dataset, or study they say it comes from. Not a press release. Not a media summary. The actual document.',
    bg: '#e8f0fa',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="16" y="12" width="36" height="48" rx="4" stroke="#1b2a4a" strokeWidth="2" />
        <line x1="24" y1="24" x2="44" y2="24" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="32" x2="44" y2="32" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="40" x2="36" y2="40" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="56" cy="48" r="10" stroke="#1b2a4a" strokeWidth="2" />
        <path d="M52 48h8M56 44v8" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Compare',
    desc: 'We put what they said next to what the source actually says. Red on the left, green on the right. You can see the gap for yourself.',
    bg: '#fef3d0',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="8" y="16" width="26" height="40" rx="4" stroke="#b5302a" strokeWidth="2" />
        <rect x="46" y="16" width="26" height="40" rx="4" stroke="#1a6b42" strokeWidth="2" />
        <text x="21" y="40" textAnchor="middle" fill="#b5302a" fontSize="10" fontWeight="700" fontFamily="sans-serif">VS</text>
        <line x1="38" y1="28" x2="42" y2="28" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="38" y1="36" x2="42" y2="36" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="38" y1="44" x2="42" y2="44" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Trace the chain',
    desc: 'Sometimes a claim gets passed from outlet to outlet, changing slightly at each step. We trace the full citation chain to show exactly where the number shifted.',
    bg: '#e0f2e9',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="20" y="16" width="32" height="44" rx="4" stroke="#1b2a4a" strokeWidth="2" />
        <line x1="28" y1="28" x2="44" y2="28" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="36" x2="44" y2="36" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="50" cy="50" r="14" stroke="#1b2a4a" strokeWidth="2" />
        <line x1="60" y1="60" x2="68" y2="68" stroke="#1b2a4a" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <BackButton />
      <main
        id="main-content"
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '100px 28px 48px',
        }}
      >

        <ScrollReveal>
          <h1
            style={{
              fontFamily: H,
              fontSize: 'clamp(32px, 5vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: COLORS.navy,
              lineHeight: 1.15,
              margin: '0 0 8px',
            }}
          >
            What we do
          </h1>
          <p
            style={{
              fontFamily: B,
              fontSize: 18,
              color: COLORS.muted,
              margin: '0 0 40px',
            }}
          >
            Every investigation follows <strong style={{ color: COLORS.navy }}>three steps:</strong>
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} anim="fadeUp" delay={i * 0.15}>
              <div
                className="hover-card"
                style={{
                  background: step.bg,
                  border: '1px solid rgba(27,42,74,0.08)',
                  borderRadius: 14,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  boxShadow: '0 2px 8px rgba(27,42,74,0.04)',
                  height: '100%',
                }}
              >
                <div style={{ flexShrink: 0 }}>{step.icon}</div>
                <div>
                  <span
                    style={{
                      fontFamily: H,
                      fontSize: 56,
                      fontWeight: 700,
                      color: 'rgba(27,42,74,0.08)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </span>
                  <h2
                    style={{
                      fontFamily: H,
                      fontSize: 22,
                      fontWeight: 700,
                      color: COLORS.navy,
                      margin: '0 0 8px',
                    }}
                  >
                    {step.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: B,
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: COLORS.ink,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
