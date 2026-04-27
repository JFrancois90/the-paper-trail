'use client';

import Nav from '@/components/Nav';
import BackButton from '@/components/BackButton';
import ChainStepThrough from '@/components/ChainStepThrough';
import { railtrackChain, immigrationChain, hmrcChain } from '@/data/chains';
import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';
const H = 'var(--font-heading), sans-serif';

export default function CarelessWhispersPage() {
  return (
    <>
      <Nav />
      <BackButton />
      <main id="main-content" style={{ background: COLORS.paper }}>
        {/* Page header */}
        <div style={{ padding: '100px 28px 16px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: H, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: COLORS.navy, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            Careless whispers
          </h1>
          <p style={{ fontFamily: B, fontSize: 18, color: COLORS.muted, margin: '0 0 8px' }}>
            How numbers change as they pass from source to source. Three examples.
          </p>
        </div>

        {/* The mechanic explainer */}
        <div style={{ padding: '0 28px 40px', maxWidth: 900, margin: '0 auto' }}>
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(27,42,74,0.08)',
              borderLeft: `4px solid ${COLORS.amber}`,
              borderRadius: 10,
              padding: '20px 24px',
            }}
          >
            <p style={{ fontFamily: B, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: COLORS.amber, margin: '0 0 8px' }}>
              How these chains work
            </p>
            <p style={{ fontFamily: B, fontSize: 16, lineHeight: 1.6, color: COLORS.ink, margin: 0 }}>
              Each report didn&apos;t debate whether the prior figure was right. They just quoted the previous one and changed it slightly. We clicked through every source and mapped the change. Click through like we did.
            </p>
          </div>
        </div>

        {/* Chain 1: Railtrack */}
        <div style={{ padding: '0 28px' }}>
          <ChainStepThrough
            id="railtrack-chain"
            title={railtrackChain.title}
            subtitle={railtrackChain.subtitle}
            steps={railtrackChain.steps}
            nodes={railtrackChain.nodes}
            disappeared={railtrackChain.disappeared}
            endNote={railtrackChain.endNote}
          />
        </div>

        {/* Divider */}
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 28px' }}>
          <hr style={{ border: 'none', borderTop: '1px solid rgba(27,42,74,0.1)', margin: '0 0 60px' }} />
        </div>

        {/* Chain 2: £234bn Immigration */}
        <div style={{ padding: '0 28px' }}>
          <ChainStepThrough
            id="immigration-chain"
            title={immigrationChain.title}
            subtitle={immigrationChain.subtitle}
            steps={immigrationChain.steps}
            nodes={immigrationChain.nodes}
            disappeared={immigrationChain.disappeared}
            endNote={immigrationChain.endNote}
          />
        </div>

        {/* Divider */}
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 28px' }}>
          <hr style={{ border: 'none', borderTop: '1px solid rgba(27,42,74,0.1)', margin: '0 0 60px' }} />
        </div>

        {/* Chain 3: HMRC Tax Evasion */}
        <div style={{ padding: '0 28px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto 20px' }}>
            <div
              style={{
                background: '#fae9b0',
                borderRadius: 8,
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <span style={{ fontSize: 16, flexShrink: 0 }}>&#x1F4E2;</span>
              <p style={{ fontFamily: B, fontSize: 14, color: COLORS.navy, margin: 0 }}>
                We support closing tax evasion, 100%. We do not support fabricated numbers driving policy.
              </p>
            </div>
          </div>
          <ChainStepThrough
            id="hmrc-chain"
            title={hmrcChain.title}
            subtitle={hmrcChain.subtitle}
            steps={hmrcChain.steps}
            nodes={hmrcChain.nodes}
            endNote={hmrcChain.endNote}
          />
        </div>

        <div style={{ height: 80 }} />
      </main>
    </>
  );
}
