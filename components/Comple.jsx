"use client";
import React, { useEffect, useState, useRef } from "react";
// import '@/public/casa13.jpg';
import { MdOutlineBedroomChild } from "react-icons/md";
import { TbBathFilled } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";
import { RxRulerHorizontal } from "react-icons/rx";
import { MdWhatsapp } from "react-icons/md";
import "tailwindcss/tailwind.css";

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';


export default function Comple() {
  const [Home, SetHome] = useState([]);
  const [isLoad, SetLoad] = useState(false);
  const mapRef = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
      const currentURL = window.location.href;
      const partes = currentURL.split("=");
      if (partes.length === 2) {
        const url = `https://inmovilla.onrender.com/api/v1/home/${partes[1]}`;
        try {
          SetLoad(false);
          const response = await fetch(url);
          const data = await response.json();
          console.log(data.data);
          SetHome(data.data);

          if (response.status == 200) {
            SetLoad(true);
          }
        } catch (error) {
          console.error("Error al cargar los datos:", error);
        }
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const map = new Map({
  //     target: 'map',
  //     layers: [
  //       new TileLayer({
  //         source: new OSM(),
  //       }),
  //     ],
  //     view: new View({
  //       center: [0, 0],
  //       zoom: 2,
  //     }),
  //   });
  // }, []);

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
    <div>
      <div className={` ${!isLoad ? "flex" : "hidden"}`}>
        Cargando ....
      </div>
      <div className={`items-center mb-14  flex flex-col  ${` ${!isLoad ? "hidden" : "flex"}`}`}>

       <div className="flex flex-row ">
        <div className="flex-1 mr-10 border border-red-500 ">
          <h1 className="text-3xl font-semibold mt-7 mb-2 ml-20">Casa</h1>
          <p className="mt-2 ml-20">{Home.Ubicacion}</p>
          {/* <img src={Home.Imagen[1]} className="rounded-2xl mx-14" /> */}

          <div className="flex mx-16 pt-3 space-x-7">
            <div className="text-gray-700">
              <MdOutlineBedroomChild size={32} color="#F34511" />
              <span>{Home.Cant_Cuartos}</span>
            </div>
            <div className="text-gray-700">
              <TbBathFilled size={32} color="#F34511" />
              <span>{Home.Cant_Baños}</span>
            </div>
            <div className="text-gray-700">
              <TbToolsKitchen2 size={32} color="#F34511" />
              <span>4</span>
            </div>
            <div className="text-gray-700">
              <RxRulerHorizontal size={32} color="#F34511" />
              <span>{Home.Area_Inmueble}</span>
            </div>
          </div>

          <div className="mt-11 mx-16 border border-black w-[60%]">
            <h1 className="text-lg font-semibold">Descripción General</h1>
            <p>{Home.Descripcion}</p>
          </div>

          <div className="mt-11 mx-16 border border-black w-[60%]">
            <h1 className="text-lg font-semibold">Características Generales</h1>
            <p>{Home.Caracteristicas_Extra}</p>
          </div>
        </div>

        <div className="bg-white border border-black w-[20%] mr-52 mb-96">
          <div className="relative text-center items-center justify-center bg-[#2C2727] h-16 border border-black shadow-2xl">
            <h2 className="flex justify-center text-5xl font-semibold text-white">
              {Home.Precio}
            </h2>
          </div>
          {/* Resto del contenido */}
          <form className="flex flex-col gap-y-3">
            <div class="relative z-0 w-full mb-6 group mt-8 m-4">
              <input
                type="text"
                name="repeat_password"
                id="floating_repeat_text"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_repeat_text"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {" "}
                Telefono
              </label>
            </div>

            <input
              type="password"
              placeholder="Nombre"
              id="password"
              className="text-sm p-2 m-3  rounded-lg bg-slate-200 outline-none tracking-widest text-gray-600"
            />
          </form>

          <div className="mb-5 mt-5 px-4 ">
            <label
              htmlFor="message"
              className="mb-2 text-sm font-medium text-black dark:text-white flex justify-center"
            >
              Escribe tu mensaje
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="flex  flex-col gap-x-3 mx-7">
            <button className="bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 items-center  mb-4">
              Contactar
            </button>

            <button className="bg-gray-800 p-2  flex justify-center gap-x-3  transition py-2 rounded-lg hover:bg-gray-700 items-center  mb-4">
              <MdWhatsapp className="text-green-600" />
              <span className="text-sm text-white tracking-wider">
                Contactar con WhatsApp
              </span>
            </button>

          </div>
        </div>
        </div>

       

        </div>
        <div id="map" className="" style={{ width: '100%', height: '500px',border: '1px solid'}}></div>
      
  
    </div>
  );
}

