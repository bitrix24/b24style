---
---
<script setup>
import { inject } from 'vue';

const presetShadow = inject('presetShadow');

const prepareVariable = (prefix, variable) => {
	return variable === 'DEFAULT'
		? prefix
		: `${prefix}-${variable}`
};
</script>

# Box Shadow {#boxShadow}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Utilities for controlling the box shadow of an element.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/box-shadow#basic-usage"
			/>
		</div>
	</div>
</div>

<table class="info">
	<thead>
		<tr>
			<th>Class</th>
			<th>Properties</th>
		</tr>
	</thead>
	<tbody>
		<tr 
			v-for="(line, index) in presetShadow.theme.boxShadow"
			:key="index"
		>
			<td translate="no" class="variable">{{ prepareVariable('shadow', index) }}</td>
			<td translate="no" class="value">
				box-shadow: {{ line }};
			</td>
		</tr>
	</tbody>
</table>

## Removing the shadow {#removing-the-shadow}

Use `shadow-none` to remove an existing box shadow from an element. This is most commonly used to remove a shadow that was applied at a smaller breakpoint.

<iframe data-why style="min-height: 320px">
<div class="relative rounded-xl overflow-auto">
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 py-16">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-none</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-none dark:bg-gray-400"></div>
			</div>
		</div>
	</div>
</div>
</iframe>

```html
<div class="shadow-none ..."></div>
```

## Adding an inner shadow {#adding-an-inner-shadow}

Use the `shadow-inner` utility to apply a subtle inset box shadow to an element. This can be useful for things like form controls or wells.

<iframe data-why style="min-height: 320px">
<div class="relative rounded-xl overflow-auto">
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 py-16">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-inner</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-inner dark:bg-gray-400 ring-1 ring-black/5"></div>
			</div>
		</div>
	</div>
</div>
</iframe>

```html
<div class="shadow-inner..."></div>
```


## Adding an outer shadow {#adding-an-outer-shadow}

Use the `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, or `shadow-2xl` utilities to apply different sized outer box shadows to an element.

<iframe data-why style="min-height: 320px">
<div class="relative rounded-xl overflow-auto">
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 py-16">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-md</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-md dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-lg</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-lg dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-xl dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-2xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-2xl dark:bg-gray-400"></div>
			</div>
		</div>
	</div>
</div>
</iframe>

```html
<div class="shadow-md ..."></div>
<div class="shadow-lg ..."></div>
<div class="shadow-xl ..."></div>
<div class="shadow-2xl ..."></div>
```

Use the `shadow-top-2xs`, `shadow-top-xs`, `shadow-top-sm`, `shadow-top-md`, `shadow-top-lg`, `shadow-top-xl`, `shadow-top-2xl`, `shadow-top-3xl`, or `shadow-top-4xl`
utilities to apply different sized outer box shadows to the top edge of an element.

<iframe data-why style="min-height: 640px">
<div class="relative rounded-xl overflow-auto">
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 pt-8">
			<div class="flex flex-col items-center shrink-0">
				<div class="w-24 h-24 rounded-lg bg-white shadow-top-2xs dark:bg-gray-400"></div>
				<p class="font-medium text-sm text-slate-500 font-mono text-center mt-3">shadow-top-2xs</p>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<div class="w-24 h-24 rounded-lg bg-white shadow-top-xs dark:bg-gray-400"></div>
				<p class="font-medium text-sm text-slate-500 font-mono text-center mt-3">shadow-top-xs</p>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<div class="w-24 h-24 rounded-lg bg-white shadow-top-sm dark:bg-gray-400"></div>
				<p class="font-medium text-sm text-slate-500 font-mono text-center mt-3">shadow-top-sm</p>
			</div>
		</div>
	</div>
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 pt-16">
			<div class="flex flex-col items-center shrink-0">
				<div class="w-24 h-24 rounded-lg bg-white shadow-top-md dark:bg-gray-400"></div>
				<p class="font-medium text-sm text-slate-500 font-mono text-center mt-3">shadow-top-md</p>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<div class="w-24 h-24 rounded-lg bg-white shadow-top-lg dark:bg-gray-400"></div>
				<p class="font-medium text-sm text-slate-500 font-mono text-center mt-3">shadow-top-lg</p>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<div class="w-24 h-24 rounded-lg bg-white shadow-top-xl dark:bg-gray-400"></div>
				<p class="font-medium text-sm text-slate-500 font-mono text-center mt-3">shadow-top-xl</p>
			</div>
		</div>
	</div>
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 py-8 ">
			<div class="flex flex-col items-center shrink-0">
				<div class="w-24 h-24 rounded-lg bg-white shadow-top-2xl dark:bg-gray-400"></div>
				<p class="font-medium text-sm text-slate-500 font-mono text-center mt-3">shadow-top-2xl</p>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<div class="w-24 h-24 rounded-lg bg-white shadow-top-3xl dark:bg-gray-400"></div>
				<p class="font-medium text-sm text-slate-500 font-mono text-center mt-3">shadow-top-3xl</p>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<div class="w-24 h-24 rounded-lg bg-white shadow-top-4xl dark:bg-gray-400"></div>
				<p class="font-medium text-sm text-slate-500 font-mono text-center mt-3">shadow-top-4xl</p>
			</div>
		</div>
	</div>
</div>
</iframe>

```html
<div class="shadow-top-2xs ..."></div>
<div class="shadow-top-xs ..."></div>
<div class="shadow-top-sm ..."></div>
<div class="shadow-top-md ..."></div>
<div class="shadow-top-lg ..."></div>
<div class="shadow-top-xl ..."></div>
<div class="shadow-top-2xl ..."></div>
<div class="shadow-top-3xl ..."></div>
<div class="shadow-top-4xl ..."></div>
```

Use the `shadow-right-2xs`, `shadow-right-xs`, `shadow-right-sm`, `shadow-right-md`, `shadow-right-lg`, `shadow-right-xl`, `shadow-right-2xl`, `shadow-right-3xl`, or `shadow-right-4xl`
utilities to apply different sized outer box shadows to the right edge of an element.

<iframe data-why style="min-height: 640px">
<div class="relative rounded-xl overflow-auto">
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 pt-8">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-right-2xs</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-right-2xs dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-right-xs</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-right-xs dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-right-sm</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-right-sm dark:bg-gray-400"></div>
			</div>
		</div>
	</div>
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 pt-16">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-right-md</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-right-md dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-right-lg</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-right-lg dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-right-xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-right-xl dark:bg-gray-400"></div>
			</div>
		</div>
	</div>
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 py-8">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-right-2xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-right-2xl dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-right-3xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-right-3xl dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-right-4xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-right-4xl dark:bg-gray-400"></div>
			</div>
		</div>
	</div>
</div>
</iframe>

```html
<div class="shadow-right-2xs ..."></div>
<div class="shadow-right-xs ..."></div>
<div class="shadow-right-sm ..."></div>
<div class="shadow-right-md ..."></div>
<div class="shadow-right-lg ..."></div>
<div class="shadow-right-xl ..."></div>
<div class="shadow-right-2xl ..."></div>
<div class="shadow-right-3xl ..."></div>
<div class="shadow-right-4xl ..."></div>
```


Use the `shadow-bottom-2xs`, `shadow-bottom-xs`, `shadow-bottom-sm`, `shadow-bottom-md`, `shadow-bottom-lg`, `shadow-bottom-xl`, `shadow-bottom-2xl`, `shadow-bottom-3xl`, or `shadow-bottom-4xl`
utilities to apply different sized outer box shadows to the bottom edge of an element.

<iframe data-why style="min-height: 640px">
<div class="relative rounded-xl overflow-auto">
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 pt-8">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-bottom-2xs</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-bottom-2xs dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-bottom-xs</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-bottom-xs dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-bottom-sm</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-bottom-sm dark:bg-gray-400"></div>
			</div>
		</div>
	</div>
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 pt-16">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-bottom-md</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-bottom-md dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-bottom-lg</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-bottom-lg dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-bottom-xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-bottom-xl dark:bg-gray-400"></div>
			</div>
		</div>
	</div>
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 py-8">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-bottom-2xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-bottom-2xl dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-bottom-3xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-bottom-3xl dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-bottom-4xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-bottom-4xl dark:bg-gray-400"></div>
			</div>
		</div>
	</div>
</div>
</iframe>

```html
<div class="shadow-bottom-2xs ..."></div>
<div class="shadow-bottom-xs ..."></div>
<div class="shadow-bottom-sm ..."></div>
<div class="shadow-bottom-md ..."></div>
<div class="shadow-bottom-lg ..."></div>
<div class="shadow-bottom-xl ..."></div>
<div class="shadow-bottom-2xl ..."></div>
<div class="shadow-bottom-3xl ..."></div>
<div class="shadow-bottom-4xl ..."></div>
```


Use the `shadow-left-2xs`, `shadow-left-xs`, `shadow-left-sm`, `shadow-left-md`, `shadow-left-lg`, `shadow-left-xl`, `shadow-left-2xl`, `shadow-left-3xl`, or `shadow-left-4xl`
utilities to apply different sized outer box shadows to the left edge of an element.

<iframe data-why style="min-height: 640px">
<div class="relative rounded-xl overflow-auto">
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 pt-8">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-left-2xs</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-left-2xs dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-left-xs</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-left-xs dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-left-sm</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-left-sm dark:bg-gray-400"></div>
			</div>
		</div>
	</div>
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 pt-16">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-left-md</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-left-md dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-left-lg</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-left-lg dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-left-xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-left-xl dark:bg-gray-400"></div>
			</div>
		</div>
	</div>
	<div class="flex sm:block overflow-auto sm:overflow-visible scroll-p-8">
		<div class="flex items-center justify-around gap-12 font-mono font-bold shrink-0 px-8 py-8">
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-left-2xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-left-2xl dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-left-3xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-left-3xl dark:bg-gray-400"></div>
			</div>
			<div class="flex flex-col items-center shrink-0">
				<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-left-4xl</p>
				<div class="w-24 h-24 rounded-lg bg-white shadow-left-4xl dark:bg-gray-400"></div>
			</div>
		</div>
	</div>
</div>
</iframe>

```html
<div class="shadow-left-2xs ..."></div>
<div class="shadow-left-xs ..."></div>
<div class="shadow-left-sm ..."></div>
<div class="shadow-left-md ..."></div>
<div class="shadow-left-lg ..."></div>
<div class="shadow-left-xl ..."></div>
<div class="shadow-left-2xl ..."></div>
<div class="shadow-left-3xl ..."></div>
<div class="shadow-left-4xl ..."></div>
```