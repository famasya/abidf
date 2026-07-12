import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import Markdown from "react-markdown";
import { getPostBySlug, getAlternatePost } from "../utils/writings";

const LANG_LABELS: Record<string, string> = { en: "EN", id: "ID" };
const LANG_LOCALES: Record<string, string> = { en: "en_US", id: "id_ID" };

export const Route = createFileRoute("/writings/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const post = loaderData;
    const description = post.description ?? `Writing by Abid Famasya: ${post.title}`;
    const url = `https://abidf.com/writings/${post.slug}`;
    const alt = getAlternatePost(post);
    const locale = LANG_LOCALES[post.lang] ?? "en_US";

    const links: Array<Record<string, string>> = [
      {
        rel: "canonical",
        href: url,
      },
    ];
    if (alt) {
      links.push({
        rel: "alternate",
        hrefLang: alt.lang,
        href: `https://abidf.com/writings/${alt.slug}`,
      });
      links.push({
        rel: "alternate",
        hrefLang: post.lang,
        href: url,
      });
    }

    const meta: Array<Record<string, string>> = [
      { title: `${post.title} - Abid Famasya` },
      { name: "description", content: description },
      { name: "author", content: "Abid Famasya" },
      { property: "article:author", content: "Abid Famasya" },
      { property: "article:published_time", content: post.created_at },
      { property: "og:title", content: post.title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:locale", content: locale },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: post.title },
      { name: "twitter:description", content: description },
    ];
    if (alt) {
      meta.push({
        property: "og:locale:alternate",
        content: LANG_LOCALES[alt.lang] ?? "id_ID",
      });
    }

    const jsonLd: Record<string, unknown> = {
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
      inLanguage: post.lang,
    };
    if (alt) {
      jsonLd.workTranslation = {
        "@type": "CreativeWork",
        name: alt.title,
        url: `https://abidf.com/writings/${alt.slug}`,
        inLanguage: alt.lang,
      };
    }

    return { meta, links, scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] };
  },
  component: BlogPost,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getTextFromChildren(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getTextFromChildren).join("");
  if (children && typeof children === "object" && "props" in children) {
    return getTextFromChildren(
      (children as { props: { children?: React.ReactNode } }).props.children,
    );
  }
  return "";
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function createHeading(Tag: "h1" | "h2" | "h3") {
  return function Heading({ children, ...props }: { children?: React.ReactNode }) {
    return (
      <Tag id={slugify(getTextFromChildren(children))} {...props}>
        {children}
      </Tag>
    );
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

function BlogPost() {
  const post = Route.useLoaderData();
  const alt = getAlternatePost(post);

  return (
    <article className="space-y-6">
      <nav className="text-sm text-gray-500 flex items-center gap-1 bg-zinc-100 p-2 rounded">
        <Link to="/" className="hover:text-sky-700">
          home
        </Link>
        <span>/</span>
        <Link to="/writings" className="hover:text-sky-700">
          writings
        </Link>
        <span>/</span>
        <span className="text-gray-700">{post.title}</span>
        <span className="text-gray-400">[{LANG_LABELS[post.lang]}]</span>
        {alt && (
          <Link
            to="/writings/$slug"
            params={{ slug: alt.slug }}
            className="text-gray-400 hover:text-gray-600 hover:no-underline!"
          >
            [{LANG_LABELS[alt.lang]}]
          </Link>
        )}
      </nav>
      <header>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time className="text-sm text-gray-500">
          {new Date(post.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Markdown
          components={{
            h1: createHeading("h1"),
            h2: createHeading("h2"),
            h3: createHeading("h3"),
            a: ({ href, children, ...props }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
              </a>
            ),
          }}
        >
          {post.content}
        </Markdown>
      </div>
    </article>
  );
}
