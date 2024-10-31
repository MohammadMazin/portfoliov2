import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import { TfiDownload } from "react-icons/tfi";
export function Info() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex gap-1   text-3xl font-bold text-secondary">
        Syed Mohammad Mazin
      </div>

      <div className="flex gap-1 text-bold font-bold text-secondary">
        Fullstack Developer
      </div>

      <p>Making full-stack apps, and enjoying my time while I do it</p>

      <span className="flex gap-2">
        <FaGithub className="text-primary text-2xl hover:text-primary/80 cursor-pointer" />
        <FaLinkedin className="text-primary text-2xl hover:text-primary/80 cursor-pointer" />
      </span>

      <nav>
        <ul className="">
          <li>About Me</li>
          <li>Experience</li>
          <li>Projects</li>
        </ul>
      </nav>

      <span className="flex gap-2 ">
        <Button className="text-white rounded-full">
          <TfiDownload />
          Resume
        </Button>
        <Button className="text-white rounded-full">Contact Me</Button>
      </span>
    </div>
  );
}
