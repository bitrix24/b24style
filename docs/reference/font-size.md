---
---
<script setup>
import { inject } from 'vue';

const presetFonts = inject('presetFonts');

const prepareVariable = (prefix, variable) => {
	return variable === 'DEFAULT'
		? prefix
		: `${prefix}-${variable}`
};
</script>

# Font Size {#fonts-size}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Utilities for controlling the font size of an element.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/font-size#basic-usage"
			/>
		</div>
	</div>
</div>

<div class="info-wrapper">
	<table class="info">
		<thead>
			<tr>
				<th>Class</th>
				<th>Properties</th>
			</tr>
		</thead>
		<tbody>
			<tr 
				v-for="(line, index) in presetFonts.theme.fontSize"
				:key="index"
			>
				<td translate="no" class="variable">{{ prepareVariable('text', index) }}</td>
				<td translate="no" class="value">
					font-size: {{ line[0] }};
					{{ line[1].lineHeight ? `line-height: ${line[1].lineHeight}; ` : '' }}
					{{ line[1].fontWeight ? `font-weight: ${line[1].fontWeight};` : '' }}
				</td>
			</tr>
		</tbody>
	</table>
</div>

## Setting the font size {#setting-the-font-size}

Use the `text-*` utilities to control the font size of an element.

<iframe data-why style="min-height: 860px">
<div class="flex flex-col gap-8">
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">text-7xs</span>
		<p class="font-b24-system text-7xs text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">text-sm</span>
		<p class="font-b24-system text-sm text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">text-base</span>
		<p class="font-b24-system text-base text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">text-md</span>
		<p class="font-b24-system text-md text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">text-lg</span>
		<p class="font-b24-system text-lg text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">text-xl</span>
		<p class="font-b24-system text-xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">text-2xl</span>
		<p class="font-b24-system text-2xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">text-h3</span>
		<p class="font-b24-system text-h3 text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">text-h2</span>
		<p class="font-b24-system text-h2 text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">text-h1</span>
		<p class="font-b24-system text-h1 text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
</div>
</iframe>

```html
<p class="text-7xs ...">The quick brown fox ...</p>
<p class="text-sm ...">The quick brown fox ...</p>
<p class="text-base ...">The quick brown fox ...</p>
<p class="text-md ...">The quick brown fox ...</p>
<p class="text-lg ...">The quick brown fox ...</p>
<p class="text-xl ...">The quick brown fox ...</p>
<p class="text-2xl ...">The quick brown fox ...</p>
<p class="text-h3 ...">The quick brown fox ...</p>
<p class="text-h2 ...">The quick brown fox ...</p>
<p class="text-h1 ...">The quick brown fox ...</p>
```