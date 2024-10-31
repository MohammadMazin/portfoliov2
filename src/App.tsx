import React, { useEffect } from "react";
import "./App.css";
import { Info } from "./components/Info";
import { ProfessionalInfo } from "./components/ProfessionalInfo";
import { Link } from "./components/ui/Link";

const App: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <main className="w-[100vw] bg-background min-h-[100vh]">
      {/* <img
        width="100%"
        src="https://capsule-render.vercel.app/api?type=waving&color=0:ff7a00,100:ff5757&height=90&section=header"
      /> */}
      <div className="mx-auto w-full max-w-[900px] flex py-12">
        <section className="flex-1 basis-1/3 sticky top-12 self-start">
          <Info />
        </section>
        <aside className="flex-2 basis-2/3 overflow-y-auto">
          <ProfessionalInfo />
        </aside>
      </div>
      <div className="mx-auto w-full max-w-[900px] py-12 text-sm">
        <p>
          Designed in Figma, Developed using React, Typescript,{" "}
          <Link href="https://ui.shadcn.com/" text="shadcn/ui" /> and{" "}
          <Link href="https://ui.aceternity.com/" text="Acternity" />
        </p>
      </div>
      <img
        width="100%"
        src="https://capsule-render.vercel.app/api?type=waving&color=0:ff7a00,100:ff5757&height=135&section=footer"
      />
    </main>
  );
};

export default App;
