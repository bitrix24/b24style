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
		require('@bitrix24/b24style')({
			logs: true,
			useLocalFonts: true,
		}),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	],
}

module.exports = config