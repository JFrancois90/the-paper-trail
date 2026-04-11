'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { COLORS } from '@/lib/constants';

const H = 'var(--font-heading), sans-serif';
const B = 'var(--font-sans), sans-serif';

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      window.open(
        `https://thepapertrailuk.substack.com/subscribe?email=${encodeURIComponent(email)}`,
        '_blank'
      );
      setSubmitted(true);
    }
  }

  return (
    <>
      <Nav />
      <main
        id="main-content"
        style={{
          maxWidth: 560,
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
              margin: '0 0 8px',
              letterSpacing: '-0.02em',
            }}
          >
            Subscribe
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
            Get notified when we publish new&nbsp;investigations.
          </p>
        </ScrollReveal>

        {/* Email signup */}
        <ScrollReveal anim="fadeUp" delay={0.1}>
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(27,42,74,0.08)',
              borderRadius: 14,
              padding: '32px 28px',
              marginBottom: 24,
            }}
          >
            <h2
              style={{
                fontFamily: H,
                fontSize: 18,
                fontWeight: 700,
                color: COLORS.navy,
                margin: '0 0 20px',
              }}
            >
              Sign up with email
            </h2>

            {submitted ? (
              <div
                style={{
                  background: COLORS.sourceGreenLight,
                  borderRadius: 10,
                  padding: '20px 24px',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontFamily: B, fontSize: 16, fontWeight: 600, color: COLORS.sourceGreen, margin: 0 }}>
                  Check your email to confirm your subscription.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit}>
                <label
                  htmlFor="subscribe-email"
                  style={{
                    fontFamily: B,
                    fontSize: 14,
                    fontWeight: 500,
                    color: COLORS.muted,
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  Email address
                </label>
                <input
                  id="subscribe-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 8,
                    border: '1px solid rgba(27,42,74,0.15)',
                    background: '#fff',
                    color: COLORS.ink,
                    fontFamily: B,
                    fontSize: 15,
                    outline: 'none',
                    minHeight: 48,
                    boxSizing: 'border-box',
                    marginBottom: 14,
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '14px 24px',
                    borderRadius: 8,
                    border: 'none',
                    background: COLORS.navy,
                    color: '#fff',
                    fontFamily: B,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    minHeight: 48,
                  }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>

        {/* Social login options */}
        <ScrollReveal anim="fadeUp" delay={0.2}>
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(27,42,74,0.08)',
              borderRadius: 14,
              padding: '32px 28px',
              marginBottom: 24,
            }}
          >
            <h2
              style={{
                fontFamily: H,
                fontSize: 18,
                fontWeight: 700,
                color: COLORS.navy,
                margin: '0 0 8px',
              }}
            >
              Or sign up with
            </h2>
            <p
              style={{
                fontFamily: B,
                fontSize: 13,
                color: COLORS.lightMuted,
                margin: '0 0 20px',
              }}
            >
              Coming soon
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Sign up with Google', icon: 'G', bg: '#fff', border: '1px solid rgba(27,42,74,0.15)', color: COLORS.ink },
                { label: 'Sign up with Facebook', icon: 'f', bg: '#1877F2', border: 'none', color: '#fff' },
                { label: 'Sign up with Instagram', icon: 'IG', bg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', border: 'none', color: '#fff' },
              ].map((opt) => (
                <button
                  key={opt.label}
                  disabled
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 8,
                    border: opt.border,
                    background: opt.bg,
                    color: opt.color,
                    fontFamily: B,
                    fontSize: 15,
                    fontWeight: 500,
                    cursor: 'not-allowed',
                    opacity: 0.5,
                    minHeight: 48,
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: 13,
                      flexShrink: 0,
                    }}
                  >
                    {opt.icon}
                  </span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Privacy note */}
        <ScrollReveal anim="fadeUp" delay={0.3}>
          <div
            style={{
              background: 'rgba(27,42,74,0.03)',
              borderRadius: 10,
              padding: '20px 24px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: B,
                fontSize: 14,
                lineHeight: 1.6,
                color: COLORS.muted,
                margin: 0,
              }}
            >
              We&apos;ll never spam you. Unsubscribe anytime. We only send emails when we publish a new investigation or have an important&nbsp;update.
            </p>
          </div>
        </ScrollReveal>

        {/* Substack badge */}
        <ScrollReveal anim="fadeUp" delay={0.35}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6719', display: 'inline-block' }} />
            <span style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.lightMuted }}>
              Powered by Substack
            </span>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
