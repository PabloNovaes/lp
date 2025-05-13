import { Clock, CurrencyEur } from "@phosphor-icons/react";

export function PriceCard() {
    return (

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
                        <p className="text-2xl font-medium">
                            40,00€ <span className="text-sm font-normal text-gray-400">+IVA</span>
                        </p>
                    </div>

                    <div className="bg-white/5 p-4 rounded-xl border border-[#2a2a4a]/20">
                        <p className="text-gray-300 mb-2">Per le aziende</p>
                        <p className="text-2xl font-medium">
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
    )
}
