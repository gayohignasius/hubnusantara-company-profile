/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	mode: "jit",
	theme: {
		extend: {
			display: ["group-hover"],
			fontFamily: {
				helvetica: ["Helvetica, sans-serif"],
				poppins: ["var(--poppins)"],
				bebas_neue: ["var(--bebas_neue)"],
			},
			colors: {
				primary: {
					100: "#292926",
					200: "#393937",
					300: "#7F7F7D",
					400: "#A9A9A8",
					500: "#BFBFBE",
					600: "#D4D4D4",
					700: "#EAEAE9",
					900: "#FFFFFF",
				},
				secondary: {
					100: "#221901",
					200: "#634E14",
					300: "#D0A533",
					400: "#FBC840",
					500: "#FDDE8C",
					600: "#FEEEC6",
					700: "#FFF9EC",
				},
				tertiary: {
					100: "#000911",
					200: "#011B32",
					300: "#023664",
					400: "#045AA6",
					500: "#357AB8",
					600: "#DFEBF6",
					700: "#F7FBFF",
				},
				error: {
					100: "#700000",
					200: "#920000",
					300: "#D61313",
					400: "#FF8787",
					500: "#FFE9E9",
				},
				warning: {
					100: "#2D2100",
					200: "#B58500",
					300: "#F8B600",
					400: "#FFD667",
					500: "#FFEDBA",
				},
				success: {
					100: "#0E3E22",
					200: "#176437",
					300: "#42D47F",
					400: "#A9EBC5",
					500: "#DDF7E8",
				},
			},
			backgroundImage: {
				"linear-gradient-1":
					"linear-gradient(180deg, rgba(0, 0, 0, 0.47) 0%, rgba(0, 0, 0, 0) 12.38%), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
				"linear-gradient-2":
					"linear-gradient(180deg, rgba(41, 41, 38, 0) 0%, #292926 19.92%)",
				"linear-gradient-3":
					"linear-gradient(180deg, rgba(41, 41, 38, 0.00) 0%, #292926 59.48%);",
				"linear-gradient-4":
					"linear-gradient(180deg, rgba(41, 41, 38, 0.00) 60%, #292926 90.48%);",
				hero: "url(../public/images/hero.webp)",
				"section-3-desktop":
					"linear-gradient(90deg, #F9F9F8 60.77%, rgba(249, 249, 248, 0.00) 70.01%), url(../public/images/value_proposition_section.webp);",
				"section-3-mobile":
					"linear-gradient(180deg, #EAEAE9 30.98%, rgba(234, 234, 233, 0.00) 70%), url(../public/images/value_proposition_section.webp);",
				"bajo-hero": "url(../public/images/bajo.webp)",
				"about-us": "url(../public/images/about_us.webp)",
				"about-us-mobile": "url(../public/images/about_us_mobile.webp)",
				"connect-with-us": "url(../public/images/why_us.webp)",
			},
		},
	},
	plugins: [],
};
