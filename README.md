# @bitrix24/b24style
`@bitrix24/b24style` provides the ability to create application interfaces that closely match the Bitrix24 user interface using Tailwind CSS [utility classes](https://tailwindcss.com/docs/utility-first).

This tool is implemented as a plugin for Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.
- [Tailwind CSS](https://tailwindcss.com/) version 3.4.10 or higher.

## Installation

Install `@bitrix24/style` as a dependency using `npm` by running the following command:

```bash
npm i @bitrix24/b24style
```

Add `@bitrix24/b24style` as a plugin inside the `tailwind.config.js` file:

```js
module.exports = {
  content: [
    '...'
  ],
  theme: {},
  plugins: [
    '...',
    require('@bitrix24/b24style')
  ]
};
```

## Changelog

Detailed changes for each release are documented in the [CHANGELOG](https://github.com/bitrix24/b24style/blob/main/CHANGELOG.md).

## License

[MIT](https://github.com/bitrix24/b24style/blob/main/LICENSE)

Copyright (c) 2024-present, Bitrix24