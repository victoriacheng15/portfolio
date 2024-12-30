export const currentYear = new Date().getFullYear();

export function formatDate(date: Date): string {
  const month = date.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month} ${day}, ${year}`;
}

export function isPublished(date: Date): boolean {
	return date <= new Date();
}
