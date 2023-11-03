<script setup>

import Swal from 'sweetalert2'

import { ref, onMounted, render } from 'vue'
import axios from "axios";


const errores = ref([])
const ciudades = ref([])

const formulario = ref({
    'city_id': null,
    'name': null,
    'nit': null,
    'address': null,
    'num_rooms': null
});


onMounted(() => {
    axios.get('http://146.190.32.176/diplomado/api/cities')
        .then(function (response) {
            console.log(response.data)
            ciudades.value = response.data
        })
        .catch(function (error) {
            console.log(error);
        });
})

function enviar() {
    axios.post('http://146.190.32.176/diplomado/api/hotels', formulario.value)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            errores.value = error.response.data.errors
        });
        Swal.fire({
        title: '¡Hotel creado con exito!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })
}


</script>
    <!-- <form> -->
      <template>
        <div class="px-4 py-8 mx-8 relative overflow-x-auto shadow-md sm:rounded-lg rounded-lg mt-14 bg-blue-50"> 
      <div class="ml-4 mb-6 mt-4">
        <h1 class="font-semibold text-4xl pl-10">Agregar Hotel</h1>
      </div>
      <hr class="border-2 border-gray-700 mr-6 ml-6">
    
        <div class="grid md:grid-cols-1 md:gap-6 p-6 mt-10">
           <div class="relative z-0 w-full mb-6 group">
            <select v-model="formulario.city_id" id="ciudades" name="ciudades" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required >
              <option selected> Seleccione una ciudad...</option>
              <option v-for="ciudad in ciudades" :value="ciudad.id">{{ ciudad.name }}</option>
            </select>
                      <label for="ciudades" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ciudad</label>
                      <div v-if="errores.city_id" class="mt-2 font-medium text-sm text-red-600 dark:text-red-500">{{ errores.city_id[0] }}</div>
                  </div>
        </div>
            <div class="grid md:grid-cols-2 md:gap-6 px-6 ">
              <div class="relative z-0 w-full mb-6 group">
                  <input v-model="formulario.name" type="text" name="nombre_Hotel" id="nombre_Hotel" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                  <label for="nombre_Hotel" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del Hotel</label>
                  <div v-if="errores.name" class="mt-2 font-medium text-sm text-red-600 dark:text-red-500">{{ errores.name[0] }}</div>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                  <input v-model="formulario.nit" type="number" name="nit_hotel" id="nit_hotel" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="nit_hotel" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NIT</label>
                  <div v-if="errores.nit" class="mt-2 font-medium text-sm text-red-600 dark:text-red-500">{{ errores.nit[0] }}</div>
              </div>
                
              </div>
              <div class="grid md:grid-cols-2 md:gap-6 px-6 mt-6">
                <div class="relative z-0 w-full mb-6 group">
                    <input v-model="formulario.address" type="text" name="direccion" id="direccion" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="direccion" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Direccion</label>
                    <div v-if="errores.address" class="mt-2 font-medium text-sm text-red-600 dark:text-red-500">{{ errores.address[0] }}</div>
                </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input v-model="formulario.num_rooms" type="number" name="num_Hab" id="num_Hab" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="num_Hab" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">N° Habitaciones</label>
                    <div v-if="errores.num_rooms" class="mt-2 font-medium text-sm text-red-600 dark:text-red-500">{{ errores.num_rooms[0] }}</div>
                </div>
              </div>
              <div class="flex justify-center content-center">
                <button @click="enviar()" class="mt-6 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">crear hotel</button>
              </div>
               
    </div>    
    </template>
<!-- 
<script setup>

import Swal from 'sweetalert2'

import { ref, onMounted } from 'vue';
import axios from "axios";

const errores = ref([])
const ciudades = ref([])

const formulario = ref({
    'city_id': null,
    'name': null,
    'nit': null,
    'address': null,
    'num_rooms': null
});


onMounted(() => {
    axios.get('http://146.190.32.176/diplomado/api/cities')
        .then(function (response) {
            console.log(response.data)
            ciudades.value = response.data
        })
        .catch(function (error) {
            console.log(error)
        })
})

function enviar() {
    axios.post('http://146.190.32.176/diplomado/api/hotels', formulario.value)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            errores.value = error.response.data.errors
        });
        Swal.fire({
        title: '¡Hotel creado con exito!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })
}
</script> -->