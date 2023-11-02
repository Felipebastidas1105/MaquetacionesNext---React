// import React from 'react';
// import { AiOutlineMenu } from 'react-icons/ai';
import { ImStatsDots } from "react-icons/im";
// import { BsFillHouseUpFill } from 'react-icons/bs';
// import { AiOutlineReload } from 'react-icons/ai';
// import { BsCardChecklist } from 'react-icons/bs';
// import { AiFillMessage } from 'react-icons/ai';
// import { BiCog } from 'react-icons/bi';
import Link from "next/link";

import "tailwindcss/tailwind.css";

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
        <span className={!isExpanded ? "hidden" : "block"}>InmoVilla</span>
      </div>
      <div className="flex flex-col space-y-8 mt-12">
        <div className="nav-links w-full">
          <div className="w-full p-2 rounded hover:bg-[#F34511] hover:text-white cursor-pointer">
            <Link href="/admin/historiales" className="flex flex-row space-x-3">
              
              <button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" ><ImStatsDots
                data-tooltip-target="tooltip-right"
                data-tooltip-placement="right"
                type="button"
                className="w-5 h-5"
              /></button>
              <div
                id="tooltip-right"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Historiales
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
              <span className={!isExpanded ? "hidden" : "block"}>
                Historiales
              </span>
            </Link>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3  w-full p-2 rounded cursor-pointer  hover:bg-[#F34511] hover:text-white">
            <Link
              href="/admin/AgregarInmuebles"
              className="flex flex-row space-x-3"
            >
              <Clock4Icon />
              <span className={!isExpanded ? "hidden" : "block"}>
                Agregar&nbsp;inmuebles
              </span>
            </Link>
          </div>
        </div>
        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded cursor-pointer  hover:bg-[#F34511] hover:text-white">
            <BarChart3Icon />
            <span className={!isExpanded ? "hidden" : "block"}>
              Actualizar&nbsp;informacion&nbsp;de&nbsp;la&nbsp;empresa
            </span>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded cursor-pointer  hover:bg-[#F34511] hover:text-white">
            <Link
              href="/admin/listainmuebles"
              className="flex flex-row space-x-3"
            >
              <ArrowLeftRightIcon />
              <span className={!isExpanded ? "hidden" : "block"}>
                Listar&nbsp;inmuebles
              </span>
            </Link>
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
