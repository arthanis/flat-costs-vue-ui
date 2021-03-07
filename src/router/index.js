import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../views/Categories.vue'),
  },
  {
    path: '/categories/add',
    name: 'add_category',
    component: () => import('../views/Form.vue'),
  },
  {
    path: '/categories/edit/:id',
    name: 'edit_category',
    component: () => import('../views/Form.vue'),
  },
  {
    path: '/costs',
    name: 'costs',
    component: () => import('../views/Costs.vue'),
  },
  {
    path: '/costs/add',
    name: 'add_cost',
    component: () => import('../views/Form.vue'),
  },
  {
    path: '/costs/edit/:id',
    name: 'edit_cost',
    component: () => import('../views/Form.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
