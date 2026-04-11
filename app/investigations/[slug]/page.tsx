import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { COLORS } from '@/lib/constants';
import { investigations } from '@/data/investigations';
import Nav from '@/components/Nav';
import BackButton from '@/components/BackButton';
import SourceDocsNotice from '@/components/SourceDocsNotice';
import MultiplierBadge from '@/components/MultiplierBadge';
import SaidVsSource from '@/components/SaidVsSource';
import PlainEnglishBox from '@/components/PlainEnglishBox';
import ImpactBox from '@/components/ImpactBox';
import QuestionsBlock from '@/components/QuestionsBlock';
import ScrollReveal from '@/components/ScrollReveal';
import HighlightedText from '@/components/HighlightedText';
import Highlight from '@/components/Highlight';
import CorrectionBox from '@/components/CorrectionBox';
import RebuttalBox from '@/components/RebuttalBox';
import StatusBadge from '@/components/StatusBadge';
import StudentDebtExtras from '@/components/StudentDebtExtras';
import ReformTaxExtras from '@/components/ReformTaxExtras';
import RailtrackExtras from '@/components/RailtrackExtras';
import StudentDebt97kExtras from '@/components/StudentDebt97kExtras';
import TimesStudentDebtExtras from '@/components/TimesStudentDebtExtras';
import { HIGHLIGHT_PHRASES } from '@/lib/highlights';
import InvestigationPageBars from './InvestigationPageBars';
import InvestigationPageChain from './InvestigationPageChain';
import WatchButton from '@/components/WatchButton';

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

  const isCorrected = !!inv.correction && inv.slug !== 'student-debt-97k';

  return (
    <>
      <Nav />
      <BackButton />
      <main
        id="main-content"
        className="inv-snap-container"
      >
        {/* ─── SECTION 1: THE CLAIM ─── */}
        <section className="inv-snap-section">
          <div className="inv-inner">
            <div className="inv-source-notice-desktop">
              <SourceDocsNotice />
            </div>

            {/* Back link */}
            <Link
              href="/campaigns"
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 'var(--inv-source-link, 14px)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: COLORS.ink40,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginBottom: 24,
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
              Back to investigations
            </Link>

        {/* Position banner */}
        <div
          style={{
            background: '#fae9b0',
            borderRadius: 10,
            padding: '14px 24px',
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}
        >
          <span style={{ fontSize: 18, flexShrink: 0 }}>&#x1F4E2;</span>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 'var(--inv-banner, 18px)',
              lineHeight: 1.5,
              color: COLORS.navy,
              margin: 0,
            }}
          >
            {inv.slug === 'railtrack-500m' && 'We support public accountability for nationalisation costs. We disagree with incorrect figures, regardless of political alignment.'}
            {(inv.slug === 'billionaire-numbers' || inv.slug === 'cgt-lowest-g7') && 'We support action on wealth inequality and fair taxation. We disagree with incorrect figures, regardless of political alignment.'}
            {inv.slug === 'student-debt-claim' && 'We support fair access to higher education and reform of student debt. We disagree with incorrect figures, regardless of political alignment.'}
            {inv.slug === 'reform-tax-canary' && 'We support taxes on those who can afford it. We disagree with incorrect figures, regardless of political alignment.'}
            {inv.slug === 'student-debt-97k' && 'We support reform of the student loan system. We disagree with incorrect figures, regardless of political alignment.'}
            {inv.slug === '350bn-tax-evasion' && 'We support action on tax evasion. We disagree with incorrect figures, regardless of political alignment.'}
            {inv.slug === 'times-student-debt-37' && 'We support transparency in student finance and reform of the loan system. We disagree with incorrect figures, regardless of who publishes them.'}
          </p>
        </div>

        <ScrollReveal>
          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
              <MultiplierBadge multiplier={inv.multiplier} label={inv.multiplierLabel} />
              {inv.rebuttalStatus && (
                <StatusBadge
                  status={inv.rebuttalStatus.status}
                  correction={inv.correction}
                  invited={inv.rebuttalStatus.invited}
                  dateInvited={inv.rebuttalStatus.dateInvited}
                  responseText={inv.rebuttalStatus.responseText}
                />
              )}
              <span
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 'var(--inv-badge, 16px)',
                  color: COLORS.muted,
                }}
              >
                {inv.who} &middot; {inv.date}
              </span>
              <WatchButton investigationSlug={inv.slug} investigationTitle={inv.claim} />
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 'var(--inv-title, 36px)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: COLORS.ink,
                lineHeight: 1.25,
                margin: '0 0 12px',
              }}
            >
              &ldquo;{inv.claim}&rdquo;
            </h1>
            {inv.sourceUrl && (
              <a
                href={inv.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 'var(--inv-source-link, 14px)',
                  fontWeight: 600,
                  color: COLORS.chainBlue,
                  textDecoration: 'none',
                  background: 'rgba(35,88,163,0.06)',
                  padding: '5px 12px',
                  borderRadius: 6,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M5 1h6v6M11 1L5.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 7v3.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                View original source
              </a>
            )}
          </div>
        </ScrollReveal>

        {/* Said vs Source */}
            <SaidVsSource
              saidQuote={inv.saidQuote}
              sourceLabel={inv.sourceLabel}
              sourceImage={inv.sourceImage}
              sourceOneLiner={inv.sourceOneLiner}
              sourceFallback={
                <SourceBullets
                  text={inv.source}
                  phrases={HIGHLIGHT_PHRASES[inv.slug] || []}
                />
              }
            />
          </div>
        </section>

        {/* ─── SECTION 2: PLAIN ENGLISH + THE NUMBERS ─── */}
        <section className="inv-snap-section">
          <div className="inv-inner">
            <PlainEnglishBox analogy={inv.analogy} />
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                border: '1px solid rgba(27,42,74,0.08)',
                padding: '28px 28px',
                marginTop: 28,
              }}
            >
              <InvestigationPageBars data={inv.barData} />
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: CARELESS WHISPERS + WHY THIS MATTERS ─── */}
        <section className="inv-snap-section">
          <div className="inv-inner">
            {inv.whisperChain && (
              <div
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  border: '1px solid rgba(27,42,74,0.08)',
                  padding: '28px 28px',
                  marginBottom: 28,
                }}
              >
                <InvestigationPageChain chain={inv.whisperChain} note={inv.whisperNote} />
              </div>
            )}
            <ImpactBox impact={inv.impact} />
          </div>
        </section>

        {/* ─── SECTION 4: WHERE THIS ARGUMENT LEADS (extras) ─── */}
        {(inv.slug === 'railtrack-500m' || inv.slug === 'student-debt-claim' || inv.slug === 'reform-tax-canary' || inv.slug === 'student-debt-97k' || inv.slug === 'times-student-debt-37') && (
          <section className="inv-snap-section">
            <div className="inv-inner">
              {inv.slug === 'railtrack-500m' && <RailtrackExtras />}
              {inv.slug === 'student-debt-claim' && <StudentDebtExtras />}
              {inv.slug === 'reform-tax-canary' && <ReformTaxExtras />}
              {inv.slug === 'student-debt-97k' && <StudentDebt97kExtras />}
              {inv.slug === 'times-student-debt-37' && <TimesStudentDebtExtras />}
            </div>
          </section>
        )}

        {/* ─── SECTION 5: QUESTIONS + OPEN INVITATION ─── */}
        {!isCorrected && (
          <section className="inv-snap-section">
            <div className="inv-inner">
              <div
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  border: '1px solid rgba(27,42,74,0.08)',
                  padding: '28px 28px',
                  marginBottom: 28,
                }}
              >
                <QuestionsBlock questions={inv.questions} />
              </div>

              {inv.rebuttalStatus && (
                <RebuttalBox
                  invited={inv.rebuttalStatus.invited}
                  dateInvited={inv.rebuttalStatus.dateInvited}
                  status={inv.rebuttalStatus.status}
                  responseText={inv.rebuttalStatus.responseText}
                />
              )}
            </div>
          </section>
        )}

        {/* Correction box (for corrected investigations, shown inline) */}
        {inv.correction && (
          <section className="inv-snap-section">
            <div className="inv-inner">
              <CorrectionBox
                text={inv.correction}
                date={inv.slug === 'student-debt-97k' ? 'Feb 2026' : undefined}
                variant={inv.slug === 'student-debt-97k' ? 'disclaimer' : 'correction'}
              />
              {isCorrected && inv.rebuttalStatus && (
                <div style={{ marginTop: 28 }}>
                  <RebuttalBox
                    invited={inv.rebuttalStatus.invited}
                    dateInvited={inv.rebuttalStatus.dateInvited}
                    status={inv.rebuttalStatus.status}
                    responseText={inv.rebuttalStatus.responseText}
                  />
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </>
  );
}

function SourceBullets({ text, phrases }: { text: string; phrases: string[] }) {
  const bullets = text
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  if (bullets.length <= 1) {
    return <HighlightedText text={text} phrases={phrases} />;
  }

  // Sort phrases by length descending for matching
  const sorted = [...phrases].sort((a, b) => b.length - a.length);
  const escaped = sorted.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = escaped.length ? new RegExp(`(${escaped.join('|')})`, 'g') : null;

  return (
    <ul style={{ margin: 0, padding: '0 0 0 18px', listStyleType: 'disc', fontSize: 'var(--inv-bullet, 18px)' }}>
      {bullets.map((bullet, i) => {
        // Check for __punchline__ markers
        const isPunchline = bullet.includes('__');
        const cleanBullet = bullet.replace(/__/g, '');
        return (
          <li
            key={i}
            style={{
              marginBottom: i < bullets.length - 1 ? 6 : 0,
              fontWeight: isPunchline ? 700 : undefined,
              textDecoration: isPunchline ? 'underline' : undefined,
              textDecorationColor: isPunchline ? 'rgba(26,107,66,0.4)' : undefined,
              textUnderlineOffset: isPunchline ? '4px' : undefined,
            }}
          >
            {pattern
              ? cleanBullet.split(pattern).map((part, j) =>
                  phrases.includes(part) ? <Highlight key={j}>{part}</Highlight> : <span key={j}>{part}</span>
                )
              : cleanBullet}
          </li>
        );
      })}
    </ul>
  );
}
