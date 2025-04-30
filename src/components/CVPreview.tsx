// src/components/CVPreview.tsx
import Link from "next/link";
import { motion } from "framer-motion";

export default function CVPreview() {
  return (
    <motion.div
      className="text-center max-w-3xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-heading font-bold">Mon Curriculum Vitae</h2>
      <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="\docs\CV_Fontaine_Gregoire.pdf"
          title="CV de Grégoire Fontaine"
          className="w-full h-full"
        />
      </div>
      <Link
        href="\docs\CV_Fontaine_Gregoire.pdf"
        className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition"
        download
      >
        Télécharger le CV
      </Link>
    </motion.div>
);
}
