import { defineCollection, reference } from "astro:content";
import { z } from "zod";

import { file } from "astro/loaders";

import _ from "lodash";
import { parse as parseToml } from "toml";
import { blogLoader } from "./content/loader";

const blog = defineCollection({
  loader: blogLoader({ pattern: "**/*.mdx", base: "./src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: z.object({
        src: image(),
        alt: z.string(),
      }),
      pubDate: z.coerce.date(),
      author: z.string().optional(),
      draft: z.boolean().default(false),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(reference("tags")),
      sections: reference("sections"),
      foreword: z.string(),
    }),
});

const tags = defineCollection({
  loader: file("src/data/meta/tags.toml", {
    parser: (text) => parseToml(text).tags,
  }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    color: z
      .string()
      .default("gray")
      .transform((color) => color),
  }),
});

type RawSection = {
  id: string;
  name?: string;
  description?: string;
  parent?: string;
};

const parseNames = (sections: RawSection[]): RawSection[] =>
  sections.map((section) => ({
    ...section,
    name: section.name ?? _.startCase(section.id.replace("-", " ")),
  }));

const sections = defineCollection({
  loader: file("src/data/meta/sections.toml", {
    parser: (text): RawSection[] => parseNames(parseToml(text).sections),
  }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    parent: reference("sections").optional(),
  }),
});

export const collections = { blog, tags, sections };
