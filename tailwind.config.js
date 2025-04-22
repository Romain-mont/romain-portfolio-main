/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				primary: "#18192C",
				accent: "#795DC9",
				text: "#F5F5F5",
				card: "#23233A",
				mint: "#98FF98",
			},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui"],
				title: ["Poppins", "Montserrat", "ui-sans-serif"],
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
