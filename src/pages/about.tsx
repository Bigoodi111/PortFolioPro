// src/pages/about.tsx
import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import AboutHero from "../components/AboutHero";
import Timeline from "../components/Timeline";

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>À propos – Grégoire Fontaine</title>
      <meta
        name="description"
        content="Découvrez le parcours, les formations et les expériences de Grégoire Fontaine en BTS SIO SISR."
      />
    </Head>
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AboutHero />
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Expérience professionnelle
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto text-neutral-700 dark:text-neutral-300">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                SoftAdmin (Stage &amp; CDD)
              </h3>
              <p>
                SoftAdmin est une entreprise spécialisée en infogérance, services hébergés, développement web sur mesure et vente de matériel informatique. L’équipe compte 5 développeurs et 4 administrateurs réseau.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-1">
                <li>Support technique et assistance utilisateurs (CRM, NinjaOne RMM)</li>
                <li>Administration et supervision systèmes (Windows Server 2019/2022, Zabbix)</li>
                <li>Documentation technique et gestion de projets</li>
              </ul>
            </div>
          </div>
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
