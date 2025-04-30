import Link from "next/link";
import { motion } from "framer-motion";

// Aperçu de la section "À propos" pour la page d'accueil
export default function AboutPreview() {
  return (
    <motion.div
      className="text-center max-w-3xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-heading font-bold">À propos de moi</h2>
      <p className="text-neutral-700 dark:text-neutral-300">
        J’ai <strong>20 ans</strong> et je suis en <strong>BTS SIO</strong> (Services Informatiques
        aux Organisations), option <strong>SISR</strong> à CaenSup Sainte‑Ursule. Passionné par
        les infrastructures réseau, la sécurité et le support technique, j’ai déjà mené plusieurs
        projets et stages en milieu professionnel.
      </p>
      <Link
        href="/about"
        className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition"
      >
        Lire la suite
      </Link>
    </motion.div>
  );
}
