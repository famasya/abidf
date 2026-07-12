import { createFileRoute } from "@tanstack/react-router";
import { getSortedPosts } from "../../utils/writings";

export const Route = createFileRoute("/api/posts")({
  server: {
    handlers: {
      GET: async () => {
        const posts = getSortedPosts();
        return Response.json({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: posts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Article",
              name: post.title,
              description: post.description ?? "",
              url: `https://abidf.com/writings/${post.slug}`,
              datePublished: post.created_at,
              inLanguage: post.lang,
              author: {
                "@type": "Person",
                name: "Abid Famasya",
                url: "https://abidf.com",
              },
            },
          })),
        });
      },
    },
  },
});
