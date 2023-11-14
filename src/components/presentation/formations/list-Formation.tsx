import { formationFieldType } from "../../../types/formation-fields";

export const ProgrammationList: formationFieldType[] = [
    {
        id: 1,
        name: "Python",
        description: ["Data-science", "Réseau de neurone convolutif (Tensorflow)"]
    }, 
    {
        id: 2,
        name: "C",
        description: ["structures de données", "pointeurs", "listes chainéess", "piles", "files"]
    }, 
    {
        id: 3,
        name: "Scala",
        description: ["POO", "Programmation fonctionnelle"]
    },
    {
        id: 4,
        name: "JavaScrip",
        description: ["fonctions", "array", "boucles", "spread operator", "requetes api", "resolution de promesse"]
    },
    {
        id: 5,
        name: "Java Swing",
        description: ["création d'interface avec Frame, Label, Button, ..."]
    }
]

export const ReseauList : formationFieldType[] = [
    {
        id: 6,
        name: "Concepts général des réseau & architecture TPC/IP sur gns3 ",
        description: ["Topologie", "classification","transmission", "modéle OSI", "Standard TCP/IP", "Carte réseau", "concetrateur (hub)", "commutateur (Switch)", "Routeur", "Recepteur", "protocoles (Ethernet, IP, ARP, ICMP, TCP, UDP, ...)"]
    },
    {
        id: 7,
        name: "Services réseaux",
        description: ["DNS", "FTP", "HTTP", "SMTP", "SAMBA", "services de messagerie (SMTP, rouncude)", "Téléphonie sur IP (TOIP, Asterisk)", "..." ]
    },
    {
        id: 8,
        name: "Administration & securité d'un réseau local",
        description: ["NAT Statique", "Nat Dynamique", "PAT", "Redirection de port", "Proxy Squid", "Zone démilitarisée (DMZ)", "VPN (StrongsWan, OpenVPN, Wireguard)"]
    }
]

export const BasesDeDonneeList : formationFieldType[] = [
    {
        id: 9,
        name: "SQL",
        description: ["Structures de données relationnelles", "Types de requêtes", "Joins et sous-requêtes", "union", "transactions"]
    }
]

export const DevWebList: formationFieldType[] = [
    {
        id: 10,
        name: "Application Web",
        description: ["html", "CSS", "JavaScript"]
    },
    {
        id: 11,
        name: "Front-end",
        description: ["React", "Next", "Bootstrap", "TailwindCSS"]
    },
    {
        id: 12,
        name: "Back-end",
        description: ["NodeJS", "Express", "MongoDB", "Flask"]
    }
]