export const currentYear = new Date().getFullYear();

export function formatDate(date: Date): string {
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	});
}

export function isPublished(date: Date): boolean {
	return date <= new Date();
}
