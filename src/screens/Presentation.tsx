import { LangueSwiper } from "../components/presentation/LangueSwiper";
import { Formation } from "../components/presentation/formations/formation";
import { BasesDeDonneeList, DevWebList, ProgrammationList, ReseauList } from "../components/presentation/formations/list-Formation";
import { CodeSwiper } from "../features/CodeSwiper";
import { formationFieldType } from "../types/formation-fields";
import { UnderlineTitle } from "../typography/particules/UnderlineTitle";
import { PointBleu } from "../typography/particules/pointBleu";

export const Presentation = () => {

  const programmation = (
    ProgrammationList.map((prog: formationFieldType) => (
      <Formation key={prog.id} id={prog.id} name={prog.name} description={prog.description} />
    ))
  )

  const ReseauInf = (
    ReseauList.map((prog: formationFieldType) => (
      <Formation key={prog.id} id={prog.id} name={prog.name} description={prog.description} />
    ))
  )
  const AdminDB = (
    BasesDeDonneeList.map((prog: formationFieldType) => (
      <Formation key={prog.id} id={prog.id} name={prog.name} description={prog.description} />
    ))
  )
  const Devweb = (
    DevWebList.map((prog: formationFieldType) => (
      <Formation key={prog.id} id={prog.id} name={prog.name} description={prog.description} />
    ))
  )

  return (
    <div className="py-4 pl-3 sm:text-sm md:text-base lg:text-xl pr-4">
      <div className="flex flex-col py-2 space-y-6">
        <h1 className="text-3xl font-ttl">Qui suis-je ?</h1>
        <UnderlineTitle />
      </div>
      <div className="p-4 text-[#5F6F81] text-sm sm:text-base md:text-xl font-par font-medium text-justify flex flex-col justify-center space-y-4">
      <div>
      <p className="">
        Je me nomme <strong>Albert Sandokh Bakhoum. </strong>Etudiant en deuxième année à l’<strong>Ecole des Sciences et Technique de l’Ingénierie (ESTI)</strong> de l’<strong>Université Amadou Mahtar Mbow de Dakar (UAM).</strong>
      </p>
      <br />
      <p>
        <strong>Passionné de sciences & de nouvelles technologies </strong>
        depuis l'enfance & polymathe dans le domaine informatique, je suis de <strong>nature curieux, perfectionniste et enthousiaste</strong> ! J'adore trouver des solutions à des problèmes et relever de nouveaux défis !
        </p>
      <br />
      <p>
        Cette passion m'avait amené à être le <strong>seul élève en terminal S1.</strong> Etant conscient de toutes les difficultés que ça va impliquer j'ai eu mon bac avec la mention Assez bien.
      </p>
      </div>
      <br />
      <p className="md:text-3xl">
        <strong className="text-blue-600">De formation Bac+3 à l'UAM :</strong>
      </p>
      <div className="border-l border-collapse space-y-4 pr-4">
      <p className="flex flex-row items-center pb-2">
        <PointBleu />
        <strong className="text-2xl">Programmation :</strong>
      </p>
      {programmation}
      <p className="flex flex-row items-center pb-2 space-y-4">
        <PointBleu />
        <strong className="text-2xl">Réseau Informatique :</strong>
      </p>
      {ReseauInf}
      
      <p className="flex flex-row items-center pb-2">
        <PointBleu />
        <strong className="text-2xl">Administration de base de données :</strong>
      </p>
      {AdminDB}
      <p className="flex flex-row items-center pb-2">
        <PointBleu />
        <strong className="text-2xl">Développement Web :</strong>
      </p>
      {Devweb}
      </div>
      <br />
      <p>
        <strong>Motivé, optimiste, responsable et à l'esprit logique, </strong>
        je suis actuellement à la <strong>recherche d'une opportunité de stage en developpement web ou administrateur réseau.</strong>
      </p>
      <br />
      </div>
      <div className="flex flex-col space-y-10 p3">
      <div className="pb-4 space-y-6">
        <h2 className="sm:text-2xl  text-3xl">
          Recherche de stage : <h2 className="text-green-700"> En Administration et sécurité réseau / Développement logicielle</h2>
        </h2>
        <div className="flex justify-center">
          <div className="w-[370px] md:w-[560px]">
          <CodeSwiper />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 pb-4">
        <h2 className="text-3xl">
          Langues Vivantes :
        </h2>
          <div className="w-full sm:[50px] md:w-[500px] flex justify-center">
            <LangueSwiper />
          </div>
      </div>
      <div className="flex flex-col space-y-6 pb-4">
        <h2 className="text-3xl">
          Centres d'intérêt : 
        </h2>
        <div className="flex flex-wrap justify-between text-center">
          <img className="border border-collapse rounded-2xl cursor-grab" src="assets/dev.png" alt="programmation" />
          <img className="border border-collapse rounded-2xl cursor-grab" src="assets/football.png" alt="football" width={128} height={118} />
        </div>
      </div>
      </div>
      </div>
		
  );
};
