import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Summary } from "./Summary";

export function ProfessionalInfo() {
  return (
    <div className="flex flex-col gap-8">
      <Summary />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}
