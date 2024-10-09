import { defineCollection, reference, z, getEntries, getCollection } from 'astro:content';

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
		tags: z.array(reference('tag')).optional(),
	}),
});

const tag = defineCollection({
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1423872976.
	type: 'content',
	schema: z.object({
		name: z.string(),
		description: z.string(),
		count: z.number().optional()
	}),
})

export const collections = { blog, tag };
