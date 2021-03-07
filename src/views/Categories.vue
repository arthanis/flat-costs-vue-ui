<template>
  <div>
    <h1 class="mb-5">Categories</h1>

    <DataTable
      :data="categories"
      :columns="getColumns(categories)"
      @updateData="getCategories"
    />
  </div>
</template>

<script>
import API from '@/mixins/api';
import DataTable from '@/components/Datatable.vue';

export default {
  name: 'Categories',
  mixins: [API],
  components: {
    DataTable,
  },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      this.getData(`${this.baseURL}/categories`)
        .then((res) => {
          this.categories = res.data;
        });
    },
  },
};
</script>
