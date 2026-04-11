import { COLORS } from '@/lib/constants';
import type { ChainStep, ChainNode } from '@/components/ChainStepThrough';

export const railtrackChain = {
  title: "How £500m became 'established fact' in 7 months",
  subtitle: "Railtrack nationalisation cost. From one MP's blog to live TV.",
  endNote: "A claim by an MP became an 'established fact' used on live television to argue for cheap nationalisation. The £7.1bn debt was never mentioned. Not once.",
  steps: [
    { title: 'The origin claim', who: 'Clive Lewis MP', label: 'Origin', date: 'Dec 2024', detail: '£500m was the shareholder payout only. The £7.1bn debt absorbed by government was not mentioned. The court\'s rejection of the misfeasance claim was not mentioned.' },
    { title: 'The report picks it up', who: 'We Own It + Univ. Greenwich', label: '£7.1bn debt omitted', date: 'Apr 2025', detail: 'The claim was cited in a report co-authored with Prof. David Hall, April 2025. The £7.1bn debt was omitted. The court ruling was not mentioned.' },
    { title: 'A think tank repeats it', who: 'Common Wealth', label: 'Still no debt mentioned', date: 'Jun 2025', detail: 'Same equity-only framing repeated by Ewan McGaughey, June 2025. Still no mention of the debt.' },
    { title: 'Media amplifies it', who: 'Left Foot Forward', label: 'Debt still missing', date: 'Apr 2025', detail: 'Left Foot Forward cited the earlier sources, April 2025. The £500m figure now treated as the total cost. No debt. No court ruling.' },
    { title: 'Used on live TV to justify policy', who: 'Zack Polanski, BBC', label: '"Established fact" on live TV', date: 'Nov 2025', detail: 'Green Party\'s Zack Polanski used the same equity-only argument on BBC Politics North, November 2025, to argue water nationalisation would be cheap. The wrong number isn\'t historical. It\'s actively informing live policy debate.' },
  ] as ChainStep[],
  nodes: [
    { label: 'Clive Lewis MP', sub: '£500m claim', color: COLORS.chainBlue },
    { label: 'We Own It', sub: 'Debt omitted', color: COLORS.navy },
    { label: 'Common Wealth', sub: 'Still no debt', color: COLORS.navy },
    { label: 'Left Foot Forward', sub: 'Debt missing', color: COLORS.claimRed },
    { label: 'BBC Politics North', sub: 'Used as fact on TV', color: COLORS.claimRed },
  ] as ChainNode[],
  disappeared: [
    'The £7.1bn debt absorbed by Network Rail',
    'The court\'s rejection of the misfeasance claim',
    'The distinction between shareholder payout and total cost to taxpayer',
  ],
};

export const immigrationChain = {
  title: "How a withdrawn number ended up on a party's website",
  subtitle: 'The £234bn immigration cost claim. From think tank report to national policy.',
  endNote: "A think tank published a number. The think tank withdrew it. A political party adopted it after the withdrawal. It's still on their website. The independent fiscal watchdog says the opposite.",
  steps: [
    { title: 'The original number', who: 'Centre for Policy Studies', label: 'The original number', date: 'Sep 2025', detail: 'CPS publishes "Here to Stay?" report, 8 September 2025. Central estimate: 801,000 migrants gaining ILR would have a lifetime net fiscal cost of £234bn.' },
    { title: 'The data gets revised', who: 'OBR', label: 'Data invalidated', date: 'Sep 2025', detail: 'The OBR revised the definitions of the fiscal data that the CPS report was built on. The foundations of the £234bn estimate were knocked out.' },
    { title: 'The source withdraws it', who: 'CPS', label: "Source says: don't use this number", date: 'Sep 2025', detail: 'CPS adds a disclaimer to its own report: "the overall cost estimates should no longer be used." The £234bn is formally dead. The CPS itself killed it.' },
    { title: 'Reform adopts it anyway', who: 'Reform UK', label: 'Used after withdrawal', date: 'Sep 2025', detail: 'Nigel Farage and Zia Yusuf announce the ILR abolition policy at a press conference, citing the £234bn figure. The CPS had already withdrawn it.' },
    { title: 'Still live today', who: 'Reform UK website', label: 'Still in use. OBR says the opposite.', date: 'Apr 2026', detail: "The £234bn figure remains on Reform's immigration policy page. The OBR's March 2024 analysis shows higher migration reduces borrowing by £13-20bn over five years." },
  ] as ChainStep[],
  nodes: [
    { label: 'CPS', sub: '£234bn report', color: COLORS.sourceGreen },
    { label: 'OBR', sub: 'Data revised', color: COLORS.navy },
    { label: 'CPS', sub: 'Withdraws figure', color: COLORS.claimRed },
    { label: 'Reform UK', sub: 'Uses it anyway', color: COLORS.claimRed },
    { label: 'Still live', sub: 'OBR says opposite', color: COLORS.claimRed },
  ] as ChainNode[],
  disappeared: [
    'The CPS withdrawal and disclaimer',
    "The OBR's contradicting analysis",
    'The fact that £234bn was a lifetime fiscal cost, not a benefits bill',
  ],
};

export const hmrcChain = {
  title: 'How £5.5bn became £350bn',
  subtitle: 'Tax evasion figures. From HMRC data to political talking point.',
  endNote: 'The label shrank 48 times. The number stayed. Policy is being built on a figure that bears no resemblance to the original data.',
  steps: [
    { title: 'The official number', who: 'HMRC', date: '2024', detail: 'HMRC publishes its annual tax gap. Tax evasion: £5.5bn. Tax avoidance: £1.8bn. Total: £7.3bn.' },
    { title: 'The NCA broadens the scope', who: 'National Crime Agency', date: '2024', detail: 'NCA estimates over £100bn laundered through the UK. This covers drugs, fraud, trafficking, criminal funds. This is not tax evasion. It is all economic crime.' },
    { title: 'The APPG inflates further', who: 'All-Party Parliamentary Group', date: '2025', detail: 'NCA said £100bn. APPG said £290bn. Then offered £350bn as an upper end. APPG claimed £350bn equals the health and education budget. Actual figure: £423bn.' },
    { title: 'The CIOT gives it authority', who: 'Chartered Institute of Taxation', date: '2025', detail: 'CIOT quoted the APPG\'s £350bn figure. Still called "economic crime and financial opacity." But now has the authority of a chartered tax body behind it.' },
    { title: 'The final form', who: 'Public debate', date: '2025', detail: '"Economic crime" became "tax evasion." The number stayed at £350bn. The definition shrank 48 times. HMRC official: £5.5bn. Claimed: £350bn.' },
    { title: 'Why this matters', who: '', detail: 'Any enforcement policy built on this number is budgeting for a problem 48 times larger than it is. That is not a rounding error. That is a completely different conversation.' },
  ] as ChainStep[],
  nodes: [
    { label: 'HMRC', sub: '£5.5bn', color: COLORS.sourceGreen },
    { label: 'NCA', sub: '£100bn', color: COLORS.navy },
    { label: 'APPG', sub: '£350bn', color: COLORS.claimRed },
    { label: 'CIOT', sub: '£350bn', color: COLORS.claimRed },
    { label: 'Public debate', sub: '£350bn "tax evasion"', color: COLORS.claimRed },
    { label: 'Reality check', sub: '£5.5bn vs £350bn', color: COLORS.navy },
  ] as ChainNode[],
};
