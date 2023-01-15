<template>
  <div class="set-header">
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <div class="header-list">
      <ul>
        <li>
          <router-link to="/">
            <el-button type="primary" link>首頁</el-button>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <el-button type="primary" link> 關於 </el-button>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <el-button type="primary" link>資訊</el-button>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <el-button type="primary" link>文章</el-button>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="emp"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const logo = ref("./src/assets/coffee.webp");
</script>

<style lang="scss" scoped>
.set-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(#9c9c9c, 0.4);
  .logo {
    display: flex;
    flex: 1;
    justify-content: center;
    img {
      width: 60px;
    }
  }
  .header-list {
    flex: 9;
    margin: auto;
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
          position: relative;
          padding: 0.8rem 1rem;
          overflow: hidden;
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