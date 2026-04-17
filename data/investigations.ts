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
  sourceUrl: string | null;
  rebuttalStatus: {
    invited: string;
    dateInvited?: string;
    status: 'invited' | 'no-response' | 'responded' | 'declined';
    responseText?: string;
    responseDate?: string;
  } | null;
  /** Optional overrides for the status badge (label shown, tooltip copy). */
  statusOverride?: {
    label?: string;
    tooltip?: string;
  };
  /** Optional framing line shown under the claim headline (e.g. "current campaign"). */
  campaignFraming?: string;
  /** Optional editorial note rendered as a callout on the page. */
  editorialNote?: {
    label: string;
    text: string;
    variant?: 'correction' | 'disclaimer';
  };
}

export const investigations: Investigation[] = [
  {
    id: 1,
    slug: 'railtrack-500m',
    who: 'Clive Lewis, Labour MP',
    party: 'Labour',
    date: 'Dec 2024',
    claim: 'Labour nationalised Railtrack, paying just £500 million for the entire UK rail network',
    saidQuote: 'Labour nationalised Railtrack, paying just £500 million for the entire UK rail network',
    said: 'Railtrack was nationalised for £500m, and this is being used as a precedent to argue that nationalising water companies won\'t cost much',
    source: 'Shareholder payout: £500m. Debt taken on by government: £7.1bn. Total cost to taxpayer: £7.6bn. They said: £500m. Actual cost: 15x higher. £500m was equity only. __They ignored the debt.__',
    sourceImage: null,
    sourceOneLiner: '',
    impact: 'The \u00a3500m claim is being used right now to argue water nationalisation would be cheap. If the real cost is 15x higher, the public is being misled on what nationalisation would actually cost them. Policy built on the wrong number risks billions of pounds of public money.',
    analogy: 'Think of it like buying a house for £100k. It also has a £400k mortgage. The £100k is the equity the seller had. You\'ve just taken on all the debt too. The real price is £500k.',
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
      'If the true cost was £7.6bn, using this approach for the whole water industry, what is the likely cost for the UK taxpayer to nationalise water companies?',
      'To put clarity on the abstract term \'shareholders\', how much of the debt and equity of the UK water industry is owned by UK pensioners / pension funds?',
    ],
    multiplier: '15×',
    multiplierLabel: 'cost understated',
    subject: 'Nationalisation',
    sourceUrl: 'https://www.clivelewis.org/uncategorised/news-and-updates/2024/12/26/analysis-is-the-supposed-90bn-cost-of-compensation-really-a-barrier-to-restoring-water-companies-to-public-ownership/',
    rebuttalStatus: { invited: 'Clive Lewis, Labour MP', dateInvited: 'Jan 2026', status: 'no-response' },
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
    source: 'They said billionaire numbers increased since 2022. Their own source shows 177 in 2022, down to 156 in 2025. That is a decrease, not an increase. __Their cited source contradicts the claim.__',
    sourceImage: null,
    sourceOneLiner: 'Their source shows 177 → 156. That\'s a decrease.',
    impact: 'Their source: 177 down to 156. They said it was rising. Their own cited report contradicts the claim.',
    analogy: 'A weather report says the temperature is decreasing each year by 1%. You tell everyone it is increasing each year. Your own source says the opposite.',
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
    sourceUrl: 'https://greenparty.org.uk/app/uploads/2025/11/Green-Party-letter-to-Rachel-Reeves_Budget-2025.pdf',
    rebuttalStatus: { invited: 'Green Party leadership', dateInvited: 'Dec 2025', status: 'no-response' },
    statusOverride: {
      tooltip: 'Green Party apologised and issued a correction. Note: the original letter still sits on the Green Party website without amendment.',
    },
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
    source: 'UK CGT: 18% basic, 24% higher. US long-term rate starts at 0%, rising to 20%. __UK is not the lowest in the G7.__',
    sourceImage: null,
    sourceOneLiner: '',
    impact: 'Using a statement that UK CGT is the lowest in the G7 as a way to argue for higher rates means decision-making is being driven by false information.',
    analogy: 'You\'re on the motorway overtaking someone. You tell your passenger your car is the slowest one here. They can see it isn\'t.',
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
    sourceUrl: null,
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
    source: 'HMRC tax evasion figure: £5.5bn. Tax avoidance: £1.8bn. Total tax gap: £7.3bn. The £350bn covers all economic crime. Not the same as tax evasion. __The label shrank. The number stayed.__',
    sourceImage: null,
    sourceOneLiner: 'HMRC official figure: £5.5bn. Not £350bn.',
    impact: 'The \u00a3350bn figure is being used to justify enforcement spending 48 times larger than the actual problem. If HMRC says the real number is \u00a35.5bn, any policy built on \u00a3350bn is budgeting for a different universe. Taxpayers pay for the gap.',
    analogy: 'Someone asks how much we spend on plasters. You quote the entire NHS budget. The label changed but the number didn\'t.',
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
    sourceUrl: null,
    rebuttalStatus: { invited: 'Multiple sources', dateInvited: 'Jan 2026', status: 'invited' },
  },
  {
    id: 5,
    slug: 'student-debt-claim',
    who: 'Nadia Whittome, Labour MP',
    party: 'Labour',
    date: '2025',
    claim: 'I left university in 2019 with £49,600 of debt',
    saidQuote: 'I left university in 2019 with £49,600 of debt. 6 years on, the repayments from my salary have brought this total down to £48,600. Just £1,000 less.',
    said: 'Used to argue for tuition fee reduction, citing personal financial burden from student debt',
    source: 'Two years of study. Living at home. Tuition loan: ~£18,500. Maintenance loan: ~£15,000. Interest: ~£2,500. Max possible: ~£36,000. The MP claimed: £49,600. Gap: ~£13,600 above maximum.',
    sourceImage: null,
    sourceOneLiner: 'Max possible debt for 2 years at Nottingham: ~£36,000. Claimed: £49,600.',
    sourceLabel: 'What the maths actually shows',
    impact: 'This figure is being used to argue for tuition fee reform. If the claimed debt is \u00a313,600 higher than what is actually possible for the study period, the personal story driving the policy case does not stand up to basic checks.',
    analogy: 'You bought £100 worth of shopping. You claim the bill was £150. The receipt says otherwise. The numbers don\'t support the story.',
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
    sourceUrl: null,
    rebuttalStatus: { invited: 'Nadia Whittome, Labour MP', dateInvited: 'Jan 2026', status: 'no-response' },
  },
  {
    id: 6,
    slug: 'reform-tax-canary',
    who: 'The Canary UK',
    party: 'Cross-party',
    date: 'Feb 2026',
    claim: 'Reform\'s tax cuts help the richest people more than the poorest',
    saidQuote: '£30,000 earner saves £1,500. £60,000 earner saves £3,000. The more you earn, the more you get from Reform.',
    said: 'Published as analysis of Reform\'s proposed tax changes, arguing higher earners benefit more',
    source: 'Personal allowance rises: £12,570 to £20,000.\nExtra £7,430 is taxed at 20%, not 40%.\nSaving: £7,430 x 20% = £1,486. Same for everyone above £20K.\nThe 40% band starts at £50,271 and is completely untouched.\nHe said £1,500. It is £1,486.\nHe said £3,000. It is £1,486.\nSame amount. Same saving.',
    sourceImage: null,
    sourceOneLiner: '£30K earner saves £1,486. £60K earner saves £1,486. The same amount.',
    sourceLabel: 'What the maths actually shows',
    impact: 'The claim that this policy helps the rich more is being used to argue against it. If both earners save the same amount, the criticism is built on false information. People deserve accurate information to form their own view on tax policy.',
    analogy: 'A 10% off voucher at Tesco only applies to the first £20 of your shop. Whether you spend £30 or £60, you save the same £2. The discount stops at £20. The rest of your bill is untouched. Rich shoppers don\'t benefit more.',
    barData: [
      { label: '£15K earner', sublabel: 'He said: £500', value: 486, color: '#1b2a4a', fmt: '£486' },
      { label: '£30K earner', sublabel: 'He said: £1,500', value: 1486, color: '#1a6b42', fmt: '£1,486' },
      { label: '£60K earner', sublabel: 'He said: £3,000', value: 1486, color: '#1a6b42', fmt: '£1,486' },
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
    sourceUrl: 'https://www.instagram.com/p/DVN7bPzDDKl/',
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
    source: 'Total borrowed: ~£79,000. Tuition, maintenance, and hardship. Will repay: ~£50,000. Difference: £29,000 less than borrowed. She pays back less, not more. The rest is written off after 30 years.',
    sourceImage: null,
    sourceOneLiner: 'Borrowed ~£79,000. Will repay ~£50,000. That\'s £29,000 less, not more.',
    sourceLabel: 'What the maths actually shows',
    impact: 'Borrowed: ~\u00a379,000. Will repay: ~\u00a350,000. That is \u00a329,000 less than she borrowed. Policy claims graduates overpay. This shows the opposite. Wrong numbers risk targeting the wrong people. We take no position on the policy. We are pointing out the input is wrong.',
    analogy: 'You borrow £800 for a phone. You\'ll actually pay back £500 over the contract. The other £300 gets written off. That\'s £300 **less** than the phone cost you. But you go around telling everyone you owe nearly\u00A0£1,000, and will repay **more** than the\u00A0£800 you borrowed.',
    barData: [
      { label: 'Total borrowed', sublabel: 'Tuition + maintenance + hardship + interest', value: 97, color: '#1b2a4a', fmt: '~£97,000 (current balance)' },
      { label: 'Core borrowing', sublabel: 'Tuition + maintenance + hardship (pre-interest)', value: 79, color: '#2358a3', fmt: '~£79,000' },
      { label: 'Will actually repay', sublabel: 'Her own estimate by age 50', value: 50, color: '#1a6b42', fmt: '~£50,000' },
      { label: 'Written off', sublabel: 'Cancelled after 30 years', value: 29, color: '#c48a0a', fmt: '~£29,000' },
    ],
    whisperChain: null,
    whisperNote: null,
    correction: 'Sarah added a caption disclaimer referring to "core borrowing for my degree." This phrase is a little opaque. In practice it means tuition fees only, with maintenance loans stripped out. Most people would include maintenance when quoting their student debt. The comparison in the video measures tuition-only borrowing against a current balance that includes both maintenance and interest. That makes the gap look much larger than it is. The disclaimer acknowledges interest accrual but doesn\'t address the missing maintenance borrowing.',
    questions: [
      'You state you\'ll pay back \'more than you originally took out\'. Your total borrowing was ~£79,000 (tuition, maintenance, hardship). Repaying ~£50,000 is £29,000 less. Can you clarify?',
      'The £97,000 balance includes interest accrued since 2016. Presenting this as \'debt\' without separating borrowing from interest creates a misleading picture of the system. Will you update the video itself?',
      'Two prospective students contacted us after seeing your video, worried they\'d \'end up like you\'. As a verified finance influencer, do you accept the video needs more than a caption disclaimer?',
    ],
    multiplier: '£29k',
    multiplierLabel: 'less than borrowed',
    subject: 'Student loans',
    sourceUrl: 'https://www.instagram.com/p/DT3YXbqjA2v/',
    rebuttalStatus: {
      invited: '@yourmoneymatesarah',
      dateInvited: 'Jan 2026',
      status: 'responded',
      responseText: 'Sarah described it as a \'language issue\' and added a caption disclaimer. The video itself remains unchanged.',
      responseDate: 'Feb 2026',
    },
    statusOverride: {
      label: 'Partially corrected',
      tooltip: 'Recognised a disclaimer was needed, but did not change the narrative of the post.',
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
    source: 'Undergrad loan: £49,000. Master\'s loan: £11,000. Total borrowed: £60,000. Current balance: £67,000. Actual increase: 11.6%. They said: 37%. The 37% excludes the master\'s loan she mentioned.',
    sourceImage: null,
    sourceOneLiner: 'She borrowed £49k + £11k = £60k total. Balance is £67k. That\'s 11.6% higher, not 37%.',
    sourceLabel: 'What the maths actually shows',
    impact: 'A Times-branded video reaching prospective students claims a 37% debt increase. The actual figure is 11.6%. Students watching this may make life decisions based on a number that is 3.2 times too high.',
    analogy: 'Buy a car for £20,000. Add £5,000 of upgrades. Total spent: £25,000. With interest, the bill is £27,000. Compare that to just the base car and it looks like a 35% increase. Compare it to what you actually spent and it\'s 8%. You just forgot to include the extras.',
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
    sourceUrl: null,
    rebuttalStatus: {
      invited: 'Matilda Davies (LinkedIn, 10 Feb 2026) and The Times (Instagram DM, 10 Feb 2026)',
      dateInvited: 'Feb 2026',
      status: 'no-response',
    },
  },
  {
    id: 9,
    slug: 'reform-prolific-offenders',
    who: 'Reform UK',
    party: 'Reform',
    date: 'Jul 2025',
    claim: 'Britain IS lawless: "10% of criminals commit 50% of all the crime"',
    saidQuote: '10% of criminals commit 50% of all the crime',
    said: 'Used in the "Britain Is Lawless" policy document under the Justice heading to justify harsher sentencing for repeat offenders',
    source: 'Their source covers 2000 to 2016 only. The actual figure: 9% of offenders received 52% of convictions, not "all the crime." By 2016, the figure had already fallen to 43%. The report is classed as "experimental statistics" by the MoJ. __The MoJ publishes quarterly reoffending data. The latest covers up to 2024. It was chosen not to be used.__',
    sourceImage: null,
    sourceOneLiner: '',
    impact: 'Policy should be built on current evidence, not data from two decades ago. Within the source itself, the trend was declining. The MoJ publishes up-to-date reoffending data quarterly, and it is publicly available. If the current numbers tell a different story, the policy response could be targeting the wrong problem. We\'re not questioning the policy. We\'re questioning the evidence behind it.',
    analogy: 'Your insurance company tells you your street is dangerous. Their evidence? A burglary reported in 2005. Crime stats are updated quarterly. They ignored all of them. They\'re pricing your premium on data from 2000-2016.',
    barData: [
      { label: 'What they said', sublabel: '"50% of all crime"', value: 50, color: '#b5302a', fmt: '50%' },
      { label: 'What the source actually says', sublabel: '52% of convictions, 2000-2016', value: 52, color: '#1b2a4a', fmt: '52%' },
      { label: 'By 2016', sublabel: 'Already falling', value: 43, color: '#1a6b42', fmt: '43%' },
    ],
    whisperChain: null,
    whisperNote: null,
    sourceLabel: 'What the numbers actually show',
    correction: 'Policy withdrawn from Reform website mid April 2026.',
    questions: [
      'Why was data from 2000-2016 used when the MoJ publishes quarterly reoffending statistics up to 2024?',
      'The source shows the 50% figure was declining by 2016. What is the current figure?',
      'The source is classed as "experimental statistics." Is there established data that supports the same claim today?',
    ],
    multiplier: '\u23F3',
    multiplierLabel: 'data 10-26 years old',
    subject: 'Criminal justice',
    sourceUrl: null,
    rebuttalStatus: { invited: 'Reform UK', dateInvited: 'Jul 2025', status: 'no-response' },
    campaignFraming: 'This is from Reform UK\u2019s current \u201CBritain is Lawless\u201D campaign (policy document dated 21 July 2025).',
    statusOverride: {
      label: 'Policy withdrawn',
      tooltip: 'Policy withdrawn from Reform website mid April 2026.',
    },
  },
  {
    id: 10,
    slug: 'reform-stop-search',
    who: 'Reform UK',
    party: 'Reform',
    date: 'Jul 2025',
    claim: 'Saturation stop and search affecting up to 1 in 5 people in high crime areas',
    saidQuote: 'We will take back control of the street with saturation stop and search affecting up to 1 in 5 people in high crime areas',
    said: 'Used as the first policy action under "Get Offenders off the Street" in the "Britain Is Lawless" document',
    source: 'The link goes to an opinion article from June 2017. Not police data. Not an official study. Not academic research. Just this one article. The data in the article covers 2005 to 2016. __The source for the first policy action in "Get Offenders off the Street" is a blog post.__',
    sourceImage: null,
    sourceOneLiner: '',
    impact: 'Stop and search is one of the most sensitive policing powers in the UK, and a policy on it should cite the strongest possible evidence. Official Home Office stop and search data is published every year and is publicly available. Using an opinion article as the source raises questions about the quality of the evidence base. We\'re not questioning the policy. We\'re questioning why official data wasn\'t used.',
    analogy: 'You\'re applying for a senior job. Instead of qualifications, you attach a friend\'s LinkedIn post from 2017. That\'s the level of source behind the first bullet of a national policing policy.',
    barData: [],
    whisperChain: null,
    whisperNote: null,
    sourceLabel: 'What their own source shows',
    correction: null,
    questions: [
      'Why was an opinion article from 2017 used instead of official Home Office stop and search data?',
      'The Home Office publishes annual stop and search statistics. Do those statistics support the "1 in 5" approach?',
      'What is the evidence base for "saturation stop and search" as a policy if the cited source is political commentary, not data?',
    ],
    multiplier: '\u26A0\uFE0F',
    multiplierLabel: 'source: blog post',
    subject: 'Criminal justice',
    sourceUrl: 'https://www.reformparty.uk/view-pdf/britain-is-lawless',
    rebuttalStatus: { invited: 'Reform UK', dateInvited: 'Jul 2025', status: 'no-response' },
    campaignFraming: 'This is from Reform UK\u2019s current \u201CBritain is Lawless\u201D campaign (policy document dated 21 July 2025).',
  },
  {
    id: 11,
    slug: 'reform-234bn-immigration',
    who: 'Reform UK',
    party: 'Reform',
    date: 'Apr 2026',
    claim: 'Costing the UK taxpayer a minimum of \u00a3234 billion',
    saidQuote: '800,000 of these migrants are expected to receive Indefinite Leave to Remain (ILR), giving them access to benefits, ultimately costing the UK taxpayer a minimum of \u00a3234 billion',
    said: 'Used on Reform UK immigration policy page to justify abolishing Indefinite Leave to Remain',
    source: 'The \u00a3234bn figure comes from a Centre for Policy Studies (CPS) report. The CPS withdrew the report and said the cost estimates "should no longer be used." The OBR\'s own analysis points the other way: higher migration reduces government borrowing by \u00a313-20bn over five years. Reform is using a number its own source has publicly pulled, and ignoring the OBR figure that replaced it. __The source says don\'t use this number. Reform continues to use it.__',
    sourceImage: null,
    sourceOneLiner: '',
    impact: 'This figure is being used to justify abolishing Indefinite Leave to Remain. The source has formally withdrawn it. The OBR\'s independent analysis points in the opposite direction. Voters deserve accurate numbers to form their own view.',
    analogy: 'Your surveyor calls to say their valuation was wrong. A second surveyor gives you a completely different number. You ignore both and keep quoting the original.',
    barData: [],
    whisperChain: null,
    whisperNote: null,
    sourceLabel: 'What the numbers actually show',
    correction: null,
    questions: [
      'The CPS has withdrawn the \u00a3234bn figure and said it should no longer be used. Why is it still on your website?',
      'The OBR\'s analysis suggests higher migration reduces government borrowing. Has this been considered?',
      'The CPS told Full Fact that benefits would be "only a fraction" of the \u00a3234bn. Why is the figure presented as a benefits cost?',
    ],
    multiplier: '\u26A0\uFE0F',
    multiplierLabel: 'source pulled',
    subject: 'Immigration',
    sourceUrl: 'https://reformuk.scot/policies/',
    rebuttalStatus: { invited: 'Reform UK', dateInvited: 'Jul 2025', status: 'no-response' },
    editorialNote: {
      label: 'Editor\u2019s note \u2014 source withdrawn',
      text: 'The Centre for Policy Studies, whose research Reform cited to arrive at the \u00a3234bn figure, has since withdrawn that figure after the Office for Budget Responsibility revised relevant fiscal data. Reform continues to use the number in current campaign materials. Source: https://cps.org.uk/media/post/2025/recent-migration-wave-may-cost-country-billions-warns-cps/',
      variant: 'disclaimer',
    },
  },
];
