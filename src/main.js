import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import LoadingPage from '@/components/LoadingPage.vue';

Vue.config.productionTip = false;

Vue.component('LoadingPage', LoadingPage);

Vue.filter('numberprice', (valor) => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  } else {
    return '';
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
