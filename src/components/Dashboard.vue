<template>
  <div>
    <h1 class="mb-5">Dashboard</h1>
    <h4 class="mb-3">Categories</h4>
    <table class="table table-bordered table-striped" v-if="categories">
      <thead>
        <th>ID</th>
        <th>Name</th>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories" :key="index">
        <td>{{ category.id }}</td>
        <td>{{ category.name }}</td>
      </tr>
      </tbody>
    </table>

    <h4 class="mb-3">Costs</h4>
    <table class="table table-bordered table-striped" v-if="costs">
      <thead>
        <th>ID</th>
        <th>Category</th>
        <th>Date</th>
        <th>Value</th>
      </thead>
      <tbody>
        <tr v-for="(cost, index) in costs" :key="index">
        <td>{{ cost.id }}</td>
        <td>{{ getCategoryNameById(cost.categoryId) }}</td>
        <td>{{ cost.date }}</td>
        <td>{{ cost.value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import API from '@/mixins/api';

export default {
  name: 'Dashboard',
  mixins: [API],
  data() {
    return {
      categories: [],
      costs: [],
    };
  },
  mounted() {
    this.getData(`${this.baseURL}/categories`)
      .then((res) => {
        this.categories = res.data;
      });

    this.axios.get(`${this.baseURL}/costs`)
      .then((res) => {
        this.costs = res.data;
      });
  },
  methods: {
    getCategoryNameById(id) {
      const category = this.categories.find((item) => item.id === id);

      if (!category) {
        return 'No category';
      }

      return category.name;
    },
  },
};
</script>
