// import Logo from "@/assets/logo.svg";
import logo from "@/assets/logo.svg";
import mockup from "@/assets/mockup.svg";
import { ChatCircleDots, Clock, CurrencyEur, Package, Star } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { BentoCard, BentoGrid } from "./components/magicui/bento-grid";
import { defaultItemAnimationVariants, TextAnimate } from './components/magicui/text-animate';
import { HeaderMenu } from "./components/mobile-menu";
import { cn } from "./lib/utils";

import browsers from "@/assets/browsers.svg";
import currency from "@/assets/currency.svg";
import gear from "@/assets/gear.svg";
import { ContactForm } from "./components/contact";
import { ContactButton } from "./components/contact-button";
import { Footer } from "./components/footer";
import { AnimatedGridPattern } from "./components/magicui/animated-grid-pattern";
import { nav_links } from "./constants";

const features = [
  {
    imageIcon: browsers,
    name: "Creazione Siti Web",
    description: "Creiamo il tuo Sito da Zero, Siti Web su Misura, e-commerce. Ottimizzati per i motori di ricerca."
    ,
    href: "/",
    cta: "Richiedere il servizio",
  },
  {
    imageIcon: gear,
    name: "Riparazione & Assistenza",
    description: "Offriamo assistenza e riparazione pc a domicilio sia a privati che aziende in tutto il territorio di Milano.",
    href: "/",
    cta: "Richiedere il servizio",
  },
  {
    imageIcon: currency,
    name: "Vendita iPhone/PC",
    description: "Abbiamo il nostro e-commerce per la vendita di prodotti informatici come iPhone, computer e molto altro, tutto a un ottimo prezzo.",
    href: "/",
    cta: "Richiedere il servizio",
  },
];

const MotionText = ({ children, className = "text-sm", delay = 0.6 }: { children: string, className?: string, delay?: number }) => (
  <TextAnimate
    className={cn('text-gray-300/90 font-normal sm:text-lg tracking-[-1px] max-w-[680px]', className)}
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

        <section id="hero" className='flex flex-col items-center gap-10 mx-auto text-white relative sm:px-20 h-svh pt-[88px]'>
          <AnimatePresence>
            <div className="grid gap-4">
              <div className="grid gap-4 text-center px-8">
                <div className="mx-auto mb-2">
                  <img src={logo} className="h-8 mx-auto" alt="" />
                </div>
                <TextAnimate
                  className='font-medium text-[30px] leading-[32px] sm:text-4xl sm:leading-[38px] lg:text-5xl lg:leading-[44px] tracking-[-1px] max-w-[680px] [&_span]:bg-gradient-to-b from-neutral-400 to-black'
                  animation="blurInUp"
                  delay={.4}
                  as={"h1"}
                  by="word"
                  once>
                  Assistenza e Riparazioni Computer a Milano
                </TextAnimate>
                <TextAnimate
                  className='text-zinc-300 text-md lg:text-xl lg:leading-[20px] tracking-[-1px] max-w-[500px] mx-auto'
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
              className="flex justify-center items-end h-full"
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
                className="pl-[24px] h-full" alt="" />
            </motion.div>
          </AnimatePresence>
        </section>
        <div className="w-full max-w-5xl h-px mx-auto" style={{ backgroundImage: "linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255, 255, 255, 0.3) 50%,rgba(255,255,255,0) 100%)" }} />
        <section id="services" className="relative min-h-svh mx-auto pt-8 grid px-8 border-t border-ring/10 rounded-2xl pb-10">
          <div className="flex flex-col justify-center max-w-5xl gap-8 mx-auto">
            <div className="flex flex-col gap-4 justify-between max-w-3xl">
              <div className="flex w-fit rounded-full items-center gap-1.5 p-1 px-1.5 bg-preset text-xs">
                <Package weight="fill" size={16} /> Servizi
              </div>
              <TextAnimate
                className='text-3xl font-medium text-gray-100 max-w-[820px] leading-[32px] lg:text-4xl sm:leading-[38px] tracking-[-1px] [&_span]:bg-gradient-to-b from-neutral-400 to-black'
                animation="blurInUp"
                as={"h3"}
                delay={.3}
                by="word"
                once>
                Hai problemi con il tuo computer? Fast Riparazione Pc ha la soluzione al tuo problema.
              </TextAnimate>
              <TextAnimate
                className='text-gray-300/90 text-md font-normal sm:text-lg tracking-[-1px] max-w-[680px]'
                animation="blurInUp"
                delay={.6}
                by="word"
                as={'h3'}
                once>
                Con un’esperienza di ben 11 anni nel campo, e dispone dei migliori tecnici informatici, Offrendo un servizio a 360°, con un ottimo rapporto qualità prezzo.
              </TextAnimate>
            </div>
            <BentoGrid className="lg:grid-cols-3">
              {features.map(({ ...rest }) => (
                <BentoCard key={rest.name} {...rest} className={cn("bg-black/20 backdrop-blur-3xl border border-ring/20 [&_h3]:text-white [&_p]:text-white/70 rounded-4xl")} />
              ))}
            </BentoGrid>
          </div>
        </section>
        <div className="w-full max-w-5xl h-px mx-auto" style={{ backgroundImage: "linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255, 255, 255, 0.3) 50%,rgba(255,255,255,0) 100%)" }} />
        <section id="about" className="px-8 flex items-center mx-auto py-8 w-full border-t border-ring/10 rounded-2xl">
          <div className="flex flex-col  max-w-5xl gap-4 mx-auto">
            <div className="flex w-fit rounded-full items-center gap-1 p-1 px-1.5 text-xs bg-preset">
              <Star weight="fill" size={14} /> Chi siamo
            </div>
            <TextAnimate
              className='text-3xl font-medium text-gray-100 max-w-[820px] leading-[32px] lg:text-4xl sm:leading-[38px] tracking-[-1px] [&_span]:bg-gradient-to-b from-neutral-400 to-black'
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
        <section id="contact" className="px-8 flex items-center mx-auto py-8 w-full border-t border-ring/10 rounded-2xl">
          <div className="max-w-5xl gap-8 grid md:grid-cols-2">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex w-fit rounded-full items-center gap-1 p-1 px-1.5 text-xs bg-preset">
                <ChatCircleDots weight="fill" size={14} /> Contattaci
              </div>
              <TextAnimate
                className='text-3xl font-medium text-gray-100 max-w-[820px] leading-[32px] lg:text-4xl sm:leading-[38px] tracking-[-1px] [&_span]:bg-gradient-to-b from-neutral-400 to-black'
                animation="blurInUp"
                as={"h3"}
                delay={.3}
                by="word"
                once>
                Scopri di più su chi siamo
              </TextAnimate>
              <div className="grid text-start gap-4 sm:gap-2">
                <div className="grid gap-4">
                  <MotionText className="text-md" delay={.4}>
                    Avete domande? Non esitate a contattarci direttamente. Il nostro team ti contatterà per aiutarti.
                  </MotionText>
                  <ContactForm />
                </div>

              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black/20 backdrop-blur-3xl border border-ring/20 p-8 rounded-3xl ">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <CurrencyEur className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold">Tariffe</h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-[#2a2a4a]/20">
                    <p className="text-gray-300 mb-2">Per i privati</p>
                    <p className="text-2xl font-bold">
                      30,00€ <span className="text-sm font-normal text-gray-400">+IVA</span>
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-[#2a2a4a]/20">
                    <p className="text-gray-300 mb-2">Per le aziende</p>
                    <p className="text-2xl font-bold">
                      50,00€ <span className="text-sm font-normal text-gray-400">+IVA</span>
                    </p>
                  </div>

                  <div className="flex items-start gap-3 mt-6 bg-white/5 p-4 rounded-xl">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mt-1">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Orari: 10:00 / 19:00</p>
                      <p className="text-gray-400 text-sm">dal lunedì al sabato (escluso festivi)</p>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-400 bg-white/5 p-4 rounded-xl">
                    <p>
                      L&apos;uscita del tecnico è gratis, pertanto non viene aggiunta al costo orario. Per le tipologie di
                      interventi che richiedono molte ore, Fast Riparazione Pc crea un preventivo a doc per i suoi
                      clienti, sia privati che aziende, in base alla richiesta con un costo fisso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main >
    </>
  )
}

export default App
