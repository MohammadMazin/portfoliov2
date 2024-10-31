import { skills } from "@/lib/work";
import { Badge } from "./ui/badge";

export function Skills() {
  return (
    <div id="skills" className="section flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-secondary">Skills</h2>
      {skills.map((skill) => (
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-secondary">{skill.title}</h3>
          <div className="flex gap-1 flex-wrap">
            {skill.skills.map((skill) => (
              <Badge>{skill}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
