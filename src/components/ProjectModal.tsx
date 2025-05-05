// src/components/ProjectModal.tsx
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full p-6 relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 transition"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        {/* Titre */}
        <h2 className="text-2xl font-heading font-bold mb-4">
          {project.title}
        </h2>

        {/* Description */}
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        {/* Technologies (si présentes) */}
        {project.tech?.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold">Technologies utilisées :</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Lien unique pour la procédure */}
        {project.procedure ? (
          <div className="mt-6">
            <a
              href={project.procedure}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
            >
              Voir la procédure
            </a>
          </div>
        ) : (
          /* Sinon, cas projets classiques */
          <div className="flex gap-4 mt-6">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
              >
                Voir le dépôt
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition"
              >
                Voir en ligne
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
