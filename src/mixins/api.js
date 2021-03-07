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
    deleteData(url) {
      return this.axios.delete(url);
    },
    getEntityData() {
      this[this.entity] = [];
      this.getData(`${this.baseURL}/${this.entity}`)
        .then((res) => {
          this[this.entity] = res.data;
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
