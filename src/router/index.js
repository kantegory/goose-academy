import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Signin from '@/components/Auth/Signin'
import Signup from '@/components/Auth/Signup'
import Course from '@/components/Course'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    }
  ]
})
