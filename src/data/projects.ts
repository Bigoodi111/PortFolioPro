// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  category: string[];
  thumbnail: string;
  description: string[];
  tech: string[];
  repo?: string;
  live?: string;
  procedure?: string;
}

const projectsData: Project[] = [
  {
    id: "softadmin-stage",
    title: "Stages SoftAdmin",
    category: ["Stage"],
    thumbnail: "/images/SoftAdmin.png",
    description: [
      "Durant mes stages chez SoftAdmin, j'ai pris en charge diverses missions, principalement axées sur le support utilisateur. Cette activité était cruciale, car nous étions en pleine nationalisation de l'infrastructure de notre client principal. Mon rôle consistait à soulager les administrateurs afin qu’ils puissent se concentrer sur ce projet. Pour cela, j'ai mis en place une organisation efficace afin de traiter rapidement les tickets qui m’étaient affectés.",
      "J’ai également participé à la préparation du matériel pour les utilisateurs. Dans un souci d’efficacité, nous avons mis en place une solution ISO personnalisée à l’aide de CloneZilla, ce qui nous a permis de gagner un temps précieux lors des déploiements. Au cours de ce stage, j’ai appris à maîtriser des outils comme NinjaOne pour la gestion de flotte informatique. Nous avons également configuré des alertes avec Zabbix sur les serveurs et les routeurs des agences dont nous avions la charge, afin d’anticiper certains problèmes techniques."
    ],
    tech: ["NinjaOne", "CloneZilla", "Zabbix", "Support Utilisateurs"],
    procedure: "/procedures/SA.pdf"
  },
  {
    id: "nas",
    title: "Serveur NAS | iSCSI",
    category: ["Projet", "Cours"],
    thumbnail: "/images/TrueNAS.jpg",
    description: [
      "Dans le cadre de mon projet de fin d’études en BTS, je suis en charge de la mise en place d’un serveur NAS basé sur TrueNAS, destiné à assurer la sauvegarde des données ainsi que le partage de fichiers au sein de l’infrastructure."
    ],
    tech: ["TrueNAS", "ZFS", "iSCSI"]
  },
  {
    id: "zabbix-supervision",
    title: "Supervision Zabbix",
    category: ["Projet"],
    thumbnail: "/images/zabbix_logo.png",
    description: [
      "J’ai installé et configuré un serveur Zabbix pour monitorer les équipements réseau et serveurs.",
      "J’ai créé des templates et des règles d’alerte pour notifier les anomalies par e-mail et garantir une intervention rapide."
    ],
    tech: ["Zabbix", "Templates", "Alertes"],
    procedure: "/procedures/Zabbix Supervision.pdf"
  },
  {
    id: "creation-portfolio",
    title: "Création de Portfolio",
    category: ["Projet"],
    thumbnail: "/images/portfolio.png",
    description: [
      "J’ai développé ce portfolio en Next.js avec TypeScript et Tailwind CSS pour présenter mes réalisations.",
      "J’ai implémenté un système de filtres, un mode sombre et optimisé la navigation pour une expérience fluide."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "centralisation-logs",
    title: "Centralisation des logs",
    category: ["Cours"],
    thumbnail: "/images/log_logo.png",
    description: [
      "J’ai déployé Rsyslog pour collecter et centraliser les logs système sur un serveur dédié.",
      "J’ai analysé les journaux avec LogAnalyzer pour suivre les événements clés et faciliter le diagnostic."
    ],
    tech: ["Rsyslog", "LogAnalyzer"]
  },
  {
    id: "switching-cisco",
    title: "Switching Cisco",
    category: ["Cours"],
    thumbnail: "/images/Cisco-logo.png",
    description: [
      "J’ai configuré des VLANs et du trunking 802.1Q sur des switches Cisco pour segmenter le réseau.",
      "J’ai mis en place la sécurité des ports avec Port Security pour contrôler les accès et renforcer la protection."
    ],
    tech: ["Cisco IOS", "VLAN", "Port Security"],
    procedure: "/procedures/Commandes Switch.pdf"
  },
  // Nouvelles procédures
  {
    id: "procedure-dhcp-debian",
    title: "Procédure DHCP Debian",
    category: ["Cours"],
    thumbnail: "/images/Debian-Logo.png",
    description: ["Procédure d'installation du service DHCP sous Debian 11."],
    tech: [],
    procedure: "/procedures/DHCP_Procedure.pdf"
  },
  {
    id: "procedure-mariadb-debian",
    title: "Procédure MariaDB Debian",
    category: ["Cours"],
    thumbnail: "/images/Debian-Logo.png",
    description: ["Procédure d'installation et de sécurisation de MariaDB sur Debian 11."],
    tech: [],
    procedure: "/procedures/MariaDB_Procedure.pdf"
  },
  {
    id: "procedure-dns-debian",
    title: "Procédure DNS Debian",
    category: ["Cours"],
    thumbnail: "/images/Debian-Logo.png",
    description: ["Procédure de mise en place d'un serveur DNS primaire avec résolutions directe et inverse sous Debian 11."],
    tech: [],
    procedure: "/procedures/DNS_Procedure.pdf"
  },
  {
    id: "procedure-apache2-debian",
    title: "Procédure Apache2 Debian",
    category: ["Cours"],
    thumbnail: "/images/apache_logo.png",
    description: ["Procédure d'installation et de configuration du service web Apache2 sur Debian 11."],
    tech: [],
    procedure: "/procedures/Apache2_Procedure.pdf"
  },
  {
    id: "procedure-proftpd-debian",
    title: "Procédure ProFTPD Debian",
    category: ["Cours"],
    thumbnail: "/images/Debian-Logo.png",
    description: ["Procédure d'installation et de configuration de ProFTPD sur Debian 12 avec connexion passive, accès anonyme et intégration de ClamAV."],
    tech: [],
    procedure: "/procedures/FTP_procedure.pdf"
  }
];

export default projectsData;
