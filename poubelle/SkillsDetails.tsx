// src/components/SkillsDetails.tsx
import { motion } from "framer-motion";

const categories = [
  {
    title: "Gestion du patrimoine",
    items: [
      "Recensement & identification",
      "Normes & habilitations",
      "Sauvegardes & continuité",
    ],
  },
  {
    title: "Support & incidents",
    items: [
      "Traitement tickets & CRM",
      "Assistance utilisateurs",
      "Résolution incidents réseau/système",
    ],
  },
  {
    title: "Maintenance systèmes",
    items: [
      "Administration serveurs",
      "Mise à jour OS & logiciels",
      "Tests & déploiements",
    ],
  },
  {
    title: "Documentation & veille",
    items: [
      "Rédaction procédures",
      "Transmission d’informations",
      "Veille IT & identité pro",
    ],
  },
];

export default function SkillsDetails() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow hover:shadow-lg transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <h4 className="text-lg font-semibold mb-2">{cat.title}</h4>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300">
            {cat.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
