import { COLORS } from '@/lib/constants';

export default function SourceArrow() {
  return (
    <span
      aria-hidden="true"
      className="source-arrow"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        color: COLORS.claimRed,
        lineHeight: 1,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M3 1.5l5 4.5-5 4.5V1.5z" fill="currentColor" />
      </svg>
    </span>
  );
}
