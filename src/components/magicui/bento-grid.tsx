import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Children, cloneElement, isValidElement, useEffect, type ComponentPropsWithoutRef, type ReactElement, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Icon } from "@phosphor-icons/react";
import { motion, useAnimate, useInView, type HTMLMotionProps } from "motion/react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends HTMLMotionProps<"div"> {
  name: string;
  className?: string;
  background?: React.ReactNode;
  Icon?: Icon;
  imageIcon?: string;
  description: string;
  href: string;
  cta: string;
}

// Stagger function for animations
const stagger = (amount: number = 0.1) => (index: number) => index * amount;

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  const [scope, animate] = useAnimate();

  const isInView = useInView(scope, { once: true, amount: 1 });

  useEffect(() => {
    if (isInView) {
      animate(
        "div.bento-card",
        { opacity: 1, y: 0 },
        {
          duration: 1.2,
          type: "spring",
          bounce: 0,
          delay: stagger(0.3)
        }
      );
    }
  }, [isInView, animate]);

  // Clone children to add animation classes
  const animatedChildren = Children.map(children, (child) => {
    // Only process React elements
    if (isValidElement(child)) {
      // Type assertion to help TypeScript understand the structure
      const element = child as ReactElement<{ className: string, style: Record<string, string | number | boolean> }>

      return cloneElement(element, {
        // Handle undefined className
        className: cn(element.props?.className || "", "bento-card"),
        // Handle undefined style and add animation initial state
        style: {
          opacity: 0,
          y: 25,
          ...(element.props?.style || {}),
        },
      })
    }
    return child
  })

  return (
    <div
      ref={scope}
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {animatedChildren}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  imageIcon,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => {
  return (
    <motion.div
      key={name}
      className={cn(
        "bento-card group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        // light styles
        "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className,
      )}
      {...props}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        {imageIcon && (
          <div className="size-12 grid place-content-center relative mb-3">
            <img src={imageIcon || "/placeholder.svg"} alt="" className="w-full object-cover relative z-10" />
            <img src={imageIcon || "/placeholder.svg"} alt="" className="w-full object-cover blur-lg scale-125 absolute opacity-80 z-0 dark:opacity-30 animate-pulse transition-all" />
          </div>
        )}
        {Icon && <Icon weight="fill" className="text-blue-500 h-8 w-8 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />}
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </motion.div>
  );
};

export { BentoCard, BentoGrid };
