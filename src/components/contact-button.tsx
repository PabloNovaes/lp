import { AnimatePresence, motion, useMotionValueEvent, useScroll, type Variants } from "motion/react";
import { useRef, useState } from "react";
import WhatsApp from "./whatsapp-icon";

const variants: Variants = {
    hidden: {
        y: '150%',
        filter: "blur(10px)",
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        filter: "blur(0)",
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 30,
        },
    },
}

export function ContactButton() {
    const [showButton, setShowButton] = useState(false)
    const { scrollY } = useScroll()
    const lastScrollY = useRef(0)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = lastScrollY.current
        const scrollThreshold = 5

        if (Math.abs(current - previous) < scrollThreshold) return

        if (current > previous) {
            setShowButton(true)
        } else if (current < previous) {
            setShowButton(false)
        }

        lastScrollY.current = current
    })
    return (
        <AnimatePresence>
            {showButton && (

                <motion.a
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="bg-white/10 text-[#181818] p-2.5 fixed bottom-10 right-10 z-30 rounded-full" href="">
                    <WhatsApp className="size-10" />
                </motion.a>
            )}
        </AnimatePresence>
    )
}