'use client'
import {BiSolidUserCircle} from 'react-icons/bi'
import 'tailwindcss/tailwind.css';
import "@/public/Logo.png"

export default function HeaderAdmin() {
  return (
    <div className='flex justify-between flex-row items-center p-12 bg-[#2C2727] shadow-md shadow-stone-600'> 
        <img className='w-20 h-20x  ' src="Logo.png" alt="Logo" />
        <div className="flex flex-row items-center gap-4">
            <p className='text-red-600 font-bold '>Consuelo Gomez</p>
            <BiSolidUserCircle  className='h-12 w-12 text-red-600'/>
        </div>
    </div>
  );
}
