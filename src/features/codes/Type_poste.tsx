import "../../styles/custom_scrollbar.css";

export const Type_poste = () => {
  return (
    <div className="w-full h-full p-6 bg-black overflow-x-auto rounded-xl leading-5 scroll-mx-2 custom-scrollbar flex justify-center items-center">
      <p className="w-full h-full py-4 text-[12px] md:text-[15px] whitespace-nowrap flex flex-col justify-center">
          <span>
          <span className="text-cyan-500 font-bold pl-4">def</span>{" "}
          <span className="text-green-500">type_poste</span>(
          <span className="text-orange-500">self</span>,{" "}
          <span className="text-orange-500">poste</span>): <br />
        </span>
          <span className="text-gray-500">
              <p className="pl-10 ">
                /* Eligible à 2 postes. Peuvent être choisis en fonction des besoins de l'entreprise. */    
              </p>
          </span>
          <span className="pl-10">
            <span className="text-red-500">if</span>{" "}
            <span className="text-yellow-500">poste</span> {"=="}{" "}
            <span className="text-yellow-500">
              "Administrateur Systèmes &amp; Réseaux" :
            </span>
          </span>
          <span>
          </span><br />
          <span className="pl-16">
          <span className="text-purple-500">rythme</span> {"="}{" "}
          <span className="text-yellow-500">
            "5j+ entreprise / Temps plein"
          </span>
          </span><br />
          <span className="pl-10">
          <span className="text-red-500">elseif</span>{" "}
          <span className="text-yellow-500">poste</span> {"=="}{" "}
          <span className="text-yellow-500">
            "Administrateur Systèmes DevOps" :
          </span><br />
          </span>
          <span className="pl-16">
          <span className="text-purple-500">rythme</span> {"="}{" "}
          <span className="text-yellow-500">
            "5j+ entreprise / Temps plein"
          </span>
          </span>
      </p>
      </div>
  );
};
