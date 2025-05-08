import Logo from "@/assets/logo.svg"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AnimatePresence, motion } from "motion/react"
import { Dock, DockIcon } from "./components/magicui/dock"
import { TextAnimate } from './components/magicui/text-animate'
import { MobileMenu } from "./components/mobile-menu"
import { nav_links } from "./constants"


function App() {
  return (
    <>
      <div className="w-full h-full fixed bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-repeat bg-[length:128px] rounded-none opacity-[0.075] absolute"></div>
      <div className='bg-sky-800/40 blur-[100px] size-[250px] sm:size-[400px] rounded-full -left-20 -top-20 fixed z-10'></div>
      <div className='bg-sky-800/40 blur-[100px] size-[250px] sm:size-[400px] rounded-full -right-20 -bottom-20 fixed z-10'></div>
      <main className='flex flex-col gap-2 h-svh relative z-20 py-5 px-8'>
        {/* <Scene /> */}
        <MobileMenu />

        <div className='flex flex-col items-center justify-center gap-10 mx-auto text-white relative sm:px-20 h-full'>
          <AnimatePresence>
            <motion.div
              initial={{ filter: "blur(10px)", y: 100, scale: .7, opacity: 0 }}
              animate={{ filter: "blur(0)", y: 0, scale: 1, opacity: 1 }}
              transition={{ delay: .2, duration: .4 }}
              className="size-20 grid place-content-center relative">
              <img src={Logo} className="w-full object-cover relative z-10" />
              <img src={Logo} className="w-full object-cover blur-lg scale-150 absolute opacity-50 z-0 dark:opacity-30 animate-pulse transition-all" />
            </motion.div>
          </AnimatePresence>
          <div className="grid gap-2">
            <TextAnimate delay={.4} className='text-center font-medium text-[34px] leading-[32px] sm:text-5xl sm:leading-[44px] tracking-[-1px] max-w-[680px]' animation="blurInUp" by="word" once>
              Assistenza Tecnica, Riparazioni e Soluzioni Digitali a Milano
            </TextAnimate>
            <TextAnimate delay={.6} className='text-center text-zinc-300 text-md  sm:text-xl sm:leading-[56px] tracking-[-1px] max-w-[680px]' animation="blurInUp" by="word" once>
              Siamo al tuo fianco per ogni esigenza informatica, a casa o in azienda.
            </TextAnimate>
          </div>
        </div>
        <TooltipProvider>
          <div className="fixed bottom-8 justify-center w-full left-0 hidden sm:flex">
            <Dock direction="middle" className="bg-gray-900/60 border-ring/20">
              {nav_links.map(({ label, href, ...rest }) => (
                <DockIcon key={label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={href}
                        aria-label={label}
                        className="rounded-full p-4 transition-all hover:bg-gray-500/30"
                      >
                        <rest.icon className="size-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
            </Dock>
          </div>
        </TooltipProvider>
      </main>
    </>
  )
}

export default App
