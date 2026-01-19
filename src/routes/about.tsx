import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About - Abid Famasya",
      },
      {
        name: "description",
        content:
          "Abid is a healthtech CTO, researcher, and indie builder passionate about small tools that solve boring problems.",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="mb-2">
        <h1 className="font-bold!">tl;dr</h1>
        <p>
          I"m a healthtech CTO, researcher, and indie builder passionate about small tools that
          solve boring problems.
        </p>
      </div>
      <section id="experience" className="mt-4 mb-12 space-y-4">
        <div className="space-y-4">
          <h1>Background</h1>
          <p>
            I have been working as a CTO at Trustmedis since 2019, a company that transitioned from
            a software house to a healthtech provider specializing in health information systems for
            healthcare providers. We have been partnering with{" "}
            <a
              href="https://setkab.go.id/inilah-prosedur-layanan-telemedisin-bagi-pasien-isolasi-mandiri-terkonfirmasi-omicron/"
              target="_blank"
              rel="noopener noreferrer"
            >
              government entities
            </a>{" "}
            and{" "}
            <a
              href="https://news.detik.com/adv-nhl-detikcom/d-6200556/virtu-digilab-national-research-center-fasilitas-penelitian-terbaik-ri"
              target="_blank"
              rel="noopener noreferrer"
            >
              big companies
            </a>{" "}
            to develop digital health technology. My primary role has been to transition our
            project-based system into SaaS products, which now serve millions of patients
            nationwide.
          </p>
          <p>
            I hold a Master"s degree in Informatics from ITS Surabaya, Indonesia, with a
            specialization in natural language processing. As part of my thesis, I developed the
            first{" "}
            <a
              href="https://huggingface.co/abid/indonesia-bioner"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biomedical Named Entity Recognition (BioNER) model in Bahasa Indonesia
            </a>
            , designed to identify biomedical entities in free-text data. I"ve also conducted
            research in other areas, including the Internet of Underwater Things and network
            security.
          </p>
          <p>
            I wrangled Jupyter Notebook daily to explore Transformer architectures, building on top
            of libraries like FlairNLP and Transformers, including scratch implementations in
            PyTorch.
          </p>
        </div>

        <div className="space-y-4">
          <h1>Projects and Other Experiences</h1>
          <p>I believe that humans should be the boss of machines.</p>
          <p>
            I build tools under the name{" "}
            <a href="https://automagic.abidf.com" target="_blank" rel="noopener noreferrer">
              Automagic Systems
            </a>
            : a personal lab focused on automation of boring tasks. My first product,{" "}
            <a href="https://zenfin.app" target="_blank" rel="noopener noreferrer">
              Zenfin
            </a>
            , is a WhatsApp-based personal finance tracker that turns casual chats and receipts into
            clean financial insights using LLMs. Automagic explores ideas at the intersection of
            natural language, small tools, and everyday workflows.
          </p>

          <p>
            Beyond my work, I"ve been actively involved in civic and academic communities. I
            contributed to{" "}
            <a href="https://kawalcovid19.id" target="_blank" rel="noopener noreferrer">
              KawalCovid19
            </a>
            , a grassroots initiative supporting transparent and responsible information
            dissemination during the COVID-19 pandemic, and{" "}
            <a href="https://evoina.org" target="_blank" rel="noopener noreferrer">
              evoina.org
            </a>
            , an organization advocating for scientific research and evolutionary biology in
            Indonesia.
          </p>

          <p>
            I also occasionally teach as a guest lecturer, teaching Database Design and Health
            Informatics, where I share industry practices and research-backed insights to help
            students build practical, scalable systems in the healthcare domain.
          </p>
        </div>

        <div className="space-y-4">
          <h1>Links</h1>
          <p>
            My academic research is available on{" "}
            <a
              href="https://scholar.google.com/citations?user=JGNxsqcAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
            . All my opensource work can be found on{" "}
            <a href="https://github.com/famasya" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
