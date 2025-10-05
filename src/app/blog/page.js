import 'env';
import { fetcher } from "@/lib/api";
import Link from "next/link";
import styles from './page.module.scss';

export const revalidate = 10; 

export default async function BlogPage() {
  const res = await fetcher("http://localhost:1337/api/blogs?populate=*"); 
  const posts = res.data;

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Our Blogs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <Link href={`/blog/${post.slug}`} className={styles.blog_link}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
