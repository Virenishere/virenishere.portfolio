"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import profilepic from "@/assets/images/pfp.jpg";

export default function ProfilePic() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(rotateY, { stiffness: 150, damping: 15 });

  if (!mounted) return null;

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(-(y - centerY) / 20);
    rotateY.set((x - centerX) / 20);
  }

  return (
    <div className="flex justify-center [perspective:1000px]">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          rotateX.set(0);
          rotateY.set(0);
        }}
        style={{
          rotateX: smoothX,
          rotateY: smoothY,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={profilepic}
          alt="profile_pic"
          width={400}
          height={400}
          className="rounded-3xl shadow-2xl"
        />
      </motion.div>
    </div>
  );
}
