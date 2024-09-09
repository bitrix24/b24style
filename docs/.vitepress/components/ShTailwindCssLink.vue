<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	to: string
}

const props = withDefaults(defineProps<Props>(), {})

</script>

<template>
	<a
		target="_blank"
		class="ShTailwindCssLink"
		:href="to"
	>
		<div class="ShTailwindCssLink-Icon">
			<svg
				viewBox="0 0 60 31"
			><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="currentColor"></path></svg>
		</div>
		<div class="ShTailwindCssLink-Text">Tailwind CSS</div>
	</a>
</template>
<style scoped>

.ShTailwindCssLink
{
	--color-gray-50: 248 250 252;
	--color-gray-300: 203 213 225;
	--color-gray-700: 51 65 85;
	--color-gray-800: 30 41 59;
	--color-gray-900: 15 23 42;
	--tw-shadow-color: var(--color-gray-300);
	--tw-ring-offset-width: 0px;
	--tw-ring-offset-color: #fff;
	--tw-shadow: 0 1px 2px 0 #0000000d;
	--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
}

.ShTailwindCssLink {
		text-decoration: none;
		--tw-ring-opacity: 1;
		--tw-ring-color: rgb(var(--color-gray-300) / var(--tw-ring-opacity));
		--tw-ring-inset: inset;
		--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
		--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
		--tw-text-opacity: 1;
		color: rgb(var(--color-gray-900) / var(--tw-text-opacity));
		font-weight: 500;
		font-size: .875rem;
		line-height: 1.25rem;
		padding-bottom: .375rem;
		padding-top: .375rem;
		padding-left: .625rem;
		padding-right: .625rem;
		--tw-bg-opacity: 1;
		background-color: rgb(255 255 255 / var(--tw-bg-opacity));
		border-radius: .375rem;
		column-gap: .375rem;
		align-items: center;
		flex-shrink: 0;
		display: inline-flex;
}

.ShTailwindCssLink:hover
{
	--tw-bg-opacity: 1;
	background-color: rgb(var(--color-gray-50) / var(--tw-bg-opacity));
	color: var(--vp-c-brand-1);
}

.ShTailwindCssLink:focus-visible
{
	--tw-ring-opacity: 1;
	--tw-ring-color: rgb(var(--vp-c-purple-1) / var(--tw-ring-opacity));
	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
	box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.dark .ShTailwindCssLink
{
	--tw-text-opacity: 1;
	color: rgb(255 255 255 / var(--tw-text-opacity));
	background-color: rgb(var(--color-gray-900) / var(--tw-bg-opacity));
	--tw-ring-opacity: 1;
	--tw-ring-color: rgb(var(--color-gray-700) / var(--tw-ring-opacity));
}

.dark .ShTailwindCssLink:hover
{
	background-color: rgb(var(--color-gray-800) / .5);
}


.ShTailwindCssLink-Icon
{
	width: 30px;
	height: 16px;
}
</style>