import {
	FaPython,
	FaHtml5,
	FaReact,
	FaNodeJs,
	FaGitAlt,
	FaGithub,
} from "react-icons/fa"
import {
	SiJavascript,
	SiExpress,
	SiChakraui,
	SiMongodb,
	SiMariadb,
} from "react-icons/si"
import { IoLogoCss3 } from "react-icons/io"
import { TbSql } from "react-icons/tb"
import { IoLogoFigma } from "react-icons/io5"
import { GrMysql } from "react-icons/gr"

class Education {
	constructor(school, degree, grad, gpa, coursework) {
		this.school = school
		this.degree = degree
		this.grad = grad
		this.gpa = gpa
		this.coursework = coursework
	}
}

class Experience {
	constructor(title, company, start, end, bullets) {
		this.title = title
		this.company = company
		this.start = start
		this.end = end
		this.bullets = bullets
	}
}

class Skill {
	constructor(name, icon, url) {
		this.name = name
		this.icon = icon
		this.url = url
	}
}

export const resume = {
	name: "resume",
	quote: {
		text: "Shouldn’t let go of being educated... Universe spent a lot of time telling you something... Maybe all those other things were getting you ready for this. Something.",
		author: "James S.A. Corey",
		cite: "Babylon's Ashes",
	},
	sections: {
		education: [
			new Education(
				"Oregon State University",
				"Computer Science Bachelor of Science",
				"Fall 2025 Expected",
				"4.0 current",
				[
					"Algorithms",
					"Assembly Language",
					"Data Structures",
					"Discrete Math",
					"Intro to Databases",
					"Operating Systems",
					"Software Engineering I",
					"Web Development",
				]
			),
			new Education(
				"University of North Florida",
				"Bachelor of Fine Arts",
				"April 27, 2012",
				"3.18",
				[
					"2-D Design",
					"3-D Design",
					"Drawing I & II",
					"Photography",
					"Basic Computer Images",
				]
			),
		],

		experience: [
			new Experience(
				"Data Structures Course Teaching Assistant",
				"Oregon State University",
				"April 2024",
				"Present",
				[
					"Partner with professor to optimize learning for 400 students, demonstrating project management skills.",
					"Mentor students on AVL trees, heaps, & hash maps, showcasing expertise on data structures.",
					"Facilitate class discussion boards, addressing & resolving technical inquiries effectively.",
					"Conduct office hours for personalized support on advanced topics, highlighting problem-solving skills.",
					"Evaluate stdent work with focus on time complexity & algorithmic efficiency, emphasizing analytical skills.",
				]
			),
			new Experience(
				"Equipment Technician & Consultant",
				"Georgie's Ceramic & Clay Co.",
				"October 2016",
				"Present",
				[
					"Analyze diagnostic data to troubleshoot & resolve equipment issues, applying problem-solving skills.",
					"Design & facilitate monthly workshops on kiln firing systems, enhancing participants' technical confidence.",
					"Utilize machine design knowledge to match equipment functionality with specific artist needs.",
					"Collaborate with a diverse team of specialists to deliver a cohesive & positive client experience.",
				]
			),
		],

		skills: {
			languages: [
				new Skill("Python", FaPython, "https://www.python.org/"),
				new Skill(
					"JavaScript",
					SiJavascript,
					"https://www.javascript.com/"
				),
				new Skill("HTML", FaHtml5, "https://html.com/"),
				new Skill("CSS", IoLogoCss3, "https://html.com/css/"),
				new Skill("SQL", TbSql, "https://www.w3schools.com/sql/"),
			],
			libraries: [
				new Skill("React", FaReact, "https://react.dev/"),
				new Skill("Node.js", FaNodeJs, "https://nodejs.org/en"),
				new Skill("Express.js", SiExpress, "https://expressjs.com/"),
				new Skill("Chakra UI", SiChakraui, "https://v2.chakra-ui.com/"),
			],
			platforms: [
				new Skill("Git", FaGitAlt, "https://git-scm.com/"),
				new Skill("GitHub", FaGithub, "https://github.com/"),
				new Skill("Figma", IoLogoFigma, "https://www.figma.com/"),
			],
			databases: [
				new Skill("MongoDB", SiMongodb, "https://www.mongodb.com/"),
				new Skill("MariaDB", SiMariadb, "https://mariadb.org/"),
				new Skill("MySQL", GrMysql, "https://www.mysql.com/"),
			],
		},
	},
}

export const projects = {
	name: "projects",
	quote: {
		text: "A process cannot be understood by stopping it. Understanding must move with the flow of the process, must join it and flow with it.",
		author: "Frank Herbert",
		cite: "Dune",
	},
	sections: {},
}

export const contact = {
	name: "contact",
	quote: {
		text: "Communication is essential... Exchange information, learn to talk sensibly about any subject, learn to express your thoughts, accept new ones...",
		author: "Anne McCaffrey",
		cite: "The White Dragon",
	},
	sections: {},
}
