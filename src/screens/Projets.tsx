import { Mesprojets } from "../components/Mesprojets";
import { UnderlineTitle } from "../typography/particules/UnderlineTitle";

export const Projets = () => {
  return (
  <div className="w-full flex flex-col">
    <div className="">
      <h1 className="text-2xl pb-2 font-extrabold">Quelques Exemples de projets : </h1>
      <UnderlineTitle />
    </div>
    <div className="grid md:grid-cols-2 justify-center items-center md:space-x-10">
      <Mesprojets/>
      <Mesprojets/>
      <Mesprojets/>
      <Mesprojets/>
      <Mesprojets/>
    </div>
  </div>
  )
};
