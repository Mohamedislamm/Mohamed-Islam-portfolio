import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-zinc-400 via-white to-zinc-300 z-50 origin-left shadow-[0_0_10px_rgba(255,255,255,0.7)]"
    />
  );
};
