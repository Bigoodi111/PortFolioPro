// src/pages/blog/new.tsx
import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import NewArticleForm from "../components/NewArticleForm";

const NewBlogPage: NextPage = () => (
  <>
    <Head>
      <title>Nouvel article – Blog</title>
    </Head>
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-2xl">
          <NewArticleForm />
        </div>
      </section>
    </Layout>
  </>
);

export default NewBlogPage;
