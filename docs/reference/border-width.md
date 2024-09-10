---
---
<script setup>
import { inject } from 'vue';

const presetBorder = inject('presetBorder');

const prepareVariable = (prefix, variable) => {
	return variable === 'DEFAULT'
		? prefix
		: `${prefix}-${variable}`
};
</script>

# Border Width {#border-width}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Utilities for controlling the width of an element's borders.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/border-width#basic-usage"
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
				v-for="(line, index) in presetBorder.theme.borderWidth"
				:key="index"
			>
				<td class="variable">{{ prepareVariable('border', index) }}</td>
				<td class="value">
					border-width: {{ line }};
				</td>
			</tr>
		</tbody>
	</table>
</div>

## All sides {#all-sides}

Use the `border`, `border-0`, `border-2`, `border-4`, or `border-8` utilities to set the border width for all sides of an element.

<iframe data-why style="min-height: 320px">
<div class="grid grid-cols-2 gap-x-10 gap-y-8 place-items-center">
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">border</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 w-16 h-16 border-copilot-primary border"></div>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">border-2</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 w-16 h-16 border-copilot-primary border-2"></div>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">border-4</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 w-16 h-16 border-copilot-primary border-4"></div>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">border-8</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 w-16 h-16 border-copilot-primary border-8"></div>
	</div>
</div>
</iframe>

```html
<div class="border border-copilot-primary ..."></div>
<div class="border-2 border-copilot-primary ..."></div>
<div class="border-4 border-copilot-primary ..."></div>
<div class="border-8 border-copilot-primary ..."></div>
```

## Individual sides {#individual-sides}

Use the `border-*`, `border-*-0`, `border-*-2`, `border-*-4`, or `border-*-8` utilities to set the border width for one side of an element.

<iframe data-why style="min-height: 320px">
<div class="grid grid-cols-2 gap-x-10 gap-y-8 place-items-center">
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">border-t-4</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 ring-1 ring-gray-900/5 dark:ring-white/10 w-16 h-16 border-copilot-primary border-t-4"></div>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">border-r-4</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 ring-1 ring-gray-900/5 dark:ring-white/10 w-16 h-16 border-copilot-primary border-r-4"></div>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">border-b-4</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 ring-1 ring-gray-900/5 dark:ring-white/10 w-16 h-16 border-copilot-primary border-b-4"></div>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">border-l-4</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 ring-1 ring-gray-900/5 dark:ring-white/10 w-16 h-16 border-copilot-primary border-l-4"></div>
	</div>
</div>
</iframe>

```html
<div class="border-t-4 border-copilot-primary ..."></div>
<div class="border-r-4 border-copilot-primary ..."></div>
<div class="border-b-4 border-copilot-primary ..."></div>
<div class="border-l-4 border-copilot-primary ..."></div>
```

## Horizontal and vertical sides {#horizontal-and-vertical-sides}

Use the `border-x-*` and `border-y-*` utilities to set the border width on two sides of an element at the same time.

<iframe data-why style="min-height: 220px">
<div class="grid grid-cols-2 gap-x-10 gap-y-8 place-items-center">
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">border-x-4</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 ring-1 ring-gray-900/5 dark:ring-white/10 w-16 h-16 border-copilot-primary border-x-4"></div>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">border-y-4</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 ring-1 ring-gray-900/5 dark:ring-white/10 w-16 h-16 border-copilot-primary border-y-4"></div>
	</div>
</div>
</iframe>

```html
<div class="border-x-4 border-copilot-primary ..."></div>
<div class="border-y-4 border-copilot-primary ..."></div>
```

## Between elements {#between-elements}

You can also add borders between child elements using the `divide-x-*` and `divide-y-*` width utilities along with the `divide-*` color utilities.

<iframe data-why style="min-height: 260px">
<div class="flex flex-col divide-y divide-gray-200 dark:divide-gray-700 font-mono text-white text-sm text-center font-bold leading-6 shadow-lg overflow-hidden min-w-[200px] mx-auto">
	<div class="p-4 text-gray-400 bg-white dark:bg-gray-800">01</div>
	<div class="p-4 text-gray-400 bg-white dark:bg-gray-800">02</div>
	<div class="p-4 text-gray-400 bg-white dark:bg-gray-800">03</div>
</div>
</iframe>

```html
<div class="divide-y divide-gray-200 ...">
	<div>01</div>
	<div>02</div>
	<div>03</div>
</div>
```

Learn more in the [Divide Width](https://tailwindcss.com/docs/divide-width) and [Divide Color](https://tailwindcss.com/docs/divide-color) documentation.

## Using logical properties {#using-logical-properties}

Use the `border-s-*` and `border-e-*` utilities to set the `border-inline-start-width` and `border-inline-end-width` [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts), which map to either the left or right border based on the text direction.

<iframe data-why style="min-height: 220px">
<div class="grid grid-cols-2 gap-x-10 gap-y-8 place-items-center">
	<div class="flex flex-col items-start gap-y-4" dir="ltr">
		<p class="text-sm font-medium">Left-to-right</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 ring-1 ring-gray-900/5 dark:ring-white/10 w-16 h-16 border-copilot-primary border-s-4"></div>
	</div>
	<div class="flex flex-col items-start gap-y-4" dir="rtl">
		<p class="text-sm font-medium">Right-to-left</p>
		<div class="p-4 shadow-sm bg-white dark:bg-gray-900 ring-1 ring-gray-900/5 dark:ring-white/10 w-16 h-16 border-copilot-primary border-s-4"></div>
	</div>
</div>
</iframe>

```html
<div dir="ltr">
	<div class="border-s-4 ..."></div>
<div>

<div dir="rtl">
	<div class="border-s-4 ..."></div>
<div>
```

For more control, you can also use the [LTR and RTL modifiers](https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support) to conditionally apply specific styles depending on the current text direction.