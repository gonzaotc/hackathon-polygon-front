module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['fira'],
			},
			colors: {
				blue1: '#1047E9', // 	hsl(225, 87%, 49%)
				blue2: '#0d38ba', // 	hsl(225, 87%, 39%)
				blue3: '#1A337C',
				blue4: '#081A4D',
				dark1: '#010510',
				dark2: '#000000',
				orange1: '#ED642B', // 	hsl(18, 84%, 55%)
				orange2: '#d34c12', // 	hsl(18, 84%, 45%)
				green1: '#caf905', // 	hsl(72, 96%, 50%)
				green2: '#a1c804', // 	hsl(72, 96%, 40%)
			},
			spacing: {
				1.25: '0.3125rem',
				1.75: '0.4375rem',
			},
			opacity: {
				7.5: '.075',
				6.25: '.0625',
			},
			borderRadius: {
				'2lg': '0.625rem',
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *')
			addVariant('child-hover', '& > *:hover')
			addVariant('hover-child-image', '&:hover > img')
		},
		require('tailwind-scrollbar-hide'),
	],
}
