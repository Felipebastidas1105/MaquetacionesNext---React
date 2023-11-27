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
import GalleryView from "./GalleryView";
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdOutlineBedroomChild } from "react-icons/md";
import { TbBathFilled } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";
import { RxRulerHorizontal } from "react-icons/rx";
import { AiFillHeart } from "react-icons/ai";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
      const images = [
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhc2FzJTIwaW5tb2JpbGlhcmlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1459535653751-d571815e906b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ];
    
      const [currentImage, setCurrentImage] = useState(0);
      const sliderRef = useRef();
    
      const settings = {
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentImage(next),
      };
    
      const handleImageClick = (index) => {
        setCurrentImage(index);
        sliderRef.current.slickGoTo(index);
      };
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          sliderRef.current.slickNext();
        }, settings.autoplaySpeed);
    
        return () => clearInterval(intervalId);
      }, [settings.autoplaySpeed]);
    
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex justify-center items-center lg:flex-row-reverse flex-col-reverse gap-8">
            {/* <!-- Description Div --> */}
            <div className="bg-gray-100 h-full mb-64 rounded-md shadow-lg overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5 px-5">
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
                                            <select className="text-sm  text-gray-500 w-full focus:outline-none">
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
                    <div className="relative w-[800px]">
      <div className="w-full pb-5">
        <img
          className="h-[650px] w-full rounded-lg slider-image  focus:border-none"
          src={images[currentImage]}
          alt=""
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 ">
          <FaChevronLeft
            className="text-2xl cursor-pointer"
            onClick={() => handleImageClick((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1))}
          />
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 ">
          <FaChevronRight
            className="text-2xl cursor-pointer"
            onClick={() => handleImageClick((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1))}
          />
        </div>
      </div>
      <Slider  ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              className={`h-[100px] w-[120px]  rounded-lg cursor-pointer ${
                index === currentImage ? ' border-2 border-[#F34511]' : 'focus:border-none  '
              }`}
              src={image}
              alt=""
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </Slider>
    </div>

 
            {/* <!-- Preview Images Div For larger Screen--> */}
            {/* <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4 mx-10">
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
            </div> */}
            {/* <GalleryView/> */}
        </div>
        {/*  */}

    <div className="mt-4">
      <h1> $ 2.000.000</h1>
      <h1 className="font-semibold text-2xl">Casa de Campo</h1>
      <div className="flex mt-4 space-x-11">
                  <div className="text-gray-700 text-center">
                    <MdOutlineBedroomChild size={32} color="#F34511" />
                    {/* <span>{home.Cant_Cuartos}</span> */}
                  </div>
                  <div className="text-gray-700 text-center">
                    <TbBathFilled size={32} color="#F34511" />
                    {/* <span>{home.Cant_Baños}</span> */}
                  </div>
                  <div className="text-gray-700 text-center">
                    <TbToolsKitchen2 size={32} color="#F34511" />
                    <span>4</span>
                  </div>
                  <div className="text-gray-700 text-center">
                    <RxRulerHorizontal size={32} color="#F34511" />
                    {/* <span>{home.Area_Inmueble}</span> */}
                  </div>
                </div>
    </div>

    <div className="flex flex-wrap items-center  border w-full mt-7 shadow-2xl rounded-lg ">
        <div className="linea-naranja  border-b-4 border-orange-500  text-xl mt-4 w-full pt-6 flex items-center px-2  rounded-lg shadow-lg">
          <h1 className="text-center text-[#F34511] justify-center items-center ">Descripción General</h1>
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
        <div className="flex flex-wrap items-center  border w-full mt-11 shadow-2xl rounded-lg ">
      
        <div className="linea-naranja  border-b-4 border-orange-500  text-xl mt-4 w-full pt-6 flex items-center px-2  rounded-lg shadow-lg ">
                <h1 className="ext-center text-[#F34511] justify-center items-center">Caracteristicas Generales</h1>
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


