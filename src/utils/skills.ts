const SKILLS = [
	"TypeScript",
	"JavaScript",
	"Python",
	".NET",
	"HTML",
	"CSS",
	"React",
	"Next.js",
	"Redux",
	"Tailwind CSS",
	"SASS",
	"Node.js",
	"Express",
	"Flask",
	"MongoDB",
	"PostgreSQL",
	"Cypress",
	"Jest",
	"Testing Library",
	"Github Actions",
	"Docker",
	"Bash",
	"Linux",
];

function formatForFilePath(skills: string[]): string[] {
	return skills.reduce((acc: string[], curr: string) => {
		const formattedString = curr
			.replace(/\./g, "dot")
			.replace(/\s+/g, "")
			.toLowerCase();
		acc.push(formattedString);

		return acc;
	}, []);
}

export const formatSkillNames = formatForFilePath(SKILLS);
