import { nav_links } from "@/constants";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";


function useInputAnimation(isMenuOpen: boolean) {
    const [scope, animate] = useAnimate();
    const staggerMenuItems = stagger(0.1, { startDelay: .15 });

    useEffect(() => {

        animate(
            "div#mobile-menu",
            isMenuOpen
                ? { height: "100vh", opacity: 1, zIndex: 10 }
                : { height: 0 }
            ,
            {
                type: "spring",
                bounce: 0,
                duration: 0.5,
            }
        );

        animate(
            "span.animate-span",
            isMenuOpen
                ? { opacity: 1, filter: "blur(0px)", y: 0 }
                : { opacity: 0, filter: "blur(10px)", y: 50 },
            {
                duration: 0.6,
                delay: isMenuOpen ? staggerMenuItems : 0,
                type: "spring",
                bounce: 0,
            }
        );
    }, [isMenuOpen, animate, staggerMenuItems]);
    return scope;
}

export function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scope = useInputAnimation(isMenuOpen)

    useEffect(() => {
        if (isMenuOpen) {
            window.document.body.classList.add("overflow-hidden")
        }
        if (!isMenuOpen) {
            window.document.body.classList.remove("overflow-hidden")
        }
    }, [isMenuOpen]);

    return (
        <div className="w-full z-20 fixed top-0 left-0">
            <header className="flex text-primary relative h-[50px]" ref={scope}>
                <div className="flex items-center w-full max-w-5xl m-auto justify-end h-[50px] pr-8 pt-5">
                    <button
                        className="relative z-20 focus:outline-none md:hidden flex justify-center items-center"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        <motion.span
                            className="block rounded-xl opacity-80 absolute h-px w-[18px] bg-ring"
                            style={{ y: "-3px" }}
                            animate={{
                                y: isMenuOpen ? 0 : "-3px",
                                rotate: isMenuOpen ? 45 : 0
                            }}
                            transition={{ duration: 0.3, ease: "backInOut" }}
                        />
                        <motion.span
                            className="block rounded-xl opacity-80 absolute h-px w-[18px] bg-ring"
                            style={{ y: "3px" }}
                            animate={{
                                y: isMenuOpen ? 0 : "3px",
                                rotate: isMenuOpen ? -45 : 0
                            }}
                            transition={{ duration: 0.3, ease: "backInOut" }}
                        />
                    </button>
                </div>
                <motion.div id="mobile-menu" className="menu w-full bg-background absolute -z-10 left-0 top-0 h-0 opacity-0">
                    <div className="relative h-full bg-gray-950">
                        <div className="w-full h-full bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-repeat bg-[length:128px] rounded-none opacity-[0.075] absolute" />
                        <nav style={{ height: "calc(100% - 50px)" }} className="flex-col pt-[70px] flex  pl-10 h-nav gap-4 font-medium uppercase text-4xl relative text-primary min-[500px]:overflow-hidden">
                            {nav_links.map(({ href, label }) => (
                                <motion.span className="animate-span text-white" onClick={() => setIsMenuOpen(false)}>
                                    <a href={href}>{label}</a>
                                </motion.span>
                            ))}
                        </nav>
                    </div>
                </motion.div>
            </header >
        </div >
    )
}