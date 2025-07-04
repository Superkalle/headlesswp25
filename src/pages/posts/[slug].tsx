import { GetStaticPaths, GetStaticProps } from "next";
import { getLatestPosts, getPostBySlug } from "../../lib/wordpress";
import Layout from "../../components/Layout";

export default function Post({ post }: { post: any }) {
  if (!post) return <Layout><p>Beitrag nicht gefunden.</p></Layout>;
  return (
    <Layout>
      <main className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">
          {post.title?.rendered || post.title || 'Untitled'}
        </h1>
        <div dangerouslySetInnerHTML={{ 
          __html: post.content?.rendered || post.content || post.body || 'No content available' 
        }} />
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = await getLatestPosts();
    const paths = posts.map((post: any) => ({
      params: { slug: post.slug || post.id?.toString() || 'unknown' },
    }));
    return { paths, fallback: true };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getPostBySlug(params?.slug as string);
    return {
      props: {
        post,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error in getStaticProps for post:', error);
    return {
      props: {
        post: null,
      },
      revalidate: 60,
    };
  }
};