// import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImStatsDots } from 'react-icons/im';
import { BsFillHouseUpFill } from 'react-icons/bs';
import { AiOutlineReload } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { BiCog } from 'react-icons/bi';

import 'tailwindcss/tailwind.css';

import React, { useState } from "react";
import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
        (isExpanded ? " px-10" : " px-6")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#F34511] flex justify-center items-center"
      >
        {/* <img src={RightArrowIcon} className="w-2" /> */}
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        {/* <img src={RightArrowIcon} className="w-2" /> */}
      </div>
      <div className="logo-div flex space-x-4 items-center text-3xl justify-center ">
        {/* <img src={Logo} /> */}
        <span className={!isExpanded ? "hidden" : "block"} >InmoVilla</span>
      </div>
      <div className="flex flex-col space-y-8 mt-12">
        <div className="nav-links w-full">
          <div className="flex flex-row items-center space-x-3 w-full p-2 rounded hover:bg-[#F34511] hover:text-white cursor-pointer">
          <ImStatsDots className='w-5 h-5'/>
            <span className={!isExpanded ? "hidden" : "block"}>Historiales</span>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3  w-full p-2 rounded cursor-pointer  hover:bg-[#F34511] hover:text-white">
            <Clock4Icon  />
            <span className={!isExpanded ? "hidden" : "block" }>Agregar&nbsp;inmuebles</span>
          </div>
        </div>
        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded cursor-pointer  hover:bg-[#F34511] hover:text-white">
            <BarChart3Icon />
            <span className={!isExpanded ? "hidden" : "block"}>Actualizar&nbsp;informacion&nbsp;de&nbsp;la&nbsp;empresa</span>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded cursor-pointer  hover:bg-[#F34511] hover:text-white">
            <ArrowLeftRightIcon />
            <span className={!isExpanded ? "hidden" : "block"}>
              Listar&nbsp;inmuebles 
            </span>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded cursor-pointer  hover:bg-[#F34511] hover:text-white">
            <HelpCircleIcon />
            <span className={!isExpanded ? "hidden" : "block"}>
              Actualizar&nbsp;blog
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;


        // <div className='w-1/5 min-h-max bg-black rounded-r-xl'>
        //   <button>
        //   <AiOutlineMenu className='w-10 h-10 text-black ml-4 mb-4'/>
        //   </button>
        //   <hr />
        //   <ul className='mt-4 space-y-8'>
        //     <li className='flex flex-row items-center cursor-pointer'>
        //       <ImStatsDots className='w-10 h-10 text-gray-100 ml-4 '/>
        //       <p className='text-xl ml-4 text-red-600'>Historiales</p>
        //     </li>
        //     <li className='flex flex-row items-center cursor-pointer'>
        //       <BsFillHouseUpFill className='w-10 h-10 text-gray-100 ml-4 '/>
        //       <p className='text-xl ml-4 text-red-600'>Agregar Inmuebles</p>
        //     </li>
        //     <li className='flex flex-row items-center cursor-pointer'>
        //       <AiOutlineReload className='w-10 h-10 text-gray-100 ml-4 '/>
        //       <p className='text-xl ml-4 text-red-600'>Actualizar Informacion de la empresa</p>
        //     </li>
        //     <li className='flex flex-row items-center cursor-pointer'>
        //     <BsCardChecklist className='w-10 h-10 text-gray-100 ml-4 '/>
        //       <p className='text-xl ml-4 text-red-600'>Listar inmuebles</p>
        //     </li>
        //     <li className='flex flex-row items-center cursor-pointer'>
        //     <BiCog className='w-10 h-10 text-gray-100 ml-4 '/>
        //       <p className='text-xl ml-4 text-red-600'>Actualizar blog </p>
        //     </li>
        //     <li className='flex flex-row items-center cursor-pointer'>
        //     <AiFillMessage className='w-10 h-10 text-gray-100 ml-4 '/>
        //       <p className='text-xl ml-4 text-red-600'>ver mensajes</p>
        //     </li>
        //   </ul>
        // </div>|