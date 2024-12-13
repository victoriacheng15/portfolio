import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import { isPublished } from "./date";

export interface PostFilter {
	maxPosts?: number;
	tags?: string[];
	excludeTags?: string[];
}

type Blog = CollectionEntry<"blog">

export async function getAllPost() {
	return await getCollection("blog");
}

export function sortPostsByDate(
	posts: Blog[],
): Blog[] {
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function filterPublishedPosts(posts: Blog[]): Blog[] {
	return posts.filter(
		(post) => !post.data.draft && isPublished(post.data.date),
	);
}

export function filterPosts(
	posts: Blog[],
	filter: PostFilter = {},
): Blog[] {
	let filteredPosts = filterPublishedPosts(posts);

	// Filter by tags
	if (filter.tags?.length) {
		filteredPosts = filteredPosts.filter((post) =>
			filter.tags?.some((tag) => post.data.tags?.includes(tag)),
		);
	}

	// Filter by excluded tags
	if (filter.excludeTags?.length) {
		filteredPosts = filteredPosts.filter(
			(post) =>
				!filter.excludeTags?.some((tag) => post.data.tags?.includes(tag)),
		);
	}

	// Sort posts by date
	filteredPosts = sortPostsByDate(filteredPosts);

	// Limit number of posts if maxPosts is specified
	if (filter.maxPosts) {
		filteredPosts = filteredPosts.slice(0, filter.maxPosts);
	}

	return filteredPosts;
}

export function getPostsByTag(
	posts: Blog[],
	tag: string,
): Blog[] {
	return posts.filter(
		(post) =>
			post.data.tags?.includes(tag) &&
			!post.data.draft &&
			isPublished(post.data.date),
	);
}

export function getAllTags(posts: Blog[]): string[] {
	const publishedPosts = filterPublishedPosts(posts);
	return [
		...new Set(publishedPosts.flatMap((post) => post.data.tags || [])),
	].sort();
}


export async function getAllSortedPosts() {
	const posts = await getAllPost();
	const publishedPosts = filterPublishedPosts(posts);
	return sortPostsByDate(publishedPosts);
}

export async function getAllTheTags() {
	const posts = await getAllPost();
	return getAllTags(posts);
}