import { useEffect, useState } from "react";

const links = [
  { id: "aboutMe", text: "ABOUT ME" },
  { id: "experience", text: "EXPERIENCE" },
  { id: "projects", text: "PROJECTS" },
  { id: "skills", text: "SKILLS" },
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
      { threshold: [0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const offset = 250;
    const yPosition =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  const activeLink = "text-primary text-lg";
  const inactiveLink = "text-secondary";

  const getLinkClass = (sectionId: string) =>
    `font-bold transition-all hover:text-primary/75 ${
      activeSection === sectionId ? activeLink : inactiveLink
    }`;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full py-4 shadow backdrop-blur-xl lg:static lg:block lg:shadow-none">
      <ul className="flex h-full w-full items-center justify-around lg:block">
        {links.map((link) => (
          <li key={link.id} className="mb-2">
            <a
              href={`#${link.id}`}
              className={getLinkClass(link.id)}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
