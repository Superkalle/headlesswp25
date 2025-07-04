const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getLatestPosts() {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  
  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_WORDPRESS_API_URL is not configured. Please check your .env.local file.");
  }
  
  try {
    const res = await fetch(`${apiUrl}/wp/v2/posts?per_page=5`);
    if (!res.ok) {
      throw new Error(`WordPress API request failed: ${res.status} ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    throw new Error("Fehler beim Laden der Beiträge");
  }
}

export async function getPostBySlug(slug: string) {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_WORDPRESS_API_URL is not configured. Please check your .env.local file.");
  }
  
  try {
    const res = await fetch(`${API_URL}/wp/v2/posts?slug=${slug}`);
    if (!res.ok) return null;
    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching WordPress post by slug:", error);
    return null;
  }
}