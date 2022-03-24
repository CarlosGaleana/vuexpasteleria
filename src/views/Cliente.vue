<template>
  <div class="home">
    <img alt="Log" src="../assets/logo.jpg" class="logo">
  </div>
  <h1> Pedido LA PÂTISSERIE</h1>
  <Datos/>
  <Descripcion/>
  <Sabores/>
  <Adornos2/>
  <button @click="Pedido" class="botones">Enviar</button>
  <hr>
  <hr>
  <Contacto/>
</template>

<script>
import Datos from "../components/Datos.vue"
import Descripcion from "../components/Descripcion.vue"
import Sabores from "../components/Sabores.vue"
import Adornos2 from "../components/Adornos2.vue"
import Contacto from "../components/Contacto.vue"
export default {
  name: 'Pasteleria',
  components: {
    Datos,
    Descripcion,
    Sabores,
    Adornos2,
    Contacto
  },
    methods:{
        Pedido(){
            this.$store.dispatch('PedidoAction');
        }
    }
}
</script>
<style>
.Datos{
  font-weight: bold;
  color: #2c3e50;
  text-align: left;
  background-color: #daa7ab;
}
.botones{
  border-radius: 10px;
}
</style>