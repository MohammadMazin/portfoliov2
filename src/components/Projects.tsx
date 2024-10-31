import ProjectCard, { Project } from "./ui/ProjectCard";

const projects: Project[] = [
  {
    title: "EmoteStop",
    role: "Fullstack Developer",
    description: [
      "Added features to their hiring platform to improve automation of processing over 3000 candidates info and data analysis on their profile",
      "Included GitHub and Slack integration for managing applicant information",
      "Received training for Fullstack web development and DevOps with AWS to learn the full deployment cycle",
    ],
    skills: ["NextJs", "Tailwind", "Posthog"],
    logo: "https://i.imgur.com/KVOYwMj.png",
    link: "https://emotestop.vercel.app/",
  },
  {
    title: "Kayleberries Portfolio",
    role: "UI Designer and Web Developer",
    description: [
      "Worked on the Subscription and Affiliate service",
      "Implemented Bank Transfer and Pay My Mobile options as payment methods",
      "Fixed security issues",
      "Performed R&D on fixing potential XSS attacks, adding new features to display reports",
    ],
    skills: ["HTML", "CSS", "Javascript", "GSAP"],
    logo: "https://i.imgur.com/bEG74Z6.png",
  },
];

export function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-secondary">Projects</h2>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
