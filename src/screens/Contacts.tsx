import { BsPerson, BsSendFill } from "react-icons/bs";
import { UnderlineTitle } from "../typography/particules/UnderlineTitle";
import { InlineWidget } from "react-calendly";

export const Contact = () => {

  return (
    <div className="w-full h-full sm:text-sm md:text-sm text-sm space-y-6 pl-10">
      <div className="relative left-0 flex flex-col py-2 space-y-6">
        <h1 className="text-3xl font-ttl">Formulaire de Contact</h1>
        <UnderlineTitle />
      </div>
      <div>
        <form className="flex flex-wrap gap-8 justify-between">
          <div className="w-full md:w-[360px] h-16 bg-[#F5F8F9] flex flex-row rounded-2xl border justify-between items-center py-3 px-4">
            <label htmlFor="" className="text-2xl text-[#8697A8] pr-2">
              <BsPerson />
            </label>
            <input type="text" placeholder="Nom/Prenom" className="w-full h-full p-2 bg-[#F5F8F9] text-base outline-none" />
          </div>
          <div className="w-full md:w-[360px] h-16 bg-[#F5F8F9] flex flex-row rounded-2xl border justify-between items-center py-3 px-4">
            <label htmlFor="" className="text-2xl text-[#8697A8] pr-2">
              @
            </label>
            <input type="text" placeholder="Adresse Email" className="w-full h-full p-2 bg-[#F5F8F9] text-base outline-none rounded-2xl" />
          </div>
          <textarea
            placeholder="Votre message"
            cols={6}
            rows={4}
            className="w-full h-auto bg-[#F5F8F9] focus:border focus :border-[#80bdff] rounded-2xl p-4 resize-none overflow-hidden outline-none"
          ></textarea>
          
          <div className="w-full h-full flex  justify-end relative right-0">
            <button className="md:w-auto w-full flex flex-row bg-[#304CFD] justify-center items-center text-white rounded-2xl px-6 py-4 space-x-4">
              <BsSendFill size={18} />
              <p className="text-lg">Envoyer Message</p>
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="relative left-0 flex flex-col py-2 space-y-6">
          <h1 className="text-3xl font-ttl">Planifier une Réunion</h1>
          <UnderlineTitle />
        </div>
        <InlineWidget url="https://calendly.com/bakhoum-albert/30min?month=2023-08" />
      </div>
    </div>
  );
};
