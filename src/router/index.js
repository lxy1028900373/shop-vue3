import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/home';
import LoginRouters from './login';

const routes = [{
    name: 'home',
    path: '/home',
    component: Home
  },
  ...LoginRouters
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;