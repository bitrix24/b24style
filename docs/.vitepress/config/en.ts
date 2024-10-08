import { defineConfig, type DefaultTheme } from 'vitepress'
import { configParams } from './params'

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
			text: configParams.version,
			items: [
				{
					text: 'Changelog',
					link: `${configParams.github}/blob/main/CHANGELOG.md`
				},
				... configParams.relative
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
				{ text: 'Plugin Settings', link: 'config' },
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
				{ text: 'Scale', link: 'scale' },
			]
		},
		{
			text: 'Typography',
			collapsed: false,
			items: [
				{ text: 'Font Family', link: 'font-family' },
				{ text: 'Font Size', link: 'font-size' },
				{ text: 'Font Weight', link: 'font-weight' },
				{ text: 'Line Height', link: 'line-height' },
				{ text: 'Letter Spacing', link: 'letter-spacing' },
			]
		},
		{
			text: 'Borders',
			collapsed: false,
			items: [
				{ text: 'Border Radius', link: 'border-radius' },
				{ text: 'Border Width', link: 'border-width' },
			]
		},
		{
			text: 'Effects',
			collapsed: false,
			items: [
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