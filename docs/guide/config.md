# Plugin Settings {#config}

The plugin supports the following settings:

<div class="info-wrapper">
	<table class="info">
		<thead>
			<tr>
				<th>Parameter</th>
				<th>Description</th>
				<th>Default</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td translate="no" class="variable">logs</td>
				<td translate="no" class="value">
					Output logs to the terminal during the build process
				</td>
				<td translate="no" class="value">false</td>
			</tr>
			<tr>
				<td translate="no" class="variable">useLocalFonts</td>
				<td translate="no" class="value">
					Use <a href="/guide/working-with-fonts#local-font-family">Local Font Family</a>
				</td>
				<td translate="no" class="value">false</td>
			</tr>
		</tbody>
	</table>
</div>

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