import React from "react";
import "./App.css";
import { Info } from "./components/Info";
import { ProfessionalInfo } from "./components/ProfessionalInfo";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <main className="min-h-[100vh]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col py-12 lg:flex-row">
        <section className="top-12 flex-1 basis-1/3 self-start px-8 py-4 lg:sticky lg:px-8">
          <Info />
        </section>
        <aside className="flex-2 basis-2/3 overflow-y-auto px-8 py-4 lg:px-20">
          <ProfessionalInfo />
        </aside>
      </div>
      <Footer />
    </main>
  );
};

export default App;
