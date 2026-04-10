interface HighlightProps {
  children: React.ReactNode;
}

export default function Highlight({ children }: HighlightProps) {
  return (
    <span
      style={{
        background: 'linear-gradient(to bottom, transparent 60%, rgba(250,199,117,0.45) 60%)',
        fontWeight: 600,
        padding: '0 2px',
      }}
    >
      {children}
    </span>
  );
}
