import { Sidebar } from "./components/Sidebar";
import { Presentation } from "./screens/Presentation";
import { Parcours } from "./screens/Parcours";
import { Competences } from "./screens/Competences";
// import { Projets } from "./screens/Projets";
import { Contact } from "./screens/Contacts";
import { Topbar } from "./components/Topbar";
import { ParticulesBackground } from "./components/Particules";
import { Routes, Route } from 'react-router-dom';
import "./index.css";
import Projets from "./screens/Projets";

function App() {

  return (
    <div className="mx-auto px-4 md:px-36 py-4 bg-[#d6dbe1]">
      <ParticulesBackground />
      <div className="flex flex-col md:flex-row">
      <div className="rounded-t-3xl bg-white md:bg-none md:rounded-bl-3xl text-[#172330] flex-col items-center justify-center md:mt-24 z-10">
        <Sidebar />
      </div>
      <section className="flex flex-col">
        <Topbar />
        <main className="text-[#44566C] font-par rounded-b-3xl md:rounded-bl-none bg-white md:px-10 z-10">
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets projet={Projets} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </section>
      </div>
    </div>
  );
}

export default App;
