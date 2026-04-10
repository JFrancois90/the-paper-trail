'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!password) {
      setError(true);
      return;
    }
    // Submit password via query param, middleware handles the rest
    window.location.href = `${next}?password=${encodeURIComponent(password)}`;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 28,
        background: '#f5f4f0',
      }}
    >
      <div style={{ maxWidth: 360, width: '100%', textAlign: 'center' }}>
        <img
          src="/logo-nav.png"
          alt="The Paper Trail"
          style={{ height: 40, marginBottom: 32 }}
        />
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 14,
            color: '#525560',
            lineHeight: 1.6,
            margin: '0 0 24px',
          }}
        >
          This site is currently in preview. Enter the password to continue.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: 8,
              border: error
                ? '1.5px solid #b5302a'
                : '1.5px solid rgba(27,42,74,0.15)',
              background: '#fff',
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 14,
              color: '#0f1117',
              outline: 'none',
              marginBottom: 12,
              minHeight: 44,
            }}
          />
          {error && (
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 12,
                color: '#b5302a',
                margin: '0 0 12px',
              }}
            >
              Please enter the password.
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px 24px',
              borderRadius: 8,
              border: 'none',
              background: '#1b2a4a',
              color: '#fff',
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              minHeight: 44,
            }}
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
