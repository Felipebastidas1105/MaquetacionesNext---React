"use client";
import { MdOutlineBedroomChild } from "react-icons/md";
import { TbBathFilled } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";
import { RxRulerHorizontal } from "react-icons/rx";
import { AiFillHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Carousel } from "flowbite";
import "tailwindcss/tailwind.css";
import { Target } from "lucide-react";
// import Scroll from "./Scroll";

export default function Card() {
  const [homes, setHomes] = useState([]);
  const [taget,setTarget] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const url = "https://inmovilla.onrender.com/api/v1/home";
  const [carga, setCarga] = useState(true);

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setHomes(data.data);
    };
    if (carga) {
      fetchData();
      setCarga(false);
    } else {
      return;
    }
  }, [carga]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber = currentImageIndex + 1;
      setCurrentImageIndex(newNumber);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const TipoTarget =  (TargetId) => {
    if (TargetId === 1) return "Venta"
    else if(TargetId === 2)return "Renta"
    else return "Permuta"
  }

  return (
    <div className="flex flex-wrap justify-center space-x-10 bg-white   ">
      {homes.map((home) => {
        return (
          <div className="max-w-xs transition   lg:max-w-sm bg-white border border-gray-300 p-2  shadow-2xl dark:bg-gray-800 dark:border-gray-700 my-6 lg:my-12 mx-2git m-7 hover:-translate-y-2 rounded-lg">
            <a href="#">
              <div className="relative rounded-lg">
                  <div className="relative  overflow-hidden rounded-lg md:h-96">
                    <img
                      src={home.Imagen[currentImageIndex]}
                      className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt="..."
                    ></img>
                </div>
                <div className="sale-indicator shadow-sm shadow-white absolute top-2 left-2 bg-[#F34511]  text-white text-xs p-1 rounded-lg">
                  {
                  TipoTarget(home.TypetargetId)
                  }
                </div>
              </div>
            </a>
            <div className="p-2 my-6">
              <a href="#">
                <div className="flex flex-wrap mb-1">
                  <p className="text-lg font-bold tracking-tight text-slate-700 dark:text-white mr-4">
                    {" "}
                    {home.Precio_Venta}
                  </p>
                  <p className="text-lg font-bold tracking-tight text-slate-600 dark:text-white ml-24">
                    {" "}
                    CC-{home.Codigo_Vivienda}
                  </p>
                </div>

                <hr className=" text-gray-700 dark:text-gray-400"></hr>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                {home.Descripcion}
              </p>
              <hr className="my-4"></hr>

              <div className="flex items-center justify-center space-x-11">
                <div className="text-gray-700 text-center">
                  <MdOutlineBedroomChild size={32} color="#F34511" />
                  <span>{home.Cant_Cuartos}</span>
                </div>
                <div className="text-gray-700 text-center">
                  <TbBathFilled size={32} color="#F34511" />
                  <span>{home.Cant_Baños}</span>
                </div>
                <div className="text-gray-700 text-center">
                  <TbToolsKitchen2 size={32} color="#F34511" />
                  <span>4</span>
                </div>
                <div className="text-gray-700 text-center">
                  <RxRulerHorizontal size={32} color="#F34511" />
                  <span>{home.Area_Inmueble}</span>
                </div>
              </div>

              <hr className="my-4 decoration-sky-500"></hr>

              <div className="flex items-center justify-between">
                <button>
                  <a className="inline-flex shadow-md shadow-stone-600 items-center px-2 py-2 font-medium text-center text-white bg-[#2C2727]  rounded-lg hover:bg-[#3b3939] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800 ml-32">
                    Ver Más
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </button>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 mr-10  rounded-lg focus:ring-4 focus:outline-none  dark:focus:"
                  >
                    <AiFillHeart
                      size={40}
                      className="text-transparent   transition-colors hover:text-red-700"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}