'use client'
import Header from './Header'
import SearchBar from './SearchBar'
import "@/public/fondo2.jpg"
export default function HomePage() {
  const background = {
    backgroundImage: "url('fondo2.jpg')",
    backgroundSize: '100% 100%', // Ajusta el tamaño para mostrar la imagen completa
  };
  return (
    <div className="  bg-fixed  bg-no-repeat " style={background}>
    <Header />
    <SearchBar />
    </div>
  )
}

