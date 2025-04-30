// src/components/ContactHero.tsx
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <motion.div
      className="text-center py-20 bg-gradient-to-br from-secondary to-primary text-white rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
        Contactez moi!
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Pour toute question académique ou échange professionnel, n’hésitez pas à m’écrire. Je vous répondrai dans les meilleurs délais.</p>
    </motion.div>
  );
}
