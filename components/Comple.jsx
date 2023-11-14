import React from 'react';
import '@/public/casa13.jpg';
import { MdOutlineBedroomChild } from 'react-icons/md';
import { TbBathFilled } from 'react-icons/tb';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { RxRulerHorizontal } from 'react-icons/rx';
import {MdWhatsapp} from 'react-icons/md';

export default function Comple() {
  return (
    <div className="flex items-center mb-14 ml-36">
      <div className="flex-1 mr-10">
        <h1 className='text-3xl font-semibold mt-7 mb-2 ml-20'>Casa</h1>
        <p className='mt-2 ml-20'>28 Westport DR. Warminster, PA 18974</p>
        <img src="casa13.jpg" className="rounded-2xl mx-14" />
        
        <div className="flex mx-16 pt-3 space-x-11">
          <div className="text-gray-700">
            <MdOutlineBedroomChild size={32} color='#F34511' />
          </div>
          <div className="text-gray-700">
            <TbBathFilled size={32} color='#F34511' />
          </div>
          <div className="text-gray-700">
            <TbToolsKitchen2 size={32} color='#F34511' />
            <span>4</span>
          </div>
          <div className="text-gray-700">
            <RxRulerHorizontal size={32} color='#F34511' />   
          </div>
        </div>

        <div className='mt-11 mx-16 border border-black w-[60%]'>
          <h1 className='text-lg font-semibold'>Descripción General</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, pariatur sit.
            Laboriosam possimus voluptas sequi veritatis mollitia esse id voluptates eveniet hic 
            numquam deserunt nostrum obcaecati, 
            cupiditate quia atque magnam.</p>
        </div>

        <div className='mt-11 mx-16 border border-black w-[60%]'>
          <h1 className='text-lg font-semibold'>Características Generales</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, pariatur sit.
            Laboriosam possimus voluptas sequi veritatis mollitia esse id voluptates eveniet hic 
            numquam deserunt nostrum obcaecati, 
            cupiditate quia atque magnam.</p>
        </div>
      </div>

      <div className="bg-white border border-black w-[20%] mr-52 mb-96">
        <div className="relative text-center items-center justify-center bg-[#2C2727] h-16 border border-black shadow-2xl">
          <h2 className="flex justify-center text-5xl font-semibold text-white">
            2.000.000
          </h2>
        </div>
        {/* Resto del contenido */}
        <form className='flex flex-col gap-y-3'>

              <div class="relative z-0 w-full mb-6 group mt-8 m-4">
            <input type="text" name="repeat_password" id="floating_repeat_text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_repeat_text" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Telefono</label>
            </div>

          <input type="password"  placeholder='Nombre'
          id='password'
           className='text-sm p-2 m-3  rounded-lg bg-slate-200 outline-none tracking-widest text-gray-600'
           />
        </form>

        <div className="mb-5 mt-5 px-4 ">
          <label
            htmlFor="message"
            className="mb-2 text-sm font-medium text-black dark:text-white flex justify-center"
          >
            Escribe tu mensaje
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="flex  flex-col gap-x-3 mx-7">
          <button className="bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 items-center  mb-4">
            Contactar
          </button>

          <button className='bg-gray-800 p-2  flex justify-center gap-x-3  transition py-2 rounded-lg hover:bg-gray-700 items-center  mb-4'>
          <MdWhatsapp className='text-green-600'/>
          <span className='text-sm text-white tracking-wider'>Contactar con WhatsApp</span>
        </button>
        </div>
      </div>
    </div>
  );
}



