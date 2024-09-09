#!/usr/bin/env node

import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const args = process.argv.slice(2)
const destinationArg = args.find(arg => arg.startsWith('--dest='))
const destinationPath = destinationArg
	? path.resolve(destinationArg.split('=')[1] as string)
	: path.resolve(process.cwd(), 'public', 'fonts')

const sourcePath = path.resolve(__dirname, '../..', 'fonts')

async function copyFiles(
	src: string,
	dest: string
): Promise<void>
{
	try
	{
		await fs.mkdir(dest, { recursive: true })
		const entries = await fs.readdir(src, { withFileTypes: true })
		
		for(const entry of entries)
		{
			const srcPath = path.join(src, entry.name)
			const destPath = path.join(dest, entry.name)

			if(entry.isDirectory())
			{
				await copyFiles(srcPath, destPath)
			}
			else
			{
				await fs.copyFile(srcPath, destPath)
			}
		}
		return Promise.resolve()
	}
	catch (error)
	{
		return Promise.reject(error)
	}
}

copyFiles(
	sourcePath,
	destinationPath
)
.then(() => {
	console.log(`✔ Font files copied to: ${destinationPath}`)
})
.catch((error) => {
	console.log(`× Error copying font files: ${error}`)
})