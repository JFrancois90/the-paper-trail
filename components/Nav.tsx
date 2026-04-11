'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';

interface NavProps {
  forceDark?: boolean;
}

const NAV_LINKS = [
  { href: '/', label: 'Home', sectionId: '' },
  { href: '/campaigns', label: 'Investigations', sectionId: '' },
  { href: '/careless-whispers', label: 'Careless Whispers', sectionId: 'careless-whispers' },
  { href: '/about', label: 'About', sectionId: 'what-we-do' },
  { href: '/fighting-for-change', label: 'Join', sectionId: '' },
];

export default function Nav({ forceDark }: NavProps) {
  const [dark, setDark] = useState(forceDark ?? true);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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

    document.querySelectorAll('[data-nav-theme]').forEach((el) => observer.observe(el));

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [forceDark]);

  // Track which homepage section is in view
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.sectionId).filter(Boolean);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        let best: { id: string; ratio: number } | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.ratio)) {
            best = { id: entry.target.id, ratio: entry.intersectionRatio };
          }
        }
        if (best) setActiveSection(best.id);
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: '-72px 0px 0px 0px' }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const textColor = dark ? '#fff' : '#1b2a4a';
  const textMuted = dark ? 'rgba(255,255,255,0.6)' : '#5a5d66';
  const logo = dark ? '/logo-dark.png' : '/logo-nav.png';
  const bg = dark
    ? scrolled ? 'rgba(27,42,74,0.97)' : isMobile ? 'rgba(27,42,74,0.85)' : 'rgba(27,42,74,0.8)'
    : scrolled ? '#ffffff' : isMobile ? 'rgba(245,244,240,0.92)' : '#ffffff';
  const blur = scrolled || isMobile ? 'blur(14px)' : 'none';
  const shadow = scrolled ? '0 2px 12px rgba(0,0,0,0.04)' : 'none';
  const borderBottom = dark ? 'none' : '1px solid rgba(27,42,74,0.08)';

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans), sans-serif',
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: '0.01em',
    color: textMuted,
    textDecoration: 'none',
    padding: '4px 0',
  };

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
          padding: isMobile ? '0 20px' : '0 8vw',
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
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isMobile ? 48 : 72,
          }}
        >
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', marginRight: 24 }}>
            <img src={logo} alt="The Paper Trail" className={`nav-logo${dark ? '' : ' nav-logo-light'}`} />
          </Link>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
              {NAV_LINKS.map((link) => {
                const isActive = link.sectionId && activeSection === link.sectionId;
                const activeColor = dark ? '#fff' : COLORS.navy;
                const style = isActive
                  ? { ...labelStyle, color: activeColor, fontWeight: 700, borderBottom: `2px solid ${activeColor}`, paddingBottom: 2 }
                  : labelStyle;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link"
                    style={style as React.CSSProperties}
                    onClick={(e) => {
                      if (link.sectionId) {
                        const el = document.getElementById(link.sectionId);
                        if (el) {
                          e.preventDefault();
                          el.scrollIntoView({ behavior: 'smooth' });
                          setActiveSection(link.sectionId);
                        }
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/subscribe"
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '8px 18px',
                  borderRadius: 6,
                  border: 'none',
                  color: dark ? '#1b2a4a' : '#fff',
                  background: dark ? '#fff' : '#1b2a4a',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Subscribe
              </Link>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
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
          )}
        </div>
      </nav>

      {/* Mobile full-screen menu overlay */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            pointerEvents: menuOpen ? 'auto' : 'none',
          }}
        >
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
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '80%',
              maxWidth: 320,
              height: '100%',
              background: COLORS.navy,
              transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
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
                  {link.label}
                </Link>
              ))}
              <Link
                href="/subscribe"
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

            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontSize: 11,
                color: 'rgba(255,255,255,0.25)',
                textAlign: 'center',
                margin: '24px 0 0',
              }}
            >
              thepapertrail.uk
            </p>
          </div>
        </div>
      )}
    </>
  );
}
