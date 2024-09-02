<script setup>
	const sizeList = [
		'text-7xs',
		'text-6xs',
		'text-5xs',
		'text-4xs',
		'text-3xs',
		'text-xs',
		'text-sm',
		'text-base',
		'text-md',
		'text-lg',
		'text-xl',
		'text-2xl',
		'text-3xl',
		'text-4xl',
		'text-4.5xl',
		'text-5xl',
		'text-6xl',
		'text-7xl',
		'text-8xl',
		'text-9xl',
		'text-10xl',
		'text-11xl',
		'text-h1',
		'text-h3',
		'text-h4',
		'text-h5',
		'text-h6',
		'text-txt-xs',
		'text-txt-sm',
		'text-txt-md',
		'text-txt-lg',
	];
	
	const text = {
		simple: 'The quick <b>brown fox</b> jumps over the lazy dog.',
	};
	
	const fonts = [
		{
			code: 'font-b24-system',
			text: text.simple
		},
		{
			code: 'font-b24-system-mono',
			text: text.simple
		},
		{
			code: 'font-b24-helvetica',
			text: text.simple
		},
		{
			code: 'font-b24-opensans',
			text: text.simple
		},
		{
			code: 'font-b24-roboto',
			text: text.simple
		},
		{
			code: 'font-b24-roboto-mono',
			text: text.simple
		},
		{
			code: 'font-b24-montserrat',
			text: text.simple
		},
		{
			code: 'font-b24-comforter-brush',
			text: text.simple
		}
	];
</script>

<template>
	<h1 class="text-h1 mb-sm flex whitespace-pre-wrap">List of fonts</h1>
	<div
		v-for="(font, indexFont) in fonts"
		:key="indexFont"
		class="mb-3"
	>
		<h2 class="text-h2 flex whitespace-pre-wrap mb-2">{{ font.code }}</h2>
		<div class="lg:col-span-5 xl:col-span-6 flex flex-col">
			<div class="bg-tertiary overflow-hidden p-lg2">
				<div
					v-for="(size, indexSize) in sizeList" :key="[indexFont, indexSize].join('-')"
					class="flex flex-row justify-start items-end pb-2 mb-2 border-b border-b-base-150"
				>
					<div class="w-1/6 font-medium text-sm text-base-500 font-mono">
						{{ size }}
					</div>
					<div class="w-5/6">
						<div
							class="text-base-master"
							:class="[font.code, size]"
							v-html="font.text"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>