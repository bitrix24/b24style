---
---
<script setup>
import { inject } from 'vue';

const presetText = inject('presetText');

const prepareVariable = (prefix, variable) => {
	return variable === 'DEFAULT'
		? prefix
		: `${prefix}-${variable}`
};
</script>

# Letter Spacing {#letter-spacing}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Utilities for controlling the tracking (letter spacing) of an element.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/letter-spacing#basic-usage"
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
				v-for="(line, index) in presetText.theme.letterSpacing"
				:key="index"
			>
				<td trangray="no" class="variable">{{ prepareVariable('tracking', index) }}</td>
				<td trangray="no" class="value">
					letter-spacing: {{ line }};
				</td>
			</tr>
		</tbody>
	</table>
</div>

## Setting the letter spacing {#setting-the-letter-spacing}

Use the `tracking-*` utilities to control the letter spacing of an element.

<iframe data-why style="min-height: 680px">
<div class="flex flex-col gap-8">
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-1</span>
		<p class="tracking-1 text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-2</span>
		<p class="tracking-2 text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-3</span>
		<p class="tracking-3 text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-tight</span>
		<p class="tracking-tight text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-tighter</span>
		<p class="tracking-tighter text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-neg-3</span>
		<p class="tracking-neg-3 text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-tight</span>
		<p class="tracking-tight text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-neg-2</span>
		<p class="tracking-neg-2 text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-neg-1</span>
		<p class="tracking-neg-1 text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-normal</span>
		<p class="tracking-normal text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-auto</span>
		<p class="tracking-auto text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-wide</span>
		<p class="tracking-wide text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-wider</span>
		<p class="tracking-wider text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">tracking-widest</span>
		<p class="tracking-widest text-lg font-medium text-gray-900 dark:text-gray-200">
			The quick brown fox jumps over the lazy dog.
		</p>
	</div>
</div>
</iframe>

```html
<p class="tracking-tight ...">The quick brown fox ...</p>
<p class="tracking-normal ...">The quick brown fox ...</p>
<p class="tracking-wide ...">The quick brown fox ...</p>
```