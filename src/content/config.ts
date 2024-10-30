import { defineCollection, reference, z, type CollectionEntry } from 'astro:content'

import { glob, file } from 'astro/loaders'

import { parse as parseToml } from 'toml'
import _ from 'lodash'
import { blogLoader } from './loader'

const blog = defineCollection({
	loader: blogLoader({ pattern: '**/*.mdx', base: './src/data/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		cover: z.object({
			src: z.string(),
			alt: z.string()
		}),
		pubDate: z.coerce.date(),
		author: z.string().optional(),
		draft: z.boolean().default(false),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(reference('tags')),
		sections: reference('sections'),
		foreword: z.string(),
	})
})

const tags = defineCollection({
	loader: file('src/data/meta/tags.toml', { parser: (text) => parseToml(text).tags }),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		description: z.string(),
		color: z
			.string()
			.default('gray')
			.transform((color) => color)
	})
})

const parseNames = (sections: CollectionEntry<'sections'>[]) => {
	return sections.map((section) => ({
	  ...section, // Copy existing properties
	  name: _.startCase(section.id.replace('-', ' ')) // Add the 'name' property
	}));
};

const sections = defineCollection({
	loader: file('src/data/meta/sections.toml', { parser: (text) => parseNames(parseToml(text).sections)}),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		description: z.string(),
		parent: z.string(reference('sections')).optional()
	})
})

export const collections = { blog, tags, sections }
