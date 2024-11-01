import React, { useEffect } from "react";
import "./App.css";
import { Info } from "./components/Info";
import { ProfessionalInfo } from "./components/ProfessionalInfo";
import { Link } from "./components/ui/Link";

const App: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <main className="min-h-[100vh]">
      <div className="mx-auto flex w-full max-w-[900px] flex-col py-12 md:flex-row">
        <section className="sticky top-12 flex-1 basis-1/3 self-start px-8 py-4 md:sticky md:px-4">
          <Info />
        </section>
        <aside className="flex-2 basis-2/3 overflow-y-auto px-8 py-4">
          <ProfessionalInfo />
        </aside>
      </div>
      <div className="mx-auto w-full max-w-[900px] px-8 py-4 text-sm md:px-4">
        <p>
          Designed in Figma, Developed using React, Typescript,{" "}
          <Link href="https://ui.shadcn.com/" text="shadcn/ui" /> and{" "}
          <Link href="https://ui.aceternity.com/" text="Acternity" />
        </p>
      </div>
      <img
        className="w-full"
        src="https://capsule-render.vercel.app/api?type=waving&color=0:ff7a00,100:ff5757&height=135&section=footer"
      />
    </main>
  );
};

export default App;
