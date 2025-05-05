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
    description:
      ["Durant mes stages chez SoftAdmin, j'ai pris en charge diverses missions, principalement axées sur le support utilisateur. Cette activité était cruciale, car nous étions en pleine nationalisation de l'infrastructure de notre client principal. Mon rôle consistait à soulager les administrateurs afin qu’ils puissent se concentrer sur ce projet. Pour cela, j'ai mis en place une organisation efficace afin de traiter rapidement les tickets qui m’étaient affectés. ",
      "J’ai également participé à la préparation du matériel pour les utilisateurs. Dans un souci d’efficacité, nous avons mis en place une solution ISO personnalisée à l’aide de CloneZilla, ce qui nous a permis de gagner un temps précieux lors des déploiements. Au cours de ce stage, j’ai appris à maîtriser des outils comme NinjaOne pour la gestion de flotte informatique. Nous avons également configuré des alertes avec Zabbix sur les serveurs et les routeurs des agences dont nous avions la charge, afin d’anticiper certains problèmes techniques."],
    tech: ["NinjaOne", "Azure AD (Entra)", "Support Utilisateurs","Gestion de stock", "Gestion de Flotte"],
    procedure: "/docs/SA.pdf"
  },
  {
    id: "nas",
    title: "Serveur NAS | iSCSI",
    category: ["Projet","Cours"],
    thumbnail: "/images/TrueNAS.jpg",
    description:
      ["Dans le cadre de mon projet de fin d’études en BTS, je suis en charge de la mise en place d’un serveur NAS basé sur TrueNAS, destiné à assurer la sauvegarde des données ainsi que le partage de fichiers au sein de l’infrastructure."],
    tech: ["Linux", "TrueNAS"],
  },
  {
    id: "zabbix-supervision",
    title: "Supervision Zabbix",
    category: ["Stage","Cours"],
    thumbnail: "/images/zabbix_logo.png",
    description:
      ["Mise en place et configuration de la supervision Zabbix pour le monitoring d'infrastructures réseau et serveurs."],
    tech: ["Zabbix", "Monitoring"],
    procedure: "/docs/CV_Fontaine_Gregoire.pdf",
  }, 
  {
    id: "creation-portfolio",
    title: "Création de Portfolio",
    category: ["Projet"],
    thumbnail: "/images/portfolio.png",
    description:
      ["Développement de ce portfolio personnel avec Next.js, TypeScript et Tailwind CSS."],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "centralisation-logs",
    title: "Centralisation des logs",
    category: ["Cours"],
    thumbnail: "/images/blog/default.jpg",
    description:
      ["Déploiement d'une solution de centralisation des logs pour l'analyse et la sécurité."],
    tech: ["ELK", "Syslog"],
  },
  {
    id: "switching-cisco",
    title: "Switching Cisco",
    category: ["Cours"],
    thumbnail: "/images/Cisco-logo.png",
    description:
      ["Configuration et mise en place de sécurité sur des switch Cisco."],
    tech: ["ELK", "Syslog"],
    procedure: "/docs/Commandes Switch.pdf",
  },
];

export default projectsData;
