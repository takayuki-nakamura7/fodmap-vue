<template>
  <Header />
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script>
import Header from '@/views/presentationals/template/partials/header.vue';

export default {
  components: {
    Header,
  },
};
</script>
