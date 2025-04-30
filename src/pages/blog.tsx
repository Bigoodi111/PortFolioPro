// src/pages/blog.tsx
import { GetServerSideProps, NextPage } from 'next'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Layout from '../components/Layout'
import BlogHero from '../components/BlogHero'
import BlogList from '../components/BlogList'

interface Post {
  id: string
  title: string
  date: string
  excerpt: string
  category: string
  cover: string
}

interface Props {
  posts: Post[]
}

const BlogPage: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Blog – Grégoire Fontaine</title>
      <meta
        name="description"
        content="Articles et retours d’expérience sur l’infrastructure, la sécurité et le support."
      />
    </Head>
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <BlogHero />
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <BlogList posts={posts} />
        </div>
      </section>
    </Layout>
  </>
)

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'posts.json')
  const json = await fs.promises.readFile(filePath, 'utf8')
  const posts: Post[] = JSON.parse(json)
  return { props: { posts } }
}

export default BlogPage
