<script setup>
import { ref } from 'vue'
import { RouterView } from "vue-router";

import setHeader from "./components/header.vue";
import setFooter from "./components/footer.vue";
import setBackToTop from "./components/backTop.vue";

const use_logo = ref("./src/assets/coffee.webp");

</script>

<template>
  <setHeader :use_logo='use_logo'/>
  <main>
    <routerView />
  </main>
  <setFooter :use_logo='use_logo'/>
  <setBackToTop />
</template>

<style lang="scss" scoped>
main {
  
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
