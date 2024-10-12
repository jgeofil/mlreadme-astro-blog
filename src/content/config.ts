import { defineCollection, reference, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

import { parse as parseToml } from "toml";

const blog = defineCollection({
	loader: glob({ pattern: "**\/*.mdx", base: "./src/data/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		cover: z.object(
			{
				src: z.string(),
				alt: z.string()
			}
		),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(reference('tags'))
	}),
});

const tags = defineCollection({
	loader: file("src/data/tags.toml", { parser: (text) => parseToml(text).tags }),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		description: z.string()
	})
})

export const collections = { blog, tags };
