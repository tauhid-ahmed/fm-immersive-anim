"use client";

import { motion } from "framer-motion";

export default function MotionCard({
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: -20 },
}: {
  children: React.ReactNode;
  initial?: object;
  animate?: object;
  exit?: object;
}) {
  return (
    <motion.div initial={initial} animate={animate} exit={exit}>
      {children}
    </motion.div>
  );
}
