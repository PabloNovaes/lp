import { Clock01Icon, ShieldIcon, Tick01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";

const guarantees = [
  {
    icon: ShieldIcon,
    title: "Preventivo chiaro, senza sorprese",
    description: "Ti diciamo sempre il costo prima di intervenire, nessun costo nascosto.",
  },
  {
    icon: Clock01Icon,
    title: "Tempo di intervento < 2h",
    description: "Interveniamo rapidamente a Milano e provincia, anche in giornata.",
  },
  {
    icon: Tick01Icon,
    title: "Tecnici qualificati e certificati",
    description: "Ogni intervento è seguito da un tecnico con esperienza verificata.",
  },
];

export function PriceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-black/20 backdrop-blur-3xl border border-white/10 p-8 rounded-3xl h-full flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-1.5">Il nostro impegno</h2>
        <p className="text-sm text-white/45 leading-relaxed">
          Quello che puoi aspettarti ogni volta che ci contatti.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {guarantees.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex items-start gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/8">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
              <HugeiconsIcon icon={Icon} className="h-4.5 w-4.5" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white/85 mb-0.5">{title}</p>
              <p className="text-white/45 text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href={`https://wa.me/393338343528?text=${encodeURIComponent("Buongiorno, ho trovato il vostro sito web e desidero ricevere ulteriori informazioni.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full text-center px-6 py-3 rounded-xl bg-white/6 border border-white/12 hover:bg-white/10 text-white/80 text-sm font-medium transition-colors duration-200">
        Scrivici su WhatsApp →
      </a>
    </motion.div>
  );
}
