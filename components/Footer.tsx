import Link from 'next/link';
import { COLORS } from '@/lib/constants';

const iconStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 44,
  height: 44,
  borderRadius: '50%',
  color: COLORS.ink40,
  transition: 'color 0.2s ease',
};

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
        borderTop: '1px solid rgba(27,42,74,0.08)',
        padding: '32px 28px',
        marginTop: 64,
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/logo-dark.png" alt="The Paper Trail" style={{ height: 48 }} />
          <span style={{ fontSize: 12, color: COLORS.ink20 }}>&copy; {new Date().getFullYear()}</span>
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href="https://www.instagram.com/papertrail.uk" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" style={iconStyle}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@papertrail.uk" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok" style={iconStyle}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
          <a href="https://x.com/PaperTrailFacts" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X" style={iconStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/campaigns" style={linkStyle}>Campaigns</Link>
          <Link href="/about" style={linkStyle}>About</Link>
          <Link href="/gallery" style={linkStyle}>Gallery</Link>
          <Link href="/fighting-for-change" style={linkStyle}>Join</Link>
        </div>
      </div>
    </footer>
  );
}
