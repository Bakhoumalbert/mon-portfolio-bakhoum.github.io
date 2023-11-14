import { Route, Routes } from "react-router-dom";
import { ParticulesBackground } from "./Particules";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { Presentation } from "../screens/Presentation";
import { Parcours } from "../screens/Parcours";
import { Competences } from "../screens/Competences";
import Projets from "../screens/Projets";
import { Contact } from "../screens/Contacts";

function App() {
  return (
    <div className="w-full h-full p-12 bg-gray-200">
      <ParticulesBackground />
      <Topbar />
      <div className="w-full h-full flex flex-col md:flex-row ">
        <div className="md:w-1/3 bg-[#fff] rounded-t-3xl md:rounded-bl-3xl text-[#172330] flex-col items-center justify-center">
          <Sidebar />
        </div>
        <div className="md:w-2/3 rounded-b-3xl md:rounded-bl-none bg-[#fff] flex justify-center p-6 ">
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets projet={Projets} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
