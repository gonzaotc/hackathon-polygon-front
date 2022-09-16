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
				blue1: '#1047E9',
				blue2: '#1A337C',
				blue3: '#081A4D',
				dark1: '#010510',
				dark2: '#000000',
			},
			spacing: {
				1.25: '0.3125rem',
				1.75: '0.4375rem',
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
