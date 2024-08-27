// import tailwindConfig from 'tailwindcss/defaultConfig'
// tailwindConfig.theme?.animation;

export default {
	theme: {
		animation: {
			'loader-dash': 'loader-dash 1.5s ease-in-out infinite',
			'spin-slow': 'spin 2s linear infinite',
		},
		keyframes: {
			'loader-dash': {
				'0%': {
					strokeDasharray: '1, 200',
					strokeDashoffset: '0'
				},
				'50%': {
					strokeDasharray: '89, 200',
					strokeDashoffset: '-35px'
				},
				'100%': {
					strokeDasharray: '89, 200',
					strokeDashoffset: '-124px'
				}
			}
		},
	}
}