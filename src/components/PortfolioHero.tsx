// src/components/PortfolioHero.tsx
import { motion } from "framer-motion";

/**
 * Section d’introduction pour la page Réalisations
 */
export default function PortfolioHero() {
  return (
    <motion.div
      className="text-center py-20 bg-gradient-to-br from-secondary to-primary text-white rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
        Mes Réalisations
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Découvrez mes projets en infrastructure & réseaux, stages et travaux
        pratiques réalisés durant mon BTS SIO option SISR.
      </p>
    </motion.div>
  );
}
