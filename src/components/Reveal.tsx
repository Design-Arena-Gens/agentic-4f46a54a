"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, y: 32 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, transition: { duration: 0.7, delay } }
          : {}
      }
    >
      {children}
    </motion.div>
  );
}

