// src/pages/portfolio.tsx
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioFilter from "../components/PortfolioFilter";
import PortfolioGrid from "../components/PortfolioGrid";
import ProjectModal from "../components/ProjectModal";
import projectsData from "../data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const PortfolioPage: NextPage = () => {
  const [filter, setFilter] = useState<string>("Tous");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = projectsData.filter(
    (p) => filter === "Tous" || p.category === filter
  );

  return (
    <>
      <Head>
        <title>Réalisations – Grégoire Fontaine</title>
        <meta
          name="description"
          content="Projets et expériences de Grégoire Fontaine en BTS SIO SISR."
        />
      </Head>
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <PortfolioHero />
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6">
            <PortfolioFilter
              categories={["Tous", "Stage","TP", "Projet"]}
              active={filter}
              onChange={setFilter}
            />
          </div>
        </section>

        <section className="py-20">
          <motion.div
            className="container mx-auto px-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <PortfolioGrid
              projects={filtered}
              onSelect={(id) => setSelectedId(id)}
            />
          </motion.div>
        </section>

        <AnimatePresence>
          {selectedId && (
            <ProjectModal
              project={projectsData.find((p) => p.id === selectedId)!}
              onClose={() => setSelectedId(null)}
            />
          )}
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default PortfolioPage;
