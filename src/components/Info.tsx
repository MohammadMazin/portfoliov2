import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import { TfiDownload } from "react-icons/tfi";
import Navbar from "./Navbar";
export function Info() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to your PDF in the public folder
    link.download = "Syed Mohammad Mazin - Software Engineer Resume.pdf"; // The name of the file to download
    link.click();
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 text-3xl font-bold text-secondary">
        Syed Mohammad Mazin
      </div>

      <div className="text-bold flex gap-1 font-bold text-secondary">
        Fullstack Developer
      </div>

      <p>Making full-stack apps, and enjoying my time while I do it</p>

      <span className="flex gap-2">
        <FaGithub className="cursor-pointer text-2xl text-primary hover:text-primary/80" />
        <FaLinkedin className="cursor-pointer text-2xl text-primary hover:text-primary/80" />
      </span>

      <Navbar />

      <span className="flex gap-2">
        <Button className="rounded-full text-white" onClick={downloadResume}>
          <TfiDownload />
          Resume
        </Button>
        <Button className="rounded-full text-white">Contact Me</Button>
      </span>
    </div>
  );
}
