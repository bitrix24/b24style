// region Code ////
interface RecursiveKeyValuePair<K extends keyof any = string, V = string>
{
	[key: string]: V|RecursiveKeyValuePair<K, V>
}

interface FontConfig extends RecursiveKeyValuePair
{
	'@font-face': {
		fontFamily: string,
		fontWeight: string,
		fontStyle: string,
		fontDisplay: string,
		src: string,
		unicodeRange?: string
	}
}

interface IFont
{
	getConfig(): FontConfig;
	
	getTitle(): string;
}

enum FontStyle
{
	normal = 'normal',
	italic = 'italic',
}

enum FontDisplay
{
	swap = 'swap'
}

enum FontType
{
	local = 'local',
	woff = 'woff',
	woff2 = 'woff2',
	ttf = 'ttf',
	eot = 'eot',
}

class FontLocal
	implements IFont
{
	#path: string;
	#typeList: FontType[];
	#unicodeRange: null|string;
	
	#family: string;
	#localTitle: string;
	
	#weight: number|string;
	#style: FontStyle;
	#display: FontDisplay;
	
	constructor(
		family: string,
		weight: number|string,
		style: FontStyle,
		display: FontDisplay,
		localTitle: string,
		path: string,
		typeList: FontType[] = [],
		unicodeRange: null|string = null
	)
	{
		this.#family = family;
		
		this.#weight = weight;
		this.#style = style;
		this.#display = display;
		
		this.#localTitle = localTitle;
		this.#typeList = typeList;
		this.#path = path;
		this.#unicodeRange = unicodeRange;
	}
	
	private getPath(): string
	{
		return this.#path;
	}
	
	private getLocalTitle(): string
	{
		return this.#localTitle;
	}
	
	private getFamily(): string
	{
		return this.#family;
	}
	
	private getWeight(): string
	{
		return `${this.#weight}`;
	}
	
	private getStyle(): FontStyle
	{
		return this.#style;
	}
	
	private getDisplay(): FontDisplay
	{
		return this.#display;
	}
	
	private getTypeList(): FontType[]
	{
		return this.#typeList;
	}
	
	private getUnicodeRange(): string
	{
		return this.#unicodeRange || '';
	}
	
	private getSrc(): string
	{
		if(this.getTypeList().length < 1)
		{
			return '';
		}
		
		return this.getTypeList().map((type: FontType) =>
		{
			switch(type)
			{
				case FontType.local:
					return `local('${this.getLocalTitle()}')`;
				case FontType.woff2:
					return `url('${this.getPath()}.woff2') format('woff2')`;
				case FontType.woff:
					return `url('${this.getPath()}.woff') format('woff')`;
				case FontType.ttf:
					return `url('${this.getPath()}.ttf') format('truetype')`;
				case FontType.eot:
					return `url('${this.getPath()}.eot') format('eot')`;
			}
		}).join(',');
	}
	
	getConfig(): FontConfig
	{
		return {
			'@font-face': Object.assign(
				{},
				{
					fontFamily: this.getFamily(),
					fontWeight: this.getWeight(),
					fontStyle: this.getStyle(),
					fontDisplay: this.getDisplay(),
					src: this.getSrc(),
				},
				(
					!!this.#unicodeRange
						? {
							unicodeRange: this.getUnicodeRange()
						}
						: {}
				)
			)
		} as FontConfig;
	}
	
	getTitle(): string
	{
		return `${this.getFamily()} ${this.getWeight()} ${this.getStyle()}`;
	}
}

class FontsCollection
{
	#list: IFont[] = [];
	
	constructor()
	{
	}
	
	addItem(item: IFont)
	{
		this.#list.push(item);
		return this;
	}
	
	getList(): IFont[]
	{
		return this.#list;
	}
}

// endregion ////

// region Init ////
const groupsFonts = new FontsCollection();
	// region Roboto ////
groupsFonts.addItem(new FontLocal(
	'Roboto',
	300,
	FontStyle.normal,
	FontDisplay.swap,
	'Roboto Light',
	'fonts/roboto/roboto-light-webfont',
	[FontType.local, FontType.woff2, FontType.woff]
))
	.addItem(new FontLocal(
		'Roboto',
		300,
		FontStyle.italic,
		FontDisplay.swap,
		'Roboto Light Italic',
		'fonts/roboto/roboto-lightitalic-webfont',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto',
		400,
		FontStyle.normal,
		FontDisplay.swap,
		'Roboto',
		'fonts/roboto/roboto-regular-webfont',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto',
		400,
		FontStyle.italic,
		FontDisplay.swap,
		'Roboto Italic',
		'fonts/roboto/roboto-italic-webfont',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto Medium',
		500,
		FontStyle.normal,
		FontDisplay.swap,
		'Roboto',
		'fonts/roboto/roboto-medium-webfont',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto Medium Italic',
		500,
		FontStyle.italic,
		FontDisplay.swap,
		'Roboto Italic',
		'fonts/roboto/roboto-mediumitalic-webfont',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto Bold',
		700,
		FontStyle.normal,
		FontDisplay.swap,
		'Roboto',
		'fonts/roboto/roboto-bold-webfont',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto Bold Italic',
		700,
		FontStyle.italic,
		FontDisplay.swap,
		'Roboto Italic',
		'fonts/roboto/roboto-bolditalic-webfont',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	// endregion ////
	
	// region Roboto.Mono ////
	.addItem(new FontLocal(
		'Roboto Mono',
		300,
		FontStyle.normal,
		FontDisplay.swap,
		'Roboto Mono Light',
		'fonts/robotomono/robotomono-light',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto Mono',
		300,
		FontStyle.italic,
		FontDisplay.swap,
		'Roboto Mono Light Italic',
		'fonts/robotomono/robotomono-lightitalic',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto Mono',
		400,
		FontStyle.normal,
		FontDisplay.swap,
		'Roboto Mono',
		'fonts/robotomono/robotomono-regular',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto Mono',
		400,
		FontStyle.italic,
		FontDisplay.swap,
		'Roboto Mono Italic',
		'fonts/robotomono/robotomono-regularitalic',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto Mono',
		500,
		FontStyle.normal,
		FontDisplay.swap,
		'Roboto Mono Medium',
		'fonts/robotomono/robotomono-medium',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto Mono',
		500,
		FontStyle.italic,
		FontDisplay.swap,
		'Roboto Mono Medium Italic',
		'fonts/robotomono/robotomono-mediumitalic',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto Mono',
		700,
		FontStyle.normal,
		FontDisplay.swap,
		'Roboto Mono Bold',
		'fonts/robotomono/robotomono-bold',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Roboto Mono',
		700,
		FontStyle.italic,
		FontDisplay.swap,
		'Roboto Mono Bold Italic',
		'fonts/robotomono/robotomono-bolditalic',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	// endregion ////
	
	// region Montserrat ////
	.addItem(new FontLocal(
		'Montserrat',
		400,
		FontStyle.normal,
		FontDisplay.swap,
		'Montserrat',
		'fonts/montserrat/montserrat-regular',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Montserrat',
		500,
		FontStyle.normal,
		FontDisplay.swap,
		'Montserrat Medium',
		'fonts/montserrat/montserrat-medium',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Montserrat',
		600,
		FontStyle.normal,
		FontDisplay.swap,
		'Montserrat Semibold',
		'fonts/montserrat/montserrat-semibold',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	.addItem(new FontLocal(
		'Montserrat',
		700,
		FontStyle.normal,
		FontDisplay.swap,
		'Montserrat Bold',
		'fonts/montserrat/montserrat-bold',
		[FontType.local, FontType.woff2, FontType.woff]
	))
	// endregion ////
	
	// region Open Sans ////
	.addItem(new FontLocal(
		'Open Sans',
		300,
		FontStyle.normal,
		FontDisplay.swap,
		'Open Sans Light',
		'fonts/opensans/opensans-light',
		[FontType.local, FontType.woff, FontType.ttf]
	))
	.addItem(new FontLocal(
		'Open Sans',
		400,
		FontStyle.normal,
		FontDisplay.swap,
		'Open Sans',
		'fonts/opensans/opensans-regular',
		[FontType.local, FontType.woff, FontType.ttf]
	))
	.addItem(new FontLocal(
		'Open Sans',
		600,
		FontStyle.normal,
		FontDisplay.swap,
		'Open Sans Semibold',
		'fonts/opensans/opensans-semibold',
		[FontType.local, FontType.woff, FontType.ttf]
	))
	.addItem(new FontLocal(
		'Open Sans',
		700,
		FontStyle.normal,
		FontDisplay.swap,
		'Open Sans Bold',
		'fonts/opensans/opensans-bold',
		[FontType.local, FontType.woff, FontType.ttf]
	))
	// endregion ////
	
	// region Comforter Brush ////
	.addItem(new FontLocal(
		'Comforter Brush',
		400,
		FontStyle.normal,
		FontDisplay.swap,
		'',
		'fonts/comforter-brush/comforter-brush-regular',
		[FontType.woff2],
		'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116'
	))
	.addItem(new FontLocal(
		'Comforter Brush',
		400,
		FontStyle.normal,
		FontDisplay.swap,
		'',
		'fonts/comforter-brush/comforter-brush-regular',
		[FontType.woff2],
		'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF'
	))
	.addItem(new FontLocal(
		'Comforter Brush',
		400,
		FontStyle.normal,
		FontDisplay.swap,
		'',
		'fonts/comforter-brush/comforter-brush-regular',
		[FontType.woff2],
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
	))
	// endregion ////
// endregion ////

export default groupsFonts;