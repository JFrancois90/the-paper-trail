'use client';

import { useRef, useEffect, useState } from 'react';
import WhisperChain from '@/components/WhisperChain';

interface ChainNode {
  name: string;
  date: string;
  type: 'origin' | 'mid' | 'final';
}

export default function InvestigationPageChain({
  chain,
  note,
}: {
  chain: ChainNode[];
  note: string | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <WhisperChain chain={chain} note={note} expanded={visible} />
    </div>
  );
}
