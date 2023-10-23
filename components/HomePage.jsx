'use client'
import Header from './Header'
import SearchBar from './SearchBar'

export default function HomePage() {
  const background = {
    backgroundImage: "url('https://s1.1zoom.me/b5441/516/England_Houses_Rivers_Bridges_Knaresborough_527029_1080x1920.jpg')",
  };
  return (
    <div className="bg-fixed bg-cover" style={background}>
    <Header />
    <SearchBar />
    </div>
  )
}
