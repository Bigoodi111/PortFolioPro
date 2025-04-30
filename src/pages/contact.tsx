// src/pages/contact.tsx
import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>Contact – Grégoire Fontaine</title>
      <meta
        name="description"
        content="Contactez Grégoire Fontaine pour toute question ou échange en infrastructure et réseaux."
      />
    </Head>
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ContactHero />
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6 max-w-lg">
          <ContactForm />
        </div>
      </section>
    </Layout>
  </>
)

export default ContactPage
