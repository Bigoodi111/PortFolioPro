// src/components/SkillHero.tsx
import { motion } from "framer-motion";

/**
 * Section d’introduction pour la page Compétences
 */
export default function SkillHero() {
  return (
    <motion.div
      className="text-center py-20 bg-gradient-to-br from-secondary to-primary text-white rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
        Mes Compétences & Activités
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Découvrez mes savoir‑faire en gestion de parc, support technique,
        administration systèmes et rédaction de procédures.
      </p>
    </motion.div>
  );
}
