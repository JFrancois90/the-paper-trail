'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavProps {
  forceDark?: boolean;
}

export default function Nav({ forceDark }: NavProps) {
  const [dark, setDark] = useState(forceDark ?? true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (forceDark !== undefined) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const darkSections = document.querySelectorAll('[data-nav-theme="dark"]');
    if (darkSections.length === 0) {
      setDark(false);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setDark(entry.target.getAttribute('data-nav-theme') === 'dark');
          }
        }
      },
      { threshold: [0.3, 0.5] }
    );

    // Observe all themed sections
    document.querySelectorAll('[data-nav-theme]').forEach((el) => observer.observe(el));

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [forceDark]);

  const textColor = dark ? '#fff' : '#1b2a4a';
  const textMuted = dark ? 'rgba(255,255,255,0.6)' : '#5a5d66';
  const logo = dark ? '/logo-dark.png' : '/logo-nav.png';
  const bg = dark
    ? scrolled ? 'rgba(27,42,74,0.97)' : 'rgba(27,42,74,0.8)'
    : '#ffffff';
  const blur = scrolled ? 'blur(14px)' : 'none';
  const shadow = scrolled ? '0 2px 12px rgba(0,0,0,0.04)' : 'none';
  const borderBottom = dark ? 'none' : '1px solid rgba(27,42,74,0.08)';

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans), sans-serif',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.02em',
    color: textMuted,
    textDecoration: 'none',
    padding: '4px 0',
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 8vw',
        transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
        background: bg,
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
        boxShadow: shadow,
        borderBottom: borderBottom,
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="The Paper Trail" className="nav-logo" />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <Link href="/" style={labelStyle}>Home</Link>
          <Link href="/how-it-works" style={labelStyle}>What we do</Link>
          <Link href="/about" style={labelStyle}>What we are fighting for</Link>
          <Link
            href="#subscribe"
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              padding: '8px 20px',
              borderRadius: 6,
              border: `1.5px solid ${dark ? textColor : '#1b2a4a'}`,
              color: textColor,
              background: 'transparent',
              transition: 'all 0.3s ease',
              minHeight: 44,
              minWidth: 44,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
}
