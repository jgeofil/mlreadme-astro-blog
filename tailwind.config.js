/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const theme = require('tailwindcss/defaultTheme')


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
	plugins: [
		require('daisyui')
	],
	daisyui: {
		themes: [
			'light',
			{black: {
				"color-scheme": "dark",
				"primary": "#373737",
				"secondary": "#373737",
				"accent": "#373737",
				"base-100": "#000000",
				"base-200": "#141414",
				"base-300": "#262626",
				"base-content": "#d6d6d6",
				"neutral": "#373737",
				"info": "#0000ff",
				"success": "#008000",
				"warning": "#ffff00",
				"error": "#ff0000",
				"--rounded-box": "0",
				"--rounded-btn": "0",
				"--rounded-badge": "0",
				"--animation-btn": "0",
				"--animation-input": "0",
				"--btn-focus-scale": "1",
				"--tab-radius": "0",
			  },
			},
			  'lofi',
			  'nord',
			  'sunset'
			], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	  },

}
