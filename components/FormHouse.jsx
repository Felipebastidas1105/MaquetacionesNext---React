import React from "react";
import {Input} from "@nextui-org/react";

export default function FormHouse() {
  return (
    <div className="flex flex-col">
      <form action="">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="email" label="Email" />
          <Input type="email" label="Email" placeholder="Enter your email" />
        </div>
      </form>
    </div>
  );
}
{
  /* <form action="" method="post">
        <div class="md:flex items-center mt-12">
          <div class="w-full md:w-1/2 flex flex-col">
            <label class="font-semibold leading-none">Ubicación</label>
            <input
              type="text"
              class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border border-red-700 bg-gray-800 rounded"
              placeholder="Municipio,Barrio,Codigo"
            />
          </div>


          <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label class="font-semibold leading-none ">
              Cantidad de cuartos
            </label>
            <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded">
              <option value="">Seleccione su Tipo de Propiedad</option>
              <option value="Venta">Venta</option>
              <option value="Permuta">Permuta</option>
              <option value="Arriendo">Arriendo</option>
            </select>
          </div>
          <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label class="font-semibold leading-none ">
              Caracteristicas extra
            </label>
            <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded">
              <option value="">Seleccione su Tipo de Propiedad</option>
              <option value="Venta">Venta</option>
              <option value="Permuta">Permuta</option>
              <option value="Arriendo">Arriendo</option>
            </select>
          </div>

          <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label class="font-semibold leading-none ">
              Tiene servicios incluidos
            </label>
            <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded">
              <option value="">Seleccione su Tipo de Propiedad</option>
              <option value="Venta">Venta</option>
              <option value="Permuta">Permuta</option>
              <option value="Arriendo">Arriendo</option>
            </select>
          </div>
          <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label class="font-semibold leading-none ">Tipo de objeto</label>
            <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded">
              <option value="">Seleccione su Tipo de Propiedad</option>
              <option value="Venta">Venta</option>
              <option value="Permuta">Permuta</option>
              <option value="Arriendo">Arriendo</option>
            </select>
          </div>

          <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label class="font-semibold leading-none ">
              Estado de Propiedad
            </label>
            <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded">
              <option value="">Area del inmueble</option>
              <option value="Venta">Venta</option>
              <option value="Permuta">Permuta</option>
              <option value="Arriendo">Arriendo</option>
            </select>
          </div>

          <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label class="font-semibold leading-none ">Precio</label>
            <input
              type="email"
              class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
            />
          </div>
        </div>

        <div class="md:flex items-center mt-12">
          <div class="w-full md:w-1/2 flex flex-col md:mt-0 mt-4">
            <label class="font-semibold leading-none ">Descripcion</label>
            <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded">
              <option value="">Seleccione su Tipo de Propiedad</option>
              <option value="Venta">Venta</option>
              <option value="Permuta">Permuta</option>
              <option value="Arriendo">Arriendo</option>
            </select>
          </div>

          <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label class="font-semibold leading-none ">Tipo de vivienda</label>
            <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded">
              <option value="">Seleccione su Tipo de Propiedad</option>
              <option value="Venta">Venta</option>
              <option value="Permuta">Permuta</option>
              <option value="Arriendo">Arriendo</option>
            </select>
          </div>

          <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label class="font-semibold leading-none ">Precio de venta</label>
            <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded">
              <option value="">Seleccione su Tipo de Propiedad</option>
              <option value="Venta">1</option>
              <option value="Permuta">2</option>
              <option value="Arriendo">3</option>
              <option value="Arriendo">4</option>
              <option value="Arriendo">5</option>
            </select>
          </div>

          <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label class="font-semibold leading-none ">Tipos de negocio</label>
            <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded">
              <option value="">Seleccione su Tipo de Propiedad</option>
              <option value="Venta">1</option>
              <option value="Permuta">2</option>
              <option value="Arriendo">3</option>
              <option value="Arriendo">4</option>
              <option value="Arriendo">5</option>
            </select>
          </div>
        </div>

        <div class="md:flex items-center mt-12">
          <div class="w-full md:w-1/2 flex flex-col">
            <label class="font-semibold leading-none">Tipo de inmueble</label>
            <input
              type="text"
              class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
              placeholder="Municipio,Barrio,Codigo"
            />
          </div>
        </div>

        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
          <label class="font-semibold leading-none ">Agente a cargo</label>
          <select className="leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded">
            <option value="">Seleccione su Estrato</option>
            <option value="Venta">1</option>
            <option value="Permuta">2</option>
            <option value="Arriendo">3</option>
            <option value="Arriendo">4</option>
            <option value="Arriendo">5</option>
            <option value="Arriendo">6</option>
          </select>
        </div>
        <div>
          <p>Imagen</p>
          <input type="file" name="" id="" placeholder="Seleccione una imagen"/>
        </div>

        <div class="flex items-center justify-center w-full">
          <button class="mt-9 font-semibold leading-none text-[#F34511] py-4 px-10 bg-[#EAD6D6] rounded hover:bg-[#010101] focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
            Agregar Inmueble
          </button>
        </div>
      </form> */
}
