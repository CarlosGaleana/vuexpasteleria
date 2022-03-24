import { createStore } from 'vuex'

export default createStore({
  state: {
    Nombres:[],
    Telefonos:[],
    Correos:[],
    Descripciones:[],
    Sabores:[],
    Adornos:[],

    Nombre:null,
    Telefono:null,
    Correo:null,
    Descripcion:null,
    Sabor:null,
    Adorno:null,
    
    Vector:[],
    indi:null,
  },
  getters: {
  },
  mutations: {
    AñadirNombre(state){
      state.Nombres = [state.Nombre,...state.Nombres];
      state.Telefonos = [state.Telefono,...state.Telefonos];
      state.Correos = [state.Correo,...state.Correos];
    },
    AñadirDescripcion(state){
      state.Descripciones = [state.Descripcion,...state.Descripciones];
    },
    AñadirSabor(state){
      state.Sabores = [state.Sabor,...state.Sabores];
    },
    AñadirAdornos(state){
      state.Adornos = [state.Adorno,...state.Adornos];
    },
    Pedido(state){
      state.Vector =[1,...state.Vector];
    }
  },
  actions: {
    AñadirNombreAction( context ){
      context.commit('AñadirNombre');
    },
    AñadirDescripcionAction( context ){
      context.commit('AñadirDescripcion');
    },
    AñadirSaborAction( context ){
      context.commit('AñadirSabor');
    },
    AñadirAdornosAction( context ){
      context.commit('AñadirAdornos');
    },
    PedidoAction(context){
      context.commit('Pedido');
    }
  },
  modules: {
  }
})
