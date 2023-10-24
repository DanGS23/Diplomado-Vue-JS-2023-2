<template>
    <div class="flex justify-center items-center p-4">
    <div id="controls-carousel" class="relative w-full" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-96">
           <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/src/assets/img/decoacion-habitaciones-hoteles.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
              <img src="/src/assets/img/decoracion-habitacion-hotel.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <!-- Item 3 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/src/assets/img/habitaciones-hotel-8a-a.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <!-- Item 4 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/src/assets/img/habitaciones-hoteles-1a-a.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <!-- Item 5 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/src/assets/img/habitaciones-hoteles-1a-a.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
      </div>
      <!-- Slider controls -->
      <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
              </svg>
              <span class="sr-only">Previous</span>
          </span>
      </button>
      <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span class="sr-only">Next</span>
          </span>
      </button>
    </div>
  </div>
        <hr class="px-8 border-2 ">
        <div class="ml-4 mr-4 py-4 relative overflow-x-auto shadow-md sm:rounded-lg rounded-lg mt-4 bg-blue-50"> 
          <div class="ml-4 mb-4">
            <h1 class="font-semibold text-2xl text-center ">Detalles de Habitaciones</h1>
          </div>
          <hr class="border-2 border-gray-700 mr-6 ml-6">
          <form class="p-4">
              <div class="grid md:grid-cols-3 md:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                      <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" value="LoricaHotel" required />
                      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hotel</label>
                  </div>
                      <div class="relative z-0 w-full mb-6 group">
                          <input type="number" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" value="200" required />
                          <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nº de Habitaciones</label>
                      </div>
                  <div class="relative z-0 w-full mb-6 group">
                      <input type="number" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" value="104" required />
                      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Codigo de Habitacion</label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                  <select v-model="selected" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required>
                  <!-- <option disabled value="Seleccione una opcion">Seleccione una opcion</option> -->
                  <option value="1">Estandar</option>
                  <!-- <option value="2">Junior</option>
                  <option value="3">Suite</option> -->
                  </select>
                      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo de Habitacion</label>
                  </div>
                    <div class="relative z-0 w-full mb-6 group">
                      <select v-model="selected" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required>
                  <!-- <option disabled value="Seleccione una opcion">Seleccione una opcion</option> -->
                  <option value="1">Sencilla</option>
                  <!-- <option value="2">Doble</option>
                  <option value="3">Triple</option>
                  <option value="4">Cuadruple</option> -->
                  </select>
                        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Acomodacion</label>
                    </div>
              </div>
          </form>
        </div>
        <hr class="px-8 mt-4 border-2 ">
          <div class="flex justify-between mt-4">
          
              <router-link to="/listaHab"><button type="submit" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 uppercase">Regresar</button></router-link>
            <div class="flex justify-center items-center">
  
              <router-link to="/editarHab"><button type="submit" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 uppercase">Editar Habitacion</button></router-link>
  
              <button @click="showAlertDelete" type="submit" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 uppercase">Eliminar </button>
              </div>
            </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';

     export default { 
      mounted() {
        
      },
      methods:{
  
      showAlertDelete()
     {
        // Use sweetalert2
        Swal.fire({
          title: 'Quieres eliminar la habitacion?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar'
          }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire(
              'Habitacion Eliminada!',
              '',
              'success'
              )
          }
          })
       }
      }
      }
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>