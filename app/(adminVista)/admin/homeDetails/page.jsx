"use client";
import React, { useState } from "react";
import { useEffect } from "react";

export default function page() {
  const [id, setUrl] = useState("");
  const [cargar, SetCargar] = useState(true);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const currentURL = window.location.href;
      const partes = currentURL.split("=");
      if (partes.length === 2) {
        setUrl(partes[1]);
        SetCargar(false);
        const url = `https://inmovilla.onrender.com/api/v1/home/${partes[1]}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data.data);
          setDetails(data.data);
        } catch (error) {
          console.error("Error al cargar los datos:", error);
        }
      }
    };

    if (cargar) {
      fetchData();
    }
  }, [cargar]);

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-4">Detalles de la Propiedad</h1>
      <div>
        {details.Ubicacion}
      </div>
    </div>
  );
}
