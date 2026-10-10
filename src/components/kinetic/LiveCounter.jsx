import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export const LiveCounter = ({ target, prefix = '', suffix = '', duration = 1.6, isFloat = false }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    if (isFloat) {
      let start = 0;
      const end = parseFloat(target);
      const totalSteps = 40;
      const increment = end / totalSteps;
      const stepTime = (duration * 1000) / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end.toFixed(1));
          clearInterval(timer);
        } else {
          setCount(start.toFixed(1));
        }
      }, stepTime);

      return () => clearInterval(timer);
    } else {
      let start = 0;
      const end = parseInt(target, 10);
      const totalSteps = 50;
      const increment = end / totalSteps;
      const stepTime = (duration * 1000) / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration, isFloat]);

  return (
    <span ref={ref} className="tabular-nums font-extrabold">
      {prefix}{count}{suffix}
    </span>
  );
};

export default LiveCounter;
