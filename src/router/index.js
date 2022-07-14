import Vue from 'vue';
import VueRouter from 'vue-router';
import TheHome from '@/views/TheHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TheHome',
    component: TheHome,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
