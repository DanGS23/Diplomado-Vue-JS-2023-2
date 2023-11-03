import { createRouter, createWebHistory } from 'vue-router'

import crearH from '../views/Hotel/crearH.vue'
import listaH from '../views/Hotel/listaH.vue'
import detallesH from '../views/Hotel/detallesH.vue'
import editarH from '../views/Hotel/editarH.vue'
import dashboard from '../components/dashboard.vue'

// Habitaciones con routes

import crearHab from '../views/Habitaciones/crearHab.vue'
import listaHab from '../views/Habitaciones/listaHab.vue'
import editarHab from '../views/Habitaciones/editarHab.vue'
import detallesHab from '../views/Habitaciones/detallesHab.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
        path: '/crear-Hotel',
        name: 'crear-Hotel',
        component: crearH
    },
    {
        path: '/lista-Hotel',
        name: 'lista-Hotel',
        component: listaH
    },
    {
        path: '/detalle-Hotel',
        name: 'detalle-Hotel',
        component: detallesH
    },
    {
      path: '/editar-Hotel',
      name: 'editar-Hotel',
      component: editarH
    },
    {
      path: '/crearHab',
      name: 'crearHab',
      component: crearHab
    },  
    {
      path: '/listaHab',
      name: 'listaHab',
      component: listaHab
    },
    {
      path: '/editarHab',
      name: 'editarHab',
      component: editarHab
    },
    {
      path: '/detallesHab',
      name: 'detallesHab',
      component: detallesHab
    },
  ]  
})

export default router
