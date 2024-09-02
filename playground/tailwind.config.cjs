/** @type {import('tailwindcss/types').Config} */
let config = {
	content: [
		'./*.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}'
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('../dist/index')({
			logs: true,
			useLocalFonts: true,
		}),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	],
}

module.exports = config