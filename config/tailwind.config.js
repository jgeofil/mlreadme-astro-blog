/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'
import { fontSize } from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				red: colors.red,
				orange: colors.orange,
				yellow: colors.yellow,
				green: colors.green,
				teal: colors.teal,
				blue: colors.blue,
				indigo: colors.indigo,
				purple: colors.purple,
				pink: colors.pink,
				white: '#ffffff',
				black: '#000000',
				primary: '#0000ff',
				secondary: '#ff0000',
				tertiary: '#00ff00',
				accent: '#0000ff',
				neutral: {
					DEFAULT: '#202020',
					dark: '#202020',
					light: '#f9fafb',
					xlight: '#ffffff',
					focus: '#353535'
				},
				info: '#003e8e',
				success: '#008ca8',
				warning: '#ff0000',
				error: '#ff0000'
			},
			fontFamily: {
				mono: ['IBM Plex Mono'],
				display: ['Exo'],
				body: ['IBM Plex Sans']
			},

			fontSize: {
				xs: fontSize.xs,
				sm: fontSize.sm,
				base: '0.90rem',
				lg: fontSize.lg,
				xl: fontSize.xl
			},

			listStyleType: {
				dash: '"‒"',
				bull: '"⁃"',
				em: '"—"',
				dot: '"⋅"',
				tilde: '"~"',
				carret: '">"'
			}
		}
	},
	plugins: []
}
