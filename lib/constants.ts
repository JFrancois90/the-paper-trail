export const COLORS = {
  // Primary
  navy: '#1b2a4a',
  navyMid: '#2d4470',
  navyLight: '#e8ecf3',
  paper: '#f5f4f0',

  // Semantic (the core tension)
  claimRed: '#b5302a',
  claimRedLight: '#fceae9',
  claimRedDark: '#6b1c18',
  sourceGreen: '#1a6b42',
  sourceGreenLight: '#e6f5ed',
  sourceGreenDark: '#0e3d25',

  // Supporting
  amber: '#9b6c0a',
  amberLight: '#fdf3de',
  amberDark: '#5c4006',
  chainBlue: '#2358a3',
  chainBlueLight: '#e9f0fa',
  chainBlueDark: '#14345f',

  // Ink scale
  ink: '#0f1117',
  ink80: '#2a2d36',
  ink60: '#525560',
  ink40: '#8b8e99',
  ink20: '#c4c6cc',
} as const;

export const PARTY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Labour: { bg: '#d32f2f14', text: '#b71c1c', border: '#d32f2f22' },
  Green: { bg: '#2e7d3214', text: '#1b5e20', border: '#2e7d3222' },
  'Cross-party': { bg: '#5c6bc014', text: '#283593', border: '#5c6bc022' },
  Conservative: { bg: '#1565c014', text: '#0d47a1', border: '#1565c022' },
  Reform: { bg: '#00acc114', text: '#006064', border: '#00acc122' },
  'Lib Dem': { bg: '#f9a82514', text: '#8a5a00', border: '#f9a82522' },
};
