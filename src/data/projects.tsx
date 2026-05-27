import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiCss3,
  SiDjango,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots/karthikeya";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  ml: {
    title: "Machine Learning",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <SiDjango />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  github: {
    title: "GitHub",
    bg: "black",
    fg: "white",
    icon: <SiGithub />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "fake-profile-detection",
    category: "Machine Learning",
    title: "Smart Identification of Fake Online Profiles Using Machine Learning",
    src: `${BASE_PATH}/fake-profile-detection.png`,
    screenshots: ["fake-profile-detection.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.ml],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            This academic major project focuses on detecting fake online profiles using machine learning. The system studies profile activity, follower/following behavior, posting patterns, and content-related features to classify suspicious accounts more efficiently than manual checking.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Project Goal</TypographyH3>
          <p className="font-mono mb-2">
            The goal is to improve online platform safety by reducing fake accounts, scams, impersonation, and misinformation through an automated ML-based detection approach.
          </p>
          <SlideShow images={[`${BASE_PATH}/fake-profile-detection.png`]} />
        </div>
      );
    },
  },
  {
    id: "karthikeya-portfolio",
    category: "3D Portfolio",
    title: "3D Animated Developer Portfolio",
    src: `${BASE_PATH}/portfolio.png`,
    screenshots: ["portfolio.png"],
    live: "#",
    github: "https://github.com/Karthikeyakatreddy",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            This portfolio presents my profile with a smooth 3D scroll experience, professional dark theme, recruiter-focused sections, and polished project storytelling.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Design Direction</TypographyH3>
          <p className="font-mono mb-2">
            The interface keeps the original 3D animation system while updating the personal details, background styling, project content, and professional presentation for fresher job applications.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio.png`]} />
        </div>
      );
    },
  },
  {
    id: "learning-and-certifications",
    category: "AI • Cloud • Cybersecurity",
    title: "AI, Python, Cloud & Cybersecurity Learning Track",
    src: `${BASE_PATH}/learning-track.png`,
    screenshots: ["learning-track.png"],
    live: "#experience",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.github],
      backend: [PROJECT_SKILLS.ml, PROJECT_SKILLS.django],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            My learning track includes Python programming, Python for Machine Learning, AI & Prompt Engineering, Cloud Computing, Cyber Job Simulation, Communication Skills, and Gen-AI workshop experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Career Focus</TypographyH3>
          <p className="font-mono mb-2">
            These certifications support my fresher profile for software development, AI/ML support, data-focused roles, cloud fundamentals, and cybersecurity awareness.
          </p>
          <SlideShow images={[`${BASE_PATH}/learning-track.png`]} />
        </div>
      );
    },
  },
];

export default projects;
