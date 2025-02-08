import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
	title: string;
	slogan: string;
	description?: string;
	site: string;
	rss?: boolean;
	homepage: PostFilter;
}

export const siteConfig: SiteConfig = {
	site: "https://victoriacheng15.vercel.app/",
	title: "Victoria's Tech Hub",
	slogan: "Navigating the endless world of technology.",
	description:
		"Welcome to my tech hub! Explore my blogs, projects, and skills as I navigate the ever-evolving world of technology. Join me on this journey of discovery and innovation.",
	rss: true,
	homepage: {
		maxPosts: 5,
		tags: [],
		excludeTags: [],
	},
};
