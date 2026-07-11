import type { QueryClient } from "@tanstack/react-query";
import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Abid Famasya",
      },
      {
        name: "description",
        content: "Abid Famasya Personal Site",
      },
      {
        property: "og:site_name",
        content: "Abid Famasya",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://abidf.com",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Abid Famasya",
          url: "https://abidf.com",
          description: "Abid Famasya Personal Site",
          publisher: {
            "@type": "Person",
            name: "Abid Famasya",
            url: "https://abidf.com",
            sameAs: [
              "https://twitter.com/famasya",
              "https://linkedin.com/in/abid-famasya",
              "https://github.com/famasya",
              "https://scholar.google.com/citations?user=JGNxsqcAAAAJ&hl=en",
            ],
          },
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="max-w-4xl mx-auto min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 px-4 lg:px-0">{children}</main>
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
