<template>
  <div class="home">
    <img alt="Log" src="../assets/logo.jpg" class="logo">
  </div>
      <Pasteles/>
    <Adornos/>
    <Contacto/>
</template>

<script>
import Pasteles from "../components/Pasteles.vue"
import Adornos from "../components/Adornos.vue"
import Contacto from "../components/Contacto.vue"
export default {
  name: 'Pasteleria',
  components: {
    Pasteles,
    Adornos,
    Contacto
  }
}
</script>
<style>
.logo{
  width: 15%;
  height: 15%;
  border-radius: 50%;
  border: 2px rgb(51, 51, 51) solid;
  margin-bottom: 1rem;
  
}
.Pasteles{
  color: #2c3e50;
  text-align: left;
  font-weight:bold;
  background-color: #daa7ab;
}
.Adornos{
  color: #2c3e50;
  background-color: #daa7ab;
  font-weight:bold;
}
.Contacto{
  color: #2c3e50;
  background-color: #daa7ab;
  font-weight:bold;
}
</style>