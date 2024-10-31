import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Summary } from "./Summary";

export function ProfessionalInfo() {
  return (
    <div className="py-4 px-8">
      <Summary />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
