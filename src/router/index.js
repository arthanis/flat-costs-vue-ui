import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/Categories.vue'),
  },
  {
    path: '/categories/add',
    name: 'Add category',
    component: () => import('../views/Form.vue'),
  },
  {
    path: '/categories/edit/:id',
    name: 'Edit category',
    component: () => import('../views/Form.vue'),
  },
  {
    path: '/costs',
    name: 'Costs',
    component: () => import('../views/Costs.vue'),
  },
  {
    path: '/costs/add',
    name: 'Add cost',
    component: () => import('../views/Form.vue'),
  },
  {
    path: '/costs/edit/:id',
    name: 'Edit cost',
    component: () => import('../views/Form.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
