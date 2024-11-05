import { FaLinkedin, FaCopy, FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { TfiDownload } from "react-icons/tfi";
import Navbar from "./Navbar";
import { toast } from "sonner";

const email = "smmazin2000@gmail.com";
export function Info() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Syed Mohammad Mazin - Full Stack Developer Resume.pdf";
    link.click();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("smmazin2000@gmail.com");
    toast("Copied email to clipboard");
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 text-3xl font-bold text-secondary">
        Syed Mohammad Mazin
      </div>
      <div className="text-bold flex font-bold text-secondary">
        Fullstack Developer
      </div>

      <p>Making full-stack apps, and enjoying my time while I do it</p>

      <span className="flex gap-2">
        <a
          href="https://github.com/MohammadMazin
        "
          target="blank"
        >
          <FaGithub className="cursor-pointer text-2xl text-primary hover:text-primary/80" />
        </a>
        <a
          href="https://www.linkedin.com/in/syed-mohammad-mazin/"
          target="blank"
        >
          <FaLinkedin className="cursor-pointer text-2xl text-primary hover:text-primary/80" />
        </a>
      </span>

      <Navbar />

      <div className="text-bold flex font-semibold text-secondary">
        <Button
          className="rounded-full"
          variant={"outline"}
          onClick={copyEmail}
        >
          {email} <FaCopy />
        </Button>
      </div>

      <span className="flex gap-2">
        <Button className="rounded-full text-white" onClick={downloadResume}>
          <TfiDownload />
          Resume
        </Button>

        {/* <Button className="rounded-full text-white">Contact Me</Button> */}
      </span>
    </div>
  );
}
