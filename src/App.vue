<script setup>
import { RouterView } from "vue-router";
import setHeader from "./components/header.vue";
</script>

<template>
  <setHeader />
  <main>
    <routerView />
  </main>
</template>

<style scoped>
main {
  margin-top: 1rem;
}
</style>
