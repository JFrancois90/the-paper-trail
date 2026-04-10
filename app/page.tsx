import Link from 'next/link';
import { COLORS } from '@/lib/constants';
import { investigations } from '@/data/investigations';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import InvestigationCard from '@/components/InvestigationCard';
import SubscribeCTA from '@/components/SubscribeCTA';
import ScrollReveal from '@/components/ScrollReveal';
import CountUp from '@/components/CountUp';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section
          aria-label="Introduction"
          style={{
            padding: '120px 28px 48px',
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          <ScrollReveal>
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
              Non-partisan fact-checking
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 52,
                fontWeight: 400,
                letterSpacing: '-0.03em',
                color: COLORS.navy,
                lineHeight: 1.1,
                margin: '0 0 20px',
                maxWidth: 680,
              }}
            >
              Taking politics out of politics
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 18,
                lineHeight: 1.7,
                color: COLORS.ink80,
                maxWidth: 560,
                margin: '0 0 14px',
              }}
            >
              Politicians use numbers to win arguments. Sometimes those numbers are wrong.
              We check them.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 14,
                lineHeight: 1.7,
                color: COLORS.ink40,
                maxWidth: 520,
                margin: '0 0 10px',
              }}
            >
              No ratings. No opinion. We just compare what they said with what their own
              sources show.
            </p>
            <Link
              href="/about#the-bus"
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 13,
                color: COLORS.ink40,
                textDecoration: 'none',
                borderBottom: `1px solid rgba(27,42,74,0.15)`,
                paddingBottom: 1,
                display: 'inline-block',
                marginBottom: 36,
              }}
            >
              Remember the bus? So do we. That&apos;s why this exists.
            </Link>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.15}>
            <div
              style={{
                display: 'flex',
                gap: 40,
                flexWrap: 'wrap',
                paddingBottom: 36,
                borderBottom: '1px solid rgba(27,42,74,0.08)',
              }}
            >
              <StatItem end={4} label="investigations" />
              <StatItem end={3} label="parties checked" />
              <StatItem end={48} suffix="\u00d7" label="largest discrepancy" />
            </div>
          </ScrollReveal>
        </section>

        {/* How it works */}
        <section
          aria-label="How it works"
          style={{
            padding: '48px 28px',
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          <ScrollReveal>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 10,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: COLORS.ink40,
                marginBottom: 24,
              }}
            >
              How it works
            </p>
          </ScrollReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
            }}
          >
            {[
              {
                step: '01',
                title: 'Find the source',
                desc: 'When a politician quotes a number, we track down the exact report or dataset they say it comes from.',
              },
              {
                step: '02',
                title: 'Compare the numbers',
                desc: 'We put what they said next to what their own source actually says. Red on the left, green on the right.',
              },
              {
                step: '03',
                title: 'Trace the chain',
                desc: 'Some claims get passed along and distorted. We map how a number changes as it moves from outlet to outlet.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 14,
                    border: '1px solid rgba(27,42,74,0.08)',
                    padding: '22px 20px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontSize: 28,
                      color: COLORS.navy,
                      opacity: 0.2,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.step}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontSize: 18,
                      fontWeight: 400,
                      color: COLORS.ink,
                      margin: '8px 0 8px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans), sans-serif',
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: COLORS.ink60,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Investigations */}
        <section
          aria-label="Investigations"
          style={{
            padding: '48px 28px',
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          <ScrollReveal>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 10,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: COLORS.ink40,
                marginBottom: 24,
              }}
            >
              Latest investigations
            </p>
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {investigations.map((inv) => (
              <ScrollReveal key={inv.id}>
                <InvestigationCard investigation={inv} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* About teaser */}
        <section
          aria-label="About The Paper Trail"
          style={{
            padding: '48px 28px',
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          <ScrollReveal>
            <div
              style={{
                background: '#fff',
                borderRadius: 14,
                border: '1px solid rgba(27,42,74,0.08)',
                padding: '32px 28px',
                textAlign: 'center',
                maxWidth: 600,
                margin: '0 auto',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: 28,
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: COLORS.navy,
                  margin: '0 0 12px',
                }}
              >
                We campaign for integrity, not ideology
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: COLORS.ink60,
                  margin: '0 0 4px',
                }}
              >
                We don&apos;t have a problem with politicians disagreeing. We have a problem
                with politicians using wrong numbers. Every party gets the same standard. No
                exceptions.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Subscribe */}
        <SubscribeCTA />
      </main>
      <Footer />
    </>
  );
}

function StatItem({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-serif), serif',
          fontSize: 36,
          color: COLORS.navy,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}
      >
        <CountUp end={end} suffix={suffix} />
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 10,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: COLORS.ink40,
          marginTop: 4,
        }}
      >
        {label}
      </div>
    </div>
  );
}
