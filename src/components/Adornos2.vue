<template>
<div class="Datos">
    <hr>
    <p>Adornos (puedes seleccionar más de uno):</p>
        <input type="checkbox" v-model="Adorno" value="Betun">
        <label for="Betun">Betún</label><br>

        <input type="checkbox" v-model="Adorno"  value="Cumpleaños">
        <label for="Cumpleaños">Cumpleaños</label><br>

        <input type="checkbox" v-model="Adorno"  value="Boda">
        <label for="Boda">Boda</label><br>

        <input type="checkbox" v-model="Adorno"  value="Flores">
        <label for="Flores">Flores</label><br>

        <input type="checkbox" v-model="Adorno"  value="Arcoiris">
        <label for="Arcoiris">Arcoiris</label><br>

        <input type="checkbox" v-model="Adorno"  value="Unicornio">
        <label for="Unicornio">Unicornio</label><br><br>
        <button @click="AñadirAdornos">Añadir Adornos</button>
    <hr>
</div>
</template>
<script>
export default{
    name:'Adornos2',
    data(){
        return{
        Adorno:[],
        }
    },
    methods:{
        AñadirAdornos(){
            this.$store.state.Adorno =this.Adorno;
            this.$store.dispatch('AñadirAdornosAction');
            this.Adorno=[];
        }
    }
}
</script>