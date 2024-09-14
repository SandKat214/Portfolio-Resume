import { 
    FaPython,
    FaHtml5,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub 
} from "react-icons/fa";
import { 
    SiJavascript,
    SiExpress,
    SiChakraui,
    SiMongodb,
    SiMariadb
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { TbSql } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";


class Education {
    constructor(school, degree, grad, gpa, coursework) {
        this.school = school;
        this.degree = degree;
        this.grad = grad;
        this.gpa = gpa;
        this.coursework = coursework;
    }
}

class Experience {
    constructor(title, company, start, end, bullets) {
        this.title = title;
        this.company = company;
        this.start = start;
        this.end = end;
        this.bullets = bullets;
    }
}

class Skill {
    constructor(name, icon, url) {
        this.name = name;
        this.icon = icon;
        this.url = url;
    }
}

export const resume = {
    name: 'Resume',
    education: [
        new Education(
            'Oregon State University',
            'Computer Science Bachelor of Science',
            'Expected Fall 2025',
            '4.0 current',
            [
                'Algorithms',
                'Assembly Language',
                'Data Structures',
                'Discrete Math',
                'Intro to Databases',
                'Web Development',

            ]
        )
    ],

    experience: [
        new Experience(
            'Data Structures Course Teaching Assistant',
            'Oregon State University',
            'April 2024',
            'Present',
            [
                'Optimize learning for up to 400 students.',
                'Mentor students on AVL trees, heaps, hash maps, etc.',
                'Oversee class discussion boards to resolve inquiries.',
                'Conduct open office hours for personalized support.',
                'Evaluate stdent work, with focus on algorithmic efficiency.'
            ]
        )
    ],

    skills: {
        languages: [
            new Skill(
                'Python',
                FaPython,
                'https://www.python.org/'
            ),
            new Skill(
                'JavaScript',
                SiJavascript,
                'https://www.javascript.com/'
            ),
            new Skill(
                'HTML',
                FaHtml5,
                'https://html.com/'
            ),
            new Skill(
                'CSS',
                IoLogoCss3,
                'https://html.com/css/'
            ),
            new Skill(
                'SQL',
                TbSql,
                'https://www.w3schools.com/sql/'
            ),
        ],
        libraries: [
            new Skill(
                'React',
                FaReact,
                'https://react.dev/'
            ),
            new Skill(
                'Node.js',
                FaNodeJs,
                'https://nodejs.org/en'
            ),
            new Skill(
                'Express.js',
                SiExpress,
                'https://expressjs.com/'
            ),
            new Skill(
                'Chakra UI',
                SiChakraui,
                'https://v2.chakra-ui.com/'
            ),
        ],
        platforms: [
            new Skill(
                'Git',
                FaGitAlt,
                'https://git-scm.com/'
            ),
            new Skill(
                'GitHub',
                FaGithub,
                'https://github.com/'
            ),
            new Skill(
                'Figma',
                IoLogoFigma,
                'https://www.figma.com/'
            ),
        ],
        databases: [
            new Skill(
                'MongoDB',
                SiMongodb,
                'https://www.mongodb.com/'
            ),
            new Skill(
                'MariaDB',
                SiMariadb,
                'https://mariadb.org/'
            ),
            new Skill(
                'MySQL',
                GrMysql,
                'https://www.mysql.com/'
            ),
        ]
    }
}