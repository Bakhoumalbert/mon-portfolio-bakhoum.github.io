import { LangueSwiper } from "../components/presentation/LangueSwiper";
// import { Domaine } from "../components/presentation/domainesExpert/Domaine";
import { CodeSwiper } from "../features/CodeSwiper";
import { UnderlineTitle } from "../typography/particules/UnderlineTitle";
import { PointBleu } from "../typography/particules/pointBleu";

export const Presentation = () => {


  return (
    <div className="py-4 pr-6 sm:text-sm md:text-base lg:text-xl">
      <div className="relative left-0 flex flex-col py-2 space-y-6">
        <h1 className="text-3xl font-ttl">Qui suis-je ?</h1>
        <UnderlineTitle />
      </div>
      <div className="p-2 text-[#5F6F81] text-sm sm:text-base md:text-xl font-par font-medium text-justify flex flex-col justify-center space-y-4">
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
      <br />
      <p className="md:text-3xl">
        <strong className="text-blue-600">De formation Bac+3 à l'UAM :</strong>
      </p>
      <div className="relative left-6 border-l border-collapse pr-4 space-y-4">
      <p className="flex flex-row items-center pb-2">
        <PointBleu />
        <strong className="text-2xl">Programmation :</strong>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-row space-x-2">
        <span className="w-5 h-2 bg-blue-600 mt-1"></span>
        <p className="flex flex-row">
        <p><strong>Python : </strong>Data-science | Réseau de neurone convolutif (Tensorflow)</p>
        </p>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-row space-x-2">
        <span className="w-5 h-2 bg-blue-600 mt-1"></span>
        <p className="flex flex-row">
        <p><strong>C : </strong> structure de données | les pointeurs | les listes chainées | les piles | les files </p>
        </p>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-row space-x-2">
        <span className="w-5 h-2 bg-blue-600 mt-1"></span>
        <p className="flex flex-row">
        <p><strong>Scala : </strong>POO | programmation fontionnelle</p>
        </p>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-row space-x-2">
        <span className="w-5 h-2 bg-blue-600 mt-1"></span>
        <p className="flex flex-row">
        <p><strong>JavaScript : </strong>la réactivité de page html</p>
        </p>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-row space-x-2">
        <span className="w-5 h-2 bg-blue-600 mt-3 "></span>
        <p className="flex flex-row">
        <p><strong>Java Swing : </strong>création d'interface avec Frame, Label, Button,...</p>
        </p>
      </p>
      <br />
      <p className="flex flex-row items-center pb-2 space-y-4">
        <PointBleu />
        <strong className="text-2xl">Réseau Informatique :</strong>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-col">
        <p className="flex flex-row items-center space-x-4">
        <span className="w-5 h-2 bg-blue-600"></span>
        <strong> Concepts général des réseau & architecture TPC/IP sur gns3 : </strong>
        </p>
        <p className="pl-10">Topologie | classification | transmission | modéle OSI | Standard TCP/IP | Carte réseau | concetrateur (hub) | commutateur (Switch) | Routeur | Recepteur | protocoles (Ethernet, IP, ARP, ICMP, TCP, UDP, ...)</p>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-row space-x-4">
        <span className="w-10 h-2 bg-blue-600 mt-3"></span>
        <p><strong>Services réseaux :</strong> FTP | SAMBA | HTTP | DNS | service de messagerie (SMTP, roundcube) | Téléphonie sur IP (TOIP, asterisk), ...</p>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-row space-x-4">
        <span className="w-14 h-2 bg-blue-600 mt-3"></span>
        <p><strong>Administration & securité d'un réseau local : </strong>NAT Statique | Nat Dynamique | PAT | Redirection de port | Proxy Squid | Zone démilitarisée (DMZ) | VPN (StrongsWan, OpenVPN, Wireguard)</p>
      </p>
      <br />
      <p className="flex flex-row items-center pb-2">
        <PointBleu />
        <strong className="text-2xl">Développement Web :</strong>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-col">
        <p className="flex flex-row items-center space-x-4">
        <span className="w-5 h-2 bg-blue-600"></span>
        <strong>html | CSS | JavaScript</strong>
        </p>
      </p>
      <br />
      </div>
      <p className="md:text-3xl">
        <strong className="text-blue-600">En autodidacte : </strong>
      </p>
      <div className="relative left-4 border-l border-collapse space-y-4">
      <p className="flex flex-row items-center pb-2">
        <PointBleu />
        <strong className="text-2xl">Développement Web :</strong>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-col">
        <p className="flex flex-row items-center space-x-4">
        <span className="w-5 h-2 bg-blue-600"></span>
        <strong>html | CSS | JavaScript</strong>
        </p>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-col">
        <p className="flex flex-row items-center space-x-4">
        <span className="w-5 h-2 bg-blue-600"></span>
        <strong>FronEnd : ReactJS | NextJS | Bootstrap | Tailwindcss </strong>
        </p>
      </p>
      <p className=" pl-14 md:pl-20 flex flex-col">
        <p className="flex flex-row items-center space-x-4">
        <span className="w-5 h-2 bg-blue-600"></span>
        <strong>BackEnd : Express | Flask | MongoDB</strong>
        </p>
      </p>
      </div>
      <br />
      <p>
        <strong>Motivé, optimiste, responsable et à l'esprit logique, </strong>
        je suis actuellement à la <strong>recherche d'une opportunité de stage en developpement web ou administrateur réseau.</strong>
      </p>
      <br />
      </div>
      {/* <div>
        <Domaine />
        <Domaine />
      </div> */}
      <div className="flex flex-col space-y-10">
      <div className="pb-4 space-y-6">
        <h2 className="text-3xl">
          Recherche de stage : <h2 className="text-green-700"> En Administration et sécurité réseau / Développement logicielle</h2>
        </h2>
        <div className="flex justify-center">
          <div className="w-[200px] md:w-[780px]">
          <CodeSwiper />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 pb-4">
        <h2 className="text-3xl">
          Langues Vivantes :
        </h2>
          <div className="w-full md:w-[780px] flex justify-center">
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
