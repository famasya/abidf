import { createFileRoute, Link } from "@tanstack/react-router";
import { type GitHubIssue, blogPostsQueryOptions, slugify } from "../utils/blog";

export const Route = createFileRoute("/blog/")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(blogPostsQueryOptions()),
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
        <ul className="space-y-4">
          {posts.map((post: GitHubIssue) => (
            <li key={post.id}>
              <Link
                to="/blog/$slug"
                params={{ slug: slugify(post) }}
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
