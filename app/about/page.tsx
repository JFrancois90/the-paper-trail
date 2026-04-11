import type { Metadata } from 'next';
import { COLORS } from '@/lib/constants';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ScrollReveal from '@/components/ScrollReveal';
import Highlight from '@/components/Highlight';
import MemeIllustration from '@/components/MemeIllustration';

export const metadata: Metadata = {
  title: 'About | The Paper Trail',
  description:
    "We campaign for integrity, not ideology. The Paper Trail checks whether politicians' numbers match their own cited sources.",
};

export default function AboutPage() {
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
          <div style={{ marginBottom: 20 }}>
            <img
              src="/logo-nav.png"
              alt="The Paper Trail"
              style={{ height: 80 }}
            />
          </div>
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
              priorities, about what kind of country they want to live in. <strong>That is democracy
              working.</strong>
            </p>
            <p style={bodyStyle}>
              Two people can look at the same problem and disagree completely about the
              solution, and that is fine.
            </p>
            <p style={bodyStyle}>
              What is <strong>not</strong> fine is when the numbers underneath the argument are wrong.
              Once the data is bad, the debate is rigged before it even starts.
            </p>
            <p style={bodyStyle}>
              We do not have a problem with politicians disagreeing.{' '}
              <Highlight>We have a problem with politicians using wrong numbers.</Highlight>
            </p>
            <p style={bodyStyle}>
              When a figure gets:
            </p>
            <ul style={listStyle}>
              <li>Inflated by <Highlight>48 times</Highlight></li>
              <li>Understated by a factor of <Highlight>15</Highlight></li>
              <li>Presented as saying the <strong>opposite</strong> of what the source actually shows</li>
            </ul>
            <p style={bodyStyle}>
              ...voters cannot make real choices. The people who need help the most end up getting
              let down when promises built on fake figures do not deliver.
            </p>
            <p style={bodyStyle}>
              So we started checking. <strong>Not opinions. Not policies. Just the numbers</strong>, against the
              sources politicians themselves say those numbers come from.
            </p>

            {/* 280 days meme */}
            <MemeIllustration />
          </div>
        </ScrollReveal>

        {/* Remember the bus */}
        <ScrollReveal>
          <div id="the-bus" style={sectionStyle}>
            <h2 style={h2Style}>Remember the bus?</h2>
            <p style={bodyStyle}>
              In 2016, a single number on the side of a bus helped shape the direction of
              the entire country. <Highlight>&pound;350 million a week</Highlight>, it said.
              That is what we send the EU. Let us fund our NHS instead.
            </p>
            <p style={bodyStyle}>
              The UK Statistics Authority called it{' '}
              <Highlight>a clear misuse of official statistics</Highlight>.
            </p>
            <ul style={listStyle}>
              <li>The &pound;350m was the <strong>gross figure</strong> before the UK rebate, which never actually left the country.</li>
              <li>The Office for National Statistics put the <strong>net contribution at around &pound;250 million a week</strong>.</li>
              <li>That is a significant amount of money, but it is not the number on the bus.</li>
            </ul>
            <p style={bodyStyle}>
              None of that mattered. By the time anyone corrected it, <strong>17.4 million people had
              already voted</strong>. Two years after the referendum, 42% of people who had heard
              the claim still believed it was true.
            </p>
            <p style={bodyStyle}>
              The Vote Leave campaign director, Dominic Cummings, later said the bus was one
              of the main reasons they won. He actively hoped people would argue about
              the number, because <strong>the argument itself kept it in the headlines</strong>.
            </p>
            <p style={bodyStyle}>
              That is the problem The Paper Trail exists to solve. Not the politics of
              Brexit. Not whether leaving was right or wrong.
            </p>
            <p style={bodyStyle}>
              <Highlight>The problem is simpler than that</Highlight>: a figure that the UK&apos;s own statistical watchdog labelled
              a misuse was plastered on the side of a bus, repeated thousands of times, and shaped a national
              vote. And nobody could stop it.
            </p>
            <p style={bodyStyle}>
              We cannot stop politicians saying whatever they want. But we can make it
              easier for voters to check whether the numbers add up.
            </p>
          </div>
        </ScrollReveal>

        {/* What we do */}
        <ScrollReveal>
          <div style={sectionStyle}>
            <h2 style={h2Style}>What we do</h2>
            <p style={bodyStyle}>
              Every investigation follows <strong>three steps</strong>:
            </p>
            <ul style={listStyle}>
              <li><strong>Find the source.</strong> When a politician quotes a figure, we track down the exact report, dataset, or study they say it comes from. Not a press release. Not a media summary. The actual document.</li>
              <li><strong>Compare.</strong> We put what they said next to what the source actually says, red on the left and green on the right, so you can see the gap for yourself.</li>
              <li><strong>Trace the chain.</strong> Sometimes a claim gets passed from outlet to outlet, changing slightly at each step. We trace the full citation chain to show exactly where the number shifted.</li>
            </ul>
          </div>
        </ScrollReveal>

        {/* What we don't do */}
        <ScrollReveal>
          <div style={sectionStyle}>
            <h2 style={h2Style}>What we don&apos;t do</h2>
            <ul style={listStyle}>
              <li>We <strong>do not rate claims on a truth scale</strong>. No Pinocchios, no traffic-light ratings. Either the numbers match the cited source or they do not.</li>
              <li>We <strong>do not campaign for or against any policy</strong>. Whether water should be nationalised, how high taxes should be: those are political questions and we have no position on them.</li>
              <li>We <strong>do not tell you what to think</strong>. We show you two sets of numbers and let you draw your own conclusions.</li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Who we hold to account */}
        <ScrollReveal>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Who we hold to account</h2>
            <p style={bodyStyle}>
              Labour. The Conservatives. The Green Party. Reform. The Liberal Democrats.
              Cross-party groups. <strong>Anyone who cites a number in public and attaches a source to it.</strong>
            </p>
            <p style={bodyStyle}>
              <Highlight>Every party. Same standard. No exceptions.</Highlight>
            </p>
            <p style={bodyStyle}>
              Our current investigations cover Labour, the Greens, cross-party claims, and media outlets.
              That is not because we are targeting anyone. It is because those are the claims we have found so
              far where the numbers do not match the cited sources.
            </p>
            <p style={bodyStyle}>
              If the Conservatives or Reform publish a report next
              week and the figures do not add up, they will get the same treatment.
            </p>
          </div>
        </ScrollReveal>

        {/* Corrections matter */}
        <ScrollReveal>
          <div style={sectionStyle}>
            <h2 style={h2Style}>Corrections matter</h2>
            <p style={bodyStyle}>
              When someone fixes their figures, we say so. We are not in the business of
              permanently branding people as liars. <strong>The point is to get the numbers right, not
              to score points.</strong>
            </p>
            <p style={bodyStyle}>
              <Highlight>Getting it wrong is not the crime. Refusing to fix it is.</Highlight>
            </p>
            <p style={bodyStyle}>
              If a party issues a correction and updates their public statements, we will
              note it clearly on the investigation. That is how accountability should work.
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
              The Paper Trail is run by <strong>independent researchers</strong>. We have no funding from
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
  fontSize: 12,
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

const listStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans), sans-serif',
  fontSize: 16,
  lineHeight: 1.7,
  color: '#525560',
  margin: 0,
  paddingLeft: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
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
  marginBottom: 56,
};
