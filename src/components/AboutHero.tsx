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
      {/* Photo pro */}
      <motion.div
        className="w-64 h-64 relative rounded-full overflow-hidden flex-shrink-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Photo de Grégoire Fontaine"
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      {/* Bio */}
      <motion.div
        className="max-w-2xl space-y-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-heading font-bold">Qui suis-je ?</h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          J’ai <strong>20 ans</strong> et je prépare un <strong>BTS SIO </strong> 
          option <strong>SISR</strong> à CaenSup Sainte‑Ursule. Passionné par 
          les infrastructures réseau, la sécurité et le support technique.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Mon objectif est d’intégrer un poste d’Administrateur Systèmes et 
          Réseaux en alternance pour consolider mes compétences et mener à bien 
          des projets d’envergure.
        </p>
      </motion.div>
    </motion.div>
  );
}
