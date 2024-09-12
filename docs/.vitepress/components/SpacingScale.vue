<script setup lang="ts">
type Size = {
	title: string
	value: string
}

interface Props {
	list: Size[]
	color: string
}

withDefaults(defineProps<Props>(), {
	color: '#7FDEFC'
})

const prepareRemToPx = (value: string): string => {
	if(value.includes('px'))
	{
		return value
	}
	
	const rem = Number(value.replace('rem', ''))
	const px = Math.round(rem * 16)
	
	return `${px}px`
};

</script>

<template>
	<div class="info-wrapper">
		<table class="info">
			<thead>
			<tr>
				<th class="value-info-1">Name</th>
				<th class="value-info-2">Size</th>
				<th class="value-info-3">Pixels</th>
				<th class="value-spacing"><span class="sr-only">Preview</span></th>
			</tr>
			</thead>
			<tbody>
			<tr
				v-for="(line, index) in list"
				:key="index"
			>
				<td translate="no" class="variable">{{ line.title }}</td>
				<td translate="no" class="value">{{ line.value }}</td>
				<td translate="no" class="value">{{ prepareRemToPx(line.value) }}</td>
				<td translate="no" class="value value-spacing">
					<div class="value-spacing-wrapper" :style="{backgroundColor: color, width: line.value}"></div>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
.value-spacing
{
	display: none;
}

table.info td.value-spacing
{
	vertical-align: middle;
}

.value-spacing-wrapper
{
	height: 1rem;
	border-radius: .375rem;
}

@media (min-width: 640px) {
	.value-spacing
	{
		display: table-cell;
	}
	
	table.info th.value-info-1
	{
		min-width: 52px;
		max-width: 52px;
		width: 52px;
	}
	
	table.info th.value-info-2
	{
		min-width: 80px;
		max-width: 80px;
		width: 80px;
	}
	
	table.info th.value-info-3
	{
		min-width: 60px;
		max-width: 60px;
		width: 60px;
	}
}

</style>