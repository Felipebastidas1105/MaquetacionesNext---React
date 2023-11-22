import React, { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImCancelCircle } from 'react-icons/im';

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword,setshowpassword]= useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (

<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center min-h-screen bg-black bg-opacity-[88%] z-50 ">
  <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl h-[800px] md:flex-row md:space-y-0 w-[80%] xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 xs:mt-40 ">

    <div className="absolute top-4 left-4">
      <button className="text-gray-800  px-4 py-2 rounded-lg" onClick={onClose}>
        <ImCancelCircle />
      </button>
    </div>

    <div onSubmit={handleSubmit} className="w-full flex flex-col justify-center p-8 md:p-14 overflow-y-auto">
      <span className={`text-4xl  font-bold ${isSignUp?'xl:pt-44 lg:pt-44 md:pt-44 sm:pt-44 xs:pt-[100%] ':'' }`}>{isSignUp ? 'Sign up' : 'Welcome back'}</span>
      <span className="font-light text-gray-400 mb-8">
        {isSignUp ? 'Create your account' : 'Welcome back! Please enter your details'}
      </span>

      <form className='flex flex-col lg:w-full md:w-full lg:py-4'>

          {isSignUp && (
              <div className="py-4 flex flex-col">
                <span className="mb-2 text-md">Confirm Password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full md:w-[70%] p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
            )}
          {isSignUp && (
              <div className="py-4 flex flex-col">
                <span className="mb-2 text-md">Confirm Password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full md:w-[70%] p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
            )}
          {isSignUp && (
              <div className="py-4 flex flex-col">
                <span className="mb-2 text-md">Confirm Password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full md:w-[70%] p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
            )}
          {isSignUp && (
              <div className="py-4 flex flex-col">
                <span className="mb-2 text-md">Confirm Password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full md:w-[70%] p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
            )}
            <div className="py-4 flex flex-col">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                className="w-full md:w-[70%] p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                value={email}
                onChange={handleEmailChange}
                id="email"
              />
            </div>
            <div className="py-4 flex flex-col">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                onClick={() => setshowpassword(!showPassword)}
                className="w-full md:w-[70%] p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            
            <div className="flex justify-between w-[70%] py-4">
              <div className="mr-24">
                <input type="checkbox" name="remember" id="remember" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div>
              <span className="font-bold text-md" onClick={handleFormToggle}>
                {isSignUp ? '' : 'Forgot password?'}
              </span>
            </div>
        <button
          className="w-full md:w-[70%] bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
        >
          {isSignUp ? 'Registrarse' : 'Iniciar Sesión'}
        </button>
      </form>

      {/* Other buttons... */}
      <div className="text-center w-[70%] items-center text-gray-400">
        {isSignUp ? "Ya tienes una cuenta?" : "No tienes cuenta?"}
        <button className="font-bold  text-black" onClick={handleFormToggle}>
          {isSignUp ? 'Iniciar Sesión' : ' Registrarse'}
        </button>
      </div>
    </div>
      <div className="relative   ">
        <img
             src="casa.gif"
             alt="img"
             className=" h-full hidden rounded-r-2xl md:block object-cover"
          />
          <div className="absolute hidden items-center justify-center mx-2 bottom-10 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:flex md:items-center md:justify-center">
            <span className="text-black text-xl">
              Bienvenido a la inmobiliaria Inmo<span className='text-[#F34511]'>Villa</span>
            </span>
          </div>
    </div>

  </div>
</div>






  );
}

export default LoginModal;