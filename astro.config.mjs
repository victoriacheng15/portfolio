import { defineConfig } from "astro/config";
import { siteConfig } from "./src/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: siteConfig.site,
	integrations: [],
	markdown: {
		shikiConfig: {
			theme: "laserwave",
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
