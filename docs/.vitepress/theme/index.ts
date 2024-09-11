// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DynamicLayout from '../components/DynamicLayout.vue'
import ShTailwindCssLink from '../components/ShTailwindCssLink.vue'
import ShDocTableInfo from '../components/ShDocTableInfo.vue'
import ColorPaletteReference from '../components/ColorPaletteReference.vue'
import ColorPaletteReferenceGroup from '../components/ColorPaletteReferenceGroup.vue'

import './style.css'

import presetBorder from '../../../plugins/preset-border';
import presetColors from '../../../plugins/preset-colors';
import presetFonts from '../../../plugins/preset-fonts';
import groupsFonts from '../../../plugins/fonts';

import presetShadow from '../../../plugins/preset-shadow';
import presetSize from '../../../plugins/preset-size';
import presetText from '../../../plugins/preset-text';

import presetAnimation from '../../../plugins/preset-animation';
import presetTransition from '../../../plugins/preset-transition';

export default {
	extends: DefaultTheme,
	Layout: DynamicLayout,
	enhanceApp({app})
	{
		app.provide('presetText', presetText)
		app.provide('presetBorder', presetBorder)
		app.provide('presetColors', presetColors)
		app.provide('presetFonts', presetFonts)
		app.provide('presetShadow', presetShadow)
		app.provide('presetAnimation', presetAnimation)
		app.provide('presetTransition', presetTransition)
		app.component('ShTailwindCssLink', ShTailwindCssLink)
		app.component('ShDocTableInfo', ShDocTableInfo)
		app.component('ColorPaletteReference', ColorPaletteReference)
		app.component('ColorPaletteReferenceGroup', ColorPaletteReferenceGroup)
	}
} satisfies Theme
