import type { Metadata } from 'next';
import { Instrument_Serif, Outfit } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Paper Trail | Taking politics out of politics',
  description:
    "We check whether politicians' numbers match their own cited sources. Non-partisan, source-led political fact-checking for the UK.",
  openGraph: {
    title: 'The Paper Trail',
    description:
      "Taking politics out of politics. We check whether politicians' numbers match their own cited sources.",
    siteName: 'The Paper Trail',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${outfit.variable}`}>
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
      </body>
    </html>
  );
}
