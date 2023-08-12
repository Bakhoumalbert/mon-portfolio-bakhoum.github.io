import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { UnderlineTitle } from "../typography/particules/UnderlineTitle";

export const Parcours = () => {


  return (
    <div className="w-full h-full sm:text-sm md:text-sm text-sm space-y-6 pl-10">
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
        <Experience />
        <Experience />
        <Experience />
        <Experience />
        <Experience />
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
        <Education />
        <Education />
        <Education />
        <Education />
        <Education />
      </div>
      </div>
      </div>
    </div>
		
  );
};
