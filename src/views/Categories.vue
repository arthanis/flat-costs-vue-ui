<template>
  <div>
    <DataTable
      :data="categories"
      :columns="getColumns(categories)"
      @updateData="getCategories(entity)"
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
      entity: 'categories',
      categories: [],
    };
  },
  mounted() {
    this.getEntityData(this.entity, false);
  },
  methods: {
    getCategories(entity) {
      this.getData(`${this.baseURL}/${entity}`)
        .then((res) => {
          this.categories = res.data;
          this.$store.commit('setCategories', res.data);
        });
    },
  },
};
</script>
