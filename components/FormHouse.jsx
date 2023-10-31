import React from 'react'

export default function FormHouse() {
  return (

  
            <div class="w-full  h-screen d-flex  bg-gray-900 shadow rounded p-8 sm:p-12  border border-red-500">
                <p class="text-3xl font-bold leading-7 text-center text-white">Contact me</p>
                <form action="" method="post">
                    <div class="md:flex items-center mt-12">
                        <div class="w-full md:w-1/2 flex flex-col">
                            <label class="font-semibold leading-none text-gray-300">Name</label>
                            <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                        </div>
                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label class="font-semibold leading-none text-gray-300">Phone</label>
                            <input type="email" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                        </div>
                    </div>
                    <div class="md:flex items-center mt-8">
                        <div class="w-full flex flex-col">
                            <label class="font-semibold leading-none text-gray-300">Subject</label>
                            <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                        </div>
                        
                    </div>

                <div className='flex flex-row space-x-96'>
                    <div class="md:flex items-center mt-8">
                        <div class="w-96 flex flex-col">
                          <label className='text-slate-100'>Ubicación</label>
                           <select  className='leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-4 border-0 bg-blue-800 rounded'> 
                            <option value="">Eso</option>
                            <option value="">papaleta</option>
                            <option value="">Bastidas</option>
                            <option value="">Legui</option>
                           </select>
                        </div>
                        
                    </div>

                    <div className='leading-none text-gray-50 p-3 focus:outline-none focus:border-red-600 mt-9 border-0  rounded'>
                      
                        <label class="block mb-2 text-sm  dark:text-white font-semibold leading-none text-gray-300" for="user_avatar">Upload file</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-slate-500 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>

                    </div>
               </div>
                        <div class="w-full flex flex-col mt-8">
                            <label class="font-semibold leading-none text-gray-100" >Message</label>
                            <textarea type="text" class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                        </div>
                    
                    <div class="flex items-center justify-center w-full">
                        <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                            Send message
                        </button>
                    </div>
                </form>
            </div>
  

  )
  
}
