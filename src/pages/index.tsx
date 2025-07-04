import { GetStaticProps } from "next";
import { getLatestPosts } from "../lib/wordpress";
import Layout from "../components/Layout";

export default function Home({ posts }: { posts: any[] }) {
  return (
    <Layout>
      <main className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Willkommen!</h1>
        <h2 className="text-xl mb-4">Aktuelle Beiträge:</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <a href={`/posts/${post.slug}`} className="text-blue-600 underline">
                {post.title?.rendered || post.title || 'Untitled'}
              </a>
              <div dangerouslySetInnerHTML={{ 
                __html: (post.excerpt && typeof post.excerpt === 'object' && post.excerpt.rendered) || (typeof post.excerpt === 'string' ? post.excerpt : '') || post.body || 'No excerpt available'
              }} />
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getLatestPosts();
    return {
      props: {
        posts: posts || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        posts: [],
      },
      revalidate: 60,
    };
  }
};