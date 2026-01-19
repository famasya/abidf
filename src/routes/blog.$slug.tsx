import { createFileRoute, Link } from "@tanstack/react-router";
import Markdown from "react-markdown";
import { blogPostQueryOptions } from "../utils/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(blogPostQueryOptions(params.slug)),
  component: BlogPost,
  errorComponent: () => <div>Post not found</div>,
});

function BlogPost() {
  const post = Route.useLoaderData();

  return (
    <article className="space-y-6">
      <div>
        <Link to="/blog" className="text-sm text-gray-500 hover:text-gray-700">
          ← Back to blog
        </Link>
      </div>
      <header>
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <time className="text-sm text-gray-500">
          {new Date(post.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Markdown>{post.body}</Markdown>
      </div>
    </article>
  );
}
