<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import ColorPalette from '../components/ColorPalette.vue'
import type { ColorGroup, Color } from "../types/colors";

interface Props {
	title: string,
	group: Record<string, string>,
}

const props = withDefaults(defineProps<Props>(), {})

const colorGroups: ComputedRef<Record<string, ColorGroup>> = computed(() => {
	const base = props.title;
	
	const result: Record<string, ColorGroup> = {}
	
	let groupTitle = base
		.split('')
		.flatMap((l, i) => {
			return i !== 0 && l.toUpperCase() === l ? [' ', l] : [l]
		})
		.join('')
	
	groupTitle = groupTitle.charAt(0).toUpperCase() + groupTitle.slice(1)
	
	result[base] = {
		title: groupTitle,
		groups: {},
		defaultValue: ''
	} as ColorGroup
	
	Object.entries(props.group).forEach(([keyColor, valueColor]) => {
		const group = result[base]
		let title = `${base}-${keyColor}`
		
		if(base === 'symlink')
		{
			title = `${keyColor}`
		}
		
		if(keyColor === 'DEFAULT')
		{
			group.defaultValue = valueColor
			return
		}
		
		group.groups[keyColor] = [];
		
		group.groups[keyColor].push({
			title: title,
			value: valueColor,
			isDefault: group.defaultValue === valueColor
		} as Color)
	})
	
	return result
})
</script>

<template>
	<div class="color-palette-reference" data-class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
		<div
			v-for="(list, titleGroups) in colorGroups"
			:key="titleGroups"
			class="color-palette-reference--inner" data-class="2xl:contents"
		>
			<div class="color-palette-reference--group" data-class="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
				<template
					v-for="(colors, title) in list.groups"
					:key="title"
				>
					<div class="color-palette-reference--list">
						<template
							v-for="(color, indexColor) in colors"
							:key="indexColor"
						>
							<ColorPalette :color="color"/>
						</template>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<style scoped>
.color-palette-reference
{
	margin-top: 0.5rem;
	row-gap: .26rem;
	column-gap: .5rem;
	grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
	display: grid;
	
	--sh-title-color: #0f172a;
}

.dark .color-palette-reference
{
	--sh-title-color: #e2e8f0;
}

.color-palette-reference--group
{
	row-gap: .75rem;
	column-gap: .5rem;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	display: grid;
	margin-top: .75rem;
}

.color-palette-reference--list
{
	row-gap: 1.6rem;
	column-gap: .5rem;
	margin-top: .75rem;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: stretch;
	
	
}

@media (min-width: 640px)
{
	.color-palette-reference
	{
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
	
	.color-palette-reference--group
	{
		grid-template-columns: repeat(4, minmax(0, 1fr));
		margin-top: .5rem;
	}
}

@media (min-width: 1536px)
{
	.color-palette-reference--inner
	{
		display: contents;
	}
	
	.color-palette-reference--group
	{
		margin-top: 0;
	}
}
</style>