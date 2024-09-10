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

# Font Weight {#fonts-weight}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Utilities for controlling the font weight of an element.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/font-weight#basic-usage"
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
				v-for="(line, index) in presetFonts.theme.fontWeight"
				:key="index"
			>
				<td translate="no" class="variable">{{ prepareVariable('font', index) }}</td>
				<td translate="no" class="value">
					font-weight: {{ line }};
				</td>
			</tr>
		</tbody>
	</table>
</div>

## Setting the font weight {#setting-the-font-weight}

Use the `font-*` utilities to control the font weight of an element.

<iframe data-why style="min-height: 1060px">
<div class="flex flex-col gap-8">
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-thin</span>
		<p class="font-b24-system font-thin text-4xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-extralight</span>
		<p class="font-b24-system font-extralight text-4xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-light</span>
		<p class="font-b24-system font-light text-4xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-regular</span>
		<p class="font-b24-system font-regular text-4xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-normal</span>
		<p class="font-b24-system font-normal text-4xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-medium</span>
		<p class="font-b24-system font-medium text-4xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-semibold</span>
		<p class="font-b24-system font-semibold text-4xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-bold</span>
		<p class="font-b24-system font-bold text-4xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-extrabold</span>
		<p class="font-b24-system font-extrabold text-4xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-black</span>
		<p class="font-b24-system font-black text-4xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-extrablack</span>
		<p class="font-b24-system font-extrablack text-4xl text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
</div>
</iframe>

```html
<p class="font-thin ...">The quick brown fox ...</p>
<p class="font-extralight ...">The quick brown fox ...</p>
<p class="font-light ...">The quick brown fox ...</p>
<p class="font-regular ...">The quick brown fox ...</p>
<p class="font-normal ...">The quick brown fox ...</p>
<p class="font-medium ...">The quick brown fox ...</p>
<p class="font-semibold ...">The quick brown fox ...</p>
<p class="font-bold ...">The quick brown fox ...</p>
<p class="font-extrabold ...">The quick brown fox ...</p>
<p class="font-black ...">The quick brown fox ...</p>
<p class="font-extrablack ...">The quick brown fox ...</p>
```