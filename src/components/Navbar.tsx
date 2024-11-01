import { useEffect, useState } from "react";

const links = [
  {
    id: "aboutMe",
    text: "ABOUT ME",
  },
  {
    id: "experience",
    text: "EXPERIENCE",
  },
  {
    id: "projects",
    text: "PROJECTS",
  },
  {
    id: "skills",
    text: "SKILLS",
  },
];

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
      // todo: find a better way to do it
      { threshold: [0.55] },
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
        {links.map((link) => (
          <li key={link.id} className="mb-2">
            <a href={`#${link.id}`} className={getLinkClass(link.id)}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
