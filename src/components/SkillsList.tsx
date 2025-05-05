// src/components/SkillsList.tsx
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  items: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Gestion du patrimoine informatique",
    items: [
      "Inventaire du parc",
      "Plan de sauvegarde et continuité",
      "Mise en conformité normes",
    ],
  },
  {
    title: "Support & incidents",
    items: [
      "Traitement tickets CRM",
      "Assistance utilisateurs",
      "Diagnostic réseau/système",
    ],
  },
  {
    title: "Administration systèmes",
    items: [
      "Installation & configuration serveurs",
      "Mises à jour OS & logiciels",
      "Automatisation tâches",
    ],
  },
  {
    title: "Réseaux & infrastructure",
    items: [
      "Routage & switching Cisco",
      "DHCP & DNS",
      "Administration Windows Server 2019/2022",
      "Virtualisation",
      "Active Directory",
    ],
  },
  {
    title: "Outils & supervision",
    items: ["Zabbix", "NinjaOne RMM", "Centralisation des logs"],
  },
  {
    title: "Documentation & veille",
    items: [
      "Rédaction de procédures",
      "Transmission de l’information",
      "Veille technologique",
    ],
  },
  {
    title: "Certifications",
    items: ["Pix : 595 (P-HQBJTTKM)", "MOOC SecNum Académie"],
  },
];

export default function SkillsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillsData.map((cat, i) => (
        <motion.div
          key={cat.title}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            {cat.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
