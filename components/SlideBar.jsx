import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImStatsDots } from 'react-icons/im';
import { BsFillHouseUpFill } from 'react-icons/bs';
import { AiOutlineReload } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { BiCog } from 'react-icons/bi';
import 'tailwindcss/tailwind.css';

export default function SlideBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex bg-slate-400 flex-col w-80 text-white pb-8 pt-2 rounded-r-lg shadow-sm shadow-gray-700 text-lg font-semibold ${isOpen ? 'gap-7' : 'items-center justify-center'}`}>
      <button onClick={toggleMenu} className='pl-4'>
        <AiOutlineMenu className='w-6 h-6' />
      </button>
      {isOpen ? (
        <>
          <hr />
          <div>
            <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'>
              <ImStatsDots className='h-5 w-5 text-white' />
              Historial
            </button>
          </div>
          <div>
            <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'>
              <BsFillHouseUpFill className='h-5 w-5 text-white' />
              Agregar inmueble
            </button>
          </div>
          <div>
            <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'>
              <AiOutlineReload className='h-5 w-5 text-white' />
              Actualizar información
            </button>
          </div>
          <div>
            <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'>
              <BsCardChecklist className='h-5 w-5 text-white' />
              Lista inmuebles
            </button>
          </div>
          <div>
            <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'>
              <BiCog className='h-5 w-5 text-white' />
              Ajustes
            </button>
          </div>
          <div>
            <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'>
              <AiFillMessage className='h-5 w-5 text-white' />
              Ver mensajes
            </button>
          </div>
        </>
      ) : (
        <div className='flex gap-5 mt-8'>
          <ImStatsDots className='h-5 w-5' />
          <BsFillHouseUpFill className='h-5 w-5' />
          <AiOutlineReload className='h-5 w-5' />
          <BsCardChecklist className='h-5 w-5' />
          <BiCog className='h-5 w-5' />
          <AiFillMessage className='h-5 w-5' />
        </div>
      )}
    </div>
  );
}


// import React from 'react';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { ImStatsDots } from 'react-icons/im';
// import { BsFillHouseUpFill } from 'react-icons/bs';
// import { AiOutlineReload } from 'react-icons/ai';
// import { BsCardChecklist } from 'react-icons/bs';
// import { AiFillMessage } from 'react-icons/ai';
// import { BiCog } from 'react-icons/bi';
// import 'tailwindcss/tailwind.css';

// export default function SideNavBar() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`flex flex-col h-screen ${isOpen ? 'w-64' : 'w-16'} bg-gray-800 text-white`}>
//       <div className={`flex items-center justify-between h-16 px-4 ${isOpen ? '' : 'w-16'}`}>
//         <div className='flex items-center'>
//           <AiOutlineMenu className={`w-6 h-6 ${isOpen ? '' : 'w-16'}`} />
//           {isOpen && <span className='ml-2 font-bold'>Menu</span>}
//         </div>
//         <button onClick={toggleMenu}>
//           <svg
//             className={`w-6 h-6 text-white hover:text-gray-400 ${isOpen ? 'w-6' : 'w-16'}`}
//             fill='currentColor'
//             viewBox='0 0 20 20'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             {isOpen ? (
//               <path
//                 fillRule='evenodd'
//                 clipRule='evenodd'
//                 d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
//                 fill='currentColor'
//               />
//             ) : (
//               <path
//                 fillRule='evenodd'
//                 clipRule='evenodd'
//                 d='M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM5 10a1 1 0 100 2h10a1 1 0 100-2H5zM4 15a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z'
//                 fill='currentColor'
//               />
//             )}
//           </svg>
//         </button>
//       </div>
//       <div className={`flex flex-col ${isOpen ? 'flex' : 'hidden'}`}>
//         <div className='flex items-center h-16 px-4'>
//           <ImStatsDots className='h-5 w-5 text-white' />
//           <span className='ml-2'>Historial</span>
//         </div>
//         <div className='flex items-center h-16 px-4'>
//           <BsFillHouseUpFill className='h-5 w-5 text-white' />
//           <span className='ml-2'>Agregar inmueble</span>
//         </div>
//         <div className='flex items-center h-16 px-4'>
//           <AiOutlineReload className='h-5 w-5 text-white' />
//           <span className='ml-2'>Actualizar información</span>
//         </div>
//         <div className='flex items-center h-16 px-4'>
//           <BsCardChecklist className='h-5 w-5 text-white' />
//           <span className='ml-2'>Lista inmuebles</span>
//         </div>
//         <div className='flex items-center h-16 px-4'>
//           <BiCog className='h-5 w-5 text-white' />
//           <span className='ml-2'>Ajustes</span>
//         </div>
//         <div className='flex items-center h-16 px-4'>
//           <AiFillMessage className='h-5 w-5 text-white' />
//           <span className='ml-2'>Ver mensajes</span>
//         </div>
//       </div>
//     </div>
//   );
//}

// import React from 'react'
// import {AiOutlineMenu} from 'react-icons/ai'
// import {ImStatsDots} from 'react-icons/im'
// import {BsFillHouseUpFill} from 'react-icons/bs'
// import {AiOutlineReload} from 'react-icons/ai'  
// import {BsCardChecklist} from 'react-icons/bs'
// import {AiFillMessage} from 'react-icons/ai'
// import {BiCog} from 'react-icons/bi'
// import 'tailwindcss/tailwind.css';  

// export default function SlideBar() {
//     const [isOpen, setIsOpen] = React.useState(false);

//     const toggleMenu = () =>{
//         setIsOpen(!isOpen)
//     }
//   return (
//     <div  className='flex bg-slate-400 flex-col w-80 gap-7 text-white pb-8 pt-2 rounded-r-lg shadow-sm  shadow-gray-700 text-lg font-semibold'>
//         <button onClick={toggleMenu} className='pl-4'><AiOutlineMenu className=" w-6 h-6" /></button>
//         <hr />
//         <div>
//             <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'><ImStatsDots className='h-5 w-5 text-white'/>Historial</button>
//         </div>
//         <div>
//             <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'><BsFillHouseUpFill className='h-5 w-5 text-white'/>Agregar inmueble</button>
//         </div>
//         <div>
//             <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'><AiOutlineReload className='h-5 w-5 text-white'/>Actualizar informacion</button>
//         </div>
//         <div>
//             <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'><BsCardChecklist className='h-5 w-5 text-white'/>Lista inmuebles</button>
//         </div>
//         <div>
//             <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'><BiCog className='h-5 w-5 text-white'/>Ajustes</button>
//         </div>
//         <div>
//             <button className='pl-4 text-red-600 flex flex-row gap-5 w-full'><AiFillMessage className='h-5 w-5 text-white'/>Ver mensajes</button>
//         </div>
//     </div >
//   )
// }
