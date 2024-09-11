<script setup lang="ts">
import { inject, computed, ComputedRef } from 'vue'
import ColorPalette from '../components/ColorPalette.vue'
import type { ColorGroup, Color } from "../types/colors";


const presetColors: any = inject('presetColors')

const basePalette = [
	'gray', 'red', 'orange', 'green', 'blue',
];

const groupPalette = [
	100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 950
];

const colorGroups: ComputedRef<Record<string, ColorGroup>> = computed(() => {
	const result: Record<string, ColorGroup> = {}
	
	for(let base of basePalette)
	{
		let groupTitle = base
			.split('')
			.flatMap((l, i) => {
				return i !== 0 && l.toUpperCase() === l ? [' ', l] : [l]
			})
			.join('')
		
		groupTitle = groupTitle.charAt(0).toUpperCase() + groupTitle.slice(1)
		
		result[base] = {
			title: groupTitle,
			groups: Object.fromEntries(groupPalette.map((group) => [group, []])),
			defaultValue: ''
		} as ColorGroup
	}
	
	Object.entries(presetColors.theme.colors).forEach(([keyGroup, value]) => {
		if(!basePalette.includes(keyGroup)){ return }
		
		const group = result[keyGroup] as ColorGroup;
		
		for(const [keyColor, valueColor] of Object.entries(value))
		{
			if(keyColor === 'DEFAULT')
			{
				group.defaultValue = valueColor;
				break;
			}
		}
		
		for (const [keyColor, valueColor] of Object.entries(value))
		{
			if(keyColor === 'DEFAULT'){ continue; }
			
			let needKeyValue = parseInt(keyColor);
			
			/**
			 * fix theme.red.solid
			 */
			if(
				keyGroup === 'red'
				&& keyColor === 'solid'
			)
			{
				needKeyValue = 750
			}
			
			const paletteKeys = Object.keys(group.groups)
			for(const existKey of paletteKeys)
			{
				const existKeyValue = parseInt(existKey);
				
				if(existKeyValue >= 900)
				{
					if(existKeyValue >= needKeyValue)
					{
						needKeyValue = existKeyValue;
						break;
					}
				}
				else if(existKeyValue > 150)
				{
					if(existKeyValue + 50 >= needKeyValue)
					{
						needKeyValue = existKeyValue;
						break;
					}
				}
				else
				{
					if(existKeyValue >= needKeyValue)
					{
						needKeyValue = existKeyValue;
						break;
					}
				}
			}
			
			group.groups[needKeyValue.toString()].push({
				title: keyColor,
				value: valueColor,
				isDefault: group.defaultValue === valueColor
			} as Color)
		}
	})
	
	// region final prepare ////
	Object.entries(result).forEach(([keyGroup, value]) => {
		value.groups['100'] = value.groups['100'].reverse();
	});
	// endregion ////
	
	// region Custom add ////
	
	// region Gray ////
	result.gray.groups['100'].push({
		title: 'white',
		value: presetColors.theme.colors.white,
		isDefault: result.gray.defaultValue === presetColors.theme.colors.white
	} as Color)
	
	result.gray.groups['950'].push({
		title: 'black',
		value: presetColors.theme.colors.black.DEFAULT,
		isDefault: result.gray.defaultValue === presetColors.theme.colors.black.DEFAULT
	} as Color)
	
	result.gray.groups['950'].push({
		title: 'solid',
		value: presetColors.theme.colors.black.solid,
		isDefault: result.gray.defaultValue === presetColors.theme.colors.black.solid
	} as Color)
	// endregion ////
	
	// region orange ////
	result.orange.groups['100'].push({
		title: 'beige',
		value: presetColors.theme.colors.beige,
		isDefault: result.orange.defaultValue === presetColors.theme.colors.beige
	} as Color)
	// endregion ////
	
	// endregion ////
	return result
})

</script>

<template>
	<div class="color-palette-reference" data-class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
		<div
			v-for="(list, title) in colorGroups"
			:key="title"
			class="color-palette-reference--inner" data-class="2xl:contents"
		>
			<div class="color-palette-reference--title" data-class="text-sm font-semibold text-gray-900 dark:text-gray-200 2xl:col-end-1 2xl:pt-2.5">
				{{ list.title }}
			</div>
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
	margin-top: 10px;
	row-gap: 2rem;
	column-gap: .5rem;
	grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
	display: grid;
	
	--sh-title-color: #0f172a;
}

.dark .color-palette-reference
{
	--sh-title-color: #e2e8f0;
}

.color-palette-reference--title
{
	--tw-text-opacity: 1;
	color: var(--sh-title-color);
	font-weight: 600;
	font-size: .875rem;
	line-height: 1.25rem;
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
	/*
	grid-template-columns: repeat(1, minmax(0, 1fr));
	display: grid;
	*/
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
		grid-template-columns: repeat(11, minmax(0, 1fr));
		margin-top: .5rem;
	}
}

@media (min-width: 1536px)
{
	.color-palette-reference--inner
	{
		display: contents;
	}
	
	.color-palette-reference--title
	{
		padding-top: .625rem;
		grid-column-end: 1;
	}
	
	.color-palette-reference--group
	{
		margin-top: 0;
	}
}
</style>