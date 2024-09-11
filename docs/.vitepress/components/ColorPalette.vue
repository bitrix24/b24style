<script setup lang="ts">

import type { Color } from "../types/colors";

interface Props {
	color: Color
}

const props = withDefaults(defineProps<Props>(), {})

</script>

<template>
	<div class="color-palette" data-class="relative flex">
		<div class="color-palette--inner" data-class="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
			<div class="color-palette--value"
				:style="{backgroundColor: color.value}"
				data-class="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
			></div>
			<div class="color-palette--is-default" v-if="color.isDefault" data-class="absolute -top-2 -left-1 bg-accent-light-blue text-white px-2xs py-3xs text-5xs rounded-lg">default</div>
			<div class="color-palette--wrapper-title" data-class="px-0.5">
				<div class="color-palette--title" data-class="w-6 font-medium text-xs text-gray-900 2xl:w-full dark:text-white
				">
					{{ color.title }}
				</div>
				<div class="color-palette--title-data" data-class="text-gray-500 text-xs font-mono lowercase dark:text-gray-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
					{{ color.value }}
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.color-palette
{
	position: relative;
	display: flex;
	
	--tw-ring-offset-width: 0px;
	--tw-ring-offset-color: #fff;
	--tw-shadow: 0 0 #0000;
	--tw-ring-color: #6b64641a;
	--tw-ring-inset: inset;
	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
	
	--sh-title-color: #0f172a;
	--sh-title-data-color: #64748b;
}

.dark .color-palette
{
	--tw-ring-offset-color: #fff;
	--tw-ring-color: #ffffff57;
	
	--sh-title-color: #ffffff;
	--sh-title-data-color: #64748b;
}

.color-palette--inner
{
	display: flex;
	width: 100%;
	align-items: center;
	column-gap: .75rem;
}

.color-palette--value
{
	height: 2.5rem;
	width: 2.5rem;
	border-radius: .25rem;
	
	box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.color-palette--is-default
{
	position: absolute;
	left: -0.25rem;
	top: -0.5rem;
	border-radius: 12px;
	--tw-bg-opacity: 1;
	background-color: rgb(85 155 230 / var(--tw-bg-opacity));
	padding: 2px 4px;
	font-size: 9px;
	line-height: 0.85rem;
	--tw-text-opacity: 1;
	color: rgb(255 255 255 / var(--tw-text-opacity));
}

.color-palette--wrapper-title
{
	padding-left: .125rem;
	padding-right: .125rem;
}

.color-palette--title
{
	color: var(--sh-title-color);
	font-weight: 500;
	font-size: .75rem;
	line-height: 1rem;
	width: 1.5rem;
	text-wrap: nowrap;
}

.color-palette--title-data
{
	font-size: .75rem;
	line-height: 1rem;
	text-transform: lowercase;
	--tw-text-opacity: 1;
	color: var(--sh-title-data-color);
}

@media (min-width: 640px) {
	.color-palette--inner
	{
		display: block;
	}
	
	.color-palette--value
	{
		width: 100%;
	}
	
	.color-palette--is-default
	{
		--tw-space-y-reverse: 0;
		margin-top: calc(0.375rem* calc(1 - var(--tw-space-y-reverse)));
		margin-bottom: calc(0.375rem* var(--tw-space-y-reverse));
	}
	
	.color-palette--inner>:not([hidden])~:not([hidden]) {
		--tw-space-y-reverse: 0;
		margin-top: calc(.375rem* calc(1 - var(--tw-space-y-reverse)));
		margin-bottom: calc(.375rem* var(--tw-space-y-reverse));
	}
	
	.color-palette--title-data
	{
		font-size: .625rem;
	}
}

@media (min-width: 768px) {
	.color-palette--title-data
	{
		font-size: .75rem;
		line-height: 1rem;
	}
}

@media (min-width: 1024px) {
	.color-palette--title-data
	{
		font-size: .625rem;
	}
}

@media (min-width: 1536px) {
	.color-palette--title
	{
		width: 100%;
	}
	
	.color-palette--title-data
	{
		font-size: .75rem;
		line-height: 1rem;
	}
}

</style>