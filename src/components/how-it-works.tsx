import {
  ChatCircleText,
  Headset,
  MagnifyingGlass,
  Wrench,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

const steps = [
  {
    icon: ChatCircleText,
    title: "Contatto",
    description:
      "Descrivi il problema al nostro tecnico via whatsapp, chiamata telefonica o form mail.",
  },
  {
    icon: MagnifyingGlass,
    title: "Diagnosi",
    description:
      "Analizziamo la situazione e individuiamo la soluzione più efficace.",
  },
  {
    icon: Wrench,
    title: "Intervento",
    description:
      "Risolviamo il problema a domicilio oppure da remoto, con preventivo chiaro.",
  },
  {
    icon: Headset,
    title: "Supporto",
    description:
      "Verifichiamo il corretto funzionamento e restiamo disponibili dopo l'intervento.",
  },
];

export function HowItWorks() {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="hidden lg:block absolute top-[27px] left-[12.5%] right-[12.5%] h-px section-divider" />
      {steps.map(({ icon: Icon, title, description }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="relative flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-sky-500/25 hover:bg-sky-950/20 transition-all duration-300">
          <div className="relative z-10 flex items-center justify-center size-11 rounded-xl bg-sky-950 border border-sky-500/25 text-sky-400 shrink-0">
            <Icon weight="bold" className="size-5" />
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="text-xs font-semibold text-sky-500/60 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-white tracking-tight">
                {title}
              </h3>
            </div>
            <p className="text-sm text-white/45 leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
