'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';

interface MobileNavProps {
  dark?: boolean;
}

export default function MobileNav({ dark = true }: MobileNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const textColor = dark && !scrolled ? '#fff' : COLORS.navy;
  const bg = scrolled
    ? dark ? 'rgba(27,42,74,0.95)' : 'rgba(245,244,240,0.92)'
    : 'transparent';
  const logo = dark && !scrolled ? '/logo-dark.png' : '/logo-nav.png';

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 24px',
          background: bg,
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          transition: 'background 0.3s ease',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 48,
          }}
        >
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="The Paper Trail" style={{ height: 38 }} />
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 10,
              minWidth: 44,
              minHeight: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <path d="M1 1h20M1 8h20M1 15h20" stroke={textColor} strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {/* Dark backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            opacity: menuOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Menu panel */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '85vw',
            maxWidth: 320,
            background: COLORS.navy,
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 28px',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 48,
              marginBottom: 32,
            }}
          >
            <img src="/logo-dark.png" alt="The Paper Trail" style={{ height: 38 }} />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 10,
                minWidth: 44,
                minHeight: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2l14 14M16 2L2 16" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
            {[
              { href: '/', label: 'Home' },
              { href: '/campaigns', label: 'Our campaigns' },
              { href: '/careless-whispers', label: 'Careless whispers' },
              { href: '/how-it-works', label: 'What we do' },
              { href: '/about', label: 'What we are fighting for' },
              { href: '/fighting-for-change', label: 'Join the fight' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#subscribe"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#fff',
                textDecoration: 'none',
                textAlign: 'center',
                padding: '14px 0',
                borderRadius: 8,
                border: '1.5px solid rgba(255,255,255,0.3)',
                marginTop: 16,
              }}
            >
              Subscribe
            </Link>
          </div>

          {/* Footer */}
          <div style={{ paddingBottom: 32 }}>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 11,
                color: 'rgba(255,255,255,0.25)',
                margin: 0,
                textAlign: 'center',
              }}
            >
              thepapertrail.uk
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
