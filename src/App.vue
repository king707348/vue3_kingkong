<script setup>
import { RouterView } from "vue-router";

import setHeader from "./components/header.vue";
import setFooter from "./components/footer.vue";
import setBackToTop from "./components/backTop.vue";

</script>

<template>
  <setHeader />
  <main>
    <routerView />
  </main>
  <setFooter />
  <setBackToTop />
</template>

<style lang="scss" scoped>
main {
  margin-top: 1rem;
}
:deep {
  .el-button {
    span {
      position: relative;
      padding: 0.8rem 1rem;
      font-weight: 500;
      overflow: hidden;
      font-size: 18px;
    }
  }
}
</style>
