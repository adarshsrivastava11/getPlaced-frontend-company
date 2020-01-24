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
import CollegeLanding from '@/views/CollegeLanding';
import CollegeDetails from '@/views/CollegeDetails';

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
                component: Colleges,
            },
            {
                path: 'college/:CID/:NAME',
                component: CollegeLanding,
                children: [
                    {
                        path: '',
                        component: CollegeDetails
                    },
                    {
                        path: 'students',
                        component: CollegeStudents
                    }
                ]
            },
            {
                path: 'jafs',
                component: JAFs
            },
            {
                path: 'jaf/:JAFID/:NAME',
                component: JAFLanding,
                children: [
                    {
                        path: '',
                        component: JAFDetails
                    },
                    {
                        path: 'applicants',
                        component: JAFApplicants
                    }
                ]
            }
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
