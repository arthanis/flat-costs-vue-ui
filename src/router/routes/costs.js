export default [
  {
    path: '/costs',
    name: 'costs',
    meta: {
      title: 'Costs',
    },
    component: () => import('@/views/Costs.vue'),
  },
  {
    path: '/costs/add',
    name: 'add_cost',
    meta: {
      title: 'Add cost',
    },
    component: () => import('@/views/Form.vue'),
  },
  {
    path: '/costs/edit/:id',
    name: 'edit_cost',
    meta: {
      title: 'Edit cost',
    },
    component: () => import('@/views/Form.vue'),
  },
];
