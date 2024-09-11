export type Color = {
	title: string,
	value: string,
	isDefault: boolean
}

export type ColorGroup = {
	title: string,
	groups: Record<string, Color[]>,
	defaultValue: string
}
