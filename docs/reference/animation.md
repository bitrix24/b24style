---
---
<script setup>
	
	import { inject } from 'vue';
	
	const presetAnimation = inject('presetAnimation');
</script>

<a v-if="tailwindCssDoc" target="_blank" :href="tailwindCssDoc" style="width: 170px; display: flex; padding: 10px; border: solid 1px gray; border-radius: 7px; flex-direction: row; flex-wrap: nowrap; align-items: center; justify-content: flex-start; gap: 0.5rem;">
	<div style="width: 40px; height: 24px">
		<svg viewBox="0 0 60 31" class="text-slate-900 dark:text-white w-auto h-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path></svg>
	</div>
	<div>Tailwind CSS</div>
</a>

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
			<td translate="no" class="variable">animate-{{ index }}</td>
			<td translate="no" class="value">
				<div class="language-css vp-adaptive-theme">
					<pre class="vp-code" tabindex="0"><code
						>animation: {{ line }}</code><code
							v-if="presetAnimation.theme.keyframes[index]"
						>@keyframes {{ presetAnimation.theme.keyframes[index] }}</code></pre>
				</div>
			</td>
		</tr>
	</tbody>
</table>

## Basic usage {#basic-usage}

### Loader Dash {#loader-dash}

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

### Spin Slow {#spin-slow}

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
