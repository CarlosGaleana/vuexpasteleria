<template>
<div class="Datos">
    <hr>
    <div style="position:relative;left:5%">
    <label for="Nombre">Ingresa tu nombre:</label><br>
    <input type="text" v-model="Nombre" placeholder="Nombre"><br><br>

    <label for="tel1">Número de contacto:</label><br>
    <input type="tel" v-model="tel1" maxlength="10" placeholder="Número"><br><br>

    <label for="correo1">Correo electrónico:</label><br>
    <input type="email" v-model="correo1" placeholder="ejemplo@correo.com"><br><br>
    </div>
    <button @click="AñadirNombre">Añadir Datos</button>
    <hr>
</div>
</template>
<script>
export default{
    name:'Datos',
    data(){
        return{
        Nombre:'',
        tel1:'',
        correo1:'',
        }
    },
    methods:{
        AñadirNombre(){
            this.$store.state.Nombre =this.Nombre;
            this.Nombre='';

            this.$store.state.Telefono =this.tel1;
            this.tel1='';

            this.$store.state.Correo =this.correo1;
            this.$store.dispatch('AñadirNombreAction');
            this.correo1='';
        }
    }
}
</script>


