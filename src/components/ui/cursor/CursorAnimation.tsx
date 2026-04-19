'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export default function CursorAnimation() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const onClick = () => {
      setIsClicked(true);
      window.setTimeout(() => setIsClicked(false), 120);
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      el.style.transform = `translate3d(${currentX - w / 2}px, ${currentY - h / 2}px, 0)`;
      rafId = window.requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      window.cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      style={{ willChange: 'transform' }}
      className={cn(
        'pointer-events-none fixed top-0 left-0 z-[60] hidden md:block rounded-full border-[3px] border-purple-500 bg-transparent transition-[width,height,opacity] duration-150',
        isClicked ? 'w-7 h-7' : 'w-10 h-10',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      aria-hidden
    />
  );
}
