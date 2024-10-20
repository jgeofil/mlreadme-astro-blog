import { symbol } from 'astro:schema';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"primary": '#0000ff',
				"secondary": '#ff0000',
				"tertiary": '#00ff00',
				"accent": '#0000ff',
				"neutral": '#808080',
				"neutral-focus": '#353535',
				"info": '#003e8e',
				"success": '#008ca8',
				"warning": '#ff0000',
				"error": '#ff0000',

			},
			fontFamily: {
				mono: ['IBM Plex Mono'],
				display: ['Exo'],
				body: ['IBM Plex Sans'],
			},

			listStyleType: {
				dash: '\"‒\"',
				bull:'\"⁃\"',
				em:'\"—\"',
				dot:'\"⋅\"',
				tilde:'\"~\"',
				carret:'\">\"',
			}
		},
	},
	plugins: [],
}
