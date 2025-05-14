import logo from "@/assets/logo.svg";
import mockup from "@/assets/mockup.svg";
import { ChatCircleDots, Package, Star } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { BentoCard, BentoGrid } from "./components/magicui/bento-grid";
import { defaultItemAnimationVariants, TextAnimate } from './components/magicui/text-animate';
import { NavMenu } from "./components/nav-menu";
import { cn } from "./lib/utils";

import browsers from "@/assets/browsers.svg";
import currency from "@/assets/currency.svg";
import gear from "@/assets/gear.svg";
import { AllServiceSection } from "./components/all-services-section";
import { ContactForm } from "./components/contact";
import { ContactButton } from "./components/contact-button";
import { Footer } from "./components/footer";
import { PriceCard } from "./components/price-card";
import { nav_links } from "./constants";


const features = [
  {
    imageIcon: browsers,
    name: "Creazione Siti Web",
    description: "Creiamo il tuo Sito da Zero, Siti Web su Misura, e-commerce. Ottimizzati per i motori di ricerca.",
    href: "https://wa.me/393338343528?text=Ciao%2C%20vorrei%20saperne%20di%20pi%C3%B9%20sul%20servizio%20di%20Creazione%20Siti%20Web.",
    cta: "Richiedere il servizio",
  },
  {
    imageIcon: gear,
    name: "Riparazione & Assistenza",
    description: "Offriamo assistenza e riparazione pc a domicilio sia a privati che aziende in tutto il territorio di Milano.",
    href: "https://wa.me/393338343528?text=Ciao%2C%20vorrei%20saperne%20di%20pi%C3%B9%20sul%20servizio%20di%20Riparazione%20e%20Assistenza.",
    cta: "Richiedere il servizio",
  },
  {
    imageIcon: currency,
    name: "Vendita iPhone/PC",
    description: "Abbiamo il nostro e-commerce per la vendita di prodotti informatici come iPhone, computer e molto altro, tutto a un ottimo prezzo.",
    href: "https://wa.me/393338343528?text=Ciao%2C%20vorrei%20saperne%20di%20pi%C3%B9%20sul%20servizio%20di%20Vendita%20iPhone%2FPC.",
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
    once={true}>
    {children}
  </TextAnimate>
)

function App() {

  return (
    <>
      {/* Background layers */}
      {/* <div className="fixed inset-0 w-full h-full m-auto blur-[100px]">
        <div className="fixed left-0 top-0 w-full h-full bg-black scale-[.8]">
          <div className="blob rounded-full" />
        </div>
      </div> */}
      <div className='bg-sky-800 blur-[130px] sm:blur-[180px] size-[250px] sm:size-[400px] rounded-full -left-20 -top-20 fixed'></div>
      <div className='bg-sky-800 blur-[130px] sm:blur-[180px] size-[250px] sm:size-[400px] rounded-full -right-20 -bottom-20 fixed'></div>

      <div className="fixed left-0 bottom-0 w-full h-screen bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-repeat bg-[length:128px] opacity-[0.09] rounded-none" />
      {/* Background layers */}

      <ContactButton />

      <main className="relative z-20 flex flex-col ">
        <NavMenu navLinks={nav_links} />

        {/* Hero Section */}
        <section id="hero" className="relative flex flex-col items-center gap-10 pt-[88px] mx-auto h-svh sm:px-20 text-white overflow-hidden">
          <AnimatePresence>
            <div className="grid gap-4 text-center px-8">
              <motion.div
                variants={defaultItemAnimationVariants.blurInUp.item}
                initial={{ ...defaultItemAnimationVariants.blurInUp.item["hidden"], y: 30 }}
                animate={{ ...defaultItemAnimationVariants.blurInUp.item["show"], transition: { delay: .15 } }}
                className="mx-auto mb-2">
                <img src={logo} alt="" className="h-8 mx-auto" />
              </motion.div>
              <TextAnimate
                className="font-medium text-[30px] leading-[32px] sm:text-4xl sm:leading-[38px] lg:text-5xl lg:leading-[44px] tracking-[-1px] max-w-[680px] [&_span]:bg-gradient-to-b from-neutral-400 to-black"
                animation="blurInUp"
                delay={0.4}
                as="h1"
                by="word"
                once={true}>
                Assistenza e Riparazioni Computer a Milano
              </TextAnimate>
              <TextAnimate
                className="text-zinc-300 text-md lg:text-xl lg:leading-[20px] tracking-[-1px] max-w-[500px] mx-auto"
                animation="blurInUp"
                delay={0.6}
                by="word"
                once={true}>
                Fast Riparazione Pc nasce con l’obiettivo di offrire riparazione e assistenza pc a domicilio a Milano a Privati e Aziende.
              </TextAnimate>
            </div>

            <motion.div
              variants={defaultItemAnimationVariants.blurInUp.container}
              className="flex justify-center items-end h-full">
              <motion.img
                src={mockup}
                alt=""
                variants={defaultItemAnimationVariants.blurInUp.item}
                initial={{ ...defaultItemAnimationVariants.blurInUp.item["hidden"], y: 30 }}
                animate={{ ...defaultItemAnimationVariants.blurInUp.item["show"], transition: { delay: .65 } }}
                className="z-20 h-full pl-[24px] drop"
                style={{
                  maskImage: "linear-gradient(to bottom,rgb(0, 0, 0) 50%,rgba(255, 255, 255, 0))",
                  filter: "drop-shadow(10px 10px 10px white)"
                }}
              />
            </motion.div>

          </AnimatePresence>
        </section>

        {/* Divider */}
        <div className="w-full max-w-5xl h-px mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Services Section */}
        <section id="services" className="relative max-w-5xl grid p-8 max-sm:py-16 min-h-svh mx-auto border-t border-ring/10 rounded-2xl pb-10 overflow-hidden">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="flex w-fit items-center gap-1.5 p-1 px-1.5 pr-2 rounded-full bg-preset text-xs">
                <Package weight="fill" size={16} /> Servizi Principali
              </div>
              <TextAnimate
                className="text-3xl font-medium text-gray-100 max-w-[820px] leading-[32px] lg:text-4xl sm:leading-[38px] tracking-[-1px] [&_span]:bg-gradient-to-b from-neutral-400 to-black"
                animation="blurInUp"
                as="h3"
                delay={0.3}
                by="word"
                once={true}>
                Hai problemi con il tuo computer? Fast Riparazione Pc ha la soluzione al tuo problema.
              </TextAnimate>
              <TextAnimate
                className="text-gray-300/90 text-md font-normal sm:text-lg tracking-[-1px] max-w-[680px]"
                animation="blurInUp"
                delay={0.6}
                as="h3"
                by="word"
                once={true}>
                Con un’esperienza di ben 11 anni nel campo, e dispone dei migliori tecnici informatici, Offrendo un servizio a 360°, con un ottimo rapporto qualità prezzo.
              </TextAnimate>
            </div>
            <BentoGrid className="lg:grid-cols-3">
              {features.map((feature) => (
                <BentoCard
                  key={feature.name}
                  {...feature}
                  className="bg-black/20 backdrop-blur-3xl border border-ring/20 rounded-4xl [&_h3]:text-white [&_p]:text-white/70"
                />
              ))}
            </BentoGrid>
          </div>
        </section>
        <section id="all-services" className="relative max-w-5xl grid p-8 max-sm:py-16 min-h-svh mx-auto border-t border-ring/10 rounded-2xl pb-10 overflow-hidden">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="flex w-fit items-center gap-1.5 p-1 px-1.5 pr-2 rounded-full bg-preset text-xs">
                <Package weight="fill" size={16} /> Tutti i servizi
              </div>
              <TextAnimate
                className="text-3xl font-medium text-gray-100 max-w-[820px] leading-[32px] lg:text-4xl sm:leading-[38px] tracking-[-1px] [&_span]:bg-gradient-to-b from-neutral-400 to-black"
                animation="blurInUp"
                as="h3"
                delay={0.3}
                by="word"
                once={true}>
                Tutti i nostri servizi informatici
              </TextAnimate>
              <TextAnimate
                className="text-gray-300/90 text-md font-normal sm:text-lg tracking-[-1px] max-w-[680px]"
                animation="blurInUp"
                delay={0.6}
                as="h3"
                by="word"
                once={true}>
                Dalla formattazione del sistema alla riparazione hardware, offriamo soluzioni complete e personalizzate per ogni esigenza. Scopri tutti i nostri servizi professionali pensati per privati e aziende.
              </TextAnimate>
            </div>
            <AllServiceSection />

          </div>
        </section>

        {/* Divider */}
        <div className="w-full max-w-5xl h-px mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* About Section */}
        <section id="about" className="max-w-5xl p-8 max-sm:py-16 sm:h-svh grid place-content-center mx-auto w-full border-t border-ring/10 rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex w-fit items-center gap-1 p-1 px-1.5 pr-2 text-xs bg-preset rounded-full">
              <Star weight="fill" size={14} /> Chi siamo
            </div>
            <TextAnimate
              className="text-3xl font-medium text-gray-100 max-w-[820px] leading-[32px] lg:text-4xl sm:leading-[38px] tracking-[-1px] [&_span]:bg-gradient-to-b from-neutral-400 to-black"
              animation="blurInUp"
              as="h3"
              delay={0.3}
              by="word"
              once={true}>
              Scopri di più su chi siamo
            </TextAnimate>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-2 text-start">
              <MotionText className="text-md" delay={0.4}>
                Fast Riparazione Pc nasce con l’obiettivo di offrire riparazione PC e assistenza a domicilio su tutto il territorio di Milano, sia a privati che ad aziende.
              </MotionText>
              <MotionText className="text-md" delay={0.8}>
                Vantiamo un’esperienza di ben 7 anni e disponiamo dei migliori tecnici informatici specializzati, che svolgono un’eccellente assistenza direttamente a domicilio.
              </MotionText>
              <MotionText className="text-md" delay={1.2}>
                Offriamo un servizio a 360°, con un ottimo rapporto qualità-prezzo. Lavoriamo con tutte le marche e i modelli disponibili sul mercato, svolgendo assistenza e riparazione hardware e software, sia per Computer che per Mac, sempre a domicilio.
              </MotionText>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full max-w-5xl h-px mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Contact Section */}
        <section id="contact" className="max-w-5xl p-8 max-sm:py-16 grid place-content-center mx-auto w-full border-t border-ring/10 rounded-2xl min-h-svh">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex w-fit items-center gap-1 p-1 px-1.5 pr-2 text-xs bg-preset rounded-full">
                <ChatCircleDots weight="fill" size={14} /> Contattaci
              </div>
              <TextAnimate
                className="text-3xl font-medium text-gray-100 max-w-[820px] leading-[32px] lg:text-4xl sm:leading-[38px] tracking-[-1px] [&_span]:bg-gradient-to-b from-neutral-400 to-black"
                animation="blurInUp"
                as="h3"
                delay={0.3}
                by="word"
                once={true}>
                Scopri di più su chi siamo
              </TextAnimate>
              <div className="grid gap-4 sm:gap-2 text-start">
                <MotionText className="text-md" delay={0.4}>
                  Avete domande? Non esitate a contattarci direttamente. Il nostro team ti contatterà per aiutarti.
                </MotionText>
                <ContactForm />
              </div>
            </div>

            <PriceCard />
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default App
