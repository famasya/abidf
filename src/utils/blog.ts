import { allPosts } from "content-collections";

export type Post = {
  slug: string;
  title: string;
  created_at: string;
  description?: string;
  content: string;
};

export function getSortedPosts(): Post[] {
  return allPosts
    .slice()
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}
