import type { Metadata } from 'next';
import { COLORS } from '@/lib/constants';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import SourceDocsNotice from '@/components/SourceDocsNotice';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'How it works | The Paper Trail',
  description:
    'Our three-step process: find the source, compare the numbers, trace the citation chain.',
};

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <BackButton />
      <main
        id="main-content"
        style={{
          maxWidth: 680,
          margin: '0 auto',
          padding: '100px 28px 48px',
        }}
      >
        <SourceDocsNotice />

        <ScrollReveal>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: COLORS.ink40,
              marginBottom: 16,
            }}
          >
            How it works
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 40,
              fontWeight: 400,
              letterSpacing: '-0.03em',
              color: COLORS.navy,
              lineHeight: 1.15,
              margin: '0 0 28px',
            }}
          >
            Three steps, every time
          </h1>
          <p style={{ ...bodyStyle, fontSize: 22, fontWeight: 600, color: COLORS.navy }}>
            Three steps. No opinion. Just numbers.
          </p>
        </ScrollReveal>

        {/* Step 1 */}
        <ScrollReveal delay={0.1}>
          <div style={stepContainer}>
            <span style={stepNumber}>01</span>
            <h2 style={h2Style}>Find the source</h2>
            <ul style={bulletList}>
              <li style={bulletItem}>A public figure quotes a number</li>
              <li style={bulletItem}>We find the exact report they say it came from</li>
              <li style={bulletItem}>Not a summary. Not a press release.</li>
              <li style={bulletItem}><strong style={{ color: COLORS.amber }}>The actual document.</strong></li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Step 2 */}
        <ScrollReveal delay={0.1}>
          <div style={stepContainer}>
            <span style={stepNumber}>02</span>
            <h2 style={h2Style}>Compare the numbers</h2>
            <ul style={bulletList}>
              <li style={bulletItem}>What they said goes on the left (red)</li>
              <li style={bulletItem}>What the source says goes on the right (green)</li>
              <li style={bulletItem}>You see both. You judge the gap.</li>
              <li style={bulletItem}>We add a <strong style={{ color: COLORS.amber }}>&ldquo;plain English&rdquo;</strong> box so anyone can understand it</li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Step 3 */}
        <ScrollReveal delay={0.1}>
          <div style={stepContainer}>
            <span style={stepNumber}>03</span>
            <h2 style={h2Style}>Trace the chain</h2>
            <ul style={bulletList}>
              <li style={bulletItem}>Some claims start accurate but get distorted as they spread</li>
              <li style={bulletItem}>Each outlet changes it slightly. Context drops. Definitions shift.</li>
              <li style={bulletItem}>We map every step from original source to final claim</li>
              <li style={bulletItem}>You see <strong style={{ color: COLORS.claimRed }}>exactly where it went wrong</strong></li>
            </ul>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans), sans-serif',
  fontSize: 16,
  lineHeight: 1.7,
  color: COLORS.ink60,
  margin: 0,
};

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-serif), serif',
  fontSize: 28,
  fontWeight: 400,
  letterSpacing: '-0.02em',
  color: COLORS.navy,
  margin: '8px 0 16px',
};

const stepNumber: React.CSSProperties = {
  fontFamily: 'var(--font-serif), serif',
  fontSize: 32,
  color: COLORS.navy,
  opacity: 0.15,
  letterSpacing: '-0.02em',
};

const bulletList: React.CSSProperties = {
  margin: 0,
  padding: '0 0 0 20px',
  listStyleType: 'disc',
};

const bulletItem: React.CSSProperties = {
  fontFamily: 'var(--font-sans), sans-serif',
  fontSize: 18,
  lineHeight: 1.7,
  color: COLORS.ink60,
  marginBottom: 8,
};

const stepContainer: React.CSSProperties = {
  marginTop: 48,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
};
