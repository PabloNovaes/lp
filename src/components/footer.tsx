import logo from "@/assets/full-logo.svg";
import {
    Copyright,
    Envelope,
    InstagramLogo,
    WhatsappLogo,
} from "@phosphor-icons/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* CTA Banner */}
      <section className="max-w-5xl px-6 pb-10 mx-auto w-full">
        <div className="relative rounded-3xl overflow-hidden border border-sky-500/20 bg-gradient-to-br from-sky-950/50 via-blue-950/30 to-transparent px-8 sm:px-16 py-14 text-center">
          {/* subtle inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(14,165,233,0.10),transparent)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold text-white tracking-[-1.5px] leading-tight">
              Hai bisogno di assistenza?
            </h2>
            <p className="text-white/45 text-base leading-relaxed max-w-md">
              Preventivo gratuito, senza impegno. Interveniamo a Milano e
              provincia, anche in giornata.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("section#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold transition-colors duration-200 cursor-pointer">
                Richiedi Intervento
              </a>
              <a
                href={`https://wa.me/393338343528?text=${encodeURIComponent("Buongiorno, ho trovato il vostro sito web e desidero ricevere ulteriori informazioni.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-2.5 rounded-full bg-white/6 border border-white/12 hover:bg-white/10 text-white/80 text-sm font-medium transition-colors duration-200">
                Scrivi su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="px-6 pb-6 max-w-5xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 border-t border-white/6">
          <img src={logo} className="h-6" alt="tecnicopcadomicilio.it" />
          <div className="flex items-center gap-1.5 text-xs text-white/25 text-center">
            <Copyright size={11} />
            <span>
              {currentYear} tecnicopcadomicilio.it — Assistenza Informatica a
              Domicilio Milano - P.IVA: 11610820968
            </span>
          </div>
          <ul className="flex gap-1.5">
            <li>
              <a
                href={`https://wa.me/393338343528?text=${encodeURIComponent("Buongiorno, ho trovato il vostro sito web e desidero ricevere ulteriori informazioni.")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center size-8 rounded-full bg-white/4 border border-white/8 text-white/35 hover:text-white/70 hover:bg-white/8 transition-all duration-200">
                <WhatsappLogo weight="duotone" className="size-3.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ifast_fastmilano/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center size-8 rounded-full bg-white/4 border border-white/8 text-white/35 hover:text-white/70 hover:bg-white/8 transition-all duration-200">
                <InstagramLogo weight="duotone" className="size-3.5" />
              </a>
            </li>
            <li>
              <a
                href="mailto:info@tecnicopcadomicilio.it"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex items-center justify-center size-8 rounded-full bg-white/4 border border-white/8 text-white/35 hover:text-white/70 hover:bg-white/8 transition-all duration-200">
                <Envelope weight="duotone" className="size-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
