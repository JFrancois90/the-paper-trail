import type { Metadata } from 'next';
import { COLORS } from '@/lib/constants';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Highlight from '@/components/Highlight';

export const metadata: Metadata = {
  title: 'About | The Paper Trail',
  description:
    "We campaign for integrity, not ideology. The Paper Trail checks whether politicians' numbers match their own cited sources.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
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
          <p style={labelStyle}>About</p>
          <h1
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 40,
              fontWeight: 400,
              letterSpacing: '-0.03em',
              color: COLORS.navy,
              lineHeight: 1.15,
              margin: '0 0 28px',
            }}
          >
            We campaign for integrity, not ideology
          </h1>
        </ScrollReveal>

        {/* Why this exists */}
        <ScrollReveal delay={0.1}>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Why this exists</h2>
            <p style={bodyStyle}>
              We believe in debate. Genuinely. People should argue about policy, about
              priorities, about what kind of country they want to live in. That&apos;s democracy
              working. Two people can look at the same problem and disagree completely about the
              solution, and that&apos;s fine.
            </p>
            <p style={bodyStyle}>
              What&apos;s not fine is when the numbers underneath the argument are wrong. Because
              once the data is bad, the debate is rigged before it even starts.
            </p>
            <p style={bodyStyle}>
              We don&apos;t have a problem with politicians disagreeing.{' '}
              <Highlight>We have a problem with politicians using wrong numbers.</Highlight>{' '}
              When a figure gets inflated by <Highlight>48 times</Highlight>, or a cost gets
              understated by a factor of <Highlight>15</Highlight>, or a source says the
              opposite of what&apos;s being claimed, voters can&apos;t make real choices. The
              people who need help the most end up getting let down when promises built on
              fake figures don&apos;t deliver.
            </p>
            <p style={bodyStyle}>
              So we started checking. Not opinions. Not policies. Just the numbers, against the
              sources politicians themselves say those numbers come from.
            </p>
          </div>
        </ScrollReveal>

        {/* Remember the bus */}
        <ScrollReveal>
          <div id="the-bus" style={sectionStyle}>
            <h2 style={h2Style}>Remember the bus?</h2>
            <p style={bodyStyle}>
              In 2016, a single number on the side of a bus helped shape the direction of
              the entire country. <Highlight>&pound;350 million a week</Highlight>, it said.
              That&apos;s what we send the EU. Let&apos;s fund our NHS instead.
            </p>
            <p style={bodyStyle}>
              The UK Statistics Authority called it{' '}
              <Highlight>a clear misuse of official statistics</Highlight>. The &pound;350m
              was the gross figure before the UK&apos;s rebate, which never actually left the
              country. The Office for National Statistics put the net contribution at around
              &pound;250 million a week. That&apos;s a significant amount of money, but it&apos;s
              not the number on the bus.
            </p>
            <p style={bodyStyle}>
              None of that mattered. By the time anyone corrected it, 17.4 million people had
              already voted. Two years after the referendum, 42% of people who&apos;d heard
              the claim still believed it was true.
            </p>
            <p style={bodyStyle}>
              The Vote Leave campaign director, Dominic Cummings, later said the bus was one
              of the main reasons they won. He&apos;d actively hoped people would argue about
              the number, because the argument itself kept it in the headlines. That&apos;s
              not a conspiracy theory. He said it publicly.
            </p>
            <p style={bodyStyle}>
              That&apos;s the problem The Paper Trail exists to solve. Not the politics of
              Brexit. Not whether leaving was right or wrong. The problem is simpler than that:
              a figure that the UK&apos;s own statistical watchdog labelled a misuse was
              plastered on the side of a bus, repeated thousands of times, and shaped a national
              vote. And nobody could stop it.
            </p>
            <p style={bodyStyle}>
              We can&apos;t stop politicians saying whatever they want. But we can make it
              easier for voters to check whether the numbers add up. That&apos;s all this is.
            </p>
          </div>
        </ScrollReveal>

        {/* What we do */}
        <ScrollReveal>
          <div style={sectionStyle}>
            <h2 style={h2Style}>What we do</h2>
            <p style={bodyStyle}>
              Every investigation follows three steps. First, we find the source. When a
              politician quotes a figure, we track down the exact report, dataset, or study
              they say it comes from. Not a press release. Not a media summary. The actual
              document.
            </p>
            <p style={bodyStyle}>
              Then we compare. We put what they said next to what the source actually says,
              red on the left and green on the right, so you can see the gap for yourself. We
              use plain language to explain what the discrepancy means in practice.
            </p>
            <p style={bodyStyle}>
              Sometimes a claim gets passed from outlet to outlet, changing slightly at each
              step. When that happens, we trace the full citation chain to show exactly where
              the number shifted and what got left behind along the way.
            </p>
          </div>
        </ScrollReveal>

        {/* What we don't do */}
        <ScrollReveal>
          <div style={sectionStyle}>
            <h2 style={h2Style}>What we don&apos;t do</h2>
            <p style={bodyStyle}>
              We don&apos;t rate claims on a truth scale. We don&apos;t hand out Pinocchios
              or traffic-light ratings. Either the numbers match the cited source or they don&apos;t.
            </p>
            <p style={bodyStyle}>
              We don&apos;t campaign for or against any policy. Whether water should be
              nationalised, how high taxes should be, what the government should spend money
              on: those are political questions and we have no position on them.
            </p>
            <p style={bodyStyle}>
              We don&apos;t tell you what to think. We show you two sets of numbers and let
              you draw your own conclusions. If you look at the evidence and still support the
              policy, that&apos;s your call. At least you&apos;re making it with accurate
              information.
            </p>
          </div>
        </ScrollReveal>

        {/* Who we hold to account */}
        <ScrollReveal>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Who we hold to account</h2>
            <p style={bodyStyle}>
              Labour. The Conservatives. The Green Party. Reform. The Liberal Democrats.
              Cross-party groups. Anyone who cites a number in public and attaches a source to it.
            </p>
            <p style={bodyStyle}>
              <Highlight>Every party. Same standard. No exceptions.</Highlight>
            </p>
            <p style={bodyStyle}>
              You&apos;ll notice our current investigations cover Labour, the Greens, and
              cross-party claims. That&apos;s not because we&apos;re targeting anyone. It&apos;s
              because those are the claims we&apos;ve found so far where the numbers don&apos;t
              match the cited sources. If the Conservatives or Reform publish a report next
              week and the figures don&apos;t add up, they&apos;ll get the same treatment.
            </p>
          </div>
        </ScrollReveal>

        {/* Corrections matter */}
        <ScrollReveal>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Corrections matter</h2>
            <p style={bodyStyle}>
              When someone fixes their figures, we say so. We&apos;re not in the business of
              permanently branding people as liars. The point is to get the numbers right, not
              to score points.
            </p>
            <p style={bodyStyle}>
              <Highlight>Getting it wrong isn&apos;t the crime. Refusing to fix it is.</Highlight>
            </p>
            <p style={bodyStyle}>
              If a party issues a correction and updates their public statements, we&apos;ll
              note it clearly on the investigation. That&apos;s how accountability should work.
              Everyone makes mistakes. What matters is whether you correct them when someone
              points them out.
            </p>
          </div>
        </ScrollReveal>

        {/* Who we are */}
        <ScrollReveal>
          <div style={{ ...sectionStyle, marginBottom: 0 }}>
            <h2 style={h2Style}>Who we are</h2>
            <p style={bodyStyle}>
              The Paper Trail is run by independent researchers. We have no funding from
              political parties, no corporate sponsors, and no editorial board telling us what
              to cover. Our only commitment is to accuracy.
            </p>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans), sans-serif',
  fontSize: 10,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: '#8b8e99',
  marginBottom: 16,
};

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans), sans-serif',
  fontSize: 16,
  lineHeight: 1.7,
  color: '#525560',
  margin: 0,
};

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-serif), serif',
  fontSize: 28,
  fontWeight: 400,
  letterSpacing: '-0.02em',
  color: '#1b2a4a',
  margin: '0 0 4px',
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  marginBottom: 52,
};
