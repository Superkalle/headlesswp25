const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getLatestPosts() {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  const res = await fetch(`${apiUrl}/wp/v2/posts?per_page=5`);
  if (!res.ok) throw new Error("Fehler beim Laden der Beiträge");
  return res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API_URL}/wp/v2/posts?slug=${slug}`);
  if (!res.ok) return null;
  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}
