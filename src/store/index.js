import { api } from '@/TheServices.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    usuario: {
      id: '',
      nome: '',
      email: '',
      password: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
    user_products: null,
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_USER_PRODUCTS(state, payload) {
      state.user_products = payload;
    },
    ADD_USER_PTODUCTS(state, payload) {
      state.user_products.unshift(payload);
    },
  },
  actions: {
    getUserProducts(context) {
      api.get(`/produto?TheUsef_id=${context.state.usuario.id}`).then((r) => {
        context.commit('UPDATE_USER_PRODUCTS', r.data);
      });
    },
    getUser(context, payload) {
      api.get(`/TheUser/${payload}`).then((r) => {
        context.commit('UPDATE_USER', r.data);
        context.commit('UPDATE_LOGIN', true);
      });
    },
    createUser(context, payload) {
      context.commit('UPDATE_USER', { id: payload.email });
      api.post('/TheUser', payload);
    },
    LogOutUser(context) {
      context.commit('UPDATE_USER', {
        id: '',
        nome: '',
        email: '',
        password: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
      });
      context.commit('UPDATE_LOGIN', false);
    },
  },
  modules: {},
});
