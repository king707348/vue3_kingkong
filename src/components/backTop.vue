<template>
  <div class="back-to-top" :style="scrollNum" @click="backTop">
    <el-icon><Top /></el-icon>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const scrollNum = reactive({
  opacity: 0,
  display: "none",
});

// 滾動事件
const scrollOpt = () => {
  if (scrollNum.opacity < 1) {
    scrollNum.opacity += 0.1;
    if (scrollNum.opacity >= 1) {
      scrollNum.opacity = 1;
    }
  } else {
    // 滾動停止
    clearInterval(setTime);
  }
};
// 滾動開始
console.time("scroll時間")
const setTime = setInterval(scrollOpt, 100);
console.timeEnd("scroll時間")

const scrollEvt = () => {
  if (window.scrollY > 100) {
    scrollNum.display = "flex";
    scrollOpt();
    setTime
  } else {
    scrollNum.opacity = 0;
    scrollNum.display = "none";
  }
};

const backTop = () => {
  console.time('backTop')
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.timeEnd('backTop')
};


window.addEventListener("scroll", () => {
  scrollEvt();
});
</script>

<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  right: 2%;
  bottom: 4%;
  display: flex;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  .el-icon {
    position: absolute;
    position: relative;
    font-size: 2rem;
    svg {
    }
  }
  :hover svg {
    position: absolute;
    top: 0;
    animation: toTop 1s linear infinite;
  }
}
@keyframes toTop {
  0% {
    top: 0;
  }
  50% {
    top: -100%;
  }
  51% {
    top: 100%;
  }
  100% {
    top: 0;
  }
}
</style>