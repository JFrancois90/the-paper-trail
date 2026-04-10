'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export default function SubmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [claim, setClaim] = useState('');
  const [who, setWho] = useState('');
  const [source, setSource] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Tip: ${claim.slice(0, 60)}`);
    const body = encodeURIComponent(
      `Claim: ${claim}\nWho said it: ${who}\nSource link: ${source}\nSubmitted by: ${email || 'Anonymous'}`
    );
    window.open(`mailto:tips@thepapertrail.uk?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: 48,
    background: '#fff',
    border: '1px solid rgba(27,42,74,0.12)',
    borderRadius: 10,
    padding: '0 16px',
    fontFamily: B,
    fontSize: 14,
    color: COLORS.ink,
    outline: 'none',
  };

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid rgba(27,42,74,0.06)',
        borderRadius: 14,
        padding: '32px 28px',
        maxWidth: 560,
        margin: '0 auto',
      }}
    >
      <h3 style={{ fontFamily: H, fontSize: 24, fontWeight: 700, color: COLORS.navy, margin: '0 0 8px' }}>
        Got a number that doesn&apos;t add up?
      </h3>
      <p style={{ fontFamily: B, fontSize: 15, color: COLORS.muted, margin: '0 0 24px', lineHeight: 1.5 }}>
        If you&apos;ve spotted a politician using a figure that doesn&apos;t match the source, tell us. We&apos;ll look into it.
      </p>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <p style={{ fontFamily: B, fontSize: 16, fontWeight: 600, color: COLORS.sourceGreen, margin: 0 }}>
            Thanks. We&apos;ll take a look.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type="text"
            placeholder="What was claimed?"
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Who said it?"
            value={who}
            onChange={(e) => setWho(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Link to source (if you have one)"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Your email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <button
            type="submit"
            style={{
              height: 48,
              background: COLORS.navy,
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              fontFamily: B,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: 4,
            }}
          >
            Submit &rarr;
          </button>
        </form>
      )}
    </div>
  );
}
