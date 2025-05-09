// import Logo from "@/assets/logo.svg";
import logo from "@/assets/logo.svg";
import mockup from "@/assets/mockup.svg";
import { Package, Star } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { BentoCard, BentoGrid } from "./components/magicui/bento-grid";
import { defaultItemAnimationVariants, TextAnimate } from './components/magicui/text-animate';
import { HeaderMenu } from "./components/mobile-menu";
import { cn } from "./lib/utils";

import browsers from "@/assets/browsers.svg";
import currency from "@/assets/currency.svg";
import gear from "@/assets/gear.svg";
import { ContactButton } from "./components/contact-button";
import { Footer } from "./components/footer";
import { AnimatedGridPattern } from "./components/magicui/animated-grid-pattern";
import { nav_links } from "./constants";

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

const MotionText = ({ children, className, delay = 0.6 }: { children: string, className?: string, delay?: number }) => (
  <TextAnimate
    className={cn('text-gray-300/90 text-sm font-normal sm:text-lg tracking-[-1px] max-w-[680px]', className)}
    animation="blurInUp"
    delay={delay}
    by="word"
    as={'h3'}
    once>
    {children}
  </TextAnimate>
)

function App() {
  return (
    <>
      <div className="fixed w-full h-full m-auto inset-0 blur-[100px]">
        <div className=" mx-auto w-full bg-black h-full fixed left-0 top-0 [transform:scale(.8)]">
          <div className="blob rounded-full" />
        </div>
      </div>
      <div className="w-full h-screen fixed left-0 bottom-0 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-repeat bg-[length:128px] rounded-none opacity-[0.09]"></div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn("hidden",
          "fixed [mask-image:radial-gradient(220px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "mx-auto inset-y-[34%] sm:inset-y-[10%] skew-y-12 size-[400px] sm:size-[700px]",
        )} />

      <ContactButton />
      <main className='flex flex-col relative z-20'>
        {/* <Scene /> */}
        <HeaderMenu navLinks={nav_links} />

        <section id="hero" className='flex flex-col items-center justify-end gap-10 mx-auto text-white relative sm:px-20 h-svh'>
          <AnimatePresence>
            <div className="grid gap-4">
              {/* <motion.div
                initial={{ filter: "blur(10px)", y: 100, scale: .7, opacity: 0 }}
                animate={{ filter: "blur(0)", y: 0, scale: 1, opacity: 1 }}
                transition={{ delay: .2, duration: .4 }}
                className="size-20 grid place-content-center relative">
                <img src={Logo} className="w-full object-cover relative z-10" />
                <img src={Logo} className="w-full object-cover blur-lg scale-150 absolute opacity-50 z-0 dark:opacity-30 animate-pulse transition-all" />
              </motion.div> */}
              <div className="grid gap-2 text-center px-8">
                <div className="mx-auto mb-2">
                  <img src={logo} className="h-8 mx-auto" alt="" />
                </div>
                <TextAnimate
                  className='font-medium text-[34px] leading-[32px] sm:text-4xl sm:leading-[38px] lg:text-5xl lg:leading-[44px] tracking-[-1px] max-w-[680px] [&_span]:bg-gradient-to-b from-neutral-400 to-black'
                  animation="blurInUp"
                  delay={.4}
                  as={"h1"}
                  by="word"
                  once>
                  Assistenza e Riparazioni Computer a Milano
                </TextAnimate>
                <TextAnimate
                  className='text-zinc-300 text-md lg:text-xl lg:leading-[20px] tracking-[-1px] max-w-[680px]'
                  animation="blurInUp"
                  delay={.6}
                  by="word"
                  once>
                  Fast Riparazione Pc nasce con l’obiettivo di offrire riparazione e assistenza pc a domicilio a Milano a Privati e Aziende.
                </TextAnimate>
              </div>
            </div>
            <motion.div
              variants={defaultItemAnimationVariants.blurInUp.container}
              className="flex justify-center items-end"
              style={{
              }}>
              <motion.img
                src={mockup}
                variants={defaultItemAnimationVariants.blurInUp.item}
                initial={"hidden"}
                animate={"show"}
                style={{
                  maskImage: "linear-gradient(to bottom,rgb(0, 0, 0) 50%,rgba(255, 255, 255, 0))"
                }}
                className="relative pl-[24px] max-[500px]:max-h-[350px]" alt="" />
            </motion.div>
          </AnimatePresence>
        </section>
        <div className="w-full max-w-5xl h-px mx-auto" style={{ backgroundImage: "linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255, 255, 255, 0.3) 50%,rgba(255,255,255,0) 100%)" }} />
        <section id="services" className="relative min-h-svh mx-auto pt-8 sm:pt-0  grid px-8 border-t border-ring/10 rounded-2xl pb-10">
          <div className="flex flex-col justify-center max-w-5xl gap-8 mx-auto">
            <div className="flex flex-col gap-4 justify-between max-w-3xl">
              <div className="flex w-fit rounded-full items-center gap-1.5 p-1 px-1.5 bg-preset uppercase text-xs">
                <Package weight="fill" size={16} /> servizi
              </div>
              <TextAnimate
                className='text-3xl font-medium text-gray-100 max-w-[660px] text-[26px] leading-[32px] sm:text-5xl sm:leading-[44px] tracking-[-1px] [&_span]:bg-gradient-to-b from-neutral-400 to-black'
                animation="blurInUp"
                as={"h3"}
                delay={.3}
                by="word"
                once>
                Hai problemi con il tuo computer? Fast Riparazione Pc ha la soluzione al tuo problema.
              </TextAnimate>
              <TextAnimate
                className='text-gray-300/90 text-sm font-normal sm:text-lg tracking-[-1px] max-w-[680px]'
                animation="blurInUp"
                delay={.6}
                by="word"
                as={'h3'}
                once>
                Con un’esperienza di ben 11 anni nel campo, e dispone dei migliori tecnici informatici, Offrendo un servizio a 360°, con un ottimo rapporto qualità prezzo.
              </TextAnimate>
            </div>
            <BentoGrid className="lg:grid-cols-3">
              {features.map(({ className, ...rest }) => (
                <BentoCard key={rest.name} {...rest} className={cn("bg-black/20 backdrop-blur-3xl border border-ring/20 [&_h3]:text-white [&_p]:text-white/70 rounded-4xl", className)} />
              ))}
            </BentoGrid>
          </div>
        </section>
        <div className="w-full max-w-5xl h-px mx-auto" style={{ backgroundImage: "linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255, 255, 255, 0.3) 50%,rgba(255,255,255,0) 100%)" }} />
        <section id="about" className="flex items-center mx-auto py-8 w-[90%] border-t border-ring/10 rounded-2xl">
          <div className="flex flex-col  max-w-5xl gap-4 mx-auto">
            <div className="flex w-fit rounded-full items-center gap-1 p-1 px-1.5 uppercase text-xs bg-preset">
              <Star weight="fill" size={14} /> chi siamo
            </div>
            <TextAnimate
              className='text-3xl font-medium text-gray-100 max-w-[660px] text-[26px] leading-[32px] sm:text-5xl sm:leading-[44px] tracking-[-1px] [&_span]:bg-gradient-to-b from-neutral-400 to-black'
              animation="blurInUp"
              as={"h3"}
              delay={.3}
              by="word"
              once>
              Scopri di più su chi siamo
            </TextAnimate>
            <div className="grid sm:grid-cols-2 text-start gap-4 sm:gap-2">
              <MotionText className="text-md" delay={.4}>
                Fast Riparazione Pc nasce con l’obiettivo di offrire riparazione PC e assistenza a domicilio su tutto il territorio di Milano, sia a privati che ad aziende.
              </MotionText>
              <MotionText className="text-md" delay={.8}>
                Vantiamo un’esperienza di ben 7 anni e disponiamo dei migliori tecnici informatici specializzati, che svolgono un’eccellente assistenza direttamente a domicilio.
              </MotionText>
              <MotionText className="text-md" delay={1.2}>
                Offriamo un servizio a 360°, con un ottimo rapporto qualità-prezzo.
                Lavoriamo con tutte le marche e i modelli disponibili sul mercato, svolgendo assistenza e riparazione hardware e software, sia per Computer che per Mac, sempre a domicilio.
              </MotionText>
            </div>
          </div>
        </section>
        <Footer />
      </main >
    </>
  )
}

export default App
