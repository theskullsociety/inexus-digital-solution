import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2 }: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (target >= 1000000) {
      return `${prefix}${(latest / 1000000).toFixed(0)}M${suffix}`;
    }
    return `${prefix}${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    const controls = animate(count, target, { duration, ease: "easeOut" });
    return controls.stop;
  }, [count, target, duration]);

  return <motion.span>{rounded}</motion.span>;
}
