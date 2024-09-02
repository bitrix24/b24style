# Configuration {#config}

The plugin supports the following settings:

| Parameter       | Description                                          | Default Value |
|-----------------|------------------------------------------------------|---------------|
| `logs`          | Output logs to the terminal during the build process | `false`       |
| `useLocalFonts` | Use [custom fonts](./working-with-fonts)             | `false`       |

Example:

::: code-group
```js [tailwind.config.js]
module.exports = {
    content: [
        '...'
    ],
    theme: {},
    plugins: [
        '...',
        require('@bitrix24/b24style')({
            logs: true, // [!code ++]
            useLocalFonts: true // [!code ++]
        })
    ]
};
```

:::