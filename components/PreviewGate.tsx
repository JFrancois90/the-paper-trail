'use client';

import { useState, useEffect, useRef } from 'react';
import BrandSlogan from './BrandSlogan';

const PREVIEW_PASSWORD = process.env.NEXT_PUBLIC_PREVIEW_PASSWORD || 'Justice';

interface PreviewGateProps {
  children: React.ReactNode;
}

export default function PreviewGate({ children }: PreviewGateProps) {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem('preview_auth') === 'true') {
      setAuthed(true);
    }
    setChecking(false);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === PREVIEW_PASSWORD) {
      sessionStorage.setItem('preview_auth', 'true');
      setFadeOut(true);
      setTimeout(() => setAuthed(true), 500);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 400);
      setPassword('');
      inputRef.current?.focus();
    }
  }

  // Don't flash anything while checking sessionStorage
  if (checking) return null;
  if (authed) return <>{children}</>;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#1b2a4a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        @keyframes fadeInError {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Logo */}
      <img
        src="/logo-dark.png"
        alt="The Paper Trail"
        style={{ height: 64, marginBottom: 24 }}
      />

      {/* Slogan */}
      <div style={{ marginBottom: 32 }}>
        <BrandSlogan size="md" theme="dark" />
      </div>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 16,
          color: 'rgba(255,255,255,0.6)',
          margin: '0 0 16px',
          textAlign: 'center',
        }}
      >
        We&apos;re not live yet. But we&apos;re close.
      </p>
      <p
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 14,
          color: 'rgba(255,255,255,0.4)',
          margin: '0 0 24px',
          textAlign: 'center',
        }}
      >
        Got a preview password? Enter it below.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <input
          ref={inputRef}
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          placeholder="Preview password"
          autoFocus
          style={{
            width: 320,
            height: 48,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 10,
            color: '#fff',
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 14,
            padding: '0 16px',
            outline: 'none',
            transition: 'border-color 0.2s ease',
            animation: shaking ? 'shake 0.4s ease' : 'none',
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
        />

        {error && (
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 13,
              color: '#b5302a',
              margin: 0,
              animation: 'fadeInError 0.3s ease',
            }}
          >
            That&apos;s not it. Try again.
          </p>
        )}

        <button
          type="submit"
          style={{
            width: 320,
            height: 48,
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 10,
            color: '#fff',
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s ease, color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = '#1b2a4a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#fff';
          }}
        >
          Enter
        </button>
      </form>

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 12,
            color: 'rgba(255,255,255,0.2)',
            margin: '0 0 6px',
          }}
        >
          thepapertrail.uk
        </p>
        <a
          href="https://thepapertrailuk.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 12,
            color: 'rgba(255,255,255,0.3)',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
          onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
        >
          Subscribe for launch updates
        </a>
      </div>
    </div>
  );
}
