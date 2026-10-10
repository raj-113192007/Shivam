import React from 'react';
import { motion } from 'framer-motion';

export const KineticText = ({ text, className = '', delay = 0, stagger = 0.04 }) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      rotateX: -40,
      filter: 'blur(5px)' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 120,
      }
    },
  };

  return (
    <motion.span
      className={`inline-block perspective-1000 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-[0.25em] will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default KineticText;
