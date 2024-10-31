import { Job } from "@/components/ui/JobPreview";
import { Project } from "@/components/ui/ProjectCard";

export const skills = [
  {
    title: "Languages",
    skills: ["Javascript", "Typescript", "Python", "Golang"]
  },
  {
    title: "Frontend and Design",
    skills: ["React", "Next.js", "Angular", "Vue.js", "Tailwind", "CSS", "SCSS", "Styled Components", "Figma"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Nest.Js", "Express", "Golang", "Prisma", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
  },
  {
    title: "Cloud",
    skills: ["AWS", "Google Cloud", "Docker", "Terraform", "CI/CD"],
  },
  {
    title: "Tools",
    skills: ["Git", "Jest", "Jira", "Redux", "Zustand" ],
  },
]


export const projects: Project[] = [
    {
      title: "EmoteStop",
      role: "Fullstack Developer",
      description: [
        "Added features to their hiring platform to improve automation of processing over 3000 candidates info and data analysis on their profile",
        "Included GitHub and Slack integration for managing applicant information",
        "Received training for Fullstack web development and DevOps with AWS to learn the full deployment cycle",
      ],
      skills: ["NextJs", "Tailwind", "Posthog"],
      logo: "https://i.imgur.com/KVOYwMj.png",
      link: "https://emotestop.vercel.app/",
    },
    {
      title: "Widgets for Twitch and Youtube Streamers",
      role: "Designer and Developer",
      description: [
        "Added features to their hiring platform to improve automation of processing over 3000 candidates info and data analysis on their profile",
        "Included GitHub and Slack integration for managing applicant information",
        "Received training for Fullstack web development and DevOps with AWS to learn the full deployment cycle",
      ],
      skills: ["HTML", "CSS", "Javascript", "GSAP", "MatterJS"],
      link: "https://buymeacoffee.com/kayleberries/extras",
    },
    {
      title: "Kayleberries Portfolio",
      role: "UI Designer and Web Developer",
      description: [
        "Worked on the Subscription and Affiliate service",
        "Implemented Bank Transfer and Pay My Mobile options as payment methods",
        "Fixed security issues",
        "Performed R&D on fixing potential XSS attacks, adding new features to display reports",
      ],
      skills: ["HTML", "CSS", "Javascript", "GSAP"],
      link: "https://kayleportfolio.netlify.app/",
      logo: "https://i.imgur.com/bEG74Z6.png",
    },
];

export const jobs: Job[] = [
    {
      title: "Software Engineer - GIP Intern",
      location: "Tokyo, Japan",
      company: "HENNGE",
      date: "Aug 2024 - Sep 2024",
      description: [
        "Added features to their hiring platform to improve automation of processing over 3000 candidates info and data analysis on their profile",
        "Included GitHub and Slack integration for managing applicant information",
        "Selected as one of the four interns from a pool of hundreds of applicants",
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
        "Worked on the Subscription and Affiliate service till launch for over 8000 users",
        "Implemented Bank Transfer and Pay My Mobile options as payment methods",
        "Built the admin dashboard from scratch, including UI design and backend implementation",
        "Fixed security issues, potential XSS attacks, and improving the application stability by fixing legacy bugs",
      ],
      skills: ["Angular", "NodeJs", "NestJs", "AWS"],
      logo: "https://media.licdn.com/dms/image/C560BAQGFhEabEPOqPw/company-logo_200_200/0/1630601993176/rewaa_company_logo?e=2147483647&v=beta&t=GH_5TIsTgzP9ZDj1Pgj042llIGRAcTK7aauYqX9xYkM",
    },
    {
      title: "React Developer",
      company: "MWAN",
      location: "Islamabad, Pakistan",
      date: "Jun 2022 - Sep 2022",
      description: [
        "Created a Customer  Client management application using NextJS,Prisma and PostgreSQL",
        "Used shadcn/ui, Tailwind and route handlers to implement all the necessary functionality in a single project",
        "Focused on creating a reusable and modular frontend application with features such as Reusable forms and tables that could handle different data structures",
      ],
      skills: ["React", "Blockchain", "Typescript"],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3JSwY_i57ofKra2LZxD_VYMdQUGo9qTDEg&s"
    },
    {
      title: "Fullstack Developer",
      company: "IT Service Portal",
      location: "Freelance",
      date: "Feb 2023 - April 2023",
      description: [
        "Created a Customer  Client management application using NextJS,Prisma and PostgreSQL",
        "Used shadcn/ui, Tailwind and route handlers to implement all the necessary functionality in a single project",
        "Focused on creating a reusable and modular frontend application with features such as Reusable forms and tables that could handle different data structures",
      ],
      skills: ["Next.JS", "PostgreSQL", "Prisma"],
    },

    // {
    //   title: "Fullstack Developer",
    //   company: "Topical Past Paper",
    //   location: "Freelance",
    //   date: "Sep 2022 - Nov 2022",
    //   description: [
    //     "Developed a full-stack web application from scratch using React, Node.js, and MongoDB.",
    //     "The application allows users to create their own specific exam papers from questions that can be searched through filters. Implemented both a client and admin dashboard for managing and organizing the content.",
    //   ],
    //   skills: ["React", "Node.Js", "Express", "MongoDB"],
    // },
];