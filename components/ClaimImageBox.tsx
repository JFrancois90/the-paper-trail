'use client';

import Image from 'next/image';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

interface ClaimImageBoxProps {
  image: {
    src: string;
    alt: string;
    postedOn: string;
    imprint?: string;
  };
  sourceUrl?: string | null;
}

export default function ClaimImageBox({ image, sourceUrl }: ClaimImageBoxProps) {
  return (
    <div
      className="claim-image-box"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid rgba(27,42,74,0.08)',
        background: COLORS.claimRedLight,
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .claim-image-box {
            grid-template-columns: 1fr !important;
          }
          .claim-image-box .claim-image-side {
            border-right: none !important;
            border-bottom: 1px solid rgba(27,42,74,0.08);
          }
        }
      `}</style>

      {/* Image side */}
      <div
        className="claim-image-side"
        style={{
          position: 'relative',
          background: '#000',
          borderRight: '1px solid rgba(27,42,74,0.08)',
          minHeight: 260,
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={960}
          height={1200}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      {/* Metadata side */}
      <div
        style={{
          padding: '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontFamily: B,
            fontSize: 'var(--inv-label, 12px)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: COLORS.claimRed,
          }}
        >
          They said
        </div>

        <div>
          <p
            style={{
              fontFamily: B,
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: COLORS.lightMuted,
              margin: '0 0 4px',
            }}
          >
            Posted
          </p>
          <p
            style={{
              fontFamily: B,
              fontSize: 15,
              lineHeight: 1.5,
              color: COLORS.claimRedDark,
              fontWeight: 600,
              margin: 0,
            }}
          >
            {image.postedOn}
          </p>
        </div>

        {image.imprint && (
          <div>
            <p
              style={{
                fontFamily: B,
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: COLORS.lightMuted,
                margin: '0 0 4px',
              }}
            >
              Imprint
            </p>
            <p
              style={{
                fontFamily: B,
                fontSize: 14,
                lineHeight: 1.5,
                color: COLORS.muted,
                margin: 0,
              }}
            >
              {image.imprint}
            </p>
          </div>
        )}

        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: B,
              fontSize: 14,
              fontWeight: 600,
              color: '#fff',
              background: COLORS.claimRed,
              textDecoration: 'none',
              padding: '9px 16px',
              borderRadius: 8,
              alignSelf: 'flex-start',
              marginTop: 4,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M5 1h6v6M11 1L5.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 7v3.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            View original source
          </a>
        )}
      </div>
    </div>
  );
}
