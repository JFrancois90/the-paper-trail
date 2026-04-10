export interface Investigation {
  id: number;
  slug: string;
  who: string;
  party: string;
  date: string;
  claim: string;
  said: string;
  source: string;
  impact: string;
  analogy: string;
  barData: Array<{
    label: string;
    sublabel: string;
    value: number;
    color: string;
    fmt: string;
  }>;
  whisperChain: Array<{
    name: string;
    date: string;
    type: 'origin' | 'mid' | 'final';
  }> | null;
  whisperNote: string | null;
  questions: [string, string, string];
  multiplier: string;
  multiplierLabel: string;
}

export const investigations: Investigation[] = [
  {
    id: 1,
    slug: 'railtrack-500m',
    who: 'Clive Lewis MP',
    party: 'Labour',
    date: 'Dec 2024',
    claim: 'Labour nationalised Railtrack, paying just \u00a3500 million for the entire UK rail network',
    said: 'Railtrack was nationalised for \u00a3500m, and this is being used as a precedent to argue that nationalising water companies won\u2019t cost much',
    source: 'The \u00a3500m was only the equity paid to shareholders. On top of that, Network Rail absorbed \u00a37.1bn of Railtrack\u2019s debt. The actual cost was \u00a37.6bn, which is 15 times the figure being quoted.',
    impact: 'This claim is being used as one of two key precedents to argue that water nationalisation will be cheap. If you\u2019re understating the cost by a factor of 15, the entire policy costing falls apart. Voters deserve accurate numbers so they can decide for themselves whether nationalisation is affordable.',
    analogy: 'Think of it like buying a house for \u00a31 when it has a \u00a3500,000 mortgage. The \u00a31 is what you paid for the keys, but you\u2019ve just taken on all the debt too. The real price is \u00a3500,001.',
    barData: [
      { label: 'Quoted', sublabel: 'Equity only', value: 0.5, color: '#b5302a', fmt: '\u00a30.5bn' },
      { label: 'Omitted', sublabel: 'Debt absorbed', value: 7.1, color: '#1b2a4a', fmt: '\u00a37.1bn' },
      { label: 'True cost', sublabel: 'Equity + debt', value: 7.6, color: '#1a6b42', fmt: '\u00a37.6bn' },
    ],
    whisperChain: [
      { name: 'Clive Lewis MP', date: 'Dec 2024', type: 'origin' },
      { name: 'We Own It + Univ. Greenwich', date: 'Apr 2025', type: 'mid' },
      { name: 'Common Wealth', date: 'Jun 2025', type: 'mid' },
      { name: 'Left Foot Forward', date: 'Apr 2025', type: 'mid' },
      { name: 'NEB Digest', date: 'Jul 2025', type: 'final' },
    ],
    whisperNote: 'The \u00a37.1bn debt and the mischaracterisation of the court ruling both disappeared. By the time it reached NEB Digest, the \u00a3500m figure read as established fact.',
    questions: [
      'Why was the \u00a37.1bn debt left out of every version of this claim?',
      'If the true cost was \u00a37.6bn, does water nationalisation still add up under your current projections?',
      'Four outlets cited each other without checking the original source. What responsibility do MPs have when their claims get republished unchecked?',
    ],
    multiplier: '15\u00d7',
    multiplierLabel: 'cost understated',
  },
  {
    id: 2,
    slug: 'billionaire-numbers',
    who: 'Green Party leadership',
    party: 'Green',
    date: 'Nov 2025',
    claim: 'The number of billionaires has increased since 2022',
    said: 'Used in a public letter to the Chancellor to argue that wealth inequality is getting worse and needs urgent action',
    source: 'The Equality Trust report they linked to in the letter actually shows UK billionaire numbers went from 177 in 2022 down to 156 in 2025. That\u2019s a decrease, not an increase.',
    impact: 'If you\u2019re writing to the Chancellor to demand policy change based on rising billionaire numbers, and your own source shows the opposite trend, the whole premise of your letter doesn\u2019t hold up. It also makes it harder for voters to trust the other figures in the same letter.',
    analogy: 'It\u2019s like citing a weather report that says 15\u00b0C and then telling everyone there\u2019s a heatwave.',
    barData: [
      { label: '2022', sublabel: 'Their source', value: 177, color: '#1b2a4a', fmt: '177' },
      { label: '2025', sublabel: 'Their source', value: 156, color: '#b5302a', fmt: '156' },
    ],
    whisperChain: null,
    whisperNote: null,
    questions: [
      'Did anyone who drafted the letter actually click the link and read the Equality Trust report?',
      'Will you issue a correction to the Chancellor and to the public?',
      'What checks exist to make sure the claims in your public letters match the sources you cite?',
    ],
    multiplier: '\u221212%',
    multiplierLabel: 'actual trend',
  },
  {
    id: 3,
    slug: 'cgt-lowest-g7',
    who: 'Green Party leadership',
    party: 'Green',
    date: 'Nov 2025',
    claim: 'UK Capital Gains Tax rates are currently the lowest in the G7',
    said: 'Used in the same letter to the Chancellor, arguing for CGT to be aligned with income tax rates',
    source: 'UK CGT sits at 18% for basic rate and 24% for higher rate taxpayers. In the US (also a G7 country), long-term capital gains start at 0% for the first ~$48,000, then 15%, and top out at 20%. Those are clearly lower than the UK\u2019s rates.',
    impact: 'If you\u2019re making the case for tax increases based on how the UK compares internationally, getting the comparison wrong undermines trust in every other number you\u2019ve put forward.',
    analogy: 'It\u2019s a bit like saying your car is the slowest on the motorway while you\u2019re overtaking someone.',
    barData: [
      { label: 'US (low)', sublabel: '0% band', value: 0, color: '#1a6b42', fmt: '0%' },
      { label: 'US (mid)', sublabel: '15% band', value: 15, color: '#1a6b42', fmt: '15%' },
      { label: 'US (top)', sublabel: '20% rate', value: 20, color: '#1a6b42', fmt: '20%' },
      { label: 'UK (basic)', sublabel: '18% rate', value: 18, color: '#b5302a', fmt: '18%' },
      { label: 'UK (higher)', sublabel: '24% rate', value: 24, color: '#b5302a', fmt: '24%' },
    ],
    whisperChain: null,
    whisperNote: null,
    questions: [
      'Which G7 countries\u2019 CGT rates were actually compared, and where is the working?',
      'Were US long-term capital gains rates (which start at 0%) included in the analysis?',
      'Will the Green Party correct the public record on this claim?',
    ],
    multiplier: 'False',
    multiplierLabel: 'US starts at 0%',
  },
  {
    id: 4,
    slug: '350bn-tax-evasion',
    who: 'Multiple sources',
    party: 'Cross-party',
    date: '2025',
    claim: '\u00a3350 billion is lost to tax evasion each year',
    said: 'Attributed to the Chartered Institute of Taxation, and used to argue for massive enforcement spending',
    source: 'HMRC\u2019s official tax gap puts evasion at \u00a35.5bn and avoidance at \u00a31.8bn, totalling \u00a37.3bn. The \u00a3350bn figure actually refers to the estimated costs of all economic crime and financial opacity, which is a vastly broader category. Somewhere along the citation chain, \u2018economic crime\u2019 got quietly swapped for \u2018tax evasion\u2019 while the number stayed the same.',
    impact: 'Inflating a \u00a37.3bn problem to \u00a3350bn (a 48 times exaggeration) completely distorts the cost-benefit analysis of any enforcement policy that relies on it. You\u2019d be building your budget on a number that\u2019s 48 times too big.',
    analogy: 'It\u2019s like quoting the entire NHS budget when someone asks how much we spend on plasters.',
    barData: [
      { label: 'HMRC actual', sublabel: 'Tax evasion', value: 5.5, color: '#1a6b42', fmt: '\u00a35.5bn' },
      { label: 'Claimed', sublabel: '\u201cTax evasion\u201d', value: 350, color: '#b5302a', fmt: '\u00a3350bn' },
    ],
    whisperChain: [
      { name: 'HMRC (\u00a35.5bn evasion)', date: 'Official figure', type: 'origin' },
      { name: 'NCA (\u00a3100bn laundering)', date: 'Broader scope', type: 'mid' },
      { name: 'APPG (\u00a3290bn)', date: '\u201cConservative estimate\u201d', type: 'mid' },
      { name: 'APPG (\u00a3350bn)', date: '\u201cSome studies\u201d', type: 'mid' },
      { name: 'CIOT citing APPG', date: 'Quoted figure', type: 'mid' },
      { name: '\u201c\u00a3350bn tax evasion\u201d', date: 'Final form', type: 'final' },
    ],
    whisperNote: 'At every step the number got bigger and the definition got narrower. \u2018Economic crime and financial opacity\u2019 became just \u2018tax evasion\u2019, but nobody adjusted the figure down. The result is a number that\u2019s 48 times larger than what HMRC actually reports.',
    questions: [
      'At which point in the citation chain was \u2018economic crime\u2019 replaced with \u2018tax evasion\u2019?',
      'If the actual tax evasion figure is \u00a35.5bn, how does that change the cost-benefit case for your proposed enforcement spending?',
      'Why wasn\u2019t the HMRC official figure used as the primary source?',
    ],
    multiplier: '48\u00d7',
    multiplierLabel: 'figure inflated',
  },
];
