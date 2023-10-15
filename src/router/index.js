import { createRouter, createWebHistory } from 'vue-router'

import crearH from '../views/Hotel/crearH.vue'
import listaH from '../views/Hotel/listaH.vue'
import detallesH from '../views/Hotel/detallesH.vue'
import editarH from '../views/Hotel/editarH.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ]  
})

export default router
