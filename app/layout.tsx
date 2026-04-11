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
    "We check whether politicians' numbers match their own cited sources. Non-partisan, source-led political fact-checking for the UK.",
  icons: {
    icon: '/images/square.png',
    apple: '/images/square.png',
  },
  openGraph: {
    title: 'The Paper Trail',
    description:
      "Taking politics out of politics. We check whether politicians' numbers match their own cited sources and base data.",
    siteName: 'The Paper Trail',
    url: 'https://www.thepapertrail.uk',
    type: 'website',
    images: [{ url: '/images/square.png', width: 1200, height: 1200 }],
  },
  twitter: {
    card: 'summary',
    title: 'The Paper Trail',
    description:
      "Taking politics out of politics. We check whether politicians' numbers match their own cited sources and base data.",
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
              @media (max-width: 768px) {
                html { scroll-snap-type: none; scroll-behavior: auto; }
                .snap-section { min-height: auto; scroll-snap-align: none; display: block; }
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
              .inv-source-notice-desktop {}
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
                .inv-source-notice-desktop { display: none; }
              }
              /* Global nav link hover */
              .nav-link {
                transition: color 0.2s ease, letter-spacing 0.2s ease;
              }
              .nav-link:hover {
                color: #c48a0a !important;
                letter-spacing: 0.04em;
              }
              /* Global card hover */
              .hover-card {
                transition: transform 0.2s ease, box-shadow 0.2s ease;
              }
              .hover-card:hover {
                transform: scale(1.02) translateY(-2px);
                box-shadow: 0 8px 24px rgba(27, 42, 74, 0.12);
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
