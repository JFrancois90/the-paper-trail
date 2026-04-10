'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';

type AnimType = 'fadeUp' | 'scaleReveal' | 'slideLeft';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  anim?: AnimType;
  threshold?: number;
}

const animations: Record<AnimType, { hidden: React.CSSProperties; visible: React.CSSProperties; duration: string }> = {
  fadeUp: {
    hidden: { opacity: 0, transform: 'translateY(40px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
    duration: '0.6s',
  },
  scaleReveal: {
    hidden: { opacity: 0, transform: 'scale(0.95)' },
    visible: { opacity: 1, transform: 'scale(1)' },
    duration: '0.5s',
  },
  slideLeft: {
    hidden: { opacity: 0, transform: 'translateX(-30px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
    duration: '0.5s',
  },
};

export default function ScrollReveal({
  children,
  delay = 0,
  style,
  anim = 'fadeUp',
  threshold = 0.12,
}: ScrollRevealProps) {
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
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const a = animations[anim];

  return (
    <div
      ref={ref}
      style={{
        ...(visible ? a.visible : a.hidden),
        transition: `opacity ${a.duration} ease ${delay}s, transform ${a.duration} ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
