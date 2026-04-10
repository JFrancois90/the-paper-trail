import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { COLORS } from '@/lib/constants';
import { investigations } from '@/data/investigations';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MultiplierBadge from '@/components/MultiplierBadge';
import SaidVsSource from '@/components/SaidVsSource';
import PlainEnglishBox from '@/components/PlainEnglishBox';
import ImpactBox from '@/components/ImpactBox';
import QuestionsBlock from '@/components/QuestionsBlock';
import ScrollReveal from '@/components/ScrollReveal';
import HighlightedText from '@/components/HighlightedText';
import CorrectionBox from '@/components/CorrectionBox';
import { HIGHLIGHT_PHRASES } from '@/lib/highlights';
import InvestigationPageBars from './InvestigationPageBars';
import InvestigationPageChain from './InvestigationPageChain';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return investigations.map((inv) => ({ slug: inv.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const inv = investigations.find((i) => i.slug === slug);
  if (!inv) return {};
  return {
    title: `${inv.claim} | The Paper Trail`,
    description: `We checked ${inv.who}'s claim: "${inv.claim}". Here's what their own source actually says.`,
    openGraph: {
      title: `${inv.claim} | The Paper Trail`,
      description: `We checked ${inv.who}'s claim and compared it to their cited source.`,
      siteName: 'The Paper Trail',
      type: 'article',
    },
  };
}

export default async function InvestigationPage({ params }: PageProps) {
  const { slug } = await params;
  const inv = investigations.find((i) => i.slug === slug);
  if (!inv) notFound();

  const related = investigations.filter((i) => i.slug !== slug).slice(0, 2);

  return (
    <>
      <Nav />
      <main
        id="main-content"
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '100px 28px 48px',
        }}
      >
        {/* Back link */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.ink40,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            marginBottom: 32,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 3L5 7l4 4"
              stroke={COLORS.ink40}
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All investigations
        </Link>

        <ScrollReveal>
          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
              <MultiplierBadge multiplier={inv.multiplier} label={inv.multiplierLabel} />
              <span
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 11,
                  color: COLORS.ink40,
                }}
              >
                {inv.who} &middot; {inv.date}
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 36,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: COLORS.ink,
                lineHeight: 1.25,
                margin: 0,
              }}
            >
              &ldquo;{inv.claim}&rdquo;
            </h1>
          </div>
        </ScrollReveal>

        {/* Said vs Source (full width) */}
        <ScrollReveal>
          <div style={{ marginBottom: 28 }}>
            <SaidVsSource
              saidQuote={inv.saidQuote}
              sourceLabel={inv.sourceLabel}
              sourceImage={inv.sourceImage}
              sourceOneLiner={inv.sourceOneLiner}
              sourceFallback={
                <HighlightedText
                  text={inv.source}
                  phrases={HIGHLIGHT_PHRASES[inv.slug] || []}
                />
              }
            />
          </div>
        </ScrollReveal>

        {/* Plain english */}
        <ScrollReveal>
          <div style={{ marginBottom: 28 }}>
            <PlainEnglishBox analogy={inv.analogy} />
          </div>
        </ScrollReveal>

        {/* Bar chart */}
        <ScrollReveal>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              border: '1px solid rgba(27,42,74,0.08)',
              padding: '22px 24px',
              marginBottom: 28,
            }}
          >
            <InvestigationPageBars data={inv.barData} />
          </div>
        </ScrollReveal>

        {/* Whisper chain */}
        {inv.whisperChain && (
          <ScrollReveal>
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                border: '1px solid rgba(27,42,74,0.08)',
                padding: '22px 24px',
                marginBottom: 28,
              }}
            >
              <InvestigationPageChain chain={inv.whisperChain} note={inv.whisperNote} />
            </div>
          </ScrollReveal>
        )}

        {/* Impact */}
        <ScrollReveal>
          <div style={{ marginBottom: 28 }}>
            <ImpactBox impact={inv.impact} />
          </div>
        </ScrollReveal>

        {/* Questions */}
        <ScrollReveal>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              border: '1px solid rgba(27,42,74,0.08)',
              padding: '22px 24px',
              marginBottom: 48,
            }}
          >
            <QuestionsBlock questions={inv.questions} />
          </div>
        </ScrollReveal>

        {/* Correction box */}
        {inv.correction && (
          <ScrollReveal>
            <div style={{ marginBottom: 48 }}>
              <CorrectionBox text={inv.correction} />
            </div>
          </ScrollReveal>
        )}

        {/* Related investigations */}
        {related.length > 0 && (
          <section aria-label="Related investigations" style={{ marginBottom: 48 }}>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 10,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: COLORS.ink40,
                marginBottom: 16,
              }}
            >
              More investigations
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/investigations/${r.slug}`}
                  style={{
                    textDecoration: 'none',
                    background: '#fff',
                    borderRadius: 12,
                    border: '1px solid rgba(27,42,74,0.08)',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <MultiplierBadge multiplier={r.multiplier} label={r.multiplierLabel} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif), serif',
                        fontSize: 16,
                        color: COLORS.ink,
                      }}
                    >
                      &ldquo;{r.claim}&rdquo;
                    </span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <path
                      d="M6 4l4 4-4 4"
                      stroke={COLORS.ink40}
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
