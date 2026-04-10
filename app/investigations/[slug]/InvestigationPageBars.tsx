'use client';

import { useRef, useEffect, useState } from 'react';
import AnimatedBar from '@/components/AnimatedBar';

interface BarDatum {
  label: string;
  sublabel: string;
  value: number;
  color: string;
  fmt: string;
}

export default function InvestigationPageBars({ data }: { data: BarDatum[] }) {
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
      <AnimatedBar data={data} expanded={visible} />
    </div>
  );
}
