<template>
  <div>
    <alert :messages="messages" />

    <div
      v-if="isInitialized"
      class="row pt-5">
      <div class="col-lg-8 offset-lg-2">
        <form
          v-if="config.entities[entity].columns"
          class="form"
          @submit.prevent="onSubmit">
          <div
            v-for="(column, index) in config.entities[entity].columns"
            :key="index"
            class="mb-3">
            <div class="row">
              <label
                class="col-sm-3 col-form-label"
                :for="`${column.name}_${index}`">
                {{ (column?.options?.belongsTo) ? column.options.belongsToName : column.name }}
              </label>
              <div class="col-sm-9">
                <select
                  v-if="column.type === 'select'"
                  v-model="formData[column.name]"
                  class="form-select"
                  required>
                  <option
                    v-for="(option, optionIndex) in getDependentEntity(column?.options?.belongsTo)"
                    :key="optionIndex"
                    :value="option.id">
                    {{ option.name }}
                  </option>
                </select>
                <date-picker
                  v-else-if="column.type === 'date'"
                  v-model="formData[column.name]"
                  value-type="format"
                  input-class="form-control" />
                <input
                  v-else
                  :id="`${column.name}_${index}`"
                  v-model="formData[column.name]"
                  :type="column.type"
                  :placeholder="column.name"
                  class="form-control"
                  required>
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <div class="col-sm-9 offset-sm-3">
                <button class="btn btn-primary">
                  {{ $route.meta.title }}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import { mapGetters } from 'vuex';
import API from '@/mixins/api';
import EntitiesMixin from '@/mixins/entities';
import Alert from '@/components/Alert.vue';

export default {
  name: 'Form',
  components: { DatePicker, Alert },
  mixins: [API, EntitiesMixin],
  data() {
    return {
      isAddPage: this.$route.name.includes('add'),
      formData: {},
      entities: [],
      isInitialized: false,
    };
  },
  computed: {
    ...mapGetters(['config']),
    entity() {
      return this.$route.path.split('/')[1];
    },
    url() {
      return this.$route.name.includes('add')
        ? `${this.baseURL}/${this.entity}`
        : `${this.baseURL}/${this.entity}/${this.$route.params.id}`;
    },
  },
  mounted() {
    this.setDependentEntities();
    this.isInitialized = true;

    if (!this.isAddPage) {
      this.getData(this.url)
        .then((res) => {
          this.formData = res.data;
        });
    }
  },
  methods: {
    async onSubmit(event) {
      if (this.isAddPage) {
        await this.postData(this.url, this.formData);

        event.target.reset();
        this.formData = {};
      } else {
        await this.updateData(this.url, this.formData);
      }
    },
  },
};
</script>
