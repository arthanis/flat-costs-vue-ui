<template>
  <div>
    <Header />

    <main class="container py-5">
      <router-view/>
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
};
</script>

<style lang='scss'>
  @import 'assets/scss/app';
</style>
