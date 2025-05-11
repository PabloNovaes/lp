import { Envelope, GearFine, House, Info, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { ChatCircleText } from "@phosphor-icons/react/dist/ssr";

export const nav_links = [
    { label: "Casa", icon: House, href: "#hero" },
    { label: "Servizi", icon: GearFine, href: "#services" },
    { label: "Informazioni", icon: Info, href: "#about" },
    { label: "Contattaci", icon: ChatCircleText, href: "#contact" },
]

export const socialLinks = [
    { label: "WhatsApp", icon: WhatsappLogo, href: "#" },
    { label: "Email", icon: Envelope, href: "#" },
    { label: "Instagram", icon: InstagramLogo, href: "#" },
]
