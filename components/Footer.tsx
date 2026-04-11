import Link from 'next/link';
import { COLORS } from '@/lib/constants';

export default function Footer() {
  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans), sans-serif',
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: COLORS.ink40,
    textDecoration: 'none',
  };

  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: `1px solid rgba(27,42,74,0.08)`,
        padding: '32px 28px',
        marginTop: 64,
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img
            src="/logo-dark.png"
            alt="The Paper Trail"
            style={{ height: 48 }}
          />
          <span style={{ fontSize: 12, color: COLORS.ink20 }}>
            &copy; {new Date().getFullYear()}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/campaigns" style={linkStyle}>
            Our investigations
          </Link>
          <Link href="/how-it-works" style={linkStyle}>
            What we do
          </Link>
          <Link href="/about" style={linkStyle}>
            What we are fighting for
          </Link>
          <a
            href="https://www.instagram.com/papertrail.uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              borderRadius: '50%',
              color: COLORS.ink40,
              transition: 'color 0.2s ease',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
