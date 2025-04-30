// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  tech: string[];
  repo?: string;
  live?: string;
}

const projectsData: Project[] = [
  {
    id: "softadmin-stage",
    title: "Stage SoftAdmin",
    category: "Stage",
    thumbnail: "/images/SoftAdmin.png",
    description:
      "Support technique avec NinjaOne (RMM), gestion de tickets CRM et déploiement d'infrastructures réseau.",
    tech: ["NinjaOne", "CRM", "Windows Server", "Switching"],
    /*repo: "https://github.com/username/health-app",*/

  },
  {
    id: "security-lab",
    title: "TP Sécurité Réseau",
    category: "TP",
    thumbnail: "/images/security-lab.jpg",
    description:
      "Configuration de firewall, segmentation VLAN et tests d'intrusion en environnement virtuel.",
    tech: ["pfSense", "VLAN", "Wireshark", "Metasploit"],
    /*repo: "https://github.com/username/health-app",*/
  },
  {
    id: "nas",
    title: "Serveur NAS | iSCSI",
    category: "Projet",
    thumbnail: "/images/TrueNAS.jpg",
    description:
      "Prototype React Native pour le suivi de la santé, notifications push et stockage local sécurisé.",
    tech: ["Linux", "TrueNAS"],
    /*repo: "https://github.com/username/health-app",*/
  },
];

export default projectsData;
