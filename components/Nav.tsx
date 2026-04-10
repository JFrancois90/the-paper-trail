'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans), sans-serif',
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: COLORS.ink60,
    textDecoration: 'none',
    position: 'relative',
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
        padding: '0 28px',
        transition: 'background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled ? 'rgba(245,244,240,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? '0 1px 8px rgba(27,42,74,0.06)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 56,
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="/logo-nav.png"
            alt="The Paper Trail"
            className="nav-logo"
          />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <NavLink href="/how-it-works" style={labelStyle}>
            How it works
          </NavLink>
          <NavLink href="/about" style={labelStyle}>
            About
          </NavLink>
          <SubscribeButton />
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  style,
  children,
}: {
  href: string;
  style: React.CSSProperties;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 1.5,
          background: COLORS.navy,
          transition: 'width 0.3s cubic-bezier(0.22,1,0.36,1)',
          width: hovered ? '100%' : '0%',
        }}
      />
    </Link>
  );
}

function SubscribeButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="#subscribe"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-sans), sans-serif',
        fontSize: 10,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        textDecoration: 'none',
        padding: '7px 16px',
        borderRadius: 6,
        border: `1.5px solid ${COLORS.navy}`,
        color: hovered ? '#fff' : COLORS.navy,
        background: hovered ? COLORS.navy : 'transparent',
        transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
        minHeight: 44,
        minWidth: 44,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Subscribe
    </Link>
  );
}
