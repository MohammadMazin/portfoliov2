import { Badge } from "./badge";
import { FaExternalLinkAlt } from "react-icons/fa";

export type Project = {
  title: string;
  role: string;
  description: string[];
  skills: string[];
  logo?: string;
  link?: string;
};

type ProjectProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="group relative flex transform flex-col gap-3 rounded-lg bg-primary/0 p-4 text-secondary shadow-md transition-all duration-200 hover:bg-primary/0 hover:shadow-lg">
      <div className="absolute inset-0 -z-10 translate-y-1 transform rounded-lg bg-muted/50 transition-transform duration-200"></div>
      <div className="relative flex items-start gap-4">
        {project.logo && (
          <span>
            <img
              src={project.logo}
              alt="logo"
              className="h-auto w-[150px] rounded-lg object-cover"
            />
          </span>
        )}
        <div>
          <h2 className="font-semibold">{project.title}</h2>
          <h4 className="text-sm font-light">{project.role}</h4>
        </div>
        {project.link && (
          <a href={project.link} target="blank" className="ms-auto">
            <FaExternalLinkAlt className="text-primary/50 transition-colors group-hover:text-primary" />
          </a>
        )}
      </div>
      <ul className="flex flex-col gap-1">
        {project.description.map((desc: string) => {
          return <li className="text-sm">{desc}</li>;
        })}
      </ul>
      <span className="flex flex-wrap gap-1">
        {project.skills.map((skill: string) => {
          return (
            <Badge className="pointer-events-none flex items-center justify-center bg-secondary font-bold">
              {skill}
            </Badge>
          );
        })}
      </span>
    </div>
  );
}
