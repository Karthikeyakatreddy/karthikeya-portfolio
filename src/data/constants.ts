// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  PYTHON = "python",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Building interactive browser experiences and clean client-side logic.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "Writing safer, scalable applications with typed JavaScript.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Structuring accessible, semantic, and SEO-friendly web pages.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Designing responsive layouts, animations, and professional interfaces.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
[SkillNames.PYTHON]: {
  id: 26,
  name: "python",
  label: "Python",
  shortDescription: "Writing readable programs for automation, data, and machine learning workflows.",
  color: "#3776ab",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
},
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Building reusable UI components and smooth user experiences.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "Creating clean component-based interfaces when the project needs Vue.",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "Building production-ready React apps with routing, SEO, and deployment support.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Creating fast, responsive, and consistent user interfaces.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Developing backend services, APIs, and server-side application logic.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Creating REST APIs, routes, middleware, and backend workflows.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Managing relational data with structured queries and reliable schemas.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Working with document-based data for flexible application storage.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Tracking code changes and collaborating through version control.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Publishing projects, collaborating on repositories, and managing source code.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Keeping code formatting consistent and readable across the project.",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Managing JavaScript packages, scripts, and project dependencies.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "Using hosted tools for authentication, storage, and rapid app development.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Building content-focused websites with a widely used CMS platform.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Working with terminal commands, deployments, and basic system operations.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Packaging applications into consistent environments for deployment.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "Configuring web servers, reverse proxies, and deployment routing.",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "Understanding cloud services and scalable infrastructure basics.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "Understanding cloud computing concepts and hosted platform services.",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "Editing files quickly from the terminal when working on development tasks.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Deploying modern web applications quickly with production-ready hosting.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jul 2023",
    endDate: "Sep 2023",
    title: "Python Internship Trainee",
    company: "COIGN Consultants Pvt. Ltd.",
    description: [
      "Completed Python internship training in association with DNR College of Engineering & Technology.",
      "Strengthened programming fundamentals, problem solving, and practical coding confidence.",
      "Built a foundation for later machine learning and data-focused project work.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.GIT, SkillNames.GITHUB],
  },
  {
    id: 2,
    startDate: "Jul 2023",
    endDate: "Sep 2023",
    title: "Cloud Computing Internship",
    company: "Skilltimate Technologies",
    description: [
      "Completed cloud computing training with focus on cloud fundamentals and modern IT infrastructure concepts.",
      "Gained exposure to deployment thinking, hosted systems, and service-based architecture.",
      "Recognized for sincere, hardworking, and punctual performance during the internship period.",
    ],
    skills: [SkillNames.AWS, SkillNames.GCP, SkillNames.LINUX],
  },
  {
    id: 3,
    startDate: "Jun 2024",
    endDate: "Jul 2024",
    title: "AI & Prompt Engineering Intern",
    company: "VaultofCodes",
    description: [
      "Completed a one-month internship focused on AI and prompt engineering concepts.",
      "Practiced structured prompting, AI-assisted problem solving, and productivity-focused use of AI tools.",
      "Improved ability to communicate technical tasks clearly and convert requirements into useful prompts.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.TS, SkillNames.REACT],
  },
  {
    id: 4,
    startDate: "Jun 2025",
    endDate: "Jun 2025",
    title: "Cyber Job Simulation",
    company: "Deloitte / Forage",
    description: [
      "Completed practical tasks in cybersecurity through a professional job simulation.",
      "Developed awareness of cyber risk, security thinking, and professional task execution.",
      "Added cybersecurity fundamentals to a broader Computer Science and AI learning profile.",
    ],
    skills: [SkillNames.LINUX, SkillNames.GIT, SkillNames.GITHUB],
  },
  {
    id: 5,
    startDate: "2023",
    endDate: "2025",
    title: "Certifications & Learning",
    company: "Great Learning, TCS iON, Mentorly, and self-learning",
    description: [
      "Completed Python Fundamentals for Beginners and Python for Machine Learning certifications.",
      "Completed Communication Skills through TCS iON, covering verbal, non-verbal, barriers, and effective communication.",
      "Attended a practical Gen-AI workshop on Integrative AI in Web & Application Development.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.GITHUB, SkillNames.VERCEL],
  },
];


export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

