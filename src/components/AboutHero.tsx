// src/components/AboutHero.tsx
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Section d’introduction sur la page À propos :
 * affiche photo ronde et bio.
 */
export default function AboutHero() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Photo de profil */}
      <div className="w-48 h-48 relative rounded-full overflow-hidden">
        <Image
          src="/images/profile.jpg"
          alt="Photo de Grégoire Fontaine"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Texte d’introduction */}
      <motion.div
        className="space-y-4 max-w-2xl"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl font-heading font-bold">
          Bonjour, je suis <span className="text-primary">Grégoire Fontaine</span>
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          J’ai <strong>20 ans</strong> et je prépare un <strong>BTS SIO</strong> option{" "}
          <strong>SISR</strong> à CaenSup Sainte-Ursule. Passionné par les infrastructures réseau, la sécurité et le support technique.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Mon objectif est d’intégrer une <strong>Licence STS Sécurité des Réseaux et Cybersécurité</strong> en alternance pour l’année académique 2025-2026.
        </p>
      </motion.div>
    </motion.div>
  );
}
