export const SKILLS = [
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

export function formatSkillPath(skill: string) {
	return skill.replace(/\./g, "dot").replace(/\s+/g, "").toLowerCase();
}
