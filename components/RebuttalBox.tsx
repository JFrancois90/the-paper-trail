import { COLORS } from '@/lib/constants';

const B = 'var(--font-sans), sans-serif';

interface RebuttalBoxProps {
  invited: string;
  dateInvited?: string;
  status: 'invited' | 'no-response' | 'responded' | 'declined';
  responseText?: string;
}

export default function RebuttalBox({ invited, dateInvited, status, responseText }: RebuttalBoxProps) {
  return (
    <div
      style={{
        border: `1px solid rgba(27,42,74,0.12)`,
        borderRadius: 12,
        padding: '24px 28px',
        background: '#fff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 16 }}>&#x1F4E9;</span>
        <span
          style={{
            fontFamily: B,
            fontSize: 14,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: COLORS.navy,
          }}
        >
          Open invitation
        </span>
      </div>
      <ul
        style={{
          margin: '0 0 12px',
          padding: '0 0 0 20px',
          listStyleType: 'disc',
        }}
      >
        <li
          style={{
            fontFamily: B,
            fontSize: 16,
            lineHeight: 1.6,
            color: COLORS.muted,
            marginBottom: 4,
          }}
        >
          We&apos;ve invited <strong style={{ color: COLORS.navy }}>{invited}</strong> to provide a factual rebuttal to the figures presented here.
        </li>
        <li
          style={{
            fontFamily: B,
            fontSize: 16,
            lineHeight: 1.6,
            color: COLORS.muted,
          }}
        >
          No mention of policy required, just the numbers.
        </li>
      </ul>
      {status === 'responded' && responseText ? (
        <p
          style={{
            fontFamily: B,
            fontSize: 15,
            fontWeight: 600,
            color: COLORS.sourceGreen,
            margin: 0,
          }}
        >
          &#10003; {invited} responded. {responseText}
        </p>
      ) : (
        <p
          style={{
            fontFamily: B,
            fontSize: 14,
            fontWeight: 600,
            color: status === 'no-response' ? COLORS.claimRed : COLORS.lightMuted,
            margin: 0,
          }}
        >
          {status === 'no-response' ? 'No response received' : '\u2709 Invitation sent'}
          {dateInvited ? ` (${dateInvited})` : ''}
        </p>
      )}
    </div>
  );
}
