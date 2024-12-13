export const navItems = [
	{ href: "/", text: "Home", position: "top" },
	{ href: "/blog", text: "Blog", position: "top" },
	{ href: "/tags", text: "Tags" , position: "top"},
	{ href: "/archive", text: "Archive", position: null },
];

export const navHeader = navItems.filter((item) => item.position === "top");