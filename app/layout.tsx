import type { Metadata } from 'next';
import { Sora, Outfit } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import PreviewGate from '@/components/PreviewGate';

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
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'The Paper Trail',
    description:
      "Taking politics out of politics. We check whether politicians' numbers match their own cited sources.",
    siteName: 'The Paper Trail',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
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
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              @media (max-width: 640px) {
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
              .nav-logo { height: 56px; }
              @media (max-width: 640px) {
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
