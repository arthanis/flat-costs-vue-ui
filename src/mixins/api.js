export default {
  data() {
    return {
      baseURL: process.env.VUE_APP_API_URL,
    };
  },
  methods: {
    getData(url) {
      return this.axios.get(url);
    },
    postData(url, data) {
      return { url, data };
    },
    updateData() {

    },
    deleteData(url) {
      return this.axios.delete(url);
    },
    getEntityData(entity, cached) {
      if (cached) {
        return this.$store.getters[entity];
      }

      this[entity] = [];

      return this.getData(`${this.baseURL}/${entity}`)
        .then((res) => {
          this[entity] = res.data;
        });
    },
    getColumns(data) {
      if (!data.length) {
        return [];
      }

      return Object.keys(data[0]).filter((key) => !['createdAt', 'updatedAt'].includes(key));
    },
  },
};
