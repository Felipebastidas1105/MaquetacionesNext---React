'use client'

import Header from './Header';
import SearchBar from './SearchBar';
import "@/public/casa3.jpg";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('casa3.jpg')" }}>
      <div className="absolute inset-0 bg-gray-500 opacity-10  "></div>
      <div className="relative z-10">
        <Header  text ="About "  text2 ="Contact"  text3 ="Information"/>
        <SearchBar />
      </div>
    </div>
  );
}

// import React from 'react'
// import Header from './Header'


// export default function HomePage() {
//   
//   return (
//     <div className='' style={background}>
//     <Header />

//     </div>
//   )
// }


