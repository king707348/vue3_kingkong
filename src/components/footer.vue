<template>
  <footer class="setfooter">
    <div class="logo">
      <img :src="use_logo" alt="" />
    </div>
    <linkList />
  </footer>
</template>

<script setup>
import { ref } from "vue";
import linkList from "./linklist.vue";

defineProps({
  use_logo: String,
});

const num = ref(0);
</script>

<style lang="scss" scoped>
.setfooter {
  position: sticky;
  top: 100%;
  display: flex;
  border-top: 1px solid var(--el-menu-text-color);
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
        justify-content: flex-start;
        gap: 2rem;
      }
    }
  }
}
</style>