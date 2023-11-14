import React, { useState,useEffect } from 'react';
import '@/public/room.jpeg'
import '@/public/room.gif'
import {FcGoogle} from 'react-icons/fc';
import {ImCancelCircle} from 'react-icons/im';

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
    
            <div className='fixed  top-0 left-0 w-full h-full border bg-black bg-opacity-50 flex items-center justify-center  z-50 snap-none '>
        <div className=' flex-col h-[60%] bg-white p-10 rounded-lg w-[63%] flex relative justify-center'>

          <div className='mt-5 absolute  top-0 right-0 '> 
          <button className='bg-white text-black px-4 py-2 rounded-l' onClick={onClose}>
            <i><ImCancelCircle className='text-gray-800 text-2xl cursor-pointer'/></i>
          </button>
        </div>
        <div>
 <form onSubmit={handleSubmit}>
                <h2 className='text-gray-800 text-2xl mb-4 mx-60'>Iniciar Sesión</h2>
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
                    className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 mx-36 items-center  w-80'
                  >
                    Login
                  </button>
                  <a href="#" className='text-blue-400 text-xs font-semibold underline mx-36'>Olvidaste  tu Contraseña</a>

                <div className='mt-5 flex items-center text-gray-400 mx-40'>
                    <hr className='border-gray-400 w-28'/>
                    <p className='mx-5'>OR</p>
                    <hr className='border-gray-400 w-28'/>
                </div>
                  <div className=''>
                    
                    <button className='bg-slate-400 p-2 rounded-2xl flex justify-center items-center gap-x-3 hover:bg-slate-500 transition mx-36 w-80 mt-3'>
                    <i className='text-yellow-400 text-xl'><FcGoogle/></i>
                    <span className='text-sm text-white tracking-wider '>Iniciar Sesión en GOOGLE</span>
                      </button>
                  </div>
              
                  

                    <div className='flex flex-col items-start gap-y-3 mt-5'>
                      <p className='text-sm text-gray-500 mx-64'>No tienes cuenta ?</p>
                      <button className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 mx-36 items-center  w-80'>Register</button>
                    </div>
                </form>
        </div>

                <div className='relative w-[600px] grid place-items-center mx-[600px]   bottom-56'>
                <img src="room.jpeg" className='absolute rounded-2xl' />  
                {/* <img src="room.gif"  className='absolute rounded-2xl'/>   */}
              </div>
              </div>

              {/* Imgs */}

          
            </div>
  
  );
}

export default LoginModal;