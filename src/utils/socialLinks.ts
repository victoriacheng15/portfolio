export const SOCIALS = [
	{
		name: "GitHub",
		href: "https://github.com/victoriacheng15",
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/victoriacheng15",
	},
	{
		name: "TikTok",
		href: "https://www.tiktok.com/@victoriacheng15",
	},
	{
		name: "YouTube",
		href: "https://www.youtube.com/@victoriacheng15",
	},
	{
		name: "Twitter",
		href: "https://www.twitter.com/viktoriacheng15",
	},
	{
		name: "Buy Me a Coffee",
		href: "https://www.buymeacoffee.com/victoriacheng15",
	},
	{
		name: "rss",
		href:"/rss.xml"
	}
];

export function formatSocialName(name: string) {
	return name.replace(/\W/g,"").toLowerCase();
}