
export const Mesprojets = () => {
  return (
    <div className="md:w-auto flex flex-col ">
      <span className="relative top-[68px] w-1/3 text-white bg-orange-400 rounded-tl-2xl rounded-br-2xl">
        <span className="py-2 flex flex-col justify-center items-center">
        <h2 className="text-white text-xl">2023</h2>
        <p>Juil</p>
        </span>
      </span>
      <div className="w-full">
        <img src="src/assets/topologie.png" alt="project picture" className="rounded-t-2xl border-t border-collapse object-cover" />
      </div>
      <div className="bg-[#F5F8F9] p-6 rounded-b-2xl">
        <h2>Mise en place d'une Zone Démilitarisée</h2>
        <p className="text-[#5F6F81]">une Zone démilitarisée ou DMZ est un sous-réseau 
          séparé du réseau local et isolé de celui-ci et d’internet par un pare-feu
        </p>
      </div>
    </div>
  )
}
