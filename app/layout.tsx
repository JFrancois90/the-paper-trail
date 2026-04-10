import type { Metadata } from 'next';
import { Sora, Outfit } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

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
              body { margin: 0; padding: 0; }
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
              .nav-logo { height: 48px; }
              @media (max-width: 640px) {
                .nav-logo { height: 40px; }
              }
              .highlight {
                background: linear-gradient(to bottom, transparent 40%, rgba(253,224,130,0.4) 40%, rgba(253,224,130,0.4) 90%, transparent 90%);
                padding: 0 4px;
                margin: 0 -4px;
              }
              .highlight-red {
                background: linear-gradient(to bottom, transparent 40%, rgba(252,234,233,0.6) 40%, rgba(252,234,233,0.6) 90%, transparent 90%);
                padding: 0 4px;
                margin: 0 -4px;
              }
              .highlight-green {
                background: linear-gradient(to bottom, transparent 40%, rgba(230,245,237,0.6) 40%, rgba(230,245,237,0.6) 90%, transparent 90%);
                padding: 0 4px;
                margin: 0 -4px;
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
          backgroundColor: '#f5f4f0',
          color: '#0f1117',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
