'use client'
import Header from './Header'
import SearchBar from './SearchBar'
import "@/public/fondo2.jpg"

export default function HomePage() {
  const background = {
        backgroundImage: "url('fondo2.jpg')",
        backgroundSize: 'cover', // Ajusta el tamaño para cubrir completamente el contenedor
        height: '100vh', // 100% de la altura de la ventana
      }; 

  return (
    <div className="bg-no-repeat " style={background}>
      <Header />
      <SearchBar />
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


