<template>
  <div>
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <form
          v-if="config.columns"
          class="form"
          @submit.prevent="onSubmit"
        >

          <div class="mb-3" v-for="(column, index) in config.columns[entity]" :key="index">
            <div class="row">
              <label
                class="col-sm-3 col-form-label"
                :for="`${column.name}_${index}`"
              >
                {{ (column?.options?.belongsTo) ? column.options.belongsToName : column.name }}
              </label>
              <div class="col-sm-9">
                <select
                  v-if="column.type === 'select'"
                  class="form-select"
                  v-model="formData[column.name]"
                >
                  <option
                    v-for="(option, optionIndex) in getEntityData(column.options.belongsTo, true)"
                    :key="optionIndex"
                    :value="option.id"
                  >
                    {{ option.name }}
                  </option>
                </select>
                <input
                  v-else
                  :placeholder="column.name"
                  :type="column.type"
                  :id="`${column.name}_${index}`"
                  class="form-control"
                  v-model="formData[column.name]"
                  />
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <div class="col-sm-9 offset-sm-3">
                <button class="btn btn-primary">{{ $route.meta.title }} </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import API from '@/mixins/api';

export default {
  name: 'Form',
  mixins: [API],
  computed: {
    ...mapGetters(['config', 'categories']),
    entity() {
      return this.$route.path.split('/')[1];
    },
    url() {
      return this.$route.name.includes('add')
        ? `${this.baseURL}/${this.entity}`
        : `${this.baseURL}/${this.entity}/${this.$route.params.id}`;
    },
  },
  data() {
    return {
      isAddPage: this.$route.name.includes('add'),
      formData: {},
    };
  },
  mounted() {
    if (!this.isAddPage) {
      this.getData(this.url)
        .then((res) => {
          this.formData = res.data;
        });
    }
  },
  methods: {
    onSubmit(event) {
      if (this.isAddPage) {
        this.postData(this.url, this.formData);
        event.target.reset();
        this.formData = {};
      } else {
        this.updateData(this.url, this.formData);
      }
    },
  },
};
</script>
