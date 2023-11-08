// import React, { useState, useEffect } from 'react';
// import LoginModal from './LoginModal';

// function SearchBar() {
//   const [showModal, setShowModal] = useState(false);

//   const handleGetStartedClick = () => {
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//   };

//   const handleRouteChangeStart = (url) => {
//     if (url === '/login') {
//       setShowModal(true);
//       if (router.events) {
//         router.events.emit('routeChangeError');
//       }
//     }
//   };

//   useEffect(() => {
//     if (router && router.events) {
//       router.events.on('routeChangeStart', handleRouteChangeStart);

//       return () => {
//         router.events.off('routeChangeStart', handleRouteChangeStart);
//       };
//     }
//   }, [router]);

//   return (
//     <div className='flex flex-col items-center'>
//       <div className='flex flex-row justify-between w-full p-5'>
//         <div className='flex flex-col'>
//           <label htmlFor='check-in'>Check in</label>
//           <input className='outline-none' type='text' placeholder='Add details' />
//         </div>
//         <div className='flex flex-col'>
//           <label htmlFor='check-out'>Check out</label>
//           <input className='outline-none' type='text' placeholder='Add dates' />
//         </div>
//         <div className='flex flex-col'>
//           <label htmlFor='guests'>Guests</label>
//           <input className='outline-none' type='text' placeholder='Add guests' />
//         </div>
//         <div>
//           <button
//             className='flex flex-col items-center justify-center bg-red-400 h-14 w-14 rounded-full hover:bg-gray-800 hover:text-white'
//             onClick={handleGetStartedClick}
//           >
//             Get Started
//           </button>
//         </div>
//       </div>
//       <div className='flex flex-col items-center m-20'>
//         <h1 className='text-white font-bold text-6xl mt-20'>The Greatest Outdoors</h1>
//         <p className='text-white mt-8'>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, suscipit.
//         </p>
//       </div>
//       {showModal && <LoginModal onClose={handleModalClose} />}
//     </div>
//   );
// }

// export default SearchBar;








import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import LoginModal from './LoginModal';
import Link from 'next/link';

export default function SearchBar() {
  const [showModal, setShowModal] = useState(false);

  const handleGetStartedClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <div className='flex flex-col items-center'>
      <div className='mx-auto w-3/4 flex flex-row items-center justify-between p-10 h-16 bg-white rounded-3xl '>
        <div className='flex flex-col'>
          <label htmlFor="">Location</label>
          <input className='outline-none' type="text" placeholder='Where are you going?' />
          {/* <CountryDropdown/> */}
        </div>
        <div className='flex flex-col' >
          <label htmlFor="">Check in</label>
          <input className='outline-none' type="text" placeholder='Add details' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Chek out</label>
          <input className='outline-none' type="text" placeholder='Add dates' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Guests</label>
          <input className='outline-none' type="text" placeholder='Add guests' />
        </div>
        <div>
          <button className=' flex flex-col items-center justify-center bg-[#F34511] h-14 w-14 rounded-full hover:bg-gray-800 hover:text-white'><BiSearchAlt className='w-10 h-10' /></button> 
        </div>
      </div>
      <div className='flex flex-col items-center m-36'>
        <h1 className='text-white font-bold text-6xl mt-20'>Bienvenidos</h1>
        <p className='text-[#2C2727] mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, suscipit.</p>
         <button onClick={handleGetStartedClick} className='text-white bg-orange-600 w-24 h-14 rounded-xl mt-12 hover:bg-gradient-to-r from-red-700 via-red-800 to-amber-400  transition duration-1000 ease'>Get Started</button>
      </div>
      {showModal && (
        <LoginModal onClose={handleModalClose} />
      )}                                    
    </div>
  )
}
