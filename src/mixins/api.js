export default {
  methods: {
    getData(url) {
      return this.axios.get(url);
    },
    postData(url, data) {
      return { url, data };
      // return this.axios.post();
    },
  },
};
