---
---

<script setup>
	import { inject } from 'vue';
	const presetFonts = inject('presetFonts');
</script>

# Working with Fonts {#fonts}

To maintain user experience, use system fonts.

In rare cases, you may need local fonts.

## System Fonts {#fonts-system}

| Класс             | Характеристики                                                                |
|:------------------|:------------------------------------------------------------------------------|
| `b24-system`      | font-family: {{ presetFonts.theme.fontFamily['b24-system'].join(', ') }}      |
| `b24-system-mono` | font-family: {{ presetFonts.theme.fontFamily['b24-system-mono'].join(', ') }} |
| `b24-primary`     | synonym `b24-system`                                                          |
| `b24-secondary`   | synonym `b24-system`                                                          |
| `b24-helvetica`   | font-family: {{ presetFonts.theme.fontFamily['b24-helvetica'].join(', ') }}   |

## Local Fonts {#fonts-local}

| Класс                  | Характеристики                                                                    |
|:-----------------------|:----------------------------------------------------------------------------------|
| `b24-opensans`         | font-family: {{ presetFonts.theme.fontFamily['b24-opensans'].join(', ') }}        |
| `b24-roboto`           | font-family: {{ presetFonts.theme.fontFamily['b24-roboto'].join(', ') }}          |
| `b24-roboto-mono`      | font-family: {{ presetFonts.theme.fontFamily['b24-roboto-mono'].join(', ') }}     |
| `b24-montserrat`       | font-family: {{ presetFonts.theme.fontFamily['b24-montserrat'].join(', ') }}      |
| `b24-comforter-brush`  | font-family: {{ presetFonts.theme.fontFamily['b24-comforter-brush'].join(', ') }} |

## Adding Local Fonts
To add local fonts:

1. Copy the fonts to the project's public folder, for example, `public/fonts`:

```bash
npm @bitrix24/ui copy-fonts --dest=public/fonts
```

2. Set the `useLocalFonts` parameter in the plugin configuration:

::: code-group
```js [tailwind.config.js]
module.exports = {
	content: [
		'...'
	],
	theme: {},
	plugins: [
		'...',
		require('@bitrix24/b24style')({
			useLocalFonts: true // [!code ++]
		})
	]
};
```

:::

3. Apply the font in your application.

For example, for the `b24-comforter-brush` font:
```html
<p class="font-b24-comforter-brush text-h1 text-base-master">
	The quick brown fox jumps over the lazy dog.
</p>
```