<template>
  <footer class="setfooter">
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <linkList />
  </footer>
</template>

<script setup>
import { ref } from "vue";

import linkList from "./linklist.vue";


const logo = ref("./src/assets/coffee.webp");
const num = ref(0);

</script>

<style lang="scss" scoped>
.setfooter {
  display: flex;
  position: sticky;
  top: 100%;
  border-top: 1px solid green;
  .logo {
    display: flex;
    flex: 2;
    img {
        max-width: 15rem;
        width: 100%;
        margin: auto;
    }
  }
  .links-list {
    flex: 8;
    margin: auto;
    :deep {
      .ulist {
        display: flex;
        justify-content: center;
        gap: 2rem;
      }
    }
  }
}

</style>