// src/pages/about.tsx
import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import AboutHero from "../components/AboutHero";
import Timeline from "../components/Timeline";

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>À propos – Grégoire Fontaine</title>
      <meta
        name="description"
        content="Découvrez le parcours, les formations et les expériences de Grégoire Fontaine en BTS SIO SISR."
      />
    </Head>
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AboutHero />
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Mon Parcours
          </h2>
          <Timeline />
        </div>
      </section>
    </Layout>
  </>
);

export default AboutPage;