interface HighlightProps {
  children: React.ReactNode;
}

export default function Highlight({ children }: HighlightProps) {
  return (
    <span
      style={{
        background: 'linear-gradient(to bottom, transparent 65%, rgba(196,138,10,0.35) 65%)',
        fontWeight: 600,
        padding: '0 3px',
        borderRadius: 2,
      }}
    >
      {children}
    </span>
  );
}
