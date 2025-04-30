// src/components/PortfolioPreview.tsx
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioPreview() {
  return (
    <motion.div
      className="text-center max-w-5xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-heading font-bold">Quelques réalisations</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src="/images/softadmin.jpg" alt="Stage SoftAdmin" className="w-full h-48 object-cover" />
          <div className="p-4 bg-white dark:bg-gray-700">
            <h3 className="font-semibold mb-1">Stage SoftAdmin</h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">
              Support NinjaOne, tickets CRM et déploiements réseau.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img src="/images/security-lab.jpg" alt="TP Sécurité" className="w-full h-48 object-cover" />
          <div className="p-4 bg-white dark:bg-gray-700">
            <h3 className="font-semibold mb-1">TP Sécurité</h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">
              Configuration de firewall et VLAN.
            </p>
          </div>
        </div>
      </div>
      <Link
        href="/portfolio"
        className="inline-block mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg transition hover:bg-opacity-90">
        Voir toutes
      </Link>
    </motion.div>
);
}
