import {
    Activity01Icon,
    ArrowReloadHorizontalIcon,
    Bug01Icon,
    Building02Icon,
    Chat01Icon,
    CircuitBoardIcon,
    CloudUploadIcon,
    ComputerDesk01Icon,
    CpuIcon,
    Database01Icon,
    Fan01Icon,
    HardDriveIcon,
    HeadphonesIcon,
    Home01Icon,
    InformationCircleIcon,
    InstagramIcon,
    LaptopIcon,
    LockIcon,
    Mail01Icon,
    Mail02Icon,
    MessageMultiple01Icon,
    MonitorDotIcon,
    Plug01Icon,
    PreferenceHorizontalIcon,
    Search01Icon,
    Setting06Icon,
    ServerStack01Icon,
    ShieldIcon,
    SmartPhone01Icon,
    ThermometerIcon,
    ToolsIcon,
    WhatsappIcon,
    Wifi01Icon,
    Wrench01Icon,
} from "@hugeicons/core-free-icons";

export const nav_links = [
  { label: "Home", icon: Home01Icon, href: "#hero" },
  { label: "Servizi", icon: Setting06Icon, href: "#services" },
  { label: "Informazioni", icon: InformationCircleIcon, href: "#about" },
  { label: "Come Funziona", icon: Wrench01Icon, href: "#how-it-works" },
  { label: "Contattaci", icon: Chat01Icon, href: "#contact" },
];

export const socialLinks = [
  { label: "WhatsApp", icon: WhatsappIcon, href: "#" },
  { label: "Email", icon: Mail01Icon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
];

export const services = [
  // Riparazioni Hardware
  {
    title: "Sostituzione SSD e Hard Disk",
    description:
      "Sostituzione o upgrade di hard disk e SSD per migliorare velocità e affidabilità del sistema.",
    category: { label: "Riparazioni Hardware", value: "hardware_repairs" },
    icon: HardDriveIcon,
  },
  {
    title: "Upgrade RAM",
    description:
      "Espansione della memoria RAM per migliorare le prestazioni del computer.",
    category: { label: "Riparazioni Hardware", value: "hardware_repairs" },
    icon: CpuIcon,
  },
  {
    title: "Riparazione schede madri",
    description:
      "Diagnosi e riparazione di schede madri danneggiate o malfunzionanti.",
    category: { label: "Riparazioni Hardware", value: "hardware_repairs" },
    icon: CircuitBoardIcon,
  },
  {
    title: "Sostituzione alimentatori",
    description:
      "Sostituzione di alimentatori guasti o non idonei alle esigenze del sistema.",
    category: { label: "Riparazioni Hardware", value: "hardware_repairs" },
    icon: Plug01Icon,
  },
  {
    title: "Riparazione notebook",
    description:
      "Assistenza completa su portatili: display, tastiere, connettori e componenti interni.",
    category: { label: "Riparazioni Hardware", value: "hardware_repairs" },
    icon: LaptopIcon,
  },
  {
    title: "Sostituzione display e tastiere",
    description:
      "Sostituzione di schermi rotti e tastiere danneggiate su notebook e desktop.",
    category: { label: "Riparazioni Hardware", value: "hardware_repairs" },
    icon: MonitorDotIcon,
  },
  {
    title: "Pulizia interna e manutenzione",
    description:
      "Pulizia professionale dei componenti interni per prevenire surriscaldamenti e guasti.",
    category: { label: "Riparazioni Hardware", value: "hardware_repairs" },
    icon: Fan01Icon,
  },
  // Assistenza Software
  {
    title: "Installazione Windows",
    description:
      "Installazione pulita e configurazione completa di Windows su qualsiasi PC o notebook.",
    category: { label: "Assistenza Software", value: "software" },
    icon: ComputerDesk01Icon,
  },
  {
    title: "Configurazione macOS",
    description:
      "Configurazione e ottimizzazione di macOS per Mac e MacBook di ogni generazione.",
    category: { label: "Assistenza Software", value: "software" },
    icon: MonitorDotIcon,
  },
  {
    title: "Aggiornamenti di sistema",
    description:
      "Gestione e installazione di aggiornamenti per mantenere il sistema sicuro e performante.",
    category: { label: "Assistenza Software", value: "software" },
    icon: ArrowReloadHorizontalIcon,
  },
  {
    title: "Installazione programmi",
    description:
      "Installazione e configurazione di software specifici per uso professionale o domestico.",
    category: { label: "Assistenza Software", value: "software" },
    icon: PreferenceHorizontalIcon,
  },
  {
    title: "Ottimizzazione prestazioni",
    description:
      "Analisi e ottimizzazione del sistema per migliorare velocità e reattività del PC.",
    category: { label: "Assistenza Software", value: "software" },
    icon: Setting06Icon,
  },
  {
    title: "Configurazione backup automatici",
    description:
      "Impostazione di soluzioni di backup automatico per proteggere i tuoi dati.",
    category: { label: "Assistenza Software", value: "software" },
    icon: CloudUploadIcon,
  },
  // Server Aziendali
  {
    title: "Installazione e configurazione server",
    description:
      "Installazione e setup completo di server fisici e virtuali per aziende di ogni dimensione.",
    category: { label: "Server Aziendali", value: "server" },
    icon: ComputerDesk01Icon,
  },
  {
    title: "Server Windows e Linux",
    description:
      "Gestione e manutenzione di server Windows Server e distribuzioni Linux enterprise.",
    category: { label: "Server Aziendali", value: "server" },
    icon: SmartPhone01Icon,
  },
  {
    title: "Virtualizzazione",
    description:
      "Implementazione di ambienti virtualizzati per ottimizzare le risorse hardware aziendali.",
    category: { label: "Server Aziendali", value: "server" },
    icon: ServerStack01Icon,
  },
  {
    title: "Active Directory",
    description:
      "Configurazione e gestione di Active Directory per il controllo centralizzato degli accessi.",
    category: { label: "Server Aziendali", value: "server" },
    icon: Building02Icon,
  },
  {
    title: "Backup centralizzati",
    description:
      "Soluzioni di backup centralizzato per proteggere tutti i dati aziendali in modo automatico.",
    category: { label: "Server Aziendali", value: "server" },
    icon: CloudUploadIcon,
  },
  {
    title: "Monitoraggio infrastruttura",
    description:
      "Monitoraggio continuo dell'infrastruttura IT per prevenire downtime e problemi critici.",
    category: { label: "Server Aziendali", value: "server" },
    icon: Activity01Icon,
  },
  // NAS & Storage
  {
    title: "Installazione NAS Synology e QNAP",
    description:
      "Installazione e configurazione professionale di dispositivi NAS Synology e QNAP.",
    category: { label: "NAS & Storage", value: "nas" },
    icon: Database01Icon,
  },
  {
    title: "Configurazione RAID",
    description:
      "Configurazione di array RAID per garantire ridondanza e protezione dei dati.",
    category: { label: "NAS & Storage", value: "nas" },
    icon: HardDriveIcon,
  },
  {
    title: "Cloud privato aziendale",
    description:
      "Creazione di cloud privato aziendale per archiviazione e condivisione sicura dei dati.",
    category: { label: "NAS & Storage", value: "nas" },
    icon: CloudUploadIcon,
  },
  {
    title: "Accesso remoto sicuro",
    description:
      "Configurazione di accesso remoto sicuro al NAS da qualsiasi dispositivo e posizione.",
    category: { label: "NAS & Storage", value: "nas" },
    icon: LockIcon,
  },
  {
    title: "Condivisione file in rete",
    description:
      "Configurazione di cartelle condivise e permessi per la collaborazione in rete.",
    category: { label: "NAS & Storage", value: "nas" },
    icon: MessageMultiple01Icon,
  },
  // Reti & Wi-Fi
  {
    title: "Configurazione router e firewall",
    description:
      "Configurazione professionale di router e firewall per una rete sicura ed efficiente.",
    category: { label: "Reti & Wi-Fi", value: "networking" },
    icon: Setting06Icon,
  },
  {
    title: "Installazione reti LAN",
    description:
      "Progettazione e installazione di reti cablate LAN per uffici e aziende.",
    category: { label: "Reti & Wi-Fi", value: "networking" },
    icon: Wrench01Icon,
  },
  {
    title: "Ottimizzazione reti Wi-Fi",
    description:
      "Analisi e ottimizzazione della rete Wi-Fi per eliminare zone d'ombra e migliorare le prestazioni.",
    category: { label: "Reti & Wi-Fi", value: "networking" },
    icon: Wifi01Icon,
  },
  {
    title: "VPN aziendali",
    description:
      "Configurazione di VPN sicure per il collegamento remoto alla rete aziendale.",
    category: { label: "Reti & Wi-Fi", value: "networking" },
    icon: LockIcon,
  },
  {
    title: "Cablaggio strutturato",
    description:
      "Realizzazione di cablaggio strutturato professionale per reti aziendali efficienti.",
    category: { label: "Reti & Wi-Fi", value: "networking" },
    icon: ThermometerIcon,
  },
  // Recupero Dati
  {
    title: "Recupero file cancellati",
    description:
      "Recupero professionale di file cancellati accidentalmente da qualsiasi supporto.",
    category: { label: "Recupero Dati", value: "data_recovery" },
    icon: ArrowReloadHorizontalIcon,
  },
  {
    title: "Recupero dati da SSD e Hard Disk",
    description:
      "Recupero dati da dispositivi di archiviazione danneggiati, formattati o guasti.",
    category: { label: "Recupero Dati", value: "data_recovery" },
    icon: HardDriveIcon,
  },
  {
    title: "Ripristino sistemi danneggiati",
    description:
      "Ripristino completo di sistemi operativi e ambienti danneggiati da guasti o errori.",
    category: { label: "Recupero Dati", value: "data_recovery" },
    icon: ToolsIcon,
  },
  {
    title: "Migrazione dati",
    description:
      "Trasferimento sicuro di dati tra dispositivi, sistemi operativi o ambienti cloud.",
    category: { label: "Recupero Dati", value: "data_recovery" },
    icon: SmartPhone01Icon,
  },
  // Sicurezza Informatica
  {
    title: "Rimozione virus e malware",
    description:
      "Rimozione completa di virus, malware, spyware e adware dal tuo sistema.",
    category: { label: "Sicurezza Informatica", value: "security" },
    icon: Bug01Icon,
  },
  {
    title: "Installazione antivirus professionali",
    description:
      "Installazione e configurazione di soluzioni antivirus enterprise per la massima protezione.",
    category: { label: "Sicurezza Informatica", value: "security" },
    icon: ShieldIcon,
  },
  {
    title: "Protezione ransomware",
    description:
      "Implementazione di strategie avanzate per prevenire attacchi ransomware e proteggere i dati.",
    category: { label: "Sicurezza Informatica", value: "security" },
    icon: LockIcon,
  },
  {
    title: "Sicurezza email",
    description:
      "Configurazione di filtri antispam e protezione delle caselle di posta aziendali.",
    category: { label: "Sicurezza Informatica", value: "security" },
    icon: Mail02Icon,
  },
  {
    title: "Audit di sicurezza",
    description:
      "Analisi approfondita dell'infrastruttura IT per identificare vulnerabilità e rischi.",
    category: { label: "Sicurezza Informatica", value: "security" },
    icon: Search01Icon,
  },
  // Assistenza Aziendale
  {
    title: "Contratti di assistenza",
    description:
      "Contratti di assistenza IT personalizzati per garantire continuità operativa alla tua azienda.",
    category: { label: "Assistenza Aziendale", value: "business" },
    icon: Building02Icon,
  },
  {
    title: "Supporto remoto e on-site",
    description:
      "Assistenza tecnica sia da remoto che in presenza, disponibile per interventi urgenti.",
    category: { label: "Assistenza Aziendale", value: "business" },
    icon: HeadphonesIcon,
  },
  {
    title: "Consulenza tecnologica",
    description:
      "Consulenza IT per pianificare, aggiornare e ottimizzare l'infrastruttura tecnologica aziendale.",
    category: { label: "Assistenza Aziendale", value: "business" },
    icon: MessageMultiple01Icon,
  },
  {
    title: "Manutenzione programmata",
    description:
      "Interventi periodici di manutenzione preventiva per ridurre guasti e fermo macchina.",
    category: { label: "Assistenza Aziendale", value: "business" },
    icon: Setting06Icon,
  },
  {
    title: "Disaster Recovery",
    description:
      "Pianificazione e implementazione di strategie di Disaster Recovery per proteggere il business.",
    category: { label: "Assistenza Aziendale", value: "business" },
    icon: ArrowReloadHorizontalIcon,
  },
  {
    title: "Business Continuity",
    description:
      "Soluzioni per garantire la continuità operativa anche in caso di guasti o eventi critici.",
    category: { label: "Assistenza Aziendale", value: "business" },
    icon: Activity01Icon,
  },
];

export const serviceCategories = [
  { label: "Riparazioni Hardware", value: "hardware_repairs" },
  { label: "Assistenza Software", value: "software" },
  { label: "Server Aziendali", value: "server" },
  { label: "NAS & Storage", value: "nas" },
  { label: "Reti & Wi-Fi", value: "networking" },
  { label: "Recupero Dati", value: "data_recovery" },
  { label: "Sicurezza Informatica", value: "security" },
  { label: "Assistenza Aziendale", value: "business" },
];
