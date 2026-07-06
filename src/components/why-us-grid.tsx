import { cn } from "@/lib/utils";
import {
  Buildings,
  Clock,
  Cpu,
  Database,
  Headset,
  Receipt,
  ShieldCheck,
  SlidersHorizontal,
  type Icon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Tile {
  icon: Icon;
  title: string;
  description: string;
  span?: string;
  featured?: boolean;
  decoration?: ReactNode;
}

const tiles: Tile[] = [
  {
    icon: ShieldCheck,
    title: "Tecnici qualificati e certificati",
    description:
      "Ogni intervento è seguito da personale con esperienza verificata su hardware, software, reti e sistemi aziendali.",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
    decoration: (
      <>
        <div className="absolute -left-12 -bottom-12 size-52 rounded-full border border-sky-500/10 pointer-events-none" />
        <div className="absolute -left-4 -bottom-4 size-32 rounded-full border border-sky-500/10 pointer-events-none" />
        <div className="absolute left-10 bottom-10 size-1.5 rounded-full bg-sky-400/50 pointer-events-none" />
        <div className="absolute -right-6 -top-6 w-40 rotate-6 rounded-xl border border-sky-500/20 bg-white/[0.04] backdrop-blur-sm p-3 shadow-lg shadow-sky-950/40 pointer-events-none transition-transform duration-500 group-hover:rotate-3 group-hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="flex items-center justify-center size-6 rounded-md bg-sky-500/20">
              <ShieldCheck weight="fill" className="size-3.5 text-sky-400" />
            </div>
            <div className="h-1.5 w-14 rounded-full bg-white/15" />
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10 mb-1.5" />
          <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
        </div>
      </>
    ),
  },
  {
    icon: Receipt,
    title: "Preventivi chiari e trasparenti",
    description:
      "Sai sempre il costo prima di iniziare, senza sorprese in fattura.",
    span: "lg:col-span-2",
    featured: true,
    decoration: (
      <>
        <div className="absolute right-8 top-3 w-24 rotate-[-8deg] rounded-lg border border-sky-500/15 bg-sky-950/40 backdrop-blur-sm p-2.5 shadow-lg shadow-sky-950/40 pointer-events-none transition-transform duration-500 group-hover:rotate-[-4deg]">
          <Receipt weight="duotone" className="size-4 text-sky-400 mb-1.5" />
          <div className="h-1 w-full rounded-full bg-white/10 mb-1" />
          <div className="h-1 w-2/3 rounded-full bg-white/10" />
        </div>
        <div className="absolute -right-3 -top-8 w-28 rotate-[10deg] rounded-lg border border-sky-500/20 bg-white/[0.04] backdrop-blur-sm p-2.5 shadow-lg shadow-sky-950/40 pointer-events-none transition-transform duration-500 group-hover:rotate-[6deg]">
          <div className="h-1.5 w-full rounded-full bg-white/15 mb-1.5" />
          <div className="h-1.5 w-2/3 rounded-full bg-white/10 mb-1.5" />
          <div className="h-4 w-10 rounded-md bg-sky-500/20" />
        </div>
      </>
    ),
  },
  {
    icon: Clock,
    title: "Intervento rapido a domicilio",
    description:
      "Rispondiamo entro poche ore dalla chiamata, senza farti perdere tempo prezioso.",
  },
  {
    icon: Buildings,
    title: "Assistenza per privati e aziende",
    description:
      "Stessa cura e competenza, sia per un singolo PC che per l'intero ufficio.",
  },
  {
    icon: Cpu,
    title: "Supporto hardware e software",
    description:
      "Diagnosi dei guasti, riparazioni e installazione o configurazione dei programmi.",
  },
  {
    icon: Database,
    title: "Esperienza su server, NAS e reti",
    description:
      "Gestiamo infrastrutture di rete, storage condiviso e backup con affidabilità.",
  },
  {
    icon: Headset,
    title: "Assistenza remota e in presenza",
    description:
      "Ti aiutiamo da remoto quando possibile, oppure veniamo direttamente da te.",
  },
  {
    icon: SlidersHorizontal,
    title: "Soluzioni personalizzate",
    description:
      "Ogni proposta è calibrata sulle tue esigenze reali, mai un pacchetto standard.",
  },
];

export function WhyUsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-flow-dense gap-3">
      {tiles.map(
        ({ icon: Icon, title, description, span, featured, decoration }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
            whileHover={{ y: -3 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl border p-5 flex flex-col justify-between transition-colors duration-300",
              featured
                ? "bg-gradient-to-br from-sky-950/60 via-sky-950/20 to-transparent border-sky-500/25 hover:border-sky-500/45"
                : "bg-white/[0.03] border-white/8 hover:border-sky-500/25 hover:bg-white/[0.045]",
              span,
            )}>
            {/* subtle grid texture on featured tiles */}
            {featured && (
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                  maskImage:
                    "radial-gradient(ellipse 80% 60% at 100% 0%, black, transparent)",
                }}
              />
            )}

            {/* ambient glow */}
            <div
              className={cn(
                "pointer-events-none absolute -right-8 -top-8 rounded-full blur-2xl transition-opacity duration-300",
                featured
                  ? "size-32 bg-sky-500/20 opacity-100"
                  : "size-24 bg-sky-500/10 opacity-0 group-hover:opacity-100",
              )}
            />

            {/* per-tile decoration (floating mockups, rings...) */}
            {decoration}

            {/* faint icon watermark for non-featured tiles */}
            {!featured && (
              <Icon
                weight="duotone"
                className="pointer-events-none absolute -right-3 -bottom-3 size-20 text-sky-500/[0.07] rotate-[-8deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110"
              />
            )}

            <div className="relative z-10">
              <div
                className={cn(
                  "relative flex items-center justify-center rounded-xl shrink-0 mb-4 transition-colors duration-300",
                  featured
                    ? "size-12 bg-sky-500/15 border border-sky-500/30 text-sky-400 group-hover:bg-sky-500/20"
                    : "size-9 bg-sky-950/70 border border-sky-500/20 text-sky-400 group-hover:border-sky-500/35",
                )}>
                <Icon
                  weight={featured ? "duotone" : "bold"}
                  className={featured ? "size-6" : "size-4"}
                />
              </div>

              <h3
                className={cn(
                  "font-bold text-white tracking-tight",
                  featured ? "text-lg mb-2" : "text-sm mb-1.5",
                )}>
                {title}
              </h3>
              <p
                className={cn(
                  "text-white/45 leading-relaxed",
                  featured ? "text-sm" : "text-xs",
                )}>
                {description}
              </p>
            </div>
          </motion.div>
        ),
      )}
    </div>
  );
}
