import rss from "@astrojs/rss";
import { siteConfig } from "@/config";
import { getAllPost, filterPublishedPosts } from "@/utils";

export async function GET(context) {
	const collection = "blog";
	// id,body,collection,data,render
	const blog = await getAllPost();
	const publishedBlog = filterPublishedPosts(blog);
	return rss({
		// `<title>` field in output xml
		title: siteConfig.title,
		// `<description>` field in output xml
		description: siteConfig.description || siteConfig.slogan,
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#site
		site: context.site,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: publishedBlog.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			link: `${context.site + collection}/${post.id}`,
			pubDate: post.data.date,
			content: post.body,
		})),
	});
}
