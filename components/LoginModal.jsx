import React, { useState,useEffect } from 'react';
import '@/public/room.jpeg'
import '@/public/casa.gif'
import {FcGoogle} from 'react-icons/fc';
import {ImCancelCircle} from 'react-icons/im';

function LoginModal({ onClose }) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  useEffect(() => {
    // Al abrir el modal, deshabilitar el scroll en el body
    document.body.style.overflow = 'hidden';

    // Al cerrar el modal, habilitar el scroll en el body
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (

<div class="fixed  top-0 left-0 w-full h-full flex items-center justify-center min-h-screen ">
      <div
        class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
       
        <div onSubmit={handleSubmit} class="flex flex-col justify-center p-8 md:p-14">
          <span class="mb-3 text-4xl font-bold">Welcome back</span>
          <span class="font-light text-gray-400 mb-8">
            Welcom back! Please enter your details
          </span>
          <div class="py-4">
            <span class="mb-2 text-md">Email</span>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              value={email}
              onChange={handleUsernameChange}
              id="email"
            />
          </div>
          <div class="py-4">
            <span class="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div class="flex justify-between w-full py-4">
            <div class="mr-24">
              <input type="checkbox" name="ch" id="ch" class="mr-2" />
              <span class="text-md">Remember for 30 days</span>
            </div>
            <span class="font-bold text-md">Forgot password</span>
          </div>
          <button
            class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign in
          </button>
          <button
            class="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            < FcGoogle class="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div class="text-center text-gray-400">
            Dont'have an account?
            <span class="font-bold text-black">Sign up for free</span>
          </div>
        </div>
        
        <div class="relative">
          <img
            src="casa.gif"
            alt="img"
            class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
         
         <div class="absolute hidden items-center justify-center mx-2 bottom-10 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:flex md:items-center md:justify-center">
           <span class="text-black text-xl">
            Bienvenido a la inmobiliaria Inmo<span className='text-[#F34511]'>Villa</span>
           </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;