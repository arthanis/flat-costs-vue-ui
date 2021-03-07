export default [
  {
    path: '/categories',
    name: 'categories',
    meta: {
      title: 'Categories',
    },
    component: () => import('@/views/Categories.vue'),
  },
  {
    path: '/categories/add',
    name: 'add_category',
    meta: {
      title: 'Add category',
    },
    component: () => import('@/views/Form.vue'),
  },
  {
    path: '/categories/edit/:id',
    name: 'edit_category',
    meta: {
      title: 'Edit category',
    },
    component: () => import('@/views/Form.vue'),
  },
];
