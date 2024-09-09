// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DynamicLayout from '../components/DynamicLayout.vue'
import ShTailwindCssLink from '../components/ShTailwindCssLink.vue'
import ShDocTableInfo from '../components/ShDocTableInfo.vue'
import './style.css'

import presetBorder from '../../../plugins/preset-border';
import presetColors from '../../../plugins/preset-colors';
import presetFonts from '../../../plugins/preset-fonts';
import groupsFonts from '../../../plugins/fonts';

import presetShadow from '../../../plugins/preset-shadow';
import presetSize from '../../../plugins/preset-size';
import presetTest from '../../../plugins/preset-text';

import presetAnimation from '../../../plugins/preset-animation';
import presetTransition from '../../../plugins/preset-transition';

export default {
	extends: DefaultTheme,
	Layout: DynamicLayout,
	enhanceApp({app})
	{
		app.provide('presetFonts', presetFonts)
		app.provide('presetAnimation', presetAnimation)
		app.provide('presetTransition', presetTransition)
		app.component('ShTailwindCssLink', ShTailwindCssLink)
		app.component('ShDocTableInfo', ShDocTableInfo)
	}
} satisfies Theme