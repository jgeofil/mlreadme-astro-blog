import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

import { parse as parseToml } from "toml";

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
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
