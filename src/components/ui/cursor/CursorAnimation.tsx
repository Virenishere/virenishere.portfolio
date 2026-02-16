'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from 'framer-motion';
import { useEffect,useRef } from 'react';

export default function CursorAnimation() {

  const initialized = useRef(false);

  const opacity = useMotionValue(0);

  // real mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // delayed cursor position (apple smooth lag)
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // smooth physics
  const smoothX = useSpring(cursorX, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  const smoothY = useSpring(cursorY, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  // scale animation (NO react state)
  const scale = useMotionValue(1);
  const smoothScale = useSpring(scale, {
    stiffness: 260,
    damping: 18,
  });

  // track mouse
  useEffect(() => {
  const move = (e: PointerEvent) => {
  mouseX.set(e.clientX);
  mouseY.set(e.clientY);

  if (!initialized.current) {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    opacity.set(1); // show cursor only after sync
    initialized.current = true;
  }
};
  window.addEventListener("pointermove", move);

  return () => window.removeEventListener("pointermove", move);
}, []);


  // Apple-style smooth follow loop
  useAnimationFrame(() => {
    const x = cursorX.get();
    const y = cursorY.get();

    // lerp movement (secret sauce)
    cursorX.set(x + (mouseX.get() - x) * 0.3);
    cursorY.set(y + (mouseY.get() - y) * 0.3);
  });

  // hover detection (magnetic trigger)
  useEffect(() => {
    const hover = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.closest('.cursor-hover')) {
        scale.set(2);
      } else {
        scale.set(1);
      }
    };

    document.addEventListener('mouseover', hover);
    return () => document.removeEventListener('mouseover', hover);
  }, []);

  return (
    <motion.div
      style={{
        translateX: smoothX,
        translateY: smoothY,
        scale: smoothScale,
        opacity,
      }}
      className="
        pointer-events-none
        fixed top-0 left-0
        z-[9999]
        h-8 w-8
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        border-2 border-white/80
        will-change-transform
      "
    />
  );
}
