import { PARTY_COLORS } from '@/lib/constants';

interface PartyPillProps {
  party: string;
}

export default function PartyPill({ party }: PartyPillProps) {
  const colors = PARTY_COLORS[party] || { bg: '#8b8e9914', text: '#525560', border: '#8b8e9922' };

  return (
    <span
      style={{
        fontFamily: 'var(--font-sans), sans-serif',
        fontSize: 9,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: colors.text,
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        borderRadius: 4,
        padding: '3px 8px',
        whiteSpace: 'nowrap',
      }}
    >
      {party}
    </span>
  );
}
