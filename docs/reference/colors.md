---
---
<script setup>
import { inject } from 'vue';

const presetColors = inject('presetColors');

</script>

# Colors {#colors}

<div class="header-info">
	<div class="header-info-descr">
		<div>
			Color palette for your project.
		</div>
		<div class="header-info-nav">
			<ShTailwindCssLink
				to="https://tailwindcss.com/docs/customizing-colors"
			/>
		</div>
	</div>
</div>

## Palette {#palette}
<ColorPaletteReference />

## Base {#base}
<ColorPaletteReferenceGroup
	title="base"
	:group="presetColors.theme.colors.base"
/>

## Primary {#primary}
<ColorPaletteReferenceGroup
	title="primary"
	:group="presetColors.theme.colors.primary"
/>

## Secondary {#secondary}
<ColorPaletteReferenceGroup
	title="secondary"
	:group="presetColors.theme.colors.secondary"
/>

## Alert {#alert}
<ColorPaletteReferenceGroup
	title="alert"
	:group="presetColors.theme.colors.alert"
/>

## Success {#success}
<ColorPaletteReferenceGroup
	title="success"
	:group="presetColors.theme.colors.success"
/>

## Warning {#warning}
<ColorPaletteReferenceGroup
	title="warning"
	:group="presetColors.theme.colors.warning"
/>

## Info {#info}
<ColorPaletteReferenceGroup
	title="info"
	:group="presetColors.theme.colors.info"
/>

## Tag {#tag}
<ColorPaletteReferenceGroup
	title="tag"
	:group="presetColors.theme.colors.tag"
/>

## Accent {#accent}
<ColorPaletteReferenceGroup
	title="accent"
	:group="presetColors.theme.colors.accent"
/>

## Copilot {#copilot}
<ColorPaletteReferenceGroup
	title="copilot"
	:group="presetColors.theme.colors.copilot"
/>

## Symlink {#symlink}
<ColorPaletteReferenceGroup
	title="symlink"
	:group="{
		note: presetColors.theme.colors.note,
		subtle: presetColors.theme.colors.subtle,
		extranet: presetColors.theme.colors.extranet,
		tertiary: presetColors.theme.colors.tertiary
	}"
/>

