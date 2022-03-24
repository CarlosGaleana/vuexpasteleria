<template>
<div class="Datos">
    <hr>
    <p>Sabor del pastel (puedes elegir más de uno):</p>
        <input type="checkbox" v-model="Sabor" value="Canoli">
        <label for="Canoli">Canoli Cake</label><br>

        <input type="checkbox" v-model="Sabor" value="Caramel">
        <label for="Caramel">Caramel Cake</label><br>

        <input type="checkbox" v-model="Sabor" value="Carrot">
        <label for="Carrot">Carrot Cake</label><br>

        <input type="checkbox" v-model="Sabor" value="ChocolateMousse">
        <label for="ChocolateMousse">Chocolate Mousse Cake</label><br>

        <input type="checkbox" v-model="Sabor" value="ChocolateSuicide">
        <label for="ChocolateSuicide">Chocolate Suicide</label><br>

        <input type="checkbox" v-model="Sabor" value="Coca-Cola">
        <label for="Coca-Cola">Coca-Cola Cake</label><br>
        
        <input type="checkbox" v-model="Sabor" value="Coconut">
        <label for="Coconut">Coconut Cake</label><br>
        
        <input type="checkbox" v-model="Sabor" value="ByChocolate">
        <label for="ByChocolate">Death By Chocolate</label><br>

        <input type="checkbox" v-model="Sabor" value="GermanChocolate">
        <label for="GermanChocolate">German Chocolate Cake</label><br><br>
        <button @click="AñadirSabor">Añadir Sabores</button>
        <hr>
</div>
</template>
<script>
export default{
    name:'Sabores',
    data(){
        return{
        Sabor:[],
        }
    },
    methods:{
        AñadirSabor(){
            this.$store.state.Sabor =this.Sabor;
            this.$store.dispatch('AñadirSaborAction');
            this.Sabor=[];
        }
    }
}
</script>