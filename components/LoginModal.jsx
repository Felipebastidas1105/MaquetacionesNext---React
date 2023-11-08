import React, { useState,useEffect } from 'react';
import '@/public/room.jpeg'
import '@/public/room.gif'


function LoginModal({ onClose }) {
  const [username, setUsername] = useState('');
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
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 snap-none '>
      <div className='bg-white p-10 rounded-lg w-2/3  '>
        <h2 className='text-gray-800 text-2xl mb-4'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-4 items mx-36'>
            <label htmlFor='username' className='text-gray-800'>
              Username
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={handleUsernameChange}
              className='border border-gray-400 p-2 rounded-lg  w-80'
            />
          </div>
          <div className='flex flex-col mb-4 mx-36'>
            <label htmlFor='password' className='text-gray-800'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              className='border border-gray-400 p-2 rounded-lg w-80'
            />
          </div>
          <button
            type='submit'
            className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 mx-36'
          >
            Login
          </button>
        </form>

          <div className='mt-4 w-12 border-t-2 mx-44'>
          <span>OR</span>
          </div>


          <div>
            <button className='text-gray-800 bg-gray-200 px-4 py-2 rounded-lg mt-4  text-center'>GooGLE</button>
          </div>
      
            <a href="#" className='text-blue-400 text-xs font-semibold underline'>Forgot my password</a>

            <div className='flex flex-col items-start gap-y-3'>
              <p className='text-sm text-gray-500'>if you don´t</p>
              <button className='bg-red-400 text-white px-4 py-1 rounded-2xl text-sm tracking-wider'>Register</button>
            </div>

          <div>
          <button
          className='text-gray-800 bg-gray-200 px-4 py-2 rounded-lg mt-4'
          onClick={onClose}
        >
          Cancel
        </button>
          </div>
       



        <div className='relative w-[600px] grid place-items-center mx-[600px]  bottom-60'>
        <img src="room.jpeg" className='absolute rounded-2xl' />  
        <img src="room.gif"  className='absolute rounded-2xl'/>  
      </div>
      </div>

      {/* Imgs */}

  
    </div>
  );
}

export default LoginModal;