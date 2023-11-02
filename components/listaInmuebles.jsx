"use client";
import React, { useEffect, useState } from "react";

export default function ListaInmuebles() {
  const [houses, setHouses] = useState([]);
  const url = "https://inmovilla.onrender.com/api/v1/home";
  const axios = require("axios");

  useEffect(() => {
    const fetchData = async ()=>{
        const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setHouses(data.data)
    }
    fetchData()
  }, []);

  return(
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha compra
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha entrega
            </th>
            <th scope="col" className="px-6 py-3">
              Codigo vivienda
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="px-6 py-3">
              Agente inmobiliario
            </th>
            <th scope="col" className="px-6 py-3">
              Comprador
            </th>
            <th scope="col" className="px-6 py-3">
              Tipo
            </th>
          </tr>
        </thead>
        <tbody>
          {houses.map((item) => {
            return(
              <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item[0]}</th>
              <td className="px-6 py-4">{item[1]}</td>
              <td className="px-6 py-4">{item[2]}</td>
              <td className="px-6 py-4">{item[3]}</td>
              <td className="px-6 py-4">{item[4]}</td>
              <td className="px-6 py-4">{item[5]}</td>
              <td className="px-6 py-4">{item[6]}</td>
              <td className="px-6 py-4">{item[7]}</td>
              <td className="px-6 py-4">{item[8]}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
  
  
}
