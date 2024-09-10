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

# Line Height {#line-height}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Utilities for controlling the leading (line height) of an element.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/line-height#basic-usage"
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
				v-for="(line, index) in presetFonts.theme.lineHeight"
				:key="index"
			>
				<td translate="no" class="variable">{{ prepareVariable('leading', index) }}</td>
				<td translate="no" class="value">
					line-height: {{ line }};
				</td>
			</tr>
		</tbody>
	</table>
</div>

## Relative line-heights {#relative-line-heights}

Use the `leading-reset`, `leading-none`, `leading-3xs`, `leading-tight`, `leading-2xs`, `leading-sm`, `leading-snug`, `leading-md`, `leading-lg`, `leading-normal`, `leading-xl`, `leading-relaxed`, `leading-2xl`, `leading-3xl`  and `leading-loose` utilities to give an element a relative line-height based on its current font-size.

<iframe data-why style="min-height: 560px">
<div class="flex flex-col gap-8">
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">leading-none</span>
		<p class="leading-none font-b24-system text-lg leading-normal text-gray-900 dark:text-gray-200">
			So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">leading-relaxed</span>
		<p class="leading-relaxed font-b24-system text-lg text-gray-900 dark:text-gray-200">
			So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">leading-3xl</span>
		<p class="leading-3xl font-b24-system text-lg text-gray-900 dark:text-gray-200">
			So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
		</p>
	</div>
</div>
</iframe>

```html
<p class="leading-none ...">So I started to walk into the water...</p>
<p class="leading-relaxed ...">So I started to walk into the water...</p>
<p class="leading-3xl ...">So I started to walk into the water...</p>
```


## Fixed line-heights {#fixed-line-heights}

Use utilities like `leading-3` and `leading-10` to give an element a fixed line-height, irrespective of the current font-size. These are useful when you need very precise control over an element’s final size.

<iframe data-why style="min-height: 560px">
<div class="flex flex-col gap-8">
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">leading-3</span>
		<p class="leading-3 font-b24-system text-lg leading-normal text-gray-900 dark:text-gray-200">
			So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">leading-4</span>
		<p class="leading-4 font-b24-system text-lg leading-normal text-gray-900 dark:text-gray-200">
			So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">leading-6</span>
		<p class="leading-6 font-b24-system text-lg leading-normal text-gray-900 dark:text-gray-200">
			So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">leading-7</span>
		<p class="leading-7 font-b24-system text-lg text-gray-900 dark:text-gray-200">
			So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
		</p>
	</div>
	<div>
		<span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400">leading-8</span>
		<p class="leading-8 font-b24-system text-lg text-gray-900 dark:text-gray-200">
			So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
		</p>
	</div>
</div>
</iframe>

```html
<p class="leading-3 ...">So I started to walk into the water...</p>
<p class="leading-4 ...">So I started to walk into the water...</p>
<p class="leading-6 ...">So I started to walk into the water...</p>
<p class="leading-7 ...">So I started to walk into the water...</p>
<p class="leading-8 ...">So I started to walk into the water...</p>
```