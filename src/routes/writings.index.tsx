import { createFileRoute, Link } from "@tanstack/react-router";
import { type Post, getSortedPosts, getAlternatePost } from "../utils/writings";

const LANG_LABELS: Record<string, string> = { en: "EN", id: "ID" };

export const Route = createFileRoute("/writings/")({
  loader: () => getSortedPosts(),
  head: () => ({
    meta: [
      {
        title: "Writings - Abid Famasya",
      },
      {
        name: "description",
        content: "Writings by Abid Famasya on healthtech, research, and indie building.",
      },
      {
        property: "og:title",
        content: "Writings - Abid Famasya",
      },
      {
        property: "og:description",
        content: "Writings by Abid Famasya on healthtech, research, and indie building.",
      },
      {
        property: "og:url",
        content: "https://abidf.com/writings",
      },
      {
        name: "twitter:title",
        content: "Writings - Abid Famasya",
      },
      {
        name: "twitter:description",
        content: "Writings by Abid Famasya on healthtech, research, and indie building.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://abidf.com/writings",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = Route.useLoaderData();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Writings</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet.</p>
      ) : (
        <ul className="space-y-1">
          {posts.map((post: Post) => {
            const alt = getAlternatePost(post);
            return (
              <li key={post.slug}>
                <Link
                  to="/writings/$slug"
                  params={{ slug: post.slug }}
                  className="block hover:bg-gray-50 p-3 rounded-lg transition-colors hover:no-underline! border border-white hover:border-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-medium">{post.title}</h2>
                    <span className="text-[10px] font-semibold tracking-wide uppercase bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded">
                      {LANG_LABELS[post.lang]}
                    </span>
                    {alt && (
                      <Link
                        to="/writings/$slug"
                        params={{ slug: alt.slug }}
                        className="text-[10px] font-semibold tracking-wide uppercase bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded hover:bg-gray-200 hover:no-underline!"
                      >
                        {LANG_LABELS[alt.lang]}
                      </Link>
                    )}
                  </div>
                  <time className="text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
