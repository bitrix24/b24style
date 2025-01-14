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
				<div class="color-palette--title" data-class="w-6 font-medium text-xs text-gray-900 2xl:w-full dark:text-white">
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
	
	--sh-ring-offset-width: 0px;
	--sh-ring-offset-color: #fff;
	--sh-shadow: 0 0 #0000;
	--sh-ring-color: #6b64641a;
	--sh-ring-inset: inset;
	--sh-ring-offset-shadow: var(--sh-ring-inset) 0 0 0 var(--sh-ring-offset-width) var(--sh-ring-offset-color);
	--sh-ring-shadow: var(--sh-ring-inset) 0 0 0 calc(1px + var(--sh-ring-offset-width)) var(--sh-ring-color);
	
	--sh-title-color: #0f172a;
	--sh-title-data-color: #64748b;
}

.dark .color-palette
{
	--sh-ring-offset-color: #fff;
	--sh-ring-color: #ffffff57;
	
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
	
	box-shadow: var(--sh-ring-offset-shadow), var(--sh-ring-shadow), var(--sh-shadow, 0 0 #0000);
}

.color-palette--is-default
{
	position: absolute;
	left: -0.25rem;
	top: -0.5rem;
	border-radius: 12px;
	--sh-bg-opacity: 1;
	background-color: rgb(85 155 230 / var(--sh-bg-opacity));
	padding: 2px 4px;
	font-size: 9px;
	line-height: 0.85rem;
	--sh-text-opacity: 1;
	color: rgb(255 255 255 / var(--sh-text-opacity));
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
	--sh-text-opacity: 1;
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
		--sh-space-y-reverse: 0;
		margin-top: calc(0.375rem* calc(1 - var(--sh-space-y-reverse)));
		margin-bottom: calc(0.375rem* var(--sh-space-y-reverse));
	}
	
	.color-palette--inner>:not([hidden])~:not([hidden]) {
		--sh-space-y-reverse: 0;
		margin-top: calc(.375rem* calc(1 - var(--sh-space-y-reverse)));
		margin-bottom: calc(.375rem* var(--sh-space-y-reverse));
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