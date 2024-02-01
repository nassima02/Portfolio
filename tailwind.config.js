/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/datas/*.json",
		"./src/**/*.{js,ts,jsx,tsx}",
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
}