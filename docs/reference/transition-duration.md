---
---
<script setup>
import { inject } from 'vue';

const presetTransition = inject('presetTransition');

const tailwindCssDoc = '';

const prepareVariable = (prefix, variable) => {
	return variable === 'DEFAULT'
		? prefix
		: `${prefix}-${variable}`
};
</script>

# Transition Duration {#transitionDuration}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Utilities for controlling the duration of CSS transitions.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/transition-duration#basic-usage"
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
				v-for="(line, index) in presetTransition.theme.transitionDuration"
				:key="index"
			>
				<td translate="no" class="variable">{{ prepareVariable('duration', index) }}</td>
				<td translate="no" class="value">
					transition-duration: {{ line }};
				</td>
			</tr>
		</tbody>
	</table>
</div>

## Changing transition duration {#changing-transition-duration}

Use the `duration-*` utilities to control an element’s transition-duration.

Hover each button to see the expected behaviour

<iframe data-why style="min-height: 240px">
<div class="grid grid-cols-2 gap-x-10 gap-y-8 place-items-center">
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">duration-150</p>
		<button type="button" class="transition duration-150 ease-in-out inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-copilot-primary hover:scale-125 cursor-pointer">Button A</button>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">duration-300</p>
		<button type="button" class="transition duration-300 ease-in-out inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-copilot-primary hover:scale-125 cursor-pointer">Button B</button>
	</div>
	<div class="flex flex-col items-center gap-y-4">
		<p class="font-medium text-sm text-gray-800 font-mono text-center dark:text-gray-400">duration-700</p>
		<button type="button" class="transition duration-700 ease-in-out inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-copilot-primary hover:scale-125 cursor-pointer">Button C</button>
	</div>
</div>
</iframe>

```html
<button class="transition duration-150 ease-in-out ...">Button A</button>
<button class="transition duration-300 ease-in-out ...">Button B</button>
<button class="transition duration-700 ease-in-out ...">Button C</button>
```