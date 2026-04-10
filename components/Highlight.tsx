import { COLORS } from '@/lib/constants';

interface HighlightProps {
  children: React.ReactNode;
}

export default function Highlight({ children }: HighlightProps) {
  return (
    <span
      style={{
        background: `linear-gradient(transparent 55%, rgba(27,42,74,0.08) 55%)`,
        fontWeight: 600,
        color: COLORS.ink,
      }}
    >
      {children}
    </span>
  );
}
