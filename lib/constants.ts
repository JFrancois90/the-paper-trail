export const COLORS = {
  // Primary
  navy: '#1b2a4a',
  navyMid: '#2d4470',
  navyLight: '#d6dce8',
  paper: '#f0efe8',

  // Semantic (the core tension)
  claimRed: '#b5302a',
  claimRedLight: '#fce8e6',
  claimRedDark: '#6b1c18',
  sourceGreen: '#1a6b42',
  sourceGreenLight: '#e0f2e9',
  sourceGreenDark: '#0e3d25',

  // Supporting
  amber: '#c48a0a',
  amberLight: '#fdf0d0',
  amberDark: '#5c4006',
  chainBlue: '#2358a3',
  chainBlueLight: '#dce8f7',
  chainBlueDark: '#14345f',

  // Ink scale
  ink: '#0f1117',
  muted: '#4a4d56',
  lightMuted: '#6b6e77',

  // Legacy aliases (used in existing components)
  ink80: '#2a2d36',
  ink60: '#5a5d66',
  ink40: '#8b8e99',
  ink20: '#c4c6cc',
} as const;

export const TOPIC_COLORS: Record<string, { bg: string; text: string }> = {
  Nationalisation: { bg: '#1B2A4A', text: '#fff' },
  Taxation: { bg: '#1A5632', text: '#fff' },
  'Wealth inequality': { bg: '#8B6914', text: '#fff' },
  'Student loans': { bg: '#8B1A1A', text: '#fff' },
  'Criminal justice': { bg: '#4A1B6B', text: '#fff' },
  'Immigration': { bg: '#1B4A3A', text: '#fff' },
  'NHS / Health': { bg: '#1B4A6B', text: '#fff' },
};

export const PARTY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Labour: { bg: '#d32f2f14', text: '#b71c1c', border: '#d32f2f22' },
  Conservative: { bg: '#1565c014', text: '#0d47a1', border: '#1565c022' },
  Green: { bg: '#2e7d3214', text: '#1b5e20', border: '#2e7d3222' },
  Reform: { bg: '#00acc114', text: '#006064', border: '#00acc122' },
  'Lib Dem': { bg: '#f9a82514', text: '#8a5a00', border: '#f9a82522' },
  'Cross-party': { bg: '#5c6bc014', text: '#283593', border: '#5c6bc022' },
  Media: { bg: '#6b6b6b14', text: '#4a4a4a', border: '#6b6b6b22' },
  Influencer: { bg: '#8b5cf614', text: '#6d28d9', border: '#8b5cf622' },
};
