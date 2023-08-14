interface Project {
    title: string;
    description: string;
    image: string;
    className: string;
    datetm: string;
    mois: string;
}

export const adminReseau: Project[] = [
    {
        title: "Redirection de port",
        description: "Le réacheminement de port ...",
        image: "/assets/imgprojets/redirection-port.png",
        className: "w-full h-full",
        datetm: "2023",
        mois: "Juillet"
    },
    {
        title: "Proxy Squid",
        description: "Le serveur proxy Squid est un proxy Web HTTP ...",
        image: "/assets/imgprojets/proxy-squid.png",
        className: "",
        datetm: "2023",
        mois: "Juillet"
    },
    {
        title: "NAT statique, dynamique, PAT",
        description: "NAT statique, dyAvec le NAT statique, les routeurs ...",
        image: "/assets/imgprojets/nat.png",
        className: "",
        datetm: "2023",
        mois: "Juillet"
    },
    {
        title: "VPN avec Ipsec-StrongSwan",
        description: "Le VPN (réseau privé virtuel) est un logiciel de réseaux ...",
        image: "/assets/imgprojets/strongswan.png",
        className: "w-full h-full",
        datetm: "2023",
        mois: "Juillet"
    },
    {
        title: "Zone Démilitarisée",
        description: "En informatique, une Zone démilitarisée ou DMZ est ...",
        image: "/assets/imgprojets/dmz.png",
        className: "",
        datetm: "2023",
        mois: "Juillet"
    },
];

export const infEmbarque: Project[] = [
    {
        title: "Feu de circulation && controle de badge sur l'autoroute",
        description: "Ces projet ont été réalisé à travers notre EC qui porte l'Informatique Embarqué fait en licence 2 avec Dr Kouma qui n'a ménagé aucun effort par la réalisation de ce projet.",
        image: "/assets/imgprojets/feu&barriere.jpg",
        className: "w-full h-full",
        datetm: "2023",
        mois: "Mai"
    },
];
