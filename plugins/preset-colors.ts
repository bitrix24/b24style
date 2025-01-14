// import tailwindColors from 'tailwindcss/colors'; ////

const palette = {
	beige: '#fdfae1', // orange-130
	white: '#ffffff',
	black: {
		DEFAULT: '#333333',
		dark: '#0f0f0f',
		ebony: '#000000'
	},
	gray: {
		20: '#f8fafb',
		30: '#f5f7f8', /* << #f6f8f9 ~ 0.2 */
		40: '#f1f4f6',
		50: '#eef2f4', /* << tertiary */
		100: '#edeef0', /* <<< ui-label-tag-light */
		150: '#e6e8e9',
		190: '#e2e3e5', /* << tag-9 */
		200: '#dfe0e3',
		250: '#dde2e5',
		300: '#d5d7db',
		320: '#cfd4d8',
		330: '#c6cdd3',
		340: '#ccd3dd',  /* << tag-8 */
		350: '#c9ccd0',
		DEFAULT: '#bdc1c6',
		400: '#bdc1c6',
		500: '#a8adb4',
		550: '#9fa4ab',
		600: '#9499a4',
		650: '#868d95',
		700: '#838c95',
		750: '#80868e',
		760: '#828b95', /* << subtle */
		800: '#6a737f', /* <<< --ui-label-color */
		850: '#5b6573',
		900: '#525c69',
		950: '#333333' /* << black.DEFAULT */
		//dark: '#0f0f0f',
		//black: '#000000' /* @memo not use --color-solid -> this reset border-solid */
	},
	slate: {
		50: '#f0f6ff',
		100: '#dce3ef',
		150: '#d2dae7',
		200: '#c8d1df',
		250: '#c2d1f0', /* << tag-5 */
		300: '#b7c2d2',
		400: '#a3afc2',
		DEFAULT: '#93a0b4',
		500: '#93a0b4',
		600: '#6e7d96',
		700: '#5d6e89',
		800: '#4c5f7b',
		850: '#3b506e',
		900: '#2f4265',
		950: '#162455'
	},
	red: {
		100: '#fff8f8',
		150: '#fff0f0',
		200: '#ffe8e8', /* << alert.background */
		250: '#ffdcdb',
		270: '#fdd5d3',
		300: '#ffcdcc',
		350: '#f2b6b3',
		400: '#ff9a97',
		450: '#ff7c78',
		DEFAULT: '#ff5752',
		500: '#ff5752', /* << alert DEFAULT || alert.text */
		600: '#f4433e',
		650: '#fb6dba', /* << accent-pink */
		700: '#e92f2a', /* << alert.background-on */
		720: '#f0371b', /* << #f1361a ~ 0.17 */
		solid: '#f0371b',
		730: '#d24430',
		750: '#d7413c',
		760: '#c43d51',
		790: '#cc1c00',
		800: '#c21b16',
		850: '#a21429',
		900: '#9a0703', /* << alert.link */
		930: '#851021',
		950: '#800602'
	},
	orange: {
		30: '#fdfae1', /* << beige || note */
		100: '#fffaf0',
		150: '#fff5e3',
		200: '#fff1d6', /* << warning.background */
		230: '#fef3b8', /* << accent-yellow */
		250: '#ffe9be',
		300: '#ffe1a6',
		350: '#f1e295', /* #f1e295 ~ 3.62 */
		370: '#dfc684', /* << tag-7 */
		400: '#ffc34d',
		DEFAULT: '#ffa900',
		500: '#ffa900', /* << warning.DEFAULT || warning.text */
		530: '#fba467',
		550: '#eba51c',
		600: '#e89b06', /* << extranet */
		700: '#c48300', /* << warning.background-on */
		750: '#a07f27',
		760: '#ae914b', /* << accent-brown */
		800: '#9f6a00',
		900: '#7a5100', /* << warning.link */
		950: '#614000'
	},
	green: {
		100: '#fafded',
		150: '#f5fcde',
		200: '#f1fbd0', /* << success.background */
		250: '#faf6c3',
		270: '#eaf5c5',
		280: '#e5f1bf',
		300: '#e2f1b3',
		330: '#d3e59a',
		350: '#cfe780',
		360: '#dbf087', /* << tag-3 */
		370: '#d2f95f',
		400: '#bbde4d',
		430: '#b2e232',
		450: '#bbed21',
		DEFAULT: '#9dcf00',
		500: '#9dcf00', /* << success.DEFAULT || success.text */
		550: '#95c500',
		570: '#a2bf54',
		600: '#8dbb00',
		700: '#7fa800', /* << success.background-on */
		730: '#86a732',
		780: '#668d13',
		800: '#688800',
		900: '#506900', /* << success.link */
		950: '#3d4f00'
	},
	collab: {
		50: '#f8fff0',
		100: '#f2fee2',
		150: '#eeffda',
		200: '#e9ffcf',
		250: '#dbfcbe',
		300: '#d4fdb0',
		380: '#87eda0', /* << tag-4 */
		400: '#8cef73',
		DEFAULT: '#6be860',
		500: '#6be860', /* << collab-btn-hover v2 */
		600: '#19cc45', /* << collab-btn */
		650: '#29ad49', /* << accent-green */
		700: '#00a94e', /* << collab-btn-hover */
		800: '#1e8d36',
		900: '#065217',
		950: '#052e16'
	},
	blue: {
		100: '#f4fcfe',
		150: '#ecfafe',
		200: '#e5f9ff', /* << info.background */
		250: '#d3f4ff',
		270: '#d6f1fb',
		300: '#c3f0ff',
		310: '#c5f1ff',
		320: '#bcedfc', /* << tag-1 | #b6edff ~ 1.27 */
		400: '#7fdefc',
		450: '#3eddff',
		DEFAULT: '#2fc6f6',
		500: '#2fc6f6',  /* << info.DEFAULT || info.text || primary.DEFAULT */
		530: '#3bc8f5',
		550: '#12b1e3',
		570: '#00baf2', /* << tag-2 */
		575: '#00ace3', /* << --im-color-accent-blue */
		600: '#11a9d9',
		620: '#0aa0d0',
		630: '#37aed4',
		650: '#399fc2',
		660: '#559be6', /* << accent-light-blue */
		700: '#008dba', /* << info.background-on */
		750: '#328ba9',
		800: '#00789e',
		850: '#2066b0', /* << primary-link */
		900: '#006484', /* << info.link */
		950: '#004f69' /* << secondary-link */
	},
	cyan: {
		50: '#e9f9fc',
		100: '#dbf3fa',
		150: '#d1eef9',
		160: '#c5e7f4',
		200: '#c3e6f4',
		230: '#aee0f2',
		250: '#ace5ec', /* << tag-6 */
		300: '#89d9eb',
		310: '#80dce8',
		320: '#6ed7e5',
		350: '#55d0e0', /* << accent-aqua */
		400: '#22b9b7',
		DEFAULT: '#05b5ab',
		500: '#05b5ab', /* << accent-turquoise */
		600: '#009ea3',
		700: '#008394',
		800: '#006880',
		850: '#004f69', /* << secondary-link */
		900: '#004157',
		950: '#003242'
	},
	ai: {
		10: '#f6f2fe',
		50: '#f0edfc',
		100: '#e3ddf7',
		150: '#e7d8fa', /* << Lable-lavander */
		200: '#d1c5ef',
		250: '#cdbfe8',
		300: '#c0ade6',
		330: '#b095dc', /* << copilot-secondary */
		350: '#a77bde', /* << accent-purple */
		370: '#a977fa',
		400: '#a36ff1',
		450: '#935bec',
		DEFAULT: '#8e52ec',
		500: '#8e52ec', /* << copilot-primary | accent-lavender */
		550: '#8447e4',
		600: '#8044df',
		700: '#7437d3',
		800: '#682ac6', /* << copilot-dark */
		900: '#6026b8',
		950: '#501e9f'
	}
}

export default {
	theme: {
		colors: Object.assign(
			{
				inherit: 'inherit',
				current: 'currentColor',
				transparent: 'transparent'
			},
			palette,
			{
				primary: {
					'DEFAULT': palette.blue['500'] || '#2fc6f6',
					'on': palette.white || '#ffffff',
					'text': palette.black.DEFAULT || '#333333',
					'background': palette.white || '#ffffff',
					'background-on': palette.black.DEFAULT || '#333333',
					'link': palette.blue['850'] || '#2066b0'
				},
				secondary: {
					'DEFAULT': palette.gray['500'] || '#a8adb4',
					'on': palette.white || '#ffffff',
					'text': palette.gray['900'] || '#525c69',
					'background': palette.gray['100'] || '#edeef0',
					'background-on': palette.gray['800'] || '#6a737f',
					'link': palette.blue['950'] || '#004f69'
				},
				alert: {
					'DEFAULT': palette.red['500'] || '#ff5752',
					'on': palette.white || '#ffffff',
					'text': palette.red['500'] || '#ff5752',
					'background': palette.red['200'] || '#ffe8e8',
					'background-on': palette.red['700'] || '#e92f2a',
					'link': palette.red['900'] || '#9a0703'
				},
				success: {
					'DEFAULT': palette.green['500'] || '#9dcf00',
					'on': palette.white || '#ffffff',
					'text': palette.green['500'] || '#9dcf00',
					'background': palette.green['200'] || '#f1fbd0',
					'background-on': palette.green['700'] || '#7fa800',
					'link': palette.green['900'] || '#506900'
				},
				warning: {
					'DEFAULT': palette.orange['500'] || '#ffa900',
					'on': palette.white || '#ffffff',
					'text': palette.orange['500'] || '#ffa900',
					'background': palette.orange['200'] || '#fff1d6',
					'background-on': palette.orange['700'] || '#c48300',
					'link': palette.orange['900'] || '#7a5100'
				},
				info: {
					'DEFAULT': palette.blue['500'] || '#2fc6f6',
					'on': palette.white || '#ffffff',
					'text': palette.blue['500'] || '#2fc6f6',
					'background': palette.blue['200'] || '#e5f9ff',
					'background-on': palette.blue['700'] || '#008dba',
					'link': palette.blue['900'] || '#006484'
				},
				
				note: palette.orange['30'] || '#fdfae1',
				subtle: palette.gray['700'] || '#828b95',
				extranet: palette.orange['600'] || '#e89b06',
				tertiary: palette.gray['50'] || '#eef2f4',
				
				tag: {
					'1': palette.blue['320'] || '#bcedfc',
					'2': palette.blue['570'] || '#00baf2',
					'3': palette.green['360'] || '#dbf087',
					'4': palette.collab['380'] || '#87eda0',
					'5': palette.slate['250'] || '#c2d1f0',
					'6': palette.cyan['250'] || '#ace5ec',
					'7': palette.orange['370'] || '#dfc684',
					'8': palette.gray['340'] || '#ccd3dd',
					'9': palette.gray['190'] || '#e2e3e5'
				},
				
				accent: {
					'light-blue': palette.blue['660'] || '#559be6',
					'aqua': palette.cyan['350'] || '#55d0e0',
					'pink': palette.red['650'] || '#fb6dba',
					'brown': palette.orange['760'] || '#ae914b',
					'green': palette.collab['650'] || '#29ad49',
					'turquoise': palette.cyan['500'] || '#05b5ab',
					'purple': palette.ai['350'] || '#a77bde',
					'lavender': palette.ai['500'] || '#8e52ec',
					'yellow': palette.orange['230'] || '#fef3b8'
				},
				
				copilot: {
					primary: palette.ai['500'] || '#8e52ec',
					secondary: palette.ai['330'] || '#b095dc',
					dark: palette.ai['800'] || '#682ac6'
				},
				
				base: {
					20: palette.gray['20'] || '#f8fafb',
					30: palette.gray['30'] || '#f5f7f8', /* << #f6f8f9 ~ 0.2 */
					40: palette.gray['40'] || '#f1f4f6',
					50: palette.gray['50'] || '#eef2f4', /* << tertiary */
					100: palette.gray['100'] || '#edeef0', /* <<< ui-label-tag-light */
					150: palette.gray['150'] || '#e6e8e9',
					190: palette.gray['190'] || '#e2e3e5', /* << tag-9 */
					200: palette.gray['200'] || '#dfe0e3',
					250: palette.gray['250'] || '#dde2e5',
					300: palette.gray['300'] || '#d5d7db',
					320: palette.gray['320'] || '#cfd4d8',
					330: palette.gray['330'] || '#c6cdd3',
					340: palette.gray['340'] || '#ccd3dd', /* << tag-8 */
					350: palette.gray['350'] || '#c9ccd0',
					400: palette.gray['400'] || '#bdc1c6',
					500: palette.gray['500'] || '#a8adb4',
					550: palette.gray['550'] || '#9fa4ab',
					600: palette.gray['600'] || '#9499a4',
					650: palette.gray['650'] || '#868d95',
					700: palette.gray['700'] || '#838c95',
					750: palette.gray['750'] || '#80868e',
					760: palette.gray['760'] || '#828b95', /* << symlink-subtle */
					800: palette.gray['800'] || '#6a737f', /* <<< --ui-label-color */
					850: palette.gray['850'] || '#5b6573',
					900: palette.gray['900'] || '#525c69',
					950: palette.gray['950'] || palette.black.DEFAULT,
					master: palette.black.DEFAULT || '#333333',
					dark: palette.black.dark || '#0f0f0f',
					ebony: palette.black.ebony || '#000000',
				}
			}
		)
	}
}