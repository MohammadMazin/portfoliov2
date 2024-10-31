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
    <div className="relative flex flex-col gap-3 bg-primary/50 rounded-lg p-4 transform transition-all duration-200   hover:bg-primary/70 shadow-md hover:shadow-lg">
      <div className="absolute inset-0 -z-10 bg-muted rounded-lg transform transition-transform duration-200 translate-y-1"></div>

      <div className="flex gap-4 items-center relative">
        {job.logo && (
          <span>
            <img
              src={job.logo}
              alt="logo"
              className="w-[70px] h-[70px] object-cover"
            />
          </span>
        )}
        <div>
          <h3 className="font-semibold text-lg">{job.company}</h3>
          <h2 className="font-semibold">{job.title}</h2>
          <h4 className="font-light text-sm">{job.date}</h4>
          <h4 className="font-light text-sm">{job.location}</h4>
        </div>
      </div>
      <ul className="flex flex-col gap-1">
        {job.description.map((desc: string) => {
          return <li className="text-sm">{desc}</li>;
        })}
      </ul>
      <span className="flex gap-1">
        {job.skills.map((skill: string) => {
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
