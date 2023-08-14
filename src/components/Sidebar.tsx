import { FiCalendar, FiMail } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { BsPhone, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
export const Sidebar = () => {
  return (
    <div className="w-full h-max md:sticky top-0 bg-[#F5F8F9] flex flex-col md:rounded-l-3xl md:rounded-tr-none rounded-t-3xl rounded-3xl space-x-4 px-4">
      <div className="flex flex-col md:p-2 p-4 space-x-4">
        <div className="flex pt-6 flex-col justify-center">
          <img
            className="max-w-[250px] md:mt-6 md:max-w-60 z-10 rounded-2xl h-full mx-auto m-4"
            src="assets/profil1.jpg"
            alt="profilpic"
            width="584"
            height="512"
          />
          <div className="p-4 text-center space-y-4">
            <div className="text-[#44566C] flex-row md:flex-col">
              <h5 className="text-lg mb-2">
                Albert Sandokh
                <span className="font-bold text-2xl  pl-2">Bakhoum</span>
              </h5>
              <span className="bg-[#d9dadb] rounded-3xl py-1 px-6 cursor-pointer">
                Web Developper
              </span>
            </div>
              <div className="text-[#44566C] text-[lg] flex flex-col">
                <div className="px-4 flex flex-row justify-center space-x-2">
                  <a
                    href="https://www.linkedin.com/in/albert-sandokh-bakhoum-020305266/"
                    className="cursor-pointer hover:text-[#304CFD] rounded-full p-2"
                  >
                    <FaLinkedinIn size={25} />
                  </a>
                  <a
                    href="https://github.com/Bakhoumalbert/"
                    className="cursor-pointer hover:text-[#304CFD] rounded-full p-2"
                  >
                    <BsGithub size={25} />
                  </a>
                </div>
              </div>
        </div>
            </div>
            <div className="flex justify-start">
                <ul className="flex flex-col md:text-sm space-y-1">
                  <li className="flex flex-row space-x-2 md:space-x-4 items-center">
                    <FiCalendar />
                    <a href="#" className="cursor-pointer">
                      21 Janvier, 2002
                    </a>
                  </li>
                  <li className="flex flex-row space-x-2 md:space-x-4 items-center">
                    <TfiLocationPin />
                    <a href="#" className="cursor-pointer">
                      Mbour, Gouye Mouride
                    </a>
                  </li>
                  <li className="flex flex-row space-x-2 md:space-x-4 items-center">
                    <FiMail />
                    <a
                      href="mailto:bakhoum.albert@uam.edu.sn"
                      className="cursor-pointer"
                    >
                      bakhoum.albert@uam.edu.sn
                    </a>
                  </li>
                  <li className="flex flex-row space-x-2 md:space-x-4 items-center">
                    <BsPhone />
                    <a href="tel:+221774132175" className="cursor-pointer">
                      774132175
                    </a>
                  </li>
                </ul>
              </div>
      </div>
      <div className="flex justify-center pb-4">
      <a
        className="bg-[#304CFD] text-white cursor-pointer py-4 px-8 rounded-2xl flex flex-row items-center space-x-2"
        href="Mon CV pro.pdf"
        >
        <AiOutlineDownload size={20} />
        <p>Télécharger CV</p>
      </a>
        </div>
    </div>
  );
};
