<template>
  <div>
    <DataTable
      :columns="getColumns(entity)"
      :data="categories"
      :entity="entity"
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
  components: {
    DataTable,
  },
  mixins: [API, EntitiesMixin],
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
