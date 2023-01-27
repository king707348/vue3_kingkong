<template>
  <header class="set-header">
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <linkList />
    <div class="emp"></div>
  </header>

</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import linkList from "./linklist.vue";


const logo = ref("./src/assets/coffee.webp");
</script>

<style lang="scss" scoped>
.set-header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(#9c9c9c, 0.4);
  background: #fcfcfc;
  z-index: 998;
  .logo {
    display: flex;
    flex: 1;
    justify-content: center;
    img {
      max-width: 75px;
      width: 100%;
    }
  }
  .links-list {
    flex: 8;
    margin: auto;
    :deep{
      ul {
      display: flex;
      justify-content: flex-end;
      width: 50%;
      margin: auto;
      li {
        max-width: 100px;
        width: 100%;
        margin: 0 5%;
        border: 1px solid transparent;
        .el-button {
          :hover{
            // transition: all .5s linear;
          }
          ::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 0;
            background: blue;
          }
          &:hover ::before {
            animation: go 2s linear infinite;
          }
        }
      }
    }
    }
    

    @keyframes go {
      // 右上到左上
      0% {
        top: 0;
        right: 0;
        width: 0;
        height: 2px;
      }
      25% {
        top: 0;
        right: 90%;
        width: 100%;
        height: 2px;
      }
      // 左上到左下
      26% {
        top: 0;
        right: 90%;
        width: 2px;
        height: 2px;
      }
      50% {
        top: 90%;
        right: 90%;
        width: 2px;
        height: 100%;
      }
      // 左下到右下
      51% {
        top: 90%;
        right: 90%;
        width: 100%;
        height: 2px;
      }
      75% {
        top: 90%;
        right: 0;
        width: 2px;
        height: 2px;
      }
      // 右下到左上
      76% {
        top: 90%;
        right: 0;
        width: 2px;
        height: 100%;
      }
      100% {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
      }
    }
  }
  .emp {
    flex: 1;
  }
}
</style>