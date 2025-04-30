// src/pages/skills.tsx
import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import SkillHero from "../components/SkillHero";
import SkillsList from "../components/SkillsList";

const SkillsPage: NextPage = () => (
  <>
    <Head>
      <title>Compétences – Grégoire Fontaine</title>
      <meta
        name="description"
        content="Compétences techniques et activités réalisées par Grégoire Fontaine en infrastructure et réseaux."
      />
    </Head>
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SkillHero />
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <SkillsList />
        </div>
      </section>
    </Layout>
  </>
);

export default SkillsPage;