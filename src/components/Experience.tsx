import { jobs } from "@/lib/work";
import { JobPreview } from "./ui/JobPreview";

export function Experience() {
  return (
    <div id="experience" className="section flex flex-col gap-4">
      <h2 className="sticky top-0 text-2xl font-bold text-secondary">
        Experience
      </h2>
      {jobs.map((job) => (
        <JobPreview job={job} />
      ))}
    </div>
  );
}
