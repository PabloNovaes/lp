import { Copyright, Envelope, InstagramLogo, Lightning, WhatsappLogo } from "@phosphor-icons/react"
import { Button } from "./ui/button"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-ring/10 bg-slate-950/10 backdrop-blur-3xl">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-8 text-center sm:text-left sm:grid-cols-3 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="text-lg font-regular flex flex-col items-center sm:items-start gap-2">
                            <Lightning size={24} weight="fill" />
                            <h2 className="font-bold">iFast Reparazione PC</h2>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Vendita di iPhone, Notebook e accessori <br /> in tutta Italia.
                        </p>
                    </div>
                    <div className="space-y-3 justi flex flex-col">
                        <h2 className="text-lg font-semibold">Contatti</h2>
                        <ul className="flex justify-center sm:justify-start space-x-2 text-sm">
                            <li>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    asChild
                                    className="w-10 h-10 border-slate-500/10 rounded-full bg-slate-800/20 hover:bg-[#46c254] hover:text-white transition-all duration-300"
                                >
                                    <a
                                        href="https://wa.me/393338343528"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Contattaci su WhatsApp"
                                    >
                                        <WhatsappLogo weight="duotone" size={24} />
                                    </a>
                                </Button>
                            </li>
                            <li>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    asChild
                                    className="w-10 h-10 border-slate-500/10 rounded-full bg-slate-800/20 hover:bg-gradient-to-b from-[#833ab4] via-[#fd1d1d]/90 to-[#fcb045] hover:text-white transition-all duration-300"
                                >
                                    <a
                                        href="https://www.instagram.com/ifaststore_fastriparazione/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Seguici su Instagram"
                                    >
                                        <InstagramLogo weight="duotone" size={24} />
                                    </a>
                                </Button>
                            </li>
                            <li>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    asChild
                                    className="w-10 h-10 border-slate-500/10 rounded-full bg-slate-800/20 hover:bg-[#e34134] hover:text-white transition-all duration-300"
                                >
                                    <a
                                        href="mailto:info@ifaststore.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Inviaci una email"
                                    >
                                        <Envelope weight="duotone" size={24} />
                                    </a>
                                </Button>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="space-y-3 flex flex-col justify-center">
                        <h2 className="text-lg font-semibold">Informazioni Legali</h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/use-terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                    Termini di Utilizzo
                                </a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                    Politica sulla Privacy
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="mt-8 pt-8 border-t border-ring/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto">
                        <Copyright size={16} />
                        <span>{currentYear} iFast Reparazione PC</span>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 text-center w-full sm:w-auto">
                        <span>P.IVA: 11610820968</span>
                        <span className="hidden sm:inline">|</span>
                        <span>DE AGUIAR INVEST</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}