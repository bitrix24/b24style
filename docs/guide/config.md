# Plugin Settings {#config}

The plugin supports the following settings:

| **Parameter**<br/>`default`   | **Description**<br/>                                 |
|-------------------------------|------------------------------------------------------|
| **logs**<br/>`false`          | Output logs to the terminal during the build process |
| **useLocalFonts**<br/>`false` | Use [local fonts](./working-with-fonts#fonts-local)  |

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