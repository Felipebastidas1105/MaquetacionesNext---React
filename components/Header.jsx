"use client";
import 'tailwindcss/tailwind.css';
import "@/public/Logo.png"
import { useState } from 'react';
import LoginModal from './LoginModal';
import Link from 'next/link';

export default function Header() {
    const [showModal, setShowModal] = useState(false);

    const handleGetStartedClick = () => {
      setShowModal(true);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
    };
  return (
    <header className='flex justify-between flex-row items-center p-16 text-black' >
        <div className="img">
            <img className='w-48 h-40 ' src="Logo.png" alt="logo" />
        </div>
        <div className="">
            <ul className='flex flex-row ml-28 gap-6 text-white font-bold cursor-pointer'>
                <li className='hover:text-red-600'>Sobre Nosotros </li>
                <li className='hover:text-red-600' >Experiences</li>
                <li className='hover:text-red-600'>Online experiences</li>
            </ul>
        </div>
        <div className="flex flex-row gap-3 items-center">
            
            <div className="flex flex-row gap-2 bg-white p-1 rounded-l shadow-md  hover:bg-[#F34511] ">
            
            <button onClick={handleGetStartedClick} className='w-40'>Iniciar Sesión</button>
        </div>
        </div>
        {showModal && (
        <LoginModal onClose={handleModalClose} />
      )}      
    </header>
  )
}
