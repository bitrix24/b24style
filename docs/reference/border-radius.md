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

# Border Radius {#border-radius}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Utilities for controlling the border radius of an element.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/border-radius#basic-usage"
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
				v-for="(line, index) in presetBorder.theme.borderRadius"
				:key="index"
			>
				<td translate="no" class="variable">{{ prepareVariable('rounded', index) }}</td>
				<td translate="no" class="value">
					border-radius: {{ line }};
				</td>
			</tr>
		</tbody>
	</table>
</div>

## Rounded corners {#rounded-corners}

Use utilities like `rounded-sm`, `rounded`, or `rounded-3xl` to apply different border radius sizes to an element.

<iframe data-why style="min-height: 320px">
<div class="grid grid-cols-2 gap-x-10 gap-y-8 place-items-center">
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">rounded</p>
		<div class="p-4 shadow-sm bg-copilot-primary w-16 h-16 rounded"></div>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">rounded-md</p>
		<div class="p-4 shadow-sm bg-copilot-primary w-16 h-16 rounded-md"></div>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">rounded-3xl</p>
		<div class="p-4 shadow-sm bg-copilot-primary w-16 h-16 rounded-3xl"></div>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">rounded-full</p>
		<div class="p-4 shadow-sm bg-copilot-primary w-16 h-16 rounded-full"></div>
	</div>
</div>
</iframe>


```html
<div class="rounded ..."></div>
<div class="rounded-md ..."></div>
<div class="rounded-3xl ..."></div>
<div class="rounded-full ..."></div>
```

## Pill buttons {#pill-buttons}

Use utilities like `rounded-circle`, `rounded-pill` or `rounded-full` to create pill buttons.

<iframe data-why style="min-height: 300px">
<div class="grid grid-cols-2 gap-x-10 gap-y-8 place-items-center">
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">rounded-pill</p>
		<button class="px-4 py-2 font-semibold text-sm bg-copilot-primary text-white rounded-pill shadow-sm text-nowrap">Save Changes</button>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">rounded-full</p>
		<button class="px-4 py-2 font-semibold text-sm bg-copilot-primary text-white rounded-full shadow-sm text-nowrap">Save Changes</button>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">rounded-circle</p>
		<button class="size-8 flex justify-center items-center font-semibold text-sm bg-copilot-primary text-white rounded-circle shadow-sm">
			<svg class="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
				<path fill-rule="evenodd" d="M17.901 17.783H6.103V9.026h11.798zM16.735 6.208v-.552h1.327c1.112.071 1.973 1.042 1.953 2.205v11.024c0 .609-.472 1.103-1.057 1.103H5.046c-.583 0-1.057-.494-1.057-1.103V7.861a2 2 0 0 1-.006-.17c.002-1.126.88-2.037 1.96-2.035H7.16v.552c0 .912.709 1.653 1.585 1.653.877 0 1.586-.74 1.586-1.653v-.552h3.231v.552c0 .912.71 1.653 1.586 1.653s1.586-.74 1.586-1.653M9.523 4.777v1.212c0 .448-.347.81-.777.81-.429 0-.777-.362-.777-.81V4.766c.002-.447.353-.807.783-.805.429.003.773.368.771.816m6.36.03v1.149c0 .422-.329.765-.735.765-.406-.001-.732-.344-.732-.766V4.806c0-.423.328-.765.733-.765s.734.342.734.765m-4.506 10.662h1.471v-4.708h-.135l-2.111.926v.92l.775-.207z" clip-rule="evenodd"/>
			</svg>
		</button>
	</div>
</div>
</iframe>

```html
<button class="rounded-circle size-8 ..."></button>
<button class="rounded-pill ...">Save Changes</button>
<button class="rounded-full ...">Save Changes</button>
```

## No rounding

Use `rounded-none` to remove an existing border radius from an element.

<iframe data-why>
<div class="grid grid-cols-1 gap-x-10 gap-y-8 place-items-center">
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">rounded-none</p>
		<button class="px-4 py-2 font-semibold text-sm bg-copilot-primary text-white rounded-none shadow-sm text-nowrap">Save Changes</button>
	</div>
</div>
</iframe>

```html
<button class="rounded-none ...">Save Changes</button>
```

This is most commonly used to remove a border radius that was applied at a smaller breakpoint.