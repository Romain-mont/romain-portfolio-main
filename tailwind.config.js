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
				primary: {
					DEFAULT: "#18192C",
					light: "#23233A",
				},
				accent: {
					DEFAULT: "#795DC9",
					light: "#8B6FE0",
					dark: "#6A4DB3",
				},
				text: {
					DEFAULT: "#F5F5F5",
					light: "#E0E0E0",
					dark: "#B0B0B0",
				},
				card: {
					DEFAULT: "#23233A",
					light: "#2D2D45",
					dark: "#1A1A2E",
				},
				mint: {
					DEFAULT: "#98FF98",
					light: "#B0FFB0",
					dark: "#80FF80",
				},
			},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui"],
				title: ["Poppins", "Montserrat", "ui-sans-serif"],
			},
			boxShadow: {
				'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
