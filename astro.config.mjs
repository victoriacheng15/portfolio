import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";
import { siteConfig } from "./src/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: siteConfig.site,
	integrations: [],
	markdown: {
		rehypePlugins: [
			[
				rehypePrettyCode,
				{
					theme: "github-dark",
					onVisitLine(node) {
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }];
						}
					},
				},
			],
		],
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
