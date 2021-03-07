<template>
  <div>
    <div class="d-flex justify-content-end mb-4">
      <router-link :to="{ path: `/${entity}/add` }" class="btn btn-primary">
        Add new
      </router-link>
    </div>

    <table class="table table-bordered table-striped" v-if="data.length">
      <thead>
        <th
          v-for="(column, index) in columns"
          :key="index"
          :class="`col col-${column}`"
          >
          {{ column }}
        </th>
        <th class="col col-actions">Actions</th>
      </thead>
      <tbody>
        <tr
          v-for="(rowData, rowIndex) in data"
          :key="rowIndex"
        >
          <td
            :class="`col col-${column}`"
            v-for="(column, columnIndex) in columns"
            :key="columnIndex"
          >
            {{ rowData[column]}}
          </td>
          <td class="col col-actions">
            <div class="d-flex">
              <button
                class="btn btn-outline-primary"
                @click="onEdit(rowData.id)"
                :id="`${entity}_${rowData.id}`"
              >
                Edit
              </button>
              <button
                class="btn btn-danger ms-2"
                @click="onDelete(rowData.id)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <div class="alert alert-info">There is no data in {{ entity}}(s).</div>
    </div>
  </div>
</template>

<script>
import API from '@/mixins/api';

export default {
  name: 'Datatable',
  props: {
    data: Array,
    columns: Array,
  },
  emits: ['updateData'],
  mixins: [API],
  data() {
    return {
      entity: this.$route.name.toLowerCase(),
    };
  },
  methods: {
    onEdit(id) {
      this.$router.push({ path: `/${this.entity}/edit/${id}` });
    },
    onDelete(id) {
      this.deleteData(`${this.baseURL}/${this.entity}/${id}`)
        .then(() => {
          this.$emit('updateData');
        });
    },
  },
};
</script>
