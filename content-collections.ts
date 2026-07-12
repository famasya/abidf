import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "./src/writings",
  include: "*.md",
  schema: z.object({
    title: z.string(),
    created_at: z.string(),
    description: z.string().optional(),
    lang: z.enum(["en", "id"]).optional().default("en"),
  }),
  transform: ({ _meta, ...document }) => {
    return {
      ...document,
      slug: _meta.path,
    };
  },
});

export default defineConfig({
  content: [posts],
});
