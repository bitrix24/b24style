# Getting Started {#getting-started}

`@bitrix24/b24style` allows you to create application interfaces similar to the Bitrix24 interface using Tailwind CSS [utility classes](https://tailwindcss.com/docs/utility-first).

This tool is implemented as a plugin for Tailwind CSS.

## Prerequisites {#prerequisites}
- [Node.js](https://nodejs.org/) version 18 or higher.
- [Tailwind CSS](https://tailwindcss.com/) version 3.4.10 or higher.

## Installation {#installation}
1. Install `@bitrix24/style` using `npm`:

::: code-group

```sh [npm]
$ npm i @bitrix24/b24style
```

:::

2. Add `@bitrix24/b24style` in `tailwind.config.js`:

::: code-group

```js{8} [tailwind.config.js]
module.exports = {
	content: [
		'...'
	],
	theme: {},
	plugins: [
		'...',
		require('@bitrix24/b24style') // [!code ++]
	]
};
```

:::

::: tip Important to remember
`@bitrix24/b24style` automatically includes the [`@tailwindcss/forms`](https://github.com/tailwindlabs/tailwindcss-forms) extension.
:::

This completes the installation.

## What's Next? {#what-s-next}

- Read about [plugin settings](/guide/config).
- Learn how to add additional fonts in the section [Working with Fonts](/guide/working-with-fonts).
- Review the [spacing scale](/reference/scale).
- Take a look at the [spacing scale](/reference/scale).
- Familiarize yourself with the materials from [the typography](/reference/font-family) guide.
- Study [Box Shadow](/reference/box-shadow): utilities for managing the shadows around elements.
- Take a look at the methods for specifying element [borders](/reference/border-width) and [radii](/reference/border-radius).
- Read about [transition duration](/reference/transition-duration) and [animation](/reference/animation)