'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

const steps = [
  {
    title: 'The official number',
    who: 'HMRC',
    bg: COLORS.sourceGreenLight,
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 16px', lineHeight: 1.6 }}>
          HMRC publishes its annual tax gap. This is the difference between what should be paid and what actually is.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
          <Row label="Tax evasion" value="&pound;5.5bn" color={COLORS.sourceGreen} />
          <Row label="Tax avoidance" value="&pound;1.8bn" color={COLORS.sourceGreen} />
          <Row label="Total" value="&pound;7.3bn" color={COLORS.sourceGreen} bold />
        </div>
        <p style={{ fontFamily: B, fontSize: 13, color: COLORS.lightMuted, margin: 0 }}>Source: HMRC official figures</p>
      </>
    ),
  },
  {
    title: 'The NCA broadens the scope',
    who: 'National Crime Agency',
    bg: COLORS.amberLight,
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          The National Crime Agency estimates over &pound;100bn is laundered through or within the UK each year.
        </p>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          This covers drugs, fraud, trafficking, and criminal funds. This is <strong>not</strong> the same as tax evasion. It covers all economic crime.
        </p>
        <BarComparison left="&pound;7.3bn" leftLabel="HMRC tax gap" right="&pound;100bn" rightLabel="NCA economic crime" />
      </>
    ),
  },
  {
    title: 'The APPG inflates further',
    who: 'All-Party Parliamentary Group',
    bg: COLORS.claimRedLight,
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          The APPG report states: &ldquo;By the NCA&apos;s own conservative estimate, fraud and money laundering combined costs the UK economy &pound;290 billion a year, though some studies have put the cost even higher, at &pound;350 billion.&rdquo;
        </p>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          Notice: the NCA said &pound;100bn. The APPG said &pound;290bn. Then offered &pound;350bn as an upper end.
        </p>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          The APPG also claimed &pound;350bn equals &ldquo;the annual health and education budget combined.&rdquo; The actual 2024-25 health and education budget was &pound;423bn. Not even close.
        </p>
        <BarComparison left="&pound;100bn" leftLabel="NCA figure" right="&pound;350bn" rightLabel="APPG upper end" />
      </>
    ),
  },
  {
    title: 'The CIOT gives it authority',
    who: 'Chartered Institute of Taxation',
    bg: '#fff',
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          The CIOT quotes the APPG report: &ldquo;The groups suggest that the costs of economic crime and financial opacity are &lsquo;staggering&rsquo;, with some studies estimating it costs the UK &pound;350 billion a year.&rdquo;
        </p>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          The phrase is still &ldquo;economic crime and financial opacity&rdquo; here. Not tax evasion. But it now has the authority of the CIOT name behind it.
        </p>
      </>
    ),
  },
  {
    title: 'The final form',
    who: 'Public debate',
    bg: COLORS.claimRedLight,
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          By the time it reaches public debate, the claim becomes:
        </p>
        <p style={{ fontFamily: H, fontSize: 24, fontWeight: 700, color: COLORS.claimRed, margin: '0 0 16px' }}>
          &ldquo;&pound;350bn in tax evasion&rdquo;
        </p>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 12px', lineHeight: 1.6 }}>
          &ldquo;Economic crime and financial opacity&rdquo; became &ldquo;tax evasion.&rdquo; The number stayed at &pound;350bn. The definition shrank 48 times.
        </p>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', margin: '20px 0' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: H, fontSize: 36, fontWeight: 700, color: COLORS.sourceGreen, margin: 0 }}>&pound;5.5bn</p>
            <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: '4px 0 0' }}>HMRC official</p>
          </div>
          <p style={{ fontFamily: H, fontSize: 24, fontWeight: 700, color: COLORS.navy, alignSelf: 'center', margin: 0 }}>vs</p>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: H, fontSize: 36, fontWeight: 700, color: COLORS.claimRed, margin: 0 }}>&pound;350bn</p>
            <p style={{ fontFamily: B, fontSize: 12, color: COLORS.lightMuted, margin: '4px 0 0' }}>Claimed</p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Why this matters',
    who: '',
    bg: COLORS.amberLight,
    content: (
      <>
        <p style={{ fontFamily: B, fontSize: 17, lineHeight: 1.65, color: COLORS.amberDark, margin: '0 0 24px' }}>
          Any enforcement policy built on this number is budgeting for a problem 48 times larger than it actually is. That&apos;s not a rounding error. That&apos;s a completely different conversation.
        </p>
        <p style={{ fontFamily: B, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 12px' }}>
          Questions we think deserve answers
        </p>
        <ol style={{ fontFamily: B, fontSize: 15, lineHeight: 1.6, color: COLORS.muted, margin: 0, paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}>At which point was &ldquo;economic crime&rdquo; replaced with &ldquo;tax evasion&rdquo;?</li>
          <li style={{ marginBottom: 8 }}>If actual tax evasion is &pound;5.5bn, how does that change the cost-benefit of proposed enforcement?</li>
          <li>Why wasn&apos;t the HMRC official figure used from the start?</li>
        </ol>
      </>
    ),
  },
];

export default function CarelessWhispersPage() {
  const [step, setStep] = useState(0);
  const current = steps[step];

  return (
    <>
      <Nav />
      <main
        id="main-content"
        style={{
          maxWidth: 700,
          margin: '0 auto',
          padding: '100px 28px 80px',
        }}
      >
        <Link
          href="/"
          style={{ fontFamily: B, fontSize: 13, color: COLORS.lightMuted, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7l4 4" stroke={COLORS.lightMuted} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Back
        </Link>

        <h1 style={{ fontFamily: H, fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, color: COLORS.navy, margin: '0 0 8px', letterSpacing: '-0.02em' }}>
          Careless whispers
        </h1>
        <p style={{ fontFamily: B, fontSize: 16, color: COLORS.muted, margin: '0 0 32px', lineHeight: 1.5 }}>
          How numbers change as they pass from source to source.
        </p>

        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 8px', lineHeight: 1.6 }}>
          Some claims don&apos;t start wrong. They get wrong.
        </p>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 8px', lineHeight: 1.6 }}>
          A figure leaves one report and enters another. Each time, something gets lost.
        </p>
        <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 40px', lineHeight: 1.6 }}>
          The number stays. The context disappears.
        </p>

        {/* Progress bar */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 24 }}>
          {steps.map((_, i) => (
            <div
              key={i}
              onClick={() => setStep(i)}
              style={{
                flex: 1,
                height: 4,
                borderRadius: 2,
                background: i <= step ? COLORS.navy : 'rgba(27,42,74,0.1)',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
            />
          ))}
        </div>

        {/* Step label */}
        <p style={{ fontFamily: B, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted, margin: '0 0 6px' }}>
          Step {step + 1} of {steps.length}{current.who ? ` \u00b7 ${current.who}` : ''}
        </p>
        <h2 style={{ fontFamily: H, fontSize: 22, fontWeight: 700, color: COLORS.navy, margin: '0 0 20px' }}>
          {current.title}
        </h2>

        {/* Step card */}
        <div
          style={{
            background: current.bg,
            borderRadius: 14,
            border: '1px solid rgba(27,42,74,0.06)',
            padding: '28px',
            marginBottom: 24,
          }}
        >
          {current.content}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            style={{
              fontFamily: B, fontSize: 14, fontWeight: 600, color: step === 0 ? COLORS.lightMuted : COLORS.navy,
              background: 'transparent', border: `1.5px solid ${step === 0 ? 'rgba(27,42,74,0.1)' : COLORS.navy}`,
              borderRadius: 8, padding: '10px 24px', cursor: step === 0 ? 'default' : 'pointer', minHeight: 44,
            }}
          >
            &larr; Back
          </button>
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              style={{
                fontFamily: B, fontSize: 14, fontWeight: 600, color: '#fff',
                background: COLORS.navy, border: 'none', borderRadius: 8,
                padding: '10px 24px', cursor: 'pointer', minHeight: 44,
              }}
            >
              Next &rarr;
            </button>
          ) : (
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'Careless Whispers', text: 'How \u00a35.5bn became \u00a3350bn through a chain of citations.', url: 'https://thepapertrail.uk/careless-whispers' });
                } else {
                  navigator.clipboard?.writeText('https://thepapertrail.uk/careless-whispers');
                }
              }}
              style={{
                fontFamily: B, fontSize: 14, fontWeight: 600, color: '#fff',
                background: COLORS.navy, border: 'none', borderRadius: 8,
                padding: '10px 24px', cursor: 'pointer', minHeight: 44,
              }}
            >
              Share this trail &rarr;
            </button>
          )}
        </div>
      </main>
    </>
  );
}

function Row({ label, value, color, bold }: { label: string; value: string; color: string; bold?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(27,42,74,0.04)' }}>
      <span style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 14, color: '#5a5d66' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: bold ? 18 : 15, fontWeight: bold ? 700 : 600, color }} dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

function BarComparison({ left, leftLabel, right, rightLabel }: { left: string; leftLabel: string; right: string; rightLabel: string }) {
  return (
    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', margin: '16px 0 0' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 20, fontWeight: 700, color: '#1a6b42', margin: 0 }} dangerouslySetInnerHTML={{ __html: left }} />
        <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 11, color: '#8b8e99', margin: '2px 0 0' }}>{leftLabel}</p>
      </div>
      <p style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 16, fontWeight: 700, color: '#1b2a4a', alignSelf: 'center', margin: 0 }}>&rarr;</p>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 20, fontWeight: 700, color: '#b5302a', margin: 0 }} dangerouslySetInnerHTML={{ __html: right }} />
        <p style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 11, color: '#8b8e99', margin: '2px 0 0' }}>{rightLabel}</p>
      </div>
    </div>
  );
}
