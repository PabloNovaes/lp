import { ArrowCounterClockwise, BatteryWarning, ChatCircleText, ChatsCircle, Circuitry, CloudArrowUp, Cpu, Cursor, DesktopTower, Devices, Disc, DownloadSimple, Envelope, EnvelopeSimple, Fan, GameController, GearFine, HardDrive, House, Info, InstagramLogo, Keyboard, Monitor, Plug, Printer, ShieldCheck, SlidersHorizontal, Stethoscope, Thermometer, Toolbox, WhatsappLogo, Wind } from "@phosphor-icons/react";

export const nav_links = [
    { label: "Casa", icon: House, href: "#hero" },
    { label: "Servizi", icon: GearFine, href: "#services" },
    { label: "Tutti i servizi", icon: GearFine, href: "#all-services" },
    { label: "Informazioni", icon: Info, href: "#about" },
    { label: "Contattaci", icon: ChatCircleText, href: "#contact" },
]

export const socialLinks = [
    { label: "WhatsApp", icon: WhatsappLogo, href: "#" },
    { label: "Email", icon: Envelope, href: "#" },
    { label: "Instagram", icon: InstagramLogo, href: "#" },
]

export const services = [
    {
        title: "Formattazione del sistema",
        description: "Reinstalla e ottimizza il sistema operativo per migliorare le prestazioni.",
        category: { label: "Software & Sistema", value: "software_sistema" },
        icon: DesktopTower
    },
    {
        title: "Rimozione virus",
        description: "Elimina malware e virus dal tuo PC in modo sicuro ed efficace.",
        category: { label: "Software & Sistema", value: "software_sistema" },
        icon: ShieldCheck
    },
    {
        title: "Configurazione client di posta",
        description: "Imposta correttamente email personali o aziendali nei principali client.",
        category: { label: "Software & Sistema", value: "software_sistema" },
        icon: EnvelopeSimple
    },
    {
        title: "Configurazione programma",
        description: "Assistenza nella configurazione di software specifici per il tuo lavoro.",
        category: { label: "Software & Sistema", value: "software_sistema" },
        icon: SlidersHorizontal
    },
    {
        title: "Installazione programma",
        description: "Installazione sicura di programmi e applicazioni su misura.",
        category: { label: "Software & Sistema", value: "software_sistema" },
        icon: DownloadSimple
    },
    {
        title: "Consulenza software",
        description: "Consigli e soluzioni personalizzate per l’uso di software.",
        category: { label: "Software & Sistema", value: "software_sistema" },
        icon: ChatsCircle
    },
    {
        title: "Configurazione software periferiche (stampante, scanner...)",
        description: "Connetti e configura periferiche per il massimo della produttività.",
        category: { label: "Periferiche", value: "peripherals" },
        icon: Printer
    },
    {
        title: "Backup dati",
        description: "Proteggi i tuoi dati con backup automatizzati e sicuri.",
        category: { label: "Dati & Recupero", value: "data_recovery" },
        icon: CloudArrowUp
    },
    {
        title: "Ripristino del sistema",
        description: "Recupera il sistema in caso di errori o problemi critici.",
        category: { label: "Dati & Recupero", value: "data_recovery" },
        icon: ArrowCounterClockwise
    },
    {
        title: "Riparazione hardware/pezzi",
        description: "Sostituzione o riparazione di componenti danneggiati del PC.",
        category: { label: "Riparazioni Hardware", value: "hardware repairs" },
        icon: Toolbox
    },
    {
        title: "Pulizia hardware & cambio pasta termica",
        description: "Pulizia interna e sostituzione pasta termica per evitare surriscaldamento.",
        category: { label: "Manutenzione", value: "maintenance" },
        icon: Fan
    },
    {
        title: "Sostituzione / espansione memoria RAM",
        description: "Aumenta la RAM per migliorare la velocità del sistema.",
        category: { label: "Upgrade Hardware", value: "upgrade_hardware" },
        icon: Cpu
    },
    {
        title: "Sostituzione hard disk & SSD",
        description: "Aggiorna lo storage con SSD o sostituisci dischi guasti.",
        category: { label: "Upgrade Hardware", value: "upgrade_hardware" },
        icon: HardDrive
    },
    {
        title: "Sostituzione ventola",
        description: "Sostituisci ventole rumorose o non funzionanti.",
        category: { label: "Riparazioni Hardware", value: "hardware repairs" },
        icon: Wind
    },
    {
        title: "Sostituzione dissipatore",
        description: "Installa dissipatori più efficienti per migliorare la raffreddamento.",
        category: { label: "Riparazioni Hardware", value: "hardware repairs" },
        icon: Thermometer
    },
    {
        title: "Sostituzione processore",
        description: "Upgrade del processore per migliorare le prestazioni del sistema.",
        category: { label: "Upgrade Hardware", value: "upgrade_hardware" },
        icon: Circuitry
    },
    {
        title: "Sostituzione pannello LCD notebook (schermo LCD)",
        description: "Sostituisci schermi rotti o difettosi del notebook.",
        category: { label: "Riparazioni Notebook", value: "notebook_repairs" },
        icon: Monitor
    },
    {
        title: "Sostituzione tastiera notebook",
        description: "Ripara o sostituisci la tastiera del tuo portatile.",
        category: { label: "Riparazioni Notebook", value: "notebook_repairs" },
        icon: Keyboard
    },
    {
        title: "Sostituzione / riparazione trackpad",
        description: "Ripristina il trackpad per un uso fluido e preciso.",
        category: { label: "Riparazioni Notebook", value: "notebook_repairs" },
        icon: Cursor
    },
    {
        title: "Sostituzione lettore/masterizzatore PC",
        description: "Sostituisci lettori CD/DVD obsoleti o malfunzionanti.",
        category: { label: "Riparazioni Hardware", value: "hardware repairs" },
        icon: Disc
    },
    {
        title: "Cambio batteria CMOS desktop & notebook",
        description: "Mantieni l'orologio e le impostazioni di sistema attive con batteria nuova.",
        category: { label: "Manutenzione", value: "maintenance" },
        icon: BatteryWarning
    },
    {
        title: "Riparazione jack di alimentazione notebook",
        description: "Ripristina l’alimentazione del notebook con riparazione del connettore.",
        category: { label: "Riparazioni Notebook", value: "notebook_repairs" },
        icon: Plug
    },
    {
        title: "Assemblaggio computer desktop casa / ufficio",
        description: "Costruzione di PC su misura per esigenze domestiche o professionali.",
        category: { label: "Assemblaggio", value: "assembly" },
        icon: Devices
    },
    {
        title: "Assemblaggio computer gaming",
        description: "Progettiamo e assembliamo PC ad alte prestazioni per il gaming.",
        category: { label: "Assemblaggio", value: "assembly" },
        icon: GameController
    },
    {
        title: "Test / diagnosi hardware dei pezzi e componenti",
        description: "Verifica funzionalità e salute dei componenti hardware.",
        category: { label: "Diagnosi", value: "diagnosis" },
        icon: Stethoscope
    }
];


export const serviceCategories = [
    { label: "Software & Sistema", value: "software_sistema" },
    { label: "Diagnosi", value: "diagnosis" },
    { label: "Assemblaggio", value: "assembly" },
    { label: "Periferiche", value: "peripherals" },
    { label: "Manutenzione", value: "maintenance" },
    { label: "Dati & Recupero", value: "data_recovery" },
    { label: "Riparazioni Hardware", value: "hardware repairs" },
    { label: "Upgrade Hardware", value: "upgrade_hardware" },
    { label: "Riparazioni Notebook", value: "notebook_repairs" },
];

