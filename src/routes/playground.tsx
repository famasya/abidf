import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/playground")({
  head: () => ({
    meta: [
      {
        title: "Playground - Abid Famasya",
      },
      {
        name: "description",
        content: "Projects and other experiments from Abid Famasya",
      },
    ],
  }),
  component: RouteComponent,
});

const projects = [
  {
    name: "Zenfin",
    description: "WhatsApp based personal expense tracker",
    link: "https://zenfin.app/",
  },
  {
    name: "BetterHN",
    description: "Clean and sleek Hacker News reader",
    link: "https://betterhn.com/top",
  },
  {
    name: "Compare Openrouter Models",
    description: "Compare pricing across different AI models available on OpenRouter",
    link: "https://compare-openrouter-models.pages.dev/",
  },
  {
    name: "Murzfeed + FOMO reader",
    description: "Indonesian tech worker forum aggregator",
    link: "https://murzlite.vercel.app/",
  },
  {
    name: "Debug Openrouter Models",
    description: "Debug structured outputs from OpenRouter",
    link: "https://structured-outputs-playground.pages.dev/",
  },
  {
    name: "News API ID",
    description: "Indonesian News Feed (API Berita Bahasa Indonesia)",
    link: "https://news-api-id.famasya.workers.dev/",
  },
];

function RouteComponent() {
  return (
    <div>
      <h1>Playground</h1>

      <div className="grid grid-cols-2 auto-rows-fr lg:grid-cols-3 gap-4 pt-2 mb-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-4 border border-zinc-300 bg-gradient-to-b from-white to-white hover:from-white hover:to-zinc-100 rounded flex flex-col"
          >
            <h2 className="font-semibold">{project.name}</h2>
            <p className="my-1 text-zinc-700 text-sm flex-1 h-full">{project.description}</p>
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2"
              >
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-sm text-zinc-600">
        Explore other projects on{" "}
        <a
          href="https://github.com/famasya?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
