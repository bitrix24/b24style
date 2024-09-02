import plugin from 'tailwindcss/plugin';
import tailwindcssForms from '@tailwindcss/forms';
import presetBorder from './preset-border';
import presetColors from './preset-colors';
import presetFonts from './preset-fonts';
import presetShadow from './preset-shadow';
import presetSize from './preset-size';
import presetTest from './preset-text';
import presetTransition from './preset-transition';
import presetAnimation from './preset-animation';
import groupsFonts from './fonts';
import fs from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let sourcePathPackage = {
	level1: path.resolve(__dirname, '../package.json'),
	level2: path.resolve(__dirname, '../../package.json'),
};

let b24UiInfo = {
	name: '??',
	version: '??',
	staring: {
		url: ''
	}
};
if(fs.existsSync(sourcePathPackage.level1))
{
	b24UiInfo = require(sourcePathPackage.level1);
}
else if(fs.existsSync(sourcePathPackage.level2))
{
	b24UiInfo = require(sourcePathPackage.level2);
}

interface PluginOptions
{
	/**
	 * If it's true, @bitrix24/ui shows logs in the terminal while CSS is building.
	 *
	 * @default false
	 */
	logs?: boolean;
	
	/**
	 * If it's true, @bitrix24/ui include custom fonts:
	 * * b24-opensans;
	 * * b24-roboto;
	 * * b24-roboto-mono;
	 * * b24-montserrat;
	 * * b24-comforter-brush;
	 *
	 * You need copy them to public folder ~> ./*\/fonts
	 
	 * Use ```npm @bitrix24/ui copy-fonts```. It's copy to public/fonts.
	 * Or set target folder like this ~> ```npm @bitrix24/ui copy-fonts --dest=FolderForPublicContent/fonts```
	 *
	 * @default true
	 */
	useLocalFonts?: boolean;
}

export type {PluginOptions as Config};

export default plugin.withOptions<PluginOptions>(
	(options = {logs: false, useLocalFonts: true}) => ({addBase}) =>
	{
		let isLog = true;
		if(!options.logs)
		{
			isLog = false;
		}
		
		if(options.useLocalFonts)
		{
			if(isLog)
			{
				console.log(`├─ [Font-face]`);
			}
			groupsFonts.getList().forEach((font) =>
			{
				addBase(font.getConfig());
				if(isLog)
				{
					console.log(`├── ✔︎${font.getTitle()}`);
				}
			});
		}
		
		if(isLog)
		{
			let messages = [
				`★ Star ${b24UiInfo.name} on GitHub \t${b24UiInfo.staring.url}`,
			];
			console.log(`├─────────────────────────────────────────────`);
			console.log(`├─ ${messages[Math.floor(Math.random() * messages.length)]}`)
			console.log(`╰─────────────────────────────────────────────`);
			console.log();
		}
	},
	(options = {logs: true, useLocalFonts: true}) =>
	{
		let isLog = true;
		if(!options.logs)
		{
			isLog = false;
		}
		
		if(isLog)
		{
			console.log();
			console.log(`╭─────────────────────────────────────────────`);
			console.log(`│ ${b24UiInfo.name} v${b24UiInfo.version}`);
			
			console.log(`├─────────────────────────────────────────────`);
			console.log(`├─ [Colors]`);
			console.log(`├── ✔ colors`);
			console.log(`├─ [Fonts]`);
		}
		let fontFamily: {};
		
		if(options.useLocalFonts)
		{
			fontFamily = presetFonts.theme.fontFamily;
			if(isLog)
			{
				console.log(`├── ✔︎fontFamily {local}`);
				console.log(
					`├─── Ⓘ You need to copy the fonts to the folder where your not compiled main.css file is located`
				);
				console.log(
					`├─── Ⓘ Call npx ${b24UiInfo.name} copy-fonts --dest=assets/css/fonts `
				);
			}
		}
		else
		{
			const allowed = [
				'b24-system',
				'b24-system-mono',
				'b24-primary',
				'b24-secondary',
				'b24-helvetica'
			];
			
			fontFamily = Object.keys(presetFonts.theme.fontFamily)
				.filter(key => allowed.includes(key))
				.reduce((obj, key) =>
				{
					// @ts-ignore
					obj[key] = presetFonts.theme.fontFamily[key];
					
					return obj;
				}, {});
			
			if(isLog)
			{
				console.log(`├── ✔ ︎fontFamily`);
				allowed.forEach((fontKey) =>
				{
					console.log(`├───── ${fontKey}`);
				});
				Object.keys(presetFonts.theme.fontFamily)
					.filter(key => !allowed.includes(key))
					.forEach((fontKey) =>
					{
						console.log(`├───── × ${fontKey}`);
					});
				
				console.log(
					`├───── Ⓘ To connect the remaining fonts, set the parameter  useLocalFonts = true in the plugin configuration.`
				);
			}
		}
		
		if(isLog)
		{
			console.log(`├── ✔ fontSize`);
			console.log(`├── ✔ lineHeight`);
			console.log(`├── ✔ fontWeight`);
			console.log(`├── ✔ letterSpacing`);
			console.log(`├─ [Spacing]`);
			console.log(`├── ✔ spacing`);
			console.log(`├─ [Border]`);
			console.log(`├── ✔ borderRadius`);
			console.log(`├── ✔ borderWidth`);
			console.log(`├─ [Shadow]`);
			console.log(`├── ✔ boxShadow`);
			console.log(`├─ [Transition]`);
			console.log(`├── ✔ transitionDuration`);
			console.log(`├─ [Animation]`);
			console.log(`├── ✔ keyframes`);
			console.log(`├── ✔ animation`);
			console.log(`├─ [Plugins]`);
			console.log(`├── ✔ @tailwindcss/forms`);
		}
		
		return {
			presets: [],
			useLocalFonts: options.useLocalFonts,
			theme: Object.assign(
				{
					extend: Object.assign(
						{},
						{
							keyframes: presetAnimation.theme.keyframes,
							animation: presetAnimation.theme.animation,
						}
					)
				},
				{
					colors: presetColors.theme.colors
				},
				{
					fontFamily: fontFamily,
					fontSize: presetFonts.theme.fontSize,
					lineHeight: presetFonts.theme.lineHeight,
					fontWeight: presetFonts.theme.fontWeight,
				},
				{
					letterSpacing: presetTest.theme.letterSpacing
				},
				{
					spacing: presetSize.theme.spacing
				},
				{
					borderRadius: presetBorder.theme.borderRadius,
					borderWidth: presetBorder.theme.borderWidth,
				},
				{
					boxShadow: presetShadow.theme.boxShadow
				},
				{
					transitionDuration: presetTransition.theme.transitionDuration
				},
			),
			plugins: [
				tailwindcssForms
			]
		};
	},
);