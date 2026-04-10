import Link from 'next/link';
import { COLORS } from '@/lib/constants';

export default function Footer() {
  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans), sans-serif',
    fontSize: 10,
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 16,
              color: COLORS.ink40,
            }}
          >
            The Paper Trail
          </span>
          <span style={{ fontSize: 12, color: COLORS.ink20 }}>
            &copy; {new Date().getFullYear()}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link href="/how-it-works" style={linkStyle}>
            How it works
          </Link>
          <Link href="/about" style={linkStyle}>
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
