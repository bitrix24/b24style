import { defineConfig } from 'vitepress'
import path from 'path'
import { whyframe } from '@whyframe/core'
import { whyframeVue } from '@whyframe/vue'

/**
 * @memo fix custom fonts
 */
const customAlias: any = {};
if(process.env.NODE_ENV === 'production')
{
	customAlias['fonts'] = path.resolve(__dirname, '../../../docs/public/frames/fonts');
}

const domain: string = 'https://bitrix24.github.io';
//const baseFolder: string = '/';
const baseFolder: string = '/b24style/';

export const shared = defineConfig({
	title: '@bitrix24/b24style',
	
	lastUpdated: true,
	cleanUrls: false,
	metaChunk: true,
	
	base: baseFolder,
	/* prettier-ignore */
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['meta', { name: 'theme-color', content: '#5f67ee' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:locale', content: 'en' }],
		['meta', { property: 'og:title', content: '@bitrix24/b24style | Bitrix24 Visual Styles Created with Tailwind CSS' }],
		['meta', { property: 'og:site_name', content: '@bitrix24/b24style' }],
		['meta', { property: 'og:image', content: `${domain}${baseFolder}bitrix24_style.jpg` }],
		['meta', { property: 'og:url', content: `${domain}${baseFolder}` }],
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
		resolve: {
			alias: customAlias
		},
		plugins: [
			whyframe({
				defaultSrc: `${baseFolder}frames/default.html`,
				/**
				 * @memo fix base url for dev mode.
				 * @memo At prod this work
				 * @link https://github.com/bluwy/whyframe/issues/34
				 */
				// @ts-ignore ////
				shBase: baseFolder
			}),
			whyframeVue({
				include: /\.(?:vue|md)$/
			})
		]
	}
})