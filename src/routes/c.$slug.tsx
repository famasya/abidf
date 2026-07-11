import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import Markdown from "react-markdown";
import { getPostBySlug } from "../utils/blog";

export const Route = createFileRoute("/c/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const post = loaderData;
    const description = post.description ?? `Blog post by Abid Famasya: ${post.title}`;
    const url = `https://abidf.com/c/${post.slug}`;
    return {
      meta: [
        {
          title: `${post.title} - Abid Famasya`,
        },
        {
          name: "description",
          content: description,
        },
        {
          name: "author",
          content: "Abid Famasya",
        },
        {
          property: "article:author",
          content: "Abid Famasya",
        },
        {
          property: "article:published_time",
          content: post.created_at,
        },
        {
          property: "og:title",
          content: post.title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: url,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: post.title,
        },
        {
          name: "twitter:description",
          content: description,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: url,
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description,
            author: {
              "@type": "Person",
              name: "Abid Famasya",
              url: "https://abidf.com",
            },
            publisher: {
              "@type": "Person",
              name: "Abid Famasya",
              url: "https://abidf.com",
            },
            datePublished: post.created_at,
            url,
          }),
        },
      ],
    };
  },
  component: BlogPost,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});

function BlogPost() {
  const post = Route.useLoaderData();

  return (
    <article className="space-y-6">
      <nav className="text-sm text-gray-500 flex items-center gap-1 bg-zinc-100 p-2 rounded">
        <Link to="/" className="hover:text-sky-700">
          home
        </Link>
        <span>/</span>
        <Link to="/c" className="hover:text-sky-700">
          blog
        </Link>
        <span>/</span>
        <span className="text-gray-700">{post.title}</span>
      </nav>
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
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
}
