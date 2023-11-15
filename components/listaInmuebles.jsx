"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ListaInmuebles() {
  const [houses, setHouses] = useState([]);
  const [Loading,SetLoading] = useState("Cargando")
  const url = "https://inmovilla.onrender.com/api/v1/home";
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      if (response.status == 200) { 
        SetLoading("")
      }
      console.log(data);
      setHouses(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-auto">
      
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
             <th scope="col" className="px-6 py-3">
              Ubicacion
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="px-6 py-3">
              Tipo vivienda 
            </th>
            <th scope="col" className="px-6 py-3">
              Precio venta
            </th>
            <th scope="col" className="px-6 py-3">
              Agente 
            </th>
            <th scope="col" className="px-6 py-3">
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {houses.map((item) => {
            return (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.Codigo_Vivienda}
                </th>
                <td className="px-6 py-4">{item.Ubicacion}</td>
                <td className="px-6 py-4">{item.Precio}</td>
                <td className="px-6 py-4">{item.Tipo_Vivienda}</td>
                <td className="px-6 py-4">{item.Precio_Venta}</td>
                <td className="px-6 py-4">{item.AgentId}</td>
                <td><button className="px-4">Editar</button>
                <button className="px-4">Eliminar</button >
                <Link href={`/admin/homeDetails?id=${item.id}`}><button className="px-4">Ver mas</button></Link></td>
              </tr>
            );
          })}
        </tbody>

      </table>
      <div>
      <h1 className="text-center text-lg text-gray-700 font-bold mt-10">{Loading}</h1>
      </div>

    </div>
  );
}
