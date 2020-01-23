import Vue from 'vue';
import Router from 'vue-router';
import Colleges from '@/views/Colleges';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Colleges',
      component: Colleges
    }
  ]
});
