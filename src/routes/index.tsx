import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Abid Famasya",
      },
      {
        name: "description",
        content:
          "Abid Famasya is a healthtech CTO, researcher, and indie builder. He leads Trustmedis, a health-tech company serving millions of patients across Indonesia.",
      },
      {
        property: "og:title",
        content: "Abid Famasya",
      },
      {
        property: "og:description",
        content:
          "Abid Famasya is a healthtech CTO, researcher, and indie builder. He leads Trustmedis, a health-tech company serving millions of patients across Indonesia.",
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
          "Abid Famasya is a healthtech CTO, researcher, and indie builder. He leads Trustmedis, a health-tech company serving millions of patients across Indonesia.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://abidf.com/",
      },
    ],
  }),
  component: App,
});

function App() {
  return (
    <div className="space-y-2">
      <h1>Hi, I'm Abid!</h1>
      <p>
        Currently, I lead computer nerds as the CTO of Trustmedis, a health-tech company that helps
        healthcare providers to serve millions of patients across Indonesia.
      </p>
      <p>
        Reach me out on <a href="https://twitter.com/famasya">Twitter</a>,{" "}
        <a href="https://linkedin.com/in/abid-famasya">Linkedin</a>, or just drop me an email at
        contact@abidf.com
      </p>
    </div>
  );
}
