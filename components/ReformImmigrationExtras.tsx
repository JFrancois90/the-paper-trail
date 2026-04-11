'use client';

import ChainStepThrough from '@/components/ChainStepThrough';
import { immigrationChain } from '@/data/chains';

export default function ReformImmigrationExtras() {
  return (
    <ChainStepThrough
      id="immigration-chain-inv"
      title={immigrationChain.title}
      subtitle={immigrationChain.subtitle}
      steps={immigrationChain.steps}
      nodes={immigrationChain.nodes}
      disappeared={immigrationChain.disappeared}
      endNote={immigrationChain.endNote}
      showCWLink
    />
  );
}
