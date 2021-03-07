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
      this.axios.post(url, data)
        .then()
        .catch((error) => {
          console.log(error);
        });
    },
    updateData(url, data) {
      this.axios.put(url, data)
        .then()
        .catch((error) => {
          console.log(error);
        });
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
        })
        .catch((error) => {
          console.log(error);
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
