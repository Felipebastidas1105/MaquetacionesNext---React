
import { GiEarthAmerica } from 'react-icons/gi'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import "@/public/Logo.png"

export default function Header() {
  return (
    <header className='flex justify-between flex-row items-center p-16 text-black' >
        <div className="img">
            <img className='w-48 h-40 ' src="Logo.png" alt="logo" />
        </div>
        <div className="">
            <ul className='flex flex-row ml-28 gap-6 text-white font-bold cursor-pointer'>
                <li className='hover:text-red-600'>Places to stay </li>
                <li className='hover:text-red-600' >Experiences</li>
                <li className='hover:text-red-600'>Online experiences</li>
            </ul>
        </div>
        <div className="flex flex-row gap-3 items-center">
            
            <div className="flex flex-row gap-2 bg-white p-1 rounded-lg ">
            <button><AiOutlineMenu className="icon w-6 h-6" /></button>
            <button><AiOutlineUser className="icon w-6 h-6" /></button>
        </div>
        </div>
        
    </header>
  )
}
