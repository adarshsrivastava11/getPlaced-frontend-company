import Vue from 'vue';
import Router from 'vue-router';
import Colleges from '@/views/Dashboard/College/Colleges';
import JAFs from '@/views/Dashboard/JAF/JAFs';
import Dashboard from '@/views/Dashboard/Dashboard';

import Landing from '@/views/Landing/Landing';
import Intro from '@/views/Landing/Intro';
import Login from '@/views/Landing/Login';
import Signup from '@/views/Landing/Signup';

import CollegeStudents from '@/views/Dashboard/College/CollegeStudents';
import CollegeLanding from '@/views/Dashboard/College/CollegeLanding';
import CollegeDetails from '@/views/Dashboard/College/CollegeDetails';

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
