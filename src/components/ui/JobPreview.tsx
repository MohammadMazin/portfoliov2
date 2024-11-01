import { Badge } from "./badge";

export type Job = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  skills: string[];
  logo?: string;
};

type JobProps = {
  job: Job;
};

export function JobPreview({ job }: JobProps) {
  return (
    <div className="relative flex transform flex-col gap-3 rounded-lg bg-primary/0 p-4 text-secondary shadow-md transition-all duration-200 hover:bg-primary/0 hover:shadow-lg">
      <div className="absolute inset-0 -z-10 translate-y-1 transform rounded-lg bg-muted/50 transition-transform duration-200"></div>
      <div className="relative flex items-center gap-4">
        {job.logo && (
          <span>
            <img
              src={job.logo}
              alt="logo"
              className="h-[70px] w-[70px] object-cover"
            />
          </span>
        )}
        <div>
          <h3 className="text-lg font-semibold">{job.company}</h3>
          <h2 className="font-semibold">{job.title}</h2>
          <h4 className="text-sm font-light">{job.date}</h4>
          <h4 className="text-sm font-light">{job.location}</h4>
        </div>
      </div>
      <ul className="flex flex-col gap-1">
        {job.description.map((desc: string) => {
          return <li className="text-sm">{desc}</li>;
        })}
      </ul>
      <span className="flex flex-wrap gap-1">
        {job.skills.map((skill: string) => {
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
