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
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link href="/how-it-works" style={linkStyle}>
            What we do
          </Link>
          <Link href="/about" style={linkStyle}>
            What we are fighting for
          </Link>
        </div>
      </div>
    </footer>
  );
}
