---
---

<script setup>
import { inject } from 'vue';
const presetFonts = inject('presetFonts');
</script>

# Working with Fonts {#fonts}

To maintain user experience, use system fonts.

In rare cases, you may need local fonts.


## System Font Family {#system-font-family}

<div class="info-wrapper">
	<table class="info">
		<thead>
			<tr>
				<th>Class</th>
				<th>Properties</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td translate="no" class="variable">font-b24-system</td>
				<td translate="no" class="value">
					font-family: {{ presetFonts.theme.fontFamily['b24-system'].join(', ') }};
				</td>
			</tr>
			<tr>
				<td translate="no" class="variable">font-b24-primary</td>
				<td translate="no" class="value">
					 synonym `b24-system`
				</td>
			</tr>
			<tr>
				<td translate="no" class="variable">font-b24-secondary</td>
				<td translate="no" class="value">
					 synonym `b24-system`
				</td>
			</tr>
			<tr>
				<td translate="no" class="variable">font-b24-system-mono</td>
				<td translate="no" class="value">
					font-family: {{ presetFonts.theme.fontFamily['b24-system-mono'].join(', ') }};
				</td>
			</tr>
			<tr>
				<td translate="no" class="variable">font-b24-helvetica</td>
				<td translate="no" class="value">
					 font-family: {{ presetFonts.theme.fontFamily['b24-helvetica'].join(', ') }};
				</td>
			</tr>
		</tbody>
	</table>
</div>

<iframe data-why style="min-height: 480px">
<div class="flex flex-col gap-8">
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-b24-system</span>
		<p class="font-b24-system text-4xl font-thin text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-b24-primary</span>
		<p class="font-b24-primary text-4xl font-thin text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-b24-secondary</span>
		<p class="font-b24-secondary text-4xl font-thin text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-b24-system-mono</span>
		<p class="font-b24-system-mono text-4xl font-thin text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-b24-helvetica</span>
		<p class="font-b24-helvetica text-4xl font-thin text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
</div>
</iframe>

```html
<p class="font-b24-system ...">...</p>
<p class="font-b24-primary ...">...</p>
<p class="font-b24-secondary ...">...</p>
<p class="font-b24-system-mono ...">...</p>
<p class="font-b24-helvetica ...">...</p>
```

## Local Font Family {#local-font-family}

<div class="info-wrapper">
	<table class="info">
		<thead>
			<tr>
				<th>Class</th>
				<th>Properties</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td translate="no" class="variable">font-b24-opensans</td>
				<td translate="no" class="value">
					font-family: {{ presetFonts.theme.fontFamily['b24-opensans'].join(', ') }};
				</td>
			</tr>
			<tr>
				<td translate="no" class="variable">font-b24-roboto</td>
				<td translate="no" class="value">
					font-family: {{ presetFonts.theme.fontFamily['b24-roboto'].join(', ') }};
				</td>
			</tr>
			<tr>
				<td translate="no" class="variable">font-b24-roboto-mono</td>
				<td translate="no" class="value">
					font-family: {{ presetFonts.theme.fontFamily['b24-roboto-mono'].join(', ') }};
				</td>
			</tr>
			<tr>
				<td translate="no" class="variable">font-b24-montserrat</td>
				<td translate="no" class="value">
					font-family: {{ presetFonts.theme.fontFamily['b24-montserrat'].join(', ') }};
				</td>
			</tr>
			<tr>
				<td translate="no" class="variable">font-b24-comforter-brush</td>
				<td translate="no" class="value">
					font-family: {{ presetFonts.theme.fontFamily['b24-comforter-brush'].join(', ') }};
				</td>
			</tr>
		</tbody>
	</table>
</div>

## Adding Local Fonts {#adding-local-fonts}
To add local fonts:

1. Copy the fonts to the project's public folder, for example, `public/fonts`:

::: code-group

```sh [npm]
$ npm @bitrix24/ui copy-fonts --dest=public/fonts
```

:::

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

You can control the typeface of text using the font family utilities.

<iframe data-why style="min-height: 480px">
<div class="flex flex-col gap-8">
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-b24-opensans</span>
		<p class="font-b24-opensans text-4xl font-thin text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-b24-roboto</span>
		<p class="font-b24-roboto text-4xl font-thin text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-b24-roboto-mono</span>
		<p class="font-b24-roboto-mono text-4xl font-thin text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-b24-montserrat</span>
		<p class="font-b24-montserrat text-4xl font-thin text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-b24-comforter-brush</span>
		<p class="font-b24-comforter-brush text-4xl font-thin text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
</div>
</iframe>

```html
<p class="font-b24-opensans ...">...</p>
<p class="font-b24-roboto ...">...</p>
<p class="font-b24-roboto-mono ...">...</p>
<p class="font-b24-montserrat ...">...</p>
<p class="font-b24-comforter-brush ...">...</p>
```

View [font family](/reference/font-family) reference information