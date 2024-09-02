import { defineConfig, type DefaultTheme } from 'vitepress'
import pkg from "../../../package.json";

export const en = defineConfig({
	lang: 'en-US',
	description: 'Bitrix24 Styles Based on Tailwind CSS',
	
	themeConfig: {
		nav: nav(),
		
		sidebar: {
			'/guide/': { base: '/guide/', items: sidebarGuide() },
			'/reference/': { base: '/reference/', items: sidebarReference() }
		},
		
		editLink: {
			pattern: 'https://github.com/bitrix24/b24style/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},
		
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2024-present Bitrix24'
		},
	}
})

function nav(): DefaultTheme.NavItem[] {
	return [
		{text: 'Guide', link: '/guide/getting-started'},
		{text: 'Reference', link: '/reference/colors'},
		{
			text: pkg.version,
			items: [
				{
					text: 'Changelog',
					link: 'https://github.com/bitrix24/b24style/blob/main/CHANGELOG.md'
				},
			]
		}
	]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Guide',
			collapsed: false,
			items: [
				{ text: 'Getting Started', link: 'getting-started' },
				{ text: 'Config', link: 'config' },
				{ text: 'Working with Fonts', link: 'working-with-fonts' },
			]
		},
		{ text: 'Reference', base: '/reference/', link: 'colors' }
	]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Constants',
			collapsed: false,
			items: [
				{ text: 'Colors', link: 'colors' },
				{ text: 'Sizes', link: 'size' },
			]
		},
		{
			text: 'Typography',
			collapsed: false,
			items: [
				{ text: 'Font Family', link: 'font-family' },
				{ text: 'Letter Spacing', link: 'letter-spacing' },
			]
		},
		{
			text: 'Borders',
			collapsed: false,
			items: [
				{ text: 'Borders', link: 'border' },
				{ text: 'Box Shadow', link: 'box-shadow' },
			]
		},
		{
			text: 'Transitions and Animation',
			collapsed: false,
			items: [
				{ text: 'Transition Duration', link: 'transition-duration' },
				{ text: 'Animation', link: 'animation' },
			]
		}
	]
}