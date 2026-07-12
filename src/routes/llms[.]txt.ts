import { createFileRoute } from "@tanstack/react-router";
import { getSortedPosts } from "../utils/writings";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        const posts = getSortedPosts();
        const content = `# Abid Famasya

> Abid Famasya is a healthtech CTO, researcher, and indie builder. He leads Trustmedis, a health-tech company that helps healthcare providers serve millions of patients across Indonesia. He holds a Master's degree in Informatics from ITS Surabaya, specializing in natural language processing.

## Key Pages
- [Home](https://abidf.com/)
- [About](https://abidf.com/about)
- [Writings](https://abidf.com/writings)

## Writings
${posts.map((post) => `- [${post.title}](https://abidf.com/writings/${post.slug})${post.lang === "id" ? " [ID]" : ""}`).join("\n")}

## Key Facts
- CTO of Trustmedis since 2019
- Master's degree in Informatics from ITS Surabaya, specializing in NLP
- Developed the first Biomedical Named Entity Recognition (BioNER) model in Bahasa Indonesia
- Builds indie tools under Automagic Systems (e.g. Zenfin (now deceased), a WhatsApp-based personal finance tracker)
- Contributed to KawalCovid19 during the COVID-19 pandemic
- Contact: [contact@abidf.com](mailto:contact@abidf.com)

## Links
- [Twitter](https://twitter.com/famasya)
- [LinkedIn](https://linkedin.com/in/abid-famasya)
- [GitHub](https://github.com/famasya)
- [Google Scholar](https://scholar.google.com/citations?user=JGNxsqcAAAAJ&hl=en)
`;

        return new Response(content, {
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
          },
        });
      },
    },
  },
});
