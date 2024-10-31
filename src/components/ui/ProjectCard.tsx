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
    <div className="relative text-secondary flex flex-col gap-3 bg-primary/50 rounded-lg p-4 transform transition-all duration-200 group   hover:bg-primary/70 shadow-md hover:shadow-lg">
      <div className="absolute inset-0 -z-10 bg-muted rounded-lg transform transition-transform duration-200 translate-y-1"></div>

      <div className="flex gap-4 items-start relative">
        {project.logo && (
          <span>
            <img
              src={project.logo}
              alt="logo"
              className="w-[150px] rounded-lg h-auto object-cover"
            />
          </span>
        )}
        <div>
          <h2 className="font-semibold">{project.title}</h2>
          <h4 className="font-light text-sm">{project.role}</h4>
        </div>
        {project.link && (
          <a href={project.link} target="blank" className="ms-auto">
            <FaExternalLinkAlt className="text-primary/50 group-hover:text-primary transition-colors" />
          </a>
        )}
      </div>
      <ul className="flex flex-col gap-1">
        {project.description.map((desc: string) => {
          return <li className="text-sm">{desc}</li>;
        })}
      </ul>
      <span className="flex gap-1 flex-wrap">
        {project.skills.map((skill: string) => {
          return (
            <Badge className="flex justify-center bg-secondary font-bold items-center pointer-events-none">
              {skill}
            </Badge>
          );
        })}
      </span>
    </div>
  );
}
