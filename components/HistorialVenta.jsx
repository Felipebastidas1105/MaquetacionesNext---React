"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

export default function HistorialVenta() {
  const data = [
    [
      1,
      "Finalizado",
      "11/05/2004",
      "30/10/2004",
      1,
      "200.000.000",
      "Marcela Gomez",
      "Jhon Jairo Rendon",
      "Depto",
    ],
    [
      2,
      "En proceso",
      "11/05/2004",
      "30/10/2004",
      1,
      "300.000.000",
      "Marcela Gomez",
      "Jhon Jairo Rendon",
      "Depto",
    ],
    [
      3,
      "No vendido",
      "11/05/2004",
      "30/10/2004",
      1,
      "1.000.000",
      "Marcela Gomez",
      "Jhon Jairo Rendon",
      "Finca",
    ],
    [
      4,
      "Finalizado",
      "11/05/2004",
      "30/10/2004",
      1,
      "3.000.000",
      "Marcela Gomez",
      "Jhon Jairo Rendon",
      "Apartaestudio",
    ],
    [
      5,
      "Vendido",
      "11/05/2004",
      "30/10/2004",
      1,
      "60.000.000",
      "Marcela Gomez",
      "Jhon Jairo Rendon",
      "Depto",
    ],
    [
      6,
      "En proceso",
      "11/05/2004",
      "30/10/2004",
      1,
      "100.000.000",
      "Marcela Gomez",
      "Jhon Jairo Rendon",
      "Finca",
    ],
    [
      7,
      "En proceso",
      "11/05/2004",
      "30/10/2004",
      1,
      "100.000.000",
      "Marcela Gomez",
      "Jhon Jairo Rendon",
      "Casa",
    ],
    [
      8,
      "Vendido",
      "11/05/2004",
      "30/10/2004",
      1,
      "900.000.000",
      "Marcela Gomez",
      "Jhon Jairo Rendon",
      "Casa ",
    ],
    [
      9,
      "Vendido",
      "11/05/2004",
      "30/10/2004",
      1,
      "900.000.000",
      "Marcela Gomez",
      "Jhon Jairo Rendon",
      "Depto ",
    ],
  ];
  return (
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
          {data.map((item) => {
            return(
              <tr key={item[0]} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
