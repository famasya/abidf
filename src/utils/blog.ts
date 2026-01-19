import { queryOptions } from "@tanstack/react-query";

export type GitHubIssue = {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
  labels: { name: string; color: string }[];
};

export function slugify(issue: GitHubIssue): string {
  const titleSlug = issue.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${issue.number}-${titleSlug}`;
}

export function parseSlug(slug: string): number {
  const match = slug.match(/^(\d+)-/);
  if (!match) throw new Error("Invalid slug");
  return Number.parseInt(match[1], 10);
}

async function fetchBlogPosts(): Promise<GitHubIssue[]> {
  const res = await fetch(
    "https://api.github.com/repos/famasya/abidf/issues?labels=blog&sort=created&direction=desc",
    {
      headers: {
        "User-Agent": "request",
        Accept: "application/vnd.github.v3+json",
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch blog posts");
  return res.json();
}

export const blogPostsQueryOptions = () =>
  queryOptions({
    queryKey: ["blog", "posts"],
    queryFn: fetchBlogPosts,
    staleTime: 1000 * 60 * 5,
  });

export const blogPostQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: ["blog", "post", slug],
    queryFn: async (): Promise<GitHubIssue> => {
      const issueNumber = parseSlug(slug);
      const res = await fetch(
        `https://api.github.com/repos/famasya/abidf/issues/${issueNumber}`,
        {
          headers: {
            "User-Agent": "request",
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch blog post");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });
