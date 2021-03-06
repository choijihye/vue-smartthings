import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/sample';

import inputBox from '@/components/inputBox'
// import './src/components/app.css';
import '@/components/app.css';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/inputBox',
      name: 'inputBox',
      component: inputBox
    }
  ]
})
