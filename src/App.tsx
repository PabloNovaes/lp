import logo from "@/assets/logo.svg";
import mockup from "@/assets/mockup.svg";
import {
  ChatCircleDots,
  Package,
  ShieldCheck,
  Star,
  Wrench,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

import { NavMenu } from "./components/nav-menu";

import browsers from "@/assets/browsers.svg";
import currency from "@/assets/currency.svg";
import gear from "@/assets/gear.svg";
import { AllServiceSection } from "./components/all-services-section";
import { ContactForm } from "./components/contact";
import { ContactButton } from "./components/contact-button";
import { FadeIn } from "./components/fade-in";
import { Footer } from "./components/footer";
import { HowItWorks } from "./components/how-it-works";
import { PriceCard } from "./components/price-card";
import { TrustBar } from "./components/trust-bar";
import { WhyUsGrid } from "./components/why-us-grid";
import { nav_links } from "./constants";

const features = [
  {
    imageIcon: gear,
    name: "Riparazione PC & Assistenza Software",
    description:
      "Interveniamo direttamente a domicilio per risolvere qualsiasi problema hardware o software su computer desktop, workstation e notebook di ogni marca.",
    href: "https://wa.me/393338343528?text=Ciao%2C%20vorrei%20saperne%20di%20pi%C3%B9%20sul%20servizio%20di%20Riparazione%20PC.",
    cta: "Richiedere il servizio",
  },
  {
    imageIcon: browsers,
    name: "Server & NAS Aziendali",
    description:
      "Installazione, configurazione e manutenzione di server Windows/Linux e sistemi NAS Synology/QNAP per piccole e medie imprese.",
    href: "https://wa.me/393338343528?text=Ciao%2C%20vorrei%20saperne%20di%20pi%C3%B9%20sul%20servizio%20di%20Server%20e%20NAS.",
    cta: "Richiedere il servizio",
  },
  {
    imageIcon: currency,
    name: "Reti, Wi-Fi & Sicurezza",
    description:
      "Configurazione router, firewall e VPN aziendali. Protezione da virus, malware e ransomware per garantire la continuità operativa.",
    href: "https://wa.me/393338343528?text=Ciao%2C%20vorrei%20saperne%20di%20pi%C3%B9%20sul%20servizio%20di%20Reti%20e%20Sicurezza.",
    cta: "Richiedere il servizio",
  },
];

const heroStats = [
  { value: "10+", label: "Anni di esperienza" },
  { value: "500+", label: "Clienti serviti" },
  { value: "< 2h", label: "Tempo di intervento" },
];

function App() {
  return (
    <>
      {/* Background layers */}
      <div className="fixed inset-0 h-screen bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(14,165,233,0.16),transparent)]" />
      <div className="fixed left-0 bottom-0 w-full h-screen bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-repeat bg-[length:128px] opacity-[0.07] rounded-none" />
      {/* Background layers */}

      <ContactButton />

      <main className="relative z-20 flex flex-col ">
        <NavMenu navLinks={nav_links} />

        {/* Hero Section */}
        <section
          id="hero"
          className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-8 lg:gap-16 max-w-6xl w-full pt-[110px] pb-16 lg:pt-[88px] lg:pb-0 mx-auto min-h-svh px-6 sm:px-10 lg:px-8 text-white overflow-hidden">
          <div className="grid gap-4 text-left">
            <FadeIn as="div" delay={0.1} duration={0.5} className="mb-2">
              <img src={logo} alt="" className="h-8" />
            </FadeIn>
            <FadeIn
              as="h1"
              delay={0.2}
              duration={0.5}
              className="font-regular text-[36px] leading-10 sm:text-5xl sm:leading-13.5 lg:text-[58px] lg:leading-15 tracking-[-2px] max-w-175 mx-auto lg:mx-0">
              Assistenza Informatica a Domicilio Milano
            </FadeIn>
            <FadeIn
              as="p"
              delay={0.3}
              duration={0.5}
              className="text-zinc-400 text-sm sm:text-base lg:text-lg tracking-[-0.5px] max-w-120 mx-auto lg:mx-0 leading-relaxed">
              Tecnici informatici specializzati per privati, professionisti e
              aziende. Interventi rapidi direttamente presso la tua sede a
              Milano e provincia.
            </FadeIn>
            <FadeIn
              delay={0.4}
              duration={0.5}
              className="flex gap-3 justify-start sm:flex-wrap mt-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("section#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold transition-colors duration-200 cursor-pointer">
                Richiedi Intervento
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("section#services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-2.5 rounded-full bg-white/[0.07] border border-white/12 hover:bg-white/12 text-white/70 text-sm font-semibold transition-colors duration-200 cursor-pointer">
                Scopri i Servizi
              </a>
            </FadeIn>
            <FadeIn
              delay={0.5}
              duration={0.5}
              className="flex items-center justify-center lg:justify-start pt-4 mt-1 border-t border-white/8">
              {heroStats.map(({ value, label }, i) => (
                <div key={label} className="flex items-center">
                  {i > 0 && (
                    <span className="w-px h-7 bg-white/10 block mx-5 sm:mx-8" />
                  )}
                  <div className="flex flex-col items-center lg:items-start gap-0.5">
                    <span className="text-xl sm:text-2xl font-medium text-white tracking-tight tabular-nums">
                      {value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/40 tracking-widest uppercase">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>

          <FadeIn
            delay={0.25}
            duration={0.6}
            className="relative flex justify-center lg:justify-end items-end lg:items-center h-[340px] sm:h-[440px] lg:h-[560px]">
            <img
              src={mockup}
              alt=""
              className="z-20 h-full drop"
              style={{
                maskImage:
                  "linear-gradient(to bottom,rgb(0, 0, 0) 70%,rgba(255, 255, 255, 0))",
                filter: "drop-shadow(0px 4px 32px rgba(14, 165, 233, 0.22))",
              }}
            />
            <FadeIn
              delay={0.55}
              duration={0.45}
              className="hidden sm:flex z-30 absolute top-4 lg:top-10 left-0 lg:-left-6 items-center gap-2.5 bg-black/40 backdrop-blur-xl border border-white/12 rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] whitespace-nowrap">
              <div className="flex items-center justify-center size-8 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400 shrink-0">
                <ShieldCheck weight="fill" className="size-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-medium text-white leading-tight">
                  Tecnici certificati
                </p>
                <p className="text-[11px] text-white/45 leading-tight">
                  Milano e provincia
                </p>
              </div>
            </FadeIn>
          </FadeIn>
        </section>

        <TrustBar />

        {/* Services Section */}
        <section
          id="services"
          className="relative max-w-5xl px-6 py-24 mx-auto w-full">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-5 max-w-2xl">
              <div className="flex w-fit items-center gap-1.5 p-1 px-1.5 pr-2 rounded-full bg-preset text-xs">
                <Package weight="fill" size={16} /> Servizi Principali
              </div>
              <FadeIn
                className="text-3xl font-medium text-white leading-tight lg:text-[50px] lg:leading-none tracking-[-1.5px]"
                as="h2"
                delay={0.15}>
                Hai problemi con il computer, la rete o il server?
              </FadeIn>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-white/50 text-base leading-relaxed">
                Supporto tecnico hardware e software per PC, Mac, server, NAS e
                reti aziendali — direttamente a domicilio.
              </motion.p>
            </div>

            <div className="flex flex-col gap-3">
              {features.map(({ name, description, href }, i) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group flex items-center gap-5 sm:gap-8 p-5 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/8 hover:bg-sky-950/40 hover:border-sky-500/25 transition-all duration-300">
                  <span className="hidden sm:block text-7xl font-extrabold text-white/[0.04] select-none tabular-nums w-20 shrink-0 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-1.5 tracking-tight">
                      {name}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed">
                      {description}
                    </p>
                  </div>
                  <span className="text-white/20 group-hover:text-sky-400 transition-all duration-300 text-xl shrink-0 ml-2 group-hover:translate-x-1 inline-block">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        <section
          id="all-services"
          className="relative max-w-5xl px-6 py-24 mx-auto w-full">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-5 max-w-2xl">
              <div className="flex w-fit items-center gap-1.5 p-1 px-1.5 pr-2 rounded-full bg-preset text-xs">
                <Package weight="fill" size={16} /> Tutti i servizi
              </div>
              <FadeIn
                className="text-3xl font-medium text-white leading-tight lg:text-[50px] lg:leading-none tracking-[-1.5px]"
                as="h2"
                delay={0.15}>
                Tutti i nostri servizi
              </FadeIn>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-white/50 text-base leading-relaxed">
                Hardware, software, server, reti e sicurezza — soluzioni per
                privati e aziende a Milano. Scegli una categoria per vedere
                tutti i servizi disponibili.
              </motion.p>
            </div>
            <AllServiceSection />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-5xl px-6 py-24 mx-auto w-full">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="flex flex-col gap-5 max-w-lg">
                <div className="flex w-fit items-center gap-1 p-1 px-1.5 pr-2 text-xs bg-preset rounded-full">
                  <Star weight="fill" size={14} /> Perché Sceglierci
                </div>
                <FadeIn
                  className="text-3xl font-medium text-white leading-tight lg:text-[50px] lg:leading-none tracking-[-1.5px]"
                  as="h2"
                  delay={0.15}>
                  Perché noi?
                </FadeIn>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  className="text-white/50 text-base leading-relaxed">
                  Operiamo a Milano e provincia. Un unico punto di riferimento
                  per ogni esigenza informatica — a casa, in ufficio o in
                  azienda.
                </motion.p>
              </div>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("section#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.35 }}
                className="w-fit shrink-0 px-6 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium transition-colors duration-200 cursor-pointer">
                Richiedi Intervento →
              </motion.a>
            </div>

            <WhyUsGrid />
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="max-w-5xl px-6 py-24 mx-auto w-full">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-5 max-w-2xl">
              <div className="flex w-fit items-center gap-1 p-1 px-1.5 pr-2 text-xs bg-preset rounded-full">
                <Wrench weight="fill" size={14} /> Come Funziona
              </div>
              <FadeIn
                className="text-3xl font-medium text-white leading-tight lg:text-[50px] lg:leading-none tracking-[-1.5px]"
                as="h2"
                delay={0.15}>
                Dal contatto alla soluzione
              </FadeIn>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-white/50 text-base leading-relaxed">
                Un processo semplice e trasparente, pensato per farti
                risparmiare tempo.
              </motion.p>
            </div>
            <HowItWorks />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-5xl px-6 py-24 mx-auto w-full">
          <div className="flex flex-col gap-12">
            {/* Full-width heading */}
            <div className="flex flex-col gap-5">
              <div className="flex w-fit items-center gap-1 p-1 px-1.5 pr-2 text-xs bg-preset rounded-full">
                <ChatCircleDots weight="fill" size={14} /> Contattaci
              </div>
              <FadeIn
                className="text-3xl font-medium text-white leading-tight lg:text-[50px] lg:leading-none tracking-[-1.5px]"
                as="h2"
                delay={0.15}>
                Pronti ad aiutarti. Sempre.
              </FadeIn>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-white/50 text-base leading-relaxed max-w-2xl">
                Che si tratti di un computer lento, un server bloccato, una rete
                instabile o un NAS da configurare — siamo pronti ad aiutarti con
                assistenza professionale a domicilio.
              </motion.p>
            </div>

            {/* Form + Guarantees */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <ContactForm />
              <PriceCard />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
