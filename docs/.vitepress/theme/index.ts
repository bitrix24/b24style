// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import presetBorder from '../../../plugins/preset-border';
import presetColors from '../../../plugins/preset-colors';
import presetFonts from '../../../plugins/preset-fonts';
import presetShadow from '../../../plugins/preset-shadow';
import presetSize from '../../../plugins/preset-size';
import presetTest from '../../../plugins/preset-text';
import presetTransition from '../../../plugins/preset-transition';
import presetAnimation from '../../../plugins/preset-animation';
import groupsFonts from '../../../plugins/fonts';

console.log(presetFonts);

export default {
	extends: DefaultTheme,
	enhanceApp({app})
	{
		app.provide('presetFonts', presetFonts);
	}
} satisfies Theme
