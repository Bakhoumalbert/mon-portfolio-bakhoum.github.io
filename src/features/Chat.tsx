import { AiOutlineSend } from "react-icons/ai";
import { RiChatSmile2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const Chat = () => {
  const [chat, setChat] = useState(false);

  const handleChat = () => {
    setChat(!chat);
  };

  return (
      <div className="relative bottom-36 w-96 h-[350px] bg-green-400">
        <div className="text-white text-base bg-[#304cfd] p-8">
          <p className="">
            Veiller remplir le formulaire ci-dessous et nous vous recontacterons
            dès que possible.
          </p>
        </div>
        <div className="relative -top-6 rounded-xl bg-white mx-4">
          <form className="mx-1 py-[1px] overflow-auto border-2 border-l-[#304cfd] flex flex-col justify-between gap-4 p-4 pt-4">
            <input
              className="border border-collapse rounded-sm"
              type="text"
              placeholder="* Nom"
            />
            <input
              className="border border-collapse rounded-sm"
              type="text"
              placeholder="* E-mail"
            />
            <textarea
              className="border border-collapse w-full rounded-sm"
              name=""
              id=""
              placeholder="* Message"
            ></textarea>
            <button className="py-2 rounded-lg bg-[#304cfd] text-white flex flex-row justify-center items-center space-x-2">
              <AiOutlineSend size={20} className="text-white" />
              <p>Envoyer</p>
            </button>
          </form>
        </div>
        <div className="flex justify-end">
          <span
            onClick={handleChat}
            className="relative -bottom-1 right-0 p-3 w-16 bg-[#304cfd] text-white rounded-full"
          >
            {chat ? <IoMdClose size={40} /> : <RiChatSmile2Fill size={40} />}
          </span>
        </div>
      </div>

  );
};
