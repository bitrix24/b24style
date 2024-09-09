import { defineConfig } from 'vitepress'
import { whyframe } from '@whyframe/core'
import { whyframeVue } from '@whyframe/vue'

export const shared = defineConfig({
	title: '@bitrix24/b24style',
	
	lastUpdated: true,
	cleanUrls: false,
	metaChunk: true,
	
	base: '/',
	/* prettier-ignore */
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['meta', { name: 'theme-color', content: '#5f67ee' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:locale', content: 'en' }],
		['meta', { property: 'og:title', content: '@bitrix24/b24style | Bitrix24 Styles Based on Tailwind CSS' }],
		['meta', { property: 'og:site_name', content: 'b24style' }],
		/**
		 * @todo make this
		 */
		//['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
		//['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
	],
	
	themeConfig: {
		siteTitle: false,
		logo: { src: '/b24-logo.svg'},
		
		socialLinks: [
			{icon: 'github', link: 'https://github.com/bitrix24/b24style'}
		],
		
		search: {
			provider: 'local',
			options: {
				locales: {
				}
			}
		},
	},
	vite: {
		plugins: [
			whyframe({
				defaultSrc: '/frames/default'
			}),
			whyframeVue({
				include: /\.(?:vue|md)$/
			})
		]
	}
})