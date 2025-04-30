// src/components/ContactPreview.tsx
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPreview() {
  return (
    <motion.div
      className="text-center max-w-3xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-heading font-bold">Contactez‑moi</h2>
      <p className="text-neutral-700 dark:text-neutral-300">
        Pour toute question ou opportunité en infrastructure et réseaux, n’hésitez pas à m’écrire.
      </p>
      <Link
        href="/contact"
        className="inline-block mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg transition hover:bg-opacity-90"      >
        Me contacter
      </Link>
    </motion.div>
  );
}
