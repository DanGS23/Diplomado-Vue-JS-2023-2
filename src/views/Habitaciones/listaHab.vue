<template>
    
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
        <div class="ml-4 mb-4 py-4">
            <h1 class="font-semibold text-4xl pl-10">Listado de Habitaciones</h1>
        </div>
        <hr class="border-2 border-gray-700 mr-6 ml-6">
        <div class="relative my-6 overflow-x-auto shadow-md sm:rounded-lg rounded-lg mr-6 ml-6">
            <table class="w-full text-sm text-left text-gray-500">
               <thead class="text-xs text-gray-900 uppercase bg-blue-300 text-center">
                   <tr>
                    <th scope="col" class="px-4 py-3">
                        Hotel
                    </th>
                    <th scope="col" class="px-4 py-3">
                        Nº de Habitaciones
                    </th>
                       <th scope="col" class="px-4 py-3">
                           Codigo de Habitacion
                       </th>
                       <th scope="col" class="px-4 py-3">
                           Tipo de Habitacion
                       </th>
                       <th scope="col" class="px-4 py-3">
                           Acomodacion
                       </th>
                       <th scope="col" class="px-4 py-3">
                           accion
                       </th>
                   </tr>
               </thead>
               <tbody class="text-center">
                   <tr class="bg-blue-100 hover:bg-blue-200 border-b">
                    <th class="px-4 py-4 text-center text-gray-900">
                        LoricaHotel
                    </th>
                    <td class="px-4 py-4 text-center">
                        200
                    </td>
                       <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           101
                       </th>
                       <td class="px-4 py-4 text-center">
                           Estandar
                       </td>
                       <td class="px-4 py-4">
                           Sencilla
                       </td>
                       <td class="px-4 py-4">
                        <div>
                            <router-link to="/detallesHab" class="p-2 bg-yellow-300 border-2 border-yellow-500 rounded-lg font-medium text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">Ver Detalles</button></router-link>
                        </div>  
                      </td>
                   </tr>
                   <tr class="bg-blue-100 hover:bg-blue-200 border-b">
                    <th class="px-4 py-4 text-center text-gray-900">
                        LoricaHotel
                    </th>
                    <td class="px-4 py-4 text-center">
                        200
                    </td>
                       <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           102
                       </th>
                       <td class="px-4 py-4 text-center">
                           Estandar
                       </td>
                       <td class="px-4 py-4">
                           Doble
                       </td>
                       <td class="px-4 py-4">
                        <div>
                            <router-link to="/detallesHab" class="p-2 bg-yellow-300 border-2 border-yellow-500 rounded-lg font-medium text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">Ver Detalles</button></router-link>
                        </div> 
                       </td>
                   </tr>
                   <tr class="bg-blue-100 hover:bg-blue-200 border-b">
                    <th class="px-4 py-4 text-center text-gray-900">
                        LoricaHotel
                    </th>
                    <td class="px-4 py-4 text-center">
                        200
                    </td>
                       <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           103
                       </th>
                       <td class="px-4 py-4 ">
                           Senior
                       </td>
                       <td class="px-4 py-4">
                           Doble
                       </td>
                       <td class="px-4 py-4">
                        <div>
                            <router-link to="/detallesHab" class="p-2 bg-yellow-300 border-2 border-yellow-500 rounded-lg font-medium text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">Ver Detalles</button></router-link>
                        </div>  
                       </td>
                   </tr>
                   <tr class="bg-blue-100 hover:bg-blue-200 border-b">
                    <th class="px-6 py-4 text-center text-gray-900">
                        LoricaHotel
                    </th>
                    <td class="px-4 py-4 ">
                        200
                    </td>
                       <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           104
                       </th>
                       <td class="px-4 py-4 ">
                           Suite
                       </td>
                       <td class="px-4 py-4">
                           Sencilla
                       </td>
                       <td class="px-4 py-4">
                        <div>
                            <router-link to="/detallesHab" class="p-2 bg-yellow-300 border-2 border-yellow-500 rounded-lg font-medium text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">Ver Detalles</button></router-link>
                        </div>  
    
                       </td>
                   </tr>
                   
               </tbody>
           </table>
        
       </div>
       <div class="flex justify-center">
            <router-link to="/detalle-Hotel" ><button type="submit" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 uppercase">Regresa a detalles del Hotel</button></router-link>
        </div>
    </div>
    
    </template>
    
    <Script setup>
    
    </Script>
    
    
    <style lang="scss" scoped>
    
    </style>