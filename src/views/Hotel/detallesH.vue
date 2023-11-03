<template>
    <div class="rounded-lg bg-slate-300 shadow-xl ">
      <div class="grid md:grid-cols-2">
        <div class="m-4">
                <img class="w-full h-80 rounded-lg shadow-xl" src="/src/assets/img/5900_pool_b92df465-0c67-4161-b8bb-67f9fc301094.jpg" alt="">
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
    <br>
    <hr>
    <br>
    <div class="grid md:grid-cols-2 gap-2 mx-2 pb-4 ">
        <div class="flex justify-center items-center bg-gray-100 w-full h-96 shadow-md rounded">
            <canvas id="myChart" class="px-2"></canvas>
        </div>
        <div class="flex justify-center items-center bg-gray-100 w-full h-96 shadow-md rounded">
            <canvas id="myChart2" class="px-2"></canvas>
        </div>
    </div>
    <hr class="ml-4 mr-4 border-2 ">
        <div class="flex justify-between px-8 py-8">
          <router-link to="/lista-Hotel"><button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 uppercase">Regresar</button>
          </router-link>
          <div class="mr-8">
            <router-link to="/crearHab"><button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 uppercase">Agregar Habitacion </button></router-link>

            <router-link to="/listaHab"><button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 uppercase">Listado Habitaciones</button></router-link>
          </div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default{
    mounted(){
        this.renderGraft1();
        this.renderGraft2();
    },
    methods:{
    
    renderGraft1(){
        const ctx= document.getElementById("myChart").getContext("2d");
        const myChart= new Chart(ctx,{
                type:"bar",
                data:{
                    labels:['Sencilla','Junior','Suite'],
                    datasets:[{
                            label:'Tipo de Habitacion',
                            data:[10,15,5],
                            backgroundColor:[
                                'rgb(66, 134, 244,0.5)',
                                'rgb(74, 135, 72,0.5)',
                                'rgb(229, 89, 50,0.5)'
                            ]
                    }]
                },
                options:{
                    scales:{
                        yAxes:[{
                                ticks:{
                                    beginAtZero:true
                                }
                        }]
                    }
                }
            });

         },
         renderGraft2(){
        const ctx = document.getElementById("myChart2").getContext("2d");
        const myChart2 = new Chart(ctx,{
            type:"bar",
            data:{
                labels:['Sencilla','Doble','Tripe','Cuadruple' ],
                datasets:[{
                        label:'Acomodación',
                        data:[10,15,5,9],
                        backgroundColor:[
                            'rgb(66, 134, 244,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)'
                        ]
                }]
            },
            options:{
                scales:{
                    yAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                    }]
                }
            }
        });

    },

    }
}

</script>

<style lang="scss" scoped>

</style>