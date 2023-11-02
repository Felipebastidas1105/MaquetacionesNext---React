import React from 'react'

export default function FormHouse() {
    
  return (
            <div class="">
                <p class="text-3xl font-bold leading-7 text-center text-white">Contact me</p>
                <form action="" method="post">
                    <div class="md:flex items-center mt-12">
                        <div class="w-full md:w-1/2 flex flex-col">
                            <label class="font-semibold leading-none">Ubicación</label>
                            <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border border-red-700 bg-gray-800 rounded" placeholder="Municipio,Barrio,Codigo" />
                        </div>

                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none ">Tipo de Propiedad</label>
                             <select  className='leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded'> 
                            <option value="">Seleccione su Tipo de Propiedad</option>
                            <option value="Venta">Venta</option>
                            <option value="Permuta">Permuta</option>
                            <option value="Arriendo">Arriendo</option>
                           </select>
                        </div>

                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none ">Estado de Propiedad</label>
                             <select  className='leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded'> 
                            <option value="">Seleccione su Tipo de Propiedad</option>
                            <option value="Venta">Venta</option>
                            <option value="Permuta">Permuta</option>
                            <option value="Arriendo">Arriendo</option>
                           </select>
                        </div>


                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label class="font-semibold leading-none ">Precio</label>
                            <input type="email" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                        </div>
                    </div>



                   <div class="md:flex items-center mt-12">
                   <div class="w-full md:w-1/2 flex flex-col md:mt-0 mt-4">
                        <label class="font-semibold leading-none ">Tipo de Negocio</label>
                             <select  className='leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded'> 
                            <option value="">Seleccione su Tipo de Propiedad</option>
                            <option value="Venta">Venta</option>
                            <option value="Permuta">Permuta</option>
                            <option value="Arriendo">Arriendo</option>
                           </select>
                        </div>

                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none ">Pisos</label>
                             <select  className='leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded'> 
                            <option value="">Seleccione su Tipo de Propiedad</option>
                            <option value="Venta">Venta</option>
                            <option value="Permuta">Permuta</option>
                            <option value="Arriendo">Arriendo</option>
                           </select>
                        </div>

                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none ">Patios</label>
                             <select  className='leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded'> 
                            <option value="">Seleccione su Tipo de Propiedad</option>
                            <option value="Venta">1</option>
                            <option value="Permuta">2</option>
                            <option value="Arriendo">3</option>
                            <option value="Arriendo">4</option>
                            <option value="Arriendo">5</option>
                           </select>
                        </div>


                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none ">Tipos Inmuebles</label>
                             <select  className='leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded'> 
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
                            <label class="font-semibold leading-none">Propietario</label>
                            <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" placeholder="Municipio,Barrio,Codigo" />
                        </div>

                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none ">Estrato</label>
                             <select  className='leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-gray-800  rounded'> 
                            <option value="">Seleccione su Estrato</option>
                            <option value="Venta">1</option>
                            <option value="Permuta">2</option>
                            <option value="Arriendo">3</option>
                            <option value="Arriendo">4</option>
                            <option value="Arriendo">5</option>
                            <option value="Arriendo">6</option>
                           </select>
                        </div>

                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label class="font-semibold leading-none ">Alcobas</label>
                            <input type="email" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                        </div>

                    </div>
               
          
                        <div class="flex">

                            <div className="flex flex-col m-10">
                            <label class="font-semibold leading-none  ">Descripción</label>
                            <textarea type="text" class="flex-row w-96 h-40 text-base leading-none text-gray-50 p-10 focus:outline-none focus:border-blue-700 mt-10 bg-gray-800 border-0 rounded "></textarea>
                            </div>
                            <div className="flex flex-col m-10"> 
                            <label class="font-semibold leading-none ">Descripción Extra</label>
                            <textarea type="text" class="flex-row w-96 h-40 text-base leading-none text-gray-50 p-10 focus:outline-none focus:border-blue-700 mt-10 bg-gray-800 border-0 rounded"></textarea>
                            </div>


                            <div className="mt-16 mx-32">
                                
                                <label class="block mb-2  text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Fotos del inmueble</label>
                                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>

                            </div>


                        </div>
                        
                    
                    <div class="flex items-center justify-center w-full">
                        <button class="mt-9 font-semibold leading-none text-[#F34511] py-4 px-10 bg-[#EAD6D6] rounded hover:bg-[#010101] focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                           Agregar Inmueble
                        </button>
                    </div>
                </form>
            </div>
  

  )
  
}
