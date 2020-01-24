import Vue from 'vue';
import Router from 'vue-router';
import Colleges from '@/views/Colleges';
import JAFs from '@/views/JAFs';
import Dashboard from '@/views/Dashboard';

import Landing from '@/views/Landing';
import Intro from '@/views/Intro';
import Login from '@/views/Login';
import Signup from '@/views/Signup';

import CollegeStudents from '@/views/CollegeStudents';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        children: [
            {
                path: 'colleges',
                component: Colleges
            },
            {
                path: 'jafs',
                component: JAFs
            },
            {
                path: 'college-students/:CID/:UID',
                component: CollegeStudents
            },
        ]
    },
    

    {
        path: '/',
        name: 'Landing',
        component: Landing,
        children: [
            {
                path: '',
                component: Intro
            },
            {
                path: 'login',
                component: Login
            },
            {
                path: 'signup',
                component: Signup
            }
        ]
    }
  ]
});
