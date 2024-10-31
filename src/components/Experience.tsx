import { Job, JobPreview } from "./ui/JobPreview";

const jobs: Job[] = [
  {
    title: "Software Engineer - GIP Intern",
    location: "Tokyo, Japan",
    company: "HENNGE",
    date: "Aug 2024 - Sep 2024",
    description: [
      "Added features to their hiring platform to improve automation of processing over 3000 candidates info and data analysis on their profile",
      "Included GitHub and Slack integration for managing applicant information",
      "Received training for Fullstack web development and DevOps with AWS to learn the full deployment cycle",
    ],
    skills: [
      "Vue",
      "Golang",
      "Typescript",
      "DynamoDB",
      "ECS",
      "EC2",
      "Load Balancers",
      "Terraform",
    ],
    logo: "https://it.impress.co.jp/mwimgs/f/0/400/img_f09c667cf03e1b9f605fb9afad1711a835412.png",
  },
  {
    title: "Software Engineer",
    company: "Rewaa",
    location: "Riyadh, Saudi Arabia",
    date: "Jun 2023 - July 2024",
    description: [
      "Worked on the Subscription and Affiliate service",
      "Implemented Bank Transfer and Pay My Mobile options as payment methods",
      "Fixed security issues",
      "Performed R&D on fixing potential XSS attacks, adding new features to display reports",
    ],
    skills: ["Angular", "NodeJs", "NestJs", "AWS"],
    logo: "https://media.licdn.com/dms/image/C560BAQGFhEabEPOqPw/company-logo_200_200/0/1630601993176/rewaa_company_logo?e=2147483647&v=beta&t=GH_5TIsTgzP9ZDj1Pgj042llIGRAcTK7aauYqX9xYkM",
  },
];

export function Experience() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-secondary">Experience</h2>
      {jobs.map((job) => (
        <JobPreview job={job} />
      ))}
    </div>
  );
}
