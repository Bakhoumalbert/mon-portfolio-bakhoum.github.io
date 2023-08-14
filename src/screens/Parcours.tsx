import { Education } from "../components/parcours/Education";
import { Experience } from "../components/parcours/Experience";
import { UnderlineTitle } from "../typography/particules/UnderlineTitle";

export const Parcours = () => {


  return (
    <div className="w-full h-full text-sm sm:text-lg md:text-base space-y-6 pl-10">
      <div className="relative left-0 flex flex-col py-2 space-y-6">
        <h1 className="text-3xl font-ttl">Parcours</h1>
        <UnderlineTitle />
      </div>
      <div>
      <div className="flex flex-row pb-6 space-x-4 items-center">
        <img src="public/assets/icons/icon-experience.svg" alt="" />
        <h2 className="text-2xl text-[44566C] font-ttl">Expériences</h2>
      </div>
      <div className="px-6">
      <div className="border-l-[1px]">
        <Experience titleExperience="Projet de badge avec Arduino" begin="2022" end="2023" experiences="Informatique embarqué | Quit Arduino | carte RFID | ..." />
        <Experience titleExperience="Projet de badge avec Arduino" begin="2023" end="Actuellemnt" experiences="JavaScript | HTML | React | tailwindcss | ..." />
      </div>
      </div>
      </div>
      <div>
      <div className="flex flex-row pb-6 space-x-4 items-center">
        <img src="public/assets/icons/icon-education.svg" alt="" />
        <h2 className="text-2xl text-[44566C] font-ttl">Education</h2>
      </div>
      <div className="px-6 ">
      <div className="border-l-[1px]">
        <Education titleDiplome="Brevet de Fin d'Etude Moyen" begin="2016" end="2017" diplome="BFEM obtenu" />
        <Education titleDiplome="Baccalauréat" begin="2019" end="2020" diplome="Baccalauréat S1 avec Mention Assez-Bien" />
        <Education titleDiplome="Licence 1" begin="2020" end="2021" diplome="Licence 1 validée" />
        <Education titleDiplome="Licence 2" begin="2021" end="2022" diplome="Licence 2 validée" />
        <Education titleDiplome="Licence 3" begin="2022" end="2023" diplome="Licence 3 en cours" />
      </div>
      </div>
      </div>
    </div>
		
  );
};
