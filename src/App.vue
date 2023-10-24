<script>

import { RouterLink, RouterView } from 'vue-router'
// import sidebar from './components/sidebar.vue'
// import navbar from './components/navbar.vue'
import { ref } from 'vue';
export default {
    setup() {
        const showSidebar = ref(false);
        
        return {
            showSidebar
        }
    }
}

</script>

<template>

  <!-- Header -->
  <nav class="fixed top-0 z-50 w-full bg-cyan-700 border-b border-gray-400 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button @click="showSidebar = !showSidebar" data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-900 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
               <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>
           </button>
          <a href="#" class="flex ml-2 md:mr-24">
            <img class="border rounded-full bg-red-200 h-10 mr-3" src="https://img.icons8.com/emoji/48/hotel-emoji.png" alt="FlowBite Logo" />
            <span class="pl-2 self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">HotelCO</span>
          </a>
        </div>
        
        <div class="flex items-center">
            <div class="flex items-center ml-3">
              <div>
                <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </nav>
  <aside   id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-cyan-100 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" :class="{'relative translate-x-0':showSidebar}" aria-label="Sidebar">
 <div class="h-full overflow-y-auto bg-blue dark:bg-gray-800">
      <ul class="space-y-2 font-medium p-4 ">
         <li>
             <router-link to="/dashboard" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-white transition duration-200 " >
                 <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                   </svg>
                   <span class= "group-hover:text-white">Dashboard</span>
             </router-link>
         </li>
         <li>
            <router-link to="/crear-Hotel" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-white transition duration-200">
                 <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                   <span class= "group-hover:text-white">Crear Hotel</span>
             </router-link>
         </li>
         <li>
             <router-link to="/lista-Hotel" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-white transition duration-200">
                 <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                   </svg>
                   <span class=" group-hover:text-white">Lista Hotel</span>
             </router-link>
         </li>
         <!-- <li>
             <router-link to="/editar-Hotel" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-white transition duration-200">
                 <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                   </svg>                          
                   <span class="group-hover:text-white">Editar</span>
             </router-link>
         </li> -->
        </ul>
     </div>
    </aside>

  <!--Body-->
  
  <article class="px-8 py-8 sm:ml-64 mt-14">

    <router-view></router-view>
 
  </article>





  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
