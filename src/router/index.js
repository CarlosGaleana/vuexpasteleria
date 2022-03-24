import { createRouter, createWebHashHistory } from 'vue-router'
import Pasteleria from '../views/Pasteleria.vue'
import Cliente from '../views/Cliente.vue'
import Pedido from '../views/Pedido.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Pasteleria
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: Cliente
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: Pedido
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
