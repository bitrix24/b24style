---
---
<script setup>
import { inject, computed } from 'vue';

const presetSize = inject('presetSize');

const b24Spacing = [
	'none',
	'3xs', '2xs', '2xs2', 'xs', 'xs2',
	'sm', 'sm2',
	'md', 'md2',
	'lg', 'lg2',
	'xl', 'xl2', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'
];

const b24Size = computed(() => {
	const result = [];
	
	Object.entries(presetSize.theme.spacing).forEach(([title, value]) => {
		if(!b24Spacing.includes(title)){ return }
		result.push({
			title,
			value
		});
		
		if(title === 'none')
		{
			result.push({
				title: 'px',
				value: '1px'
			});
		}
	
	});
	
	return result
});

const tailwindSize = computed(() => {
	const result = [];
	
	const keysOrder = ['0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5'];
	keysOrder.forEach(title => {
		result.push({
			title,
			value: presetSize.theme.spacing[title]
		});
	});
	
	Object.entries(presetSize.theme.spacing).forEach(([title, value]) => {
		if(b24Spacing.includes(title)){ return }
		else if(keysOrder.includes(title)){ return }
		
		result.push({
			title,
			value
		});
	});

	return result
});
</script>

# Spacing Scale {#spacing-scale}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Plugin includes a generous and comprehensive numeric spacing scale. The values are proportional, so <code>16</code> is twice as much spacing as <code>8</code> for example.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/customizing-spacing"
			/>
		</div>
	</div>
</div>

## Bitrix24 spacing scale {#b24-spacing-scale}

One spacing unit is equal to `2px`.

<SpacingScale :list="b24Size" :color="'#8E52EC'" />

## Tailwind spacing scale {#tailwind-spacing-scale}

One spacing unit is equal to `0.25rem`, which translates to `4px` by default in common browsers.

<SpacingScale :list="tailwindSize" :color="'#B095DC'" />