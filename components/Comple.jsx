"use client";
import React, { useEffect, useState, useRef } from "react";
import 'tailwindcss/tailwind.css';
import "@/public/fondo2.jpg"
import "@/public/room.jpeg"
import "@/public/gente.jpg"
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';


export default function Comple() {
    const [rotate, setRotate] = useState(false);
    const [count, setCount] = useState(0);
    const mapRef = useRef(null);

    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    const minusCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    useEffect(() => {
        console.log(mapRef.current)
        if (!mapRef.current) {
          const newMap = new Map({
            target: 'map',
            layers: [
              new TileLayer({
                source: new OSM(),
              }),
            ],
            view: new View({
              center: [0, 0],
              zoom: 2,
            }),
          });
    
          mapRef.current = newMap;
        }
    
    
      }, []);
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex justify-center items-center lg:flex-row-reverse flex-col-reverse gap-8">
            {/* <!-- Description Div --> */}

            <div className="bg-gray-100  rounded-md shadow-lg overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5 px-5">
            <div className="flex items-center justify-center h-44">
            <div className="w-24  ">
             <img src="gente.jpg" className="rounded-full ring-2" />
                          </div>
                                </div>
                  <form className="mt-6 ">
                            <div className="flex items-center space-x-9 ">
                                        <input placeholder="Full Name" className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-5 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                                        <input placeholder="Age" type="number" min={0} className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                                    </div>
                                    <div className="flex items-center space-x-9 mt-8">
                                        <input placeholder="Email" type="email" className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                                        <div className="w-1/2 bg-white border rounded border-gray-200 py-2.5 px-3">
                                            <select className="text-sm text-gray-500 w-full focus:outline-none">
                                                <option selected disabled value>
                                                    Category
                                                </option>
                                                <option>Designer</option>
                                                <option>Developer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <textarea placeholder="Description" className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none" defaultValue={""} />
                                    </div>
                                </form>


                                <div className="flex items-center justify-center mt-4 mb-3 ">
                                    <button className="px-6 py-3 bg-[#2C2727] transition-colors  hover:bg-opacity-80 shadow rounded text-sm text-white">Enviar</button>
                                </div>
                    </div>

            {/* <!-- Preview Images Div For larger Screen--> */}

            <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4 mx-10">
                <div className="w-full flex justify-center items-center">
                    <img src="fondo2.jpg" alt="Wooden Chair Preview" />
                </div>

                <div className=" lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">

                    <div className="bg-gray-100 flex justify-center items-center py-4">
                        <img src="fondo2.jpg" alt="Wooden chair- preview 3" className="object-contain " />
                    </div>

                    <div className="bg-gray-100 flex justify-center items-center py-4 ">
                        <img src="room.jpeg" alt="Wooden chair- preview 3" className=" " />
                    </div>

                    <div className="bg-gray-100 flex justify-center items-center py-4  ">
                        <img src="fondo2.jpg" alt="Wooden chair- preview 3" className=" " />
                    </div>

                </div>
            </div>

        </div>

        {/*  */}

        <div className="flex flex-wrap items-center w-full border mt-7 border-black shadow-lg">
      
        <div className="border border-black w-full pt-6 flex items-center px-2">
                <h1 className="text-center text-[#F34511]">Descripción General</h1>
            </div>

        <ul className="place-content-around w-full grid lg:grid-cols-4 md:grid-cols-3 sl:grid-cols-2 gap-4 p-4">
            <li className=""><span className="font-semibold">Pais:</span> Colombia</li>
            <li className=""><span className="font-semibold">Sector:</span> Villa Maria</li>
            <li className=""><span className="font-semibold">Área Construida:</span> 65 m²</li>
            <li className=""><span className="font-semibold">Baños:</span> 3</li>
            <li className=""><span className="font-semibold">Departamento: </span> Caldas</li>
            <li className=""><span className="font-semibold">Estrato: </span> 3</li>
            <li className=""><span className="font-semibold">Tipo de inmueble:</span> Amoblado</li>
            <li className=""><span className="font-semibold">Alcobas: </span> 4</li>
            <li className=""><span className="font-semibold">Código:</span> CC-1</li>
          </ul>        

  


        </div>



        <div className="flex flex-wrap items-center w-full border mt-14 mb-7 border-black shadow-lg ">
      
        <div className="border border-black w-full pt-6 flex items-center px-2 ">
                <h1 className="text-center text-[#F34511]">Caracteristicas Generales</h1>
            </div>

        <ul className="place-content-around w-full grid lg:grid-cols-4 md:grid-cols-3 sl:grid-cols-2 gap-4 p-4">
            <li className="font-semibold">Área Social</li>
            <li className="font-semibold">Garaje</li>
            <li className="font-semibold">Salón Comunal</li>
            <li className="font-semibold">Parqueadero visitantes</li>
            <li className="font-semibold">Ascensor</li>
            <li className="font-semibold">Vigilancia</li>
            
          </ul>        

  


        </div>

        {/*  */}

        <div id="map" className="mt-10" style={{ width: '100%', height: '500px',border: '1px solid'}}></div>
        
    </div>
   
);
}


