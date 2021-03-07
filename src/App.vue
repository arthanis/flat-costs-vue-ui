<template>
  <div>
    <Header />

    <main class="container py-5">
      <h1 class="mb-5">{{ getTitle }}</h1>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
    getTitle() {
      return this.$route.meta.title;
    },
  },
};
</script>

<style lang='scss'>
  @import 'assets/scss/app';
</style>
