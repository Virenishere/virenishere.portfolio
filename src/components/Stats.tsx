'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { SectionWrapper } from './SectionWrapper';
import { Calendar, Briefcase, Layers, TrendingDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  accent: string;
  Icon: LucideIcon;
};

const stats: StatItem[] = [
  {
    label: 'years building',
    value: 1,
    suffix: '+',
    accent: '#34c07c',
    Icon: Calendar,
  },
  {
    label: 'production roles',
    value: 4,
    accent: '#67e8f9',
    Icon: Briefcase,
  },
  {
    label: 'platforms integrated',
    value: 7,
    accent: '#ffbe6f',
    Icon: Layers,
  },
  {
    label: 'failed-job reduction',
    value: 90,
    suffix: '%',
    accent: '#CAA6F7',
    Icon: TrendingDown,
  },
];

function Counter({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix ?? ''}
    </span>
  );
}

export default function Stats() {
  return (
    <SectionWrapper>
      <div className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 w-full">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              className="relative group"
            >
              <div
                aria-hidden
                style={{
                  background: `radial-gradient(80% 120% at 50% 0%, ${s.accent}33, transparent 70%)`,
                }}
                className="absolute -inset-px rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-md"
              />
              <div
                style={{
                  borderColor: `${s.accent}55`,
                  boxShadow: `inset 0 1px 0 0 ${s.accent}1a`,
                }}
                className="relative flex flex-col gap-1.5 px-4 py-5 md:px-5 md:py-6 rounded-2xl border bg-stone-900/50 backdrop-blur-sm overflow-hidden"
              >
                <div className="flex flex-col gap-1.5 min-w-0">
                  <s.Icon
                    className="w-4 h-4 md:w-[18px] md:h-[18px] shrink-0 opacity-80"
                    style={{ color: s.accent }}
                  />
                  <span
                    className="font-grotesk text-3xl md:text-5xl font-semibold tracking-tight leading-none"
                    style={{ color: s.accent }}
                  >
                    <Counter to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="font-jetbrain text-[10px] md:text-xs text-gray-400 tracking-wide">
                    {s.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
