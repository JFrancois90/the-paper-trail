export interface Investigation {
  id: number;
  slug: string;
  who: string;
  party: string;
  date: string;
  claim: string;
  saidQuote: string;
  said: string;
  source: string;
  sourceImage: string | null;
  sourceOneLiner: string;
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
    url?: string;
  }> | null;
  whisperNote: string | null;
  sourceLabel: string;
  correction: string | null;
  questions: [string, string, string];
  multiplier: string;
  multiplierLabel: string;
  subject: string;
  rebuttalStatus: {
    invited: string;
    dateInvited?: string;
    status: 'invited' | 'no-response' | 'responded';
    responseText?: string;
    responseDate?: string;
  } | null;
}

export const investigations: Investigation[] = [
  {
    id: 1,
    slug: 'railtrack-500m',
    who: 'Clive Lewis MP',
    party: 'Labour',
    date: 'Dec 2024',
    claim: 'Labour nationalised Railtrack, paying just £500 million for the entire UK rail network',
    saidQuote: 'Labour nationalised Railtrack, paying just £500 million for the entire UK rail network',
    said: 'Railtrack was nationalised for £500m, and this is being used as a precedent to argue that nationalising water companies won\'t cost much',
    source: '£500m was the equity (what was paid to shareholders). Network Rail absorbed £7.1bn of debt on top. True cost: £7.6bn. That\'s 15 times the quoted figure.',
    sourceImage: null,
    sourceOneLiner: 'Equity: £0.5bn. Debt absorbed: £7.1bn. True cost: £7.6bn.',
    impact: 'Quoted cost: £500m. True cost: £7.6bn. The figure is out by a factor of 15. This claim is a key precedent for water nationalisation costings. If the input is 15 times too low, the policy maths falls apart. Voters deserve accurate numbers to decide for themselves.',
    analogy: 'Think of it like buying a house for £100k when it has a £400k mortgage. The £100k is the equity the seller had, but you\'ve just taken on all the debt too. The real price is £500k (otherwise Rightmove has some explaining to do!)',
    barData: [
      { label: 'Quoted', sublabel: 'Equity only', value: 0.5, color: '#b5302a', fmt: '£0.5bn' },
      { label: 'Omitted', sublabel: 'Debt absorbed', value: 7.1, color: '#1b2a4a', fmt: '£7.1bn' },
      { label: 'True cost', sublabel: 'Equity + debt', value: 7.6, color: '#1a6b42', fmt: '£7.6bn' },
    ],
    whisperChain: [
      { name: 'Clive Lewis MP', date: 'Dec 2024', type: 'origin', url: 'https://www.clivelewis.org/uncategorised/news-and-updates/2024/12/26/analysis-is-the-supposed-90bn-cost-of-compensation-really-a-barrier-to-restoring-water-companies-to-public-ownership/' },
      { name: 'We Own It + Univ. Greenwich', date: 'Apr 2025', type: 'mid', url: 'https://weownit.org.uk/news/governments-worst-case-scenario-for-nationalising-water-still-leaves-households-better-off/' },
      { name: 'Common Wealth', date: 'Jun 2025', type: 'mid', url: 'https://www.common-wealth.org/publications/how-to-clean-up-our-water' },
      { name: 'Left Foot Forward', date: 'Apr 2025', type: 'mid', url: 'https://leftfootforward.org/2025/04/revealed-nationalisation-of-utilities-would-save-the-uk-billions-according-to-new-report/' },
      { name: 'NEB Digest', date: 'Jul 2025', type: 'final', url: 'https://www.neweconomybrief.net/the-digest/fixing-the-water-sector' },
    ],
    whisperNote: 'The £7.1bn debt and the mischaracterisation of the court ruling both disappeared. By the time it reached NEB Digest, the £500m figure read as established fact.',
    sourceLabel: 'What the numbers actually show',
    correction: null,
    questions: [
      'Why was the £7.1bn debt left out of every version of this claim?',
      'If the true cost was £7.6bn, does water nationalisation still add up under your current projections?',
      'Four outlets cited each other without checking the original source. What responsibility do MPs have when their claims get republished unchecked?',
    ],
    multiplier: '15×',
    multiplierLabel: 'cost understated',
    subject: 'Nationalisation',
    rebuttalStatus: { invited: 'Clive Lewis MP', dateInvited: 'Jan 2026', status: 'no-response' },
  },
  {
    id: 2,
    slug: 'billionaire-numbers',
    who: 'Green Party leadership',
    party: 'Green',
    date: 'Nov 2025',
    claim: 'The number of billionaires has increased since 2022',
    saidQuote: 'The number of billionaires has increased since 2022',
    said: 'Used in a public letter to the Chancellor to argue that wealth inequality is getting worse and needs urgent action',
    source: 'Their cited report shows billionaire numbers: 177 in 2022, down to 156 in 2025. That\'s a decrease, not an increase.',
    sourceImage: null,
    sourceOneLiner: 'Their source shows 177 → 156. That\'s a decrease.',
    impact: 'Their source says 177 billionaires in 2022, down to 156 in 2025. They claimed the number was rising. The letter to the Chancellor used this to demand policy change. The premise of the letter contradicts its own cited source. It makes every other figure in the letter harder to trust.',
    analogy: 'It\'s like citing a weather report that says 15°C and then telling everyone there\'s a heatwave.',
    barData: [
      { label: '2022', sublabel: 'Their source', value: 177, color: '#1b2a4a', fmt: '177' },
      { label: '2025', sublabel: 'Their source', value: 156, color: '#b5302a', fmt: '156' },
    ],
    whisperChain: null,
    whisperNote: null,
    sourceLabel: 'What their own source shows',
    correction: 'The Green Party reviewed their figures and updated their communications following this being raised.',
    questions: [
      'Did anyone who drafted the letter actually click the link and read the Equality Trust report?',
      'Will you issue a correction to the Chancellor and to the public?',
      'What checks exist to make sure the claims in your public letters match the sources you cite?',
    ],
    multiplier: '−12%',
    multiplierLabel: 'actual trend',
    subject: 'Wealth inequality',
    rebuttalStatus: { invited: 'Green Party leadership', dateInvited: 'Dec 2025', status: 'no-response' },
  },
  {
    id: 3,
    slug: 'cgt-lowest-g7',
    who: 'Green Party leadership',
    party: 'Green',
    date: 'Nov 2025',
    claim: 'UK Capital Gains Tax rates are currently the lowest in the G7',
    saidQuote: 'UK Capital Gains Tax rates are currently the lowest in the G7',
    said: 'Used in the same letter to the Chancellor, arguing for CGT to be aligned with income tax rates',
    source: 'UK CGT: 18% basic, 24% higher. US long-term capital gains start at 0%, then 15%, topping at 20%. The US rates are clearly lower.',
    sourceImage: null,
    sourceOneLiner: 'US long-term rate starts at 0%. UK basic rate: 18%.',
    impact: 'US long-term capital gains start at 0%. UK basic rate: 18%. The UK is not the lowest in the G7. Getting international comparisons wrong undermines the case for tax reform. Every other number in the letter becomes harder to trust.',
    analogy: 'It\'s a bit like saying your car is the slowest on the motorway while you\'re overtaking someone.',
    barData: [
      { label: 'US (low)', sublabel: '0% band', value: 0, color: '#1a6b42', fmt: '0%' },
      { label: 'US (mid)', sublabel: '15% band', value: 15, color: '#1a6b42', fmt: '15%' },
      { label: 'US (top)', sublabel: '20% rate', value: 20, color: '#1a6b42', fmt: '20%' },
      { label: 'UK (basic)', sublabel: '18% rate', value: 18, color: '#b5302a', fmt: '18%' },
      { label: 'UK (higher)', sublabel: '24% rate', value: 24, color: '#b5302a', fmt: '24%' },
    ],
    whisperChain: null,
    whisperNote: null,
    sourceLabel: 'What their own source shows',
    correction: 'The Green Party reviewed their figures and updated their communications following this being raised.',
    questions: [
      'Which G7 countries\' CGT rates were actually compared, and where is the working?',
      'Were US long-term capital gains rates (which start at 0%) included in the analysis?',
      'Will the Green Party correct the public record on this claim?',
    ],
    multiplier: 'False',
    multiplierLabel: 'US starts at 0%',
    subject: 'Taxation',
    rebuttalStatus: { invited: 'Green Party leadership', dateInvited: 'Dec 2025', status: 'no-response' },
  },
  {
    id: 4,
    slug: '350bn-tax-evasion',
    who: 'Multiple sources',
    party: 'Cross-party',
    date: '2025',
    claim: '£350 billion is lost to tax evasion each year',
    saidQuote: '£350 billion is lost to tax evasion each year',
    said: 'Attributed to the Chartered Institute of Taxation, and used to argue for massive enforcement spending',
    source: 'HMRC official tax gap: evasion £5.5bn, avoidance £1.8bn. Total: £7.3bn. The £350bn figure covers all economic crime, not just tax evasion. The label changed, the number didn\'t.',
    sourceImage: null,
    sourceOneLiner: 'HMRC official figure: £5.5bn. Not £350bn.',
    impact: 'HMRC says tax evasion costs £5.5bn. The cited figure is £350bn. That is 48 times too high. The £350bn covers all economic crime, not just tax evasion. Building enforcement budgets on a 48x exaggeration distorts every policy that relies on it.',
    analogy: 'It\'s like quoting the entire NHS budget when someone asks how much we spend on plasters.',
    barData: [
      { label: 'HMRC actual', sublabel: 'Tax evasion', value: 5.5, color: '#1a6b42', fmt: '£5.5bn' },
      { label: 'Claimed', sublabel: '\u201cTax evasion\u201d', value: 350, color: '#b5302a', fmt: '£350bn' },
    ],
    whisperChain: [
      { name: 'HMRC (£5.5bn evasion)', date: 'Official figure', type: 'origin' },
      { name: 'NCA (£100bn laundering)', date: 'Broader scope', type: 'mid' },
      { name: 'APPG (£290bn)', date: '\u201cConservative estimate\u201d', type: 'mid' },
      { name: 'APPG (£350bn)', date: '\u201cSome studies\u201d', type: 'mid' },
      { name: 'CIOT citing APPG', date: 'Quoted figure', type: 'mid' },
      { name: '\u201c£350bn tax evasion\u201d', date: 'Final form', type: 'final' },
    ],
    whisperNote: 'At every step the number got bigger and the definition got narrower. \'Economic crime and financial opacity\' became just \'tax evasion\', but nobody adjusted the figure down. The result is a number that\'s 48 times larger than what HMRC actually reports.',
    sourceLabel: 'What the official figures show',
    correction: null,
    questions: [
      'At which point in the citation chain was \'economic crime\' replaced with \'tax evasion\'?',
      'If the actual tax evasion figure is £5.5bn, how does that change the cost-benefit case for your proposed enforcement spending?',
      'Why wasn\'t the HMRC official figure used as the primary source?',
    ],
    multiplier: '48×',
    multiplierLabel: 'figure inflated',
    subject: 'Taxation',
    rebuttalStatus: { invited: 'Multiple sources', dateInvited: 'Jan 2026', status: 'invited' },
  },
  {
    id: 5,
    slug: 'student-debt-claim',
    who: 'Nadia Whittome MP',
    party: 'Labour',
    date: '2025',
    claim: 'I left university in 2019 with £49,600 of debt',
    saidQuote: 'I left university in 2019 with £49,600 of debt. 6 years on, the repayments from my salary have brought this total down to £48,600. Just £1,000 less.',
    said: 'Used to argue for tuition fee reduction, citing personal financial burden from student debt',
    source: '2 years of study. Living at home. Max possible student loan: ~£36,000. Amount claimed: £49,600. Gap: ~£13,600.',
    sourceImage: null,
    sourceOneLiner: 'Max possible debt for 2 years at Nottingham: ~£36,000. Claimed: £49,600.',
    sourceLabel: 'What the maths actually shows',
    impact: 'Claimed debt: £49,600. Maximum possible for 2 years at home: ~£36,000. The gap is £13,600 above what is mathematically possible. This figure is used to argue for tuition fee reduction. The personal story underpinning the policy argument does not add up.',
    analogy: 'It\'s like claiming your shopping bill was £150 when you only bought £100 worth of stuff. The receipt doesn\'t support the story.',
    barData: [
      { label: 'Max possible', sublabel: '2 years, living at home', value: 36, color: '#1a6b42', fmt: '~£36,000' },
      { label: 'Claimed', sublabel: 'Stated publicly', value: 49.6, color: '#b5302a', fmt: '£49,600' },
    ],
    whisperChain: null,
    whisperNote: null,
    correction: null,
    questions: [
      'Can you provide a breakdown of how a debt of £49,600 was accrued over two academic years of study while living at home?',
      'Your public statements cite financial burden as the reason for leaving university, but don\'t mention the first-year resit or your election campaigns during the same period. Will you clarify the full picture?',
      'Your LinkedIn profile lists \'Bachelor of Laws (LLB) 2017-2020\' and \'A Levels 2013-2015\', but you\'ve publicly stated you didn\'t complete either. Will you correct these entries?',
    ],
    multiplier: '£13.6k',
    multiplierLabel: 'above max possible',
    subject: 'Student loans',
    rebuttalStatus: { invited: 'Nadia Whittome MP', dateInvited: 'Jan 2026', status: 'no-response' },
  },
  {
    id: 6,
    slug: 'reform-tax-canary',
    who: 'The Canary UK',
    party: 'Cross-party',
    date: 'Feb 2026',
    claim: 'Reform\'s tax cuts help the richest people more than the poorest',
    saidQuote: 'What they\'re actually doing is cutting taxes for the richest people, while shaving barely anything from the poorest people\'s tax bills.',
    said: 'Published as analysis of Reform\'s proposed tax changes, arguing higher earners benefit more',
    source: 'Personal allowance rises from £12,570 to £20,000. Extra £7,430 taxed at 20% = £1,486 saving. Same for everyone above £20K. The 40% band is untouched.',
    sourceImage: null,
    sourceOneLiner: '£30K earner saves £1,486. £60K earner saves £1,486. The same amount.',
    sourceLabel: 'What the maths actually shows',
    impact: 'A £30k earner saves £1,486. A £60k earner saves £1,486. The saving is identical. The 40% rate is completely untouched by this proposal. Getting tax band maths wrong misleads people about who benefits. The public deserves accurate analysis regardless of which party proposed it.',
    analogy: 'It\'s like saying a 10% off voucher at Tesco benefits rich shoppers more. It doesn\'t. Everyone gets the same percentage off.',
    barData: [
      { label: '£15K earner', sublabel: 'Below new threshold', value: 486, color: '#1b2a4a', fmt: '£486' },
      { label: '£30K earner', sublabel: 'Basic rate', value: 1486, color: '#1a6b42', fmt: '£1,486' },
      { label: '£60K earner', sublabel: 'Higher rate', value: 1486, color: '#1a6b42', fmt: '£1,486' },
    ],
    whisperChain: null,
    whisperNote: null,
    correction: null,
    questions: [
      'Can you show your working for how a £60K earner benefits more than a £30K earner from this change?',
      'The 40% rate only applies above £50,271 and is not affected by this proposal. Both earners save £1,486. Will you correct the article?',
      'Misrepresenting who benefits from a tax policy misleads the public regardless of which party proposed it. Do you accept the analysis was wrong?',
    ],
    multiplier: '=',
    multiplierLabel: 'same saving',
    subject: 'Taxation',
    rebuttalStatus: { invited: 'The Canary (no response) and Richard Murphy (via Instagram, 26 Feb 2026, no response)', dateInvited: 'Feb 2026', status: 'no-response' },
  },
  {
    id: 7,
    slug: 'student-debt-97k',
    who: '@yourmoneymatesarah',
    party: 'Influencer',
    date: 'Jan 2026',
    claim: 'I am nearly £100,000 in debt. £97,592 to be exact.',
    saidQuote: 'I am nearly £100,000 in debt. £97,592 to be exact. By the time I\'m 50 I\'ll have paid nearly £50,000, which is more than I originally took out for the loan.',
    said: 'Used to argue for tuition fee reduction, citing personal financial burden from student debt',
    source: 'Borrowed ~£79,000 (tuition + maintenance + hardship). Will repay ~£50,000. That\'s £29,000 LESS than borrowed. Not more. The rest gets written off after 30 years.',
    sourceImage: null,
    sourceOneLiner: 'Borrowed ~£79,000. Will repay ~£50,000. That\'s £29,000 less, not more.',
    sourceLabel: 'What the maths actually shows',
    impact: 'Borrowed: ~£79,000. Will repay: ~£50,000. She pays back less, not more. Policy claims graduates overpay. This case shows the opposite. If the input data is wrong, the policy targets the wrong people. We take no position on the policy. We are pointing out the input is wrong.',
    analogy: 'It\'s like saying your phone contract cost you more than the phone. You got a £1,000 phone. You\'ll pay £700 over the contract. The rest gets written off. That\'s not paying more. That\'s paying less.',
    barData: [
      { label: 'Total borrowed', sublabel: 'Tuition + maintenance + hardship + interest', value: 97, color: '#1b2a4a', fmt: '~£97,000 (current balance)' },
      { label: 'Core borrowing', sublabel: 'Tuition + maintenance + hardship (pre-interest)', value: 79, color: '#2358a3', fmt: '~£79,000' },
      { label: 'Will actually repay', sublabel: 'Her own estimate by age 50', value: 50, color: '#1a6b42', fmt: '~£50,000' },
      { label: 'Written off', sublabel: 'Cancelled after 30 years', value: 29, color: '#c48a0a', fmt: '~£29,000' },
    ],
    whisperChain: null,
    whisperNote: null,
    correction: 'Sarah added a caption disclaimer to the post stating: \'For clarity: the amount I took out refers to the core borrowing for my degree; interest accrues during study under Plan 2, so balances are already higher by graduation.\'',
    questions: [
      'You state you\'ll pay back \'more than you originally took out\'. Your total borrowing was ~£79,000 (tuition, maintenance, hardship). Repaying ~£50,000 is £29,000 less. Can you clarify?',
      'The £97,000 balance includes interest accrued since 2016. Presenting this as \'debt\' without separating borrowing from interest creates a misleading picture of the system. Will you update the video itself?',
      'Two prospective students contacted us after seeing your video, worried they\'d \'end up like you\'. As a verified finance influencer, do you accept the video needs more than a caption disclaimer?',
    ],
    multiplier: '£29k',
    multiplierLabel: 'less than borrowed',
    subject: 'Student loans',
    rebuttalStatus: {
      invited: '@yourmoneymatesarah',
      dateInvited: 'Jan 2026',
      status: 'responded',
      responseText: 'Sarah described it as a \'language issue\' and added a caption disclaimer. The video itself remains unchanged.',
      responseDate: 'Feb 2026',
    },
  },
  {
    id: 8,
    slug: 'times-student-debt-37',
    who: 'Matilda Davies / The Times',
    party: 'Media',
    date: 'Feb 2026',
    claim: 'My debt is 37% higher than the amount that I borrowed',
    saidQuote: 'I left university having borrowed £49,000. Since then, I added an extra £11,000 for a master\'s degree, but I\'ve also made thousands of pounds in repayments and landed a steady job. Yet I still owe close to £67,000, making my debt 37% higher than the amount that I borrowed.',
    said: 'Used to illustrate how student loan interest inflates debt, published on The Times\' official Instagram account',
    source: 'She borrowed £49k for undergrad plus £11k for a master\'s. Total borrowed: £60k. Balance: £67k. That\'s 11.6% higher, not 37%. The 37% figure only works by excluding the master\'s loan she mentions in the same sentence.',
    sourceImage: null,
    sourceOneLiner: 'She borrowed £49k + £11k = £60k total. Balance is £67k. That\'s 11.6% higher, not 37%.',
    sourceLabel: 'What the maths actually shows',
    impact: 'Claimed increase: 37%. Actual increase: 11.6%. The figure is overstated by 3.2 times. Published by a data journalist on The Times\' Instagram. Prospective students hear \'37% higher\' and panic. The real number is still worth discussing. But 37% vs 11.6% changes the entire debate.',
    analogy: 'It\'s like buying a car for £20,000, adding £5,000 of upgrades, then telling everyone the dealer charged you 25% more because you\'re comparing the final price to just the base model. You spent £25,000. The final bill being £27,000 is an 8% increase, not 25%.',
    barData: [
      { label: 'Undergrad borrowing', sublabel: 'What she said she borrowed first', value: 49, color: '#1b2a4a', fmt: '£49,000' },
      { label: 'Master\'s borrowing', sublabel: 'Added \'an extra £11,000\'', value: 11, color: '#2358a3', fmt: '£11,000' },
      { label: 'Total actually borrowed', sublabel: '£49k + £11k', value: 60, color: '#1a6b42', fmt: '£60,000' },
      { label: 'Current balance', sublabel: 'What she owes today', value: 67, color: '#b5302a', fmt: '~£67,000' },
    ],
    whisperChain: null,
    whisperNote: null,
    correction: null,
    questions: [
      'You state your debt is 37% higher than what you borrowed. But you borrowed £49k plus £11k for a master\'s, totalling £60k. A balance of £67k on £60k borrowed is 11.6% higher, not 37%. Which figure did you intend as the base?',
      'As a senior data journalist, the distinction between 37% and 11.6% is significant. One suggests the system nearly doubled your increase. The other shows a modest rise after interest. Will you correct the video?',
      'This video was published on The Times\' Instagram. Prospective students watching a Times-branded video will treat 37% as authoritative. Does The Times stand by this figure?',
    ],
    multiplier: '3.2\u00d7',
    multiplierLabel: 'increase overstated',
    subject: 'Student loans',
    rebuttalStatus: {
      invited: 'Matilda Davies (LinkedIn, 10 Feb 2026) and The Times (Instagram DM, 10 Feb 2026)',
      dateInvited: 'Feb 2026',
      status: 'no-response',
    },
  },
];
