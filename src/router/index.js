import Vue from 'vue';
import VueRouter from 'vue-router';
import TheHome from '@/views/TheHome.vue';
import TheProduct from '@/views/TheProduct.vue';
import TheLogin from '@/views/TheLogin.vue';

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome,
    },
    {
      path: '/TheProduct/:id',
      name: 'TheProduct',
      component: TheProduct,
      props: true,
    },
    {
      path: '/TheLogin',
      name: 'TheLogin',
      component: TheLogin,
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});
