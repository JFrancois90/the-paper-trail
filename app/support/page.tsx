'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { COLORS } from '@/lib/constants';

const H = 'var(--font-heading), sans-serif';
const B = 'var(--font-sans), sans-serif';

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main
        id="main-content"
        style={{
          maxWidth: 700,
          margin: '0 auto',
          padding: '120px 28px 64px',
        }}
      >
        <ScrollReveal>
          <h1
            style={{
              fontFamily: H,
              fontSize: 'clamp(32px, 5vw, 44px)',
              fontWeight: 700,
              color: COLORS.navy,
              margin: '0 0 12px',
              letterSpacing: '-0.02em',
            }}
          >
            Support The Paper&nbsp;Trail
          </h1>
          <p
            style={{
              fontFamily: B,
              fontSize: 18,
              lineHeight: 1.6,
              color: COLORS.muted,
              margin: '0 0 40px',
            }}
          >
            Help us keep checking the numbers.
          </p>
        </ScrollReveal>

        <ScrollReveal anim="fadeUp" delay={0.1}>
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(27,42,74,0.08)',
              borderRadius: 14,
              padding: '32px 28px',
              marginBottom: 32,
            }}
          >
            <h2
              style={{
                fontFamily: H,
                fontSize: 20,
                fontWeight: 700,
                color: COLORS.navy,
                margin: '0 0 20px',
              }}
            >
              Who we are
            </h2>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              {[
                'This is an independent publication',
                'We are not affiliated with any political party',
                'We constantly investigate, but we only publish when things need to be addressed',
                "We don\u2019t promise content for content\u2019s sake \u2014 we publish when things need to be corrected",
              ].map((point, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: B,
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: COLORS.ink,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      color: COLORS.amber,
                      fontWeight: 700,
                      fontSize: 18,
                      lineHeight: 1.4,
                      flexShrink: 0,
                    }}
                  >
                    &bull;
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 20 }}>
              <Link
                href="/about"
                style={{
                  fontFamily: B,
                  fontSize: 14,
                  fontWeight: 600,
                  color: COLORS.chainBlue,
                  textDecoration: 'none',
                }}
              >
                Full transparency: read our methodology &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal anim="fadeUp" delay={0.2}>
          <div
            style={{
              background: COLORS.navy,
              borderRadius: 14,
              padding: '40px 32px',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: H,
                fontSize: 22,
                fontWeight: 700,
                color: '#fff',
                margin: '0 0 12px',
              }}
            >
              Support our work
            </h2>
            <p
              style={{
                fontFamily: B,
                fontSize: 16,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.7)',
                margin: '0 0 28px',
                maxWidth: 440,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Donations are coming soon. In the meantime, subscribing and sharing our investigations is the best way to support&nbsp;us.
            </p>

            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 10,
                padding: '24px',
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontFamily: B,
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: COLORS.amber,
                  margin: '0 0 8px',
                }}
              >
                Coming soon
              </p>
              <p
                style={{
                  fontFamily: B,
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.6)',
                  margin: 0,
                }}
              >
                Direct donations via a secure payment platform. Sign up below to be notified when this goes&nbsp;live.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector('input') as HTMLInputElement;
                if (input?.value) {
                  window.open(
                    `https://thepapertrailuk.substack.com/subscribe?email=${encodeURIComponent(input.value)}`,
                    '_blank'
                  );
                }
              }}
              style={{
                display: 'flex',
                gap: 10,
                maxWidth: 400,
                margin: '0 auto',
              }}
            >
              <label htmlFor="support-email" style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}>
                Email address
              </label>
              <input
                id="support-email"
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  fontFamily: B,
                  fontSize: 14,
                  outline: 'none',
                  minHeight: 44,
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '12px 24px',
                  borderRadius: 8,
                  border: 'none',
                  background: '#fff',
                  color: COLORS.navy,
                  fontFamily: B,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  minHeight: 44,
                }}
              >
                Notify me
              </button>
            </form>
          </div>
        </ScrollReveal>

        <ScrollReveal anim="fadeUp" delay={0.3}>
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <p
              style={{
                fontFamily: B,
                fontSize: 15,
                color: COLORS.muted,
                margin: '0 0 16px',
              }}
            >
              You can also support us by sharing our work:
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/campaigns"
                style={{
                  fontFamily: B,
                  fontSize: 14,
                  fontWeight: 600,
                  color: COLORS.navy,
                  textDecoration: 'none',
                  border: `1.5px solid ${COLORS.navy}`,
                  borderRadius: 8,
                  padding: '10px 20px',
                }}
              >
                Browse investigations
              </Link>
              <Link
                href="/subscribe"
                style={{
                  fontFamily: B,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#fff',
                  textDecoration: 'none',
                  background: COLORS.navy,
                  borderRadius: 8,
                  padding: '10px 20px',
                }}
              >
                Subscribe
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
