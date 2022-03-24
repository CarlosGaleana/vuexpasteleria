<template>
<div class="Datos">
    <hr>
    <p>Descripción del pastel:</p>
        <input type="text" v-model="Descripcion" placeholder="Descripción"><br><br>
        <button @click="AñadirDescripcion">Añadir Descripcion</button>
    <hr>
</div>
</template>
<script>
export default{
    name:'Descripcion',
    data(){
        return{
         Descripcion:'',
        }
    },
    methods:{
        AñadirDescripcion(){
            this.$store.state.Descripcion =this.Descripcion;
            this.$store.dispatch('AñadirDescripcionAction');
            this.Descripcion='';
        }
    }
}
</script>

    