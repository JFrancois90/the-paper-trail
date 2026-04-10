interface HighlightProps {
  children: React.ReactNode;
}

export default function Highlight({ children }: HighlightProps) {
  return (
    <span
      style={{
        background: 'rgba(253, 243, 222, 0.8)',
        fontWeight: 600,
        borderRadius: 2,
        padding: '1px 2px',
      }}
    >
      {children}
    </span>
  );
}
