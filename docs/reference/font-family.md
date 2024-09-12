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

# Font Family {#fonts-family}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Utilities for controlling the font family of an element.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/font-family#basic-usage"
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
				v-for="(line, index) in presetFonts.theme.fontFamily"
				:key="index"
			>
				<td translate="no" class="variable">{{ prepareVariable('font', index) }}</td>
				<td translate="no" class="value">
					font-family: {{ line.join(', ') }};
				</td>
			</tr>
		</tbody>
	</table>
</div>

## Setting the font family {#setting-the-font-family}

You can control the typeface of text using the font family utilities.

In most cases you will use `font-b24-system`, `font-b24-system-mono` or `font-b24-helvetica`.

<iframe data-why style="min-height: 360px">
<div class="flex flex-col gap-8">
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">font-b24-system</span>
		<p class="font-b24-system text-4xl font-thin text-gray-900 dark:text-gray-200">
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
<p class="font-b24-system ...">The quick brown fox ...</p>
<p class="font-b24-system-mono ...">The quick brown fox ...</p>
<p class="font-b24-helvetica ...">The quick brown fox ...</p>
```

## Local font family {#local-font-family}

The use of local fonts is described on the page [Local Font Family](/guide/working-with-fonts.html#local-font-family)