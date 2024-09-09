---
---
<script setup>
import { inject } from 'vue';

const presetAnimation = inject('presetAnimation');

const prepareVariable = (prefix, variable) => {
	return variable === 'DEFAULT'
		? prefix
		: `${prefix}-${variable}`
};
</script>

# Animation {#animation}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Utilities for animating elements with CSS animations.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/animation#basic-usage"
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
				v-for="(line, index) in presetAnimation.theme.animation"
				:key="index"
			>
				<td translate="no" class="variable">{{ prepareVariable('animate', index) }}</td>
				<td translate="no" class="value">
					animation: {{ line }};<br>
					<pre
						v-if="presetAnimation.theme.keyframes[index]"
					>@keyframes {{ presetAnimation.theme.keyframes[index] }}</pre>
				</td>
			</tr>
		</tbody>
	</table>
</div>

## Loader Dash {#loader-dash}

Add the `animate-loader-dash` utility to display the data loading indicator.

<iframe data-why>
	<svg
		class="
			size-3/5
			absolute inset-0
			z-10 m-auto
			origin-center
			animate-spin-slow
		"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="25 25 50 50"
		><circle
			class="
				stroke-tag-8/30 stroke-[6px]
			"
			cx="50" cy="50" r="20" fill="none"
		></circle><circle
			class="
				stroke-tag-5
				stroke-[6px]
				animate-loader-dash
			"
			cx="50" cy="50" r="20" fill="none"
			stroke-miterlimit="10"
		></circle></svg>
</iframe>

```html
<div class="...">
	<svg class="size-3/5 ... animate-spin-slow ..." viewBox="...">
		<circle class="..." cx="50" cy="50" r="20"></circle>
		<circle class="animate-loader-dash ..." cx="50" cy="50" r="20"></circle>
	</svg>
</div>
```

## Spin Slow {#spin-slow}

Add the `animate-spin-slow` utility to add a linear spin animation to elements like loading indicators.

<iframe data-why>
	<button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-copilot-primary hover:bg-copilot-secondary transition ease-in-out duration-150 cursor-not-allowed" disabled>
		<svg class="animate-spin-slow size-5 -ml-1 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
		Processing...
	</button>
</iframe>

```html
<button type="button" class="bg-copilot-primary ..." disabled>
	<svg class="animate-spin-slow size-5 ..." viewBox="0 0 24 24">
		<!-- ... -->
	</svg>
	Processing...
</button>
```
