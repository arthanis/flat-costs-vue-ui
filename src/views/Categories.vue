<template>
  <div>
    <DataTable
      :data="categories"
      :columns="getColumns(categories)"
      @updateData="getEntityData(entity)"
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
    this.getEntityData(this.entity);
  },
};
</script>
