import svgToDataUri from 'mini-svg-data-uri';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

let config = {
	important: true,
	content: [
		'./docs/.vitepress/**/*.{js,ts,vue}',
		'./docs/**/*.md'
	],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [
		require('./dist/index')({
			logs: false,
			useLocalFonts: true,
		}),
		//require('@tailwindcss/typography'),
		//require('@tailwindcss/forms'),
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'bg-grid': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			)
			matchUtilities(
				{
					highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			)
		},
	],
}

module.exports = config