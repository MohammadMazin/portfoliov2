import { projects } from "@/lib/work";
import ProjectCard from "./ui/ProjectCard";

export function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-secondary">Projects</h2>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
