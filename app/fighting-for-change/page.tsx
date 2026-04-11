import type { Metadata } from 'next';
import Link from 'next/link';
import { COLORS } from '@/lib/constants';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ScrollReveal from '@/components/ScrollReveal';
import FighterCarousel from '@/components/FighterCarousel';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export const metadata: Metadata = {
  title: 'Fighting for Change | The Paper Trail',
  description:
    'How people across the UK are pushing for political accountability. Join the fight for honest numbers in Parliament.',
};

const TIMELINE = [
  { year: '1689', text: 'Bill of Rights grants parliamentary privilege. MPs cannot be sued for what they say in debate.' },
  { year: '2021', text: 'Dawn Butler MP suspended from the Commons for calling the PM a liar. Refusing to withdraw is punishable. Lying itself is not.', highlight: true },
  { year: '2021', text: 'Andy Slaughter MP introduces House of Commons (Misleading Statements) Bill. Does not progress.' },
  { year: '2022', text: 'Parliamentary petition calling for a law against MPs lying reaches 200,000+ signatures. Debated in Westminster Hall.' },
  { year: '2023', text: 'Privileges Committee finds Boris Johnson deliberately misled Parliament over Partygate. Recommends 90-day suspension. He resigns as MP before sanctions applied.', highlight: true },
  { year: '2024', text: 'New Labour government updates the Ministerial Code. Appoints independent adviser. Does not legislate against misleading Parliament.' },
  { year: '2025', text: 'Peter Stefanovic\'s videos documenting misleading statements reach tens of millions of views.', highlight: true },
  { year: 'Now', text: 'No law criminalises lying in Parliament. Enforcement still relies on self-correction and the Speaker.', highlight: true },
];

export default function FightingForChangePage() {
  return (
    <>
      <Nav />
      <BackButton />
      <main
        id="main-content"
        style={{
          maxWidth: 680,
          margin: '0 auto',
          padding: '100px 28px 48px',
        }}
      >
        {/* Hero */}
        <ScrollReveal>
          <div style={{ marginBottom: 40 }}>
            <h1
              style={{
                fontFamily: H,
                fontSize: 36,
                fontWeight: 700,
                color: COLORS.navy,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: '0 0 16px',
              }}
            >
              Fighting for change
            </h1>
            <p
              style={{
                fontFamily: B,
                fontSize: 18,
                lineHeight: 1.65,
                color: COLORS.muted,
                margin: 0,
              }}
            >
              People across the UK are pushing for political accountability. Here is where things stand and how you can be part of it.
            </p>
          </div>
        </ScrollReveal>

        {/* The problem */}
        <ScrollReveal>
          <div
            style={{
              background: COLORS.claimRedLight,
              borderRadius: 14,
              border: '2px solid rgba(181,48,42,0.12)',
              padding: '24px 28px',
              marginBottom: 28,
            }}
          >
            <p
              style={{
                fontFamily: B,
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: COLORS.claimRed,
                margin: '0 0 14px',
              }}
            >
              The core problem
            </p>
            <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
              <li style={{ fontFamily: B, fontSize: 16, lineHeight: 1.7, color: COLORS.claimRedDark, marginBottom: 6 }}>
                There is no law against lying in Parliament
              </li>
              <li style={{ fontFamily: B, fontSize: 16, lineHeight: 1.7, color: COLORS.claimRedDark, marginBottom: 6 }}>
                Parliamentary privilege protects MPs from legal action over statements made in debate
              </li>
              <li style={{ fontFamily: B, fontSize: 16, lineHeight: 1.7, color: COLORS.claimRedDark, marginBottom: 6 }}>
                The Ministerial Code says ministers who mislead should resign. Enforcement is at the PM&apos;s discretion.
              </li>
              <li style={{ fontFamily: B, fontSize: 16, lineHeight: 1.7, color: COLORS.claimRedDark, marginBottom: 6 }}>
                Calling another MP a liar is punishable. Lying itself is not.
              </li>
              <li style={{ fontFamily: B, fontSize: 16, lineHeight: 1.7, color: COLORS.claimRedDark }}>
                No independent mechanism exists to hold MPs to account for misleading statements
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Who is fighting - swipe cards */}
        <ScrollReveal>
          <div style={{ marginBottom: 28 }}>
            <p
              style={{
                fontFamily: B,
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: COLORS.lightMuted,
                margin: '0 0 16px',
              }}
            >
              Who is fighting for change
            </p>
            <FighterCarousel />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              border: '1px solid rgba(27,42,74,0.06)',
              padding: '24px 28px',
              marginBottom: 28,
            }}
          >
            <p
              style={{
                fontFamily: B,
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: COLORS.lightMuted,
                margin: '0 0 20px',
              }}
            >
              Timeline
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {TIMELINE.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flexShrink: 0,
                      width: 48,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: H,
                        fontSize: 13,
                        fontWeight: 700,
                        color: item.highlight ? COLORS.claimRed : COLORS.navy,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.year}
                    </span>
                    {i < TIMELINE.length - 1 && (
                      <div
                        style={{
                          width: 1.5,
                          height: 24,
                          background: 'rgba(27,42,74,0.1)',
                          margin: '4px 0',
                        }}
                      />
                    )}
                  </div>
                  <p
                    style={{
                      fontFamily: B,
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: item.highlight ? COLORS.navy : COLORS.muted,
                      fontWeight: item.highlight ? 600 : 400,
                      margin: '0 0 12px',
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Devolved nations */}
        <ScrollReveal>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              border: '1px solid rgba(27,42,74,0.06)',
              padding: '24px 28px',
              marginBottom: 28,
            }}
          >
            <p
              style={{
                fontFamily: B,
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: COLORS.lightMuted,
                margin: '0 0 16px',
              }}
            >
              Devolved nations
            </p>

            {[
              {
                nation: 'Wales (Senedd)',
                status: 'Stricter conduct rules. Members can be sanctioned for misleading the Senedd through the Standards Commissioner.',
                color: COLORS.sourceGreen,
              },
              {
                nation: 'Scotland (Holyrood)',
                status: 'Commissioner for Ethical Standards provides stronger enforcement than Westminster.',
                color: COLORS.sourceGreen,
              },
              {
                nation: 'Northern Ireland Assembly',
                status: 'Commissioner for Standards exists but enforcement has been inconsistent due to Assembly suspensions.',
                color: COLORS.amber,
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '14px 18px',
                  background: COLORS.paper,
                  borderRadius: 10,
                  marginBottom: i < 2 ? 10 : 0,
                  borderLeft: `3px solid ${item.color}`,
                }}
              >
                <p
                  style={{
                    fontFamily: B,
                    fontSize: 14,
                    fontWeight: 600,
                    color: COLORS.navy,
                    margin: '0 0 4px',
                  }}
                >
                  {item.nation}
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
                  {item.status}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* The barrier */}
        <ScrollReveal>
          <div
            style={{
              background: COLORS.amberLight,
              borderRadius: 14,
              border: '1px solid rgba(196,138,10,0.12)',
              padding: '24px 28px',
              marginBottom: 28,
            }}
          >
            <p
              style={{
                fontFamily: B,
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: COLORS.amber,
                margin: '0 0 14px',
              }}
            >
              The barrier
            </p>
            <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 6 }}>
                Any law would require limiting parliamentary privilege
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 6 }}>
                Both major parties have historically resisted this
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.amberDark, marginBottom: 6 }}>
                Privilege protects MPs from legal action over debate
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.amberDark }}>
                Public appetite is high. Parliamentary appetite is low.
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* What you can do */}
        <ScrollReveal>
          <div
            style={{
              background: COLORS.navy,
              borderRadius: 14,
              padding: '24px 28px',
              marginBottom: 28,
            }}
          >
            <p
              style={{
                fontFamily: B,
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.4)',
                margin: '0 0 16px',
              }}
            >
              What you can do
            </p>
            <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 8 }}>
                <strong style={{ color: '#fff' }}>Check the numbers.</strong> When a politician cites a figure, look up the source.
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 8 }}>
                <strong style={{ color: '#fff' }}>Write to your MP.</strong> Ask them to support standards reform.
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 8 }}>
                <strong style={{ color: '#fff' }}>Sign petitions.</strong> Public pressure keeps the issue visible.
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 8 }}>
                <strong style={{ color: '#fff' }}>Share the investigations.</strong> Every share reaches someone who did not know.
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
                <strong style={{ color: '#fff' }}>Follow the campaigns.</strong> Peter Stefanovic, Compassion in Politics, Led By Donkeys.
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Our position */}
        <ScrollReveal>
          <div
            style={{
              background: COLORS.sourceGreenLight,
              borderRadius: 14,
              border: '1px solid rgba(26,107,66,0.12)',
              padding: '24px 28px',
              marginBottom: 48,
            }}
          >
            <p
              style={{
                fontFamily: B,
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: COLORS.sourceGreen,
                margin: '0 0 14px',
              }}
            >
              Our position
            </p>
            <ul style={{ margin: 0, padding: '0 0 0 20px', listStyleType: 'disc' }}>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.sourceGreenDark, marginBottom: 6 }}>
                We do not take political sides
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.sourceGreenDark, marginBottom: 6 }}>
                We check the numbers regardless of who says them
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.sourceGreenDark, marginBottom: 6 }}>
                If the numbers match, we say so
              </li>
              <li style={{ fontFamily: B, fontSize: 15, lineHeight: 1.7, color: COLORS.sourceGreenDark }}>
                If they don&apos;t, we show you
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Back to campaigns */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Link
            href="/"
            style={{
              fontFamily: B,
              fontSize: 14,
              fontWeight: 600,
              color: COLORS.chainBlue,
              textDecoration: 'none',
            }}
          >
            &larr; Back to all campaigns
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
