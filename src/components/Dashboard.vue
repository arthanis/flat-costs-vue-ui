<template>
  <div>
    <h4 class="mb-3">
      Categories
    </h4>

    <table v-if="categories" class="table table-bordered table-striped">
      <thead>
        <th>ID</th>
        <th>Name</th>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories" :key="index">
          <td>
            {{ category.id }}
          </td>
          <td>
            {{ category.name }}
          </td>
        </tr>
      </tbody>
    </table>

    <h4 class="mb-3">
      Costs
    </h4>
    <table v-if="costs" class="table table-bordered table-striped">
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
import { mapGetters } from 'vuex';
import API from '@/mixins/api';

export default {
  name: 'Dashboard',
  mixins: [API],
  data() {
    return {
      costs: [],
      categories: [],
    };
  },
  computed: {
    ...mapGetters(['config']),
  },
  mounted() {
    const { entities } = this.$store.getters.config;

    Object.keys(entities).forEach((entity) => {
      this.axios.get(`${this.baseURL}/${entity}`)
        .then((res) => {
          this[entity] = res.data;
        });
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
