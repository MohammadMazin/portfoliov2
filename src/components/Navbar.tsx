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

  const activeLink = "text-primary text-lg";
  const inactiveLink = "text-secondary";

  const getLinkClass = (sectionId: string) =>
    `font-bold transition-all hover:text-primary/75  ${
      activeSection === sectionId ? activeLink : inactiveLink
    }`;

  return (
    <nav className="my-4">
      <ul>
        <li className={getLinkClass("aboutMe")}>
          <a href="#aboutMe">ABOUT ME</a>
        </li>
        <li className={getLinkClass("skills")}>
          <a href="#skills">SKILLS</a>
        </li>
        <li className={getLinkClass("experience")}>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li className={getLinkClass("projects")}>
          <a href="#projects">PROJECTS</a>
        </li>
      </ul>
    </nav>
  );
}
