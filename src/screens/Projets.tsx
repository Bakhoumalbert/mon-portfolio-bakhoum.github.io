import React from "react";
import { Mesprojets } from "../components/projets/Mesprojets";
import { UnderlineTitle } from "../typography/particules/UnderlineTitle";
import { adminReseau, infEmbarque } from "../components/projets/list-projet";

interface ProjetProps {
  projet: object;
}

const Projets: React.FC<ProjetProps> = () => {
  return (
    <div className="w-full flex flex-col p-6 md:p-4">
      <div className="">
        <h1 className="text-2xl pb-2 font-extrabold">Quelques Exemples de projets :</h1>
        <UnderlineTitle />
      </div>
      <div className="pt-10">
        <h1 className="text-xl lg:text-2xl xl:text-3xl">Administration et sécurité d'un réseau local :</h1>
        <div className="grid md:grid-cols-2 gap-10 justify-center items-center">
          {adminReseau.map((admin) => (
            <Mesprojets
              key={admin.id}
              className={admin.className}
              title={admin.title}
              description={admin.description}
              image={admin.image}
              year={admin.year}
              mois={admin.mois} id={0}            />
            ))}
          
        </div>
      </div>
      <div className="pt-10">
        <h1 className="text-xl lg:text-2xl xl:text-3xl">Informatique Embarqué : </h1>
        <div className="grid md:grid-cols-2 gap-10 justify-center items-center">
          {infEmbarque.map((infEmb) => (
            <Mesprojets
              key={infEmb.id}
              className={infEmb.className}
              title={infEmb.title}
              description={infEmb.description}
              image={infEmb.image}
              year={infEmb.year}
              mois={infEmb.mois} id={0}            
            />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projets;
