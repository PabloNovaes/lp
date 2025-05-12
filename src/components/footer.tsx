import logo from "@/assets/full-logo.svg"
import { Copyright, Envelope, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react"
import { Button } from "./ui/button"


export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="p-4">
            <div className="rounded-4xl border border-ring/20 bg-slate-950/10 backdrop-blur-3xl mx-auto max-w-5xl p-8 grid gap-5">
                <div className="grid grid-cols-1 gap-8 text-center sm:text-left sm:grid-cols-2">
                    <div className="space-y-3">
                        <div className="text-lg font-regular flex flex-col items-center sm:items-start gap-2">
                            <img src={logo} className="h-8" alt="" />
                        </div>
                    </div>
                    <div className="space-y-3 justify-end flex flex-col">
                        <ul className="flex justify-center sm:justify-end space-x-2 text-sm">
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
                                        <WhatsappLogo weight="duotone" className="size-6" />
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
                                        <InstagramLogo weight="duotone" className="size-6" />
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
                                        href="mailto:fastriparazionepc@gmail.com "
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Inviaci una email"
                                    >
                                        <Envelope weight="duotone" className="size-6" />
                                    </a>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-ring/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto">
                        <Copyright size={16} />
                        <span>{currentYear} Fast Reparazione PC</span>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 text-center w-full sm:w-auto">
                        <span>P.IVA: 11610820968</span>
                        <span className="hidden sm:inline">|</span>
                        <span>DE AGUIAR INVEST</span>
                    </div>
                </div>
                {/* <span className="text-xs text-muted-foreground w-full text-center">Created by <a target="_blank" className="underline" href="https://instagram.com/pablo.ng.macedo">@pablo.ng.macedo</a></span> */}
            </div>
        </footer>
    )
}