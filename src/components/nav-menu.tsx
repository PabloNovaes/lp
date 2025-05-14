import type React from "react"

import { nav_links } from "@/constants"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import {
    AnimatePresence,
    motion,
    stagger,
    useAnimate,
    useMotionValueEvent,
    useScroll,
    type Variants,
} from "framer-motion"
import { memo, useEffect, useRef, useState } from "react"

type NavLink = typeof nav_links[0]

interface NavMenuProps {
    navLinks: NavLink[]
    className?: string
    mobileBreakpoint?: number
}

function useMenuAnimation(isMenuOpen: boolean, isMobile: boolean) {
    const [scope, animate] = useAnimate()
    const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

    useEffect(() => {
        if (!isMobile) return
        animate(
            "div#mobile-menu",
            isMenuOpen ? { height: "100dvh", zIndex: 10 } : { height: 0 },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5,
                delay: isMenuOpen ? 0 : 1
            },
        )
        animate(
            "span.motion-item, li.motion-item",
            isMenuOpen ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: "blur(10px)", y: 50 },
            {
                duration: 0.6,
                delay: staggerMenuItems,
                type: "spring",
                bounce: 0,
            },
        )
    }, [isMenuOpen, animate, staggerMenuItems, isMobile])

    return scope
}

const menuBarVariants: Variants = {
    hidden: {
        y: -60,
        opacity: 0,
        scale: 0.8,
    },
    visible: {
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

const MobileMenu = memo(
    ({
        navLinks,
        isMenuOpen,
        setIsMenuOpen,
        scope,
    }: {
        navLinks: NavLink[]
        isMenuOpen: boolean
        show: boolean
        setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
        scope: React.RefObject<HTMLElement>
    }) => {
        return (
            <div className="w-full z-[100] fixed top-0 left-0">
                <header className="flex text-primary relative h-[60px] items-center border-ring/10 transition-all duration-200 pr-2 pt-2" ref={scope}>
                    <div className="flex items-center w-full max-w-5xl m-auto justify-end">
                        <button
                            className={cn(
                                "z-20 focus:outline-none flex flex-col size-[50px] justify-center items-center transition-all duration-300 border-ring/20",
                                "bg-black/20 border rounded-full backdrop-blur-sm"
                            )}
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                        >
                            <motion.span
                                className="block rounded-xl opacity-80 h-[1px] w-[18px] bg-ring"
                                style={{ y: "-3px" }}
                                animate={{
                                    y: isMenuOpen ? 0 : -3,
                                    rotate: isMenuOpen ? 45 : 0,
                                }}
                                transition={{ duration: 0.3, ease: "backInOut" }}
                            />
                            <motion.span
                                className="block rounded-xl opacity-80 h-[1.1px] w-[18px] bg-ring"
                                style={{ y: "3px" }}
                                animate={{
                                    y: isMenuOpen ? -1 : 3,
                                    rotate: isMenuOpen ? -45 : 0,
                                }}
                                transition={{ duration: 0.3, ease: "backInOut" }}
                            />
                        </button>
                    </div>
                    <motion.div
                        id="mobile-menu"
                        className="menu w-full bg-background absolute left-0 top-0 h-0 overflow-hidden"
                        aria-hidden={!isMenuOpen}
                    >
                        <div className="relative h-full bg-gray-950">
                            <div className="w-full h-full bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-repeat bg-[length:128px] rounded-none opacity-[0.075] absolute" />
                            <nav
                                className="flex-col h-full pb-4 pt-[70px] flex pl-10 h-nav gap-4 font-medium uppercase text-4xl relative text-primary min-[500px]:overflow-hidden"
                            >
                                {navLinks.map(({ href, label }, index) => (
                                    <motion.span
                                        key={`mobile-${href}-${index}`}
                                        className="motion-item text-white opacity-0 cursor-pointer"
                                        onClick={() => {
                                            setIsMenuOpen(false)
                                            setTimeout(() =>
                                                document.querySelector(`section${href}`)?.scrollIntoView({ behavior: "smooth" }), 1300
                                            )
                                        }}
                                    >
                                        {label}
                                    </motion.span>
                                ))}
                                {/* <ul className="flex items-end mx-auto gap-4 justify-between text-muted-foreground h-full pr-10">
                                    {socialLinks.map(({ href, ...rest }, index) => (
                                        <>
                                            <motion.li className="motion-item opacity-0">
                                                <a href={href}>
                                                    <rest.icon size={28} weight="light" />
                                                </a>
                                            </motion.li>
                                            {index < socialLinks.length - 1 && <motion.li className="motion-item bg-ring/20 w-0.5 h-5 opacity-0" />}

                                        </>
                                    ))}

                                </ul> */}
                            </nav>
                        </div>

                    </motion.div>
                </header>
            </div>
        )
    },
)

MobileMenu.displayName = "MobileMenu"

const DesktopMenu = memo(
    ({
        navLinks,
        showMenu,
    }: {
        navLinks: NavLink[]
        showMenu: boolean
    }) => {
        return (
            <header className="w-full fixed h-fit top-0 py-6 flex justify-center z-[100]">
                <AnimatePresence>
                    <motion.nav
                        variants={menuBarVariants}
                        initial="hidden"
                        animate={showMenu ? "visible" : "hidden"}
                        exit="hidden"
                        className="text-black flex items-center gap-3"
                    >
                        <ul className="p-2.5 bg-white shadow-2xl rounded-xl px-6 flex gap-5 items-center">
                            {navLinks.map(({ href, label }, index) => (
                                <li
                                    className={cn("cursor-pointer font-medium text-[#03030] text-sm transition-all duration-100 hover:text-primary/50", window.location.href.includes(href) && "text-blue-500")}
                                    onClick={() => {
                                        document.querySelector(`section${href}`)?.scrollIntoView({ behavior: "smooth" })
                                    }}
                                    key={`desktop-${href}-${index}`}>
                                    {label}
                                </li>
                            ))}
                        </ul>

                    </motion.nav>
                </AnimatePresence>
            </header>
        )
    },
)

DesktopMenu.displayName = "DesktopMenu"

export function NavMenu({ navLinks, mobileBreakpoint = 500 }: NavMenuProps) {
    const isMobile = useMediaQuery(`(max-width: ${mobileBreakpoint}px)`)

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showMenu, setShowMenu] = useState(isMobile ? false : true)
    const { scrollY } = useScroll()

    const scope = useMenuAnimation(isMenuOpen, isMobile)
    const lastScrollY = useRef(0)

    useMotionValueEvent(scrollY, "change", (current) => {
        if (isMenuOpen) return

        const previous = lastScrollY.current
        const scrollThreshold = 5

        if (Math.abs(current - previous) < scrollThreshold) return

        if (current > previous) {
            setShowMenu(true)
        } else if (current < previous) {
            setShowMenu(false)
        }

        lastScrollY.current = current
    })

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }

        return () => {
            document.body.classList.remove("overflow-hidden")
        }
    }, [isMenuOpen])

    if (isMobile) {
        return <MobileMenu show={showMenu} navLinks={navLinks} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scope={scope} />
    }

    return <DesktopMenu navLinks={navLinks} showMenu={showMenu} />
}
