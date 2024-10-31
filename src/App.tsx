import React, { useEffect } from "react";
import "./App.css";
import { Info } from "./components/Info";
import { ProfessionalInfo } from "./components/ProfessionalInfo";

const App: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <main className="w-[100vw] bg-background min-h-[100vh]">
      <div className="mx-auto w-full max-w-[1000px] flex py-12">
        <section className="flex-1 basis-1/3 sticky top-12 self-start">
          <Info />
        </section>
        <aside className="flex-2 basis-2/3 overflow-y-auto">
          <ProfessionalInfo />
        </aside>
      </div>
    </main>
  );
};

export default App;
