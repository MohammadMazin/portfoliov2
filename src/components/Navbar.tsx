import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const activeLink = "text-primary font-bold text-lg";
  const inactiveLink = "text-secondary";

  const getLinkClass = (sectionId: string) =>
    `transition-all ${activeSection === sectionId ? activeLink : inactiveLink}`;

  return (
    <nav>
      <ul>
        <li className={getLinkClass("aboutMe")}>
          <a href="#aboutMe">About Me</a>
        </li>
        <li className={getLinkClass("skills")}>
          <a href="#skills">Skills</a>
        </li>
        <li className={getLinkClass("experience")}>
          <a href="#experience">Experience</a>
        </li>
        <li className={getLinkClass("projects")}>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
