import Highlight from './Highlight';

interface HighlightedTextProps {
  text: string;
  phrases: string[];
}

export default function HighlightedText({ text, phrases }: HighlightedTextProps) {
  if (!phrases.length) return <>{text}</>;

  // Sort phrases by length descending so longer matches take priority
  const sorted = [...phrases].sort((a, b) => b.length - a.length);
  // Escape regex special chars
  const escaped = sorted.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g');

  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        phrases.includes(part) ? (
          <Highlight key={i}>{part}</Highlight>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
