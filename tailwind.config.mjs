/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#e4f1ff",
					100: "#cfe4ff",
					200: "#a8cbff",
					300: "#74a7ff",
					400: "#3e70ff",
					500: "#133aff",
					600: "#0023ff",
					700: "#0023ff",
					800: "#001fe4",
					900: "#0012b0",
					950: "#000435",
				},
				secondary: {
					50: "#fff5ed",
					100: "#ffe8d4",
					200: "#ffcda8",
					300: "#ffaa71",
					400: "#ff8040",
					500: "#fe5711",
					600: "#ef3c07",
					700: "#c62908",
					800: "#9d230f",
					900: "#7e1f10",
					950: "#440c06",
				},
			},
			typography: {
				DEFAULT: {
					css: {
						color: "rgb(229, 231, 235)",
						"h1, h2, h3, h4": {
							color: "#a8cbff",
						},
						a: {
							color: "rgb(96, 165, 250)",
							"&:hover": {
								color: "rgb(147, 197, 253)",
							},
						},
						code: {
							color: "rgb(243, 244, 246)",
							backgroundColor: "rgb(31, 41, 55)",
						},
						blockquote: {
							color: "rgb(229, 231, 235)",
							borderLeftColor: "rgb(75, 85, 99)",
						},
						strong: {
							color: "#ffaa71",
						},
						th: {
							color: "#ffaa71",
						},
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
