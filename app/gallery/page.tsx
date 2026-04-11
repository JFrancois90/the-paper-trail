import type { Metadata } from 'next';
import { COLORS } from '@/lib/constants';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ScrollReveal from '@/components/ScrollReveal';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export const metadata: Metadata = {
  title: 'Gallery | The Paper Trail',
  description: 'Illustrations and visuals from our campaigns.',
};

const images = [
  {
    src: '/images/forest-illustration.png',
    caption: 'When the base number is wrong, everything built on it falls apart.',
    investigation: 'Homepage',
  },
  {
    src: '/images/280-days-meme.png',
    caption: 'Three politicians debating policy. None of them noticed the base number is wrong.',
    investigation: 'About page',
  },
  {
    src: '/images/water-company-iceberg.png',
    caption: 'Everyone argues about the value. Nobody mentions the debt underneath.',
    investigation: 'Railtrack investigation',
  },
];

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <BackButton />
      <main
        id="main-content"
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '120px 28px 64px',
        }}
      >
        <ScrollReveal>
          <h1
            style={{
              fontFamily: H,
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: COLORS.navy,
              margin: '0 0 8px',
              letterSpacing: '-0.02em',
            }}
          >
            Gallery
          </h1>
          <p
            style={{
              fontFamily: B,
              fontSize: 18,
              color: COLORS.muted,
              margin: '0 0 40px',
            }}
          >
            Illustrations from our campaigns. Share freely.
          </p>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {images.map((img, i) => (
            <ScrollReveal key={i} anim="fadeUp" delay={i * 0.1}>
              <figure
                style={{
                  margin: 0,
                  background: '#fff',
                  borderRadius: 14,
                  border: '1px solid rgba(27,42,74,0.08)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
                <figcaption
                  style={{
                    padding: '16px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 16,
                    flexWrap: 'wrap',
                  }}
                >
                  <p
                    style={{
                      fontFamily: B,
                      fontSize: 15,
                      fontStyle: 'italic',
                      color: COLORS.navy,
                      margin: 0,
                      lineHeight: 1.5,
                      flex: 1,
                    }}
                  >
                    {img.caption}
                  </p>
                  <span
                    style={{
                      fontFamily: B,
                      fontSize: 12,
                      fontWeight: 600,
                      color: COLORS.lightMuted,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {img.investigation}
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
