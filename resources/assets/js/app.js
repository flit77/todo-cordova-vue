require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';

let Todo = require('./components/Todo.vue');

const routes = [{ path: '/tasks', component: Todo }];

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

Vue.component('navigation', require('./components/Navigation.vue'));
Vue.component('create-task', require('./components/CreateTask.vue'));

window.onload = function() {
  const app = new Vue({
    router
  }).$mount('#app');
};

router.push('/tasks');
