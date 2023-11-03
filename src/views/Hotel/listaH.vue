<script>
import Swal from 'sweetalert2';
import axios from 'axios';

export default{
    data(){
    return{
            hotels: [],
            currentComponent: null,
            showDetails: false,
            currentHotel: null
        }

    },
    created() {
        axios.get('http://146.190.32.176/diplomado/api/hotels')
            .then(response => {
                this.hotels = response.data.data;
            })
            .catch(error => {
                console.error(error);
            })
    },
    methods:{
  eliminar(id) {
    Swal.fire({
      title: 'Quieres eliminar un hotel?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://146.190.32.176/diplomado/api/hotels/${id}`)
          .then(response => {
            console.log(response.data);
            this.hotels = this.hotels.filter(hotel => hotel.id !== id);
            Swal.fire(
              'Hotel Eliminado!',
              '',
              'success'
            )
          })
          .catch(error => {
           
            console.error(error);
          });
      }
    })
 },
//   editar(id) {
//     // Enviar una solicitud GET para obtener los detalles del hotel
//     axios.get(`http://146.190.32.176/diplomado/api/hotels/${id}`)
//       .then(response => {
//         this.currentHotel = response.data.data;
//         this.showDetails = true;
//         // Si deseas navegar a una página de edición, puedes hacerlo así:
//         this.$router.push({ name: 'editarHotel', params: { id } });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   },
}

}


</script>
<template>
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
    <div class="ml-4 mb-4 py-4">
        <h1 class="font-semibold text-4xl pl-10">Listado de Hotel</h1>
    </div>
    <hr class="border-2 border-gray-700 mr-6 ml-6">
    <div class="relative my-6 overflow-x-auto shadow-md sm:rounded-lg rounded-lg mr-6 ml-6">

        <table class="w-full text-sm text-left text-gray-500">
           <thead class="text-xs text-gray-900 uppercase bg-blue-300 text-center">
               <tr>
                   <th scope="col" class="px-6 py-3">
                       Hotel
                   </th>
                   <th scope="col" class="px-6 py-3">
                       NIT
                   </th>
                   <th scope="col" class="px-6 py-3">
                       direccion
                   </th>
                   <th scope="col" class="px-6 py-3">
                       ciudad
                   </th>
                   <th scope="col" class="px-6 py-3">
                       N° Habitaciones
                   </th>
                   <th scope="col" class="px-6 py-3">
                       accion
                   </th>
               </tr>
           </thead>
           <tbody class="text-center">
               <tr v-for="hotel in hotels" :key="hotel.id" class="bg-blue-100 hover:bg-blue-200">
                   <th scope="row" class="px-6 py-4 text-gray-900 font-medium whitespace-nowrap dark:text-white">
                       {{ hotel.name }}
                   </th>
                   <td class="px-6 py-4">
                       {{ hotel.nit }}
                   </td>
                   <td class="px-6 py-4">
                        {{ hotel.address }}
                   </td>
                   <td class="px-6 py-4">
                       {{ hotel.city.name }}
                   </td>
                   <td class="px-6 py-4">
                       {{ hotel.num_rooms }}
                   </td>
                   <td class="px-2 py-4 mx-2">
                    <div class="space-x-1 flex justify-center">
                            <router-link to="/detalle-Hotel" class="flex justify-center content-center px-2 py-1 bg-yellow-300 border-2 border-yellow-500 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                                </svg>
                            </button></router-link>
                            <router-link to="/editar-Hotel" @click="editar(hotel.id)" class="flex justify-center content-center px-2 py-1 bg-green-300 border-2 border-green-500 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                <path d="M16 5l3 3"></path>
                                </svg>
                            </button></router-link>
                            <button @click="eliminar(hotel.id, $event)" type="button" class="flex justify-center content-center px-2 py-1 bg-red-500 border-2 border-red-400 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                </svg>
                            </button>
                         </div>   
                   </td>
                </tr>
                <!-- <tr class="bg-blue-100 hover:bg-blue-200">
                    <th scope="row" class="px-6 py-4 text-gray-900 font-medium whitespace-nowrap dark:text-white">
                        Cerete Hotel
                    </th>
                    <td class="px-6 py-4 text-center">
                        00011
                    </td>
                    <td class="px-6 py-4">
                        Calle 40 #20-34
                    </td>
                    <td class="px-6 py-4">
                        Bogota
                    </td>
                    <td class="px-6 py-4">
                        200
                    </td>
                    <td class="px-2 py-4 mx-2">
                        <div class="space-x-1 flex justify-center">
                            <router-link to="/detalle-Hotel" class="flex justify-center content-center px-2 py-1 bg-yellow-300 border-2 border-yellow-500 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                                </svg>
                            </button></router-link>
                            <router-link to="/editar-Hotel" class="flex justify-center content-center px-2 py-1 bg-green-300 border-2 border-green-500 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                <path d="M16 5l3 3"></path>
                                </svg>
                            </button></router-link>
                            <button @click="showAlert" type="button" class="flex justify-center content-center px-2 py-1 bg-red-500 border-2 border-red-400 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                </svg>
                            </button>
                         </div>   
                    </td>
                 </tr>
                 <tr class="bg-blue-100 hover:bg-blue-200">
                    <th scope="row" class="px-6 py-4 text-gray-900 font-medium whitespace-nowrap dark:text-white">
                        Monteria Hotel
                    </th>
                    <td class="px-6 py-4 text-center">
                        00011
                    </td>
                    <td class="px-6 py-4">
                        Calle 40 #20-34
                    </td>
                    <td class="px-6 py-4">
                        Bogota
                    </td>
                    <td class="px-6 py-4">
                        200
                    </td>
                    <td class="px-2 py-4 mx-2">
                        <div class="space-x-1 flex justify-center">
                            <router-link to="/detalle-Hotel" class="flex justify-center content-center px-2 py-1 bg-yellow-300 border-2 border-yellow-500 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                                </svg>
                            </button></router-link>
                            <router-link to="/editar-Hotel" class="flex justify-center content-center px-2 py-1 bg-green-300 border-2 border-green-500 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                <path d="M16 5l3 3"></path>
                                </svg>
                            </button></router-link>
                            <button @click="showAlert" type="button" class="flex justify-center content-center px-2 py-1 bg-red-500 border-2 border-red-400 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                </svg>
                            </button>
                         </div> 
                    </td>
                 </tr>
                 <tr class="bg-blue-100 hover:bg-blue-200">
                    <th scope="row" class="px-6 py-4 text-gray-900 font-medium whitespace-nowrap dark:text-white">
                        Sahugun Hotel
                    </th>
                    <td class="px-6 py-4 text-center">
                        00011
                    </td>
                    <td class="px-6 py-4">
                        Calle 40 #20-34
                    </td>
                    <td class="px-6 py-4">
                        Bogota
                    </td>
                    <td class="px-6 py-4">
                        200
                    </td>
                    <td class="px-2 py-4 mx-2">
                         <div class="space-x-1 flex justify-center">
                            <router-link to="/detalle-Hotel" class="flex justify-center content-center px-2 py-1 bg-yellow-300 border-2 border-yellow-500 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                                </svg>
                            </button></router-link>
                            <router-link to="/editar-Hotel" class="flex justify-center content-center px-2 py-1 bg-green-300 border-2 border-green-500 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline"><button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                <path d="M16 5l3 3"></path>
                                </svg>
                            </button></router-link>
                            <button @click="showAlert" type="button" class="flex justify-center content-center px-2 py-1 bg-red-500 border-2 border-red-400 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-500 hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                </svg>
                            </button>
                         </div>   
                    </td>
                 </tr> -->
             
           </tbody>
       </table>
   </div>
</div>
</template>


