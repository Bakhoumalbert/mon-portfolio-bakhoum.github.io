
export const Disponibilite = () => {
  return (
    <div className="w-full h-full py-4 md:pl-10 bg-black overflow-x-auto rounded-xl leading-5 scroll-mx-2 custom-scrollbar flex justify-center items-center">
      {/* <h4 className="title text-3xl">Slide 2</h4> */}
      <p className="text-[15px] text-white whitespace-nowrap">
        <span className="">
          <span className="text-cyan-500 font-bold pl-2">def</span>{" "}
          <span className="text-green-500">disponibilité</span>(
          <span className="text-orange-500">self</span>) :<br />{" "}
        <span className="text-gray-500">
              <p className="pl-8">
                """Disponible immédiatement"""    
              </p>
          </span>
          <span className="pl-8">
            <span className="text-white">recherche_stage</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-indigo-400">True</span>
          </span><br />
          <span className="pl-10">
            <span className="text-red-500">while</span>{" "}
            <span className="text-yellow-500">recherche_stage</span>
          </span><br />
          <span className="pl-16">
            <span className="text-red-500">if</span>{" "}
            {"("}
            <span className="text-orange-500">self</span>
            {"."}
            <span className="text-cyan-600">stage</span>
            {"("}
            <span className="text-yellow-500">"Proposition"</span>
            {")"}{" "}
            <span className="text-red-500">and</span>
            {" "}
            <span className="text-white">confirmation</span>
            {")"}{" "}{"=="}{" "}
            <span className="text-indigo-400">True</span>
            {":"} <br />
            <span className="pl-16">
            <span className="text-white">recherche_stage</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-indigo-400">False</span>
          </span><br />
          <span className="pl-16">
            <span className="text-orange-500">self</span>{"."}
            <span className="text-white">etat_esprit</span>{"."}
            <span className="text-indigo-400">extend</span>{"(["} <br />
            <span className="text-yellow-500 pl-28">"Esprit Logique",</span> <br />
            <span className="text-yellow-500 pl-28">"Enthousiaste",</span> <br />
            <span className="text-yellow-500 pl-28">"Autonome & Dynamique"</span><br />
            <span className="text-white pl-28">{"])"}</span> <br />
          </span>
          </span>
        </span>
      </p>
    </div>
  )
}
