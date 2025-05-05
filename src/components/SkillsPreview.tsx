// src/components/SkillsPreview.tsx
import Link from "next/link";
import { motion } from "framer-motion";

export default function SkillsPreview() {
  return (
    <motion.div
      className="text-center max-w-4xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-heading font-bold">Mes compétences clés</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Gestion de parc</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Inventaire, sauvegardes et continuité de service
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Support & incidents</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            CRM, tickets et assistance utilisateurs
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Administration</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Serveurs, mises à jour et sécurité
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Documentation & veille</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Rédaction de procédures et veille juridique et technologique
          </p>
        </div>
      </div>
      <Link
        href="/skills"
        className="inline-block mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg transition hover:bg-opacity-90"      >
        Voir toutes
      </Link>
    </motion.div>
);
}
