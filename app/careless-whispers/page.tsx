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
        <div style={{ padding: '100px 28px 40px', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: H, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: COLORS.navy, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            Careless whispers
          </h1>
          <p style={{ fontFamily: B, fontSize: 18, color: COLORS.muted, margin: '0 0 8px' }}>
            How numbers change as they pass from source to source. Three examples.
          </p>
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
