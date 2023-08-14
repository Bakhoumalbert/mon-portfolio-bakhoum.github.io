import { useState } from "react";
import { Navbar } from "./Navbar"
import { Header } from "./Header";

export const Topbar = () => {
    
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
    <div className="w-full ">
        <div className="relative md:flex hidden ">
            <Header   />
        </div>
        {
            nav ? (
            <button onClick={handleNav} className='md:hidden flex fixed top-0 right-0 z-40 w-16 h-14  bg-white text-lg text-[#304CFD] border rounded-tl-3xl rounded-br-3xl rounded-bl-3xl justify-center items-center'>Close</button>
            // <AiOutlineClose size={30} className="m-2 cursor-pointer" />
            )
            :
            <button onClick={handleNav} className='md:hidden flex fixed top-0 right-0 z-40 w-16 h-14 bg-[#304CFD] text-lg text-white border rounded-tl-3xl rounded-br-3xl rounded-bl-3xl justify-center items-center'>Menu</button>
        }
        <div onClick={handleNav} className="md:hidden z-10 mx-4 bg-gray-100">
            {nav ? (
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-30 text-[#fff]'>
                    <Navbar />
                </div>
              ) : ''
              }
        </div>
    </div>
  )
}
