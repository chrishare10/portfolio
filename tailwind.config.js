/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
	content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		extend: {
			colors: {
				'off-white': '#f7f5f5',
				'black': '#0c0b0b',
				'transparent': 'rgba(0, 0, 0, 0)'
			},
			fontFamily: {
				'sans': ['Lato', 'system-ui'],
				'serif': ['Libre Baskerville', 'Georgia']
			}
		},
	},
	plugins: [],
}

