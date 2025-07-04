import { GetStaticPaths, GetStaticProps } from "next";
import { getLatestPosts, getPostBySlug } from "../../lib/wordpress";
import Layout from "../../components/Layout";

export default function Post({ post }: { post: any }) {
  if (!post) return <Layout><p>Beitrag nicht gefunden.</p></Layout>;
  return (
    <Layout>
      <main className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getLatestPosts();
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
