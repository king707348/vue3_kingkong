<template>
  <div class="set-header">
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <div class="header-list">
      <ul>
        <li>首頁</li>
        <li>關於</li>
        <li>資訊</li>
        <li>文章</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const logo = ref("./src/assets/coffee.webp");
</script>

<style lang="scss" scoped>
.set-header {
  display: flex;
  flex: 1 2;
  .logo {
    img {
      width: 50px;
    }
  }
  .header-list {
    ul {
      display: flex;
    }
  }
}
</style>