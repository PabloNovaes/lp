import type React from "react";

import logo from "@/assets/logo.svg";
import { nav_links } from "@/constants";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

import { ArrowUpRight01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  type Variants,
} from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import { FadeIn } from "./fade-in";

type NavLink = (typeof nav_links)[0];

interface NavMenuProps {
  navLinks: NavLink[];
  className?: string;
  mobileBreakpoint?: number;
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
};

const MobileMenu = memo(
  ({
    navLinks,
    isMenuOpen,
    setIsMenuOpen,
  }: {
    navLinks: NavLink[];
    isMenuOpen: boolean;
    show: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    return (
      <div className="z-[100] px-6 absolute left-0 sm:hidden w-full pt-10">
        <header className="flex mx-auto max-w-120 w-full text-primary relative h-[60px] items-center border-ring/10 transition-all duration-200">
          <div className="flex items-center w-full justify-between">
            <FadeIn as="div" delay={0.1} duration={0.5} className="mb-2">
              <img src={logo} alt="" className="h-8 max-[640px]:h-6" />
            </FadeIn>
            <button
              className={cn(
                "focus:outline-none flex flex-col size-[50px] justify-center items-center transition-all duration-300 border-ring/20 sticky",
                "bg-black/20 border rounded-full backdrop-blur-sm",
              )}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}>
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
          <AnimatePresence>
            {isMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="md:hidden fixed inset-0 z-[59] bg-black/40"
                />
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  role="dialog"
                  aria-modal="true"
                  className="md:hidden fixed inset-0 z-[60] bg-gray-950/98 backdrop-blur-xl flex flex-col">
                  <div className="flex items-center justify-end px-6 py-4 border-b border-white/8">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMenuOpen(false)}
                      aria-label="Chiudi il menu di navigazione"
                      className="flex items-center justify-center w-11 h-11 -mr-2 rounded-full text-white hover:bg-white/5 transition-colors duration-300">
                      <HugeiconsIcon icon={Cancel01Icon} className="w-6 h-6" />
                    </motion.button>
                  </div>

                  <nav className="flex-1 flex flex-col justify-center px-6">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ x: -24, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.05 + index * 0.05,
                        }}>
                        <a
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="group flex items-center justify-between py-4 text-3xl font-medium tracking-tight text-white border-b border-white/10">
                          {link.label}
                          <HugeiconsIcon
                            icon={ArrowUpRight01Icon}
                            className="w-6 h-6 text-white/25 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </a>
                      </motion.div>
                    ))}
                  </nav>

                  <motion.div
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="p-6">
                    <a
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white py-4 rounded-full text-base font-semibold w-full transition-colors duration-300">
                      Consulenza Gratuita
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        className="w-5 h-5"
                      />
                    </a>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </header>
      </div>
    );
  },
);

MobileMenu.displayName = "MobileMenu";

const DesktopMenu = memo(
  ({ navLinks, showMenu }: { navLinks: NavLink[]; showMenu: boolean }) => {
    const links = navLinks.filter(({ href }) => href !== "#contact");

    return (
      <header className="w-full fixed h-fit top-0 py-6 justify-center z-[100] hidden min-sm:flex">
        <AnimatePresence mode="wait">
          {showMenu && (
            <motion.nav
              variants={menuBarVariants}
              initial="hidden"
              animate={"visible"}
              exit="hidden"
              className="flex items-center gap-1 p-1.5 bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] rounded-full">
              <ul className="flex items-center gap-1">
                {links.map(({ href, label }, index) => (
                  <li
                    className="cursor-pointer font-medium text-white/55 text-sm px-4 py-2 rounded-full transition-colors duration-200 hover:text-white hover:bg-white/8"
                    onClick={() => {
                      document
                        .querySelector(`section${href}`)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    key={`desktop-${href}-${index}`}>
                    {label}
                  </li>
                ))}
              </ul>
              <span
                onClick={() => {
                  document
                    .querySelector("section#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-pointer font-semibold text-white text-sm px-5 py-2 rounded-full bg-sky-600 hover:bg-sky-500 transition-colors duration-200">
                Contattaci
              </span>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    );
  },
);

DesktopMenu.displayName = "DesktopMenu";

export function NavMenu({ navLinks, mobileBreakpoint = 500 }: NavMenuProps) {
  const isMobile = useMediaQuery(`(max-width: ${mobileBreakpoint}px)`);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(isMobile ? false : true);
  const { scrollY } = useScroll();

  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (isMenuOpen) return;

    if (current <= 0) {
      setShowMenu(true);
      lastScrollY.current = current;
      return;
    }

    const previous = lastScrollY.current;
    const scrollThreshold = 5;

    if (Math.abs(current - previous) < scrollThreshold) return;

    if (current > previous) {
      setShowMenu(true);
    } else if (current < previous) {
      setShowMenu(false);
    }

    lastScrollY.current = current;
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <>
      <MobileMenu
        show={showMenu}
        navLinks={navLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <DesktopMenu navLinks={navLinks} showMenu={showMenu} />
    </>
  );
}
