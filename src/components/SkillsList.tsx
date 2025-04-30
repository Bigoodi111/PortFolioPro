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
    title: "Documentation & veille",
    items: [
      "Rédaction de procédures",
      "Transmission de l’information",
      "Veille technologique",
    ],
  },
];

export default function SkillsList() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {skillsData.map((cat, i) => (
        <motion.div
          key={cat.title}
          className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition"
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
