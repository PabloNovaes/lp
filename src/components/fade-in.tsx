import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "motion/react";
import type { ElementType, ReactNode } from "react";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children" | "className"> {
  as?: ElementType;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  children: ReactNode;
}

export function FadeIn({
  as = "div",
  delay = 0,
  duration = 0.5,
  once = true,
  className,
  children,
  ...props
}: FadeInProps) {
  const MotionComponent = motion.create(as);

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ delay, duration, ease: "easeOut" }}
      className={cn(className)}
      {...props}>
      {children}
    </MotionComponent>
  );
}
