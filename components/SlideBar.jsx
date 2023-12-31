import React, { useEffect, useState } from "react";
import { ImStatsDots } from "react-icons/im";
import Link from "next/link";
import { ArrowLeftRightIcon, BarChart3Icon, Clock4Icon, HelpCircleIcon } from "lucide-react";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function Navbar() {
  // const [isExpanded, setIsExpanded] = useState(false);
  // const [selectedButton, setSelectedButton] = useState('');
  // const MyLocation = window.location.pathname;

  // useEffect(() => {
  //   setSelectedButton(MyLocation);
  // }, [MyLocation]);

  // const optionStyle = "flex space-x-3 w-full p-2 rounded cursor-pointer text-[#F34511] hover:bg-[#F34511] hover:text-white";

  // const handleButtonClick = (buttonPath) => {
  //   setIsExpanded(false);
  //   setSelectedButton(buttonPath);
  // };
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedButton, setSelectedButton] = useState('');

  const optionStyle = "flex space-x-3 w-full p-2 rounded cursor-pointer text-[#F34511] hover:bg-[#F34511] hover:text-white";

  const handleButtonClick = (buttonPath) => {
    setIsExpanded(false);
    setSelectedButton(buttonPath);
  };

  return (
    <div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={`
        shadow-md shadow-stone-600 border-t min-h-screen border-slate-950 py-10 flex flex-col text-white bg-[#2C2727] relative font-thin item-center
          ${(isExpanded ? "px-1" : "px-")} `
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className=" cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#F34511] flex justify-center items-center"
      >
        {/* <img src={RightArrowIcon} className="w-2" /> */}
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        {/* <img src={RightArrowIcon} className="w-2" /> */}
      </div>
      <div className="logo-div flex space-x-4 items-center text-3xl justify-center">
        {/* <img src={Logo} /> */}
        <span className={`text-[#F34511]  ${!isExpanded ? 'hidden' : 'block'}`}>InmoVilla</span>
      </div>
      <div className="flex flex-col space-y-8 mt-12">
        <div className="nav-links w-full"
          style={{ background: selectedButton === '/admin/historiales' ? '#F34511' : 'transparent' }}>
          <div className={optionStyle} onClick={() => handleButtonClick('/admin/historiales')}>
            <Link href="/admin/historiales" className="flex flex-row space-x-3">
              <ImStatsDots
                style={{ color: selectedButton === '/admin/historiales' ? '#FFFFFF' : '#F34511' }} />
              <span className={`text-white ${(!isExpanded ? "hidden" : "block")}`}>
                Historiales
              </span>
            </Link>
          </div>
        </div>

        <div className="nav-links w-full"
          style={{ background: selectedButton === '/admin/AgregarInmuebles' ? '#F34511' : 'transparent' }}>
          <div className={optionStyle} onClick={() => handleButtonClick('/admin/AgregarInmuebles')}>
            <Link href="/admin/AgregarInmuebles" className="flex flex-row  space-x-3 ">
              <Clock4Icon style={{ color: selectedButton === '/admin/AgregarInmuebles' ? '#FFFFFF' : '#F34511' }} className=" transition-all duration-300 hover:text-white" />
              <span className={`text-white ${!isExpanded ? "hidden" : "block"}`}>
                Agregar&nbsp;inmuebles
              </span>
            </Link>
          </div>
        </div>
        <div className="nav-links w-full">
          <div className={optionStyle}>
            <Link href="#" className="flex flex-row items-center justify-center space-x-3">
              <BarChart3Icon />
              <span className={`text-white ${!isExpanded ? "hidden" : "block"}`}>
                Actualizar&nbsp;informacion
              </span>
            </Link>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className={optionStyle} onClick={() => handleButtonClick('/admin/listainmuebles')}>
            <Link href="/admin/listainmuebles" className="flex flex-row space-x-3">
              <ArrowLeftRightIcon />
              <span className={`text-white  ${(!isExpanded ? "hidden" : "block")}`}>
                Listar&nbsp;inmuebles
              </span>
            </Link>
          </div>
        </div>

        <div className="nav-links w-full">
          <div className={optionStyle}>
            <Link href="#" className="flex flex-row space-x-3">
              <HelpCircleIcon />
              <span className={`text-white  ${(!isExpanded ? "hidden" : "block")}`}>
                Actualizar&nbsp;blog
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



///////////////////////

// import React, { useEffect, useState } from "react";
// import { ImStatsDots } from "react-icons/im";
// import Link from "next/link";
// import { ArrowLeftRightIcon, BarChart3Icon, Clock4Icon, HelpCircleIcon } from "lucide-react";

// const variants = {
//   expanded: { width: "20%" },
//   nonexpanded: { width: "6%" },
// };

// function Navbar() {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [selectedButton, setSelectedButton] = useState('');
//   const MyLocation = window.location.pathname;

//   useEffect(() => {
//     setSelectedButton(MyLocation);
//   }, [MyLocation]);

//   const optionStyle = "flex space-x-3 w-full p-2 rounded cursor-pointer text-[#F34511] hover:bg-[#F34511] hover:text-white";

//   const handleButtonClick = (buttonPath) => {
//     setIsExpanded(false);
//     setSelectedButton(buttonPath);
//   };

//   return (
//     <div
//       animate={isExpanded ? "expanded" : "nonexpanded"}
//       variants={variants}
//       className={`
//         shadow-md shadow-stone-600 border-t min-h-screen border-slate-950 py-10 flex flex-col text-white bg-[#2C2727] relative font-thin item-center
//           ${(isExpanded ? "px-1" : "px-")} `}
//     >
//       <div
//         onClick={() => setIsExpanded(!isExpanded)}
//         className=" cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#F34511] flex justify-center items-center"
//       ></div>

//       <div
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
//       ></div>
//       <div className="logo-div flex space-x-4 items-center text-3xl justify-center">
//         <span className={`text-[#F34511]  ${!isExpanded ? 'hidden' : 'block'}`}>InmoVilla</span>
//       </div>
//       <div className="flex flex-col space-y-8 mt-12">
//         <div
//           className="nav-links w-full"
//           style={{ background: selectedButton === '/admin/historiales' ? '#F34511' : 'transparent' }}
//         >
//           <div
//             className={optionStyle}
//             onClick={() => handleButtonClick('/admin/historiales')}
//           >
//             <Link href="/admin/historiales" className="flex flex-row space-x-3">
//               <ImStatsDots
//                 style={{
//                   color: selectedButton === '/admin/historiales' ? '#FFFFFF' : '#F34511',
//                 }}
//               />
//               <span className={`text-white ${(!isExpanded ? "hidden" : "block")}`}>
//                 Historiales
//               </span>
//             </Link>
//           </div>
//         </div>

//         <div
//           className="nav-links w-full"
//           style={{ background: selectedButton === '/admin/AgregarInmuebles' ? '#F34511' : 'transparent' }}
//         >
//           <div
//             className={optionStyle}
//             onClick={() => handleButtonClick('/admin/AgregarInmuebles')}
//           >
//             <Link href="/admin/AgregarInmuebles" className="flex flex-row  space-x-3 ">
//               <Clock4Icon
//                 style={{
//                   color: selectedButton === '/admin/AgregarInmuebles' ? '#FFFFFF' : '#F34511',
//                 }}
//                 className=" transition-all duration-300 hover:text-white"
//               />
//               <span className={`text-white ${!isExpanded ? "hidden" : "block"}`}>
//                 Agregar&nbsp;inmuebles
//               </span>
//             </Link>
//           </div>
//         </div>

//         {/* Add similar onClick handlers for other buttons */}
//         {/* ... */}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

