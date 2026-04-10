import type { Metadata } from 'next';
import { COLORS } from '@/lib/constants';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
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
          <p style={bodyStyle}>
            Every investigation follows the same process. No editorialising, no opinion pieces.
            We start with a claim, find the source, and lay the numbers side by side.
          </p>
        </ScrollReveal>

        {/* Step 1 */}
        <ScrollReveal delay={0.1}>
          <div style={stepContainer}>
            <span style={stepNumber}>01</span>
            <h2 style={h2Style}>Find the source</h2>
            <p style={bodyStyle}>
              When a politician quotes a number, we don&apos;t take it at face value. We track
              down the exact report, dataset, or study they say it comes from. Not a newspaper
              summary. Not a press release. The actual document.
            </p>
            <p style={bodyStyle}>
              For example, when Clive Lewis MP claimed Railtrack was nationalised for &pound;500
              million, we went to the original financial records and court documents. When the
              Green Party cited the Equality Trust on billionaire numbers, we downloaded the report
              and read the table they were referring to.
            </p>
            <p style={bodyStyle}>
              This step is where most fact-checking falls down. People check whether a claim
              &ldquo;sounds right&rdquo; or whether it matches other reporting. We skip all of
              that and go straight to the cited source.
            </p>
          </div>
        </ScrollReveal>

        {/* Step 2 */}
        <ScrollReveal delay={0.1}>
          <div style={stepContainer}>
            <span style={stepNumber}>02</span>
            <h2 style={h2Style}>Compare the numbers</h2>
            <p style={bodyStyle}>
              Once we have the source, we put the politician&apos;s claim next to what the source
              actually says. Red on the left (what they said), green on the right (what the
              source shows). You can see both versions at the same time and judge the gap for
              yourself.
            </p>
            <p style={bodyStyle}>
              We also translate the comparison into plain language. Our &ldquo;in plain
              english&rdquo; boxes use everyday analogies so you don&apos;t need a background in
              finance or policy to understand what&apos;s going on. If Railtrack&apos;s true cost
              was 15 times higher than claimed, we explain that it&apos;s like buying a house
              for &pound;1 when it has a &pound;500,000 mortgage.
            </p>
            <p style={bodyStyle}>
              The bar charts make the scale of the discrepancy visible at a glance. Numbers in a
              paragraph can blur together. A bar that&apos;s fifteen times longer than the one
              next to it doesn&apos;t.
            </p>
          </div>
        </ScrollReveal>

        {/* Step 3 */}
        <ScrollReveal delay={0.1}>
          <div style={stepContainer}>
            <span style={stepNumber}>03</span>
            <h2 style={h2Style}>Trace the chain</h2>
            <p style={bodyStyle}>
              Some claims don&apos;t start inaccurate. They get distorted as they pass from one
              outlet to the next. A nuanced figure with caveats becomes a clean headline number.
              Context drops away. Definitions shift while the number stays the same.
            </p>
            <p style={bodyStyle}>
              Our citation chains map this process. We show every step from the original source to
              the final claim, with dates and names, so you can see exactly where things changed.
              The &pound;350 billion tax evasion figure, for instance, started as an HMRC estimate
              of &pound;5.5 billion for actual tax evasion. By the time it had been cited and
              re-cited through parliamentary groups and think tanks, &ldquo;economic crime and
              financial opacity&rdquo; had become &ldquo;tax evasion&rdquo; and the number had
              grown 48 times.
            </p>
            <p style={bodyStyle}>
              Not every investigation has a citation chain. Some claims are simply wrong at the
              source. But when one does exist, tracing it reveals something that a simple
              true-or-false verdict never could: how misinformation spreads, step by step, through
              people who probably think they&apos;re being rigorous.
            </p>
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

const stepContainer: React.CSSProperties = {
  marginTop: 48,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
};
