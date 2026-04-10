import { COLORS } from '@/lib/constants';

interface RebuttalBoxProps {
  invited: string;
  dateInvited?: string;
  status: 'invited' | 'no-response' | 'responded';
  responseText?: string;
}

export default function RebuttalBox({ invited, dateInvited, status, responseText }: RebuttalBoxProps) {
  return (
    <div
      style={{
        border: `1px solid rgba(27,42,74,0.12)`,
        borderRadius: 12,
        padding: '20px 24px',
        background: '#fff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <span style={{ fontSize: 16 }}>&#x1F4E9;</span>
        <span
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: COLORS.navy,
          }}
        >
          Open invitation
        </span>
      </div>
      <p
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 14,
          lineHeight: 1.6,
          color: COLORS.muted,
          margin: '0 0 10px',
        }}
      >
        We&apos;ve invited {invited} to provide a factual rebuttal to the figures presented here.
        No mention of policy required, just the numbers.
      </p>
      {status === 'responded' && responseText ? (
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 13,
            fontWeight: 600,
            color: COLORS.sourceGreen,
            margin: 0,
          }}
        >
          {invited} responded. {responseText}
        </p>
      ) : (
        <p
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            fontSize: 13,
            color: COLORS.lightMuted,
            margin: 0,
          }}
        >
          Status: {status === 'no-response' ? 'No response received' : 'Invitation sent'}
          {dateInvited ? ` (${dateInvited})` : ''}
        </p>
      )}
    </div>
  );
}
