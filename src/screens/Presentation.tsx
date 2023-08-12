import { Domaine } from "../components/domainesExpert/Domaine";
import { CodeSwiper } from "../features/CodeSwiper";
import { LangueSwiper } from "../features/LangueSwiper";
import { UnderlineTitle } from "../typography/particules/UnderlineTitle";

export const Presentation = () => {


  return (
    <div className="p-4 sm:text-sm md:text-sm text-sm">
      <div className="relative left-0 flex flex-col py-2 space-y-6">
        <h1 className="text-3xl font-ttl">Qui suis-je ?</h1>
        <UnderlineTitle />
      </div>
      <div className="p-2 text-base text-justify">
      <p className="text-justify font-medium">
        Etudiant en deuxième année à l’Ecole des Sciences et Technique de l’Ingénierie (ESTI) de l’Université Amadou Mahtar Mbow de Dakar, Je suis prêt à utiliser mes compétences et ma passion pour devenir un ingénieur en informatique.
      </p>
      <br />
      <p>
        <strong>Passionné de nouvelles technologies </strong>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et repellendus aliquid soluta qui maiores eum officia quo natus, blanditiis suscipit ea ipsam repudiandae corrupti perspiciatis, temporibus nulla sequi neque?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus quo possimus repellendus sequi, corrupti, magni voluptatibus explicabo quisquam mollitia impedit, aperiam cumque eius rerum soluta nulla ad velit.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et repellendus aliquid soluta qui maiores eum officia quo natus, blanditiis suscipit ea ipsam repudiandae corrupti perspiciatis, temporibus nulla sequi neque?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus quo possimus repellendus sequi, corrupti, magni voluptatibus explicabo quisquam mollitia impedit, aperiam cumque eius rerum soluta nulla ad velit.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et repellendus aliquid soluta qui maiores eum officia quo natus, blanditiis suscipit ea ipsam repudiandae corrupti perspiciatis, temporibus nulla sequi neque?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus quo possimus repellendus sequi, corrupti, magni voluptatibus explicabo quisquam mollitia impedit, aperiam cumque eius rerum soluta nulla ad velit.
      </p>
      <br />
      <p>
        <strong>Motivé, optimiste, responsable et à l'esprit logique, </strong>
        je suis actuellement en recherche d'une opportunité de travail en tant que developpeur web.
      </p>
      </div>
      <div>
        <Domaine />
        <Domaine />
      </div>
      <div className="flex flex-col space-y-10">
      <div className="pb-4 space-y-6">
        <h2 className="text-3xl">
          Recherche de stage : <h2 className="text-green-700"> En Administration et sécurité réseau / Développement logicielle</h2>
        </h2>
        <div className="relative md:w-[780px]">
          <CodeSwiper />
        </div>
      </div>
      <div className="flex flex-col space-y-2 pb-4">
        <h2 className="text-3xl">
          Langues Vivantes :
        </h2>
          <div className="md:w-[780px] justify-center">
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
          <img className="border border-collapse rounded-2xl cursor-grab" src="assets/dev.png" alt="programmation" />
        </div>
      </div>
      </div>
      <div className="fixed -bottom-10 right-6">
        {/* <Chat /> */}
      </div>
      </div>
		
  );
};
