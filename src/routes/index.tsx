import { createFileRoute, Link } from "@tanstack/react-router";
import { type Post, getSortedPosts } from "../utils/writings";

export const Route = createFileRoute("/")({
  loader: () => getSortedPosts(),
  head: () => ({
    meta: [
      {
        title: "Abid Famasya",
      },
      {
        name: "description",
        content:
          "Abid Famasya writes code, leads tech nerds, and builds things at the intersection of healthtech and NLP.",
      },
      {
        property: "og:title",
        content: "Abid Famasya",
      },
      {
        property: "og:description",
        content:
          "Abid Famasya writes code, leads tech nerds, and builds things at the intersection of healthtech and NLP.",
      },
      {
        property: "og:url",
        content: "https://abidf.com/",
      },
      {
        name: "twitter:title",
        content: "Abid Famasya",
      },
      {
        name: "twitter:description",
        content:
          "Abid Famasya writes code, leads tech nerds, and builds things at the intersection of healthtech and NLP.",
      },
      {
        rel: "canonical",
        href: "https://abidf.com/",
      },
    ],
  }),
  component: App,
});

function App() {
  const posts = Route.useLoaderData();

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p>
          Hey, I'm Abid. I lead the tech nerds at{" "}
          <a href="https://trustmedis.com" className="text-amber-700 hover:underline" target="_blank" rel="noopener noreferrer">
            Trustmedis
          </a>
          , where we build health information systems that somehow manage to serve millions of
          patients across Indonesia. My days bounce between clinical software, SaaS
          productization, and teaching machines to read Indonesian medical records.
        </p>
        <p>
          On the side, I tinker under{" "}
          <Link to="/automagic" className="text-amber-700 hover:underline">
            Automagic Systems
          </Link>, a lab for tools that try to make humans less busy.{" "}
          <Link to="/about" className="text-amber-700 hover:underline">
            More about me
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Writings</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          <ul className="space-y-2">
            {posts.slice(0, 8).map((post: Post) => (
              <li key={post.slug} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                <Link
                  to="/writings/$slug"
                  params={{ slug: post.slug }}
                  className="text-amber-700 hover:underline"
                >
                  {post.title}
                </Link>
                <time className="text-sm text-gray-500">
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </li>
            ))}
          </ul>
        )}
        <p>
          <Link to="/writings" className="text-amber-700 hover:underline">
            See all posts
          </Link>
        </p>
      </section>
    </div>
  );
}
