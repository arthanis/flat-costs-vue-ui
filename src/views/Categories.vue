<template>
  <div>
    <DataTable
      :data="categories"
      :columns="getColumns(categories)"
      @updateData="fetchEntity(entity)"
    />
  </div>
</template>

<script>
import API from '@/mixins/api';
import EntitiesMixin from '@/mixins/entities';
import DataTable from '@/components/Datatable.vue';

export default {
  name: 'Categories',
  mixins: [API, EntitiesMixin],
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
    this.fetchEntity(this.entity);
  },
};
</script>
