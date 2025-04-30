// src/components/Timeline.tsx
import { motion } from "framer-motion";

interface Step {
  date: string;
  title: string;
  description?: string;
}

/**
 * Frise chronologique des étapes clés du parcours.
 */
const steps: Step[] = [
  {
    date: "2022",
    title: "Baccalauréat Général options : Numérique Sciences Informatiques et Mathématique",
    description: "Mention Assez Bien – Institut Lemonnier, Caen",
  },
  {
    date: "2022–2024",
    title: "BTS SIO – Option SISR",
    description: "CaenSup Sainte‑Ursule",
  },
  {
    date: "Mai 2024",
    title: "Stage SoftAdmin",
    description: "Support NinjaOne, gestion tickets, déploiement réseau",
  },
];

export default function Timeline() {
  return (
    <div className="relative border-l-4 border-primary pl-8">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          {/* Point marqueur */}
          <span className="absolute -left-6 top-0 w-4 h-4 bg-primary rounded-full" />
          <time className="font-semibold text-primary">{step.date}</time>
          <h3 className="text-xl font-semibold mt-1 mb-1">{step.title}</h3>
          {step.description && (
            <p className="text-neutral-600 dark:text-neutral-400">
              {step.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
