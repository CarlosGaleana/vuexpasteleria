<template>
  <div class="home">
    <img alt="Log" src="../assets/logo.jpg" class="logo">
  </div>
  <h1> Administración LA PÂTISSERIE</h1>
  <Tabla/>
  <Tabla1/>
  <Pedidos/>
  <Contacto/>

</template>

<script>
import Tabla from "../components/Tabla.vue"
import Tabla1 from "../components/tabla1.vue"
import Pedidos from "../components/Pedidos.vue"
import Contacto from "../components/Contacto.vue"
export default {
  name: 'Pedido',
  components:{
    Tabla,
    Tabla1,
    Pedidos,
    Contacto,
  }
}
</script>
<style>

</style>
