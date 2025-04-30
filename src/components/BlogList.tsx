// src/components/BlogList.tsx
import { motion } from "framer-motion";
import PostCard from "./PostCard";
import type { Post } from "../data/posts";

interface Props {
  posts: Post[];
}

/**
 * Grille d’aperçu des articles
 */
export default function BlogList({ posts }: Props) {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
        >
          <PostCard post={post} />
        </motion.div>
      ))}
    </div>
  );
}
