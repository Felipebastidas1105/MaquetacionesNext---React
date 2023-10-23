import React, { useState } from 'react';

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

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-10 rounded-lg'>
        <h2 className='text-gray-800 text-2xl mb-4'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-4'>
            <label htmlFor='username' className='text-gray-800'>
              Username
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={handleUsernameChange}
              className='border border-gray-400 p-2 rounded-lg'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='password' className='text-gray-800'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              className='border border-gray-400 p-2 rounded-lg'
            />
          </div>
          <button
            type='submit'
            className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700'
          >
            Login
          </button>
        </form>
        <button
          className='text-gray-800 bg-gray-200 px-4 py-2 rounded-lg mt-4'
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LoginModal;