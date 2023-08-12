import { Sidebar } from "./components/Sidebar";
import { Presentation } from "./screens/Presentation";
import { Parcours } from "./screens/Parcours";
import { Competences } from "./screens/Competences";
import { Projets } from "./screens/Projets";
import { Contact } from "./screens/Contacts";
import { Topbar } from "./components/Topbar";
import { ParticulesBackground } from "./components/Particules";
import { Routes, Route } from 'react-router-dom';
import "./index.css";

function App() {

  return (
    <div className="w-full px-16 py-4 bg-[#d6dbe1]">
      <div className="">
      <ParticulesBackground />
      </div>
      <div className="flex flex-col md:flex-row py-10">
      <div className="rounded-t-3xl bg-white md:bg-none md:rounded-bl-3xl text-[#172330] block flex-col items-center justify-center md:mt-20 z-10">
        <Sidebar />
      </div>
      <div className="w-full h-full flex flex-col z-10">
        <Topbar />
        <div className="w-full h-full text-[#44566C] font-par rounded-b-3xl md:rounded-bl-none bg-white p-6 ">
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
