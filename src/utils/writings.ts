import { allPosts } from "content-collections";

export type Post = {
  slug: string;
  title: string;
  created_at: string;
  description?: string;
  content: string;
  lang: "en" | "id";
};

function canonicalSlug(post: { slug: string; lang: string }): string {
  // English is default (no suffix), Indonesian has .id suffix
  return post.lang === "id" ? post.slug.replace(/\.id$/, "") : post.slug;
}

export function getSortedPosts(lang?: "en" | "id"): Post[] {
  let posts = allPosts.slice();

  if (lang) {
    posts = posts.filter((p) => p.lang === lang);
  } else {
    // Deduplicate: keep one post per canonical slug, preferring English
    const seen = new Map<string, Post>();
    for (const post of posts) {
      const key = canonicalSlug(post);
      const existing = seen.get(key);
      if (!existing || (post.lang === "en" && existing.lang !== "en")) {
        seen.set(key, post);
      }
    }
    posts = Array.from(seen.values());
  }

  return posts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getAlternatePost(post: Post): Post | undefined {
  const targetLang = post.lang === "en" ? "id" : "en";
  // Same base slug but with the other language suffix
  const baseSlug = post.lang === "en" ? post.slug : post.slug.replace(/\.id$/, "");
  const altSlug = targetLang === "en" ? baseSlug : `${baseSlug}.id`;
  return allPosts.find((p) => p.slug === altSlug);
}
