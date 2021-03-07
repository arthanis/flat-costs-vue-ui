import Home from '../views/Home.vue';
import categories from './routes/categories';
import costs from './routes/costs';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  ...categories,
  ...costs,
];
