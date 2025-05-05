// src/pages/portfolio.tsx

import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioFilter from "../components/PortfolioFilter";
import PortfolioGrid from "../components/PortfolioGrid";
import ProjectModal from "../components/ProjectModal";
import projectsData, { Project } from "../data/projects";

interface PortfolioProps {
  projects: Project[];
}

export const getStaticProps: GetStaticProps<PortfolioProps> = async () => {
  // Lecture des PDF dans public/procedures (peut être vide)
  const proceduresDir = path.join(process.cwd(), "public", "procedures");
  let procedureFiles: string[] = [];
  if (fs.existsSync(proceduresDir)) {
    procedureFiles = fs
      .readdirSync(proceduresDir)
      .filter((f) => f.toLowerCase().endsWith(".pdf"));
  }

  const procedureProjects: Project[] = procedureFiles.map((file) => ({
    id: `procedure-${file.replace(/\.pdf$/i, "")}`,
    title: file.replace(/[-_]/g, " ").replace(/\.pdf$/i, ""),
    category: ["Procédure"],            // ← ici, un tableau
    thumbnail: "/images/blog/default.jpg",
    description: ["Procédure technique au format PDF."],
    tech: [],
    repo: `/procedures/${file}`,
  }));

  // Fusion : d'abord les projets statiques, puis les procédures
  const projects = [...projectsData, ...procedureProjects];

  return {
    props: { projects },
  };
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const PortfolioPage: NextPage<PortfolioProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>("Tous");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Filtrer : "Tous" = tout afficher
  const filteredProjects =
  filter === "Tous"
    ? projects
    : projects.filter((p) => p.category.includes(filter));

  return (
    <>
      <Head>
        <title>Réalisations – Grégoire Fontaine</title>
        <meta
          name="description"
          content="Projets, TP et procédures techniques de Grégoire Fontaine."
        />
      </Head>
      <Layout>
        {/* Hero */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <PortfolioHero />
          </div>
        </section>

        {/* Filtres */}
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6">
            <PortfolioFilter
              categories={["Tous", "Stage", "Projet", "Cours"]}
              active={filter}
              onChange={setFilter}
            />
          </div>
        </section>

        {/* Grille */}
        <section className="py-20">
          <motion.div
            className="container mx-auto px-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <PortfolioGrid
              projects={filteredProjects}
              onSelect={setSelectedId}
            />
          </motion.div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && (
            <ProjectModal
              project={projects.find((p) => p.id === selectedId)!}
              onClose={() => setSelectedId(null)}
            />
          )}
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default PortfolioPage;
