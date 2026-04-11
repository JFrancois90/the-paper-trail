import type { Metadata } from 'next';
import { Sora, Outfit } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import PreviewGate from '@/components/PreviewGate';
import ScrollToTop from '@/components/ScrollToTop';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thepapertrail.uk'),
  title: 'The Paper Trail | Taking politics out of politics',
  description:
    "Integrity, not ideology. We check whether politicians' numbers match their own cited sources. Non-partisan, source-led fact-checking for the UK.",
  icons: {
    icon: '/images/square.png',
    apple: '/images/square.png',
  },
  openGraph: {
    title: 'The Paper Trail',
    description:
      "Integrity, not ideology. We check whether politicians' numbers match their own cited sources.",
    siteName: 'The Paper Trail',
    url: 'https://www.thepapertrail.uk',
    type: 'website',
    images: [{ url: '/images/square.png', width: 1200, height: 1200 }],
  },
  twitter: {
    card: 'summary',
    title: 'The Paper Trail',
    description:
      "Integrity, not ideology. We check whether politicians' numbers match their own cited sources.",
    images: ['/images/square.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${outfit.variable}`}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* STYLE RULE: Never use em-dashes (\u2014). Use full stops or commas instead. */
              *, *::before, *::after { box-sizing: border-box; }
              html { scroll-snap-type: y mandatory; overflow-y: scroll; scroll-behavior: smooth; }
              body { margin: 0; padding: 0; }
              .snap-section {
                min-height: 100vh;
                scroll-snap-align: start;
                scroll-snap-stop: always;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              /* Section dividers: alternate cream/white */
              .snap-section:nth-child(even) { background: #fff; }
              .snap-section:nth-child(odd) { background: #f0efe8; }
              .snap-section[data-nav-theme="dark"] { background: #1b2a4a !important; }
              @media (max-width: 768px) {
                .snap-section { padding-top: 48px; padding-bottom: 48px; }
                /* Reduce position banner size on mobile */
                .position-banner { padding: 8px 14px !important; }
                .position-banner p { font-size: 15px !important; }
              }
              .skip-link {
                position: absolute;
                left: -9999px;
                top: auto;
                width: 1px;
                height: 1px;
                overflow: hidden;
                z-index: 9999;
              }
              .skip-link:focus {
                position: fixed;
                left: 16px;
                top: 16px;
                width: auto;
                height: auto;
                overflow: visible;
                padding: 12px 24px;
                background: #1b2a4a;
                color: #fff;
                border-radius: 8px;
                font-size: 14px;
                font-family: var(--font-sans), sans-serif;
                text-decoration: none;
                outline: 2px solid #2358a3;
                outline-offset: 2px;
              }
              /* ── Global typography ── */
              :root {
                --body-text: 18px;
                --body-line-height: 1.6;
                --body-max-width: 680px;
              }
              /* ── Investigation page type scale ── */
              :root {
                --inv-banner: 18px;
                --inv-badge: 16px;
                --inv-badge-sm: 14px;
                --inv-title: clamp(32px, 5vw, 40px);
                --inv-source-link: 14px;
                --inv-label: 12px;
                --inv-bullet: 18px;
                --inv-punchline: 18px;
                --inv-section-heading: 14px;
                --inv-body: 18px;
                --inv-bar-label: 16px;
                --inv-bar-amount: 20px;
                --inv-chain-node: 16px;
                --inv-chain-note: 18px;
                --inv-question-preamble: 16px;
                --inv-question: 22px;
                --inv-impact: 18px;
              }
              .nav-logo { height: 56px; }
              .nav-logo-light { mix-blend-mode: multiply; }
              .nav-link { white-space: nowrap; }
              h1, h2, h3 { text-wrap: balance; }
              @media (max-width: 768px) {
                .nav-logo { height: 38px; }
              }
              .highlight {
                background: linear-gradient(to bottom, transparent 65%, rgba(196,138,10,0.35) 65%);
                padding: 0 3px;
                border-radius: 2px;
              }
              .highlight-red {
                background: linear-gradient(to bottom, transparent 65%, rgba(181,48,42,0.2) 65%);
                padding: 0 3px;
                border-radius: 2px;
              }
              .highlight-green {
                background: linear-gradient(to bottom, transparent 65%, rgba(26,107,66,0.2) 65%);
                padding: 0 3px;
                border-radius: 2px;
              }
              /* Investigation page snap scroll */
              .inv-snap-container {
                height: 100vh;
                overflow-y: auto;
                scroll-snap-type: y mandatory;
                scroll-behavior: smooth;
                scrollbar-width: none;
              }
              .inv-snap-container::-webkit-scrollbar { display: none; }
              .inv-snap-section {
                min-height: 100vh;
                scroll-snap-align: start;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 80px 28px 40px;
                box-sizing: border-box;
                overflow-y: auto;
              }
              .inv-inner {
                max-width: 900px;
                width: 100%;
                margin: 0 auto;
              }
              @media (max-width: 768px) {
                .inv-snap-container {
                  height: auto;
                  overflow-y: visible;
                  scroll-snap-type: none;
                }
                .inv-snap-section {
                  min-height: auto;
                  scroll-snap-align: none;
                  display: block;
                  padding: 40px 20px;
                }
              }
              /* Global nav link hover */
              .nav-link {
                transition: color 0.2s ease, letter-spacing 0.2s ease;
              }
              .nav-link:hover {
                color: #c48a0a !important;
                letter-spacing: 0.04em;
              }
              /* Global body typography */
              body {
                font-size: var(--body-text, 18px);
                line-height: var(--body-line-height, 1.6);
              }
              p, li, td { max-width: var(--body-max-width, 680px); }
              /* Touch targets: minimum 44px on mobile */
              @media (max-width: 768px) {
                a, button, [role="button"] { min-height: 44px; min-width: 44px; }
              }
              /* Global card hover */
              .hover-card {
                transition: transform 0.15s ease, box-shadow 0.15s ease;
              }
              .hover-card:hover {
                transform: scale(1.02) translateY(-2px);
                box-shadow: 0 8px 24px rgba(27, 42, 74, 0.12);
              }
              /* Micro-interactions */
              button, a[href] {
                transition: color 0.2s ease, background 0.2s ease, transform 0.15s ease, box-shadow 0.15s ease;
              }
              button:hover, .cta-button:hover {
                transform: scale(1.02);
              }
              /* Skeleton loading */
              .skeleton {
                background: linear-gradient(90deg, rgba(27,42,74,0.06) 25%, rgba(27,42,74,0.1) 50%, rgba(27,42,74,0.06) 75%);
                background-size: 200% 100%;
                animation: shimmer 1.5s infinite;
                border-radius: 8px;
              }
              @keyframes shimmer {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
              }
              /* Badge pulse on first appearance */
              @keyframes badgePulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
              @media (prefers-reduced-motion: reduce) {
                *, *::before, *::after {
                  animation-duration: 0.01ms !important;
                  animation-iteration-count: 1 !important;
                  transition-duration: 0.01ms !important;
                }
              }
            `,
          }}
        />
      </head>
      <body
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          backgroundColor: '#f0efe8',
          color: '#0f1117',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <PreviewGate>
          {children}
        </PreviewGate>
        <ScrollToTop />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
