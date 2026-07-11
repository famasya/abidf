import { createFileRoute, Link } from "@tanstack/react-router";
import { type Post, getSortedPosts } from "../utils/blog";

export const Route = createFileRoute("/c/")({
  loader: () => getSortedPosts(),
  head: () => ({
    meta: [
      {
        title: "Blog - Abid Famasya",
      },
      {
        name: "description",
        content: "Blog posts by Abid Famasya on healthtech, research, and indie building.",
      },
      {
        property: "og:title",
        content: "Blog - Abid Famasya",
      },
      {
        property: "og:description",
        content: "Blog posts by Abid Famasya on healthtech, research, and indie building.",
      },
      {
        property: "og:url",
        content: "https://abidf.com/c",
      },
      {
        name: "twitter:title",
        content: "Blog - Abid Famasya",
      },
      {
        name: "twitter:description",
        content: "Blog posts by Abid Famasya on healthtech, research, and indie building.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://abidf.com/c",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = Route.useLoaderData();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet.</p>
      ) : (
        <ul className="space-y-1">
          {posts.map((post: Post) => (
            <li key={post.slug}>
              <Link
                to="/c/$slug"
                params={{ slug: post.slug }}
                className="block hover:bg-gray-50 p-3 rounded-lg transition-colors hover:no-underline! border border-white hover:border-gray-200"
              >
                <h2 className="text-lg font-medium">{post.title}</h2>
                <time className="text-sm text-gray-500">
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
