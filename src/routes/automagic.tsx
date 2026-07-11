import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/automagic")({
  head: () => ({
    meta: [
      {
        title: "Automagic Systems - Abid Famasya",
      },
      {
        name: "description",
        content:
          "Human-first automation for a post-boring world. We build tools that automate the mundane, while keeping people in control.",
      },
      {
        property: "og:title",
        content: "Automagic Systems - Abid Famasya",
      },
      {
        property: "og:description",
        content:
          "Human-first automation for a post-boring world. We build tools that automate the mundane, while keeping people in control.",
      },
      {
        property: "og:url",
        content: "https://abidf.com/automagic",
      },
      {
        name: "twitter:title",
        content: "Automagic Systems - Abid Famasya",
      },
      {
        name: "twitter:description",
        content:
          "Human-first automation for a post-boring world. We build tools that automate the mundane, while keeping people in control.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://abidf.com/automagic",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="mb-2">
        <h1 className="font-bold!">Automagic Systems</h1>
        <p className="text-lg text-zinc-600">Human-first automation for a post-boring world</p>
      </div>
      <section className="mt-4 mb-12 space-y-4">
        <div>
          <p>
            Since the dawn of AI, one thing has become clear: humans should do less of the dull stuff
            and stay in charge.
          </p>
          <p>
            At Automagic Systems, we build tools that automate the mundane, while keeping people in
            control.
          </p>
          <p>Because AI is here to serve, not to rule.</p>
        </div>

        <div>
          <h1>Products</h1>
          <div className="space-y-2 bg-blue-50 border border-blue-200 p-4 rounded">
            <h3 className="font-bold">
              Zenfin <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs">deceased</span>
            </h3>
            <p>
              Turns WhatsApp chats into personal money tracking and insights. No spreadsheets, no
              dashboards, no stress. Just chat like a human, we'll handle the boring bits.
            </p>
          </div>
        </div>

        <div>
          <h1>Our believes</h1>
          <ol className="list-decimal space-y-1 pl-6">
            <li>Every system should have a brain.</li>
            <li>Humans should be the boss, not the AI.</li>
            <li>Good automation feels like magic.</li>
            <li>AI isn't the future, it's here late.</li>
          </ol>
        </div>

        <div className="space-y-4">
          <h1>Contact</h1>
          <p>
            <a href="mailto:automagic@abidf.com">automagic@abidf.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
