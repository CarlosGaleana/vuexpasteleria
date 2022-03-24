<template>
<h2>Pedidos:</h2>
    <table style="position:relative; left:8%">
        <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo electrónico</th>
            <th>Descripción</th>
            <th>Sabor</th>
            <th>Adornos</th>
        </tr>
        <tr v-for="(indi,index) in $store.state.Vector" :key="index">
            <td>{{ $store.state.Nombres[index] }}</td>
            <td>{{ $store.state.Telefonos[index] }}</td>
            <td>{{ $store.state.Correos[index] }}</td>
            <td>{{ $store.state.Descripciones[index] }}</td>
            <td>{{ $store.state.Sabores[index] }}</td>
            <td>{{ $store.state.Adornos[index] }}</td>
        </tr>
    </table>
</template>
<script>

export default{
    name:'Pedidos'
}
</script>
<style scoped>
table {
   width: 90%;
}

</style>
