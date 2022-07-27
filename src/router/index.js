import Vue from 'vue';
import VueRouter from 'vue-router';
import TheHome from '@/views/TheHome.vue';
import TheProduct from '@/views/TheProduct.vue';
import TheLogin from '@/views/TheLogin.vue';
import TheUser from '@/views/usuario/TheUser.vue';
import UserProducts from '@/views/usuario/UserProducts.vue';
import UserEdit from '@/views/usuario/UserEdit.vue';
import UserBuy from '@/views/usuario/UserBuy.vue';
import UserSale from '@/views/usuario/UserSale.vue';

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
    {
      path: '/TheUser',
      component: TheUser,
      children: [
        {
          path: '',
          name: 'TheUser',
          component: UserProducts,
        },
        {
          path: '/UserBuy',
          name: 'UserBuy',
          component: UserBuy,
        },
        {
          path: '/UserSale',
          name: 'UserSale',
          component: UserSale,
        },
        {
          path: '/UserEdit',
          name: 'UserEdit',
          component: UserEdit,
        },
      ],
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});
