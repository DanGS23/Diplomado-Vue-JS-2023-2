<template>
    <div class="rounded-lg bg-slate-300 shadow-xl ">
      <div class="grid md:grid-cols-2">
        <div class="m-4">
                <img class="w-full h-80 rounded-t-lg" src="/src/assets/img/5900_pool_b92df465-0c67-4161-b8bb-67f9fc301094.jpg" alt="">
                <!-- <div class="grid grid-cols-2 mb-4 ">
                    <img class="w-full h-40 rounded-bl-lg"src="/src/img/62752986a0b9f.r_1651848957740.0-73-1500-823.jpeg" alt="">
                    <img class="w-full h-40 rounded-br" src="/src/img/exterior.jpg" alt="">
                </div> -->
        </div>
        <div class=" m-4">
                <h1 class="text-center font-medium text-4xl">Hotel Lorica</h1>
                <br>
                <p class="px-4 pb-4 text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dolore quis asperiores dignissimos dolorum quibusdam.</p>
            <div class="px-4 relative overflow-x-auto shadow-md sm:rounded-lg  bg-blue-50"> 
                    <form class="mt-4">
                        <div class="grid md:grid-cols-3 md:gap-6 pb-4">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_email" id="floating_email" class="text-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value="Lorica Hotel" required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del Hotel</label>
                                
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="number" min="0" max="12" name="floating_password" id="floating_password" class="text-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value="999999" required />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NIT</label>
                                
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" class="text-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value="Calle 14a #20-34" required />
                                <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Direccion</label>
                                
                            </div>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" class="text-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value="Bogota" required />
                                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ciudad</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                <input type="number" name="floating_last_name" id="floating_last_name" class="text-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value="200" required />
                                <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">N° Habitaciones</label>

                                </div>
                            </div>
                    </form>
            </div>
        </div>
    </div>
    </div>
    <div class="relative my-6 overflow-x-auto shadow-md sm:rounded-lg rounded-lg mt-14 bg-blue-100">
  
  <div class="ml-4 mb-6 mt-4">
    <h1 class="font-semibold text-4xl pl-10">Añadir Habitaciones</h1>
  </div>
  <hr class="border-2 border-gray-700 mr-6 ml-6">
      <form class="p-4">
            <div class="grid md:grid-cols-3 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                  <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value="" required />
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hotel</label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                  <input type="number" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nº de Habitaciones</label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                  <input type="number" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Codigo de Habitacion</label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <select v-model="selected" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" value="Seleccione una opcion" required>
                  <option disabled value="Seleccione una opcion">Seleccione una opcion</option>
                  <option value="1">Estandar</option>
                  <option value="2">Junior</option>
                  <option value="3">Suite</option>
                  </select>
                  <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo de Habitacion</label>
              </div>
                <div class="relative z-0 w-full mb-6 group">
                  <select v-model="selected" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required>
                  <option disabled value="Seleccione una opcion">Seleccione una opcion</option>
                  <option value="1">Sencilla</option>
                  <option value="2">Doble</option>
                  <option value="3">Triple</option>
                  <option value="4">Cuadruple</option>
                  </select>
                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Acomodacion</label>
                </div>
              <div class="flex justify-center items-center">
                <router-link to="/detalle-Hotel"><button type="submit" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 uppercase">Regresar</button></router-link>
                <button @click="alertAdd" type="submit" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 uppercase">Añadir</button>
              </div>
          </div>
      </form>
    </div>
      
  </template>
  
  <script>
  import Swal from 'sweetalert2';
     export default { 
      mounted() {
        
      },
      methods:{
  
        alertAdd(){
        Swal.fire({
          title: 'Habitacion creada exitosamente',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
      }
      }
  </script>
  
  <style>
  
  </style>