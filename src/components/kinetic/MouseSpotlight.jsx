import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MouseSpotlight = () => {
  const [mousePos, setMousePos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full blur-[140px] opacity-35 dark:opacity-25 bg-gradient-to-tr from-[#71B7D5]/40 via-[#096B90]/40 to-[#042B44]/30 -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 150,
          mass: 0.2,
        }}
      />
    </div>
  );
};

export default MouseSpotlight;
