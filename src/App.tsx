import Logo from "@/assets/logo.svg";
import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { BentoCard, BentoGrid } from "./components/magicui/bento-grid";
import { InteractiveHoverButton } from "./components/magicui/interactive-hover-button";
import { TextAnimate } from './components/magicui/text-animate';
import { MobileMenu } from "./components/mobile-menu";
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "./components/ui/drawer";
import { useMediaQuery } from "./hooks/use-media-query";
import { cn } from "./lib/utils";

import browsers from "@/assets/browsers.svg";
import currency from "@/assets/currency.svg";
import gear from "@/assets/gear.svg";
import { Footer } from "./components/footer";

const features = [
  {
    imageIcon: gear,
    name: "Riparazione & Assistenza",
    description: "Hai problemi con il tuo computer? Abbiamo la soluzione giusta per te! Offriamo servizi di riparazione PC e assistenza a domicilio in tutta Milano, sia per privati che per aziende.",
    href: "/",
    cta: "Richiedere il servizio",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:row-start-1 md:row-end-4 md:col-start-1 md:col-end-2",
  },
  {
    imageIcon: browsers,
    name: "Creazione Siti Web",
    description: "Oltre a offrire assistenza e riparazione, il nostro team di esperti programmatori è specializzato nella creazione di siti web professionali, con anni di esperienza nel settore."
    ,
    href: "/",
    cta: "Richiedere il servizio",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3",
  },
  {
    imageIcon: currency,
    name: "Vendita iPhone/PC",
    description: "Acquista il tuo notebook o desktop con il consiglio dei nostri tecnici, che ti guideranno nella scelta in base alle tue reali esigenze, sempre con un ottimo rapporto qualità-prezzo e in totale sicurezza.",
    href: "/",
    cta: "Richiedere il servizio",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-4",
  },
];

function App() {
  const isMobile = useMediaQuery("(max-width: 500px)")

  const Container = isMobile ? Drawer : Dialog
  const Trigger = isMobile ? DrawerTrigger : DialogTrigger
  const Content = isMobile ? DrawerContent : DialogContent

  return (
    <>
      <div className="fixed w-full h-full m-auto inset-0 blur-[100px]">
        <div className=" mx-auto w-full bg-black h-full fixed left-0 top-0 [transform:scale(.8)]">
          <div className="blob"></div>
        </div>
      </div>
      <div className="w-full h-screen fixed left-0 bottom-0 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-repeat bg-[length:128px] rounded-none opacity-[0.09]"></div>
      {/* <div className='bg-sky-800/40 blur-[100px] size-[250px] sm:size-[400px] rounded-full -left-20 -top-20 fixed z-10'></div>
      <div className='bg-sky-800/40 blur-[100px] size-[250px] sm:size-[400px] rounded-full -right-20 -bottom-20 fixed z-10'></div> */}
      <main className='flex flex-col gap-2 relative z-20'>
        {/* <Scene /> */}
        <MobileMenu />

        <section id="hero" className='flex flex-col items-center justify-center gap-10 mx-auto text-white relative sm:px-20 h-svh'>
          {/* <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "fixed [mask-image:radial-gradient(220px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              "mx-auto inset-y-[34%] sm:inset-y-[10%] skew-y-12 size-[400px] sm:size-[700px]",
            )} /> */}
          <AnimatePresence>
            <motion.div
              initial={{ filter: "blur(10px)", y: 100, scale: .7, opacity: 0 }}
              animate={{ filter: "blur(0)", y: 0, scale: 1, opacity: 1 }}
              transition={{ delay: .2, duration: .4 }}
              className="size-20 grid place-content-center relative">
              <img src={Logo} className="w-full object-cover relative z-10" />
              <img src={Logo} className="w-full object-cover blur-lg scale-150 absolute opacity-50 z-0 dark:opacity-30 animate-pulse transition-all" />
            </motion.div>
            <div className="grid gap-2 px-8">
              <TextAnimate
                className='text-center font-medium text-[34px] leading-[32px] sm:text-5xl sm:leading-[44px] tracking-[-1px] max-w-[680px] [&_span]:bg-gradient-to-b from-neutral-400 to-black'
                animation="blurInUp"
                delay={.4}
                as={"h1"}
                by="word"
                once>
                Assistenza Tecnica, Riparazioni e Soluzioni Digitali a Milano
              </TextAnimate>
              <TextAnimate
                className='text-center text-zinc-300 text-md  sm:text-xl sm:leading-[56px] tracking-[-1px] max-w-[680px]'
                animation="blurInUp"
                delay={.6}
                by="word"
                once>
                Siamo al tuo fianco per ogni esigenza informatica, a casa o in azienda.
              </TextAnimate>
              <motion.div
                initial={{ filter: "blur(100px)", y: 20, scale: .2, opacity: 0 }}
                animate={{ filter: "blur(0)", y: 0, scale: 1, opacity: 1 }}
                transition={{ delay: .6, duration: .4 }}
                className="mt-4 flex items-center justify-center gap-4 pl-4 p-2 w-fit mx-auto rounded-full">

                <Container>
                  <Trigger>
                    <InteractiveHoverButton className="bg-gradient-to-b from-[#2645c1] to-[#0f297c] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2)] border-0 font-normal hover:text-black">
                      Mettersi in contatto
                    </InteractiveHoverButton>
                  </Trigger>
                  <Content className="text-white bg-gray-900 border-ring/30 px-3">
                    <ul className="py-3 grid gap-2">
                      <li className="flex items-center gap-2 rounded-xl p-2 font-light justify-center bg-gray-800 text-sm">
                        <WhatsappLogo weight="light" size={28} /> Tramite WhatsApp
                      </li>
                      <li className="flex items-center gap-3 rounded-xl p-2 font-light justify-center bg-gray-800 text-sm">
                        <InstagramLogo weight="light" size={28} /> Tramite Instagram
                      </li>
                    </ul>
                  </Content>
                </Container>

              </motion.div>
            </div>
          </AnimatePresence>
        </section>
        <section id="services" className="rounded-2xl flex flex-col items-center justify-center min-h-svh max-w-5xl mx-auto px-8 pb-8 gap-8">
          <div className="flex flex-col gap-4 text-center justify-between items-center max-w-3xl">
            <TextAnimate
              className='text-3xl font-medium text-gray-100 max-w-[600px] text-center text-[34px] leading-[32px] sm:text-5xl sm:leading-[44px] tracking-[-1px] [&_span]:bg-gradient-to-b from-neutral-400 to-black'
              animation="blurInUp"
              as={"h3"}
              delay={.3}
              by="word"
              once>
              Soluzioni complete per la manutenzione IT: scopri i nostri servizi!
            </TextAnimate>
            <TextAnimate
              className='text-center text-gray-300/90 text-md font-normal sm:text-xl tracking-[-1px] max-w-[680px]'
              animation="blurInUp"
              delay={.6}
              by="word"
              as={'h3'}
              once>
              Offriamo supporto, manutenzione, formattazione, aggiornamenti e sicurezza. Garantisci le prestazioni dei tuoi sistemi, evitando tempi di inattività. Affidati a noi per la cura del tuo IT.
            </TextAnimate>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {features.map(({ className, ...rest }) => (
              <BentoCard key={rest.name} {...rest} className={cn("bg-black/20 backdrop-blur-3xl border border-ring/20 [&_h3]:text-white [&_p]:text-white/70 rounded-4xl", className)} />
            ))}
          </BentoGrid>
          {/* <div className="bg-[#fff] flex flex-col items-start justify-start relative rounded-b-2xl">

            <div className="absolute bg-[#fff] w-10 sm:w-80 h-[44px] -top-[42px] right-0 rounded-tr-2xl" />
            <img src={top_right} className="absolute -top-[42px] right-9 sm:right-80 h-[44px]" />

            <div className="absolute bg-[#fff] w-10 sm:w-80 h-[44px] -top-[42px] left-0 rounded-tl-2xl" />
            <img src={top_left} className="absolute -top-[42px] left-9 sm:left-80 h-[44px]" />

          </div> */}
        </section>
        {/* Dock */}
        {/* <TooltipProvider>
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
        </TooltipProvider> */}
        <Footer />
      </main >
    </>
  )
}

export default App
