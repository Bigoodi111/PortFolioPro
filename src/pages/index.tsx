// src/pages/index.tsx
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import SkillsPreview from "../components/SkillsPreview";
import PortfolioPreview from "../components/PortfolioPreview";
import CVPreview from "../components/CVPreview";
import ContactPreview from "../components/ContactPreview";
import projectsData, { Project } from "../data/projects";

interface IndexProps {
  featuredProjects: Project[];
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  // Récupère tous les projets hors procédures
  const featuredProjects = projectsData
    .filter((p) => !p.category.includes("Procédure"))
    .slice(0, 3); // ne garder que 3 éléments
  return {
    props: {
      featuredProjects,
    },
  };
};

const IndexPage: NextPage<IndexProps> = ({ featuredProjects }) => {
  return (
    <>
      <Head>
        <title>Accueil – Portfolio SISR de Grégoire Fontaine</title>
        <meta
          name="description"
          content="Portfolio de Grégoire Fontaine, étudiant BTS SIO option SISR. Parcours, compétences, réalisations et contact."
        />
      </Head>
      <Layout>
        {/* Hero full-screen */}
        <Hero />

        {/* Aperçu À propos */}
        <section id="about-preview" className="py-20">
          <div className="container mx-auto px-6">
            <AboutPreview />
          </div>
        </section>

        {/* Aperçu Compétences */}
        <section
          id="skills-preview"
          className="bg-gray-50 dark:bg-gray-800 py-20"
        >
          <div className="container mx-auto px-6">
            <SkillsPreview />
          </div>
        </section>

        {/* Aperçu Réalisations */}
        <section id="portfolio-preview" className="py-20">
          <div className="container mx-auto px-6">
            <PortfolioPreview projects={featuredProjects} />
          </div>
        </section>

        {/* Aperçu CV */}
        <section id="cv-preview" className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-6">
            <CVPreview />
          </div>
        </section>

        {/* Aperçu Contact */}
        <section id="contact-preview" className="py-20">
          <div className="container mx-auto px-6">
            <ContactPreview />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;