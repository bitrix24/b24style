/**
 * @memo set {h1...txt-lg} from typography.json and we skip color for h1...h6
 */

const fontFamilySystem = [
	'system-ui',
	'-apple-system',
	'BlinkMacSystemFont',
	'"Segoe UI"',
	'Roboto',
	'Ubuntu',
	'"Helvetica Neue"',
	'Arial',
	'sans-serif',
	'"Apple Color Emoji"',
	'"Segoe UI Emoji"',
	'"Segoe UI Symbol"'
]

const fontSize = {
	// font-size: 7px line-height: 1 ////
	'7xs': ['7px', {lineHeight: '0.7rem'}],
	// font-size: 8px line-height: 1 ////
	'6xs': ['8px', {lineHeight: '0.7rem'}],
	// font-size: 9px line-height: 1 ////
	'5xs': ['9px', {lineHeight: '0.85rem'}],
	// font-size: 10px line-height: 1 ////
	'4xs': ['10px', {lineHeight: '0.85rem'}],
	// font-size: 11px line-height: 1 ////
	'3xs': ['11px', {lineHeight: '0.9rem'}],
	// font-size: 12px line-height: 16px ////
	xs: ['12px', {lineHeight: '1rem'}],
	// font-size: 13px line-height: 16px ////
	sm: ['13px', {lineHeight: '1rem'}],
	// font-size: 14px line-height: 20px ////
	base: ['14px', {lineHeight: '1.25rem'}],
	// font-size: 14px line-height: 20px ////
	md: ['14px', {lineHeight: '1.25rem'}],
	// font-size: 15px line-height: 20px ////
	lg: ['15px', {lineHeight: '1.25rem'}],
	// font-size: 16px line-height: 24px ////
	xl: ['16px', {lineHeight: '1.5rem'}],
	// font-size: 18px line-height: 28px ////
	'2xl': ['18px', {lineHeight: '1.75rem'}],
	// font-size: 22px line-height: 28px ////
	'3xl': ['22px', {lineHeight: '1.75rem'}],
	// font-size: 24px line-height: 32px ////
	'4xl': ['24px', {lineHeight: '2rem'}],
	// font-size: 26px line-height: 26px ////
	'4.5xl': ['26px', {lineHeight: '1.625rem'}],
	// font-size: 28px line-height: 36px ////
	'5xl': ['28px', {lineHeight: '2.25rem'}],
	// font-size: 36px line-height: 40px ////
	'6xl': ['2.25rem', {lineHeight: '2.5rem'}],
	// font-size: 48px line-height: 1; ////
	'7xl': ['3rem', {lineHeight: '1'}],
	// font-size: 60px line-height: 1; ////
	'8xl': ['3.75rem', {lineHeight: '1'}],
	// font-size: 72px line-height: 1; ////
	'9xl': ['4.5rem', {lineHeight: '1'}],
	// font-size: 6px line-height: 1; ////
	'10xl': ['6rem', {lineHeight: '1'}],
	// font-size: 128px line-height: 1; ////
	'11xl': ['8rem', {lineHeight: '1'}],
}

const lineHeight = {
	reset: '1',
	none: '1',
	'3xs': '1.2',
	tight: '1.25',
	'2xs': '1.3',
	sm: '1.35',
	snug: '1.375',
	md: '1.4',
	lg: '1.5',
	normal: '1.5',
	xl: '1.62',
	relaxed: '1.625',
	'2xl': '1.75',
	'3xl': '2',
	loose: '2',
	3: '.75rem',
	4: '1rem',
	5: '1.25rem',
	6: '1.5rem',
	7: '1.75rem',
	8: '2rem',
	9: '2.25rem',
	10: '2.5rem',
}

const fontWeight = {
	thin: '100',
	extralight: '200',
	light: '300',
	regular: '400',
	normal: '400',
	medium: '500',
	semibold: '600',
	bold: '700',
	extrabold: '800',
	black: '900',
	extrablack: '950'
}

export default {
	theme: {
		fontFamily: {
			// region Fonts.Base ////
			'b24-system': fontFamilySystem,
			'b24-system-mono': [
				'ui-monospace',
				'SFMono-Regular',
				'"SF Mono"',
				'Consolas',
				'"Liberation Mono"',
				'Menlo',
				'monospace',
			],
			'b24-primary': fontFamilySystem,
			'b24-secondary': fontFamilySystem,
			'b24-helvetica': [
				'"Helvetica Neue"',
				'Helvetica',
				'Arial',
				'sans-serif'
			],
			// endregion ////
			
			// region Fonts.Custom ////
			'b24-opensans': [
				'"Open Sans"',
				'"Helvetica Neue"',
				'Helvetica',
				'Arial',
				'sans-serif'
			],
			'b24-roboto': [
				'Roboto',
				'"Helvetica Neue"',
				'Helvetica',
				'Arial',
				'monospace'
			],
			'b24-roboto-mono': [
				'"Roboto Mono"',
				'"Helvetica Neue"',
				'Helvetica',
				'Arial',
				'sans-serif'
			],
			'b24-montserrat': [
				'Montserrat',
				'"Helvetica Neue"',
				'Helvetica',
				'Arial',
				'sans-serif'
			],
			'b24-comforter-brush': [
				'"Comforter Brush"'
			],
			// endregion ////
		},
		fontSize: {
			...fontSize,
			'h1': [
				fontSize['5xl'][0],
				{
					lineHeight: lineHeight['3xs'],
					fontWeight: fontWeight.light,
				}
			],
			'h2': [
				fontSize['4xl'][0],
				{
					lineHeight: lineHeight['2xs'],
					fontWeight: fontWeight.light,
				}
			],
			'h3': [
				fontSize['3xl'][0],
				{
					lineHeight: lineHeight['2xs'],
					fontWeight: fontWeight.light,
				}
			],
			'h4': [
				fontSize['2xl'][0],
				{
					lineHeight: lineHeight['sm'],
					fontWeight: fontWeight.normal,
				}
			],
			'h5': [
				fontSize['xl'][0],
				{
					lineHeight: lineHeight['sm'],
					fontWeight: fontWeight.normal,
				}
			],
			'h6': [
				fontSize['md'][0],
				{
					lineHeight: lineHeight['md'],
					fontWeight: fontWeight.normal,
				}
			],
			'txt-xs': [
				fontSize['xs'][0],
				{
					lineHeight: lineHeight['sm'],
					fontWeight: fontWeight.normal,
				}
			],
			'txt-sm': [
				fontSize['sm'][0],
				{
					lineHeight: lineHeight['md'],
					fontWeight: fontWeight.normal,
				}
			],
			'txt-md': [
				fontSize['md'][0],
				{
					lineHeight: lineHeight['md'],
					fontWeight: fontWeight.normal,
				}
			],
			'txt-lg': [
				fontSize['lg'][0],
				{
					lineHeight: lineHeight['md'],
					fontWeight: fontWeight.normal,
				}
			],
		},
		lineHeight: lineHeight,
		fontWeight: fontWeight
	}
}